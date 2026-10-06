/* NetCom SDR — Programs / vendor filter with subtopics.
   The user flow is: decision-maker level → industry → program (vendor)
   → subtopic (e.g., Microsoft → Power BI or Azure).
   Every BANT question here is custom to the current selection:
   each letter is keyed by level (cx / vp / all=Director,Manager / ic / ldo),
   so the must-asks change with the decision-maker, and {field} is auto-filled
   with the selected industry's workforce noun at render time.
   Each vendor also carries the standing relationship NetCom already has with it
   (the credibility to drop on the call) + its general hook / bridge / stake.
   Each subtopic carries its own angle, hook, bridge, stake, BANT and a byLevel
   map: how to play it for each of the six decision-maker levels.
   'any' = no vendor filter. */
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
    tools: 'Azure · Microsoft 365 · Copilot · Power BI',
    relation: 'NetCom is Microsoft Partner of the Year 2023 — the authorized channel for Azure, Microsoft 365 and Copilot tracks, delivered by certified instructors.',
    angle: 'the Microsoft estate — Azure, M365, Copilot and Power BI — is everywhere, but certified depth rarely keeps pace with the roadmap',
    hook: 'Everyone claims “Microsoft-certified.” The orgs that win are the ones with the cert coverage to prove it in a review or an audit.',
    bridge: 'Before the budget math — which Microsoft workload is moving fastest for you right now: Azure, Microsoft 365, Copilot, or Power BI?',
    stake: 'If the Enterprise Agreement renews without a certification lane in it, you keep the discount and lose the readiness.',
    opener: 'The lane I mean specifically: Microsoft. The licenses are bought almost everywhere — the winning difference is certified depth on Azure, M365, Copilot and Power BI. For {field}, that depth is where rollouts stop stalling.',
    bant: {
      B: {
        cx: 'Is Microsoft skilling for {field} a committed line inside the EA discussion this fiscal year, or still a proposal finance debates at review — and do credits already sit on the contract?',
        vp: 'Is Microsoft upskilling for {field} a committed line this year, or still something you have to run past finance — and can existing EA credits absorb part of it?',
        all: 'Where does Microsoft training money sit for {field} — L&D, IT, or per project — and are EA credits already earmarked?',
        ic: 'Do you have tuition or certification reimbursement available for a Microsoft cert, and is one already on your manager’s roadmap?',
        ldo: 'Where does Microsoft spend flow — the Enterprise Agreement, the L&D line, or per-vendor POs — and do Learning Credits or EA balances expire on a date?'
      },
      A: {
        cx: 'Who signs a Microsoft-wide learning investment at your level — you, the CIO, or the CHRO — and how far does your endorsement carry it?',
        vp: 'Whose sign-off sits above you on a Microsoft training PO — and can a one-page EA-linked plan carry it through review?',
        all: 'Who owns Microsoft skilling decisions for your program — you, the IT lead, or the business owner of the workload?',
        ic: 'Who approves the cert you want — your manager, the team lead, or the L&D team — and is the ask already queued?',
        ldo: 'Who issues the PO for Microsoft training and who approves capacity — procurement or IT, and does it need a second signature for the EA?'
      },
      N: {
        cx: 'Which Microsoft bet is most at risk from a skill gap — Azure, Copilot, or Power BI — and what is that gap costing the roadmap?',
        vp: 'Which Microsoft workload is your team a version behind on — Azure, M365, Copilot, or Power BI — and what is that costing delivery?',
        all: 'Between Azure, M365, Copilot and Power BI, which track is your team thinnest on right now?',
        ic: 'Which Microsoft skill is holding you back from the role or project you want — and is the cert path clear?',
        ldo: 'Which Microsoft track has no certified coverage on the books — and which one does an audit or review actually check?'
      },
      T: {
        cx: 'Is there an EA renewal, a board review, or a Copilot rollout date that makes Microsoft readiness a dated problem?',
        vp: 'What deadline would a certified Microsoft team unblock — an EA renewal, a rollout, or a launch — and how far off is it?',
        all: 'Is there a rollout, a renewal, or a quarter-end window that pins when your Microsoft team has to be ready?',
        ic: 'Is there an exam window or a project deadline that sets when you need the cert?',
        ldo: 'Does the EA or credit expiry date — not the quarter — set when this spend has to land?'
      }
    },
    subsOrder: ['azure', 'powerbi', 'm365', 'copilot'],
    subs: {
      azure: {
        label: 'Azure',
        angle: 'Azure spend grows with every workload migration, and certified depth on compute, data and identity rarely keeps pace',
        hook: 'The cloud bill is climbing and the certified bench behind it is the trailing indicator — the exact pattern we reverse for teams like {TeamArea}.',
        bridge: 'If you looked at your Azure certified coverage today — compute, data, or identity — which lane is thinnest?',
        stake: 'Every month a migration waits on certified hands, the bill grows faster than the team can control it.',
        opener: 'The lane within Microsoft: Azure. Spend grows with every workload migration, and certified depth on compute, data and identity rarely keeps pace. For {field}, the migration plan has the date — the bench is the open question.',
        bant: {
          B: {
            cx: 'Is Azure skills investment for {field} a committed line in the cloud budget, or still debated against the migration plan — and are EA credits already on the contract?',
            vp: 'Is the Azure bench line committed for this year, or a proposal finance still needs to bless — and do existing EA credits cover part of it?',
            all: 'Where does Azure training money sit for {field} — the cloud budget, IT, or migration project lines — and are credits earmarked?',
            ic: 'Is there tuition or Azure certification funding available to you through the EA or your team, and is the ask already queued?',
            ldo: 'Where does Azure spend flow — the EA, the cloud line, or per-project — and do Learning Credits or Azure credits expire on a date?'
          },
          A: {
            cx: 'Who signs the Azure skilling investment — you, the CTO/CIO, or the cloud steering committee — and how far does your endorsement carry it?',
            vp: 'Whose signature sits above yours on an Azure training PO, and can a one-page migration-linked plan carry it through?',
            all: 'Who owns Azure skill decisions for your program — the cloud lead, the platform owner, or you?',
            ic: 'Who approves your Azure certification path — your manager or the cloud lead — and is the lane clear?',
            ldo: 'Who issues the Azure training PO and who holds the cloud budget — procurement or IT — and is one signature enough?'
          },
          N: {
            cx: 'Which Azure bet is most exposed — compute, data, identity — and what is the gap costing the cloud strategy?',
            vp: 'Which Azure lane is your team thinnest on — compute, data, or identity — and what is delivery waiting on?',
            all: 'Which Azure lane is your team thinnest on — compute, data, or identity — and where does the migration stall?',
            ic: 'Which Azure skill — compute, data, or identity — does your team lack, and which cert fixes it for you?',
            ldo: 'Which Azure track has no certified coverage on the books, and which one does the cloud review actually check?'
          },
          T: {
            cx: 'Is there an EA renewal, a board review, or a migration milestone that makes Azure readiness date-stamped?',
            vp: 'What deadline would a certified Azure team unblock — a migration, a renewal, or a launch — and how near is it?',
            all: 'Is there a migration window, a renewal, or a quarter-end that pins when the Azure team has to be ready?',
            ic: 'Is there an exam window or a migration milestone that sets when you need the cert?',
            ldo: 'Does the EA or credit expiry date set when this Azure spend has to land?'
          }
        },
        byLevel: {
          cx: 'The board reads Azure spend; certified depth is the line that survives the quarterly review.',
          vp: 'Every migration is a staffing plan — the engineer bench on Azure is the risk your peers flag first.',
          dir: 'Azure cert coverage is the audit-ready evidence the program report needs this cycle.',
          mgr: 'The team ships features, but the Azure cert calendar is where coverage goes thin between sprints.',
          ic: 'One cert on the roadmap — {CertName} — and the labs built around your exam window.',
          ldo: 'Azure training sits inside the EA spend; the line needs a track attached to it before renewal.'
        }
      },
      powerbi: {
        label: 'Power BI',
        angle: 'self-service analytics is everywhere, but the reports the exec team trusts are built by an overworked few',
        hook: 'Every department ships its own Power BI; the reports the board actually trusts come from a team of two. That bottleneck is where we start.',
        bridge: 'Who owns the trusted Power BI workspace today — and how many people could rebuild it if that owner left?',
        stake: 'Power BI skills do not scale with headcount; without certified depth, the trusted report is a bus-factor of one.',
        opener: 'The lane within Microsoft: Power BI. The reports the exec team trusts are built by an overworked few — DAX and model governance are where the bottleneck lives. For {field}, a certified report bench ends the queue.',
        bant: {
          B: {
            cx: 'Is analytics skilling for {field} a committed line in the data budget this year, or still a proposal finance debates — do licensing dollars already cover it?',
            vp: 'Is the Power BI bench line committed, or in review — and can existing license spend absorb the training?',
            all: 'Where does Power BI training sit for {field} — the analytics line, IT, or the business units that want the reports?',
            ic: 'Do you have access to analytics training or certification funding through your team, and is the ask queued?',
            ldo: 'Where does Power BI spend flow — per-seat licensing, the data line, or unit budgets — and does the license renewal set the window?'
          },
          A: {
            cx: 'Who owns analytics capability at your level — the data lead, IT, or the business units — and who signs the investment?',
            vp: 'Whose sign-off sits above you on an analytics training PO, and can a one-page report-governance plan carry it?',
            all: 'Who owns the Power BI capability decision for your program — the data platform lead, IT, or you?',
            ic: 'Who approves your Power BI learning path — your manager or the analytics lead — and is the lane clear?',
            ldo: 'Who issues the analytics training PO — procurement, IT, or the business units — and does it need a joint signature?'
          },
          N: {
            cx: 'Which analytics gap is costing the deck — model design, DAX, or governance — and how much of decision speed depends on it?',
            vp: 'Which reporting gap is your team living with — model design, DAX, or governance — and who is the bus-factor on it?',
            all: 'Which Power BI gap — model design, DAX, or governance — is the one stalling your reporting?',
            ic: 'Which Power BI skill — DAX, model design, or governance — is the one that gets you the trusted-builder role?',
            ldo: 'Which analytics track has no certified coverage on the books, and which one does the review actually check?'
          },
          T: {
            cx: 'Is there a reporting cycle, a business review, or a licensing milestone that makes analytics readiness date-stamped?',
            vp: 'What deadline would a certified report bench unblock — the Q{Qtr} business review or a model migration — and how near?',
            all: 'Is there a reporting cycle or a quarterly review that pins when the report bench has to be ready?',
            ic: 'Is there an exam window or a reporting season that sets when you need the cert?',
            ldo: 'Does the license renewal or reporting-cycle date set when this analytics spend lands?'
          }
        },
        byLevel: {
          cx: 'The exec deck runs on a handful of reports; governance of who builds them is the line to fix.',
          vp: 'Your best analysts are the bottleneck — the department waits on them and calls it “capacity.”',
          dir: 'The program needs evidence reports that survive scrutiny — certified modelers are how they get built.',
          mgr: 'The team fields report requests all week; certified model design would end the backlog.',
          ic: 'DAX and model fundamentals are the skills that turn you from “the report person” into the trusted builder.',
          ldo: 'Analytics training is per-seat and per-tool; the vendor line just needs the right content named on it.'
        }
      },
      m365: {
        label: 'Microsoft 365',
        angle: 'M365 is deployed, but the workforce still runs on habits from the last version',
        hook: 'The license is bought; the behavior is still static mail and file shares. Certified adoption is where the license becomes a lever.',
        bridge: 'Between Exchange, Teams, and SharePoint — where is the workforce still working the old way?',
        stake: 'An unused M365 license is a sunk cost; an uncertified workforce doubles it in lost productivity.',
        opener: 'The lane within Microsoft: Microsoft 365. The license is bought; the behavior is still static mail and file shares. For {field}, certified adoption turns the license into a lever.',
        bant: {
          B: {
            cx: 'Is M365 adoption skilling for {field} a committed line beside the license, or still a proposal — and is the training budget real or leftover?',
            vp: 'Is the M365 change line committed for the year, or is it waiting on the license renewal to be approved?',
            all: 'Where does M365 training money sit for {field} — the IT line, the workplace program, or per department — and is any of it carved out yet?',
            ic: 'Does your team have M365 learning access or certification funding, and is the request already made?',
            ldo: 'Where does M365 spend flow — the license contract, IT, or per seat — and does the renewal set the window?'
          },
          A: {
            cx: 'Who owns M365 adoption at your level — IT, the digital workplace lead, or the business — and who signs the change investment?',
            vp: 'Whose sign-off sits above you on an M365 adoption plan, and can a one-page usage-gap plan carry it?',
            all: 'Who owns the M365 adoption decision for your program — the workplace lead, IT ops, or you?',
            ic: 'Who approves your M365 learning path — your manager or the workplace lead — and is the lane clear?',
            ldo: 'Who issues the M365 training PO — procurement through the license contract, IT, or the business — and is one signature enough?'
          },
          N: {
            cx: 'Which M365 capability is underused — Teams, SharePoint, or Exchange — and what is that costing workflow company-wide?',
            vp: 'Where is the workforce still working the old way — Teams, SharePoint, or Exchange — and what is that costing your org?',
            all: 'Between Teams, SharePoint and Exchange, which one is your team still working around the old way?',
            ic: 'Which M365 skill — Teams, SharePoint, or Exchange — would fix your daily workflow most?',
            ldo: 'Which M365 capability is underutilized against the license you pay for, and which one does the review check?'
          },
          T: {
            cx: 'Is there a tenant change, a license renewal, or an adoption initiative that makes M365 readiness date-stamped?',
            vp: 'What deadline would a trained M365 base unblock — a tenant change, a renewal, or a rollout — and how near is it?',
            all: 'Is there a tenant change, a renewal, or a rollout window that pins when the workforce has to be ready?',
            ic: 'Is there an exam window or a workplace initiative that sets when the cert lands?',
            ldo: 'Does the license renewal date set when this adoption spend lands, and do unused seats change the math?'
          }
        },
        byLevel: {
          cx: 'The M365 license is bought; the question is whether the workforce ever changed how it works.',
          vp: 'Team collaboration still runs on email threads; certified adoption is the quiet multiplier.',
          dir: 'The change-management file needs adoption evidence; certified usage is the metric that moves it.',
          mgr: 'The team lives in Teams but works like Outlook chained to a file share — the cert fixes the habit.',
          ic: 'M365 mastery is a career accelerant — certification structures what you already kind of know.',
          ldo: 'M365 training is procurement-managed; the catalog needs tracks the business actually redeems.'
        }
      },
      copilot: {
        label: 'Copilot',
        angle: 'Copilot seats are purchased, but the workforce is not prompting with the data rules and governance it needs to stay safe',
        hook: 'Everyone bought Copilot seats; almost nobody trained the prompting, the data ground rules, or the governance. That gap is the actual purchase decision.',
        bridge: 'Who can use Copilot on your sensitive data today — and does anyone in the room know the governance rules?',
        stake: 'An untrained Copilot workforce is a data-exposure and a sunk license at the same time.',
        opener: 'The lane within Microsoft: Copilot. The seats are purchased — prompting discipline, data rules and governance are not. For {field}, that untrained encounter is the exposure and the wasted spend at once.',
        bant: {
          B: {
            cx: 'Is the Copilot rollout for {field} funded end to end — seats plus training — or is the training line still an afterthought finance has not blessed?',
            vp: 'Is Copilot training budget attached to the seat rollout, or is it still somewhere vague — and who owns the line?',
            all: 'Is Copilot training budget attached to your rollout for {field}, or does it sit nowhere yet — and can seats already purchased cover it?',
            ic: 'Does your org offer Copilot learning or certification access, and is the request already made?',
            ldo: 'Where does Copilot spend flow — the Microsoft contract, per seat, or the AI line — and is training a line item or an afterthought?'
          },
          A: {
            cx: 'Who owns the Copilot rollout and its training — you, the CIO, or the AI governance lead — and who signs the enablement?',
            vp: 'Whose sign-off sits above you on the Copilot enablement plan, and can a one-page adoption plan carry it?',
            all: 'Who owns Copilot enablement for your program — IT, the AI lead, or the business sponsor — and is that the person I should align with?',
            ic: 'Who decides whether you get Copilot and its training — your manager or the AI team — and is the ask queued?',
            ldo: 'Who issues the Copilot training PO — the AI line owner or IT — and does seat procurement already have a vendor?'
          },
          N: {
            cx: 'Which Copilot gap is live at your level — prompting discipline, data access rules, or governance — and what is the exposure?',
            vp: 'Which Copilot gap is real on your team — skill, data rules, or governance — and what is the rollout risk?',
            all: 'Between prompting skill, data-access rules and governance — which one is your team actually missing?',
            ic: 'Which Copilot skill — prompting, data handling, or governance — is the one that makes you the safe power user?',
            ldo: 'Which Copilot risk does the review check — trained users, data boundaries, or governance — and which has no coverage?'
          },
          T: {
            cx: 'Is there a go-live date, a security review, or a board AI review that makes Copilot readiness date-stamped?',
            vp: 'What deadline would a trained Copilot base unblock — go-live, an adoption milestone, or a security review — and how near is it?',
            all: 'Is there a go-live date or adoption milestone that pins when users have to be trained?',
            ic: 'Is there a rollout wave or an exam window that sets when you get trained?',
            ldo: 'Does the seat contract or go-live date set when the training spend lands?'
          }
        },
        byLevel: {
          cx: 'The board asked who is accountable for the AI spend; official Copilot training is the answer that holds.',
          vp: 'Rollout without adoption is a license write-off — training is what turns seats into output.',
          dir: 'The AI program file needs a governance story; trained users are the provable part.',
          mgr: 'The team has the seats but no prompting playbook — the cert gives them the ground rules.',
          ic: 'Copilot fluency is the new differentiator — training turns you into the power user on the floor.',
          ldo: 'Copilot is a line item; official training makes it an auditable, claimable one.'
        }
      }
    }
  },

  aws: {
    label: 'AWS',
    tools: 'Solutions Architect · DevOps · Security',
    relation: 'NetCom is an authorized AWS Training Partner — official AWS curriculum with Skill Builder access through the authorized channel.',
    angle: 'AWS accounts scale fast, and the certified bench behind them rarely grows in step',
    hook: 'The AWS bill is climbing and the cert coverage is the trailing indicator. That is the exact pattern we reverse for teams like {TeamArea}.',
    bridge: 'Which AWS lane is the pressure point first — Solutions Architect, DevOps, or security?',
    stake: 'Every month a cert gap waits, the account spend grows faster than the team’s ability to control it.',
    opener: 'The lane I mean specifically: AWS. Your account is scaling and the certified bench behind compute, data and identity is the trailing indicator. For {field}, that is where cloud spend starts outrunning control.',
    bant: {
      B: {
        cx: 'Is AWS upskilling for {field} a committed line in the cloud budget this year, or still debated — and do Skill Builder credits or account training funds cover part of it?',
        vp: 'Is AWS upskilling for {field} a committed line this year, or a proposal finance still needs to bless — and do account credits absorb part of it?',
        all: 'Where does AWS training money sit for {field} — the account, engineering, or a separate L&D line — and are credits already earmarked?',
        ic: 'Do you have access to AWS training or certification funding through your account, and is the ask queued?',
        ldo: 'Where does AWS spend flow — the account budget, Skill Builder credits, or per-project — and do credits expire on a date?'
      },
      A: {
        cx: 'Who signs AWS skilling at your level — you, the CTO/CIO, or the cloud leadership — and how far does your endorsement carry it?',
        vp: 'Whose sign-off sits above you on an AWS training PO, and can a one-page account-linked plan carry it?',
        all: 'Who owns AWS skill decisions for your program — the cloud lead, engineering, or you?',
        ic: 'Who approves your AWS certification path — your manager or the cloud lead — and is the lane clear?',
        ldo: 'Who issues the AWS training PO and who holds the account budget — procurement or engineering — and is one signature enough?'
      },
      N: {
        cx: 'Which AWS bet is most exposed — architecture, DevOps, or security — and what is the gap costing the cloud strategy?',
        vp: 'Which AWS lane is your team a version behind on — Solutions Architect, DevOps, or security — and what is delivery waiting on?',
        all: 'Between Solutions Architect, DevOps and security tracks, which is your team thinnest on right now?',
        ic: 'Which AWS skill does your team lack — architecture, pipeline, or security — and which cert fixes it for you?',
        ldo: 'Which AWS track has no certified coverage on the books, and which one does the review actually check?'
      },
      T: {
        cx: 'Is there a migration, a re:Invent follow-on, or an account renewal that makes AWS readiness date-stamped?',
        vp: 'What deadline would a certified AWS team unblock — a migration, a renewal, or a launch — and how near is it?',
        all: 'Is there a migration window or an account cycle that pins when the AWS team has to be ready?',
        ic: 'Is there an exam window or a migration milestone that sets when you need the cert?',
        ldo: 'Do the account credits — not the quarter — expire, and does that set the spend date?'
      }
    },
    subsOrder: ['solarch', 'devops', 'security'],
    subs: {
      solarch: {
        label: 'Solutions Architect',
        angle: 'cloud designs scale the first time only when the architects are certified to the current pattern set',
        hook: 'The account grows, the designs repeat — and the repeating ones are the expensive ones. Certified architects are the fix for the second-generation buildouts.',
        bridge: 'If the next architecture review happened today, which pattern is your team weakest on — compute, networking, or data?',
        stake: 'Uncertified architecture means paying for bad designs twice: once to build, again to rebuild.',
        opener: 'The lane within AWS: Solutions Architect. The account grows and the designs repeat — and the repeating ones are the expensive ones. For {field}, certified architecture stops paying for bad builds twice.',
        bant: {
          B: {
            cx: 'Is architecture skilling for {field} a committed line in the cloud budget, or still debated against the migration plan — do account credits cover part of it?',
            vp: 'Is the architecture bench line committed, or a proposal finance needs to bless — and do existing training credits absorb some of it?',
            all: 'Where does architect training money sit for {field} — the account, engineering, or per project — and are credits earmarked?',
            ic: 'Do you have access to architect certification funding through your account, and is the ask queued?',
            ldo: 'Where does architecture spend flow — the account, credits, or project budgets — and do the credits expire on a date?'
          },
          A: {
            cx: 'Who signs the architecture skilling investment — you, the CTO/CIO, or the architecture review board — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on an architecture training PO, and can a one-page design plan carry it?',
            all: 'Who owns architecture skill decisions for your program — the platform lead, the review board, or you?',
            ic: 'Who approves your Solutions Architect path — your manager or the platform lead — and is the lane clear?',
            ldo: 'Who issues the architecture training PO and who holds the cloud budget — procurement or engineering — and is one signature enough?'
          },
          N: {
            cx: 'Which architecture pattern is the exposure — compute, networking, or data — and what is the redesign cost of getting it wrong?',
            vp: 'Which design area is your team weakest on — compute, networking, or data — and what is the rework cost?',
            all: 'Which architecture lane is the review weakest on — compute, networking, or data — and where do bad designs repeat?',
            ic: 'Which architecture skill — Well-Architected, cost, or security patterns — is the gap on your next build?',
            ldo: 'Which architecture track has no certified coverage on the books, and which one does the review check?'
          },
          T: {
            cx: 'Is there a migration milestone, an architecture review, or a re:Invent follow-on that makes readiness date-stamped?',
            vp: 'What deadline would certified architects unblock — a migration, a review, or a rebuild — and how near is it?',
            all: 'Is there a design review or migration window that pins when the architects have to be certified?',
            ic: 'Is there an exam window or a design deadline that sets when you need the cert?',
            ldo: 'Do the account credits or the review calendar set when the architecture spend lands?'
          }
        },
        byLevel: {
          cx: 'Every dollar of cloud spend is approved against architecture; certified design is the due-diligence line.',
          vp: 'Delivery quality is architecture quality — the bench needs the current cert, not last year’s.',
          dir: 'The architecture review cadence is program evidence; cert coverage is what proves the bar.',
          mgr: 'Design decisions land on the team daily; certified leads make the calls the review does not overturn.',
          ic: 'The Solutions Architect cert is the title and the roadmap — labs on the exam pattern you need.',
          ldo: 'Architecture training comes off the account; attach a track before the credits expire.'
        }
      },
      devops: {
        label: 'DevOps · CI/CD',
        angle: 'pipelines and observability are where delivery speed is won or lost, and the team is usually a version behind',
        hook: 'Delivery speed is pipeline speed — and the team is usually one version of the tooling behind. Certified DevOps is how the latency leaves.',
        bridge: 'Where is your delivery slowed — build pipelines, release automation, or the reliability layer?',
        stake: 'Every slow pipeline is a compounded delay: fixes are slower, so the backlog grows, so velocity drops further.',
        opener: 'The lane within AWS: DevOps and CI/CD. Delivery speed is pipeline speed, and the team is usually a version behind. For {field}, certified pipeline practice is how the latency leaves.',
        bant: {
          B: {
            cx: 'Is DevOps skilling for {field} a committed engineering line this year, or still a proposal finance debates — do account training credits cover part?',
            vp: 'Is the DevOps line committed, or a proposal finance needs to bless — and do account credits absorb part of the cost?',
            all: 'Where does DevOps training money sit for {field} — the tooling budget, engineering, or L&D — and are credits earmarked?',
            ic: 'Do you have access to pipeline or DevOps certification funding through your team, and is the ask queued?',
            ldo: 'Where does DevOps spend flow — tooling contracts, the account, or L&D — and do credits expire on a date?'
          },
          A: {
            cx: 'Who signs delivery-tooling skilling at your level — you, engineering leadership, or the platform head — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on a DevOps training PO, and can a one-page velocity plan carry it?',
            all: 'Who owns delivery skill decisions for your program — the platform lead, the DevOps manager, or you?',
            ic: 'Who approves your DevOps certification path — your manager or the platform lead — and is the lane clear?',
            ldo: 'Who issues the DevOps training PO — procurement through tooling, engineering, or L&D — and is one signature enough?'
          },
          N: {
            cx: 'Which delivery stage is the bottleneck — build, release, or operations — and what is deploy latency costing the roadmap?',
            vp: 'Which stage is your team a version behind on — build, release, or operations — and what is that costing delivery?',
            all: 'Between build, release and operations, which stage is your team actually bottlenecked on?',
            ic: 'Which pipeline skill — CI/CD, release automation, or SRE — is the gap your team keeps hitting?',
            ldo: 'Which delivery track has no certified coverage on the books, and which one does the review check?'
          },
          T: {
            cx: 'Is there a pipeline migration, a velocity target, or an incident review that makes DevOps readiness date-stamped?',
            vp: 'What deadline would a certified delivery team unblock — a migration, a release, or a velocity target — and how near is it?',
            all: 'Is there a tooling migration or a release window that pins when the team has to be ready?',
            ic: 'Is there a migration or exam window that sets when you need the cert?',
            ldo: 'Do the tooling contracts or credits expire on a date — and does that set the spend?'
          }
        },
        byLevel: {
          cx: 'Delivery speed is the metric the board watches; certified pipeline skills are what moves it.',
          vp: 'Deploy latency is a staffing problem in disguise — the bench needs current tooling skills.',
          dir: 'The delivery program needs reliability evidence; certified practice is how you show it.',
          mgr: 'The team’s deploys are the bottleneck; cert coverage on the toolchain ends the firefighting.',
          ic: 'Pipeline fluency is the résumé line everyone asks for — certs on the tools your team runs.',
          ldo: 'DevOps training maps to tooling contracts; the vendor line needs certified tracks attached.'
        }
      },
      security: {
        label: 'AWS Security · IAM & GuardDuty',
        angle: 'identity and threat-detection are the AWS surface the auditors actually test',
        hook: 'The AWS account passes the bill test and fails the IAM test — auditors start at least-privilege, and they start with you.',
        bridge: 'If an auditor asked for least-privilege proof today, which piece — IAM, GuardDuty detections, or logging — is thinnest?',
        stake: 'An IAM sprawl is a breach-in-waiting that a single certified engineer can start unwinding.',
        opener: 'The lane within AWS: security — IAM and GuardDuty. Accounts pass the bill test and fail the least-privilege test. For {field}, a certified engineer is the fastest single control to close.',
        bant: {
          B: {
            cx: 'Is cloud-security skilling for {field} a committed line in the security budget, or still debated against compliance — do account training funds cover part?',
            vp: 'Is the AWS security line committed, or in review — and do existing training credits absorb part of the cost?',
            all: 'Where does AWS security training money sit for {field} — the security budget, the account, or compliance — and are credits earmarked?',
            ic: 'Do you have access to AWS security certification funding through your team, and is the ask queued?',
            ldo: 'Where does AWS security spend flow — the security budget, compliance, or the account — and does the audit cycle set it?'
          },
          A: {
            cx: 'Who signs cloud-security skilling — you, the CISO, or the cloud leadership — and how far does your endorsement carry it?',
            vp: 'Whose sign-off sits above you on a cloud-security training PO, and can a one-page audit-map plan carry it?',
            all: 'Who owns AWS security skill decisions — the security lead, the cloud team, or you — and is that the person to align with?',
            ic: 'Who approves your AWS security path — your manager or the security lead — and is the lane clear?',
            ldo: 'Who issues the security training PO — procurement under compliance, or IT — and does it need review?'
          },
          N: {
            cx: 'Which AWS control is the exposure — IAM hygiene, threat detection, or logging — and what does audit exposure cost?',
            vp: 'Which AWS control is your team thinnest on — IAM, GuardDuty, or logging — and what is the posture risk?',
            all: 'Between IAM, GuardDuty and logging, which control is the one your team is weakest on?',
            ic: 'Which AWS security skill — IAM, detection, or logging — is the gap in your daily work?',
            ldo: 'Which security track has no certified coverage on the books, and which one does the audit check?'
          },
          T: {
            cx: 'Is there an audit, an access review, or a compliance deadline that makes AWS security readiness date-stamped?',
            vp: 'What deadline would a certified security team unblock — an audit, a review, or an access cleanup — and how near is it?',
            all: 'Is there an audit or access-review window that pins when the team has to be ready?',
            ic: 'Is there an exam window or an audit that sets when you need the cert?',
            ldo: 'Does the audit calendar or compliance cycle — not the quarter — set the spend date?'
          }
        },
        byLevel: {
          cx: 'Audit readiness is a board conversation; certified IAM depth is the defensible answer.',
          vp: 'Security posture in the cloud is only as strong as the certified hands running it.',
          dir: 'The compliance program needs evidence; certified security operations is the provable control.',
          mgr: 'The team maintains the account; certified security practice turns alerts into fixed controls.',
          ic: 'Security certs carry the discipline — IAM and GuardDuty labs are the fastest path to depth.',
          ldo: 'Cloud security training often lands in compliance; the contract line just needs the right track.'
        }
      }
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
    opener: 'The lane I mean specifically: Cisco. Network and security teams certify on release cycles, and coverage slips between contract renewals. For {field}, Learning Credits already on the contract are budget sitting unused.',
    bant: {
      B: {
        cx: 'Is network skilling for {field} funded in the IT budget this year — and do the Cisco Learning Credits already on the contract cover the whole track or just part?',
        vp: 'Is Cisco upskilling for {field} a committed line this year, or a proposal finance still needs to bless — and can Learning Credits absorb part of it?',
        all: 'Where does Cisco training money sit for {field} — the network budget, L&D, or the contract — and are Learning Credits earmarked?',
        ic: 'Do you use tuition or certification benefits for a Cisco cert — and is the request already in front of your manager?',
        ldo: 'How many Cisco Learning Credits are on the contract, when do they expire, and is a track scheduled against them?'
      },
      A: {
        cx: 'Who signs network skilling at your level — you, the CIO, or the infrastructure leadership — and how far does your endorsement carry?',
        vp: 'Whose sign-off sits above you on a Cisco training PO, and can a one-page Learning-Credits plan carry it?',
        all: 'Who owns Cisco certification coverage for your program — the network lead, the security officer, or you?',
        ic: 'Who approves your Cisco certification path — your manager or the network lead — and is the lane clear?',
        ldo: 'Who issues the Cisco training PO — procurement through the contract, or IT — and does the credit balance need approval?'
      },
      N: {
        cx: 'Which network bet is most exposed — routing, security, or collaboration — and what does the coverage gap cost the business?',
        vp: 'Which Cisco lane is your team thinnest on — routing and switching, security, or collaboration — and what is that costing ops?',
        all: 'Between routing and switching, security and collaboration, which track is your team behind on?',
        ic: 'Which Cisco skill — CCNA, security, or collaboration — is the gap in your day-to-day?',
        ldo: 'Which Cisco track has unused certificate coverage and which one does a rollout or audit actually check?'
      },
      T: {
        cx: 'Is there a network refresh, an audit, or a contract renewal that makes Cisco readiness date-stamped?',
        vp: 'What deadline would a certified network team unblock — a refresh, a rollout, or an audit — and how near is it?',
        all: 'Is there a refresh, a rollout, or an audit window that pins when the team has to be ready?',
        ic: 'Is there an exam window or a rollout that sets when you need the cert?',
        ldo: 'Do the Learning Credits expire with the contract renewal — and does that date set the spend?'
      }
    },
    subsOrder: ['rsw', 'sec', 'collab'],
    subs: {
      rsw: {
        label: 'Routing & switching · CCNA/CCNP',
        angle: 'the network is the spine of everything, and certified depth between CCNA and CCNP is where outages go unforecast',
        hook: 'The network runs the business until it does not — and certified coverage between CCNA and CCNP is exactly where the outage risk hides.',
        bridge: 'If a senior engineer left next week, how many people could rebuild the core switch config without the cert to back it?',
        stake: 'The outage that a certified engineer would have prevented costs more than the whole training contract.',
        opener: 'The lane within Cisco: routing and switching — CCNA/CCNP. The network runs the business until it does not, and the core configs are only as safe as the certified hands holding them. For {field}, the outage a cert prevents costs more than the track.',
        bant: {
          B: {
            cx: 'Is routing and switching skilling for {field} funded in the IT budget — and do the Cisco Learning Credits on the contract already cover the CCNA-to-CCNP track?',
            vp: 'Is the routing and switching line committed — and can Learning Credits already on the contract absorb the whole track?',
            all: 'Where does CCNA/CCNP training money sit for {field} — the network budget, L&D, or the contract — and are credits earmarked?',
            ic: 'Do you have certification benefits you can use toward a CCNA or CCNP — and is the ask already with your manager?',
            ldo: 'How many Learning Credits are on the contract, do they expire at renewal, and is the CCNA-to-CCNP track scheduled?'
          },
          A: {
            cx: 'Who signs the routing and switching investment — you, the CIO, or infrastructure leadership — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on the CCNA/CCNP PO, and can a one-page coverage plan carry it?',
            all: 'Who owns CCNA/CCNP coverage for your program — the network lead or the infrastructure manager — and is that the person to align with?',
            ic: 'Who approves your CCNA or CCNP path — your manager or the network lead — and is the lane clear?',
            ldo: 'Who issues the PO against the Learning Credits — procurement or IT — and does the balance need a sign-off?'
          },
          N: {
            cx: 'Which network risk is most exposed — a thin senior bench or outdated core configs — and what does the last outage teach?',
            vp: 'Is the gap CCNA fundamentals or CCNP depth — and which one is the outage risk your team carries?',
            all: 'Between CCNA fundamentals and CCNP depth, which one is your team actually behind on?',
            ic: 'Which network skill — routing, switching, or core design — is the one holding your team back?',
            ldo: 'Which network track has no certified coverage on the books, and which one does the rollout check?'
          },
          T: {
            cx: 'Is there a network refresh, a rollout, or an audit that makes CCNA/CCNP readiness date-stamped?',
            vp: 'What deadline would a certified network team unblock — a refresh, a rollout, or an audit — and how near is it?',
            all: 'Is there a rollout or refresh window that pins when the team has to be certified?',
            ic: 'Is there an exam window or a refresh that sets when you need the cert?',
            ldo: 'Do the Learning Credits expire at the contract renewal — and does that date set the spend?'
          }
        },
        byLevel: {
          cx: 'Network uptime is revenue uptime; certified depth is the line the ops review checks.',
          vp: 'The spine is only as strong as the certified bench holding it — coverage is the reliability plan.',
          dir: 'The infrastructure program needs evidence; CCNA-to-CCNP coverage is the provable skill map.',
          mgr: 'The team configures by memory; the cert calendar keeps the core configs current.',
          ic: 'CCNP is the title move — labs on routing, switching, and the exam pattern you need.',
          ldo: 'Cisco Learning Credits expire — schedule the track before the renewal turns them into nothing.'
        }
      },
      sec: {
        label: 'Security · firewalls & zero trust',
        angle: 'firewall rules and remote access are the network’s front door, and zero trust is the direction every audit points',
        hook: 'Every security review ends at the same door: the firewall and access layer. Certified depth there is how the review closes fast.',
        bridge: 'Between firewall rules, VPN and remote access, and zero trust posture — which is the line your security team flags?',
        stake: 'An outdated firewall config is the classic first step of both the audit finding and the breach.',
        opener: 'The lane within Cisco: security — firewalls and zero trust. Every review ends at the same door: the access layer. For {field}, certified depth there closes the review fast.',
        bant: {
          B: {
            cx: 'Is network-security skilling for {field} a committed line in the security budget — and do Learning Credits on the contract already cover the firewall track?',
            vp: 'Is the firewall-skills line committed — and can Learning Credits on the contract absorb the track without new cash?',
            all: 'Where does firewall training money sit for {field} — the security budget, the network contract, or IT — and are credits earmarked?',
            ic: 'Do you have certification benefits you can use toward a security track — and is the ask already with your manager?',
            ldo: 'Do the Learning Credits that expire at renewal cover a firewall and zero-trust track, and is it scheduled?'
          },
          A: {
            cx: 'Who signs network-security skilling — you, the CISO, or the security leadership — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on the security PO, and can a one-page audit-map plan carry it?',
            all: 'Who owns the security perimeter decision — the security lead, the network team, or you — and is that the person to align with?',
            ic: 'Who approves your security certification path — your manager or the security lead — and is the lane clear?',
            ldo: 'Who issues the firewall training PO — procurement through the contract, or the security office — and does it need review?'
          },
          N: {
            cx: 'Which perimeter gap is the exposure — firewall rules, remote access, or zero trust — and what does the audit list say?',
            vp: 'Which perimeter line is your team thinnest on — firewall, remote access, or zero trust — and what is the posture risk?',
            all: 'Between firewall config, remote access and zero trust, which one is your team weakest on?',
            ic: 'Which security skill — firewall, VPN, or zero trust — is the gap in your daily work?',
            ldo: 'Which security track has no certified coverage, and which one does the audit actually check?'
          },
          T: {
            cx: 'Is there an audit, a firewall refresh, or a zero-trust mandate that makes readiness date-stamped?',
            vp: 'What deadline would a certified security team unblock — an audit, a refresh, or a mandate — and how near is it?',
            all: 'Is there an audit or refresh window that pins when the team has to be ready?',
            ic: 'Is there an exam window or an audit that sets when you need the cert?',
            ldo: 'Does the audit calendar or the credit expiry set the spend date?'
          }
        },
        byLevel: {
          cx: 'The perimeter is the audit line; certified firewall depth is how the finding list stays short.',
          vp: 'Zero trust is the direction — the certified bench is the only way there.',
          dir: 'The security program needs control evidence; certified operators are the provable control.',
          mgr: 'The team owns the rules; certified practice keeps them auditable instead of homegrown.',
          ic: 'Firewall and zero trust certs are the specialization that differentiates you fast.',
          ldo: 'Security training crosses compliance lines — scope the track, then price the renewal.'
        }
      },
      collab: {
        label: 'Collaboration · Webex',
        angle: 'hybrid work runs on the collaboration platform, and upgrades rarely reach the people who live in it',
        hook: 'The office is hybrid and the platform carries it — but the workforce runs the old version of the tool on muscle memory. That is the gap.',
        bridge: 'Between calling, meetings, and messaging — where is the team still working the pre-hybrid way?',
        stake: 'A collaboration platform is only as good as the certified habits around it.',
        opener: 'The lane within Cisco: collaboration. Hybrid work runs on the platform, and the workforce runs the old version on muscle memory. For {field}, certified adoption protects the UC investment.',
        bant: {
          B: {
            cx: 'Is collaboration skilling for {field} funded beside the UC contract — and do Learning Credits already on it cover the track?',
            vp: 'Is the collaboration line committed — and can Learning Credits or the UC contract absorb the cost?',
            all: 'Where does collaboration training money sit for {field} — the UC contract, IT, or L&D — and are credits earmarked?',
            ic: 'Do you have benefits you can use toward a collaboration cert — and is the ask already with your manager?',
            ldo: 'Does the UC contract or Learning Credit balance cover the collaboration track, and when does it renew?'
          },
          A: {
            cx: 'Who signs the collaboration investment — you, the CIO, or the workplace leadership — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on the collaboration PO, and can a one-page adoption plan carry it?',
            all: 'Who owns the collaboration platform decision — IT ops, the workplace lead, or the business — and is that the person to align with?',
            ic: 'Who approves your collaboration certification path — your manager or IT — and is the lane clear?',
            ldo: 'Who issues the collaboration training PO — procurement through the UC contract, or IT — and is one signature enough?'
          },
          N: {
            cx: 'Which collaboration gap is the exposure — calling, meetings, or messaging — and what is hybrid friction costing?',
            vp: 'Which platform capability is your team underusing — calling, meetings, or messaging — and what is that costing?',
            all: 'Between calling, meetings and messaging, which one is your team still working the old way?',
            ic: 'Which collaboration skill — calling, meetings, or messaging — is the one your team keeps fumbling?',
            ldo: 'Which platform capability is underutilized against the contract you pay for, and which one does the review check?'
          },
          T: {
            cx: 'Is there a platform upgrade, a license renewal, or a return-to-office date that makes readiness date-stamped?',
            vp: 'What deadline would a trained base unblock — an upgrade, a renewal, or a return-to-office — and how near is it?',
            all: 'Is there a platform upgrade or license renewal window that pins when the team has to be ready?',
            ic: 'Is there an exam window or a platform upgrade that sets when you get certified?',
            ldo: 'Does the UC renewal or credit-expiry date set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'Hybrid work ran on the platform through the transition; certified adoption protects the investment.',
          vp: 'The team meetings still fumble — the cert is what turns the platform into structure.',
          dir: 'The workplace program needs adoption evidence; certified usage is the metric.',
          mgr: 'The team runs the platform by habit; certification fixes the habits that waste time.',
          ic: 'Collaboration platform certs are quick wins on the résumé and everyday leverage.',
          ldo: 'Collaboration training rides the UC contract — pin the track to the renewal.'
        }
      }
    }
  },

  google: {
    label: 'Google Cloud',
    tools: 'Cloud Engineering · Data & BigQuery · AI/ML',
    relation: 'NetCom is an authorized Google Cloud Training Partner — official Google Cloud curriculum through the authorized channel.',
    angle: 'GCP bets land fast, and the platform and data teams behind them are usually a version behind',
    hook: 'The GCP project shipped last quarter; the team that runs it is still on the syllabus from two versions ago. That gap is our lane.',
    bridge: 'Between cloud engineering, data, and AI/ML — which GCP lane is the project currently waiting on?',
    stake: 'A stalled GCP build costs more in idle capacity than the training that would unblock it.',
    opener: 'The lane I mean specifically: Google Cloud. The project shipped and the platform and data teams running it are a version behind. For {field}, that lag is the GCP spend quietly idling.',
    bant: {
      B: {
        cx: 'Is Google Cloud upskilling for {field} a committed line in the cloud budget this year — and do compute-commitment credits or training funds cover part?',
        vp: 'Is Google Cloud upskilling for {field} a committed line this year, or a proposal finance still needs to bless — and do compute-commitment credits absorb part of it?',
        all: 'Where does GCP training money sit for {field} — the cloud budget, data, or L&D — and are credits earmarked?',
        ic: 'Do you have access to GCP certification funding through your account, and is the ask queued?',
        ldo: 'Where does GCP spend flow — compute commitments, the cloud line, or per project — and do credits expire on a date?'
      },
      A: {
        cx: 'Who signs Google Cloud skilling — you, the CTO/CIO, or the platform leadership — and how far does your endorsement carry?',
        vp: 'Whose sign-off sits above you on a GCP training PO, and can a one-page platform plan carry it?',
        all: 'Who owns GCP skill decisions for your program — the platform lead, the data lead, or you?',
        ic: 'Who approves your GCP certification path — your manager or the platform lead — and is the lane clear?',
        ldo: 'Who issues the GCP training PO — procurement through the cloud contract, or engineering — and is one signature enough?'
      },
      N: {
        cx: 'Which GCP bet is most exposed — engineering, data, or AI/ML — and what is the gap costing the platform strategy?',
        vp: 'Which GCP lane is your team a version behind on — engineering, data, or AI/ML — and what is delivery waiting on?',
        all: 'Between cloud engineering, data and AI/ML, which GCP lane is your team thinnest on?',
        ic: 'Which GCP skill — engineering, data, or ML — is the gap in your next project?',
        ldo: 'Which GCP track has no certified coverage on the books, and which one does the review check?'
      },
      T: {
        cx: 'Is there a GCP migration, an ML launch, or a commitment renewal that makes readiness date-stamped?',
        vp: 'What deadline would a certified GCP team unblock — a migration, a launch, or a renewal — and how near is it?',
        all: 'Is there a migration or launch window that pins when the GCP team has to be ready?',
        ic: 'Is there an exam window or a project deadline that sets when you need the cert?',
        ldo: 'Do the compute-commitment credits expire on a date — and does that set the spend?'
      }
    },
    subsOrder: ['cloudeng', 'data', 'aiml'],
    subs: {
      cloudeng: {
        label: 'Cloud engineering',
        angle: 'GCP projects ship on platform teams that are usually a release behind the tools they run',
        hook: 'The GCP project shipped; the team that runs it is still certified against last year’s platform. That gap is the maintenance debt.',
        bridge: 'Between compute, networking, and storage — which GCP lane is the current project waiting on?',
        stake: 'A GCP platform gap shows up as project delays that idle more capacity than the training would cost.',
        opener: 'The lane within Google Cloud: cloud engineering. The project shipped; the team running it is certified against last year’s platform. For {field}, that lag is the maintenance debt nobody invoices.',
        bant: {
          B: {
            cx: 'Is platform engineering skilling for {field} a committed line beside the GCP commitment, or still a proposal finance debates?',
            vp: 'Is the platform line committed — and do the compute-commitment credits absorb part of the training?',
            all: 'Where does platform training money sit for {field} — the cloud budget, engineering, or per project — and are credits earmarked?',
            ic: 'Do you have access to platform certification funding through your account, and is the ask queued?',
            ldo: 'Where does platform spend flow — compute commitments, the cloud line, or per project — and do credits expire?'
          },
          A: {
            cx: 'Who signs the platform investment — you, the CTO/CIO, or engineering leadership — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on a platform PO, and can a one-page delivery plan carry it?',
            all: 'Who owns platform skill decisions — the cloud lead, engineering, or you — and is that the person to align with?',
            ic: 'Who approves your platform certification path — your manager or the cloud lead — and is the lane clear?',
            ldo: 'Who issues the platform training PO — procurement or engineering — and is one signature enough?'
          },
          N: {
            cx: 'Which platform gap is the exposure — compute, networking, or storage — and what does the delay cost the roadmap?',
            vp: 'Which platform lane is your team thinnest on — compute, networking, or storage — and what is delivery waiting on?',
            all: 'Between compute, networking and storage, which lane is your team actually behind on?',
            ic: 'Which platform skill — compute, networking, or storage — is the gap in your next build?',
            ldo: 'Which platform track has no certified coverage, and which one does the review check?'
          },
          T: {
            cx: 'Is there a migration, a project launch, or a commitment renewal that makes platform readiness date-stamped?',
            vp: 'What deadline would a certified platform team unblock — a migration or a launch — and how near is it?',
            all: 'Is there a migration or launch window that pins when the platform team has to be ready?',
            ic: 'Is there an exam window or a project date that sets when you need the cert?',
            ldo: 'Do the commitments or credits expire on a date — and does that set the spend?'
          }
        },
        byLevel: {
          cx: 'The cloud bet is made; certified platform depth is how the bet pays.',
          vp: 'Project delivery depends on platform skills — certs are the capacity plan.',
          dir: 'The platform program needs skill evidence; certified coverage is the map.',
          mgr: 'The team runs production GCP; cert currency is the safety net under it.',
          ic: 'The Associate followed by the Professional track — labs on the version you run.',
          ldo: 'GCP training comes off compute commitments; attach tracks before renewal.'
        }
      },
      data: {
        label: 'Data & BigQuery',
        angle: 'data teams are hired for analysis, but the warehouse and pipelines they run are a certified skill of their own',
        hook: 'Your data team analyzes; the warehouse behind them is a certification of its own — and it is the thing that actually gates the insights.',
        bridge: 'Between warehouse, pipelines, and dashboards — which layer is currently the slowest on the data team?',
        stake: 'A slow data layer makes every downstream decision slower — the analyst hours it burns dwarf the training.',
        opener: 'The lane within Google Cloud: data and BigQuery. Analysts are hired for analysis; the warehouse behind them is a certification of its own. For {field}, certified pipelines unblock the insight queue.',
        bant: {
          B: {
            cx: 'Is data engineering skilling for {field} a committed line in the data budget — and do GCP commitments or credits cover part?',
            vp: 'Is the data line committed — and do the account credits absorb part of the warehouse training?',
            all: 'Where does data training money sit for {field} — the data budget, the cloud account, or L&D — and are credits earmarked?',
            ic: 'Do you have access to BigQuery certification funding through your team, and is the ask queued?',
            ldo: 'Where does data spend flow — the account, the data line, or per project — and do credits expire on a date?'
          },
          A: {
            cx: 'Who signs the data investment — you, the CIO, or the data leadership — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on a data training PO, and can a one-page warehouse plan carry it?',
            all: 'Who owns the warehouse skill decision — the data lead, the platform team, or you?',
            ic: 'Who approves your BigQuery certification path — your manager or the data lead — and is the lane clear?',
            ldo: 'Who issues the data training PO — procurement through the account, or IT — and is one signature enough?'
          },
          N: {
            cx: 'Which data gap is the exposure — warehouse, pipelines, or reporting — and what is insight latency costing decisions?',
            vp: 'Which data layer is your team thinnest on — BigQuery, pipelines, or reporting — and what is stalling insights?',
            all: 'Between warehouse, pipelines and dashboards, which layer is your team slowest on?',
            ic: 'Which data skill — BigQuery, pipelines, or reporting — is the gap between you and the data engineer role?',
            ldo: 'Which data track has no certified coverage on the books, and which one does the review check?'
          },
          T: {
            cx: 'Is there a warehouse migration, a reporting cycle, or a compliance date that makes data readiness date-stamped?',
            vp: 'What deadline would a certified data team unblock — a migration, a reporting push, or a compliance date — and how near is it?',
            all: 'Is there a migration or reporting window that pins when the data team has to be ready?',
            ic: 'Is there an exam window or a reporting season that sets when you need the cert?',
            ldo: 'Do the account credits or a compliance cycle set the spend date?'
          }
        },
        byLevel: {
          cx: 'Decisions run on the warehouse; certified data depth is the reliability behind the deck.',
          vp: 'Insight speed is decision speed — the data bench needs current tooling skills.',
          dir: 'The analytics program needs delivery evidence; certified pipelines are how you show it.',
          mgr: 'The team is hired for analysis but slowed by the warehouse; certs fix the bottleneck.',
          ic: 'BigQuery and pipeline certs are the difference between “analyst” and “data engineer.”',
          ldo: 'Data training rides the cloud account; pin the tracks to the commitments before renewal.'
        }
      },
      aiml: {
        label: 'AI & ML · Vertex AI',
        angle: 'AI projects are greenlit, then stall for lack of certified ML engineering capacity',
        hook: 'The AI projects are greenlit; the certified ML engineers to run them are not. That is the stall your peers describe, not “culture.”',
        bridge: 'Between model training, deployment, and MLOps — which stage is your AI project currently stuck at?',
        stake: 'An AI project stalled on ML talent burns more in idle compute and salaries than the training would cost.',
        opener: 'The lane within Google Cloud: AI and ML — Vertex AI. Projects get greenlit, then stall for lack of certified ML engineers. For {field}, that stall burns more in idle compute than the training costs.',
        bant: {
          B: {
            cx: 'Is ML engineering skilling for {field} a committed line in the AI budget — and do the GCP commitments cover part of it?',
            vp: 'Is the ML line committed — and do the account credits absorb part of the training cost?',
            all: 'Where does ML training money sit for {field} — the AI budget, the cloud account, or the data line — and are credits earmarked?',
            ic: 'Do you have access to ML certification funding through your team, and is the ask queued?',
            ldo: 'Where does ML spend flow — the AI line, the account, or per project — and do credits expire on a date?'
          },
          A: {
            cx: 'Who signs the AI delivery investment — you, the data science lead, or engineering — and how far does your endorsement carry?',
            vp: 'Whose sign-off sits above you on an ML training PO, and can a one-page model-delivery plan carry it?',
            all: 'Who owns AI delivery skill decisions — the data science lead, the ML platform team, or you?',
            ic: 'Who approves your ML certification path — your manager or the data science lead — and is the lane clear?',
            ldo: 'Who issues the ML training PO — procurement under the AI line, or engineering — and does it need review?'
          },
          N: {
            cx: 'Which AI stage is the stall — model training, deployment, or MLOps — and what is idle compute costing the roadmap?',
            vp: 'Which ML stage is your team stuck at — training, deployment, or MLOps — and what is the roadmap waiting on?',
            all: 'Between Vertex AI, MLOps and deployment, which stage is your team actually stuck at?',
            ic: 'Which ML skill — Vertex AI, MLOps, or deployment — is the one that gets you on the projects?',
            ldo: 'Which AI track has no certified coverage on the books, and which one does the review check?'
          },
          T: {
            cx: 'Is there an AI launch date, a funding cycle, or a go-live that makes ML readiness date-stamped?',
            vp: 'What deadline would certified ML engineers unblock — a launch, a go-live, or a funding checkpoint — and how near is it?',
            all: 'Is there a model launch or funding checkpoint that pins when the ML team has to be ready?',
            ic: 'Is there an exam window or a project launch that sets when you need the cert?',
            ldo: 'Does the funding cycle or credit expiry set when the ML spend lands?'
          }
        },
        byLevel: {
          cx: 'The board funded the AI; certified ML capacity is how it delivers on schedule.',
          vp: 'AI delivery is a capacity problem first — the ML bench needs certified depth.',
          dir: 'The AI program file needs progress evidence; certified ML engineers are the proof.',
          mgr: 'The team has the idea but not the ML depth — certs close the skill gap on the roadmap.',
          ic: 'Vertex AI and MLOps certs are the fast lane into the projects everyone wants.',
          ldo: 'AI training is new budget — scope the tracks now while the AI line exists.'
        }
      }
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
    opener: 'The lane I mean specifically: AI readiness. The AI is funded and deployed — the certified workforce behind it is the weakest line in the governance story. For {field}, that line is what the review will probe.',
    bant: {
      B: {
        cx: 'Is AI readiness skilling for {field} a committed line in the AI budget — or still an afterthought the board has not tied to the spend?',
        vp: 'Is the AI readiness line committed, or still vague — and who owns the training dollars in the rollout?',
        all: 'Where does AI readiness training money sit for {field} — the AI line, L&D, or compliance — and is any of it carved out yet?',
        ic: 'Does your org fund AI literacy or governance certification — and is the request already made?',
        ldo: 'Where does AI readiness spend flow — the AI budget, compliance, or L&D — and does a governance review set the window?'
      },
      A: {
        cx: 'Who owns AI readiness at your level — you, the Chief AI Officer, or the board-mandated owner — and who signs the training?',
        vp: 'Whose sign-off sits above you on an AI readiness plan, and can a one-page governance map carry it?',
        all: 'Who owns the AI readiness decision — the AI lead, the governance owner, or you — and is that the person to align with?',
        ic: 'Who approves your AI certification path — your manager or the AI lead — and is the lane clear?',
        ldo: 'Who issues the AI readiness PO — the AI line owner, compliance, or L&D — and does it need review?'
      },
      N: {
        cx: 'Which AI capability is board-critical — governance, engineering, or front-line use — and where is the readiness gap?',
        vp: 'Which AI capability is your org thinnest on — governance, engineering, or front-line use — and what is the risk?',
        all: 'Between governance, LLM engineering and front-line use, which one is your team missing?',
        ic: 'Which AI skill — governance, engineering, or safe use — is the one that makes you the accountable person?',
        ldo: 'Which AI track has no certifiable coverage on the books, and which one does the review actually check?'
      },
      T: {
        cx: 'Is there an AI rollout, a governance deadline, or a funding review that makes readiness date-stamped?',
        vp: 'What deadline would a certified AI base unblock — a rollout, a review, or a funding cycle — and how near is it?',
        all: 'Is there a rollout wave or a governance review that pins when readiness has to be proven?',
        ic: 'Is there an exam window or a rollout that sets when you get certified?',
        ldo: 'Does the governance review or budget cycle set when the spend lands?'
      }
    },
    subsOrder: ['governance', 'llm', 'frontline'],
    subs: {
      governance: {
        label: 'AI governance',
        angle: 'AI is deployed and funded; the governance and accountability muscle behind it is the weakest line in the story',
        hook: 'The board approves the AI spend and asks one question: who is accountable, trained, and provable? Governance certs are the vocabulary for that answer.',
        bridge: 'Who owns your AI risk register today — and which role has the certified mandate to update it?',
        stake: 'AI governance without certified depth is a policy nobody can defend at the review.',
        opener: 'The lane within AI CERTs: governance. AI is funded and deployed; the accountability muscle behind it is the weakest line. For {field}, certified governance is the defensible answer at the review.',
        bant: {
          B: {
            cx: 'Is AI governance skilling for {field} a committed line in the risk or AI budget — or still a policy people cannot defend at review?',
            vp: 'Is governance training budget attached to the AI rollout, or still a line nobody owns yet?',
            all: 'Where does governance training money sit for {field} — the AI line, risk, or compliance — and is it mapped to the rollout?',
            ic: 'Does your org fund governance certification, and is the request already with your manager?',
            ldo: 'Where does governance spend flow — the risk budget, compliance, or the AI line — and does the review set the window?'
          },
          A: {
            cx: 'Who owns AI governance at your level — you, the risk office, or the board — and who signs the mandate and the training?',
            vp: 'Whose sign-off sits above you on a governance training plan, and can a one-page risk map carry it?',
            all: 'Who owns the AI risk register and its training — the AI lead, risk, or you — and is that the person to align with?',
            ic: 'Who approves your governance certification path — your manager or the risk lead — and is the lane clear?',
            ldo: 'Who issues the governance PO — the risk office, compliance, or the AI line — and does it need review?'
          },
          N: {
            cx: 'Which governance gap is live — policy, risk, or accountability — and what is the board exposure?',
            vp: 'Which governance gap is real on your program — policy, risk, or accountability — and what is the review risk?',
            all: 'Between policy, risk and accountability, which one is your team actually missing?',
            ic: 'Which governance skill — policy, risk, or accountability — is the one that makes you the safe owner?',
            ldo: 'Which governance track has no certifiable coverage, and which one does the review check?'
          },
          T: {
            cx: 'Is there an AI review, a regulatory deadline, or a funding review that makes governance readiness date-stamped?',
            vp: 'What deadline would a certified governance team unblock — a review, a filing, or a funding review — and how near is it?',
            all: 'Is there a governance review or filing window that pins when coverage has to be provable?',
            ic: 'Is there an exam window or a filing that sets when you get certified?',
            ldo: 'Does the review calendar or budget cycle set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'The board wants a governance answer — certified depth is the answer that survives scrutiny.',
          vp: 'Rollout needs an accountability layer; certified governance is how you staff it.',
          dir: 'The AI program file needs a defensible risk story; certs make it provable.',
          mgr: 'The team ships AI; a certified governance owner keeps it inside the guardrails.',
          ic: 'Governance certs make you the person who can say “yes, safely” — a rare position.',
          ldo: 'Governance training often maps to compliance; scope the track against the AI spend.'
        }
      },
      llm: {
        label: 'LLM engineering',
        angle: 'LLM projects stall between prompt demos and production, precisely where certified engineering begins',
        hook: 'Every team has the demo; almost none have the engineering that gets an LLM into production safely. That is the exact line we train.',
        bridge: 'Between prompt engineering, RAG, and evaluation — which stage is your LLM project living in right now?',
        stake: 'An LLM in demo-forever costs more in missed releases than a certified engineer would.',
        opener: 'The lane within AI CERTs: LLM engineering. Every team has the demo; almost none have the engineering that gets an LLM into production. For {field}, certified RAG and evaluation end demo-forever.',
        bant: {
          B: {
            cx: 'Is LLM engineering skilling for {field} a committed line in the AI budget — or is the project living on demo budget and goodwill?',
            vp: 'Is the LLM line committed — or is the team still on ad-hoc demo funding for engineering?',
            all: 'Where does LLM engineering training money sit for {field} — the AI line, the data budget, or engineering L&D — and is it real?',
            ic: 'Does your org fund LLM engineering certification, and is the request already with your manager?',
            ldo: 'Where does LLM spend flow — the AI line, the data budget, or engineering — and does the funding cycle set it?'
          },
          A: {
            cx: 'Who owns LLM delivery at your level — you, the ML lead, or the AI governance office — and who signs the training?',
            vp: 'Whose sign-off sits above you on the LLM program, and can a one-page production plan carry the training?',
            all: 'Who owns LLM delivery for your program — the ML team, the platform lead, or you — and is that the person to align with?',
            ic: 'Who approves your LLM certification path — your manager or the ML lead — and is the lane clear?',
            ldo: 'Who issues the LLM training PO — the AI line owner, data, or engineering — and does it need review?'
          },
          N: {
            cx: 'Which LLM stage is the stall — RAG, evaluation, or deployment — and what is demo-forever costing the roadmap?',
            vp: 'Which LLM capability is your team missing — RAG, evaluation, or deployment — and what is delivery waiting on?',
            all: 'Between RAG, evaluation and deployment, which one is your project actually stuck at?',
            ic: 'Which LLM skill — RAG, evaluation, or deployment — is the one that moves you past demos?',
            ldo: 'Which LLM track has no certified coverage, and which one does the production review check?'
          },
          T: {
            cx: 'Is there a model launch, a funding checkpoint, or a platform decision that makes LLM readiness date-stamped?',
            vp: 'What deadline would certified LLM engineers unblock — a launch, a checkpoint, or a go-live — and how near is it?',
            all: 'Is there a launch or checkpoint window that pins when the LLM team has to be ready?',
            ic: 'Is there an exam window or a model launch that sets when you need the cert?',
            ldo: 'Does the funding cycle or contract date set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'The AI investment needs production proof — certified LLM engineering is how you get there.',
          vp: 'Delivery depends on engineering depth; the cert is the headcount you do not have to hire.',
          dir: 'The AI program needs delivery evidence; certified engineering is the provable progress.',
          mgr: 'The team has demo skills, not production skills — certs close exactly that gap.',
          ic: 'RAG and evaluation certs are the skills that move you from demo to production engineer.',
          ldo: 'LLM training is new spend — scope tracks against the AI budget while it exists.'
        }
      },
      frontline: {
        label: 'AI for the front line',
        angle: 'the workforce meets AI in tools and inboxes long before governance does, and nobody trained the encounter',
        hook: 'Your people are already inside AI tools — chat assistants, copilots, automation. The question is whether you trained the encounter before they met it.',
        bridge: 'Where does your front line actually touch AI today — chat tools, automation, or reporting?',
        stake: 'Untrained front-line AI use is a support and data-risk bill you pay quietly every month.',
        opener: 'The lane within AI CERTs: AI for the front line. Your people are already inside the tools — chat assistants, copilots, automation. For {field}, training the encounter before it happens is the control.',
        bant: {
          B: {
            cx: 'Is front-line AI training for {field} a committed line beside the AI rollout — or a support-cost problem nobody named yet?',
            vp: 'Is front-line AI training budget attached to the rollout, or still a line nobody owns?',
            all: 'Where does front-line AI training money sit for {field} — the rollout budget, L&D, or the business units — and is it real?',
            ic: 'Does your org fund AI literacy training, and is the request already with your manager?',
            ldo: 'Where does front-line AI spend flow — the rollout line, L&D, or per unit — and is it per-seat math?'
          },
          A: {
            cx: 'Who owns front-line AI enablement — you, HR, or the AI lead — and who signs the training at scale?',
            vp: 'Whose sign-off sits above you on the enablement plan, and can a one-page adoption map carry it?',
            all: 'Who owns front-line enablement for your team — HR, the AI lead, or the business units — and is that the person to align with?',
            ic: 'Who approves your AI literacy path — your manager or HR — and is the lane clear?',
            ldo: 'Who issues the front-line training PO — HR, the AI lead, or the units — and is one signature enough?'
          },
          N: {
            cx: 'Which front-line AI use is live — chat, automation, or reporting — and where are the mistakes costing support?',
            vp: 'Where is front-line AI touching your team — chat, automation, or reporting — and what is the misuse risk?',
            all: 'Between chat, automation and reporting, where is your team actually touching AI today?',
            ic: 'Which AI skill — chat, automation, or reporting — is the one that makes you safe with the tools?',
            ldo: 'Which front-line track has no certified coverage, and which one does the support review check?'
          },
          T: {
            cx: 'Is there a rollout wave, a go-live, or a support-cost review that makes front-line readiness date-stamped?',
            vp: 'What deadline would a trained front line unblock — a rollout wave or a go-live — and how near is it?',
            all: 'Is there a rollout wave or go-live date that pins when the front line has to be trained?',
            ic: 'Is there a training wave or an onboarding cycle that sets when you get it?',
            ldo: 'Does the rollout or budget cycle — not the quarter — set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'The workforce is in AI tools already; training is the governance line that reaches the floor.',
          vp: 'Front-line AI mistakes are a cost center; certified usage is the control.',
          dir: 'The enablement program needs adoption evidence; certified front-line use is the metric.',
          mgr: 'The team uses AI ad hoc; a short certified path ends the wild-west usage.',
          ic: 'AI literacy certs are the fastest résumé upgrade and the safest way to use the tools.',
          ldo: 'Front-line training is high-volume, low-per-seat — the contract line loves the math.'
        }
      }
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
    opener: 'The lane I mean specifically: ISC2. Auditors do not ask if your security team is trained — they ask who holds the certifications. For {field}, CISSP and entry coverage is the finding you can close.',
    bant: {
      B: {
        cx: 'Is security certification skilling for {field} a committed line in the compliance or security budget — and is CISSP coverage part of the plan?',
        vp: 'Is security certification upskilling for {field} a committed line this year — and does the compliance budget carry the track?',
        all: 'Where does security certification money sit for {field} — the security budget, compliance, or L&D — and is it mapped?',
        ic: 'Do you have certification benefits toward a CISSP or CC — and is the request already with your manager?',
        ldo: 'Where does ISC2 spend flow — the compliance budget, the security line, or per head — and does the audit cycle set it?'
      },
      A: {
        cx: 'Who owns security certification coverage — you, the CISO, or compliance — and who signs the program?',
        vp: 'Whose sign-off sits above you on the certification plan, and can a one-page audit-map carry it?',
        all: 'Who owns certification coverage for your team — the security manager, the CISO, or you?',
        ic: 'Who approves your CISSP path — your manager, the security lead, or the CISO — and is the lane clear?',
        ldo: 'Who issues the security certification PO — compliance, the security office, or procurement — and does it need review?'
      },
      N: {
        cx: 'Which security gap is the exposure — CISSP density, entry coverage, or specialties — and what does audit risk cost?',
        vp: 'Which certification lane is your team thinnest on — CISSP, entry, or specialties — and what is the posture risk?',
        all: 'Between CISSP, entry certs and specialties, which one is your team actually missing?',
        ic: 'Which ISC2 cert — CISSP, CC, or a specialty — is the one that fits your seat and your path?',
        ldo: 'Which certification track has no coverage on the books, and which one does the audit check?'
      },
      T: {
        cx: 'Is there an audit, a compliance deadline, or a cert-expiry cycle that makes security readiness date-stamped?',
        vp: 'What deadline would a certified security team unblock — an audit or a certification window — and how near is it?',
        all: 'Is there an audit or exam window that pins when the team has to be certified?',
        ic: 'Is there an exam window or an audit that sets when you sit for it?',
        ldo: 'Does the audit calendar or the CPE/CE cycle set when the spend lands?'
      }
    },
    subsOrder: ['cissp', 'cc', 'spec'],
    subs: {
      cissp: {
        label: 'CISSP',
        angle: 'CISSP is the certification the industry treats as the bar, and maintaining the bench is the recurring question',
        hook: 'The security program is only as credible as its CISSP density — and CISSP has an exam window your team needs to plan around.',
        bridge: 'How many CISSPs are on the bench today, and how many seats are scheduled to sit for it this year?',
        stake: 'Every pursuit and audit that hinges on CISSP coverage gets harder the longer the bench waits.',
        opener: 'The lane within ISC2: CISSP. The security program is only as credible as its CISSP density — and the exam window is a date on the calendar. For {field}, building the bench starts now, not at the audit.',
        bant: {
          B: {
            cx: 'Is CISSP coverage for {field} a committed line in the security budget — or still dependent on who volunteers each year?',
            vp: 'Is the CISSP line committed — and does the compliance budget carry the cohort?',
            all: 'Where does CISSP training money sit for {field} — the security budget, compliance, or per head — and is the cohort planned?',
            ic: 'Do you have certification benefits toward the CISSP — and is the request already with your manager?',
            ldo: 'Where does CISSP spend flow — the compliance budget or the security line — and can the cohort be sized now?'
          },
          A: {
            cx: 'Who owns CISSP coverage — you, the CISO, or compliance — and who signs the cohort?',
            vp: 'Whose sign-off sits above you on the CISSP plan, and can a one-page bench map carry it?',
            all: 'Who decides CISSP coverage — the security manager, the CISO, or you — and is that the person to align with?',
            ic: 'Who approves your CISSP path — your manager, the security lead, or the CISO — and is the lane clear?',
            ldo: 'Who issues the CISSP PO — compliance, the security office, or procurement — and does it need review?'
          },
          N: {
            cx: 'Which bench gap is the exposure — too few CISSPs or readiness for the next exam — and what does the audit list say?',
            vp: 'Is the gap CISSP count or exam readiness — and which one is the pursuit or audit risk?',
            all: 'Between certified headcount and exam readiness, which one is your team behind on?',
            ic: 'Which exam — the CISSP itself or a specialty — is the one that moves your security career?',
            ldo: 'Which certification lane has no coverage on the books, and which one does the audit check?'
          },
          T: {
            cx: 'Is there an exam window, an audit, or a renewal cycle that makes CISSP readiness date-stamped?',
            vp: 'What deadline would more CISSPs unblock — an audit or a pursuit — and how near is the exam?',
            all: 'Is there an exam window or an audit that pins when the bench has to be certified?',
            ic: 'Is there an exam window that fits your schedule — and should we anchor the prep to it?',
            ldo: 'Does the audit calendar or exam cycle set when the cohort spend lands?'
          }
        },
        byLevel: {
          cx: 'CISSP density is the bench strength the board and auditors actually check.',
          vp: 'Security leadership credibility runs on CISSP coverage — build the pipeline early.',
          dir: 'The security program file lists certified staff; CISSP is the star line item.',
          mgr: 'The team needs its next CISSP on the calendar before the window pressure builds.',
          ic: 'CISSP is the career line — start the exam prep with a window that fits your schedule.',
          ldo: 'CISSP training sits in the compliance budget; scope the cohort before the audit cycle.'
        }
      },
      cc: {
        label: 'Certified in Cybersecurity',
        angle: 'the entry certification that turns juniors into security staff fast, cheap, and provably',
        hook: 'The security team is one strong hire from overstretched — the fastest way to grow it is the entry cert that turns juniors into staff.',
        bridge: 'How many of your security-adjacent people — help desk, desktop, cloud — could sit for this in a quarter?',
        stake: 'Every month the junior bench stays uncertified is a month the senior team does the work.',
        opener: 'The lane within ISC2: Certified in Cybersecurity. The security team is one strong hire from overstretched — the entry cert turns juniors into staff fast. For {field}, it is the fastest known input to the pipeline.',
        bant: {
          B: {
            cx: 'Is entry security skilling for {field} a committed line in the IT training budget — or per-new-hire math nobody sized yet?',
            vp: 'Is the entry cert line committed — and does the per-head math make the cohort an easy yes?',
            all: 'Where does entry security training money sit for {field} — IT training, L&D, or per hire — and is it real?',
            ic: 'Do you have access to entry cert funding — and is the request already with your manager?',
            ldo: 'Where does entry cert spend flow — per head, IT training, or HR — and is it compact enough to approve?'
          },
          A: {
            cx: 'Who owns the security career ladder — you, HR, or the security manager — and who signs the entry program?',
            vp: 'Whose sign-off sits above you on the entry cohort, and can the per-head math carry it?',
            all: 'Who decides the entry security path — HR, the security manager, or the help-desk lead — and is that the person?',
            ic: 'Who approves your entry cert — your manager or the security team — and is the ask queued?',
            ldo: 'Who issues the entry cert PO — HR, IT, or the security office — and is one signature enough?'
          },
          N: {
            cx: 'Is the gap junior capacity or a missing talent ladder — and what does an overstretched senior team cost?',
            vp: 'Is the bench short on juniors or on the ladder to get them there — and which one is the pain?',
            all: 'Between junior capacity and the path to it, which one is your team actually missing?',
            ic: 'Which entry cert — CC in Cybersecurity, A+, or another — is the fastest door into your security role?',
            ldo: 'Which entry track has no coverage on the books, and which one does the staffing review check?'
          },
          T: {
            cx: 'Is there a hiring push, a project need, or a budget cycle that makes entry readiness date-stamped?',
            vp: 'What deadline would certified juniors unblock — a hiring push or a project wave — and how near is it?',
            all: 'Is there a hiring push or project wave that pins when the juniors have to be certified?',
            ic: 'Is there an exam window or a hiring cycle that sets when you sit for it?',
            ldo: 'Does the budget year or hiring cycle set when the entry spend lands?'
          }
        },
        byLevel: {
          cx: 'Security staffing is a pipeline problem; the entry cert is the fastest known input.',
          vp: 'The bench needs junior capacity — the entry cert converts hires into staff faster.',
          dir: 'The workforce plan needs a talent line; certified juniors are the provable path.',
          mgr: 'The team is one body short; a certified hire beats an uncertified résumé every time.',
          ic: 'This is the on-ramp — one exam, a real résumé line, and the door to security.',
          ldo: 'Entry certs are low-cost, high-count — exactly the line procurement likes.'
        }
      },
      spec: {
        label: 'Security specialties',
        angle: 'the specialties — cloud security, forensics, or management — are where teams differentiate and where coverage gaps hide',
        hook: 'Generalist security gets you through the audit; the specialty certs are what your team names when the hard questions start.',
        bridge: 'Between cloud security, forensics, and security management — which specialty is your team expected to own next?',
        stake: 'A specialty gap shows up precisely in the incident that the generalists cannot handle.',
        opener: 'The lane within ISC2: the specialties. Generalist security gets you through an audit; the specialties are what the hard questions target. For {field}, certified specialists are the named lanes in the incident plan.',
        bant: {
          B: {
            cx: 'Is specialty security skilling for {field} a committed line — cloud, forensic, or management — or still role-dependent year to year?',
            vp: 'Is the specialty line committed — and which lane does the compliance budget carry?',
            all: 'Where does specialty training money sit for {field} — the security budget, role budgets, or per head — and is it mapped to roles?',
            ic: 'Do you have certification benefits toward a specialty — and is the request already with your manager?',
            ldo: 'Where does specialty spend flow — the security line, per role, or compliance — and is it scoped to the org chart?'
          },
          A: {
            cx: 'Who owns specialty coverage — you, the security manager, or HR for roles — and who signs the program?',
            vp: 'Whose sign-off sits above you on the specialty plan, and can a role-map carry it?',
            all: 'Who maps specialty coverage to roles — the security manager, HR, or the team leads — and is that the person?',
            ic: 'Who approves your specialty path — your manager or the security lead — and is the lane clear?',
            ldo: 'Who issues the specialty PO — the security office, HR, or procurement — and does it need review?'
          },
          N: {
            cx: 'Which specialty gap is the exposure — cloud, forensic, or management — and what incident would it expose?',
            vp: 'Which specialty lane is your team thinnest on — cloud, forensic, or management — and what is the incident risk?',
            all: 'Between cloud, forensic and management, which specialty is your team expected to own next?',
            ic: 'Which specialty — cloud, forensic, or management — is the one that differentiates your seat?',
            ldo: 'Which specialty track has no coverage on the books, and which one does the incident review check?'
          },
          T: {
            cx: 'Is there a cloud migration, an incident review, or a role-opening that makes specialty readiness date-stamped?',
            vp: 'What deadline would certified specialists unblock — a migration or an incident review — and how near is it?',
            all: 'Is there a migration or opening that pins when the specialty has to be filled?',
            ic: 'Is there an exam window or a role move that sets when you specialize?',
            ldo: 'Does the migration or role-planning cycle set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'Specialty depth is the differentiation the security program sells internally.',
          vp: 'Coverage by specialty is the capacity map — certs fill the named lanes.',
          dir: 'The security program file names specialties; certified staff make the claims true.',
          mgr: 'The team needs the specialty for the projects coming; certs close the lane gaps.',
          ic: 'A specialty cert sets you apart from the generalist crowd — pick the lane you want.',
          ldo: 'Specialty training is role-mapped; scope tracks against the security org chart.'
        }
      }
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
    opener: 'The lane I mean specifically: PMI. Pursuits are won on staffing plans, and staffing plans are won on certified PMs. For {field}, expired PDUs and thin PMP coverage are silently shrinking the bench.',
    bant: {
      B: {
        cx: 'Is project-capability skilling for {field} a committed line in the PMO or delivery budget — and do PDU renewals factor into it?',
        vp: 'Is the delivery line committed — and does the PMO budget carry the PMP and PDU tracks?',
        all: 'Where does project training money sit for {field} — the PMO, delivery budgets, or L&D — and is the cohort sized?',
        ic: 'Do you have certification benefits toward the PMP — and is the request already with your manager?',
        ldo: 'Where does PMI spend flow — the PMO line, per project, or L&D — and does the pursuit calendar set it?'
      },
      A: {
        cx: 'Who owns delivery capability — you, the PMO director, or delivery leadership — and who signs the program?',
        vp: 'Whose sign-off sits above you on the PMP plan, and can a pursuit-staffing map carry it?',
        all: 'Who owns project capability for your program — the PMO director, delivery leadership, or you?',
        ic: 'Who approves your PMP path — your manager or the PMO — and is the lane clear?',
        ldo: 'Who issues the PMI PO — the PMO, procurement, or per project — and does it need review?'
      },
      N: {
        cx: 'Which delivery gap is the exposure — certified PMs for pursuits, expiring PDUs, or overruns — and what does it cost win-rate?',
        vp: 'Is the gap certified PMs for proposals or delivery overruns — and which one is the live pain?',
        all: 'Between pursuit-certified PMs and delivery quality, which one is your team behind on?',
        ic: 'Which project credential — PMP or CAPM — is the one that moves your project career?',
        ldo: 'Which project track has no coverage on the books, and which one does the staffing review check?'
      },
      T: {
        cx: 'Is there a pursuit deadline, a PDU-expiry cycle, or a delivery push that makes capability date-stamped?',
        vp: 'What deadline would certified PMs unblock — a pursuit or a delivery push — and how near is it?',
        all: 'Is there a pursuit season or a Q{Qtr} push that pins when the bench has to be certified?',
        ic: 'Is there an exam window or a pursuit cycle that sets when you sit for it?',
        ldo: 'Do the PDU expiries or the pursuit calendar set when the spend lands?'
      }
    },
    subsOrder: ['pmp', 'capm', 'pdu'],
    subs: {
      pmp: {
        label: 'PMP',
        angle: 'PMP is the project-leadership credential, and pursuit staffing is where its absence shows up first',
        hook: 'Pursuits are won on staffing plans — and staffing plans are won on PMP lines. The cert is the pursuit math.',
        bridge: 'Between certified PMs for pursuits and delivery quality on current projects — which is the live gap?',
        stake: 'An uncertified bench loses pursuits on paper before the work even starts.',
        opener: 'The lane within PMI: PMP. Pursuits are won on staffing pages, and staffing pages are won on certified PM lines. For {field}, the cohort is the pursuit math.',
        bant: {
          B: {
            cx: 'Is PMP development for {field} a committed line in the PMO budget — or a pursuit-season scramble every year?',
            vp: 'Is the PMP line committed — and does the PMO budget carry the full cohort?',
            all: 'Where does PMP training money sit for {field} — the PMO, project budgets, or L&D — and is the cohort sized?',
            ic: 'Do you have certification benefits toward the PMP — and is the request already with your manager?',
            ldo: 'Where does PMP spend flow — the PMO line or per project — and can the cohort be booked before the push?'
          },
          A: {
            cx: 'Who owns PM capability — you, the PMO director, or delivery leadership — and who signs the cohort?',
            vp: 'Whose sign-off sits above you on the PMP plan, and can a pursuit-map carry it?',
            all: 'Who decides PMP coverage — the PMO director, delivery leadership, or you — and is that the person?',
            ic: 'Who approves your PMP path — your manager or the PMO — and is the lane clear?',
            ldo: 'Who issues the PMP PO — the PMO, procurement, or per project — and does it need review?'
          },
          N: {
            cx: 'Is the gap pursuit-certified PMs or delivery overruns — and which one is the live pain?',
            vp: 'Is the gap certified PMs for pursuits or delivery quality — and which one costs more?',
            all: 'Between pursuit certification and delivery quality, which one is your team behind on?',
            ic: 'Is the PMP the move for your project career — and is now the window?',
            ldo: 'Which project lane has no certified coverage, and which one does the staffing review check?'
          },
          T: {
            cx: 'Is there a pursuit deadline or a delivery push that makes PMP readiness date-stamped?',
            vp: 'What deadline would more PMPs unblock — a pursuit or a delivery push — and how near is it?',
            all: 'Is there a pursuit season or a push that pins when the cohort has to be certified?',
            ic: 'Is there an exam window that fits your schedule — and should we anchor the prep to it?',
            ldo: 'Does the pursuit calendar or PDU cycle set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'Pursuit win-rate is the metric; PMP coverage is the staffing-page line that moves it.',
          vp: 'Delivery reliability runs on certified leads — build the PMP pipeline before the push.',
          dir: 'The PMO file needs certified coverage; PMP is the headline number.',
          mgr: 'The team runs projects; PMP certification raises the standard the work is held to.',
          ic: 'PMP is the big credential — prep, exam, and the PDU story that follows.',
          ldo: 'PMP training is PMO-managed; scope the cohort against the pursuit calendar.'
        }
      },
      capm: {
        label: 'CAPM',
        angle: 'CAPM is the entry project credential that turns coordinators into planners',
        hook: 'You have the coordinators doing the work; CAPM is the low-cost credential that turns them into planners — before the PMP years.',
        bridge: 'How many coordinators and junior project staff could carry a real project plan if they had the credential?',
        stake: 'Uncertified coordinators stretch the PMPs thin; CAPM is the buffer that keeps them mid-project.',
        opener: 'The lane within PMI: CAPM. The coordinators carry the work; the credential turns them into planners. For {field}, a cheap cohort lifts the planning floor across the project function.',
        bant: {
          B: {
            cx: 'Is entry project skilling for {field} a committed line in the PMO budget — or per-coordinator math nobody sized yet?',
            vp: 'Is the entry project line committed — and does the per-head math make the cohort an easy yes?',
            all: 'Where does CAPM training money sit for {field} — the PMO, project budgets, or L&D — and is the cohort real?',
            ic: 'Do you have access to entry project certification funding — and is the request already with your manager?',
            ldo: 'Where does CAPM spend flow — per head, the PMO line, or L&D — and is it compact enough to approve?'
          },
          A: {
            cx: 'Who owns the project career ladder — you, the PMO director, or HR — and who signs the entry program?',
            vp: 'Whose sign-off sits above you on the coordinator cohort, and can the per-head math carry it?',
            all: 'Who decides the entry project path — the PMO director, HR, or the coordinators’ leads — and is that the person?',
            ic: 'Who approves your CAPM — your manager or the PMO — and is the ask queued?',
            ldo: 'Who issues the CAPM PO — the PMO, HR, or per project — and is one signature enough?'
          },
          N: {
            cx: 'Is the gap coordinator capacity or plan quality — and what does stretched PMP time cost delivery?',
            vp: 'Is the gap coordinator volume or planning depth — and which one is the pain?',
            all: 'Between coordinator capacity and plan quality, which one is your team behind on?',
            ic: 'Is CAPM the right on-ramp for your project path — and is the exam the next step?',
            ldo: 'Which entry project track has no coverage, and which one does the staffing review check?'
          },
          T: {
            cx: 'Is there a hiring push, a project wave, or a budget cycle that makes coordinator readiness date-stamped?',
            vp: 'What deadline would certified coordinators unblock — a project wave or a hiring push — and how near is it?',
            all: 'Is there a project wave or a push that pins when the coordinators have to be certified?',
            ic: 'Is there an exam window or a project cycle that sets when you sit for it?',
            ldo: 'Does the budget year or project wave set when the entry spend lands?'
          }
        },
        byLevel: {
          cx: 'Project pipeline health starts at the coordinator level; CAPM raises the floor cheaply.',
          vp: 'Capacity without planning depth is busywork — CAPM is the cheap fix.',
          dir: 'The PMO needs an entry credential path; CAPM is the documented one.',
          mgr: 'The coordinators carry the admin; the cert turns them into planners.',
          ic: 'CAPM is the on-ramp to project work — one exam, real planning skills.',
          ldo: 'Entry project training is per-head and compact — easy line-item math.'
        }
      },
      pdu: {
        label: 'PDU renewal',
        angle: 'certified PMs expire quietly, and expiration is how the bench loses its letter on paper',
        hook: 'Every PMP on your bench has a PDU clock — and expired PDUs quietly remove the letter from your pursuit staffing. Renewal is the cheap prevention.',
        bridge: 'How many of your certified PMs are renewing this year — and how many have already gone quiet?',
        stake: 'An expired PDU is a certified lead the next pursuit simply cannot staff.',
        opener: 'The lane within PMI: PDU renewal. Certified PMs expire quietly, and expiration removes the letter from your staffing pages. For {field}, renewal courses are the cheap prevention with a calendar.',
        bant: {
          B: {
            cx: 'Is PDU renewal a budgeted line in the PMO — or is every renewal a last-quarter scramble?',
            vp: 'Is the renewal line committed — and does the per-head renewal math make it an easy yes?',
            all: 'Where does renewal training money sit for {field} — the PMO, per head, or L&D — and is the renewal cycle tracked?',
            ic: 'Do you use your benefits for PDU renewal — and is the request already with your manager?',
            ldo: 'Where does renewal spend flow — the PMO line or per head — and is it calendared against expiries?'
          },
          A: {
            cx: 'Who owns certification currency — you, the PMO, or HR — and who signs the renewal program?',
            vp: 'Whose sign-off sits above you on the renewal plan, and can an expiry-list carry it?',
            all: 'Who tracks PDU status — the PMO, HR, or the individual PMs — and is that tracked or ad hoc?',
            ic: 'Who watches your PDU clock — you or the PMO — and is the renewal already planned?',
            ldo: 'Who issues the renewal PO — the PMO or procurement — and does the expiry list trigger it?'
          },
          N: {
            cx: 'Is the gap expiring PDUs or already-lapsed certs — and what does that do to certified staffing?',
            vp: 'Are letters about to lapse on your bench — and what does that cost the next pursuit?',
            all: 'Between expiring PDUs and lapsed certs, which one is already on your books?',
            ic: 'Is your PDU cycle the thing standing between you and keeping the letter — and is it planned?',
            ldo: 'Which renewal track has unbooked capacity, and which expiries are coming first?'
          },
          T: {
            cx: 'Is there a renewal cycle or pursuit season that makes certified staffing date-stamped?',
            vp: 'What deadline would renewals unblock — a pursuit or a renewal cycle — and how near is it?',
            all: 'Is there a renewal cycle or a pursuit season that pins when the letters have to be current?',
            ic: 'Is there a renewal deadline on your calendar — and should we plan the PDUs against it?',
            ldo: 'Does the PDU-expiry list set when the renewal spend lands?'
          }
        },
        byLevel: {
          cx: 'Certified staffing is the pursuit asset; expiry is an avoidable shrinkage.',
          vp: 'The bench is the asset — renew the letters before the pursuit needs them.',
          dir: 'The PMO file tracks renewals; certified coverage is the auditable status.',
          mgr: 'The team’s letters lapse silently; renewal training is the fix with a calendar.',
          ic: 'PDU renewal keeps the letter you worked for — a few courses, one cycle.',
          ldo: 'Renewal is per-head, low-cost, and calendar-driven — clean vendor math.'
        }
      }
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
    opener: 'The lane I mean specifically: CompTIA. The help desk and the security desk both start at the same certifications — A+, Network+, Security+. For {field}, that shelf is the career ladder under the whole team.',
    bant: {
      B: {
        cx: 'Is entry IT certification for {field} a committed line in the IT training budget — or per-hire math nobody sized yet?',
        vp: 'Is the IT cert line committed — and does the per-head pricing make the cohort an easy yes?',
        all: 'Where does CompTIA training money sit for {field} — the IT budget, per department, or L&D — and is the cohort real?',
        ic: 'Do you have access to entry certification funding — and is the request already with your manager?',
        ldo: 'Where does CompTIA spend flow — per head, the IT line, or L&D — and is it compact enough to approve?'
      },
      A: {
        cx: 'Who owns the IT credential ladder — you, IT leadership, or HR — and who signs the program?',
        vp: 'Whose sign-off sits above you on the cert cohort, and can the per-head math carry it?',
        all: 'Who owns the credential standard for your team — the help-desk lead, IT, or HR — and is that the person?',
        ic: 'Who approves your entry cert — your manager or the team lead — and is the ask queued?',
        ldo: 'Who issues the CompTIA PO — HR, IT, or procurement — and is one signature enough?'
      },
      N: {
        cx: 'Is the gap ticket speed or the career ladder — and what does an uncertified help desk cost the org?',
        vp: 'Is the gap support quality or the pipeline into IT — and which one is the pain?',
        all: 'Between A+, Network+ and Security+, which track is your team pulling toward next?',
        ic: 'Which entry cert — A+, Network+, or Security+ — is the right first door for your path?',
        ldo: 'Which entry track has no coverage on the books, and which one does the staffing review check?'
      },
      T: {
        cx: 'Is there a hiring push, a service review, or an audit of certified staff that makes coverage date-stamped?',
        vp: 'What deadline would certified staff unblock — a hiring push or a service review — and how near is it?',
        all: 'Is there a hiring push or a season that pins when the team has to be certified?',
        ic: 'Is there an exam window or a hiring cycle that sets when you sit for it?',
        ldo: 'Does the budget year or the renewal cycle set when the spend lands?'
      }
    },
    subsOrder: ['aplus', 'secplus'],
    subs: {
      aplus: {
        label: 'A+ · support fundamentals',
        angle: 'the help desk is the on-ramp to everything IT, and certification is the shelf under the whole career ladder',
        hook: 'Every IT career in your org starts on the help desk — and A+ is the shelf under that ladder. Coverage there compounds everywhere above it.',
        bridge: 'How many of your support staff hold A+ — and how many new hires are expected to walk in with it?',
        stake: 'Uncertified support fundamentals show up as slower tickets today and a weaker ladder tomorrow.',
        opener: 'The lane within CompTIA: A+. Every IT career in your org starts on the help desk, and A+ is the shelf under the ladder. For {field}, coverage there compounds everywhere above it.',
        bant: {
          B: {
            cx: 'Is A+ coverage for {field} a committed line in the IT training budget — or per-hire math nobody sized yet?',
            vp: 'Is the A+ line committed — and does the per-head pricing make the cohort an easy yes?',
            all: 'Where does A+ training money sit for {field} — the IT budget, the help desk, or HR — and is the cohort real?',
            ic: 'Do you have access to entry certification funding — and is the request already with your manager?',
            ldo: 'Where does A+ spend flow — per head, the IT line, or HR — and is it compact enough to approve?'
          },
          A: {
            cx: 'Who owns the support credential standard — you, IT leadership, or HR — and who signs it?',
            vp: 'Whose sign-off sits above you on the cohort, and can the per-head math carry it?',
            all: 'Who owns the help-desk credential standard — the help-desk lead, HR, or you?',
            ic: 'Who approves your A+ — your manager or the help-desk lead — and is the ask queued?',
            ldo: 'Who issues the A+ PO — HR, IT, or procurement — and is one signature enough?'
          },
          N: {
            cx: 'Is the gap ticket speed or the IT career ladder — and what does support quality cost the org?',
            vp: 'Is the gap support speed or the pipeline into IT — and which one matters more right now?',
            all: 'Between ticket speed and career-path quality, which one is your team behind on?',
            ic: 'Is A+ the right first rung for your IT path — and is now the window?',
            ldo: 'Which entry track has no coverage on the books, and which one does the staffing review check?'
          },
          T: {
            cx: 'Is there a hiring push or a service-level review that makes support readiness date-stamped?',
            vp: 'What deadline would certified staff unblock — a hiring push or a service review — and how near is it?',
            all: 'Is there a hiring push or a season that pins when the support team has to be certified?',
            ic: 'Is there an exam window or a hiring cycle that sets when you sit for it?',
            ldo: 'Does the budget year or the service review set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'Support quality is the customer front door; A+ coverage is the standard under it.',
          vp: 'The help desk is the pipeline into the whole IT org — certify the on-ramp.',
          dir: 'The workforce plan needs a credential ladder; A+ is the documented first rung.',
          mgr: 'The team handles the tickets; A+ certification raises the floor on every one.',
          ic: 'A+ is where every IT career starts — get the fundamentals certified first.',
          ldo: 'Entry certs are low-cost and volume-friendly — the numbers work easily.'
        }
      },
      secplus: {
        label: 'Security+',
        angle: 'Security+ is the first security credential and the audit’s favorite checkbox for entry staff',
        hook: 'Auditors love the Security+ checkbox — and it is the fastest way to make your entry and mid-level staff defensible security hires.',
        bridge: 'How many of your security-adjacent staff hold Security+ — and how many should, per the audit list?',
        stake: 'Every role the audit expects to be Security+-certified and is not is a finding with your name on it.',
        opener: 'The lane within CompTIA: Security+. It is the audit’s favorite checkbox for entry staff — and the fastest way to make the team defensible hires. For {field}, it closes credential findings before the list.',
        bant: {
          B: {
            cx: 'Is Security+ coverage for {field} a committed line in the security training budget — or a per-role checkbox nobody audited yet?',
            vp: 'Is the Security+ line committed — and does the per-head pricing make the cohort an easy yes?',
            all: 'Where does Security+ training money sit for {field} — the security budget, IT, or HR roles — and is the cohort real?',
            ic: 'Do you have access to security certification funding — and is the request already with your manager?',
            ldo: 'Where does Security+ spend flow — the security line, per role, or HR — and is it scoped to the roles?'
          },
          A: {
            cx: 'Who owns the credential requirements — you, the security lead, or HR — and who signs the program?',
            vp: 'Whose sign-off sits above you on the cohort, and can an audit-map carry it?',
            all: 'Who sets the credential requirements for your team — the security lead, HR, or you?',
            ic: 'Who approves your Security+ — your manager or the security lead — and is the ask queued?',
            ldo: 'Who issues the Security+ PO — HR, the security office, or procurement — and does it need review?'
          },
          N: {
            cx: 'Is the gap certified headcount or readiness for the next roles — and what does the audit finding cost?',
            vp: 'Is the gap certified headcount or the entry bar — and which one is the pain?',
            all: 'Between certified headcount and role readiness, which one is your team behind on?',
            ic: 'Is Security+ the right first security door for your path — and is now the window?',
            ldo: 'Which security track has no coverage on the books, and which one does the audit check?'
          },
          T: {
            cx: 'Is there an audit, a hiring push, or a role restructure that makes Security+ coverage date-stamped?',
            vp: 'What deadline would certified staff unblock — an audit or a hiring push — and how near is it?',
            all: 'Is there an audit or role window that pins when the team has to be certified?',
            ic: 'Is there an exam window or an audit that sets when you sit for it?',
            ldo: 'Does the audit calendar or the role plan set when the spend lands?'
          }
        },
        byLevel: {
          cx: 'Audit findings on staff credentials are the avoidable ones — close them before the list.',
          vp: 'Security staffing standards start at Security+; certify the entry bar.',
          dir: 'The security program file needs credentialed staff; Security+ is the baseline.',
          mgr: 'The team fields security-adjacent work; the cert makes them defensible hires.',
          ic: 'Security+ is the first security door — take it before the specialty certs.',
          ldo: 'Security+ is a named checkbox in many contracts — confirm, scope, send.'
        }
      }
    }
  }
};