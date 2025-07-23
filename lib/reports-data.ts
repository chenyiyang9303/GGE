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
    description: "An in-depth analysis of the global solar photovoltaic market, covering technology trends, regional developments, policy impacts, and investment opportunities through 2030.",
    publishDate: "2024-06-15",
    readTime: "25 min",
    category: "market-analysis",
    featured: true,
    downloadUrl: "/reports/global-solar-market-2024.pdf",
    previewPages: 8,
    fileSize: "2.4 MB",
    author: {
      name: "温馨 (Wenxin)",
      title: "Senior Solar Market Analyst",
      avatar: "/avatars/wenxin.svg"
    },
    tags: ["Solar Energy", "Market Analysis", "Investment", "Policy"],
    coverImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format",
    excerpt: "The global solar PV market is projected to reach $334 billion by 2030, driven by declining costs, supportive policies, and increasing corporate renewable energy procurement.",
    keyFindings: [
      "Global solar capacity expected to triple by 2030",
      "LCOE for utility-scale solar to drop below $0.02/kWh in key markets",
      "Energy storage integration becoming critical for grid stability",
      "China maintains manufacturing leadership but market diversifying"
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
    methodology: "Our analysis combines primary research from 150+ industry interviews, comprehensive market data from leading industry databases, and proprietary modeling of technology cost curves.",
    dataSource: "IEA, IRENA, BloombergNEF, Wood Mackenzie, Primary Research",
    relatedReports: ["energy-storage-outlook-2024", "wind-energy-trends-2024"]
  },
  {
    id: "energy-storage-outlook-2024",
    title: "Energy Storage Market Outlook 2024",
    subtitle: "Battery Technologies, Grid Integration, and Market Dynamics",
    description: "Comprehensive analysis of the rapidly evolving energy storage market, covering battery technologies, grid-scale deployments, and emerging market opportunities.",
    publishDate: "2024-05-20",
    readTime: "20 min",
    category: "technology-trends",
    featured: true,
    downloadUrl: "/reports/energy-storage-outlook-2024.pdf",
    previewPages: 6,
    fileSize: "1.8 MB",
    author: {
      name: "李明 (Li Ming)",
      title: "Energy Storage Technology Lead",
      avatar: "/avatars/Li Ming.svg"
    },
    tags: ["Energy Storage", "Battery Technology", "Grid Integration", "Market Trends"],
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
    excerpt: "The global energy storage market is experiencing unprecedented growth, with battery costs falling 90% since 2010 and grid-scale deployments accelerating worldwide.",
    keyFindings: [
      "Battery storage capacity to grow 15x by 2030",
      "Lithium-ion costs continue declining at 8% annually",
      "Grid-scale storage becoming economically viable",
      "Alternative technologies gaining market share"
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
    description: "Analysis of wind energy technology developments, offshore market expansion, and grid integration challenges facing the wind industry.",
    publishDate: "2024-04-18",
    readTime: "18 min",
    category: "technology-trends",
    featured: false,
    downloadUrl: "/reports/wind-energy-trends-2024.pdf",
    previewPages: 5,
    fileSize: "1.5 MB",
    author: {
      name: "张雨晴 (Zhang Yuqing)",
      title: "Wind Energy Research Director",
      avatar: "/avatars/Zhang Yu.svg"
    },
    tags: ["Wind Energy", "Offshore Wind", "Turbine Technology", "Grid Integration"],
    coverImage: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop&auto=format",
    excerpt: "Wind energy continues to be the fastest-growing renewable technology, with offshore wind emerging as a game-changer for coastal markets worldwide.",
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
    description: "Comprehensive analysis of the emerging hydrogen economy, covering production technologies, infrastructure development, and industrial applications.",
    publishDate: "2024-03-25",
    readTime: "22 min",
    category: "industry-outlook",
    featured: false,
    downloadUrl: "/reports/hydrogen-economy-2024.pdf",
    previewPages: 7,
    fileSize: "2.1 MB",
    author: {
      name: "王浩然 (Wang Haoran)",
      title: "Hydrogen Technology Specialist",
      avatar: "/avatars/王浩然.svg"
    },
    tags: ["Hydrogen", "Green Hydrogen", "Industrial Applications", "Infrastructure"],
    coverImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format",
    excerpt: "Green hydrogen is emerging as a critical component of global decarbonization efforts, with production costs declining and infrastructure investments accelerating.",
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
    description: "Analysis of evolving clean energy policies worldwide, covering regulatory frameworks, investment incentives, and their impact on market development.",
    publishDate: "2024-02-14",
    readTime: "16 min",
    category: "policy-insights",
    featured: false,
    downloadUrl: "/reports/clean-energy-policy-2024.pdf",
    previewPages: 4,
    fileSize: "1.2 MB",
    author: {
      name: "陈思雅 (Chen Siya)",
      title: "Policy Research Manager",
      avatar: "/avatars/Chen Siya.svg"
    },
    tags: ["Policy", "Regulation", "Investment Incentives", "Market Development"],
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format",
    excerpt: "Clean energy policies are becoming more sophisticated and targeted, with governments implementing technology-specific incentives and carbon pricing mechanisms.",
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