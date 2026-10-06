/* NetCom SDR — BANT sets, one per industry, for C-Level and VP.
   Each set: B×2, A×2, N×2, T×2 = 8 questions, tuned to role level + industry. */
window.SDR_BANT = window.SDR_BANT || {};

SDR_BANT.cx = {
  tech: {
    B: ['Is the engineering upskilling line committed this fiscal year, or still a proposal finance debates at review?',
        'If a certified two-person cohort absorbed the work of one hire you can’t make, does that change the budget answer?'],
    A: ['Does this need your signature, or does the CTO/CIO own the decision once you endorse the direction?',
        'If I align with your CIO on a one-page AI-readiness plan, does that protect your time and speed the decision?'],
    N: ['Which live product bet is most at risk from a cloud/AI skill gap — and what is that gap costing in ship velocity?',
        'After your last two cloud spends, how much of the shortfall was the platform and how much was team capability?'],
    T: ['Is there a launch, a funding milestone, or an audit that puts a date on readiness?',
        'If this were board-review-ready by end of quarter, what has to happen in the next 60 days?']
  },
  healthcare: {
    B: ['Is clinician and IT security upskilling a committed line this year, or buried inside a broader labor budget?',
        'Would HIPAA-driven security training come out of compliance dollars or your operating margin?'],
    A: ['Who signs a health-system-wide training PO — you, the CIO, or a joint C-suite review?',
        'If we align with your CIO and CISO directly, can you green-light the pilot and leave execution to them?'],
    N: ['Is the gate more security compliance (HIPAA audits) or AI-driven efficiency (admin hours, staffing)?',
        'When clinical staff spend 2+ hours a day on documentation, how much is a system problem versus a skill problem?'],
    T: ['Is there an audit calendar or a staffing-driven project that makes training readiness date-stamped?',
        'If a 90-day pilot lined up with your next compliance review, does that make the decision easier?']
  },
  banking: {
    B: ['Is risk and compliance training funded from the compliance budget — and does AI-governance skilling sit anywhere yet?',
        'If examiner-interpretable vendor certifications avoid a finding, does that justify the spend on its own?'],
    A: ['Who owns learning at board level — CRO, CIO, or CHRO — and whose signature green-lights a bank-wide program?',
        'If a one-page plan maps to FFIEC examiner expectations, can the responsible CxO approve it directly?'],
    N: ['Is your exposure more audit readiness (examiner scrutiny) or AI governance (who is trained and accountable)?',
        'When the last examination signaled workforce gaps, what did that cost in findings or MRAs?'],
    T: ['Does the next FFIEC examination or GLBA/SOX review put a date on readiness?',
        'If a certified Zero Trust plus AI-governance cohort were ready before that review, would that change your quarter?']
  },
  gov: {
    B: ['Can funding run through existing vehicles — Army/Air Force COOL, DoD 8140 dollars, GSA, state credentialing programs?',
        'Is workforce upskilling in this year’s budget, or a new start you’d have to sell to leadership?'],
    A: ['Who approves agency-wide training — you, the CIO, or a formal board like DoD 8140 governing officials?',
        'If courses map to DoD 8140 roles and EO 14110 requirements, does the approval package get easier?'],
    N: ['Is the readiness pressure more compliance (Zero Trust per EO 14028, 8140) or mission capability (AI adoption)?',
        'When a mission initiative stalled for lack of certified staff, what did the delay cost in mission terms?'],
    T: ['Is there an 8140 milestone, EO deadline, or contract gate that trained staff would clear?',
        'If a 90-day cohort certified the roles your next milestone needs, would that clear the date?']
  },
  manufacturing: {
    B: ['Is plant-floor and OT/IT convergence training a capital-line item or an operating expense this year?',
        'If upskilling cuts rework and downtime, does the CFO see it as margin rather than training?'],
    A: ['Who signs for manufacturing-wide training — you, the COO, or plant leaders under a C-suite mandate?',
        'If I align with your COO on a two-plant pilot, can you sponsor it from the top while they execute?'],
    N: ['Is the bottleneck OT security (ICS/SCADA), automation and AI on the floor, or skilled-labor retention?',
        'When a line or plant slowed from skill gaps after automation, what did throughput cost you?'],
    T: ['Is there a plant launch, automation rollout, or audit that makes readiness date-stamped?',
        'If floor leads were certified before the next automation wave, does that change your planning?']
  },
  retail: {
    B: ['Is storefront and HQ upskilling — AI, e-commerce, data — a committed line or still exploratory?',
        'If upskilling cuts turnover and extends seasonal ramp, does the P&L case close itself?'],
    A: ['Who approves company-wide retail training — you, the COO, or the CHRO for store ops roles?',
        'If we size a district-level pilot, can you sponsor it while operations leaders execute?'],
    N: ['Is the pressure more omnichannel and AI adoption, data-driven merchandising, or frontline retention?',
        'When peak ramped under-skilled staff, what did shrink or service dip cost last season?'],
    T: ['Is there a peak season, platform migration, or inventory project that sets the date?',
        'If teams were certified before the next peak or platform cutover, would that change the outcome?']
  },
  insurance: {
    B: ['Is underwriting and claims upskilling — AI, data — a committed line this year or still in review?',
        'If loss-ratio and claims-cycle improvements pay for the training, does finance approve the math?'],
    A: ['Who owns insurer learning at C-level — you, the CIO, or the chief underwriting officer?',
        'If I align with the CIO and chief underwriting officer on a pilot, can you sponsor it from the top?'],
    N: ['Is the bottleneck AI adoption in underwriting and claims, regulatory readiness, or talent retention?',
        'When a claims or underwriting process stalled for lack of data/AI skills, what did cycle time cost?'],
    T: ['Is there a filing cycle, reinsurance renewal, or regulatory review that sets the date?',
        'If a certified cohort were ready before that cycle, does that change your quarter planning?']
  },
  energy: {
    B: ['Is OT/ICS security and grid or plant digitalization training a committed line, or competing with capital projects?',
        'If NERC CIP readiness justifies the spend, does that change how finance sees it?'],
    A: ['Who authorizes energy-sector training — you, the CIO/CISO, or engineering leadership under your mandate?',
        'If I align with your CISO and engineering VPs on a pilot, can you sponsor it from the top?'],
    N: ['Is the gap more OT security (ICS/SCADA), digital workforce skills, or retaining specialized engineers?',
        'When a critical system ran short of certified operators, what did availability or compliance cost?'],
    T: ['Is there a NERC CIP audit, outage season, or system rollout that sets the date?',
        'If a certified ops cohort were ready before the next outage or audit window, does that change the plan?']
  },
  education: {
    B: ['Is faculty and staff digital/AI skilling a committed institutional line, or dependent on grant and department funding?',
        'Can grant or state funding — WIOA, Perkins, workforce boards — change how this is paid for?'],
    A: ['Who approves institution-wide training — the provost, CIO, or a joint academic and ops review?',
        'If we align with your CIO and academic VPs on a pilot, can you sponsor the institution-wide direction?'],
    N: ['Is the pressure more student outcomes and AI in instruction, or cyber readiness (FERPA, research security)?',
        'When digital skills lagged in a program or department, what did enrollment or accreditation risk?'],
    T: ['Is there an accreditation cycle, semester start, or grant deadline that sets the date?',
        'If faculty and staff were AI-ready before the next semester, does that change rollout plans?']
  },
  profserv: {
    B: ['Is client-facing upskilling — AI, cloud, data — committed budget or a per-project expense today?',
        'If upskilling converts to billable rate premiums and faster delivery, does the margin case close?'],
    A: ['Who owns firm-wide learning — you, managing partners, or a CLO under the partnership?',
        'If I align with your practice leads on a pilot, can you sponsor it from the top?'],
    N: ['Is the competitive gap hiring scarce AI/cloud talent, or upskilling the bench you already bill?',
        'When a practice lost a pursuit for lack of certified depth, what did pipeline cost?'],
    T: ['Is there a pipeline season, proposal cycle, or talent review that sets the date?',
        'If a certified cohort filled the bench before the next big pursuit, does that change staffing?']
  }
};

SDR_BANT.vp = {
  tech: {
    B: ['Is the team-skill line for engineering committed, or still a proposal finance needs to bless?',
        'If two certified heads absorb the work of a hire you can’t make, does the budget math change?'],
    A: ['Whose sign-off sits above yours on an engineering training PO — and can a one-pager carry it?',
        'If this becomes a pilot, who champions it operationally — a director or your own staff?'],
    N: ['Which team is a version behind on the stack, and what is that costing in delivery?',
        'Between certs expiring and a launch slipping, which one is closer to breaking?'],
    T: ['What deadline would a certified team unblock — a release, an audit, a renewal cycle?',
        'If we started a cohort in 30 days, when does leadership expect the first measurable result?']
  },
  healthcare: {
    B: ['Is clinical and IT security upskilling budgeted under training, or does it live inside compliance projects?',
        'If funding closed a HIPAA-evidence gap, does that justify the line on its own?'],
    A: ['Whose approval sits above yours — CIO, CISO, or a clinical leader — and what do they need to see?',
        'If this becomes a pilot, who owns it day to day — a training lead or an IT director?'],
    N: ['Is the squeeze more compliance evidence (HIPAA) or capacity (clinicians stretched, admin burden)?',
        'When a department fell behind on security training, what did the audit exposure look like?'],
    T: ['Is there an audit date or a staffing project that makes readiness time-bound?',
        'If a cohort started in 30 days, when does your leadership want to see completion proof?']
  },
  banking: {
    B: ['Is this funded from the compliance budget, a learning line, or per-department spend?',
        'If examiner readiness justifies the cost, does finance sign off faster?'],
    A: ['Whose signature sits above yours on a bank training PO, and what does the approval pack require?',
        'Who would run it operationally — an L&D manager or the security team?'],
    N: ['Is the gap more exam readiness (Zero Trust certs) or AI-governance accountability?',
        'When examiners flagged gaps in security depth, what did that cost in findings?'],
    T: ['Is the next FFIEC review or GLBA deadline a date on the calendar?',
        'If a cohort ended before that review, does that clear the timeline?']
  },
  gov: {
    B: ['Are these funds available via COOL, DoD 8140 training dollars, or only new-start budget?',
        'If the program maps to 8140 roles, does that unlock existing funding?'],
    A: ['Who above you approves — the CIO, an 8140 governing official, or procurement?',
        'If I hand you a package mapped to EO 14110 and 8140, can you push it through?'],
    N: ['Is readiness pressure compliance-driven (Zero Trust, 8140) or mission-driven (AI capability)?',
        'When a mission milestone lacked certified staff, what did that cost in schedule?'],
    T: ['Is there an 8140 milestone or EO deadline that makes certification time-bound?',
        'If a cohort completed before that milestone, does that change your plan?']
  },
  manufacturing: {
    B: ['Is floor and OT upskilling budgeted inside operations or as a training line item?',
        'If upskilling cuts rework and downtime, does finance approve the math?'],
    A: ['Who above you signs — the COO, HR, or plant leadership?',
        'Whose team runs a pilot if approved — an ops training lead or plant managers?'],
    N: ['Is the bottleneck OT security, automation skills on the floor, or skilled-labor gaps?',
        'When a plant slowed after automation, what did throughput cost?'],
    T: ['Is there a plant launch, automation rollout, or audit that makes readiness time-bound?',
        'If a floor-lead cohort were certified before the next rollout, does that change the timeline?']
  },
  retail: {
    B: ['Is upskilling a committed line or a per-region experiment this year?',
        'If training cuts turnover and speeds seasonal ramp, does the P&L close?'],
    A: ['Who above you approves — the COO, CHRO, or regional ops leadership?',
        'Who executes a pilot — district leaders or an L&D manager?'],
    N: ['Is pressure more AI and omnichannel adoption, data skills in merchandising, or frontline retention?',
        'When peak ramped under-skilled staff, what did shrink or service dip cost?'],
    T: ['Is there a peak season, platform cutover, or inventory launch that sets the date?',
        'If stores were ready before peak, does that change your staffing plan?']
  },
  insurance: {
    B: ['Is underwriting and claims upskilling a committed line or a proposal still in review?',
        'If claims-cycle or loss-ratio improvements pay for it, does the CFO back the math?'],
    A: ['Who above you signs — the CIO, chief underwriting officer, or L&D leadership?',
        'Who runs a pilot operationally if approved?'],
    N: ['Is the gap AI adoption in underwriting and claims, regulatory readiness, or retention?',
        'When a process stalled for data or AI skills, what did cycle time cost?'],
    T: ['Is there a filing cycle, renewal, or regulatory review that sets the date?',
        'If a cohort were certified before that cycle, does that change planning?']
  },
  energy: {
    B: ['Is OT/ICS security upskilling committed budget or competing with capital projects?',
        'If NERC CIP readiness justifies spend, does finance approve faster?'],
    A: ['Who above you signs — the CISO, engineering leadership, or ops VPs?',
        'Who executes if approved — an ops training lead or plant engineers?'],
    N: ['Is the gap OT security, digital skills for grid or plant systems, or engineer retention?',
        'When a critical system ran short of certified operators, what did that cost?'],
    T: ['Is there a NERC CIP audit, outage season, or system rollout that sets the date?',
        'If ops were certified before the next outage window, does that change plans?']
  },
  education: {
    B: ['Is faculty and staff skilling committed institutional budget or grant-dependent?',
        'Can grants — WIOA, Perkins, workforce boards — or state funds cover part of it?'],
    A: ['Who above you approves — the provost, CIO, or an academic council?',
        'Who runs it operationally if approved — an L&D team or department chairs?'],
    N: ['Is the gap AI in instruction, cyber readiness (FERPA, research security), or student outcomes?',
        'When a program lagged on digital skills, what did enrollment or accreditation risk?'],
    T: ['Is there an accreditation cycle, semester start, or grant deadline that sets the date?',
        'If staff were AI-ready before the next semester, does that change rollout?']
  },
  profserv: {
    B: ['Is client-facing upskilling committed budget or per-project expense?',
        'If billable rate premiums or delivery speed pay for it, does the P&L approve?'],
    A: ['Who above you signs — practice leads, managing partners, or a CLO?',
        'Who runs a pilot if approved — practice leads or firm L&D?'],
    N: ['Is the gap scarce AI and cloud talent, or upskilling the bench you already bill?',
        'When a practice lost a pursuit for lack of certified depth, what did pipeline cost?'],
    T: ['Is there a pipeline season or talent review that sets the date?',
        'If the bench were certified before the next big pursuit, does that change staffing?']
  }
};