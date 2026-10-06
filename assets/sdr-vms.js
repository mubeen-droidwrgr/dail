/* NetCom SDR Toolkit — Voicemail scripts, 10 per decision-maker level */
window.SDR_VMS = {
  cx: [
    {
      tag: 'VM 01 · First contact',
      text: function (ind) { return 'Hi {Name}, it’s {Your Name} from NetCom Learning. ' + ind.vmHook + ' but the bottleneck I keep hearing at your level is workforce readiness, not the technology.\n\nWe’re the Microsoft training partner used by 80% of the Fortune 1000, and I’ve got a one-page, 90-day ROI plan for {Company}. If that’s worth 60 seconds of your day, call me at {Phone}. Thanks.'; }
    },
    {
      tag: 'VM 02 · Value replay after email',
      text: function () { return 'Hi {Name}, {Your Name} again — the one-pager I mentioned is in your inbox. Short version: one page, a 90-day ROI model, and a starting cohort that needs no lift from your leadership team.\n\nIf it reads like 15 minutes of value, my number is {Phone}. Take care.'; }
    },
    {
      tag: 'VM 03 · Referral / warm intro',
      text: function () { return 'Hi {Name}, {Your Name} at NetCom Learning — {Referrer} and I were talking about how {Company} is approaching AI readiness, and they suggested I reach out to you directly.\n\nWe built the workforce side of this for 80% of the Fortune 1000. Worth 15 minutes to see the one-pager? {Phone}.'; }
    },
    {
      tag: 'VM 04 · Trigger — their news',
      text: function () { return 'Hi {Name}, {Your Name} — I saw {Company}’s announcement around {TheirNews}, and honestly it lands right where we do work: turning AI spend into adopted, certified teams.\n\nI have a plan built for exactly that phase, ready to go. Call {Phone} and I’ll send it over within the hour.'; }
    },
    {
      tag: 'VM 05 · Pre-quarter-end',
      text: function () { return 'Hi {Name}, {Your Name} from NetCom Learning. With Q{Qtr} closing, the CxOs I talk to are deciding what gets funded as a risk-reduction line — certified teams, audit readiness, AI adoption proof.\n\nI can have a cohort structured before your planning closes. Does {Phone} work for a quick call?' ; }
    },
    {
      tag: 'VM 06 · Board-defensibility angle',
      text: function () { return 'Hi {Name}, {Your Name}. If your board graded workforce readiness today, what would they score? Most executives tell me the honest answer is the reason they bring us in — we turn readiness into an auditable, certified number.\n\nIf you want the benchmark pack, call {Phone}.'; }
    },
    {
      tag: 'VM 07 · Re-engagement',
      text: function () { return 'Hi {Name}, {Your Name} with NetCom Learning — we spoke a few weeks back about a 90-day ROI path for {Company}. I dropped the one-pager then; I wanted one more shot at 15 minutes now that the quarter is shaping up.\n\nIf it’s still no, no problem — {Phone} whenever.'; }
    },
    {
      tag: 'VM 08 · Competitive pressure',
      text: function () { return 'Hi {Name}, {Your Name}. Two of your competitors are already running certified AI-readiness programs with us — they’re staffing from within while the talent market tightens.\n\nIf matching that on your own timeline matters, call {Phone} and I’ll share exactly what they’re doing.'; }
    },
    {
      tag: 'VM 09 · Breakup / last touch',
      text: function () { return 'Hi {Name}, last voicemail from me — {Your Name} at NetCom Learning. If AI readiness isn’t the priority for {Company} right now, that’s a fair call from where you sit.\n\nWe’ll leave the one-pager with you and stay out of your inbox. {Phone} if that changes.'; }
    },
    {
      tag: 'VM 10 · Windshield / keep the door open',
      text: function () { return 'Hi {Name}, {Your Name} one final time. No pitch — just this: whenever workforce readiness becomes the bottleneck for {Company}, there’s a partner who has done this for 28 years and can move in weeks, not quarters.\n\nI’ll keep my number off your desk after today, but it’s {Phone}. All the best.'; }
    }
  ],

  vp: [
    {
      tag: 'VM 01 · First contact',
      text: function (ind) { return 'Hi {Name}, {Your Name} with NetCom Learning — quick one, 20 seconds. ' + ind.vmHook + ' but in a headcount freeze, the lever VPs pull is upskilling the team they already have.\n\nWe run authorized Microsoft, AWS and Cisco training used by a million-plus learners, with progress dashboards you can take straight to your leadership. If closing a skills gap this quarter matters, {Phone}. Thanks.'; }
    },
    {
      tag: 'VM 02 · Value replay after email',
      text: function () { return 'Hi {Name}, {Your Name} — the role-based skilling plan for {Company} is in your inbox. Short version: a full certification track for roughly the cost of one mid-level hire, scheduled around delivery, with metrics leadership can actually read.\n\nWorth 15 minutes? {Phone}.'; }
    },
    {
      tag: 'VM 03 · Referral / warm intro',
      text: function () { return 'Hi {Name}, {Your Name} at NetCom Learning. {Referrer} mentioned you’re stretched on {TeamArea} capacity and I’ve built those exact teams before — certified, not just trained.\n\nCan I send you the plan that fits your targets? {Phone}, or hit reply if email’s easier.'; }
    },
    {
      tag: 'VM 04 · Trigger — their news',
      text: function () { return 'Hi {Name}, {Your Name} — saw {Company} rolling out {TheirNews}. That usually lands on a VP’s desk as “how do we scale people fast enough,” and that’s the one problem we exist for.\n\nCall {Phone} and I’ll send the team-skilling map.'; }
    },
    {
      tag: 'VM 05 · Pre-quarter-end',
      text: function () { return 'Hi {Name}, {Your Name} with NetCom Learning. Your Q{Qtr} numbers hinge on capability you may not have yet — that’s the gap our cohorts close before the quarter reads it.\n\nWant the one-page plan before planning closes? {Phone}.'; }
    },
    {
      tag: 'VM 06 · Cert-audit angle',
      text: function () { return 'Hi {Name}, {Your Name}. If your leadership asked you today which certs your team holds and which are about to expire, could you answer in ten minutes?\n\nWe turn that into a clean one-page dashboard. Call {Phone} if you’d like to be ready for that question.'; }
    },
    {
      tag: 'VM 07 · Re-engagement',
      text: function () { return 'Hi {Name}, {Your Name} — we spoke a few weeks back about skilling your team without headcount. I know the timing wasn’t right then.\n\nIf the freeze has since become “figure out how,” I’d love another 15 minutes. {Phone}.'; }
    },
    {
      tag: 'VM 08 · Peer/industry proof',
      text: function () { return 'Hi {Name}, {Your Name}. One data point from relief: peers in your industry are pulling certified capability onto the team internally — same targets, no new headcount.\n\nIf that math is interesting, {Phone} and I’ll send the study.'; }
    },
    {
      tag: 'VM 09 · Breakup / last touch',
      text: function () { return 'Hi {Name}, last one from me — {Your Name}. If the team’s certs are current and targets are green, you don’t need my call and I’ll take the hint.\n\nIf Q{Qtr} closes faster than skill builds, my number is {Phone}.'; }
    },
    {
      tag: 'VM 10 · Windshield / keep the door open',
      text: function () { return 'Hi {Name}, {Your Name} with NetCom Learning, closing the loop for now. When “build capability without headcount” becomes the problem of the quarter, we can have a cohort running in 30 days.\n\nThe door stays open at {Phone}. Best.'; }
    }
  ],

  dir: [
    {
      tag: 'VM 01 · First contact',
      text: function (ind) { return 'Hi {Name}, {Your Name} from NetCom Learning. ' + ind.vmHook + ' so programs have to prove they map to certifications — not just completion counts.\n\nOurs — authorized Cisco, CompTIA, Microsoft and AI CERTs — ship with dashboards leadership can actually see. I’ll send a learning-path comparison; {Phone}, or should I email it?'; }
    },
    {
      tag: 'VM 02 · Value replay after email',
      text: function () { return 'Hi {Name}, {Your Name} — the comparison is out to you. One line: same budget, programs that map to certs, dashboards that survive a review.\n\nIf your current completion rate is south of 50%, that’s the number we fix. 15 minutes? {Phone}.'; }
    },
    {
      tag: 'VM 03 · Referral / warm intro',
      text: function () { return 'Hi {Name}, {Your Name} at NetCom Learning. {Referrer} in L&D mentioned you’re rebuilding the learning path for {TeamArea} — we carry the official curricula and the delivery models to make it stick.\n\nWant the comparison pack? {Phone}.'; }
    },
    {
      tag: 'VM 04 · Trigger — their news',
      text: function () { return 'Hi {Name}, {Your Name} — congrats on {TheirNews}. That usually lands on your desk as “rework the curriculum around {Topic},” and before you rebuild it in-house, see what authorized vendors already ship.\n\nCall {Phone} and I’ll send the map.'; }
    },
    {
      tag: 'VM 05 · Cohort window',
      text: function () { return 'Hi {Name}, {Your Name} with NetCom Learning. Cohort windows are booking for Q{Qtr} and I’d rather you have seats than fight for them later.\n\nIf the team has cert renewals or a launch coming, a 30-day pilot gets you a measured answer fast. {Phone}.'; }
    },
    {
      tag: 'VM 06 · Audit / compliance angle',
      text: function () { return 'Hi {Name}, {Your Name}. If an auditor or examiner asked you to show evidence of vendor-certified training — HIPAA, DoD 8140, FFIEC — how fast could you produce it?\n\nOur dashboards are built for that exact question. Call {Phone} if you want the template.'; }
    },
    {
      tag: 'VM 07 · Re-engagement',
      text: function () { return 'Hi {Name}, {Your Name} — we spoke a while back about mapping programs to certifications. If your vendor review cycle has opened since, I’d love a second look before decisions firm up.\n\n{Phone}.'; }
    },
    {
      tag: 'VM 08 · Peer benchmark',
      text: function () { return 'Hi {Name}, {Your Name}. Quick benchmark: peers of your size run authorized, role-based paths at roughly 75–80% completion.\n\nIf your current vendors aren’t returning that, most Directors find that conversation worth 15 minutes. {Phone}.'; }
    },
    {
      tag: 'VM 09 · Breakup / last touch',
      text: function () { return 'Hi {Name}, last voicemail — {Your Name}. If the current program is holding up, genuinely, good.\n\nIf completion is still low and certs are still thin, you know where to reach me. {Phone}.'; }
    },
    {
      tag: 'VM 10 · Windshield / keep the door open',
      text: function () { return 'Hi {Name}, {Your Name} closing the loop. When the next planning cycle asks “what’s the highest-quality, fastest way to get cert coverage,” we’ve got the answer waiting at {Phone}.\n\nThanks for your time.'; }
    }
  ],

  mgr: [
    {
      tag: 'VM 01 · First contact',
      text: function (ind) { return 'Hi {Name}, {Your Name} at NetCom Learning. Quick one — your team can get certified on ' + ind.tools + ' without losing the work week: instructor-led, virtual, or self-paced, carved around shifts so nobody’s out of the office.\n\nMost managers have the team exam-ready in about {Weeks} weeks. Call or text {Phone} and I’ll send the schedule.'; }
    },
    {
      tag: 'VM 02 · Value replay after email',
      text: function () { return 'Hi {Name}, {Your Name} — the sample schedule is in your inbox: zero coverage loss, exam included, and a per-head price that fits a pilot.\n\nIt’s a two-minute read. Want me to walk you through it? {Phone}.'; }
    },
    {
      tag: 'VM 03 · Referral / warm intro',
      text: function () { return 'Hi {Name}, {Your Name} at NetCom Learning. {Referrer} said your team’s been stretched on {Tool} lately — we’ve got a certification path that slots around shifts, not instead of them.\n\n15 minutes to see if it fits? Call {Phone}.'; }
    },
    {
      tag: 'VM 04 · Trigger — their news',
      text: function () { return 'Hi {Name}, {Your Name} — saw {TeamNews} on {Tool}. When a new tool lands on a team with no runway, the first casualty is confidence.\n\nWe fix that with a {Weeks}-week path. Text {Phone} and I’ll send it.'; }
    },
    {
      tag: 'VM 05 · Exam / go-live window',
      text: function () { return 'Hi {Name}, {Your Name} from NetCom Learning. How close is your team to ready for the {CertName} window?\n\nWe can run a prep cohort that ends right before the exam date, zero downtime. Want the dates? {Phone}.'; }
    },
    {
      tag: 'VM 06 · Cert-expiry angle',
      text: function () { return 'Hi {Name}, {Your Name}. If a cert expired this month, what would your team do — scramble or coast?\n\nWe keep it affordable and on-shift so expiry stops being an event. Call {Phone} and I’ll show the per-head math.'; }
    },
    {
      tag: 'VM 07 · Re-engagement',
      text: function () { return 'Hi {Name}, {Your Name} — we spoke a couple weeks back about team training, and that go-live date is probably closer now.\n\nIf the team still isn’t confident on {Tool}, the path still fits — smarter to run it now than explain a delay later. {Phone}.'; }
    },
    {
      tag: 'VM 08 · Peer quick-win',
      text: function () { return 'Hi {Name}, {Your Name}. Quick win from a manager just like you: team cert-ready in {Weeks} weeks, no coverage loss, and the dashboard made their boss glad they approved it.\n\nThat same plan can fit your team. {Phone}.'; }
    },
    {
      tag: 'VM 09 · Breakup / last touch',
      text: function () { return 'Hi {Name}, last touch — {Your Name}. If the team’s already solid, awesome, no need to call back.\n\nIf the next cert or go-live finds them less ready than you’d like, the plan is waiting at {Phone}.'; }
    },
    {
      tag: 'VM 10 · Windshield / keep the door open',
      text: function () { return 'Hi {Name}, {Your Name} closing the loop. When the team needs certs without the chaos, we’re a twenty-second call away at {Phone}.\n\nTake care.'; }
    }
  ]
};