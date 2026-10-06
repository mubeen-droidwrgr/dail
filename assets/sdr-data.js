/* NetCom SDR Toolkit — aggregator */
window.SDR = {
  levels: window.SDR_LEVELS,
  industries: window.SDR_INDUSTRIES,
  objections: window.SDR_OBJECTIONS,
  emails: window.SDR_EMAILS,
  levelOrder: ['cx', 'vp', 'dir', 'mgr'],
  industryOrder: ['tech', 'healthcare', 'banking', 'gov', 'manufacturing', 'retail'],
  bantOrder: ['B', 'A', 'N', 'T'],

  /* attach the 10-script voicemail sets to each level */
  init: function () {
    var vms = window.SDR_VMS || {};
    for (var k in vms) {
      if (window.SDR_LEVELS[k]) window.SDR_LEVELS[k].vos = vms[k];
    }
  },

  /* pick top objections for a playbook: industry objection + 2 high-frequency global ones */
  playbookObjections: function (ind, levelKey) {
    var list = [];
    if (ind.objection) {
      list.push({ src: 'industry', label: ind.objection.q, reframe: ind.objection.reframe, resp: ind.objection.resp, follow: ind.objection.follow });
    }
    var always = ['send-email', 'already-vendor'];
    var banDefs = {
      'send-email': { label: '“Just send me an email”', o: this.objections.filter(function (x) { return x.q.indexOf('email') > -1; })[0] },
      'already-vendor': { label: '“We already have a training vendor”', o: this.objections.filter(function (x) { return x.q.indexOf('training vendor') > -1; })[0] }
    };
    always.forEach(function (k) {
      if (banDefs[k] && banDefs[k].o) list.push({ src: 'global', label: banDefs[k].label, reframe: banDefs[k].o.reframe, resp: banDefs[k].o.resp[levelKey], follow: banDefs[k].o.follow });
    });
    return list;
  },

  /* full objection library for the reference section */
  allObjections: function () { return this.objections; },

  placeholders: [
    ['{Name}', 'Prospect’s name'],
    ['{Your Name}', 'Your name'],
    ['{Company}', 'Prospect’s company'],
    ['{Phone}', 'Your direct line'],
    ['{Referrer}', 'Mutual connection who referred you'],
    ['{TheirNews}', 'Their recent news / milestone'],
    ['{TeamArea}', 'Their team / department, e.g., Platform Engineering'],
    ['{Tool}', 'The tool they care about, e.g., Azure, Kubernetes'],
    ['{CertName}', 'The target certification, e.g., AZ-104, CISSP'],
    ['{Topic}', 'The topic of their initiative, e.g., AI transformation'],
    ['{industry}', 'Their industry, e.g., healthcare'],
    ['{Qtr}', 'Target quarter (e.g., Q4)'],
    ['{Weeks}', 'Typical timeline (e.g., 4–6)']
  ]
};
SDR.init();