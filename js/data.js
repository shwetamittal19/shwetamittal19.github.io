/* All portfolio content lives in this file. Edit text here; the page rebuilds itself from it. */

const PROFILE = {
  name: "Shweta Mittal",
  email: "Shweta.mittal@duke.edu",
  phone: "(919) 201-6767",
  linkedin: "https://www.linkedin.com/in/shwetamittal1719/",
  github: "https://github.com/shwetamittal19",
  photo: "img/profile.jpg" // replace this file to change the picture
};

/* Six areas. Every piece of work sits in exactly one. */
const AREAS = [
  { id: "product",   label: "Product",                color: "#FF6B4A", icon: "bulb",
    line: "Finding the real customer problem and shipping what solves it." },
  { id: "strategy",  label: "Strategy",               color: "#3B82F6", icon: "target",
    line: "Where a company should play next, and why." },
  { id: "marketing", label: "Marketing",              color: "#EC4899", icon: "megaphone",
    line: "Who to sell to, what to promise, and through which channel." },
  { id: "analytics", label: "Analytics & operations", color: "#10B981", icon: "bars",
    line: "Putting numbers on decisions, and teaching how operations really run." },
  { id: "ai",        label: "AI & security",          color: "#6366F1", icon: "shield",
    line: "AI agents that make careful decisions and can prove it." },
  { id: "eng",       label: "Engineering",            color: "#64748B", icon: "code",
    line: "Where I started: building software." }
];

/* Which area each tag in WORK[].lenses belongs to (the first tag decides). */
const AREA_OF = { product: "product", research: "product", venture: "product", strategy: "strategy",
  marketing: "marketing", analytics: "analytics", ops: "analytics", ai: "ai", eng: "eng" };

const DUKE = "Duke University";

const WORK = [
  /* ───────────── Product ───────────── */
  {
    id: "shopsight", featured: true,
    title: "ShopSight: giving Gen Z a say before the product ships",
    org: "Client project · Design Thinking & Innovation, " + DUKE, when: "Aug – Dec 2025",
    tags: ["Design thinking", "User interviews", "Client project"],
    lenses: ["product", "research"], kind: "Client project", team: "Led a team of 4",
    summary: "ShopSight, a fashion co-creation platform, was moving from web to a mobile-first app and needed to know which features belonged in version one. As student consultant I led a four-person team through the full design-thinking cycle, with the CEO as our client.",
    points: [
      "Ran 50+ interviews with Gen Z shoppers and brands, then turned them into personas, five “how might we” problem statements and prioritized requirements (PRDs, user stories) with a roadmap for 2 MVPs.",
      "Proposed three features: Trend Polls, Transparency Cards and Creator Spotlight, each with a napkin pitch, storyboard and success metrics.",
      "Scoped and validated solutions with low-code prototypes before engineering investment; shipped 4 features in 2 sprints, taking part in sprint planning, stand-ups and retros."
    ],
    outcome: "35% increase in sessions per user, from Google Analytics behavior analysis and navigation A/B tests.",
    files: [
      { label: "Final client deck", path: "files/design/final-deck.pdf", mb: 66 },
      { label: "Background research", path: "files/design/background-research.pdf" },
      { label: "Interview summary", path: "files/design/interviews-summary.pdf" },
      { label: "Customer personas", path: "files/design/customer-personas.pdf", mb: 7 },
      { label: "Problem statements", path: "files/design/problem-statements.pdf" },
      { label: "Top five ideas", path: "files/design/top-five-ideas.pdf" },
      { label: "Napkin pitches", path: "files/design/napkin-pitches.pdf", mb: 6 },
      { label: "Storyboards", path: "files/design/storyboards.pdf", mb: 24 },
      { label: "Team reflection", path: "files/design/final-report.pdf" }
    ]
  },
  {
    id: "nova",
    title: "NOVA: an in-chat date planner for Tinder",
    org: "Self-initiated product concept", when: "",
    tags: ["Product concept", "AI feature"],
    lenses: ["product", "research"], kind: "Individual",
    summary: "Matches often stall between chatting and actually meeting. NOVA is a product concept for an AI assistant inside Tinder chat that helps two people plan a date together.",
    points: [
      "Identified the drop-off moment where matches fail to convert from chat to a real-life meeting.",
      "Defined jobs-to-be-done, user triggers, discovery moments and the end-to-end planning flow, including edge cases and a post-date feedback loop.",
      "Built low-fidelity wireframes in Balsamiq to validate the core flows inside Tinder’s existing chat experience and design system."
    ],
    files: [{ label: "Product concept deck", path: "files/pm/nova-tinder.pdf" }]
  },
  {
    id: "upi",
    title: "Credit on UPI: market analysis and product strategy",
    org: "Self-initiated product strategy", when: "",
    tags: ["Market analysis", "Fintech"],
    lenses: ["product", "strategy"], kind: "Individual",
    summary: "A market and product strategy study of digital credit on India’s UPI payments rail.",
    points: [
      "Sized the market and the opportunity for credit on UPI in India.",
      "Identified key user segments, their jobs-to-be-done and value propositions.",
      "Mapped the ecosystem of banks, fintechs, regulators and infrastructure providers, then defined product focus areas, success metrics and long-term growth levers."
    ],
    files: [{ label: "Strategy deck", path: "files/pm/credit-on-upi.pdf" }]
  },
  {
    id: "flipkart",
    title: "Flipkart Minutes: a UX evaluation of order cancellation",
    org: "Self-initiated UX review", when: "",
    tags: ["UX review", "Quick commerce"],
    lenses: ["research", "product"], kind: "Individual",
    summary: "A heuristic review of Flipkart’s quick-commerce experience, following one journey closely: cancelling an order and recovering from an error.",
    points: [
      "Mapped the end-to-end customer journey, with a focus on cancellation and error recovery.",
      "Evaluated each step against Nielsen’s ten usability heuristics and behavioral UX laws.",
      "Framed the friction points, cognitive-load issues and control gaps as product improvement opportunities."
    ],
    files: [{ label: "UX analysis", path: "files/pm/flipkart-minutes.pdf" }]
  },
  {
    id: "swiggy",
    title: "Swiggy Drops: teardown of a scarcity-driven growth feature",
    org: "Self-initiated product teardown", when: "",
    tags: ["Product teardown", "Growth"],
    lenses: ["product", "marketing"], kind: "Individual",
    summary: "Swiggy Drops sells limited-edition restaurant dishes on a timer. This teardown looks at why it works and where it could work harder.",
    points: [
      "Covered the value proposition, actors, revenue streams and customer segments.",
      "Analyzed how scarcity, exclusivity and timed launches drive demand and engagement.",
      "Identified opportunities to improve retention, monetization and discovery."
    ],
    files: [{ label: "Product teardown", path: "files/pm/swiggy-drops.pdf" }]
  },
  {
    id: "sched-market",
    title: "Scheduled grocery delivery: market and funnel breakdown",
    org: "Self-initiated product strategy · part 1 of 2", when: "",
    tags: ["Market sizing", "Funnel analysis"],
    lenses: ["product", "analytics"], kind: "Individual",
    summary: "Why does scheduled delivery lag instant delivery when it is cheaper to run? Part one sizes the market and breaks the funnel down.",
    points: [
      "Benchmarked Amazon Fresh, Flipkart Supermart, BigBasket and Zepto on instant versus scheduled delivery.",
      "Broke the scheduled-delivery funnel into eligibility → visibility → selection → completion.",
      "Quantified the business case: retention, CAC, NPS and cost efficiency."
    ],
    files: [{ label: "Market and funnel analysis", path: "files/pm/scheduled-delivery-market.pdf" }]
  },
  {
    id: "sched-research",
    title: "Why users avoid scheduled delivery: user research",
    org: "Self-initiated user research · part 2 of 2", when: "",
    tags: ["User research", "Grocery delivery"],
    lenses: ["research", "product"], kind: "Individual",
    summary: "Part two asks the users. A primary research study into why frequent grocery shoppers skip scheduled delivery even when it is available.",
    points: [
      "Designed and ran a survey, backed by qualitative user interviews.",
      "Defined the target persona: working professionals aged 25–34 in metro cities with high online grocery usage.",
      "Traced the behavior to cognitive load, trust issues and habit loops, and framed a problem statement with the business value of solving it."
    ],
    files: [{ label: "Research findings", path: "files/pm/scheduled-delivery-research.pdf" }]
  },

  /* ───────────── Strategy ───────────── */
  {
    id: "nike", featured: true,
    title: "A vision for Nike",
    org: "Final individual project · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Scenario planning", "Sportswear"],
    lenses: ["strategy"], kind: "Individual",
    summary: "Nike stands at a crossroads as culture fragments and global supply risks intensify. My final project for the course builds a strategy that holds up across the futures Nike could face.",
    points: [
      "Identified the two STEEP forces reshaping Nike: cultural atomization and geopolitical supply-chain fragmentation.",
      "Crossed two uncertainties, consumer shift velocity and supply chain sovereignty, into four plausible futures and mapped who gains or loses in each.",
      "Recommended a three-horizon strategy: build cultural agility now (a trend signal center, rapid-response design pods), expand adaptive capabilities next, then transform the supply and innovation model for the long term."
    ],
    files: [{ label: "Vision for Nike", path: "files/strategy/nike-vision.pdf" }]
  },
  {
    id: "tesla",
    title: "Tesla in 2030: four futures and a strategic response",
    org: "Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Scenario planning", "Electric vehicles"],
    lenses: ["strategy"], kind: "Individual",
    summary: "A scenario plan for Tesla built on the two biggest uncertainties I found: public acceptance of EVs and economic conditions.",
    points: [
      "Ran a STEEP analysis of the societal, technological, economic, environmental and political forces acting on Tesla.",
      "Crossed the two uncertainties into four plausible futures: EVs for Everyone, Luxury Tech Niche, Affordable EV Race and Survival Mode.",
      "Recommended a dual strategy of affordability and premium innovation: affordable models, autonomy and energy at scale, flexible ownership, and global hedging."
    ],
    files: [{ label: "Scenario analysis", path: "files/strategy/tesla-2030.pdf" }]
  },
  {
    id: "intel",
    title: "Inside Intel: the rise, reign and reckoning of a tech giant",
    org: "Live case · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Company deep-dive", "Semiconductors"],
    lenses: ["strategy"], kind: "Team", team: "Team of 5",
    summary: "Intel’s future hinges on two drivers: pressure on fab utilization and deep U.S. government involvement.",
    points: [
      "Crossed utilization and government backing into four futures: Market Leader Renaissance, Silicon Sovereignty, Managed Decline and Subsidized Survival.",
      "Mapped how incumbents, insurgents and adjacents would move in each.",
      "Recommended a Three Horizons response: stabilize the fabs, expand into AI and government partnerships, and fund bets on breakthrough technologies."
    ],
    files: [{ label: "Case analysis", path: "files/strategy/intel.pdf", mb: 16 }]
  },
  {
    id: "chewy",
    title: "Chewy: will its disruption become its own vulnerability?",
    org: "Live case · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Disruption", "Pet e-commerce"],
    lenses: ["strategy"], kind: "Team", team: "Team of 5",
    summary: "The pet industry is at an inflection point. We asked whether Gen Z’s expectations will settle or keep fragmenting, and whether AI stays a differentiator or becomes a commodity.",
    points: [
      "Built four futures for pet retail from those two uncertainties.",
      "Found the openings (defensible data ecosystems, health and insurance, sustainability) and the threats (loyalty fragmentation, AI commoditization, costly service expansion).",
      "Recommended an adaptive path: stabilize Autoship subscriptions, scale into health and personalization, then become an integrated ecosystem."
    ],
    files: [{ label: "Case analysis", path: "files/strategy/chewy.pdf" }]
  },
  {
    id: "netflix",
    title: "Netflix: can the streamer that rewrote Hollywood dream again?",
    org: "Live case · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Industry shift", "Streaming"],
    lenses: ["strategy"], kind: "Team", team: "Team of 5",
    summary: "Streaming has gone from bold disruption to a crowded, high-cost market. We argued the streaming wars are ending and the “imagination wars” are starting.",
    points: [
      "Picked the two forces that matter most: AI in how stories are made and personalized, and ecosystem bundling.",
      "Built four futures: Precision Renaissance, Curated Syndicate, Creator’s Frontier and Algorithmic Empire.",
      "Applied the Transient Competitive Advantage approach: launch small participatory pilots, scale what works, reallocate quickly."
    ],
    files: [{ label: "Case analysis", path: "files/strategy/netflix.pdf" }]
  },
  {
    id: "oura",
    title: "Oura: visionary orchestrator or wearable casualty?",
    org: "Mini live case · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Future scenarios", "Wearables"],
    lenses: ["strategy"], kind: "Team", team: "Team of 5",
    summary: "The next five years of wearables turn on one question: how much control are people ready to give technology over their health?",
    points: [
      "Framed two uncertainties: the level of consumer trust and the depth of AI reliance in health guidance.",
      "Built four scenarios, from data-driven “digital health twins” to privacy-first, human-led care.",
      "Mapped the competition and laid out Oura’s strategy and recommendations."
    ],
    files: [{ label: "Case analysis", path: "files/strategy/oura.pdf" }]
  },
  {
    id: "altus",
    title: "Altus Power: can the sun still shine through the storm?",
    org: "Live case · Competitive Strategy, " + DUKE, when: "Fall 2025",
    tags: ["Market shifts", "Clean energy"],
    lenses: ["strategy"], kind: "Team", team: "Team of 5",
    summary: "Energy markets are shifting as digitalization, decentralization and capital velocity redefine how value is created.",
    points: [
      "Identified capital velocity and intelligence centrality as the two uncertainties that will decide future energy business models.",
      "Built four energy futures and how incumbents, insurgents and adjacents compete in each.",
      "Recommended a phased three-horizon roadmap that takes Altus from clean energy producer to a self-learning digital energy orchestrator."
    ],
    files: [{ label: "Case analysis", path: "files/strategy/altus-power.pdf", mb: 42 }]
  },

  /* ───────────── Marketing ───────────── */
  {
    id: "21seeds", featured: true,
    title: "21 Seeds: taking shots at breakout growth",
    org: "Final pitch-off · Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Growth strategy", "Spirits"],
    lenses: ["marketing"], kind: "Team", team: "Team of 5",
    summary: "21 Seeds grew an infused tequila from zero to 66K cases in three years, was acquired by Diageo, and now has aggressive targets with copycats arriving. How should it spend a limited budget?",
    points: [
      "Ran a 5Cs diagnostic and built a quant model for the growth options.",
      "Recommended a distribution-first, on-premise strategy to reach about 500K cases, leading with Cucumber Jalapeño into 3,000 on-premise accounts.",
      "Set the scorecard on velocity (cases per store per week, menu mention rate), not impressions, with a phased rollout to manage channel complexity."
    ],
    files: [{ label: "Final pitch deck", path: "files/marketing/21-seeds.pdf", mb: 16 }]
  },
  {
    id: "drinkworks",
    title: "Drinkworks: the future of home cocktails",
    org: "Presenting team · Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Pricing", "Product launch"],
    lenses: ["marketing", "analytics"], kind: "Team", team: "Team of 5",
    summary: "A Keurig and AB InBev joint venture: put in a pod, press a button, get a cocktail. We advised on pricing and rollout.",
    points: [
      "Identified weekly hosts as the strongest-fit customer and Bartesian as the most direct threat.",
      "Modeled the unit economics: a $299 device with $3.50 pods wins year one without leaning on retention assumptions, and stays below the $4 pod price where trial satisfaction collapsed.",
      "Recommended a phased pilot in regulation-friendly states before any national commitment."
    ],
    files: [{ label: "Case deck", path: "files/marketing/drinkworks.pdf", mb: 8 }]
  },
  {
    id: "farfetch",
    title: "Farfetch: become the operating system for luxury",
    org: "Presenting team · Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Platform strategy", "Luxury e-commerce"],
    lenses: ["marketing", "strategy"], kind: "Team", team: "Team of 5",
    summary: "In 2021 Farfetch led luxury’s digital shift but was losing money. We compared three paths: marketplace-only, platform-first and omnichannel.",
    points: [
      "Recommended platform-first: keep the marketplace as the demand flywheel and make Farfetch Platform Solutions the growth engine.",
      "Showed that the top 1% of consumers drive 27.2% of GMV, and built a private-client retention plan around them.",
      "Laid out the China plan: brand-native stores on WeChat and localized editorial."
    ],
    files: [{ label: "Case deck", path: "files/marketing/farfetch.pdf", mb: 7 }]
  },
  {
    id: "amperity",
    title: "Amperity: from customer data platform to data-ROI platform",
    org: "Presenting team · Marketing, " + DUKE, when: "Spring 2026",
    tags: ["B2B positioning", "Data platform"],
    lenses: ["marketing", "strategy"], kind: "Team", team: "Team of 5",
    summary: "A B2B case. Amperity, a unicorn customer data platform, faces end-to-end suites on one side and composable tools on the other.",
    points: [
      "Ran a 5Cs analysis and compared two paths: defend CDP margins or pivot toward ads.",
      "Concluded Amperity needs both: one is the financial floor, the other the growth ceiling.",
      "Recommended three phases: move renewals to base license plus usage pricing, launch the ads pivot, then bundle both into one platform for the IPO story."
    ],
    files: [{ label: "Case deck", path: "files/marketing/amperity.pdf" }]
  },
  {
    id: "rtr",
    title: "Rent the Runway: where should the next dollar go?",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Budget allocation", "Fashion rental"],
    lenses: ["marketing", "analytics"], kind: "Individual",
    summary: "Rent the Runway had to choose between product-line expansion, a website upgrade, logistics and deeper inventory.",
    points: [
      "Analyzed the customer segment, positioning and the challenge of getting women comfortable with renting.",
      "Calculated an annual contribution of roughly $1,275 per dress, which makes inventory a fast-payback asset.",
      "Recommended inventory depth first: scaling from about 1,000 to 5,000 dresses could unlock $5M+ in incremental annual revenue."
    ],
    files: [{ label: "Case analysis", path: "files/marketing/rent-the-runway.pdf" }]
  },
  {
    id: "mmbc",
    title: "Mountain Man Brewing: should it launch a light beer?",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Line extension", "Beer"],
    lenses: ["marketing"], kind: "Individual",
    summary: "One flagship lager, deep loyalty among older blue-collar drinkers, and no presence in the growing light-beer segment. Is a line extension necessary adaptation or a threat to the brand’s strongest asset?",
    points: [
      "Framed the dilemma as preserving the core versus pursuing growth.",
      "Planned the launch to limit risk: few initial SKUs and existing distributor relationships.",
      "Built promotion around grassroots and local marketing with the message “Light doesn’t mean less Mountain Man.”"
    ],
    files: [{ label: "Case deck", path: "files/marketing/mountain-man.pdf", mb: 18 }]
  },
  {
    id: "redbull",
    title: "Red Bull: keeping the anti-brand while it spreads its wings",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Brand extension", "Brand identity"],
    lenses: ["marketing"], kind: "Individual",
    summary: "Red Bull’s identity is rebellious and youth-driven. Extending into The Organics and AlphaTauri fashion risks diluting it.",
    points: [
      "Analyzed the challenge across consumer, company and competitors.",
      "Recommended separate consumer ecosystems and marketing infrastructure for each extension.",
      "Positioned AlphaTauri as a technology-driven luxury label and The Organics around sustainability, taste and natural living."
    ],
    files: [{ label: "Case analysis", path: "files/marketing/red-bull.pdf" }]
  },
  {
    id: "pedalspark",
    title: "PedalSpark: direct, Amazon, or both?",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Channel strategy", "E-bikes"],
    lenses: ["marketing"], kind: "Individual",
    summary: "A premium e-bike brand is launching a cheaper entry-level model and has to choose its channel.",
    points: [
      "Weighed Amazon’s reach against the risk of competing on price and losing the customer relationship.",
      "Recommended a hybrid: premium bike only on the website, entry-level bike on Amazon.",
      "Added a bridge back to the brand: encourage Amazon buyers to register for warranty and support on PedalSpark’s own site."
    ],
    files: [{ label: "Case analysis", path: "files/marketing/pedalspark.pdf" }]
  },
  {
    id: "lemonade",
    title: "Lemonade: how much of insurance should AI run?",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["AI in service", "Insurance"],
    lenses: ["marketing", "ai"], kind: "Individual",
    summary: "Lemonade’s AI handles onboarding and simple claims well, but insurance is tied to emotional moments.",
    points: [
      "Recommended a hybrid strategy: AI where it adds speed and scale, partnerships where reach matters, people where trust is essential.",
      "Argued that AI alone creates trust and regulatory risk, while partnerships alone limit growth.",
      "Proposed GDPR-level data protection across all markets to stay ahead of regulation."
    ],
    files: [{ label: "Case analysis", path: "files/marketing/lemonade.pdf" }]
  },
  {
    id: "altius",
    title: "Altius Golf: repositioning for a price-sensitive market",
    org: "Marketing, " + DUKE, when: "Spring 2026",
    tags: ["Repositioning", "Sporting goods"],
    lenses: ["marketing"], kind: "Individual",
    summary: "Altius led with super-premium golf balls, then declined 18% in three years as golfers became recreational and price-sensitive.",
    points: [
      "Diagnosed how competitors captured the price-sensitive segment while Altius failed to adapt.",
      "Applied segmentation, targeting and positioning: segment by price sensitivity and playing behavior.",
      "Recommended using the Elevate program to build trust and turn customers into advocates."
    ],
    files: [{ label: "Case analysis", path: "files/marketing/altius.pdf" }]
  },

  /* ───────────── Decision analytics ───────────── */
  {
    id: "gillette", featured: true,
    title: "Gillette v. Energizer: settle or litigate?",
    org: "Group project · Decision Models, " + DUKE, when: "Spring 2026",
    tags: ["Decision analysis", "Patent dispute"],
    lenses: ["analytics"], kind: "Team", team: "Team of 4",
    summary: "Gillette claims Energizer’s four-blade razor infringes its patent. To win it must clear two independent hurdles: validity and infringement.",
    points: [
      "Built the decision tree: about a 40% chance the patent is held valid and about a 20% chance of winning overall, against a 19% break-even.",
      "Valued imperfect information (mock juries, expert opinions) before committing either way.",
      "Gave thresholds instead of one answer: litigate at 25%+, push the settlement demand to $7.5–10M between 19% and 25%, and settle below 19%."
    ],
    files: [{ label: "Presentation", path: "files/decision/gillette-vs-energizer.pdf", mb: 8 }]
  },
  {
    id: "jpmolasses",
    title: "J.P. Molasses: production planning by optimization",
    org: "Group project · Decision Models, " + DUKE, when: "Spring 2026",
    tags: ["Optimization", "Production planning"],
    lenses: ["analytics", "ops"], kind: "Team", team: "Team of 4",
    summary: "A linear program that allocates raw sugar across two refineries and assigns molasses to seven customers.",
    points: [
      "Formulated the decision variables, objective and constraints, and solved for the optimal supply and distribution plan.",
      "Result: $149,178 monthly profit on $1,122,146 revenue with 100% of customer demand met.",
      "Used shadow prices to find the next move: extra storage at Charleston is worth $65.14 per thousand pounds, so we recommended costing an expansion."
    ],
    files: [{ label: "Presentation", path: "files/decision/jp-molasses.pdf" }]
  },
  {
    id: "calambra",
    title: "Calambra Olive Oil: what actually drives the risk?",
    org: "Group project · Decision Models, " + DUKE, when: "Spring 2026",
    tags: ["Risk analysis", "Cash-flow model"],
    lenses: ["analytics"], kind: "Team", team: "Team of 4",
    summary: "A new-venture cash-flow model stress-tested with sensitivity analysis.",
    points: [
      "Ran a tornado analysis on total cash flow through 1994.",
      "Found that second-year demand produces by far the largest swing, followed by wholesale price and broker take, while operational costs barely matter.",
      "Focused the risk model in part B on demand, pricing and broker margins."
    ],
    files: [
      { label: "Part A: sensitivity analysis", path: "files/decision/calambra-part-a.pdf" },
      { label: "Part B: presentation", path: "files/decision/calambra-part-b.pptx" }
    ]
  },
  {
    id: "dm-problems",
    title: "Five decision problems, solved",
    org: "Individual assignments · Decision Models, " + DUKE, when: "Spring 2026",
    tags: ["Decision tools", "Problem sets"],
    lenses: ["analytics"], kind: "Individual",
    summary: "The individual work behind the group projects: one problem for each tool in the course.",
    points: [
      "Decision trees: a staged R&D project where a pilot test lifts expected profit from $0.6M to $0.79M.",
      "Value of information: a market-entry study worth $0.55M that costs $1M, so don’t commission it.",
      "Simulation and optimization: an emergency-fund plan tested by Monte Carlo, the Marsh & McLennan case, an electricity purchasing plan under supplier and renewable constraints, and a currency-conversion problem."
    ],
    files: [
      { label: "Staged R&D", path: "files/decision/hw1-staged-rd.pdf" },
      { label: "New market entry", path: "files/decision/hw2-new-market-entry.pdf" },
      { label: "Emergency fund planning", path: "files/decision/hw3-emergency-fund.pdf" },
      { label: "Marsh & McLennan", path: "files/decision/hw4-marsh-mclennan.docx" },
      { label: "Optimization exercises", path: "files/decision/hw5-optimization.pdf" }
    ]
  },

  /* ───────────── Ventures ───────────── */
  {
    id: "returns", featured: true,
    title: "Return to Sender: why packages never make it back",
    org: "New Ventures Discover, " + DUKE, when: "Fall 2026 · in progress",
    tags: ["New venture", "Customer discovery"],
    lenses: ["venture", "research", "product"], kind: "Team", team: "Team of 4", status: "In progress",
    summary: "Starting a return is easy. Getting the box to a drop-off isn’t. Our team is testing whether that friction is a business.",
    points: [
      "19 documented interviews so far. The finding that reframed the problem: it’s the minutes to a drop-off that matter, not whether you own a car.",
      "Built BlueDash, a group-pickup MVP, in Figma Make, then ran the unit economics: at about $5 per return, a driver needs 4–5 returns an hour just to break even. People said $5 and paid $0.",
      "Pivoted the payer from shopper to retailer after mapping the alternatives (free USPS pickup, Uber and DoorDash returns, Happy Returns) and interviewing a Lyft driver.",
      "Now: outreach to FedEx, Uber, Lyft and DoorDash is under way, and the next tests are real pricing, a retailer-funded pilot and route economics."
    ],
    files: [
      { label: "Problem brief v2", path: "files/ventures/problem-brief-v2.pdf" },
      { label: "Lean canvas", path: "files/ventures/business-model-canvas.pdf" },
      { label: "Testing plan", path: "files/ventures/testing-plan.pdf" }
    ]
  },

  /* ───────────── AI & security ───────────── */
  {
    id: "triage", featured: true,
    title: "Security Triage Agent",
    org: "AI in Cybersecurity, " + DUKE, when: "Fall 2026",
    tags: ["AI agent", "Vulnerability response"],
    lenses: ["ai", "eng"], kind: "Team", team: "Team of 4",
    summary: "An AI agent that decides whether a company must act immediately on a critical VPN vulnerability (CVE-2024-21762), by checking its own systems against threat intelligence and a six-rule risk policy.",
    points: [
      "The model requests evidence through fixed tools; code applies the policy and saves a rating, priority, rationale, uncertainty and recommended actions.",
      "My part: the Duke model gateway integration, the agent loop, configuration and common utilities.",
      "When decisive evidence is missing or conflicting, the agent says so instead of guessing."
    ],
    outcome: "11 of 11 policy scenarios matched expected results; 29 of 29 automated tests pass.",
    links: [{ label: "Code on GitHub", url: "https://github.com/Deekshitha2203/security-triage-agent-cybersec590" }]
  },
  {
    id: "alerts",
    title: "AI Alert Enrichment & Prioritization Agent",
    org: "Agent design project", when: "",
    tags: ["AI agent", "Security operations"],
    lenses: ["ai", "product"], kind: "Individual",
    summary: "Security analysts cannot read 35,000 alerts a day. I designed an agent workflow that narrows them to the 300 that matter.",
    points: [
      "Designed the workflow that enriches and ranks 35,000 daily alerts down to the top 300.",
      "Added a guardrail against cross-client data leaks.",
      "Set the success target at 90% agreement with expert analysts."
    ]
  },
  {
    id: "quizrag",
    title: "CyberSec Quiz Generator",
    org: "AI in Cybersecurity, " + DUKE, when: "Fall 2026",
    tags: ["RAG app", "Learning tool"],
    lenses: ["ai", "eng"], kind: "Team", team: "Team of 2",
    summary: "Feed it your study notes and it writes you a quiz. A retrieval-augmented app for learning cybersecurity.",
    points: [
      "Ingests PDF or text study material, chunks it and embeds it.",
      "Uses hybrid search (semantic plus keyword, fused by reciprocal rank) to find the right context for each question.",
      "Generates multiple-choice quizzes with explanations and scores them; packaged with Docker."
    ],
    links: [{ label: "Code on GitHub", url: "https://github.com/Jog-sama/Cybersec-Quiz-RAG" }]
  },
  {
    id: "tracing",
    title: "Tracing an LLM support agent",
    org: "Tracing lab · AI in Cybersecurity, " + DUKE, when: "Fall 2026",
    tags: ["LLM tracing", "Lab"],
    lenses: ["ai"], kind: "Team", team: "Team of 4",
    summary: "You cannot secure or debug an agent you cannot see. A lab on adding tracing to a tool-calling LLM app.",
    points: [
      "Instrumented the app, its support agent and its tools so every model call and tool call is recorded as a trace.",
      "Verified the setup end to end, from provider probe to traces appearing in the observability dashboard.",
      "Documented how to diagnose missing traces: keys, endpoints, batching and time ranges."
    ],
    files: [{ label: "Lab report", path: "files/aisec/tracing-lab-report.pdf" }]
  },
  {
    id: "ctf",
    title: "CTF Agent: can an AI solve security challenges safely?",
    org: "Final project · AI in Cybersecurity, " + DUKE, when: "Fall 2026 · in progress",
    tags: ["Autonomous agent", "Sandbox safety"],
    lenses: ["ai", "eng"], kind: "Team", team: "Team of 4", status: "In progress",
    summary: "An autonomous tool-using agent that solves capture-the-flag challenges inside an isolated sandbox, with the evaluator kept out of its reach.",
    points: [
      "The solver runs in a locked-down container with no network egress; a trusted controller holds the flag and judges submissions.",
      "Hard budgets on wall-clock time, calls and tokens, with full traces of every step.",
      "Evaluation reports pass@k, solve rate, time, tokens and cost."
    ],
    links: [{ label: "Code on GitHub", url: "https://github.com/shwetamittal19/ctf-agent-cybersec590" }]
  },

  /* ───────────── Operations (teaching) ───────────── */
  {
    id: "ta-ops",
    title: "Teaching Operations Management",
    org: "Teaching Assistant, " + DUKE, when: "Fall 2026",
    tags: ["Teaching", "Power BI", "Python"],
    lenses: ["ops", "analytics"], kind: "Teaching",
    summary: "I build the assignments students work on, and I solve every one myself before it goes out.",
    points: [
      "Created the course’s data assignments and worked each one end to end in Power BI and Python.",
      "Built the solution files for students.",
      "Recorded a Power BI tutorial for the class.",
      "Course topics: process analysis, single- and multi-server queueing, inventory models (EOQ, newsvendor, base stock), Toyota and lean, and the Littlefield simulation."
    ]
  },
  {
    id: "ta-scm",
    title: "Teaching Supply Chain Management",
    org: "Teaching Assistant, " + DUKE, when: "Spring 2026",
    tags: ["Teaching", "Case discussions"],
    lenses: ["ops"], kind: "Teaching",
    summary: "A class of 30+ students learning how modern supply chains work through real company cases.",
    points: [
      "Created assignments and guided the work students submitted for their case presentations.",
      "Read every case alongside the class and judged assignments and in-class presentations.",
      "Played the negotiation games with students.",
      "Cases: Walmart, Merloni, Marks & Spencer and Zara, Sport Obermeyer, Rwanda Trading Company, Nike global sourcing, Boeing strategic sourcing, humanitarian logistics hubs and Patagonia."
    ]
  },

  /* ───────────── Engineering roots ───────────── */
  {
    id: "banking",
    title: "Secure banking application and password manager",
    org: "B.Tech project · Vellore Institute of Technology", when: "",
    tags: ["Machine learning", "Fraud detection"],
    lenses: ["eng", "ai"], kind: "Undergraduate",
    summary: "A security-focused banking system that detects fraudulent transactions with machine learning and includes an encrypted password manager.",
    points: ["Researched, designed and implemented fraud detection, encryption and password management in one application."],
    files: [{ label: "Project report", path: "files/undergrad/secure-banking.pdf" }]
  },
  {
    id: "covid",
    title: "COVID-19 prediction and hospital appointment scheduling",
    org: "B.Tech project · Vellore Institute of Technology", when: "",
    tags: ["Machine learning", "Health"],
    lenses: ["eng"], kind: "Undergraduate",
    summary: "A machine-learning web app that predicts COVID-19 likelihood from symptoms and books a nearby hospital appointment using GPS and a maps API.",
    points: ["Compared models for symptom-based prediction and built the scheduling flow, aimed at reducing hospital load during the pandemic."],
    files: [{ label: "Project report", path: "files/undergrad/covid-prediction.pdf" }]
  },
  {
    id: "mobex",
    title: "MOBEX: a smart health monitoring startup concept",
    org: "Lean Startup Management · Vellore Institute of Technology", when: "",
    tags: ["Startup concept", "Health monitoring"],
    lenses: ["eng", "venture"], kind: "Undergraduate",
    summary: "A startup concept for web and mobile health monitoring: symptom tracking, reports and remote consultations, focused on affordable access.",
    points: ["Developed the concept, business model and technical architecture."],
    files: [{ label: "Project report", path: "files/undergrad/mobex.pdf" }]
  },
  {
    id: "rfid",
    title: "RFID-based shuttle cab tracking and access control",
    org: "B.Tech project · Vellore Institute of Technology", when: "",
    tags: ["IoT", "Access control"],
    lenses: ["eng", "ops"], kind: "Undergraduate",
    summary: "An IoT system that automates shuttle entry, tracks rides and calculates fares without cash handling.",
    points: ["Built with Arduino, RFID modules and an Android interface."],
    files: [{ label: "Project report", path: "files/undergrad/rfid-shuttle.pdf" }]
  },
  {
    id: "stocks",
    title: "Stock market investment fantasy league",
    org: "B.Tech project · Vellore Institute of Technology", when: "",
    tags: ["Gamification", "Investing"],
    lenses: ["eng", "product"], kind: "Undergraduate",
    summary: "A gamified stock-market simulator where beginners trade with virtual money, compete in leagues and learn from leaderboards and analytics.",
    points: ["Designed the system architecture and user workflows to lower the entry barrier while mimicking real market behavior."],
    files: [{ label: "Project report", path: "files/undergrad/stock-fantasy-league.pdf" }]
  }
];

/* Four numbers for the top of the page. */
const IMPACT = [
  { n: 20, suffix: "M+", label: "people use a security feature I built from scratch at Ivanti" },
  { text: "6 days → 1 min", wide: true, label: "incident response time after remote kill switches across 5M+ devices" },
  { n: 39, suffix: "%", label: "higher adoption than classic VPN after I simplified Zero Trust sign-in" },
  { n: 50, suffix: "+", label: "customer interviews behind one product roadmap at ShopSight" },
  { n: 35, suffix: "%", label: "more sessions per user after my analytics and A/B tests" }
];

/* The journey, oldest first. `area` or `workId` adds a button to the stop. */
const JOURNEY = [
  { id: "vit", when: "2018 – 2022", short: "VIT", title: "B.Tech, Computer Science and Engineering", org: "Vellore Institute of Technology",
    bullets: ["GPA 3.68 / 4.0.", "Built projects across machine learning, IoT, security and fintech."],
    area: "eng", cta: "See the projects" },
  { id: "ivanti", when: "2022 – 2024", short: "Ivanti", title: "Software Engineer", org: "Ivanti · Secure Access",
    note: "Intern → Associate Software Engineer → Software Engineer",
    bullets: [
      "Built a device-compliance feature from zero to one. It now serves 20M+ end users at 10K+ enterprise customers.",
      "Simplified Zero Trust sign-in on iOS and Android from customer feedback: 39% higher adoption than classic VPN for 500K+ mobile users.",
      "Unblocked an iOS 17 beta vulnerability that hit every VPN. When our Apple support tickets stalled, I used WWDC to reach Apple’s network engineers, then built the fix with our lead architect. It helped win $1M in revenue.",
      "Cut incident response from about 6 days to 1 minute with remote kill switches across 5M+ devices.",
      "Earned Ivanti’s No. 1 Spot Award for customer focus."
    ] },
  { id: "duke", when: "2025 – 2027", short: "Duke", title: "Master of Engineering Management", org: "Duke University",
    bullets: [
      "GPA 4.0 / 4.0, with the Duke Innovation & Entrepreneurship certificate.",
      "Courses: Design Thinking, Competitive Strategy, Marketing, Decision Models, Finance, IP & Business Law, Management of High Tech Industries, New Ventures, AI in Cybersecurity.",
      "IBM Enterprise Design Thinking Practitioner (Sep 2025)."
    ],
    link: { label: "View IBM credential", url: "files/design/ibm-design-thinking.pdf" } },
  { id: "shopsight", when: "Aug – Dec 2025", short: "ShopSight", title: "Student Consultant, Product", org: "ShopSight",
    bullets: [
      "Led a team of 4 advising the CEO on what to build first for the mobile app.",
      "Ran 50+ customer interviews and turned them into requirements and a roadmap for 2 MVPs.",
      "Shipped 4 features in 2 sprints and lifted sessions per user by 35%."
    ],
    workId: "shopsight", cta: "Open the case study" },
  { id: "cpsc", when: "Summer 2026", short: "CPSC Foundation", title: "Program Manager Intern", org: "CPSC Foundation · Duke University SCIP Program",
    bullets: [
      "Scoped and managed 8 fundraising workstreams across 9 weeks, building a pipeline of 25–30 corporate prospects.",
      "Launched an employer matching program on Benevity and YourCause: a net-new revenue stream for the Foundation.",
      "Designed a $1K–$25K corporate sponsorship program, with 4 one-pagers and 50+ donor-facing communications.",
      "Researched 50+ grant opportunities across 10 funding themes and authored 2 targeted grant proposals.",
      "Audited and deduplicated the CRM, restoring donor giving histories across 650+ accounts."
    ] },
  { id: "teaching", when: "2026 – now", short: "Teaching", title: "Teaching Assistant", org: "Duke University",
    bullets: [
      "Operations Management (Fall 2026): I create the data assignments, solve each one first in Power BI and Python, build the solution files, and recorded a Power BI tutorial for the class.",
      "Supply Chain Management (Spring 2026): supported 30+ students by creating assignments, judging case presentations and playing the negotiation games with them.",
      "Also a student worker in inventory management and logistics at the Duke Distribution Center."
    ],
    area: "analytics", cta: "See analytics & operations work" }
];

const SKILLS = [
  { group: "Product", items: ["Customer interviews", "User research", "Roadmapping", "Feature prioritization", "Go-to-market", "Prototyping", "Agile"] },
  { group: "Data", items: ["SQL", "Python", "Excel", "Power BI", "Tableau", "Google Analytics", "A/B testing"] },
  { group: "AI & tools", items: ["LLMs / GenAI", "Agent design", "Prompt engineering", "Figma", "Jira", "Notion", "n8n"] }
];

/* Personal mission statement, shown with photos from the Himalayas trek.
   The quote is split in three so the middle part can be highlighted. */
const MISSION = {
  label: "My personal mission",
  before: "I want to walk the ",
  highlight: "less travelled path",
  after: ", and be courageous.",
  photo: { src: "img/trek/summit.jpg", alt: "Shweta standing on a snow slope high in the Himalayas, with a snow-covered mountain range behind her" },
  stat: { n: 14, suffix: ",000 ft", label: "Himalayas trek, summer 2026" },
  link: { label: "Read the trek story", url: "https://shwetamittal19.github.io/sar-pass/" },
  trail: [
    { src: "img/trek/ridge.jpg", alt: "Trekkers resting in a line on a steep snow ridge", pos: "50% 55%" },
    { src: "img/trek/sunset.jpg", alt: "Walking down a snow slope towards an orange sunset over the mountains", pos: "50% 70%" },
    { src: "img/trek/meadow.jpg", alt: "Shweta with a backpack and walking stick on a rock in a green mountain meadow", pos: "50% 58%" }
  ]
};

const LIFE = {
  line: "Running, powerlifting, travel, reading, baking, painting, community outreach, and an interest in cognitive behavioural therapy.",
  photos: [
    { src: "img/life/running-1.jpg", cap: "Running: I found it in 2024 and it was the best decision ever.", shape: "tall" },
    { src: "img/life/travel-1.jpg", cap: "Travel" },
    { src: "img/life/painting-2.jpg", cap: "Painting", shape: "wide" },
    { src: "img/life/baking-2.jpg", cap: "Baking" },
    { src: "img/life/travel-2.jpg", cap: "Hiking", shape: "tall" },
    { src: "img/life/powerlifting-2.jpg", cap: "Powerlifting", shape: "tall" },
    { src: "img/life/reading-1.jpg", cap: "Reading" },
    { src: "img/life/cbt.jpg", cap: "Cognitive behavioural therapy" }
  ]
};
