/* NetCom SDR — Programs / vendor filter with subtopics.
   The user flow is: decision-maker level → industry → program (vendor)
   → subtopic (e.g., Microsoft → Power BI or Azure).
   Each vendor carries the standing relationship NetCom already has with it
   (the credibility to drop on the call), plus its general hook / bridge /
   stake / BANT. Each subtopic under the vendor carries its own angle,
   hook, bridge, stake, BANT must-asks, and a byLevel map: how to play it
   for each of the six decision-maker levels. 'any' = no vendor filter. */
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
    bant: {
      B: ['Where does Microsoft training budget sit — IT, L&D, or an Enterprise Agreement line item — and does the EA already include credits?'],
      A: ['Who owns sign-off for Microsoft skills — IT leadership, the Copilot champion, or procurement through the EA?'],
      N: ['Which Microsoft workload is the gap — Azure, Microsoft 365, Copilot, or Power BI — and what is it costing to not be certified there?'],
      T: ['Is there an EA renewal, a Copilot rollout date, or a certification deadline that pins the timeline?']
    },
    subsOrder: ['azure', 'powerbi', 'm365', 'copilot'],
    subs: {
      azure: {
        label: 'Azure',
        angle: 'Azure spend grows with every workload migration, and certified depth on compute, data and identity rarely keeps pace',
        hook: 'The cloud bill is climbing and the certified bench behind it is the trailing indicator — the exact pattern we reverse for teams like {TeamArea}.',
        bridge: 'If you looked at your Azure certified coverage today — compute, data, or identity — which lane is thinnest?',
        stake: 'Every month a migration waits on certified hands, the bill grows faster than the team can control it.',
        bant: {
          B: ['Is Azure learning funded through the EA, the cloud budget, or a separate line — and are credits already on the contract?'],
          A: ['Who owns the Azure skill plan — cloud architecture leads, IT engineering, or procurement on the EA line?'],
          N: ['Which Azure workload is the gap — compute, data, or identity — and where is it holding delivery hostage?'],
          T: ['Is there an EA renewal, a migration milestone, or a certification deadline pinning the window?']
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
        bant: {
          B: ['Is Power BI training budgeted inside the analytics line, IT, or the business units that want the reports?'],
          A: ['Who owns the analytics capability — the data platform lead, IT, or the business-line champions?'],
          N: ['Which gap hurts — model design, DAX, or governance of the shared datasets — and what waits on it?'],
          T: ['Is there a reporting cycle, a quarterly business review, or a licensing milestone that sets the timing?']
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
        bant: {
          B: ['Is M365 skilling part of the license budget, the IT training line, or scattered per team?'],
          A: ['Who owns M365 adoption — IT operations, the digital workplace lead, or the business change team?'],
          N: ['Which M365 capability is underused — Teams, SharePoint, or Exchange — and what does that cost in workflow?'],
          T: ['Is there a tenant change, a licensing renewal, or an adoption initiative already on the calendar?']
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
        bant: {
          B: ['Are Copilot seats already purchased, and is there any training budget left attached to the rollout?'],
          A: ['Who owns the Copilot rollout — IT, the AI governance lead, or the business sponsor?'],
          N: ['Which gap is real — prompting skill, data-access rules, or governance of what Copilot touches?'],
          T: ['Is there a Copilot go-live date, a security review, or an adoption milestone pinning the timeline?']
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
    bant: {
      B: ['Is AWS upskilling funded from the AWS account budget, training credits, or a separate L&D line?'],
      A: ['Who decides AWS cert coverage — the cloud team lead, engineering leadership, or finance through Skill Builder credits?'],
      N: ['Which AWS cert gap is the pain — Solutions Architect, DevOps, or Security — and where does it stall delivery?'],
      T: ['Is there a migration, a re:Invent follow-on, or an account-renewal date that sets the timeline?']
    },
    subsOrder: ['solarch', 'devops', 'security'],
    subs: {
      solarch: {
        label: 'Solutions Architect',
        angle: 'cloud designs scale the first time only when the architects are certified to the current pattern set',
        hook: 'The account grows, the designs repeat — and the repeating ones are the expensive ones. Certified architects are the fix for the second-generation buildouts.',
        bridge: 'If the next architecture review happened today, which pattern is your team weakest on — compute, networking, or data?',
        stake: 'Uncertified architecture means paying for bad designs twice: once to build, again to rebuild.',
        bant: {
          B: ['Is architect training funded from the AWS account, training credits, or the engineering budget?'],
          A: ['Who leads cloud architecture — the platform lead, engineering, or a review board?'],
          N: ['Which design area is the gap — Well-Architected pillars, cost, or security patterns — and where does it bite?'],
          T: ['Is there an architecture review, a migration milestone, or a re:Invent follow-on setting the window?']
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
        bant: {
          B: ['Is DevOps training in the engineering L&D line or tied to tooling spend — CI/CD and observability?'],
          A: ['Who owns delivery tooling and the team skills — the platform lead, the DevOps manager, or engineering leadership?'],
          N: ['Which stage is the bottleneck — build, release, or operations — and what is the deploy latency costing?'],
          T: ['Is there a pipeline migration, an incident review, or a velocity target pinning the window?']
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
        bant: {
          B: ['Is AWS security training funded from the security budget, the account, or compliance?'],
          A: ['Who owns cloud security — the cloud team, the security ops lead, or compliance?'],
          N: ['Which AWS control is the gap — IAM hygiene, threat detection, or audit logging — and what is the exposure?'],
          T: ['Is there an audit, an access review, or a compliance deadline that pins the timeline?']
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
    bant: {
      B: ['How many Cisco Learning Credits are on the contract, and do they expire with the renewal?'],
      A: ['Who tracks Cisco certification coverage — the network team lead, or the security officer for the CCNA and CCNP lines?'],
      N: ['Which Cisco track is behind — routing and switching, security, or collaboration — and what breaks because of it?'],
      T: ['Does the Cisco contract or Smartnet renewal set the window for spending the Learning Credits?']
    },
    subsOrder: ['rsw', 'sec', 'collab'],
    subs: {
      rsw: {
        label: 'Routing & switching · CCNA/CCNP',
        angle: 'the network is the spine of everything, and certified depth between CCNA and CCNP is where outages go unforecast',
        hook: 'The network runs the business until it does not — and certified coverage between CCNA and CCNP is exactly where the outage risk hides.',
        bridge: 'If a senior engineer left next week, how many people could rebuild the core switch config without the cert to back it?',
        stake: 'The outage that a certified engineer would have prevented costs more than the whole training contract.',
        bant: {
          B: ['Are Cisco Learning Credits on the contract, and do they expire with the renewal?'],
          A: ['Who owns network certification coverage — the network lead or the infrastructure manager?'],
          N: ['Which gap — CCNA fundamentals or CCNP depth — and where does the network currently break?'],
          T: ['Does the contract or Smartnet renewal window set the spend deadline?']
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
        bant: {
          B: ['Is firewall and security training on the security budget or the network contract?'],
          A: ['Who owns the security perimeter — the network team, the security ops lead, or the CISO’s office?'],
          N: ['Which gap — firewall config, remote access, or zero trust — and what is the exposure today?'],
          T: ['Is there an audit, a firewall refresh, or a zero-trust mandate setting the window?']
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
        bant: {
          B: ['Is collaboration training part of the UC contract or a separate learning line?'],
          A: ['Who owns the collaboration platform — IT ops, the digital workplace lead, or the business itself?'],
          N: ['Which capability is underused — calling, meetings, or messaging — and what does that cost in workflow?'],
          T: ['Is there a platform upgrade, a license renewal, or a return-to-office date setting the timing?']
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
    bant: {
      B: ['Is Google Cloud training funded through the cloud budget or a separate learning line?'],
      A: ['Who owns GCP skills — the platform team lead, the data and AI lead, or engineering leadership?'],
      N: ['Which GCP area is the gap — Associate Cloud Engineer, Professional Data Engineer, or AI/ML — and what is waiting on it?'],
      T: ['Is there a GCP migration, an ML launch, or a certification window that anchors the timing?']
    },
    subsOrder: ['cloudeng', 'data', 'aiml'],
    subs: {
      cloudeng: {
        label: 'Cloud engineering',
        angle: 'GCP projects ship on platform teams that are usually a release behind the tools they run',
        hook: 'The GCP project shipped; the team that runs it is still certified against last year’s platform. That gap is the maintenance debt.',
        bridge: 'Between compute, networking, and storage — which GCP lane is the current project waiting on?',
        stake: 'A GCP platform gap shows up as project delays that idle more capacity than the training would cost.',
        bant: {
          B: ['Is GCP training funded through the cloud budget or the learning line?'],
          A: ['Who owns the GCP platform — the cloud team lead or engineering leadership?'],
          N: ['Which lane is the gap — Associate Cloud Engineer depth or the Professional track — and what waits on it?'],
          T: ['Is there a migration, a project launch, or a certification window anchoring the timeline?']
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
        bant: {
          B: ['Is data-engineering training on the data budget, the cloud account, or L&D?'],
          A: ['Who owns the warehouse — the data lead, the platform team, or IT?'],
          N: ['Which gap — BigQuery, pipelines, or reporting — and where do insights stall today?'],
          T: ['Is there a warehouse migration, a reporting cycle, or a data compliance date pinning it?']
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
        bant: {
          B: ['Is ML training funded from the AI budget, the cloud account, or the data line?'],
          A: ['Who owns AI delivery — the data science lead, the ML platform team, or engineering?'],
          N: ['Which gap — Vertex AI, MLOps, or model deployment — and at what cost to the roadmap?'],
          T: ['Is there an AI launch date, a model go-live, or a funding cycle setting the window?']
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
    bant: {
      B: ['Is there dedicated budget for AI readiness, or would this land inside the existing workforce-training line?'],
      A: ['Who champions AI skills — the AI governance lead, the Chief AI Officer, or the board-mandated readiness owner?'],
      N: ['Which AI capability is board-critical — governance, LLM engineering, or AI for the front line — and what is the readiness gap?'],
      T: ['Is there an AI rollout, a governance deadline, or a funding cycle that sets when readiness has to be proven?']
    },
    subsOrder: ['governance', 'llm', 'frontline'],
    subs: {
      governance: {
        label: 'AI governance',
        angle: 'AI is deployed and funded; the governance and accountability muscle behind it is the weakest line in the story',
        hook: 'The board approves the AI spend and asks one question: who is accountable, trained, and provable? Governance certs are the vocabulary for that answer.',
        bridge: 'Who owns your AI risk register today — and which role has the certified mandate to update it?',
        stake: 'AI governance without certified depth is a policy nobody can defend at the review.',
        bant: {
          B: ['Is governance training a line item of the AI budget or the compliance budget?'],
          A: ['Who owns AI governance — the AI lead, the risk office, or the board itself?'],
          N: ['Which governance gap is live — policy, risk, or accountability — and what is the exposure?'],
          T: ['Is there an AI review, a regulatory deadline, or a funding review pinning the timeline?']
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
        bant: {
          B: ['Is LLM engineering training funded from the AI line, the data budget, or engineering L&D?'],
          A: ['Who owns LLM delivery — the ML team, the platform lead, or the AI governance office?'],
          N: ['Which capability is the gap — RAG, evaluation, or deployment — and what is the roadmap waiting on?'],
          T: ['Is there a model launch, a funding checkpoint, or a platform decision pinning the window?']
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
        bant: {
          B: ['Is front-line AI training funded from the AI rollout budget or the L&D line?'],
          A: ['Who owns front-line AI enablement — HR, the AI lead, or the business units?'],
          N: ['Which AI use is live — chat, automation, or reporting — and where are the mistakes happening?'],
          T: ['Is there an AI rollout wave, a go-live date, or a support-cost review pinning the timing?']
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
    bant: {
      B: ['Where does security certification funding sit — compliance budget, IT security line, or the training budget?'],
      A: ['Who owns security cert coverage — the CISO, the security ops manager, or compliance?'],
      N: ['Which ISC2 gap is the risk — CISSP, Certified in Cybersecurity, or a specialty — and what does audit exposure cost?'],
      T: ['Is there an audit, a compliance deadline, or a cert-expiry cycle that sets the timeline?']
    },
    subsOrder: ['cissp', 'cc', 'spec'],
    subs: {
      cissp: {
        label: 'CISSP',
        angle: 'CISSP is the certification the industry treats as the bar, and maintaining the bench is the recurring question',
        hook: 'The security program is only as credible as its CISSP density — and CISSP has an exam window your team needs to plan around.',
        bridge: 'How many CISSPs are on the bench today, and how many seats are scheduled to sit for it this year?',
        stake: 'Every pursuit and audit that hinges on CISSP coverage gets harder the longer the bench waits.',
        bant: {
          B: ['Is CISSP training on the security certification budget or the compliance line?'],
          A: ['Who decides CISSP coverage — the CISO, the security manager, or the individual leads?'],
          N: ['Which gap — number of certified staff or readiness for the next exam — is the live pain?'],
          T: ['Is there an exam window, an audit, or a renewal cycle that sets the timing?']
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
        bant: {
          B: ['Is entry security training budgeted in the IT training line or per new hire?'],
          A: ['Who decides the security career ladder — HR, the security manager, or the help-desk lead?'],
          N: ['Which gap — number of entry-certified staff or the path to get them there — is the pain?'],
          T: ['Is there a hiring push, a project need, or a year-end budget to attach this to?']
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
        bant: {
          B: ['Is specialty training on the security budget or tied to role requirements?'],
          A: ['Who maps specialty coverage to roles — the security manager, HR, or the team leads?'],
          N: ['Which specialty gap — cloud, forensic, or management — and what incident does it expose?'],
          T: ['Is there a cloud migration, an incident review, or a role-opening pushing the timing?']
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
    bant: {
      B: ['Is PMP and project training funded from project budgets, the PMO, or L&D?'],
      A: ['Who owns project capability — the PMO director, delivery leadership, or the functional heads?'],
      N: ['Which gap is real — certified PMs for pursuits, PDU renewals expiring, or delivery overruns from untrained leads?'],
      T: ['Are there pursuit deadlines, PDU-expiry dates, or a Q{Qtr} delivery push that anchors timing?']
    },
    subsOrder: ['pmp', 'capm', 'pdu'],
    subs: {
      pmp: {
        label: 'PMP',
        angle: 'PMP is the project-leadership credential, and pursuit staffing is where its absence shows up first',
        hook: 'Pursuits are won on staffing plans — and staffing plans are won on PMP lines. The cert is the pursuit math.',
        bridge: 'Between certified PMs for pursuits and delivery quality on current projects — which is the live gap?',
        stake: 'An uncertified bench loses pursuits on paper before the work even starts.',
        bant: {
          B: ['Is PMP training funded from project budgets, the PMO, or L&D?'],
          A: ['Who owns PM capability — the PMO director or delivery leadership?'],
          N: ['Which gap — certified PMs for pursuits or delivery overruns — is the live pain?'],
          T: ['Are there pursuit deadlines, PDU expiries, or a delivery push pinning the window?']
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
        bant: {
          B: ['Is CAPM funded from project budgets or the L&D line?'],
          A: ['Who decides the project career path — the PMO director or HR?'],
          N: ['Which gap — coordinator capacity or plan quality — is the live pain?'],
          T: ['Is there a hiring push, a project wave, or a budget cycle to attach it to?']
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
        bant: {
          B: ['Is renewal training funded per head in the PMO or the L&D line?'],
          A: ['Who tracks PDU status — the PMO, HR, or the individual PMs?'],
          N: ['Which gap — expiring PDUs or lapsed certs — is already on the books?'],
          T: ['Is there a renewal cycle or pursuit season that sets the deadline?']
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
    bant: {
      B: ['Is CompTIA certification covered under the IT training budget or per-department?'],
      A: ['Who tracks cert coverage — the help-desk lead, the security team, or HR for role requirements?'],
      N: ['Which CompTIA track is the gap — A+, Network+, or Security+ — and what in operations is stalling because of it?'],
      T: ['Is there a renewal cycle, an audit of certified staff, or a hiring push that sets when coverage matters?']
    },
    subsOrder: ['aplus', 'secplus'],
    subs: {
      aplus: {
        label: 'A+ · support fundamentals',
        angle: 'the help desk is the on-ramp to everything IT, and certification is the shelf under the whole career ladder',
        hook: 'Every IT career in your org starts on the help desk — and A+ is the shelf under that ladder. Coverage there compounds everywhere above it.',
        bridge: 'How many of your support staff hold A+ — and how many new hires are expected to walk in with it?',
        stake: 'Uncertified support fundamentals show up as slower tickets today and a weaker ladder tomorrow.',
        bant: {
          B: ['Is A+ covered under the IT training budget or per-department?'],
          A: ['Who owns the support-team credential standard — the help-desk lead or HR?'],
          N: ['Which gap — ticket speed or career-path quality — matters more right now?'],
          T: ['Is there a hiring push or a service-level review pinning the timing?']
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
        bant: {
          B: ['Is Security+ on the security training budget or the IT line?'],
          A: ['Who sets the credential requirements — the security lead or HR role definitions?'],
          N: ['Which gap — certified headcount or readiness for the next roles — is the pain?'],
          T: ['Is there an audit, a hiring push, or a role-restructure pinning the window?']
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