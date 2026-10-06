/* NetCom SDR — Decision-maker levels (personas, BANT, meetings) */
window.SDR_LEVELS = {
  cx: {
    key: 'cx',
    label: 'C-Level',
    sub: 'CEO · CTO · CIO · CHRO · CRO · COO',
    rank: 'Exec — 0–60 seconds, no fluff, outcome language',
    focus: ['Business outcomes & ROI', 'Speed to market / transformation', 'Talent retention & competitive moat'],
    pain: ['Flagship initiatives stalled by skill gaps', 'AI spend activated but not producing results', 'Security or audit exposure at board level'],
    authority: 'Full budget authority. Decides vision, delegates execution — expect an immediate hand-off to their VP or Director to “do the deal.”',
    statLines: ['80% of the Fortune 1000 train with us', 'Microsoft Partner of the Year winner', '90-day ROI model on AI adoption'],
    opener: function (ind) {
      return 'Hi {Name}, this is {Your Name} from NetCom Learning. I know ' + ind.label + ' leaders are focused on ' + ind.angle + ' — and the bottleneck your peers tell me about isn\u2019t the technology, it\u2019s workforce readiness.\n\nWe\u2019re the Microsoft training partner who\u2019s helped 80% of the Fortune 1000 build AI-ready teams. I\u2019m not asking for a long meeting — 15 minutes, and I\u2019ll bring a one-page enablement plan with a 90-day ROI model. Is that worth your calendar?';
    },
    bant: {
      B: [
        'When you look at workforce upskilling this fiscal year, is there a committed line item — or is it still a proposal finance is willing to debate before approving?',
        'If we framed a 90-day enablement pilot as risk reduction (audit exposure, stalled AI rollouts) instead of “training,” does that change how the dollars are seen at budget review?',
        'Do funding vehicles you already carry — EdAssist, tuition benefits, or Defense COOL — change how much real cash leaves the P&L for this?'
      ],
      A: [
        'Who formally signs the PO on a company-wide learning initiative, and how far does your endorsement carry a proposal before it needs a second signature?',
        'If you green-light a pilot, would your VP of L&D or the functional VPs own execution — and should I align with them directly to protect your time?',
        'Is there a board or investor metric (retention, cert coverage, AI adoption) that learning would feed — and who needs to see the evidence for that metric to count?'
      ],
      N: [
        'Which live initiative is most at risk from a skill gap right now — AI adoption, cloud scale, or security posture — and what is that gap costing in velocity?',
        'When you look at your last two AI or cloud bets, how much of the shortfall was team capability versus the technology itself?'
      ],
      T: [
        'If this were a board-review-ready proof point by end of quarter, what would success look like on the calendar — and what has to happen in the next 60 days to get there?',
        'Is there an external clock — an audit, an EO milestone like 14110, a product launch — that makes readiness a date-stamped problem rather than a someday problem?'
      ]
    },
    meeting: function () {
      return 'I’ll keep it tight — 15 minutes, one page, a 90-day ROI model. Is Tuesday or Thursday this week better — and if I should loop in your VP or L&D Director to coordinate, just point me at them and I’ll send the invite.';
    },
    followup: 'If the CxO delegates, re-ping the named VP/Director within 24–48h with the one-pager in hand — “aligned with {Name}’s priorities.”'
  },

  vp: {
    key: 'vp',
    label: 'VP / Senior Leader',
    sub: 'VP L&D · VP Sales · VP Engineering · VP IT · SVP',
    rank: 'Senior — 60–90 seconds, impact + metrics, they champion upward',
    focus: ['Measurable impact they can report upward', 'Scaling team capability without headcount', 'Hitting targets & certification deadlines'],
    pain: ['Headcount frozen but the targets aren’t', 'Proving ROI of learning to the CxO', 'Teams behind on cloud/security certs'],
    authority: 'Has real budget + influence. Champions internally, but reports to a CxO — design so they can *sell it upward*.',
    statLines: ['1M+ learners trained', '300+ courses per vendor track', 'Role-based plans ready in days'],
    opener: function (ind) {
      return 'Hi {Name}, {Your Name} with NetCom Learning. Quick one — I see ' + '{Company} is ' + ind.angle + '. VPs in your seat usually tell me the squeeze is scaling team skills fast enough to hit targets without blowing headcount.\n\nWe run authorized Microsoft, AWS and Cisco training — used by a million-plus learners — and I can bring a role-based skilling plan built for your team, not a catalog. 15 minutes this week worth it?';
    },
    bant: {
      B: [
        'For scaling upskilling across your org this year — is budget committed, or a proposal finance still needs to bless?',
        'If headcount is frozen, what would two certified heads’ worth of capability save versus the hires you can’t make this year?',
        'Does your team training budget live under L&D, your department, or per-project — because that changes what I can structure for you?'
      ],
      A: [
        'Whose signature sits above yours on a training PO — and if I hand you a one-page executive summary, can you push it through solo?',
        'If this becomes a pilot, who champions it operationally — a Director of Learning, an IT Director, or someone inside your own team?',
        'When you take a learning proposal to your CxO, what does leadership actually want to see — ROI math, completion proof, or competitive pressure?'
      ],
      N: [
        'What’s the single capability gap most likely to delay a deliverable this quarter — and which team carries that risk?',
        'Between certifications expiring, a launch slipping, or adoption stalling — which one keeps you up at night right now?'
      ],
      T: [
        'What deadline would a certified team actually hit — an audit date, a go-live, a certification renewal cycle — that we could train backward from?',
        'If we started a cohort in the next 30 days, when does your leadership expect to see the first measurable result?'
      ]
    },
    meeting: function () {
      return 'Can I grab 15 minutes Wednesday or Thursday? I’ll bring the role-based plan and a one-line summary you can forward to your leadership the same day — and I’ll work around your calendar.';
    },
    followup: 'Follow up with the one-line exec summary + a case study from a similar {industry} org. Keep the champion in cc — they need ammunition to sell upward.'
  },

  dir: {
    key: 'dir',
    label: 'Director',
    sub: 'Director L&D · IT Director · Director of Security · Program Owner',
    rank: 'Operator — has time for specifics, logistics & curriculum; buys on quality',
    focus: ['Program quality & certification alignment', 'On-time, on-budget delivery', 'Being the hero to their VP'],
    pain: ['Programs with low completion that don’t map to certs', 'Vendors who don’t deliver consistency', 'Audit / compliance requirements'],
    authority: 'Can approve and execute a program; may need finance sign-off. Often the real champion — treat them as the internal seller.',
    statLines: ['2,642 courses · 315 certs across vendors', 'Live dashboards & completion analytics', 'Cohort programs built in days'],
    opener: function (ind) {
      return 'Hi {Name}, {Your Name} with NetCom Learning. Directors of training are usually juggling two problems — low completion rates, and programs that don’t map to certifications.\n\nWe’ve delivered a million-plus learner-hours of authorized training from Cisco, CompTIA, Microsoft and AI CERTs — with live dashboards so you can show leadership real progress. I’d love 15 minutes to compare notes on what’s working in your program and what isn’t. Fair?';
    },
    bant: {
      B: [
        'Which budget line does learning sit under — L&D, departmental, or per-project headcount — and how flexible is it mid-quarter?',
        'If Learning Passport credits or vendor funding (COOL, EdAssist) covered part of the cost, does that change what you can approve?',
        'Is there a per-cohort spend ceiling you work within, or are programs priced on value per head for you?'
      ],
      A: [
        'If I map a learning path to the certifications your leadership cares about, how far can you take it without another signature?',
        'Who signs off at finance, and what does your current approval package look like — what gets it waved through quickly?',
        'Where do you already hold influence — a budget you own, a vendor review, an annual plan — that a program could plug into?'
      ],
      N: [
        'Which role has the widest gap between current skills and what projects need — and is a specific certification the driver?',
        'What was the completion rate on your last program, and what caused the drop-off — scheduling, content, or motivation?',
        'Are you dealing with audit or compliance requirements that training must evidence — HIPAA, DoD 8140, examiner expectations?'
      ],
      T: [
        'Is there a cohort launch window you’re targeting — a fiscal quarter, a renewal cycle, a headcount plan — we should time to?',
        'If we ran a pilot in 30 days with minimal lift from your team, how fast would you need the dashboards before deciding to scale it?'
      ]
    },
    meeting: function () {
      return 'Could I show you a learning-path comparison this week — 15 minutes — and leave you with one page you can hand straight to finance for approval?';
    },
    followup: 'Send the curriculum map + sample schedule within 24 hours of the call. Directors decide on logistics — prove the plan is executable.'
  },

  mgr: {
    key: 'mgr',
    label: 'Manager / Team Lead',
    sub: 'IT Manager · Training Manager · Program Manager · Team Lead',
    rank: 'Hands-on — practical, scheduling-aware, cost-per-head conscious',
    focus: ['Practical, usable skills fast', 'Minimal team downtime', 'Cost per learner & cert pass rates'],
    pain: ['Team not confident with new tools', 'Cert expirations creeping up', 'Training pulling people out of the work week'],
    authority: 'Influences and buys for the team; usually needs above-the-line approval. Make it easy to pitch upward (a pre-approved one-pager).',
    statLines: ['Flexible ILT / vILT / self-paced formats', 'Bite-size modules — no work-week lost', 'Cert-ready learning paths in days'],
    opener: function (ind) {
      return 'Hi {Name}, {Your Name} at NetCom Learning. I’ve been helping IT managers keep teams sharp on ' + ind.tools + ' without sacrificing the work week — instructor-led, virtual or self-paced, so nobody’s out of the office.\n\nI’ll show you exactly how managers in your space are doing it and what it costs. Got 15 minutes this week?';
    },
    bant: {
      B: [
        'For a team this size, is the per-head training budget enough for a small pilot, or does a pilot need above-the-line approval?',
        'If we price a certification track with the exam included, how does that compare to what you’d normally spend per team member?',
        'Is there vendor credit or a subsidy your team can already draw on — Learning Passport, a company tuition benefit?'
      ],
      A: [
        'Who approves a pilot — you, your manager, or procurement — and would you be the one pitching it?',
        'If I hand you a ready-to-approve one-pager, does that remove the friction that usually slows team training down?',
        'Is there an L&D or training budget owner in your org whose name I should align with so the proposal isn’t dead on arrival?'
      ],
      N: [
        'Which tool or exam is your team least confident in right now — and what breaks first when they’re unsure?',
        'What happened the last time a cert expired or a go-live hit an unprepared team — what did that actually cost you?'
      ],
      T: [
        'When does the team need to be genuinely ready — a project kickoff, a go-live date, or an exam window we should target?',
        'If I schedule training entirely outside coverage-loss windows — shift changeover, self-paced modules — does timing stop being a blocker?'
      ]
    },
    meeting: function () {
      return 'Mind if we do a quick 15-minute call this week so you can see how it fits your team’s schedule — no big demo, no catalog dump, just the two or three paths that fit you?';
    },
    followup: 'Send a ready-to-pitch one-pager (their boss can approve from it) + a sample weekly schedule with zero coverage loss.'
  },

  ic: {
    key: 'ic',
    label: 'Individual Contributor / Practitioner',
    sub: 'Engineers · Analysts · IT Pros · Learners · Security Staff',
    rank: 'Hands-on — driven by career growth, cert value and schedule friendliness',
    focus: ['Certifications that move pay and roles', 'Learning that fits around the work week', 'Visible progress they can prove'],
    pain: ['A skill gap holding back their next role', 'Certs lapsing or out of date', 'Training that eats personal time'],
    authority: 'Usually no PO — but strong influence. They trigger requests, hold the ground truth on needs, and often draw on tuition benefits or employer credits.',
    statLines: ['Cert-prep paths across 80+ vendors', 'Self-paced + virtual formats', 'Role-based career maps'],
    opener: function (ind) {
      return 'Hi {Name}, {Your Name} from NetCom Learning. Quick one — I help IT professionals get certified on ' + ind.tools + ' without burning their evenings: instructor-led, virtual, or self-paced modules that fit around the work week.\\n\\nMost people in your seat are exam-ready in a few weeks and the cert moves pay or promotions. Can I show you the path that fits your schedule? 15 minutes?';
    },
    meeting: function () {
      return 'Mind a quick 15-minute call this week? I’ll bring the cert-prep path that fits your current level and the fastest realistic timeline to exam-ready.';
    },
    followup: 'Send the cert-prep path + per-head pricing with the exam included within 24h. Reference their tuition benefit or employer credits if relevant.'
  },

  ldo: {
    key: 'ldo',
    label: 'Procurement / L&D Ops',
    sub: 'L&D Specialists · Training Coordinators · Procurement Buyers',
    rank: 'Process-driver — cares about contracts, compliance, dashboards and approved-vendor lists',
    focus: ['Compliant, audit-proof vendors', 'Clean pricing and contract terms', 'Adoption and completion reporting'],
    pain: ['RFPs and approved-vendor lists eating time', 'Programs with weak evidence of impact', 'Vendor claims vs delivered reality'],
    authority: 'Builds and runs the vendor process; can green-light pilots within mandate, but needs L&D or IT sign-off for larger spend.',
    statLines: ['Audit-ready training reporting', 'Flexible contract models', 'Hosted LMS + analytics'],
    opener: function (ind) {
      return 'Hi {Name}, {Your Name} with NetCom Learning. I’m the vendor who makes your job easier: authorized curricula, audit-ready reporting, one POC, and contract terms that don’t fight finance.\\n\\nFor ' + ind.label + ' orgs we handle the RFP evidence, the dashboards and the renewals. Worth 15 minutes to see the reporting pack before your next vendor decision?';
    },
    meeting: function () {
      return 'Could I show you the reporting pack and same-page contract model this week — 15 minutes — so your next RFP shortlist has one less unknown?';
    },
    followup: 'Send the reporting sample + contract model within 24h. Keep it procurement-friendly: pricing tables, compliance mapping, renewal terms.'
  }
};