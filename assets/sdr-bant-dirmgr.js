/* NetCom SDR — BANT sets for Director and Manager levels (10 industries each) */
window.SDR_BANT = window.SDR_BANT || {};

SDR_BANT.dir = {
  tech: {
    B: ['Does engineering learning sit under L&D, department, or per-project budget — and how flexible is it mid-quarter?',
        'If vendor credits or program benefits offset the cost, does that expand your ceiling?'],
    A: ['If I map paths to the certs your VP cares about, how far can you take it without another signature?',
        'Who at finance signs off, and what makes an approval fast for you?'],
    N: ['Which role has the widest skill gap against project needs, and is a cert the driver?',
        'What was completion on the last program, and what actually caused the drop-off?'],
    T: ['Is there an exam or cohort window you’re timing to?',
        'If a pilot ran in 30 days with minimal lift, how fast would you need dashboards to scale it?']
  },
  healthcare: {
    B: ['Is training budget held centrally or per department — and do compliance lines sit outside your control?',
        'Can a pilot be funded from shift-coverage or patient-safety savings instead of the training line?'],
    A: ['Who approves above you — the CNO, CIO, or compliance officer — and what evidence do they want?',
        'Can you approve a pilot for one unit or facility on your own?'],
    N: ['Which unit has the biggest compliance or capacity gap — training to HIPAA evidence or to workflow?',
        'Is the leverage reducing clinician admin time (AI) or closing security training deadlines?'],
    T: ['Is there an accreditation or audit date for the units in scope?',
        'If a pilot ran before the next shift-planning cycle, could the schedule absorb it?']
  },
  banking: {
    B: ['Is your training funded from compliance, L&D, or business-line budgets — and which one would move fastest?',
        'Would a per-seat pilot price make finance approval easier than a program-level proposal?'],
    A: ['Whose approval do you need — your VP, compliance, or procurement — and what do they review?',
        'Can you green-light a pilot for one line of business on your own?'],
    N: ['Where is the exposure — exam readiness in security, AI governance across the bank, or branch-layer skill?',
        'What did the last examiner-reviewed gap cost in findings or remediation time?'],
    T: ['Is there an FFIEC review, GLBA deadline, or product launch in the next two quarters?',
        'If a cohort ran end-to-end before that review, does the timing work?']
  },
  gov: {
    B: ['Is training funded through your vehicle (COOL, 8140, GSA, state program) or a separate PO?',
        'If courses are pre-approved on your vehicle, can you avoid a new procurement entirely?'],
    A: ['Who approves above you — your CIO, a credentialing board, or procurement?',
        'Can you award a pilot within your delegation, or does a review board need to bless it?'],
    N: ['Is the gap 8140 role compliance, Zero Trust alignment, or mission-team capability?',
        'When a milestone needed certified roles you lacked, what did the stretch cost?'],
    T: ['Is there an 8140 milestone, EO deadline, or fiscal-year window driving the date?',
        'If a cohort fit inside this quarter’s window, could you schedule it now?']
  },
  manufacturing: {
    B: ['Does the training line live under ops, HR, or plant P&L — and who owns the numbers?',
        'Would piloting on shift-change time reduce the coverage objection to zero?'],
    A: ['Who approves above you — plant manager, ops VP, or HR director?',
        'Can you run a pilot across one or two plants under your own delegation?'],
    N: ['Is the gap OT security depth, automation skills on the floor, or retaining skilled operators?',
        'Where did downtime or rework spike most after the last equipment or system rollout?'],
    T: ['Is there an outage season, audit, or automation rollout window in the next two quarters?',
        'If a floor cohort certified before that window, does the plan slot in?']
  },
  retail: {
    B: ['Is training budgeted at HQ or per district — and can districts opt in individually?',
        'If learning is tied to existing onboarding spend, can a cert track ride that line?'],
    A: ['Who approves above you — the COO, HR, or regional directors — and what do they sign?',
        'Can you pilot in a district or two under your own authority?'],
    N: ['Is the gap data skills in merchandising, AI and omnichannel tools, or frontline retention?',
        'What did shrink, turnover, or service dip cost after last peak with under-skilled staff?'],
    T: ['Is the date set by peak season, a platform cutover, or a new-store rollout?',
        'If a cohort ran in the trough after peak, does the calendar absorb it?']
  },
  insurance: {
    B: ['Is learning budget central or per underwriting and claims division?',
        'If the pilot is priced per seat and billed post-cycle, does that clear finance?'],
    A: ['Who approves above you — the CIO, chief underwriting officer, or L&D leadership?',
        'Can you pilot within one division under your own delegation?'],
    N: ['Is the gap data/AI skills in underwriting and claims, regulatory readiness, or loss-ratio impact?',
        'Where is cycle time longest, and is it a process gap or a skill gap?'],
    T: ['Is there a filing cycle, renewal, or regulatory review in the next two quarters?',
        'If a division cohort certified before that cycle, does timing work?']
  },
  energy: {
    B: ['Is OT training budget under ops, security, or capital projects — and who controls it?',
        'Could a pilot be funded from an avoided-outage or compliance-risk line?'],
    A: ['Who approves above you — plant manager, CISO, or engineering leadership?',
        'Can you pilot within one site or one control-system team on your own?'],
    N: ['Is the gap NERC CIP readiness, OT/ICS security depth, or operator digital skills?',
        'Where is the thin area — sites running short on certified operators or engineers?'],
    T: ['Is there an outage season, NERC CIP audit, or system rollout in the next two quarters?',
        'If operators certified before that window, does the schedule slot in?']
  },
  education: {
    B: ['Is development budget central under HR or split by college and department?',
        'Can grants (WIOA, Perkins, workforce boards) cover faculty and staff tracks?'],
    A: ['Who approves above you — the provost, CIO, or an academic committee?',
        'Can you run a pilot within one department or program on your own?'],
    N: ['Is the gap faculty AI readiness, FERPA and research security, or student-outcome support?',
        'Which discipline is feeling the pressure — enrollment, accreditation, or compliance?'],
    T: ['Is there an accreditation cycle, semester start, or grant deadline driving the date?',
        'If a staff cohort certified before the next semester, does the plan fit?']
  },
  profserv: {
    B: ['Is development budget firm-wide or per practice — and do practices fund their own benches?',
        'If certs are billed at premium rates, can the bench line justify itself?'],
    A: ['Who approves above you — practice leads, managing partners, or firm L&D?',
        'Can you pilot within one practice or one client account on your own?'],
    N: ['Is the gap bench depth in AI and cloud, delivery speed, or winning pursuits against other firms?',
        'Which practice lost or delayed a pursuit for lack of certified depth?'],
    T: ['Is there a pipeline season, staffing plan, or talent review that sets the date?',
        'If a cohort certified before the next pursuit cycle, does timing work?']
  }
};

SDR_BANT.mgr = {
  tech: {
    B: ['Is there a per-head training budget for your team, or would this need approval up the chain?',
        'If the per-head price includes the exam, does that fit what you can approve?'],
    A: ['Can you approve this for your team, or does your director need to sign?',
        'What does your manager need to see to approve a training request from you?'],
    N: ['What is the team dreading most right now — a new tool, an upcoming cert, or a skills gap on a live project?',
        'Where is the team spending the most unproductive time fighting tools they don’t know?'],
    T: ['Is there a project deadline or exam window the team is racing?',
        'If we ran a cohort that fits around the current sprint cycle, when could we start?']
  },
  healthcare: {
    B: ['Does your unit have a training line, or does education fund it centrally?',
        'If training is billable hours-neutral and on-shift, does the budget question mostly disappear?'],
    A: ['Can you approve training for your team, or does the nursing director or IT manager sign?',
        'What does your leadership need to approve release-time or stipend learning?'],
    N: ['Where is the team stretched — HIPAA and security training deadlines, EHR proficiency, or clinical AI tools?',
        'What task eats the most non-patient time each shift?'],
    T: ['Is there an audit date or new system go-live the team has to be ready for?',
        'How soon before that date does training need to finish to feel safe?']
  },
  banking: {
    B: ['Is your team’s training funded from compliance, L&D, or your own cost center?',
        'Would a small pilot stay inside your approval limits?'],
    A: ['Can you approve for your team, or does the compliance or L&D lead sign?',
        'What does your manager want in the request before they’ll approve it?'],
    N: ['Where is the exposure on your team — expiring certs, new regulatory requirements, or pushed-down AI expectations?',
        'Which tool or process is your team least confident in right now?'],
    T: ['Is there a review, exam window, or product launch your team is counting down to?',
        'If we scheduled training around your busiest days, when is the team truly light?']
  },
  gov: {
    B: ['Does your team draw on COOL, 8140, or a training contract, or is it a fresh request?',
        'If courses are already on your training vehicle, can you book seats without a new budget ask?'],
    A: ['Can you approve for your team, or does the agency credentialing office sign?',
        'What does the approval process need — a map of courses to 8140 roles?'],
    N: ['Which 8140 role or mission skill is your team short of, and what is on fire to deliver?',
        'What did the last surge prove the team couldn’t do without help?'],
    T: ['Is there a milestone, EO deadline, or fiscal-year window that sets the date?',
        'If seats are available inside this quarter, can we book before the window closes?']
  },
  manufacturing: {
    B: ['Is there a plant training budget, or does HR or corporate fund certifications?',
        'If training runs across shift changeover, does the cost line stay inside your reach?'],
    A: ['Can you approve for your crew, or does the plant manager sign?',
        'What does leadership need to see to let operators train on the clock?'],
    N: ['Which machines or systems is the crew least confident operating — and where do defects or downtime show it?',
        'Is the gap new automation, safety-critical certs, or OT security awareness?'],
    T: ['Is there a production ramp, audit, or equipment rollout the crew has to be ready for?',
        'What shift pattern would let a cohort train without pulling bodies off the line?']
  },
  retail: {
    B: ['Is store training funded from your district budget or corporate L&D?',
        'If learning rides existing onboarding spend, can we pilot a cert track in your district?'],
    A: ['Can you approve for your stores, or does the regional director sign?',
        'What does your DM need to approve staff development hours?'],
    N: ['What are your teams weak at under pressure — POS and omnichannel tools, merchandising data, or AI-assisted service?',
        'Where did the last peak prove the training gaps?'],
    T: ['Is peak or a platform cutover the date everything has to be ready by?',
        'If we schedule the cohort right after peak, does that window work for you?']
  },
  insurance: {
    B: ['Is your team’s training funded from division L&D or your own budget?',
        'Would a per-seat pilot stay within what you can approve?'],
    A: ['Can you approve for your team, or does underwriting or claims leadership sign?',
        'What does your manager need in the request to approve it?'],
    N: ['What is slowing the team — claims cycle time, new data tools, or underwriting AI adoption?',
        'Which process change are they least trained for right now?'],
    T: ['Is there a filing cycle, renewal, or system upgrade the team has to be ready for?',
        'If training runs between busy filing windows, when is your team lightest?']
  },
  energy: {
    B: ['Is operator training in your site budget or the corporate training organization?',
        'If courses map to NERC CIP or OT security training requirements, are funds already allocated?'],
    A: ['Can you approve for your crew, or does plant or engineering leadership sign?',
        'What does the approval need — a course map to compliance requirements?'],
    N: ['Where is the crew thin — certified operators, OT security awareness, or new digital systems?',
        'What would happen to your team right now if two operators were out?'],
    T: ['Is there an outage window, NERC CIP audit, or control-system rollout setting the date?',
        'Which outage season gives you a realistic window to train without risk?']
  },
  education: {
    B: ['Is staff development funded from your department or central HR?',
        'Can grant or state funds cover the team’s certifications?'],
    A: ['Can you approve for your team, or does the department head or CIO sign?',
        'What does your management need for staff training hours to be approved?'],
    N: ['What are your staff least ready for — new LMS tools, AI in instruction, or cybersecurity duties (FERPA)?',
        'Where did the last semester show the skills gap most clearly?'],
    T: ['Is there a semester start, accreditation visit, or grant deadline to be ready for?',
        'If training lands in the break between terms, does that work for your team?']
  },
  profserv: {
    B: ['Is your team’s development funded from the practice budget or firm L&D?',
        'If certs lift the bench to a billable premium, does the practice approve on that math?'],
    A: ['Can you approve for your team, or does the practice lead or partner sign?',
        'What does the partner need to approve certification time for the team?'],
    N: ['Which client projects are pulling skills the team doesn’t have certified yet?',
        'Where did the last staffing plan scramble because the bench lacked depth?'],
    T: ['Is there a big pursuit, staffing plan, or busy season setting the date?',
        'If the team certifies between client cycles, when is your bench actually light?']
  }
};