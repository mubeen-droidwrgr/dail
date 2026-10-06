/* NetCom SDR — The AI gatekeeper playbook.
   Screening AI answers the phone now at many switchboards: it asks for a name,
   a company and a reason, scores the words, and decides routing. These are the
   per-level answers that get the call routed instead of parked. */
window.SDR_GK = {
  cx: {
    intro: function (ind) { return 'Hi — {Your Name}, NetCom Learning. Calling {Name} about the ' + ind.label + ' readiness file — one page, two minutes, then I’m out of your way.'; },
    name: '{Your Name} — NetCom Learning, calling {Name}’s office.',
    company: 'NetCom Learning — the workforce-readiness partner behind 80% of the Fortune 1000.',
    reason: function (ind) { return 'About ' + ind.angle + ' — {Name} asked for the one-page that turns that into a certified workforce, and it’s ready to hand over.'; },
    sales: 'It’s a readiness conversation, not a pitch. If {Name} isn’t the right owner, I’ll take ten minutes with whoever carries the workforce plan — then I’m gone either way.',
    route: 'Straight through to {Name}. The readiness one-pager is already prepared for {Name} — routing me to {Name} makes the call a hand-off, not a screening.',
    vm: 'Voicemail works — have {Name} call me back this week. The note will make the reason obvious in one line. {Your Name}, {Phone}.',
    msg: 'A callback works — but the one-pager is ready now. If it sits on {Name}’s desk before the {Qtr} plan locks, the 15-minute walkthrough this week seals it. {Phone}.',
    block: 'No problem. {Name} owns the {industry} workforce question — if {Name} is tied up, 15 minutes with the chief-of-staff or the L&D lead is equally useful. If the one-pager lands on {Name}’s desk first, even better. {Phone}.',
    cues: [
      'Gate words that route you up: “readiness file”, “one-page”, “brief”, “workforce plan”.',
      'Parked words that earn you a voicemail: “training”, “solutions catalog”, “partnership opportunity”.',
      'Anchor every answer with your name + the deliverable. The AI forwards your opening line to {Name}’s team as the call summary.'
    ]
  },

  vp: {
    intro: function (ind) { return 'Hi — {Your Name}, NetCom Learning. {Name} in {TeamArea} — I have the capacity math for the ' + ind.label + ' capability gap. Two minutes, one page, then I’m gone.'; },
    name: '{Your Name} from NetCom Learning — calling for {Name} in {TeamArea}.',
    company: 'NetCom Learning — we build certified capacity for delivery teams like {Name}’s.',
    reason: function (ind) { return 'The ' + ind.label + ' capability question — ' + ind.angle + ' is the gap, and {Name} decides how to staff it without new hires. I have the capacity math.'; },
    sales: 'It’s a capacity conversation — the headcount version of it. If {Name} isn’t the right owner, point me at whoever runs team capability and I’m gone.',
    route: 'Put me through to {Name} in {TeamArea} — it’s the capability-gap file. The AI routes departmental keywords; {TeamArea} is the key.',
    vm: 'If {Name} can call back this week — the voicemail says exactly which role the plan covers. {Your Name}, {Phone}.',
    msg: 'A callback works, but the plan lands this week. If {Name} wants it queued for the next team review, it’s a 15-minute walkthrough — or five minutes with whoever runs the team upskilling budget. {Phone}.',
    block: 'Understood — when {Name} is out of the meeting, the file has one number in it: capacity without headcount. Have {Name} call {Phone}, and I’ll leave the one-pager with whoever carries the team plan.',
    cues: [
      'Lead with the metric — “capacity”, “coverage”, “certified depth”. VPs route by metric, not by vendor.',
      'Mention {TeamArea} by name; the AI routes by department keyword.',
      'Don’t say “training” — say “capability plan”. It reads as their accountability, not a vendor pitch.'
    ]
  },

  dir: {
    intro: function (ind) { return 'Hi — {Your Name}, NetCom Learning. For {Name} — the ' + ind.label + ' completion-and-evidence sample is ready to send. One file, two minutes, then I’m done here.'; },
    name: '{Your Name} with NetCom Learning — for {Name} on the learning programs side.',
    company: 'NetCom Learning — we run the audit-ready programs Directors like {Name} sign off.',
    reason: function (ind) { return 'About ' + ind.angle + ' — that’s the program gap the completion-and-evidence sample answers, and it’s ready to send for {Name} to review.'; },
    sales: 'It’s about program evidence — completion and certification coverage. If {Name} isn’t the owner, the program coordinator will do fine.',
    route: 'It’s the program report — {Name} asked for the completion-and-evidence sample. Mention “program files” and the call keeps momentum.',
    vm: 'If {Name} is in sessions, the voicemail covers which program gap we’re solving — a callback this week keeps the cohort calendar open. {Your Name}, {Phone}.',
    msg: 'A message works, but cohort windows close on timing. If {Name} is deciding a program cycle, the 15-minute walkthrough this week keeps the window open. {Phone}.',
    block: 'No rush on the call — but if {Name} wants the completion-and-evidence sample before the next cohort decision, the one-pager is ready to send right now. {Name} can route it to whoever holds the vendor decision. {Phone}.',
    cues: [
      '“Evidence”, “completion”, “audit-ready” are routing words; “training” sends you to the procurement queue.',
      'If the AI offers to help, say “program files” and keep momentum; say “course catalog” and you get parked.',
      'Never ask “is this a good time?” in the screening — commit to the reason and let the gate deflect you.'
    ]
  },

  mgr: {
    intro: function (ind) { return 'Hi — {Your Name}, NetCom Learning. For {Name} in {TeamArea} — the {CertName} shift-fit schedule, ready now. One page, then I’m out of your day.'; },
    name: '{Your Name} from NetCom Learning — calling for {Name}, who runs the {TeamArea} team.',
    company: 'NetCom Learning — the certification partner for hands-on teams like {Name}’s.',
    reason: function (ind) { return 'The {CertName} window for {TeamArea} — ' + ind.angle + ' is exactly why the exam calendar matters, and I have the shift-fit schedule prepared.'; },
    sales: 'It’s about the team’s {CertName} window. If {Name} isn’t the right contact, the training coordinator is fine — one question, then I’m out of their day.',
    route: 'It’s the schedule file — {Name} needs the {Weeks}-week plan that fits the team’s shifts. “Schedule” and “exam window” route to the manager.',
    vm: 'If {Name} is on the floor, the voicemail is the schedule question, one line. Callback this week before the {CertName} window closes. {Your Name}, {Phone}.',
    msg: 'A callback is fine, but the {CertName} window has dates attached. If {Name} wants the shift-fit schedule before it closes, it’s a 10-minute walkthrough — or I hand it to whoever covers team scheduling. {Phone}.',
    block: 'If {Name} is mid-shift, the schedule file is the deliverable anyway. I’ll send it over and call back Thursday — anyone who owns the {CertName} window can take the 10 minutes. {Phone}.',
    cues: [
      '“Schedule”, “coverage” and “exam window” land you with the Manager; “training courses” land you with HR.',
      'Comfort the gate with brevity: “one question, then I’m out of {Name}’s day.”',
      'Say the certification by name — {CertName}. The AI recognizes specific certification intents and routes accordingly.'
    ]
  },

  ic: {
    intro: function (ind) { return 'Hi — {Your Name}. I’m checking {Name}’s {CertName} exam window — one minute, and I can leave the roadmap with you if {Name}’s busy.'; },
    name: '{Your Name} — following up with {Name} on the {CertName} path.',
    company: 'I’m with NetCom Learning — the {CertName} prep: labs, exams, the full roadmap.',
    reason: function (ind) { return 'About {Name}’s {CertName} roadmap — ' + ind.label + ' is busy, so exam-first scheduling matters; the roadmap is one screen and the exam-window check takes a minute.'; },
    sales: 'It’s about {Name}’s {CertName} plan. If {Name} isn’t the one studying for it, no problem — I’ll leave the roadmap at reception and go.',
    route: 'It’s for {Name} — a personal certification matter, the {CertName} roadmap. The AI parses certification intent and routes to the person, not the queue.',
    vm: 'If {Name} is busy, I’ll leave the short version: book the exam first, then the study plan builds backward from it. {Your Name}, {Phone}.',
    msg: 'The roadmap is one screen — I can drop it with you today and {Name} can read it at lunch. If {Name} wants the exam window checked against their week, my number is {Phone}.',
    block: 'Totally fine — I’ll leave the {CertName} roadmap with whoever’s at the desk and circle back Friday. If {Name} can take 60 seconds now, the exam-window check is fast. {Phone}.',
    cues: [
      'Practitioner lines gate less aggressively — keep it human, brief, and named.',
      'Say the cert name and “exam window”. The AI parses certification intent and routes to the person, not the queue.',
      'Offer the leave-it-behind option early — gatekeepers release pressure when you offer to drop the info and go.'
    ]
  },

  ldo: {
    intro: function (ind) { return 'Hi — {Your Name}, NetCom Learning. For {Name} — the vendor reporting sample: one export, audit-ready. Two minutes, then I’m gone.'; },
    name: '{Your Name} — NetCom Learning, calling {Name} on the vendor side.',
    company: 'NetCom Learning — the training vendor with the audit-ready reporting: one export, everyone’s records.',
    reason: function (ind) { return 'About ' + ind.angle + ' — the vendor file that fits the renewal paperwork; the reporting sample {Name} needs is one export, ready to send.'; },
    sales: 'It’s about the reporting pack for the training-vendor review. If {Name} isn’t in that process, the coordinator can take the sample file instead.',
    route: 'It’s the vendor file — {Name} needs the reporting sample before the renewal decision. “Vendor”, “renewal” and “reporting” are the routing nouns.',
    vm: 'If {Name} is in review, the voicemail names the file I’m carrying — a callback works if the renewal date allows. {Your Name}, {Phone}.',
    msg: 'The reporting sample is a file, not a pitch — leave it with whoever runs the vendor inbox and {Name} can judge it from the data. My number: {Phone}.',
    block: 'No problem — the deliverable is a report: one export, audit-ready evidence, integrated with the LMS {Company} runs. I’ll send the sample and follow up before the renewal decision. {Phone}.',
    cues: [
      '“Vendor file”, “reporting sample”, “renewal” — procurement AIs route on these nouns. “Great opportunity” gets spam-classified.',
      'Speak evidence first: “one export, everyone’s records, audit-ready”. The AI quotes your sentence in the message it forwards.',
      'Offer the file drop early. The ops gatekeeper’s whole job is reducing inbound noise — remove the noise by making the call a deliverable.'
    ]
  }
};