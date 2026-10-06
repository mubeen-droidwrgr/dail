/* NetCom SDR — LinkedIn follow-up templates, 10 per decision-maker level.
   Each set: conn = connection-request note (LinkedIn caps at 300 chars),
   msg   = the follow-up message you send after they accept (or DM when already connected). */
window.SDR_LI = {
  cx: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — never met, {Your Name} here (NetCom Learning). We help firms like {Company} turn AI and cloud spend into certified, ready teams; 80% of the Fortune 1000 train with us. Useful context — happy to connect.',
      msg: 'Thanks for connecting, {Name}. Most CxOs I talk to carry an AI or cloud in-flight with a workforce readiness gap behind it. If that’s true at {Company}, I have a one-page 90-day plan ready. Worth 15 minutes, or should the one-pager land in your inbox first?'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Saw {TheirNews} — congratulations. When an org makes that move, the workforce-readiness question follows fast. I help with that side of it; happy to connect and share context.',
      msg: 'Congrats on {TheirNews}, {Name}. In the first 90 days the skill-gap question lands quickly. We certify teams on the platforms behind the move — happy to share how peers handled it. Open to 15 minutes?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} and I were talking about how {Company} is approaching {Topic}, and they suggested I reach out. Sharing useful context only, no pitch — happy to connect.',
      msg: 'Quick one, {Name} — {Referrer} mentioned you’re driving {Topic} at {Company}. We built the workforce side of that for 80% of the Fortune 1000. If context helps, I’ll send the one-pager; if not, no hard feelings.'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left you a voicemail at {Company} — thought it might land better here. One-page look at workforce readiness, nine minutes of your day. Happy to connect.',
      msg: 'Following the voicemail, {Name}: the one-pager is ready. Short version — 90-day readiness plan, no lift from your leadership team, one dashboard to track it. If it reads like 15 minutes of value, reply and it’s yours.'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'You may have an email from me in the inbox — easier to skim it here. One page on AI and cloud workforce readiness for {Company}. Happy to connect.',
      msg: '{Name}, the email version is here in case the inbox buried it: a 90-day plan that gets {Company} from AI spend to certified, adopted teams. Want it? Reply and it’s on its way.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “The board-grade version of this question is who’s trained and accountable when the rollout ships — glad you raised it.” Posting that, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. Most CxOs I talk to are one rollout behind on the workforce question. If you ever want the readiness benchmark pack we build for peers, it’s a two-minute reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name} from NetCom Learning — circled back once more. The one-pager is here for whenever ROI math is on the table at {Company}. Happy to connect.',
      msg: '{Name}, second touch and last from me for now. The 90-day readiness one-pager is saved here if Q{Qtr} planning makes it useful. One reply either way and I’m out of your inbox.'
    },
    {
      tag: 'LI 08 · Quarter-end nudge',
      conn: 'With Q{Qtr} closing, {Your Name} from NetCom Learning. Funding decisions happen now — happy to connect and share how peers fund readiness before the line closes.',
      msg: '{Name}, while Q{Qtr} planning is open — most firms lock training spend as risk-reduction here: certified teams, audit readiness, adoption proof. If {Company} is deciding what gets funded, the one-pager lines it up. Want it?'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name} — {Your Name} at NetCom Learning. If readiness isn’t the priority right now, fair call. The one-pager stays with you if that changes. Take care.',
      msg: 'Closing the loop, {Name}. If {Company} is ready on the workforce side, no need to reply. If the next AI or cloud rollout finds you short, the 90-day plan is one message away. Good luck with the year.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping this door open, {Name} — when the readiness conversation becomes a project, I’m a message away. Thanks for your time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. When workforce readiness becomes a board question at {Company}, you know where to find me.'
    }
  ],

  vp: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — {Your Name} from NetCom Learning. I help VPs turn frozen headcount into certified teams: role-based tracks, leadership dashboards, no hires. Happy to connect.',
      msg: 'Thanks, {Name}. When I talk to VPs it’s usually one of two problems: a team a version behind the stack, or certs expiring at the worst time. If that’s true on your side, I’ll send the at-a-glance program map — 15 minutes to read, not a meeting.'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Congrats on {TheirNews} — saw you took {TheirRoleChange}. When a new mandate lands, the team-skills plan usually lags it by a quarter. Happy to connect and trade notes.',
      msg: 'Congrats again, {Name}. In the first 90 days of a role like that, the question becomes which team carries the skill load. We build role-based cert tracks with dashboards leadership can actually read. Want the sample dashboard?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} suggested I reach out — we were talking about how {Company} is approaching {Topic}. Sharing one useful thing, nothing more. Happy to connect.',
      msg: '{Name}, {Referrer} said you’re driving {Topic}. The pattern we see with VPs: capability math beats headcount math when the freeze is on. If you want the staffing-math one-pager, reply and it’s yours.'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left a voicemail — figured the metrics I mentioned would land better in writing. One page on certified capacity without new hires. Happy to connect.',
      msg: 'Following the voicemail, {Name}: the one-pager shows capacity math — two certified heads absorbing the work of a hire you can’t make. If the numbers hold up for your team, the next step is a 15-minute fit check.'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'The email I sent probably read dense — the two-minute version is here: certified capacity, one dashboard, no headcount. Happy to connect.',
      msg: '{Name}, two-minute version of the email: we turn existing bench into certified capacity with leadership-readable dashboards. If you want the sample dashboard before any call, reply and it’s yours.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “The metric that survives a leadership review is capacity, not completions — exactly why dashboards beat attendance.” Posting, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. If you ever need a dashboard that turns cert coverage into a leadership-ready number, the sample is one reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name}, circled back — the capacity one-pager is here whenever the headcount conversation opens at {Company}. Happy to connect.',
      msg: '{Name}, second and last touch for now. The capacity map is saved here if {Company} runs into the “we can’t hire our way out of this” conversation. One reply either way and I’ll leave you alone.'
    },
    {
      tag: 'LI 08 · Quarter-end nudge',
      conn: 'With Q{Qtr} closing, {Your Name} here — the teams who certify before the line closes carry the next quarter. Happy to connect and share how.',
      msg: '{Name}, if Q{Qtr} planning is live: certifying two heads is usually cheaper than explaining a slipped launch to leadership. I’ll send the math if it helps the planning conversation. Reply and it’s yours.'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name}. If the team’s already certified to depth, no need to reply. If it changes, the program map is a message away. Take care.',
      msg: 'Closing the loop, {Name}. If delivery is healthy and certs are current, genuinely no need to reply. If the next launch slips on a skill gap, the plan is still here. Good luck with Q{Qtr}.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping the door open, {Name} — when the bench question comes up, I’m a message away. Thanks for the time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. If {Company} ever needs capacity in a quarter instead of a headcount cycle, you know where to find me.'
    }
  ],

  dir: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — {Your Name} from NetCom Learning. I help Directors run training programs that survive audits: completion dashboards, cert coverage, evidence that holds up. Happy to connect.',
      msg: 'Thanks, {Name}. The complaint I hear from Directors isn’t content — it’s evidence. Programs at 35% completion, audits with no export. If that sounds familiar, the reporting sample is one reply away.'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Congrats on {TheirNews} — saw {TheirRoleChange}. When a program or platform lands, the training-evidence question usually follows. Happy to connect and swap notes.',
      msg: 'Congrats on {TheirNews}, {Name}. If a new program or platform just landed, the hardest question is usually “what’s the evidence?” after week one. We solve that with live dashboards from day one. Want the sample?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} and I were talking about {Company}’s approach to {Topic}, and they pointed me your way. One useful thing, no pitch. Happy to connect.',
      msg: '{Name}, {Referrer} said you own learning programs at {Company}. For Directors, the conversation usually starts with completion rates and audit-ready reporting. If you want the benchmark on both, reply and it’s yours.'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left you a voicemail — the reporting pack I mentioned is described better here. Audit-ready exports, one dashboard. Happy to connect.',
      msg: 'Following the voicemail, {Name}: the reporting pack shows who trained, on what, pass or fail, cert status — one export, ready for any review. If that’s the missing piece, reply and the sample is yours.'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'The email is in your inbox — the skim version is here: completion > 75%, audit-ready evidence, role-aligned certs. Happy to connect.',
      msg: '{Name}, the email had the numbers; here’s the picture: same audience, better structure, completion from 35% to 75%+. If you want the framework behind that, reply and I’ll send the one-pager.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “Completion is a design problem, not a people problem — structure beats motivation.” Posting that, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. If you ever want the case study on fixing a 35% completion program, it’s one reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name}, circled back once. The reporting sample is here for whenever the vendor review opens at {Company}. Happy to connect.',
      msg: '{Name}, second and last touch for now. The reporting sample stays saved here if the next vendor review makes clean evidence matter. One reply either way and I’m out of your queue.'
    },
    {
      tag: 'LI 08 · Cohort-window nudge',
      conn: 'Cohort windows fill on timing, not budget — {Your Name} here. If {Company} has a learning window open, happy to connect and share how to protect it.',
      msg: '{Name}, if a cohort or fiscal window is open at {Company}: the two things that kill programs are procurement timing and completion drops. We fix both. Want the planning one-pager?'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name}. If the vendor list is settled for this cycle, no need to reply. The comparison pack stays with you. Take care.',
      msg: 'Closing the loop, {Name}. If learning programs are healthy and evidence is audit-ready, no reply needed. If a review changes that, the pack is still here. Good luck with the cycle.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping the door open, {Name} — when the next program or review cycle starts, I’m a message away. Thanks for the time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. If {Company} ever needs program evidence in an afternoon instead of a scramble, you know where to find me.'
    }
  ],

  mgr: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — {Your Name} from NetCom Learning. I help managers get teams certified without losing coverage: training that fits shift patterns and schedules. Happy to connect.',
      msg: 'Thanks, {Name}. Managers tell me training fails on one thing: coverage. Ours runs around shifts — virtual, self-paced, exam at the end. Want the shift-friendly schedule sample?'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Congrats on {TheirNews} — a new {Topic} on the team usually means a skills gap in a few weeks. Happy to connect and share how peers handle it.',
      msg: 'Congrats on {TheirNews}, {Name}. When a new tool or project lands with no runway, the first casualty is confidence. We run {Weeks}-week readiness paths that fit around the work week. Want the schedule?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} said your team’s been stretched on {Topic} — they pointed me your way with one useful thing to share. Happy to connect.',
      msg: '{Name}, {Referrer} mentioned your team on {Topic}. The fix that works for managers: a cert path that ends before the deadline without pulling people off the schedule. Want to see the plan?'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left a voicemail — the schedule-respecting path looks better in writing. Up-skilling with zero coverage loss. Happy to connect.',
      msg: 'Following the voicemail, {Name}: a {Weeks}-week path, zero coverage loss, exam included. If that fits your team, reply and I’ll send the exact schedule.'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'The email should be in your inbox — the short version is here: certified team, no uncovered shifts, exam included. Happy to connect.',
      msg: '{Name}, short version of the email: team cert-ready in {Weeks} weeks, scheduled around shifts, exam in the per-head price. If that works for your team, reply and I’ll tailor the rota.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “Training dies on coverage, not content — the schedule is the curriculum.” Posting that, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. If you ever want the shift-friendly training plan managers swear by, it’s one reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name}, circled back once. The shift-friendly schedule is here whenever the team has a go-live or exam window. Happy to connect.',
      msg: '{Name}, second and last touch for now. The schedule sample stays saved if your next go-live finds the team short. One reply either way and I’m out of your inbox.'
    },
    {
      tag: 'LI 08 · Expiry / go-live nudge',
      conn: 'If a {CertName} window or go-live is on the calendar, {Your Name} here — expiries cost more in scrambling than prep. Happy to connect and share the countdown plan.',
      msg: '{Name}, if the team has a {CertName} window or go-live coming, counting backward is the trick: exam-ready before the date, prep on-shift. Want the countdown schedule?'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name}. If the team’s already solid on {Topic}, no need to reply. The plan stays saved. Take care.',
      msg: 'Closing the loop, {Name}. If the team is confident and certs are current, no reply needed. If the next go-live finds them less ready than you’d like, the plan is still here.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping the door open, {Name} — when the team has its next training window, I’m a message away. Thanks for the time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. When the team needs certs without the chaos, you know where to find me.'
    }
  ],

  ic: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — {Your Name} from NetCom Learning. I help IT professionals get certified on {CertName} without burning evenings. If that’s useful to you, happy to connect.',
      msg: 'Thanks, {Name}. The people I help are usually one cert away from the role they want, stalled by scheduling. If {CertName} is on your list, the path that fits your week is one reply away.'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Congrats on {TheirNews} — saw {TheirRoleChange}. If {CertName} is on your radar for the next step, happy to connect and share the path.',
      msg: 'Congrats on {TheirNews}, {Name}. If the next role asks for {CertName}, the fastest path is usually self-paced around your week, exam booked up front. Want the roadmap?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} mentioned you’re working toward {CertName} — they suggested I reach out with the prep path. Happy to connect.',
      msg: '{Name}, {Referrer} said {CertName} is on your list. The path that works: labs, practice exams, repeat the weak spots, book the window. Want the exact sequence?'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left a voicemail — the cert-path detail is easier here. Exam-ready in {Weeks} weeks, fits your schedule. Happy to connect.',
      msg: 'Following the voicemail, {Name}: {Weeks} weeks, exam-ready, evenings intact. If the pacing works for you, reply and I’ll send the weekly plan.'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'The email’s probably in your inbox — the short version is here: {CertName} in {Weeks} weeks, self-paced, exam included. Happy to connect.',
      msg: '{Name}, short version of the email: {Weeks} weeks to exam-ready on {CertName}, around your work week. Want me to check if your employer benefit covers it? One reply.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “Certs move careers when they move first — book the exam, then the study follows.” Posting that, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. If {CertName} or a career step is on your mind, the path that fits your week is one reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name}, circled back once. The cert roadmap is here whenever {CertName} moves up your list. Happy to connect.',
      msg: '{Name}, second and last touch for now. The roadmap stays saved if {CertName} comes up later. One reply either way and I’m out of your inbox.'
    },
    {
      tag: 'LI 08 · Tuition-benefit nudge',
      conn: 'If your employer has a learning or tuition benefit, {Your Name} here — most people leave it unused because nothing’s planned. Happy to connect and map {CertName} to it.',
      msg: '{Name}, quick check: does your employer offer a tuition or learning allowance? Most people leave it unused. If yes, {CertName} often fits inside it. Reply and I’ll map it for you.'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name}. If {CertName} isn’t on your radar this year, fair call. The path stays saved. Take care.',
      msg: 'Closing the loop, {Name}. If the cert isn’t a priority right now, no reply needed. If it comes up, the roadmap is still here. Good luck with the year.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping the door open, {Name} — when the cert conversation becomes a plan, I’m a message away. Thanks for the time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. When you’re ready to book the {CertName} window, you know where to find me.'
    }
  ],

  ldo: [
    {
      tag: 'LI 01 · Connection request (cold)',
      conn: 'Hi {Name} — {Your Name} from NetCom Learning. I’m the training vendor that makes your job easier: one POC, audit-ready reporting, contract terms that don’t fight finance. Happy to connect.',
      msg: 'Thanks, {Name}. The reporting pack is what coordinators usually ask for first: who trained, on what, pass or fail, cert status, one export. Want the sample? No pitch, just the pack.'
    },
    {
      tag: 'LI 02 · Profile trigger — their news',
      conn: 'Congrats on {TheirNews} — saw {TheirRoleChange}. If vendor reviews or renewal cycles sit in your new remit, happy to connect and share the comparison pack.',
      msg: 'Congrats on {TheirNews}, {Name}. If RFP or renewal cycles are in your remit, the comparison pack is ready: same spend, cleaner evidence, one-page. Want it?'
    },
    {
      tag: 'LI 03 · Mutual connection',
      conn: '{Referrer} said you run vendor selection for training — they pointed me your way with the reporting sample. Happy to connect.',
      msg: '{Name}, {Referrer} mentioned you handle training vendors. Peers in that seat use us because the evidence is clean and the contract doesn’t fight finance. Want the sample dashboard?'
    },
    {
      tag: 'LI 04 · Voicemail replay',
      conn: 'Just left a voicemail — the audit-ready export is easier to see than explain. One export: who trained, cert status, completion. Happy to connect.',
      msg: 'Following the voicemail, {Name}: if an auditor asked for training evidence today, our export answers in minutes. That’s the sample. Want it?'
    },
    {
      tag: 'LI 05 · After the email',
      conn: 'The email is in your inbox — the skim version is here: one POC, audit-ready reporting, renewal terms that don’t renegotiate from zero. Happy to connect.',
      msg: '{Name}, two-minute version of the email: one contract, one dashboard, evidence that survives a review. If that upgrades your next vendor decision, reply and the pack is yours.'
    },
    {
      tag: 'LI 06 · Engagement on their post',
      conn: 'Comment I left: “Adoption is proven with data, not claimed in decks — the reporting is the product.” Posting that, then connecting.',
      msg: 'Liked your post on {Topic}, {Name}. If you ever want a live dashboard over a quarterly screenshot, the sample is one reply away.'
    },
    {
      tag: 'LI 07 · Second touch — no reply',
      conn: '{Your Name}, circled back once. The reporting sample is here whenever the vendor review opens. Happy to connect.',
      msg: '{Name}, second and last touch for now. The pack stays saved if the RFP or renewal cycle opens later. One reply either way and I’ll leave you to your queue.'
    },
    {
      tag: 'LI 08 · Fiscal / renewal nudge',
      conn: 'With the fiscal year or renewal cycle closing, {Your Name} here — unused budget evaporates fast. Happy to connect and share how the compliant version works.',
      msg: '{Name}, if a fiscal or renewal window is open: unused training budget evaporates, and rejustifying it next year is its own project. The compliant, reportable version can land inside the window. Want it priced?'
    },
    {
      tag: 'LI 09 · Breakup / last touch',
      conn: 'Last touch from me, {Name}. If the vendor list is settled for this cycle, no need to reply. The pack stays with you. Take care.',
      msg: 'Closing the loop, {Name}. If the approved-vendor list is settled this cycle, no reply needed. If the next review changes things, the pack is still here. Good luck with the cycle.'
    },
    {
      tag: 'LI 10 · Windshield / keep the door open',
      conn: 'Keeping the door open, {Name} — when the next RFP or renewal opens, I’m a message away. Thanks for the time.',
      msg: 'No action needed, {Name} — just keeping the connection warm. When the next vendor review starts, you know where to find me.'
    }
  ]
};