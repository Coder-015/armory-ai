export interface BentoFeature {
  title: string;
  description: string;
  icon: string;
  colSpan?: 1 | 2;
}

export const FEATURES: BentoFeature[] = [
  { 
    title: "Autonomous Execution", 
    description: "Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.", 
    icon: "/assets/cog-8-tooth.svg", 
    colSpan: 1 
  },
  { 
    title: "Infinite Visual Canvas", 
    description: "Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.", 
    icon: "/assets/link-solid.svg", 
    colSpan: 2 
  },
  { 
    title: "End-to-End Encryption", 
    description: "Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.", 
    icon: "/assets/search.svg", 
    colSpan: 2 
  },
  { 
    title: "Production-Ready Stack", 
    description: "Connect core business platforms and internal services through secure, ready integrations that scale with your volume.", 
    icon: "/assets/chart-pie.svg", 
    colSpan: 1 
  },
];
