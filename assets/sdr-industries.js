/* NetCom SDR Toolkit — Industries */
window.SDR_INDUSTRIES = {
  tech: {
    key: 'tech',
    label: 'Technology / SaaS',
    angle: 'scaling your engineering and cloud teams fast enough to ship — certification deadlines chasing you every quarter',
    tools: 'AWS, Azure and Kubernetes',
    qualifiers: [
      'How many engineers are chasing a cert deadline (AWS / Azure / GCP) this quarter?',
      'What is the real cost when a senior cloud engineer walks out the door — and could upskilling two juniors replace that gap?',
      'Is your architecture or DevSecOps team operating at certified depth, or learning on production?'
    ],
    objection: {
      q: 'We build technology — we train internally.',
      reframe: 'Internal training is great for culture, weak for audit-proof certifications and latest-version vendor content. Position as the accelerator, not the replacement.',
      resp: 'Makes total sense to keep it in-house. Where tech teams usually call us in is official vendor certs — Microsoft, AWS, AI CERTs, ISC2 — plus completion dashboards that survive an audit. Want me to benchmark what that adds for just those tracks?',
      follow: 'If you do, I’ll size a pilot for one team so you can prove it yourself first.'
    },
    vmHook: 'I know how fast this space moves — cert deadlines are real,'
  },
  healthcare: {
    key: 'healthcare',
    label: 'Healthcare',
    angle: 'HIPAA-grade security posture and using AI to take administrative burden off clinicians',
    tools: 'EHR systems, HIPAA security and clinical AI tools',
    qualifiers: [
      'Who owns HIPAA / annual security training compliance — and is it currently an audit worry?',
      'How do you give clinical staff training time without pulling them off patient shifts?',
      'Where could AI shave real administrative hours — scheduling, intake, documentation — and who would champion that change?'
    ],
    objection: {
      q: 'Our staff has no time — they can’t leave the floor.',
      reframe: 'Healthcare = compliance deadlines that never move. The fix is modular, on-shift-friendly learning (mobile, micro-sessions, vILT), not classroom days.',
      resp: 'That’s exactly why healthcare programs run self-paced and virtual — 15-minute modules staff can do between shifts, plus annual HIPAA security training that closes compliance gaps without pull-offs. Can I show you how a health system structures that?',
      follow: 'I’ll send one example calendar — you’ll see zero shift coverage lost.'
    },
    vmHook: 'I know clinicians and IT teams in healthcare are stretched thin,'
  },
  banking: {
    key: 'banking',
    label: 'Banking & Financial Services',
    angle: 'Zero Trust security posture, audit readiness and trusted AI adoption across the bank',
    tools: 'Zero Trust architecture, ISC2/security certs and Microsoft security stack',
    qualifiers: [
      'Where does your bank stand on Zero Trust / FFIEC expectations — and does your security team hold the certs examiners like to see?',
      'Do auditors ever flag gaps in vendor certifications during reviews?',
      'Who owns AI governance for the bank — and what would “trained and accountable” look like for them?'
    ],
    objection: {
      q: 'We already run compliance training — that covers us.',
      reframe: 'Compliance training ≠ capability. Examiners look at security *certifications* and demonstrable skill. Frame as audit armor + skill depth, not extra HR compliance.',
      resp: 'Compliance covers the box-tick; it doesn’t give examiners certified depth. Banks use ISC2, Microsoft Security and Zero Trust certs as measurable proof of readiness. If an examiner asked today where your security depth sits — would you have the answer?',
      follow: 'If that lands, we can map certs to your examiner’s checklist in one sitting.'
    },
    vmHook: 'I know examiners and budgets are both watching,'
  },
  gov: {
    key: 'gov',
    label: 'Government & Public Sector',
    angle: 'Zero Trust adoption, FedRAMP-aware cloud migration and Responsible AI per EO 14110',
    tools: 'Zero Trust architecture and FedRAMP cloud platforms',
    qualifiers: [
      'What procurement vehicle would a training buy run through — GSA schedule, agency contract, or a learning partner agreement?',
      'Is there a budget window or fiscal-year deadline closing soon that training could land in?',
      'Are you drawing on Army/Air Force COOL, DoD, or other authorized credentialing funds?'
    ],
    objection: {
      q: 'Government budgets are locked — no room for training.',
      reframe: 'Funds exist — COOL, DoD education, ESI, ECIF — if the program is credentialed and on-vehicle. The objection is usually process, not money.',
      resp: 'Understood — and that’s why we deliver through existing vehicles and authorized funds: Army/Air Force COOL, DoD programs, Microsoft ESI/ECIF, and state credentialing dollars. If I can show you the funding path first, does the budget question mostly go away?',
      follow: 'I’ll bring one clean funding-path one-pager to the call.'
    },
    vmHook: 'I know mission readiness and tight fiscal windows go hand in hand,'
  },
  manufacturing: {
    key: 'manufacturing',
    label: 'Manufacturing & Industrial',
    angle: 'OT/ICS security, digital-twin and CAD/PLM skills keeping plants competitive',
    tools: 'OT/ICS systems, Autodesk and PTC CAD/PLM',
    qualifiers: [
      'How are you building OT/ICS security skills for plant and controls engineers?',
      'Would modular, self-paced training fit shift schedules better than classroom days?',
      'Which design tool — Autodesk, PTC, Bentley — do your teams use, and where’s the skill gap?'
    ],
    objection: {
      q: 'We can’t take operators off the line.',
      reframe: 'Shift-based learning is precisely where self-paced + vILT wins. No downtime = no objection.',
      resp: 'Agreed — and you don’t have to. This runs self-paced on phones and tablets between shifts, with instructor-led virtual cohorts at shift changeover. Zero line downtime, full cert coverage for the engineers who need it. Want me to sketch the shift-friendly schedule?',
      follow: 'Two-minute sketch, I promise — you’ll see the fit immediately.'
    },
    vmHook: 'I know plant uptime and shift schedules come first,'
  },
  retail: {
    key: 'retail',
    label: 'Retail & Consumer',
    angle: 'data-driven customer experience, e-commerce platforms and seasonal readiness',
    tools: 'analytics dashboards, CRM and e-commerce platforms',
    qualifiers: [
      'What’s your peak-season window where training absolutely can’t happen — so we schedule around it?',
      'Which team powers customer experience — and what tools do they need to master first?',
      'How much of your merchandising or e-commerce analysis is still manual?'
    ],
    objection: {
      q: 'Peak season is coming — not now.',
      reframe: 'Radically agree — and schedule AFTER the peak. Window selling: lock in the post-peak cohort now at this year’s budget.',
      resp: 'Perfect — let’s not touch the peak. We book the upskilling cohort for the week after the season closes, so the team that just survived peak learns how to win the next one — and you lock this year’s rates. What’s the exact date peak ends?',
      follow: 'Get me that date and I’ll hold a post-peak slot and price freeze.'
    },
    vmHook: 'I know peak season owns the calendar,'
  }
};