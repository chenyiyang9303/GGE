export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
  // Detail page additional fields
  overview: string;
  clientBackground: string;
  detailedChallenge: string;
  approach: string[];
  implementation: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  outcomes: {
    category: string;
    description: string;
    metrics: { metric: string; before: string; after: string; improvement: string }[];
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  technologies: string[];
  services: string[];
  nextSteps?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "solartech-energy",
    company: "SolarTech Energy",
    industry: "Solar Power",
    challenge: "A photovoltaic manufacturing company needed to enter overseas distributed solar markets but lacked target market analysis and entry strategies.",
    solution: "We provided global distributed solar market analysis, developed targeted market entry strategies, and assisted in establishing overseas sales networks.",
    results: [
      { metric: "International Market Share", value: "0% → 15%" },
      { metric: "Annual Revenue Growth", value: "$4.8M → $13.1M" },
      { metric: "Export Countries", value: "Expanded to 5 countries" }
    ],
    timeline: "18 months",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview: "SolarTech Energy is a professional photovoltaic module manufacturer that needed expert market analysis and strategic guidance for international market expansion.",
    clientBackground: "Founded in 2015, SolarTech Energy is a leading domestic PV module manufacturer with 5GW annual capacity, but 95% of business was concentrated in the domestic market. With intensifying domestic competition and policy changes, the company urgently needed to explore overseas markets for business diversification.",
    detailedChallenge: "The main challenges faced by the company included: lack of deep understanding of overseas distributed solar markets, unfamiliarity with PV policies and certification requirements in various countries, lack of international sales channels and partners, and need to adapt product specifications and technical standards to different market demands.",
    approach: [
      "Global distributed solar market deep research",
      "Target market selection and entry strategy development",
      "Product localization adaptation guidance",
      "International partner network establishment"
    ],
    implementation: [
      {
        phase: "Market Research & Analysis",
        duration: "6 months",
        activities: [
          "25 target countries PV policy analysis",
          "Distributed solar market size assessment",
          "Competitor strategy research",
          "Price system and profit model analysis",
          "Technical standards and certification requirements review"
        ]
      },
      {
        phase: "Strategic Planning",
        duration: "4 months",
        activities: [
          "Priority market selection model establishment",
          "Differentiated competitive strategy design",
          "Product portfolio optimization recommendations",
          "Pricing strategy development",
          "Risk assessment and contingency planning"
        ]
      },
      {
        phase: "Implementation Support",
        duration: "8 months",
        activities: [
          "Overseas distributor network establishment",
          "Product certification guidance",
          "Marketing material localization",
          "Sales team training",
          "Market entry effectiveness tracking"
        ]
      }
    ],
    outcomes: [
      {
        category: "Market Expansion Results",
        description: "Successfully established sales network covering major global markets",
        metrics: [
          { metric: "Overseas Revenue Share", before: "5%", after: "45%", improvement: "800%" },
          { metric: "Export Countries", before: "3", after: "25", improvement: "733%" },
          { metric: "Overseas Distributors", before: "5", after: "120", improvement: "2300%" }
        ]
      },
      {
        category: "Financial Performance",
        description: "Achieved significant revenue growth and profitability improvement",
        metrics: [
          { metric: "Annual Revenue", before: "$4.8M", after: "$13.1M", improvement: "172%" },
          { metric: "Gross Margin", before: "18%", after: "28%", improvement: "56%" },
          { metric: "Average Overseas Order Price", before: "$0.27/W", after: "$0.36/W", improvement: "33%" }
        ]
      }
    ],
    testimonial: {
      quote: "Their professional market analysis and strategic guidance helped us successfully break into international markets. We're now not just a manufacturer, but a global distributed solar solutions provider.",
      author: "Michael Chen",
      position: "Chairman, SolarTech Energy"
    },
    technologies: ["PV Modules", "Inverters", "Energy Storage", "Monitoring Platform", "Smart O&M"],
    services: ["Market Research", "Strategic Consulting", "Channel Development", "Product Positioning"],
    nextSteps: "The company is planning to establish a localized manufacturing base in Europe to further enhance market competitiveness and service capabilities."
  },
  {
    slug: "windpower-solutions",
    company: "WindPower Energy",
    industry: "Wind Power",
    challenge: "A wind power operator faced declining efficiency in aging wind farms and needed to develop wind farm upgrade and digital transformation strategies.",
    solution: "We provided wind farm efficiency optimization analysis, developed phased upgrade strategies, and recommended advanced digital O&M solutions.",
    results: [
      { metric: "Power Generation Efficiency", value: "23% increase" },
      { metric: "O&M Cost Reduction", value: "35%" },
      { metric: "Equipment Availability", value: "89% → 96%" }
    ],
    timeline: "12 months",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview: "WindPower Energy is a professional wind power operator managing multiple aging wind farms that urgently needed technology upgrades and digital transformation to improve operational efficiency.",
    clientBackground: "Founded in 2008, WindPower Energy was one of the early entrants in China's wind power sector, operating 800MW installed capacity. However, most wind farms were built early with severe equipment aging, leading to continuous decline in power generation efficiency and economic benefits.",
    detailedChallenge: "The core problems faced by the company included: low efficiency of aging wind turbines, high failure rates, continuously rising O&M costs, lack of effective predictive maintenance systems, low digitalization leading to poor management efficiency, and cost pressure from grid parity requirements.",
    approach: [
      "Comprehensive wind farm status assessment",
      "Technical upgrade solution design",
      "Digital O&M system construction",
      "Economic benefit analysis and optimization"
    ],
    implementation: [
      {
        phase: "Status Assessment",
        duration: "3 months",
        activities: [
          "Wind turbine equipment condition testing",
          "Power generation data deep analysis",
          "O&M cost structure analysis",
          "Technical upgrade feasibility study",
          "Investment return calculation model establishment"
        ]
      },
      {
        phase: "Solution Design",
        duration: "3 months",
        activities: [
          "Wind turbine upgrade plan development",
          "Digital monitoring platform design",
          "Predictive maintenance system construction",
          "Phased implementation planning",
          "Supplier selection and negotiation support"
        ]
      },
      {
        phase: "Implementation",
        duration: "6 months",
        activities: [
          "Key wind turbine technical upgrades",
          "Smart monitoring system deployment",
          "O&M team training",
          "Data analysis platform construction",
          "Effect monitoring and optimization adjustment"
        ]
      }
    ],
    outcomes: [
      {
        category: "Technical Performance Improvement",
        description: "Significantly improved wind farm operational efficiency through technical upgrades and digital transformation",
        metrics: [
          { metric: "Annual Power Generation", before: "180 GWh", after: "221 GWh", improvement: "23%" },
          { metric: "Equipment Availability", before: "89%", after: "96%", improvement: "8%" },
          { metric: "Average Fault Handling Time", before: "8 hours", after: "3.5 hours", improvement: "56%" }
        ]
      },
      {
        category: "Economic Benefits",
        description: "Significantly reduced operational costs and improved ROI",
        metrics: [
          { metric: "Annual O&M Costs", before: "$4.2M", after: "$2.7M", improvement: "35%" },
          { metric: "Unit Generation Cost", before: "$0.057/kWh", after: "$0.043/kWh", improvement: "24%" },
          { metric: "Investment Payback Period", before: "N/A", after: "3.2 years", improvement: "Fast Recovery" }
        ]
      }
    ],
    testimonial: {
      quote: "The digital transformation completely revolutionized our O&M model. We can now predict equipment failures in advance, operational efficiency has improved dramatically, giving our aging wind farms new life.",
      author: "David Wang",
      position: "CTO, WindPower Energy"
    },
    technologies: ["Smart Monitoring", "Predictive Maintenance", "Data Analytics", "Cloud Computing", "IoT Sensors"],
    services: ["Technical Assessment", "Upgrade Solutions", "Digital Consulting", "Benefit Analysis"],
    nextSteps: "The company plans to replicate successful experiences to other wind farms and consider investing in next-generation smart wind farm projects."
  },
  {
    slug: "energy-storage-tech",
    company: "EnergyStore Tech",
    industry: "Energy Storage",
    challenge: "A battery energy storage system manufacturer faced technology roadmap selection and business model design challenges when entering the grid-scale storage market.",
    solution: "We provided energy storage technology roadmap analysis, designed diversified business models, and developed grid-scale market entry strategies.",
    results: [
      { metric: "Market Share Growth", value: "8% → 25%" },
      { metric: "Product Line Expansion", value: "2 → 6 product lines" },
      { metric: "Annual Revenue Growth", value: "$3.2M → $10.2M" }
    ],
    timeline: "15 months",
    image: "/EnergyStore Tech.jpg",
    overview: "EnergyStore Tech is a professional battery energy storage system manufacturer that needed expert technical and commercial guidance when entering the grid-scale storage market.",
    clientBackground: "Founded in 2018, EnergyStore Tech initially focused on consumer electronics and small-scale energy storage markets. With rapid development of the new energy industry, the company aimed to expand into the high-value grid-scale storage market but lacked relevant experience and technical guidance.",
    detailedChallenge: "The main challenges faced by the company included: vast differences between grid-scale storage technical requirements and consumer-grade products, lack of deep understanding of power system and grid dispatch needs, unfamiliarity with utility procurement processes and decision mechanisms, and lack of large-scale storage project operational experience and case studies.",
    approach: [
      "Grid-scale energy storage market deep research",
      "Technology roadmap and product planning",
      "Business model innovation design",
      "Partner ecosystem development"
    ],
    implementation: [
      {
        phase: "Market Research",
        duration: "4 months",
        activities: [
          "National grid storage demand analysis",
          "Policy environment and subsidy mechanism research",
          "Competitive landscape and technology trend analysis",
          "Utility procurement model research",
          "Profit model and investment return analysis"
        ]
      },
      {
        phase: "Product Planning",
        duration: "5 months",
        activities: [
          "Technology roadmap selection and assessment",
          "Product series planning and design",
          "Key technology breakthrough planning",
          "Supply chain optimization strategy",
          "Intellectual property layout planning"
        ]
      },
      {
        phase: "Market Development",
        duration: "6 months",
        activities: [
          "Demonstration project planning and implementation",
          "Utility partnership establishment",
          "Sales team specialized training",
          "Technical service system construction",
          "Brand influence enhancement plan"
        ]
      }
    ],
    outcomes: [
      {
        category: "Technology Breakthrough",
        description: "Achieved major breakthroughs in key technology areas with industry-leading product performance",
        metrics: [
          { metric: "Energy Density", before: "120Wh/kg", after: "180Wh/kg", improvement: "50%" },
          { metric: "Cycle Life", before: "3000 cycles", after: "6000 cycles", improvement: "100%" },
          { metric: "Response Time", before: "500ms", after: "100ms", improvement: "80%" }
        ]
      },
      {
        category: "Market Performance",
        description: "Successfully entered grid-scale storage market with breakthrough business growth",
        metrics: [
          { metric: "Annual Order Value", before: "$3.2M", after: "$10.2M", improvement: "224%" },
          { metric: "Large Project Count", before: "2", after: "18", improvement: "800%" },
          { metric: "Utility Customers", before: "1", after: "12", improvement: "1100%" }
        ]
      }
    ],
    testimonial: {
      quote: "Professional market guidance and technology roadmap planning helped us successfully transition from consumer-grade products to grid-scale applications. We're now a leading national energy storage system solutions provider.",
      author: "Dr. Sarah Zhang",
      position: "Founder & CTO, EnergyStore Tech"
    },
    technologies: ["Lithium Batteries", "Energy Management System", "Inverters", "Monitoring System", "Cloud Platform"],
    services: ["Technology Roadmap", "Market Research", "Product Planning", "Business Model"],
    nextSteps: "The company is exploring next-generation solid-state battery technology and planning overseas energy storage project deployment."
  },
  {
    slug: "hydrogen-energy",
    company: "HydroPower Tech",
    industry: "Hydrogen Energy",
    challenge: "A hydrogen fuel cell manufacturer needed to enter the hydrogen heavy-duty truck market but faced technology roadmap selection and market timing challenges.",
    solution: "We provided hydrogen heavy-duty truck market analysis, developed technology development pathway planning, and assisted in establishing a complete industrial chain cooperation system.",
    results: [
      { metric: "Market Share", value: "0% → 12%" },
      { metric: "Product Line Expansion", value: "Added 3 heavy-duty truck products" },
      { metric: "Annual Revenue Growth", value: "$2.3M → $6.3M" }
    ],
    timeline: "24 months",
    image: "/Hydrogen Energy.jpg",
    overview: "HydroPower Tech is a professional hydrogen fuel cell manufacturer that needed expert technology roadmap guidance and market strategic planning when entering the hydrogen heavy-duty truck market.",
    clientBackground: "Founded in 2019, HydroPower Tech was one of the early entrants in China's hydrogen fuel cell sector, mainly producing small-power fuel cell systems. With increasing national hydrogen industry policy support, the company aimed to seize opportunities in the high-value hydrogen heavy-duty truck market.",
    detailedChallenge: "The main challenges faced by the company included: vast differences between hydrogen heavy-duty truck market technical requirements and existing products, lack of high-power fuel cell system development experience, unfamiliarity with heavy-duty truck industry special needs and certification requirements, incomplete hydrogen industry chain support, difficulty in market promotion and customer education, and risk of long investment recovery cycles.",
    approach: [
      "Hydrogen heavy-duty truck market deep analysis",
      "Technology development pathway planning",
      "Industrial chain cooperation system construction",
      "Demonstration project planning and advancement"
    ],
    implementation: [
      {
        phase: "Market Research",
        duration: "6 months",
        activities: [
          "Hydrogen heavy-duty truck policy environment analysis",
          "Target customer demand deep research",
          "Technical standards and certification requirements review",
          "Competitor technology roadmap research",
          "Cost structure and profit model analysis"
        ]
      },
      {
        phase: "Technology Planning",
        duration: "8 months",
        activities: [
          "High-power fuel cell technology breakthrough",
          "Heavy-duty truck specialized system integration design",
          "Testing and verification system establishment",
          "Key supplier cooperation negotiation",
          "Intellectual property layout strategy"
        ]
      },
      {
        phase: "Market Development",
        duration: "6 months",
        activities: [
          "Demonstration project partner development",
          "Hydrogen supply chain cooperation establishment",
          "Heavy-duty truck manufacturer strategic cooperation",
          "Government relations and policy advocacy",
          "Brand promotion and market education"
        ]
      },
      {
        phase: "Scale-up Promotion",
        duration: "4 months",
        activities: [
          "Mass production capacity construction",
          "After-sales service network development",
          "Commercial operation model optimization",
          "New product iteration development",
          "Market share expansion strategy"
        ]
      }
    ],
    outcomes: [
      {
        category: "Technology Achievements",
        description: "Successfully developed high-power fuel cell systems meeting heavy-duty truck application requirements",
        metrics: [
          { metric: "System Power", before: "30kW", after: "120kW", improvement: "300%" },
          { metric: "System Efficiency", before: "52%", after: "65%", improvement: "25%" },
          { metric: "Durability", before: "5000 hours", after: "20000 hours", improvement: "300%" }
        ]
      },
      {
        category: "Commercial Achievements",
        description: "Successfully entered hydrogen heavy-duty truck market and established industry leadership position",
        metrics: [
          { metric: "Annual Sales Revenue", before: "$2.3M", after: "$6.3M", improvement: "180%" },
          { metric: "Heavy-duty Truck Customers", before: "0", after: "25", improvement: "New Market Entry" },
          { metric: "Market Share", before: "0%", after: "12%", improvement: "Top 3 Industry Position" }
        ]
      }
    ],
    testimonial: {
      quote: "Professional market analysis and technology roadmap guidance helped us successfully transition from small-power applications to high-power heavy-duty truck markets. We're now not just fuel cell suppliers, but leaders in hydrogen heavy-duty truck solutions.",
      author: "Robert Liu",
      position: "Chairman & CEO, HydroPower Tech"
    },
    technologies: ["Hydrogen Fuel Cells", "Stack Technology", "System Integration", "Control Algorithms", "Testing & Validation"],
    services: ["Market Analysis", "Technology Planning", "Industrial Chain Integration", "Business Model"],
    nextSteps: "The company is developing next-generation solid oxide fuel cell technology and planning to enter marine and aviation hydrogen applications."
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}