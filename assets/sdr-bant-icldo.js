/* NetCom SDR Toolkit — BANT sets for Individual Contributor and Procurement/L&D Ops levels */
window.SDR_BANT = window.SDR_BANT || {};

SDR_BANT.ic = {
  tech: {
    B: ['Do you have a tuition benefit or employer credits (ESI, ECIF) you can use for certifications?',
        'If a cert costs less than a month of one project reticket, is paying out of pocket still a blocker?'],
    A: ['Is anyone holding you back from picking a cert — or would your manager sign off if the path was mapped?',
        'Do you need manager or HR approval for training, or is this your call to make?'],
    N: ['Which cert in your current role would move your next title or raise the most — and is it current?',
        'Is the gap a missing cert or missing depth — and which one is faster to fix?'],
    T: ['Is there an exam window, renewal, or review season you’d want to be certified before?',
        'If you were exam-ready in {Weeks} weeks, what changes in your role?']
  },
  healthcare: {
    B: ['Does your employer cover certification costs, or is there a tuition-reimbursement program?',
        'Would paying for one cert out of pocket be realistic if employer funds aren’t available?'],
    A: ['Does your unit approve training time, or can you study on your own schedule?',
        'Would you be the one enrolling, or does an education coordinator have to do it?'],
    N: ['Which cert or skill actually changes your day — EHR proficiency, HIPAA security, or a clinical AI tool?',
        'What task eats the most of your day that better training would shrink?'],
    T: ['Is there an audit, credential, or recertification deadline you’re counting down to?',
        'If you could be done in {Weeks} weeks around your shifts, when would you start?']
  },
  banking: {
    B: ['Does the bank pay for certifications, or is there a professional-development allowance?',
        'Would the exam fee and study time fit your own budget this year?'],
    A: ['Do you need compliance or L&D approval before enrolling in a certification program?',
        'Is this your decision, or does your manager need to sign off?'],
    N: ['Which cert strengthens your case — security (ISC2, Zero Trust), data, or the platform your team uses?',
        'What does the next role or promotion on your path actually list as a requirement?'],
    T: ['Is there a licensing, regulatory, or exam window you need to align to?',
        'If you started now, could you be exam-ready before your annual review?']
  },
  gov: {
    B: ['Can you use COOL, 8140, or agency education funds for certifications?',
        'If the course is mapped to your 8140 role, is funding simpler?'],
    A: ['Does your supervisor approve the training, or can you self-enroll through your vehicle?',
        'What does the approval require — a course-to-role mapping?'],
    N: ['Which 8140 role or mission skill is holding back your next step?',
        'What do you keep being assigned that you feel least certified to do?'],
    T: ['Is there a milestone, fiscal-year window, or EO deadline you should be ready for?',
        'If seats are available this quarter, does that work with your schedule?']
  },
  manufacturing: {
    B: ['Does the plant pay for certifications, or is there a skilled-trades fund you can draw on?',
        'If the cert raises your rate or classification, does paying in installments work?'],
    A: ['Does your supervisor approve training time, or can you study between shifts?',
        'Is enrolling your call, or does HR need to process it?'],
    N: ['Which cert changes your role — OT/ICS security, a CAD/PLM tool, or a new automation system?',
        'What are you most stopped by on the floor: a machine you don’t know or a system you don’t understand?'],
    T: ['Is there a requalification date, audit, or new equipment rollout you should be ready for?',
        'If training fits your shift pattern, when could you realistically start?']
  },
  retail: {
    B: ['Does your employer cover courses, or is there a development fund at the district level?',
        'Would a low-cost program on your own time fit your budget?'],
    A: ['Does your store manager approve training, or can you just enroll?',
        'Is your schedule flexible enough that training time is your own call?'],
    N: ['What skills would move you next — merchandising data, e-commerce platforms, or AI-assisted customer service?',
        'What do you most want to be better at that nobody has trained you on?'],
    T: ['Is there a promotion cycle or new-store opening you’d like to be ready for?',
        'If you started during the post-peak lull, when would you finish?']
  },
  insurance: {
    B: ['Does the company pay for licensing and certifications, or is there an education allowance?',
        'Is the exam and study cost realistic for you this year?'],
    A: ['Do you need underwriting or claims leadership to approve enrollment?',
        'Is picking a cert your decision within your track?'],
    N: ['Which credential helps most — actuarial, data, or claims-technology skills?',
        'What is the slowest part of your day that training would make faster?'],
    T: ['Is there a licensing, renewal, or annual-skills window to align to?',
        'If you could be done before your busiest filing cycle, would that help?']
  },
  energy: {
    B: ['Does the company cover operator certifications, or is there a training fund?',
        'If the cert qualifies for NERC CIP or OT training requirements, is the cost already funded?'],
    A: ['Does your supervisor sign off on training, or can you self-register within the site program?',
        'What does approval require — alignment with the site training plan?'],
    N: ['Which credential matters next for your classification — OT security, control systems, or a new digital platform?',
        'What would make you safer or more promotable in your role right now?'],
    T: ['Is there a requalification window, outage season, or control-system rollout to be ready for?',
        'If training runs during the outage window, does that fit your rotation?']
  },
  education: {
    B: ['Does your institution cover professional development, or is there a faculty/staff fund?',
        'Can grant or state funds (WIOA, Perkins) cover your certifications?'],
    A: ['Does your department head approve, or can you self-enroll under central PD?',
        'Is this your decision within your professional-development allowance?'],
    N: ['Which skill changes your day — AI in the classroom, LMS and e-learning tools, or data literacy?',
        'What do students or staff expect from you that you feel least trained for?'],
    T: ['Is there a semester break or accreditation window you’d like to be certified before?',
        'If you trained in the inter-term break, would that fit your calendar?']
  },
  profserv: {
    B: ['Does the firm pay for certifications, or is there a practice development budget?',
        'If the cert lifts you to a higher billable rate, does the firm approve on that math?'],
    A: ['Does the practice lead approve certification time, or can you enroll yourself?',
        'Is choosing which cert your call within your track?'],
    N: ['Which credential boosts your next engagement — cloud, data, or AI certifications?',
        'What do clients keep asking for that you have to put a disclaimer on?'],
    T: ['Is there a staffing plan, big pursuit, or talent review you’d like to be certified for?',
        'If you train between client cycles, when would that be?']
  }
};

SDR_BANT.ldo = {
  tech: {
    B: ['Is this under an existing training contract, or a new line you can pilot within your purchasing mandate?',
        'If we map pricing to your vendor-of-record terms, does that clear your procurement path?'],
    A: ['Can you pilot a vendor within your mandate, or does L&D or IT sign off first?',
        'Who owns the approved-vendor list — and what evidence does onboarding require?'],
    N: ['Which departments have a queue of training requests this quarter — and what’s the weakest evidence on file?',
        'Is the pressure more audit evidence (who trained, certs, completion) or adoption rates?'],
    T: ['Is there an RFP cycle, fiscal-year end, or renewal window we should align to?',
        'If a pilot ran in 30 days with fully compliant reporting, how quickly could you scale it?']
  },
  healthcare: {
    B: ['Does the pilot fund under education, compliance, or a vendor PO you already hold?',
        'If HIPAA annual training is already budgeted, can we attach cert tracks to that line?'],
    A: ['Can you onboard a vendor, or does compliance and clinical leadership sign off?',
        'What evidence does your vendor pipeline require — SSO, reporting, contracts?'],
    N: ['Which facilities or units are newest to a compliant training plan — and what would an audit show today?',
        'Is the gap completion evidence, coverage of HIPAA-required topics, or clinical capacity?'],
    T: ['Is there an audit date or fiscal year end that makes this quarter the right window?',
        'If a pilot covered one facility with audit-ready reporting in 30 days, would that unblock the rest?']
  },
  banking: {
    B: ['Does the pilot fund from compliance or L&D budget — and can you issue a PO within your mandate?',
        'If pricing matches your licensed-vendor terms, does finance clear it faster?'],
    A: ['Can you approve a pilot vendor, or does compliance and IT security need to vet it?',
        'What does vendor due diligence require for your pipeline — questionnaires, references, data handling?'],
    N: ['Which business line has the weakest training evidence — and what would an examiner infer today?',
        'Is the gap cert coverage in security, regulatory training completion, or AI-governance accountability?'],
    T: ['Is there an FFIEC review, GLBA deadline, or fiscal close setting the window?',
        'If a compliant pilot ran end-to-end before that review, could you take it wider after?']
  },
  gov: {
    B: ['Does this ride an existing vehicle (COOL, 8140, GSA, state program), or does it need a new PO?',
        'If courses are pre-approved on your vehicle, can we avoid a new procurement?'],
    A: ['Can you award within your delegation, or does a credentialing board or procurement office sign?',
        'What must an awarded vendor meet — credential mapping, reporting, 508 compliance?'],
    N: ['Which offices have 8140 or Zero Trust requirements they aren’t credentialed for yet?',
        'Is the bottleneck evidence (course-to-role mapping) or actual seat coverage?'],
    T: ['Is there a fiscal-year window, EO deadline, or contract cycle we should hit?',
        'If award happens this quarter with all compliance boxes pre-checked, does that clear the calendar?']
  },
  manufacturing: {
    B: ['Does the site training budget hold vendor PO authority, or does corporate L&D approve?',
        'If courses count toward OSHA/NERC or OT security requirements, are funds pre-allocated?'],
    A: ['Can you onboard and award a training vendor, or does plant and EH&S leadership sign?',
        'What does your vendor add need — insurance, safety orientation, reporting?'],
    N: ['Which plants or shifts have the weakest certification coverage — operators, controls, or OT security?',
        'Is the gap documented certs or actual competency on new systems?'],
    T: ['Is there a production ramp, audit, or shutdown window that sets the schedule?',
        'If a pilot ran during the next planned outage, does that fit your calendar?']
  },
  retail: {
    B: ['Does store training fund from HQ L&D or district budgets — and who has PO authority?',
        'If elearning rides existing onboarding or LMS spend, can we extend it cheaply?'],
    A: ['Can you approve a content vendor, or does HR and IT vet it first?',
        'What does your LMS integration require — SCORM, SSO, reporting?'],
    N: ['Which regions or stores show the weakest completion and the highest turnover?',
        'Is the gap certifiable skills (data, e-commerce) or basic elearning coverage?'],
    T: ['Is there a peak season, platform cutover, or fiscal close we should schedule around?',
        'If a pilot ran in the post-peak trough, could you prove it before next peak?']
  },
  insurance: {
    B: ['Does the pilot fund from division or corporate L&D — and can you issue the PO?',
        'If pricing aligns with your learning-contract terms, does finance clear faster?'],
    A: ['Can you approve a vendor, or does compliance vet training providers first?',
        'What must a vendor prove — course accuracy, reporting, data handling for regulated content?'],
    N: ['Which divisions show the weakest continuing-education evidence — underwriting, claims, or compliance?',
        'Is the gap renewals and licensing, or capability on new data tools?'],
    T: ['Is there a filing cycle, renewal, or annual-skills window setting the date?',
        'If a compliant pilot closed before the next filing cycle, could you expand it after?']
  },
  energy: {
    B: ['Does operator training fund from site budget or corporate training — and who holds PO authority?',
        'If courses map to NERC CIP or OT security training requirements, are funds already allocated?'],
    A: ['Can you approve a vendor, or does engineering and safety leadership vet it first?',
        'What does your vendor record require — compliance mapping, reporting, site safety?'],
    N: ['Which sites or crews show the thinnest certified coverage heading into outage season?',
        'Is the gap documented requalification or depth on new digital systems?'],
    T: ['Is there an outage window, NERC CIP audit, or requalification cycle to schedule against?',
        'If a pilot ran during the next outage window with full reporting, would that de-risk the audit?']
  },
  education: {
    B: ['Does development fund from central HR, grants, or department budgets — and can you issue the PO?',
        'If courses qualify under WIOA or Perkins, can grant funds cover the seats?'],
    A: ['Can you approve a vendor, or does the provost or IT vet it first?',
        'What does vendor onboarding need — accessibility compliance, SSO, reporting?'],
    N: ['Which departments show the weakest staff-development evidence — faculty AI readiness or FERPA security?',
        'Is the gap coverage, completion, or certifiable evidence for accreditation?'],
    T: ['Is there an accreditation cycle, semester timeline, or grant deadline we should hit?',
        'If a pilot ran in the inter-term break, could you show results by the accreditation review?']
  },
  profserv: {
    B: ['Does development fund firm-wide or per practice — and can you issue the PO centrally?',
        'If certs lift billable rates, can the pilot be priced against practice margin?'],
    A: ['Can you approve a vendor, or do practice leads and partners vet it?',
        'What does approval require — course catalog, billing model, reporting?'],
    N: ['Which practices show the weakest bench certification — and which pursuits depend on it?',
        'Is the gap cert coverage or quality of evidence when a pursuit needs certified depth?'],
    T: ['Is there a staffing plan, pipeline season, or talent review setting the window?',
        'If a pilot ran between client cycles with clean reporting, could you scale it firm-wide after?']
  }
};