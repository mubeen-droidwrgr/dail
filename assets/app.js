/* NetCom SDR — app logic */
(function () {
  'use strict';

  var toastEl = document.getElementById('toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg || 'Copied to clipboard';
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 1800);
  }

  /* ---- clipboard (with file:// fallback) ---- */
  function copyText(text, message) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(message); }, function () { legacyCopy(text, message); });
    } else {
      legacyCopy(text, message);
    }
  }
  function legacyCopy(text, message) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast(message); } catch (e) { toast('Copy failed — select & Ctrl+C'); }
    document.body.removeChild(ta);
  }

  function el(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function nl(t) { return esc(String(t)).replace(/\n/g, '<br>'); }

  /* =========================================================
     Pill groups
     ========================================================= */
  function initPills(containerId, items, onChange) {
    var box = el(containerId); if (!box) return;
    box.innerHTML = '';
    items.forEach(function (it, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pill' + (i === 0 ? ' active' : '');
      b.textContent = it.label;
      b.dataset.key = it.key;
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(box.children, function (c) { c.classList.remove('active'); });
        b.classList.add('active');
        onChange();
      });
      box.appendChild(b);
    });
  }
  function activePill(containerId) {
    var box = el(containerId); if (!box) return null;
    var a = box.querySelector('.pill.active');
    return a ? a.dataset.key : null;
  }
  function levelPillItems() {
    return SDR.levelOrder.map(function (k) { return { key: k, label: SDR.levels[k].label }; });
  }
  function industryPillItems() {
    return SDR.industryOrder.map(function (k) { return { key: k, label: SDR.industries[k].label }; });
  }
  function programPillItems() {
    return SDR.programOrder.map(function (k) { return { key: k, label: SDR.programs[k].label }; });
  }
  function subtopicPillItems(pk) {
    var prog = SDR.programs[pk];
    if (!prog || pk === 'any' || !prog.subs) return [];
    var items = [{ key: 'general', label: prog.label + ' · whole suite' }];
    (prog.subsOrder || []).forEach(function (k) {
      if (prog.subs[k]) items.push({ key: k, label: prog.subs[k].label });
    });
    return items;
  }
  /* subtopic row repopulates whenever the program changes; hidden for 'any' */
  function populateSubtopics(progRowId, subRowId, onChange) {
    var box = el(subRowId); if (!box) return;
    var pk = activePill(progRowId);
    var items = subtopicPillItems(pk);
    if (!items.length) { box.style.display = 'none'; box.innerHTML = ''; return; }
    box.style.display = '';
    initPills(subRowId, items, onChange);
  }
  function bindProgramRow(progRowId, subRowId, render) {
    initPills(progRowId, programPillItems(), function () {
      populateSubtopics(progRowId, subRowId, render);
      render();
    });
    populateSubtopics(progRowId, subRowId, render);
  }
  function storyIndPillItems() {
    return SDR.industryOrder.filter(function (k) { return SDR.storyInd[k]; })
      .map(function (k) { return { key: k, label: SDR.industries[k].label }; });
  }

  /* =========================================================
     Accordion toggles (event delegation)
     ========================================================= */
  document.addEventListener('click', function (e) {
    var head = e.target.closest('[data-toggle]');
    if (head) {
      var root = head.closest('.obj') || head.closest('.pb-section');
      if (root) root.classList.toggle('open');
    }
  });

  /* drill flip-to-reveal */
  document.addEventListener('click', function (e) {
    var row = e.target.closest('[data-drill]');
    if (row && e.target.closest('.drill-reveal')) row.classList.toggle('open');
  });

  /* generic copy buttons */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy-target]');
    if (btn) {
      var target = el(btn.getAttribute('data-copy-target'));
      if (target) copyText(target.innerText.trim(), 'Copied to clipboard');
    }
    var full = e.target.closest('[data-copy-text]');
    if (full) copyText(full.getAttribute('data-copy-text'), 'Copied to clipboard');
  });

  /* =========================================================
     Playbook builder (sdr-qualifier.html)
     ========================================================= */
  function renderPlaybook() {
    var lk = activePill('sel-level'), ik = activePill('sel-industry'), pk = activePill('sel-program');
    var lv = SDR.levels[lk], ind = SDR.industries[ik];
    var prog = SDR.programs[pk];
    var progOn = prog && pk !== 'any';
    var sk = activePill('sel-subtopic');
    var sub = progOn && sk && sk !== 'general' && prog.subs ? prog.subs[sk] : null;
    if (!lv || !ind) return;

    var pb = el('playbook'); if (!pb) return;
    var objItems = SDR.playbookObjections(ind, lk).map(function (o, i) {
      return '<div class="obj">' +
        '<div class="obj-head" data-toggle><b>' + esc(o.label) + '</b><span class="chev">▾</span></div>' +
        '<div class="obj-body">' +
        '<div class="reframe">Mindset: ' + esc(o.reframe) + '</div>' +
        '<div class="resp">' + nl(o.resp) + '</div>' +
        (o.follow ? '<div class="resp" style="border-left-color:#22d3ee;margin-top:10px"><b>Next step:</b> ' + esc(o.follow) + '</div>' : '') +
        '</div></div>';
    }).join('');

    function bantItems() {
      return SDR.bantOrder.map(function (letter) {
        var qs = (lv.bant[ik] && lv.bant[ik][letter]) || [];
        return qs.map(function (q) {
          return '<div class="q-item"><span class="badge ' + letter.toLowerCase() + '">' + letter + '</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
        }).join('');
      }).join('');
    }
    function indItems() {
      return (ind.qualifiers || []).map(function (q) {
        return '<div class="q-item"><span class="badge grad">Industry</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
      }).join('');
    }
    function progItems() {
      var src = sub ? sub.bant : prog.bant;
      var label = sub ? sub.label : prog.label;
      return SDR.bantOrder.map(function (letter) {
        var qs = (src && src[letter]) || [];
        return qs.map(function (q) {
          return '<div class="q-item"><span class="badge ' + letter.toLowerCase() + '">' + letter + ' · ' + esc(label) + '</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
        }).join('');
      }).join('');
    }
    function countBant(lv, ik) {
      var n = 0; SDR.bantOrder.forEach(function (L) { n += ((lv.bant[ik] && lv.bant[ik][L]) || []).length; }); return n;
    }
    var totalBant = countBant(lv, ik) + (progOn ? 4 : 0);
    var progTierLabel = sub ? sub.label : (progOn ? prog.label : '');
    var cHook = sub ? sub.hook : (progOn ? prog.hook : '');
    var cBridge = sub ? sub.bridge : (progOn ? prog.bridge : '');
    var cStake = sub ? sub.stake : (progOn ? prog.stake : '');
    var cTitle = progOn ? (prog.label + (sub ? ' · ' + sub.label : '')) : '';
    var cLevelLine = sub && sub.byLevel && sub.byLevel[lk] ? sub.byLevel[lk] : '';

    var vmText = lv.vos && lv.vos[0] ? lv.vos[0].text(ind) : '';

    pb.innerHTML =
      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>The opener · first 30 seconds</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="script-block" id="pb-opener">' + nl(vmOpener(lv, ind)) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-opener">Copy opener</button>' +
          '<p class="small-note" style="margin-top:10px">Delivery: 0–15s = hook with <i>' + esc(ind.angle.slice(0, 60)) + '…</i>, then the credibility line, then the small, hard-to-refuse meeting ask.</p>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Know who you’re talking to · ' + esc(lv.label) + '</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="grid grid-3">' +
            '<div class="card hover-none"><span class="badge">Focus</span><ul class="feature-list" style="margin-top:10px">' + lv.focus.map(function (f) { return '<li><span class="tic">›</span>' + esc(f) + '</li>'; }).join('') + '</ul></div>' +
            '<div class="card hover-none"><span class="badge a">Top pain</span><ul class="feature-list" style="margin-top:10px">' + lv.pain.map(function (f) { return '<li><span class="tic">›</span>' + esc(f) + '</li>'; }).join('') + '</ul></div>' +
            '<div class="card hover-none"><span class="badge grad">Authority</span><p class="small-note" style="margin-top:8px">' + esc(lv.authority) + '</p></div>' +
          '</div>' +
          '<div class="script-block" style="margin-top:12px" id="pb-stats"><span class="who">Stat to drop on the call</span>' + lv.statLines.map(function (s) { return '• ' + esc(s); }).join('<br>') + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-stats">Copy stats</button>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Qualify with BANT · ' + totalBant + ' questions tuned to ' + esc(lv.label) + ' in ' + esc(ind.label) + (progOn ? ' · ' + esc(prog.label) + (sub ? ' · ' + esc(sub.label) : '') : '') + '</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          bantItems() +
          (ind.qualifiers && ind.qualifiers.length ? '<div style="margin-top:14px"><span class="badge grad" style="margin-bottom:8px">' + esc(ind.label) + ' · must-ask</span>' + indItems() + '</div>' : '') +
          (progOn ? '<div style="margin-top:14px"><span class="badge grad" style="margin-bottom:8px">' + esc(progTierLabel) + ' · must-ask</span>' + progItems() + '</div>' : '') +
          '<p class="small-note" style="margin-top:12px">Rule: ask 3–4, never all in a row. Confirm need &amp; timeline first; save budget/authority for after you’ve built value. The ' + (progOn ? esc(progTierLabel) : 'program') + ' must-asks pin the conversation to the vendor lane.</p>' +
        '</div>' +
      '</div>' +

      (progOn ? '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>The ' + esc(cTitle) + ' conversation · leverage what NetCom already has with the vendor</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="resp" style="border-left-color:var(--emerald)"><b>Given our past relationship:</b> ' + esc(prog.relation) + '</div>' +
          '<div class="script-block" style="margin-top:12px" id="pb-prog-hook"><span class="who">The hook · why now</span>' + esc(cHook) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-prog-hook">Copy the hook</button>' +
          '<div class="script-block" style="margin-top:12px" id="pb-prog-bridge"><span class="who">The bridge · first discovery question</span>' + esc(cBridge) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-prog-bridge">Copy the bridge</button>' +
          '<div class="script-block" style="margin-top:12px" id="pb-prog-stake"><span class="who">The stakes · cost of waiting</span>' + esc(cStake) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-prog-stake">Copy the stakes</button>' +
          (cLevelLine ? '<div class="resp" style="border-left-color:#22d3ee;margin-top:12px" id="pb-prog-level"><b>How to play it for ' + esc(lv.label) + ':</b> ' + esc(cLevelLine) + '</div><button type="button" class="btn copy small" data-copy-target="pb-prog-level">Copy the ' + esc(lv.label) + ' angle</button>' : '') +
          '<p class="small-note" style="margin-top:12px">Order for the call: hook → relationship drop → bridge → pick the letter of BANT it opens → ask. The relationship line lands hardest in the first 60 seconds for ' + esc(lv.label) + (sub ? ', and the subtopic angle above tunes it to exactly who you are speaking to.' : '') + '</p>' +
        '</div>' +
      '</div>' : '') +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Objection handling</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          objItems +
          '<p class="small-note" style="margin-top:10px">Full library (12 objections × every level) lives lower on this page.</p>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Get the meeting (& what to do after)</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="script-block" id="pb-meeting"><span class="who">The ask</span>' + nl(lv.meeting()) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-meeting">Copy the ask</button>' +
          '<div class="script-block" style="margin-top:10px" id="pb-follow"><span class="who">Follow-up cadence</span>' + esc(lv.followup) + '</div>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Voicemail (first touch) · full set of 10 on the scripts page</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="script-block" id="pb-vm">' + nl(vmText) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="pb-vm">Copy voicemail</button>' +
          '<p class="small-note" style="margin-top:10px">All 10 scenarios + craft rules live on the <a href="voicemail-scripts.html" class="hl">Voicemail Scripts</a> page.</p>' +
        '</div>' +
      '</div>';

    var fullBtn = el('copy-playbook');
    if (fullBtn) {
      var parts = [];
      parts.push('OPENING CALL — ' + lv.label + ' / ' + ind.label + (progOn ? ' / ' + prog.label + (sub ? ' / ' + sub.label : '') : ''));
      parts.push(lv.vos[0] ? lv.vos[0].text(ind) : vmOpener(lv, ind));
      if (progOn) {
        parts.push(''); parts.push('PROGRAM — ' + (sub ? prog.label + ' · ' + sub.label : prog.label));
        parts.push('PAST RELATIONSHIP: ' + prog.relation);
        parts.push('HOOK: ' + cHook);
        parts.push('BRIDGE: ' + cBridge);
        parts.push('STAKES: ' + cStake);
        if (cLevelLine) parts.push('ANGLE FOR ' + lv.label.toUpperCase() + ': ' + cLevelLine);
      }
      parts.push(''); parts.push('QUALIFYING (BANT — ' + totalBant + ')');
      SDR.bantOrder.forEach(function (L) { ((lv.bant[ik] && lv.bant[ik][L]) || []).forEach(function (q) { parts.push(L + ': ' + q); }); });
      (ind.qualifiers || []).forEach(function (q) { parts.push('IND: ' + q); });
      if (progOn) {
        var bsrc = sub ? sub.bant : prog.bant;
        var ll = sub ? sub.label : prog.label;
        SDR.bantOrder.forEach(function (L) { (bsrc[L] || []).forEach(function (q) { parts.push(L + ' (' + ll + '): ' + q); }); });
      }
      parts.push(''); parts.push('OBJECTIONS');
      SDR.playbookObjections(ind, lk).forEach(function (o) { parts.push(o.label + ' → ' + o.resp); });
      parts.push(''); parts.push('MEETING ASK');
      parts.push(lv.meeting());
      parts.push(''); parts.push('VOICEMAIL (FIRST TOUCH)');
      parts.push(lv.vos[0] ? lv.vos[0].text(ind) : '');
      fullBtn.setAttribute('data-copy-text', parts.join('\n\n'));
    }
  }

  function vmOpener(lv, ind) { return lv.opener(ind); }

  /* =========================================================
     Voicemail page (voicemail-scripts.html) — 10 scripts per level
     ========================================================= */
  function renderVMs() {
    var lk = activePill('vm-level'), ik = activePill('vm-industry');
    var lv = SDR.levels[lk], ind = SDR.industries[ik];
    if (!lv || !ind) return;

    var out = el('vm-output'); if (!out) return;
    var cards = (lv.vos || []).map(function (vm, idx) {
      var text = vm.text(ind);
      var words = text.split(/\s+/).length;
      var secs = Math.round(words / 2.6);
      var rid = 'vm-src-' + idx;
      return '<div class="vm-tile">' +
        '<div class="vm-tag">' + esc(vm.tag) + '</div>' +
        '<div class="script-block" id="' + rid + '">' + nl(text) + '</div>' +
        '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px">' +
          '<button type="button" class="btn copy small" data-copy-target="' + rid + '">Copy</button>' +
          '<span class="vm-dur">~' + secs + 's · ' + words + ' words · speaks at ~150 wpm</span>' +
        '</div>' +
      '</div>';
    }).join('');

    out.innerHTML = '<div class="grid grid-3">' + cards + '</div>' +
      '<div class="grid grid-2" style="margin-top:24px">' +
        '<div class="card hover-none"><h3>The ten-scenario set</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>VM 01–02</b> — first contact, value replay after email</li>' +
          '<li><span class="tic">›</span><b>VM 03</b> — referral / warm intro</li>' +
          '<li><span class="tic">›</span><b>VM 04</b> — trigger on their news</li>' +
          '<li><span class="tic">›</span><b>VM 05–06</b> — deadline &amp; audit angles</li>' +
          '<li><span class="tic">›</span><b>VM 07–08</b> — re-engagement &amp; peer proof</li>' +
          '<li><span class="tic">›</span><b>VM 09–10</b> — breakup and windshield closes</li>' +
        '</ul></div>' +
        '<div class="card hover-none"><h3>Cadence that works</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>Day 0</b> — VM 01, then email 01 within the hour</li>' +
          '<li><span class="tic">›</span><b>Day 2</b> — VM 02 + tailored one-pager email</li>' +
          '<li><span class="tic">›</span><b>Day 5–7</b> — VM 09 or an alternate scenario + LinkedIn note</li>' +
          '<li><span class="tic">›</span><b>Then</b> — rotate scenarios across channels; never 4 voicemails in a row</li>' +
        '</ul></div>' +
      '</div>';
  }

  /* =========================================================
     Email page (emails.html) — 10 templates per level
     ========================================================= */
  function renderEmails() {
    var lk = activePill('sel-email');
    var lv = SDR.levels[lk];
    var set = SDR.emails[lk];
    if (!lv || !set) return;

    var out = el('email-output'); if (!out) return;
    var cards = set.map(function (em, idx) {
      var rid = 'em-body-' + idx;
      var sid = 'em-sub-' + idx;
      var fullPlain = 'Subject: ' + em.subject + '\n\n' + em.body;
      return '<div class="email-tile">' +
        '<div class="email-head"><span class="email-tag">' + esc(em.tag) + '</span>' +
          '<div class="email-actions">' +
            '<button type="button" class="btn copy small" data-copy-text="' + esc('Subject: ' + em.subject) + '">Copy subject</button>' +
            '<button type="button" class="btn copy small" data-copy-text="' + esc(fullPlain) + '">Copy full email</button>' +
          '</div></div>' +
        '<div class="email-subject" id="' + sid + '">' + esc(em.subject) + '</div>' +
        '<div class="email-body" id="' + rid + '">' + nl(em.body) + '</div>' +
      '</div>';
    }).join('');

    out.innerHTML = cards +
      '<div class="grid grid-2" style="margin-top:24px">' +
        '<div class="card hover-none"><h3>Email craft for ' + esc(lv.label) + '</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>One idea per email.</b> A single topic, a single ask — easy to forward, harder to ignore.</li>' +
          '<li><span class="tic">›</span><b>Subject ≤ 8 words.</b> Mobile inboxes truncate around there; lead with their interest, not your company.</li>' +
          '<li><span class="tic">›</span><b>Short paragraphs.</b> 2–3 lines max. White space is eye-stopping.</li>' +
          '<li><span class="tic">›</span><b>One CTA.</b> “Reply and I’ll send the invite” — never three links and a callback.</li>' +
        '</ul></div>' +
        '<div class="card hover-none"><h3>Send cadence</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>Email 01</b> — day of first call, within the hour</li>' +
          '<li><span class="tic">›</span><b>Email 02</b> — after the voicemail, same or next day</li>' +
          '<li><span class="tic">›</span><b>Emails 04–08</b> — trigger-based; send only when their news justifies it</li>' +
          '<li><span class="tic">›</span><b>Email 09</b> — the gracious close; leave the door open</li>' +
        '</ul></div>' +
      '</div>';
  }

  /* =========================================================
     LinkedIn page (linkedin.html) — 10 per level:
     conn = connection-request note (≤300 chars), msg = follow-up message
     ========================================================= */
  function renderLi() {
    var lk = activePill('sel-li');
    var set = SDR.li[lk];
    if (!set) return;
    var out = el('li-output'); if (!out) return;
    var cards = set.map(function (x, idx) {
      var cid = 'li-conn-' + idx, mid = 'li-msg-' + idx;
      var clen = (x.conn || '').length;
      var over = clen > 300 ? ' over' : '';
      return '<div class="li-tile">' +
        '<div class="li-tag">' + esc(x.tag) + '</div>' +
        '<div class="li-label">Connection note<span class="li-count' + over + '">' + clen + ' chars · LinkedIn caps at 300</span></div>' +
        '<div class="script-block" id="' + cid + '">' + nl(x.conn) + '</div>' +
        '<button type="button" class="btn copy small" data-copy-target="' + cid + '">Copy note</button>' +
        '<div class="li-label" style="margin-top:22px">Follow-up message<span class="li-count">send after they accept</span></div>' +
        '<div class="script-block" id="' + mid + '">' + nl(x.msg) + '</div>' +
        '<button type="button" class="btn copy small" data-copy-target="' + mid + '">Copy message</button>' +
      '</div>';
    }).join('');
    out.innerHTML = '<div class="grid grid-2">' + cards + '</div>' +
      '<div class="grid grid-2" style="margin-top:24px">' +
        '<div class="card hover-none"><h3>The ten-set cadence</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>01–03</b> — first touches: cold request, profile trigger, referral</li>' +
          '<li><span class="tic">›</span><b>04–05</b> — replays of voicemail and email you already sent</li>' +
          '<li><span class="tic">›</span><b>06</b> — engagement on their post, before any ask</li>' +
          '<li><span class="tic">›</span><b>07–08</b> — second touch and the quarter-end nudge</li>' +
          '<li><span class="tic">›</span><b>09–10</b> — the breakup and the windshield close</li>' +
        '</ul></div>' +
        '<div class="card hover-none"><h3>Do / Don’t</h3><ul class="feature-list" style="margin-top:12px">' +
          '<li><span class="tic">›</span><b>Do</b> — send the follow-up message within 24 hours of the accept</li>' +
          '<li><span class="tic">›</span><b>Do</b> — name one real detail from their profile or their news</li>' +
          '<li><span class="tic">›</span><b>Do</b> — hand them an easy decline: “one reply either way”</li>' +
          '<li><span class="tic">›</span><b>Don’t</b> — pitch inside the connection note; the message carries it</li>' +
          '<li><span class="tic">›</span><b>Don’t</b> — comment-spam their posts to farm visibility</li>' +
          '<li><span class="tic">›</span><b>Don’t</b> — stack three LinkedIn touches in a week; rotate with VM + email</li>' +
        '</ul></div>' +
      '</div>';
  }

  /* =========================================================
     Stories page (stories.html) — customer stories per level
     ========================================================= */
  function renderStories() {
    var lk = activePill('sel-story');
    var set = SDR.stories[lk];
    if (!set) return;
    var out = el('story-output'); if (!out) return;
    var cards = set.map(function (st, idx) {
      var rid = 'story-src-' + idx;
      return '<div class="story-tile">' +
        '<div class="story-tag">' + esc(st.tag) + '</div>' +
        '<h3>' + esc(st.title) + '</h3>' +
        '<div class="script-block" id="' + rid + '">' + nl(st.story) + '</div>' +
        '<div class="story-when"><span class="story-when-label">When to tell it</span>' + esc(st.when) + '</div>' +
        '<button type="button" class="btn copy small" data-copy-target="' + rid + '">Copy story</button>' +
      '</div>';
    }).join('');
    out.innerHTML = '<div class="grid grid-2">' + cards + '</div>';
  }

  /* =========================================================
     Industry-tagged stories (stories.html) — one per level per industry
     ========================================================= */
  function renderStoryInd() {
    var ik = activePill('sel-story-ind');
    var set = SDR.storyInd[ik];
    if (!set) return;
    var out = el('story-ind-output'); if (!out) return;
    var cards = SDR.levelOrder.map(function (k) {
      var st = set[k]; if (!st) return '';
      var lv = SDR.levels[k];
      var rid = 'story-ind-' + ik + '-' + k;
      return '<div class="story-tile">' +
        '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span class="story-ind-level">' + esc(lv.label) + '</span><div class="story-tag" style="margin-bottom:0">' + esc(st.tag) + '</div></div>' +
        '<h3>' + esc(st.title) + '</h3>' +
        '<div class="script-block" id="' + rid + '">' + nl(st.story) + '</div>' +
        '<div class="story-when"><span class="story-when-label">When to tell it</span>' + esc(st.when) + '</div>' +
        '<button type="button" class="btn copy small" data-copy-target="' + rid + '">Copy story</button>' +
      '</div>';
    }).join('');
    out.innerHTML = '<div class="grid grid-2">' + cards + '</div>';
  }

  /* =========================================================
     Drill mode (sdr-qualifier.html) — random level × industry, flip-to-reveal
     ========================================================= */
  var drillState = null;
  function dealDrill() {
    var box = el('drill'); if (!box) return;
    var lks = SDR.levelOrder, iks = SDR.industryOrder;
    var lk = lks[Math.floor(Math.random() * lks.length)];
    var ik = iks[Math.floor(Math.random() * iks.length)];
    if (drillState && lk === drillState.lk && ik === drillState.ik) {
      lk = lks[(lks.indexOf(lk) + 1 + Math.floor(Math.random() * (lks.length - 1))) % lks.length];
    }
    drillState = { lk: lk, ik: ik };
    var lv = SDR.levels[lk], ind = SDR.industries[ik];
    if (!lv || !ind) return;

    var bant = SDR.bantOrder.map(function (L) {
      var qs = (lv.bant[ik] && lv.bant[ik][L]) || [];
      return qs.map(function (q) {
        return '<div class="q-item"><span class="badge ' + L.toLowerCase() + '">' + L + '</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
      }).join('');
    }).join('');
    var objItems = SDR.playbookObjections(ind, lk).map(function (o) {
      return '<div class="obj">' +
        '<div class="obj-head" data-toggle><b>' + esc(o.label) + '</b><span class="chev">▾</span></div>' +
        '<div class="obj-body"><div class="reframe">Mindset: ' + esc(o.reframe) + '</div><div class="resp">' + nl(o.resp) + '</div></div></div>';
    }).join('');
    var indQs = (ind.qualifiers || []).map(function (q) {
      return '<div class="q-item"><span class="badge grad">Industry</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
    }).join('');
    var bantCount = 0;
    SDR.bantOrder.forEach(function (L) { bantCount += ((lv.bant[ik] && lv.bant[ik][L]) || []).length; });

    box.innerHTML =
      '<div class="drill-card">' +
        '<div class="drill-head"><span class="badge grad">Scenario</span><h3>You’re calling the <b class="hl">' + esc(lv.label) + '</b> at a <b class="hl">' + esc(ind.label) + '</b> org</h3></div>' +
        '<div class="script-block" id="drill-opener">' + nl(vmOpener(lv, ind)) + '</div>' +
        '<button type="button" class="btn copy small" data-copy-target="drill-opener">Copy opener</button>' +
        '<div class="drill-row" data-drill="bant"><button type="button" class="drill-reveal">Flip to reveal BANT · ' + bantCount + ' questions</button><div class="drill-body">' + bant + indQs + '</div></div>' +
        '<div class="drill-row" data-drill="objs"><button type="button" class="drill-reveal">Flip to reveal objection handling</button><div class="drill-body">' + objItems + '</div></div>' +
        '<div class="drill-row" data-drill="ask"><button type="button" class="drill-reveal">Flip to reveal the meeting ask</button><div class="drill-body"><div class="script-block">' + nl(lv.meeting()) + '</div></div></div>' +
      '</div>';
  }

  /* =========================================================
     Gatekeeper page (gatekeeper.html) — beat the screening AI
     then qualify the human. Per level × industry.
     ========================================================= */
  function renderGatekeeper() {
    var lk = activePill('sel-gk-level'), ik = activePill('sel-gk-industry'), pk = activePill('sel-gk-program');
    var lv = SDR.levels[lk], ind = SDR.industries[ik], gk = SDR.gk[lk];
    var prog = SDR.programs[pk];
    var progOn = prog && pk !== 'any';
    var sk = activePill('sel-gk-subtopic');
    var sub = progOn && sk && sk !== 'general' && prog.subs ? prog.subs[sk] : null;
    if (!lv || !ind || !gk) return;
    var out = el('gk-output'); if (!out) return;

    function bantItems() {
      return SDR.bantOrder.map(function (letter) {
        var qs = (lv.bant[ik] && lv.bant[ik][letter]) || [];
        return qs.map(function (q) {
          return '<div class="q-item"><span class="badge ' + letter.toLowerCase() + '">' + letter + '</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
        }).join('');
      }).join('');
    }
    function indItems() {
      return (ind.qualifiers || []).map(function (q) {
        return '<div class="q-item"><span class="badge grad">Industry</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
      }).join('');
    }
    function progItems() {
      var src = sub ? sub.bant : prog.bant;
      var label = sub ? sub.label : prog.label;
      return SDR.bantOrder.map(function (letter) {
        var qs = (src && src[letter]) || [];
        return qs.map(function (q) {
          return '<div class="q-item"><span class="badge ' + letter.toLowerCase() + '">' + letter + ' · ' + esc(label) + '</span><div><span class="q-txt">' + esc(q) + '</span></div></div>';
        }).join('');
      }).join('');
    }
    var bantCount = 0;
    SDR.bantOrder.forEach(function (L) { bantCount += ((lv.bant[ik] && lv.bant[ik][L]) || []).length; });
    if (progOn) bantCount += 4;
    var progTierLabel = sub ? sub.label : (progOn ? prog.label : '');
    var progTierFull = progOn ? (prog.label + (sub ? ' · ' + sub.label : '')) : '';
    var cLevelLine = sub && sub.byLevel && sub.byLevel[lk] ? sub.byLevel[lk] : '';

    function qa(items) {
      return items.map(function (x) {
        return '<div class="q-item" style="align-items:flex-start"><span class="badge grad">AI asks</span>' +
          '<div style="flex:1"><div class="q-txt" style="color:var(--amber)">' + esc(x[0]) + '</div>' +
          '<div class="resp" style="margin-top:8px;border-left-color:var(--emerald)">' + esc(x[1]) + '</div></div></div>';
      }).join('');
    }

    var screening = qa([
      ['“Who’s calling?”', gk.name],
      ['“What company are you with?”', gk.company],
      ['“What’s the reason for your call?”', gk.reason(ind) + (progOn ? ' This one is the ' + prog.label + (sub ? ' track — specifically the ' + sub.label + ' lane' : '') + '.' : '')],
      ['“Is this a sales call?”', gk.sales]
    ]);

    var deflects = qa([
      ['Offer · “I can take a voicemail”', gk.vm],
      ['Offer · “I’ll take a message / they’ll call back”', gk.msg],
      ['Block · “They’re in a meeting / unavailable”', gk.block]
    ]);

    var cues = gk.cues.map(function (c) {
      return '<li><span class="tic">›</span>' + esc(c) + '</li>';
    }).join('');

    out.innerHTML =
      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>The gate script · seven seconds, then you’re routed</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<div class="script-block" id="gk-intro">' + esc(gk.intro(ind)) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="gk-intro">Copy the gate script</button>' +
          '<p class="small-note" style="margin-top:10px">Route it like a colleague: your name, their name, the deliverable you’re carrying — under eight seconds. The AI forwards your opening line to {Name}’s team as the call summary, so that first sentence is your subject line.</p>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>If the AI asks…</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          screening +
          '<div class="resp" style="border-left-color:#22d3ee;margin-top:14px"><b>To get transferred:</b> ' + esc(gk.route) + '</div>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>When the AI deflects…</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          deflects +
          '<p class="small-note" style="margin-top:10px">Every deflection gets the same three anchors: the decision-maker’s name, the deliverable, and a number. If a deflection has those three, it is a route, not a dead-end.</p>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Routing cues for ' + esc(lv.label) + '</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<ul class="feature-list" style="margin-top:6px">' + cues + '</ul>' +
        '</div>' +
      '</div>' +

      '<div class="pb-section open">' +
        '<div class="pb-head" data-toggle><h3>Pre-call BANT · ' + bantCount + ' questions queued for the human' + (progOn ? ' · ' + esc(progTierFull) : '') + '</h3><span class="chev">▾</span></div>' +
        '<div class="pb-body">' +
          '<p class="small-note">The gate gets you through; then you qualify. These are the questions to run the moment the decision-maker says hello — tuned to ' + esc(lv.label) + ' in ' + esc(ind.label) + (progOn ? ', on the ' + esc(progTierFull) + ' track' : '') + '.</p>' +
          bantItems() +
          (ind.qualifiers && ind.qualifiers.length ? '<div style="margin-top:14px"><span class="badge grad" style="margin-bottom:8px">' + esc(ind.label) + ' · must-ask</span>' + indItems() + '</div>' : '') +
          (progOn ? '<div style="margin-top:14px"><div class="resp" style="border-left-color:#22d3ee"><b>Relationship to drop:</b> ' + esc(prog.relation) + '</div>' +
            (cLevelLine ? '<div class="resp" style="border-left-color:#22d3ee;margin-top:10px"><b>How to play it for ' + esc(lv.label) + ':</b> ' + esc(cLevelLine) + '</div>' : '') +
            '<div style="margin-top:12px"><span class="badge grad" style="margin-bottom:8px">' + esc(progTierLabel) + ' · must-ask</span>' + progItems() + '</div></div>' : '') +
          '<div class="script-block" style="margin-top:14px" id="gk-ask"><span class="who">The ask</span>' + nl(lv.meeting()) + '</div>' +
          '<button type="button" class="btn copy small" data-copy-target="gk-ask">Copy the ask</button>' +
        '</div>' +
      '</div>';
  }

  /* =========================================================
     Full objection library (reference)
     ========================================================= */
  function renderObjections() {
    var box = el('objection-library'); if (!box) return;
    box.innerHTML = SDR.objections.map(function (o) {
      var r = SDR.levelOrder.map(function (k) {
        var lv = SDR.levels[k];
        return '<div class="resp" style="margin-top:8px"><b>' + esc(lv.label) + ':</b> ' + nl(o.resp[k]) + '</div>';
      }).join('');
      return '<div class="obj">' +
        '<div class="obj-head" data-toggle><b>' + esc(o.q) + '</b><span class="chev">▾</span></div>' +
        '<div class="obj-body">' +
          '<div class="reframe">Mindset: ' + esc(o.reframe) + '</div>' +
          r +
          (o.follow ? '<div class="resp" style="border-left-color:#22d3ee;margin-top:12px"><b>Next step:</b> ' + esc(o.follow) + '</div>' : '') +
        '</div></div>';
    }).join('');
  }

  function renderPersonas() {
    var box = el('personas'); if (!box) return;
    box.innerHTML = SDR.levelOrder.map(function (k) {
      var lv = SDR.levels[k];
      return '<div class="card persona">' +
        '<span class="p-rank">' + esc(lv.rank) + '</span>' +
        '<h3>' + esc(lv.label) + ' <span class="muted" style="font-weight:500;font-size:13px">' + esc(lv.sub) + '</span></h3>' +
        '<ul>' + lv.focus.map(function (f) { return '<li><span class="tic">›</span>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '</div>';
    }).join('');
  }

  function renderPlaceholders() {
    var box = el('placeholder-table'); if (!box) return;
    box.innerHTML = SDR.placeholders.map(function (p) {
      return '<tr><td><span class="kbd">' + esc(p[0]) + '</span></td><td>' + esc(p[1]) + '</td></tr>';
    }).join('');
  }

  /* =========================================================
     Init
     ========================================================= */
  function init() {
    if (el('sel-level')) {
      initPills('sel-level', levelPillItems(), renderPlaybook);
      initPills('sel-industry', industryPillItems(), renderPlaybook);
      if (el('sel-program')) bindProgramRow('sel-program', 'sel-subtopic', renderPlaybook);
      renderPlaybook();
      renderPersonas();
    }
    if (el('vm-level')) {
      initPills('vm-level', levelPillItems(), renderVMs);
      initPills('vm-industry', industryPillItems(), renderVMs);
      renderVMs();
    }
    if (el('sel-email')) {
      initPills('sel-email', levelPillItems(), renderEmails);
      renderEmails();
    }
    if (el('sel-story')) {
      initPills('sel-story', levelPillItems(), renderStories);
      renderStories();
    }
    if (el('sel-story-ind')) {
      initPills('sel-story-ind', storyIndPillItems(), renderStoryInd);
      renderStoryInd();
    }
    if (el('sel-li')) {
      initPills('sel-li', levelPillItems(), renderLi);
      renderLi();
    }
    if (el('sel-gk-level')) {
      initPills('sel-gk-level', levelPillItems(), renderGatekeeper);
      initPills('sel-gk-industry', industryPillItems(), renderGatekeeper);
      if (el('sel-gk-program')) bindProgramRow('sel-gk-program', 'sel-gk-subtopic', renderGatekeeper);
      renderGatekeeper();
    }
    var deal = el('drill-deal');
    if (deal) { deal.addEventListener('click', dealDrill); dealDrill(); }
    var printBtn = el('print-playbook');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
    renderObjections();
    renderPlaceholders();

    /* scroll reveal */
    var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.06 }) : null;
    document.querySelectorAll('.reveal').forEach(function (rx) {
      if (io) io.observe(rx); else rx.classList.add('in');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();