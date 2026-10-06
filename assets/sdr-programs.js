/* NetCom SDR — Programs / vendor filter.
   The user flow is: decision-maker level → industry → program (vendor).
   Each vendor carries the standing relationship NetCom already has with it
   (the credibility to drop on the call), a hook + bridge for the conversation,
   a stake line, and vendor-specific BANT must-asks. 'any' = no vendor filter. */
window.SDR_PROGRAMS = {
  any: {
    label: 'Any program · broad',
    tools: '',
    relation: '',
    angle: '',
    hook: '',
    bridge: '',
    stake: '',
    bant: { B: [], A: [], N: [], T: [] }
  },

  microsoft: {
    label: 'Microsoft',
    tools: 'Azure · Microsoft 365 · Copilot',
    relation: 'NetCom is Microsoft Partner of the Year 2023 — the authorized channel for Azure, Microsoft 365 and Copilot tracks, delivered by certified instructors.',
    angle: 'the Microsoft estate — Azure, M365 and Copilot — is everywhere, but certified depth rarely keeps pace with the roadmap',
    hook: 'Everyone claims “Microsoft-certified.” The orgs that win are the ones with the cert coverage to prove it in a review or an audit.',
    bridge: 'Before the budget math — which Microsoft workload is moving fastest for you right now: Azure, Microsoft 365, or Copilot?',
    stake: 'If the Enterprise Agreement renews without a certification lane in it, you keep the discount and lose the readiness.',
    bant: {
      B: ['Where does Microsoft training budget sit — IT, L&D, or an Enterprise Agreement line item — and does the EA already include credits?'],
      A: ['Who owns sign-off for Microsoft skills — IT leadership, the Copilot champion, or procurement through the EA?'],
      N: ['Which Microsoft workload is the gap — Azure, Microsoft 365, or Copilot adoption — and what is it costing to not be certified there?'],
      T: ['Is there an EA renewal, a Copilot rollout date, or a certification deadline that pins the timeline?']
    }
  },

  aws: {
    label: 'AWS',
    tools: 'AWS Solutions · DevOps · Security',
    relation: 'NetCom is an authorized AWS Training Partner — official AWS curriculum with Skill Builder access through the authorized channel.',
    angle: 'AWS accounts scale fast, and the certified bench behind them rarely grows in step',
    hook: 'The AWS bill is climbing and the cert coverage is the trailing indicator. That is the exact pattern we reverse for teams like {TeamArea}.',
    bridge: 'Which AWS lane is the pressure point first — Solutions Architect, DevOps, or security?',
    stake: 'Every month a cert gap waits, the account spend grows faster than the team’s ability to control it.',
    bant: {
      B: ['Is AWS upskilling funded from the AWS account budget, training credits, or a separate L&D line?'],
      A: ['Who decides AWS cert coverage — the cloud team lead, engineering leadership, or finance through Skill Builder credits?'],
      N: ['Which AWS cert gap is the pain — Solutions Architect, DevOps, or Security — and where does it stall delivery?'],
      T: ['Is there a migration, a re:Invent follow-on, or an account-renewal date that sets the timeline?']
    }
  },

  cisco: {
    label: 'Cisco',
    tools: 'CCNA · CCNP · CCNP Security · Collaboration',
    relation: 'NetCom is a Cisco Learning Partner — official Cisco curriculum, and Cisco Learning Credits count against the spend.',
    angle: 'network and security teams certify on release cycles, and the coverage slips between renewals',
    hook: 'The network team covers the firewalls; the cert coverage is what an audit or a rollout actually checks. That is where we work.',
    bridge: 'If you looked at your certified coverage on CCNA to CCNP today, which level is thinnest?',
    stake: 'Learning Credits expire against the contract — the budget is already there, it just needs a track scheduled before the renewal.',
    bant: {
      B: ['How many Cisco Learning Credits are on the contract, and do they expire with the renewal?'],
      A: ['Who tracks Cisco certification coverage — the network team lead, or the security officer for the CCNA and CCNP lines?'],
      N: ['Which Cisco track is behind — routing and switching, CCNP Security, or collaboration — and what breaks because of it?'],
      T: ['Does the Cisco contract or Smartnet renewal set the window for spending the Learning Credits?']
    }
  },

  google: {
    label: 'Google Cloud',
    tools: 'Cloud Engineering · Data · AI/ML',
    relation: 'NetCom is an authorized Google Cloud Training Partner — official Google Cloud curriculum through the authorized channel.',
    angle: 'GCP bets land fast, and the platform and data teams behind them are usually a version behind',
    hook: 'The GCP project shipped last quarter; the team that runs it is still on the syllabus from two versions ago. That gap is our lane.',
    bridge: 'Between cloud engineering, data, and AI/ML — which GCP lane is the project currently waiting on?',
    stake: 'A stalled GCP build costs more in idle capacity than the training that would unblock it.',
    bant: {
      B: ['Is Google Cloud training funded through the cloud budget or a separate learning line?'],
      A: ['Who owns GCP skills — the platform team lead, the data and AI lead, or engineering leadership?'],
      N: ['Which GCP area is the gap — Associate Cloud Engineer, Professional Data Engineer, or AI/ML — and what is waiting on it?'],
      T: ['Is there a GCP migration, an ML launch, or a certification window that anchors the timing?']
    }
  },

  aicerts: {
    label: 'AI CERTs™',
    tools: 'AI governance · LLM engineering · AI for the front line',
    relation: 'NetCom is an authorized AI CERTs™ training partner — the certification family that turns AI spend into proven, board-ready capability.',
    angle: 'AI is funded and deployed, but the certified workforce behind it is the weakest line in the governance story',
    hook: 'The board funded the AI; the AI governance review will ask who is trained and accountable. AI CERTs™ is the evidence language for that answer.',
    bridge: 'Is the AI readiness question being asked by your governance lead, your CTO, or the board itself?',
    stake: 'AI governance without certified depth is a position paper — the cert is what makes the readiness provable.',
    bant: {
      B: ['Is there dedicated budget for AI readiness, or would this land inside the existing workforce-training line?'],
      A: ['Who champions AI skills — the AI governance lead, the Chief AI Officer, or the board-mandated readiness owner?'],
      N: ['Which AI capability is board-critical — governance, LLM engineering, or AI for the front line — and what is the readiness gap?'],
      T: ['Is there an AI rollout, a governance deadline, or a funding cycle that sets when readiness has to be proven?']
    }
  },

  isc2: {
    label: 'ISC2',
    tools: 'CISSP · Certified in Cybersecurity · Specialties',
    relation: 'NetCom delivers authorized ISC2 certification training — CISSP, Certified in Cybersecurity and security specialties — with certified instructors.',
    angle: 'security posture reviews keep coming, and the certified depth behind them is the part that answers',
    hook: 'An auditor does not ask if your security team is trained — it asks who holds the certifications. That is the test our tracks prepare people for.',
    bridge: 'If an examiner asked today where your certified security depth sits, which certification line would be thinnest?',
    stake: 'Audit exposure is a date on the calendar; certified depth is the only hedge that holds.',
    bant: {
      B: ['Where does security certification funding sit — compliance budget, IT security line, or the training budget?'],
      A: ['Who owns security cert coverage — the CISO, the security ops manager, or compliance?'],
      N: ['Which ISC2 gap is the risk — CISSP, Certified in Cybersecurity, or a specialty — and what does audit exposure cost?'],
      T: ['Is there an audit, a compliance deadline, or a cert-expiry cycle that sets the timeline?']
    }
  },

  pmi: {
    label: 'PMI',
    tools: 'PMP · CAPM · PDU renewal',
    relation: 'NetCom is a PMI Authorized Training Partner — PMP and CAPM preparation with PDU-earning courses for the whole project function.',
    angle: 'project teams run on certified leads, and PDU renewals and pursuit staffing are where coverage shows',
    hook: 'Pursuits are won on staffing plans, and staffing plans are won on certified PMs. PMP coverage is the line that shows up there.',
    bridge: 'Between certified PMs for pursuits and PDU renewals expiring on the bench — which is the pain right now?',
    stake: 'Each expired PDU is a certified lead the next pursuit cannot put on the staffing page.',
    bant: {
      B: ['Is PMP and project training funded from project budgets, the PMO, or L&D?'],
      A: ['Who owns project capability — the PMO director, delivery leadership, or the functional heads?'],
      N: ['Which gap is real — certified PMs for pursuits, PDU renewals expiring, or delivery overruns from untrained leads?'],
      T: ['Are there pursuit deadlines, PDU-expiry dates, or a Q{Qtr} delivery push that anchors timing?']
    }
  },

  comptia: {
    label: 'CompTIA',
    tools: 'A+ · Network+ · Security+',
    relation: 'NetCom is a CompTIA Authorized Partner — A+, Network+ and Security+ tracks with CE credits for renewal cycles.',
    angle: 'entry and mid-level teams certify on the fundamentals, and the coverage is the career ladder underneath them',
    hook: 'The help desk and the security desk both start at the same certifications. Coverage on CompTIA is the shelf that everything later stands on.',
    bridge: 'Between A+, Network+ and Security+ — which track is the team pulling toward next?',
    stake: 'Uncertified fundamentals show up as slower tickets today and a weaker ladder for the team tomorrow.',
    bant: {
      B: ['Is CompTIA certification covered under the IT training budget or per-department?'],
      A: ['Who tracks cert coverage — the help-desk lead, the security team, or HR for role requirements?'],
      N: ['Which CompTIA track is the gap — A+, Network+, or Security+ — and what in operations is stalling because of it?'],
      T: ['Is there a renewal cycle, an audit of certified staff, or a hiring push that sets when coverage matters?']
    }
  }
};