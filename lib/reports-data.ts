export interface Report {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: 'market-analysis' | 'technology-trends' | 'policy-insights' | 'industry-outlook';
  featured: boolean;
  downloadUrl?: string;
  previewPages: number;
  fileSize: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  tags: string[];
  coverImage: string;
  excerpt: string;
  keyFindings: string[];
  tableOfContents: {
    section: string;
    page: number;
  }[];
  methodology: string;
  dataSource: string;
  relatedReports: string[];
}

const reports: Report[] = [
  {
    id: "global-solar-market-2024",
    title: "Global Solar Market Outlook 2024-2030",
    subtitle: "Comprehensive Analysis of Photovoltaic Industry Growth and Investment Opportunities",
    description: "Comprehensive analysis of the global photovoltaic market landscape, examining technology evolution, regional dynamics, policy frameworks, and strategic investment opportunities through 2030.",
    publishDate: "2024-06-15",
    readTime: "25 min",
    category: "market-analysis",
    featured: true,
    downloadUrl: "/reports/global-solar-market-2024.pdf",
    previewPages: 8,
    fileSize: "2.4 MB",
    author: {
      name: "戴蓉蓉",
      title: "Senior Solar Market Analyst",
      avatar: "/avatars/dai-rongrong.svg"
    },
    tags: ["Solar Energy", "Market Analysis", "Investment", "Policy"],
    coverImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format",
    excerpt: "Global solar PV markets are projected to reach $334 billion by 2030, propelled by dramatically declining costs, strengthening policy support, and accelerating corporate renewable procurement strategies.",
    keyFindings: [
      "Global solar capacity poised for unprecedented tripling by 2030",
      "Utility-scale solar LCOE approaching breakthrough $0.02/kWh threshold in leading markets",
      "Energy storage integration emerges as critical enabler for grid stability and reliability",
      "Chinese manufacturing dominance persists while supply chain diversification accelerates"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Market Overview", page: 8 },
      { section: "Technology Trends", page: 15 },
      { section: "Regional Analysis", page: 22 },
      { section: "Policy Landscape", page: 35 },
      { section: "Investment Outlook", page: 42 },
      { section: "Conclusions", page: 48 }
    ],
    methodology: "Analysis integrates primary research from 150+ executive interviews, comprehensive datasets from premier industry databases, and proprietary cost curve modeling to deliver actionable market intelligence.",
    dataSource: "IEA, IRENA, BloombergNEF, Wood Mackenzie, Primary Research",
    relatedReports: ["energy-storage-outlook-2024", "wind-energy-trends-2024"]
  },
  {
    id: "energy-storage-outlook-2024",
    title: "Energy Storage Market Outlook 2024",
    subtitle: "Battery Technologies, Grid Integration, and Market Dynamics",
    description: "In-depth examination of the rapidly transforming energy storage ecosystem, analyzing cutting-edge battery technologies, large-scale grid deployments, and breakthrough market opportunities.",
    publishDate: "2024-05-20",
    readTime: "20 min",
    category: "technology-trends",
    featured: true,
    downloadUrl: "/reports/energy-storage-outlook-2024.pdf",
    previewPages: 6,
    fileSize: "1.8 MB",
    author: {
      name: "林志华",
      title: "Energy Storage Technology Lead",
      avatar: "/avatars/lin-zhihua.svg"
    },
    tags: ["Energy Storage", "Battery Technology", "Grid Integration", "Market Trends"],
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
    excerpt: "Global energy storage markets experience explosive growth as battery costs plummet 90% since 2010, while grid-scale deployments accelerate across continents.",
    keyFindings: [
      "Battery storage capacity trajectory indicates 15-fold expansion by 2030",
      "Lithium-ion technology maintains robust 8% annual cost decline momentum",
      "Grid-scale storage crosses economic viability threshold in major markets",
      "Next-generation storage technologies capture increasing market share"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Technology Landscape", page: 7 },
      { section: "Market Dynamics", page: 14 },
      { section: "Grid Integration", page: 21 },
      { section: "Regional Analysis", page: 28 },
      { section: "Future Outlook", page: 35 }
    ],
    methodology: "Analysis based on technology cost databases, project pipeline tracking, and interviews with 80+ storage developers and utilities.",
    dataSource: "BNEF, GTM Research, EPRI, Wood Mackenzie, Primary Research",
    relatedReports: ["global-solar-market-2024", "wind-energy-trends-2024"]
  },
  {
    id: "wind-energy-trends-2024",
    title: "Wind Energy Technology Trends 2024",
    subtitle: "Offshore Expansion, Turbine Innovation, and Market Evolution",
    description: "Strategic analysis of wind energy technological breakthroughs, offshore market expansion dynamics, and critical grid integration challenges reshaping the industry.",
    publishDate: "2024-04-18",
    readTime: "18 min",
    category: "technology-trends",
    featured: false,
    downloadUrl: "/reports/wind-energy-trends-2024.pdf",
    previewPages: 5,
    fileSize: "1.5 MB",
    author: {
      name: "王雅琪",
      title: "Wind Energy Research Director",
      avatar: "/avatars/wang-yaqi.svg"
    },
    tags: ["Wind Energy", "Offshore Wind", "Turbine Technology", "Grid Integration"],
    coverImage: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop&auto=format",
    excerpt: "Wind energy maintains its position as the fastest-expanding renewable technology, while offshore wind emerges as a transformative force reshaping coastal energy markets globally.",
    keyFindings: [
      "Offshore wind capacity to reach 380 GW by 2030",
      "Turbine sizes continue growing, reaching 20+ MW",
      "Floating wind technology commercializing rapidly",
      "Grid infrastructure becoming primary bottleneck"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Onshore Developments", page: 6 },
      { section: "Offshore Expansion", page: 12 },
      { section: "Technology Innovation", page: 18 },
      { section: "Market Outlook", page: 24 }
    ],
    methodology: "Technology assessment based on turbine manufacturer data, project databases, and expert interviews with industry leaders.",
    dataSource: "GWEC, WindEurope, NREL, IEA Wind, Primary Research",
    relatedReports: ["global-solar-market-2024", "hydrogen-economy-report-2024"]
  },
  {
    id: "hydrogen-economy-report-2024",
    title: "The Hydrogen Economy: 2024 Market Report",
    subtitle: "Green Hydrogen Production, Infrastructure, and Applications",
    description: "Strategic assessment of the nascent hydrogen economy, examining breakthrough production technologies, infrastructure development pathways, and transformative industrial applications.",
    publishDate: "2024-03-25",
    readTime: "22 min",
    category: "industry-outlook",
    featured: false,
    downloadUrl: "/reports/hydrogen-economy-2024.pdf",
    previewPages: 7,
    fileSize: "2.1 MB",
    author: {
      name: "张文博",
      title: "Hydrogen Technology Specialist",
      avatar: "/avatars/zhang-wenbo.svg"
    },
    tags: ["Hydrogen", "Green Hydrogen", "Industrial Applications", "Infrastructure"],
    coverImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format",
    excerpt: "Green hydrogen establishes itself as an essential pillar of global decarbonization strategies, driven by declining production costs and surging infrastructure investments.",
    keyFindings: [
      "Green hydrogen costs to reach $1.50/kg by 2030",
      "Electrolyzer capacity growing 50% annually",
      "Steel and ammonia industries driving early adoption",
      "Transport applications gaining momentum"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Production Technologies", page: 8 },
      { section: "Infrastructure Development", page: 15 },
      { section: "Industrial Applications", page: 22 },
      { section: "Policy Framework", page: 29 },
      { section: "Investment Outlook", page: 35 }
    ],
    methodology: "Market analysis combining project pipeline data, technology cost assessments, and stakeholder interviews across the hydrogen value chain.",
    dataSource: "IEA Hydrogen, Hydrogen Council, IRENA, BloombergNEF, Primary Research",
    relatedReports: ["energy-storage-outlook-2024", "clean-energy-policy-2024"]
  },
  {
    id: "clean-energy-policy-2024",
    title: "Clean Energy Policy Landscape 2024",
    subtitle: "Global Regulatory Trends and Investment Incentives",
    description: "Comprehensive examination of evolving global clean energy policy landscapes, analyzing regulatory frameworks, investment mechanisms, and market development impacts.",
    publishDate: "2024-02-14",
    readTime: "16 min",
    category: "policy-insights",
    featured: false,
    downloadUrl: "/reports/clean-energy-policy-2024.pdf",
    previewPages: 4,
    fileSize: "1.2 MB",
    author: {
      name: "李思怡",
      title: "Policy Research Manager",
      avatar: "/avatars/li-siyi.svg"
    },
    tags: ["Policy", "Regulation", "Investment Incentives", "Market Development"],
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format",
    excerpt: "Clean energy policies evolve toward greater sophistication and precision, as governments deploy targeted technology incentives and comprehensive carbon pricing frameworks.",
    keyFindings: [
      "135 countries now have renewable energy targets",
      "Carbon pricing coverage expanding to 40% of global emissions",
      "Grid modernization investments reaching $100B annually",
      "Green taxonomy standards harmonizing globally"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Regional Policy Review", page: 6 },
      { section: "Investment Mechanisms", page: 12 },
      { section: "Grid Integration Policies", page: 18 },
      { section: "Future Trends", page: 23 }
    ],
    methodology: "Policy analysis based on government publications, regulatory filings, and interviews with policy makers and industry stakeholders.",
    dataSource: "IEA, IRENA, Government Publications, Legal Databases, Primary Research",
    relatedReports: ["global-solar-market-2024", "hydrogen-economy-report-2024"]
  }
];

export function getAllReports(): Report[] {
  return reports.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getFeaturedReports(): Report[] {
  return reports.filter(report => report.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getReportById(id: string): Report | undefined {
  return reports.find(report => report.id === id);
}

export function getReportsByCategory(category: Report['category']): Report[] {
  return reports.filter(report => report.category === category)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getRelatedReports(reportId: string): Report[] {
  const report = getReportById(reportId);
  if (!report) return [];
  
  return reports.filter(r => report.relatedReports.includes(r.id));
}

export const reportCategories = {
  'market-analysis': 'Market Analysis',
  'technology-trends': 'Technology Trends', 
  'policy-insights': 'Policy Insights',
  'industry-outlook': 'Industry Outlook'
} as const;