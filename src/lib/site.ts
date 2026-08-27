export const site = {
  name: "Tampa Auto Rescue",
  url: "https://tampaautorescue.com",
  phoneDisplay: "(813) 555-0199",
  phoneHref: "tel:+18135550199",
  email: "dispatch@tampaautorescue.com",
  areas: "Tampa, Brandon, Ybor City, Riverview, Clearwater & St. Petersburg",
  county: "Hillsborough & Pinellas Counties",
  hours: "24 hours a day, 7 days a week, 365 days a year",
} as const;

export type Service = {
  type: string;
  title: string;
  slugAnchor: string;
  description: string;
  eta: string;
  link?: string;
};

export const services: Service[] = [
  {
    type: "ROADSIDE",
    title: "Emergency Towing",
    slugAnchor: "towing",
    description:
      "Flatbed recovery and local transport for all passenger vehicles and light trucks.",
    eta: "20-35 MIN",
    link: "/towing",
  },
  {
    type: "TECHNICAL",
    title: "Battery Rescue",
    slugAnchor: "battery",
    description:
      "Diagnostic testing, professional jump-starts, and on-site battery replacement.",
    eta: "15-25 MIN",
  },
  {
    type: "LOGISTICS",
    title: "Fuel Delivery",
    slugAnchor: "fuel",
    description:
      "Swift delivery of premium unleaded or diesel to your precise GPS coordinates.",
    eta: "15-30 MIN",
  },
  {
    type: "MECHANICAL",
    title: "Tire Exchange",
    slugAnchor: "tire",
    description: "Safe roadside tire changes using high-capacity hydraulic equipment.",
    eta: "25-40 MIN",
  },
  {
    type: "ENTRY",
    title: "Lockout Access",
    slugAnchor: "lockout",
    description:
      "Damage-free vehicle entry using specialized professional locksmith tools.",
    eta: "10-20 MIN",
  },
  {
    type: "SPECIAL",
    title: "Winch & Recovery",
    slugAnchor: "winch",
    description:
      "Off-road extraction from sand, mud, or ditches with precision cable rigging.",
    eta: "45-60 MIN",
    link: "/recovery",
  },
];

export const cities = [
  { name: "Tampa", lat: 27.9506, lng: -82.4572 },
  { name: "Brandon", lat: 27.9378, lng: -82.2859 },
  { name: "Ybor City", lat: 27.9614, lng: -82.4407 },
  { name: "Riverview", lat: 27.8661, lng: -82.3265 },
  { name: "Clearwater", lat: 27.9659, lng: -82.8001 },
  { name: "St. Petersburg", lat: 27.7676, lng: -82.6403 },
] as const;

export const faqs = [
  {
    q: "How fast can Tampa Auto Rescue reach me?",
    a: "Our average response time inside Tampa city limits is 24 minutes. Outlying areas such as Riverview, Brandon, and Clearwater typically run 30-45 minutes depending on traffic and weather.",
  },
  {
    q: "Are you available 24/7?",
    a: "Yes. Dispatch is staffed by live operators 24 hours a day, 365 days a year — including holidays and during storm events.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover Hillsborough and Pinellas Counties, including Tampa, Ybor City, Brandon, Riverview, Clearwater, and St. Petersburg. Long-distance transport across Florida is available by quote.",
  },
  {
    q: "How much does roadside assistance cost?",
    a: "Pricing depends on the service and your location. You receive a firm, all-in quote over the phone before a truck is dispatched — no surprise fees on arrival.",
  },
  {
    q: "Do you tow electric vehicles?",
    a: "Yes. EVs are transported on flatbeds with wheel dollies where required, following manufacturer high-voltage handling guidance.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit and debit cards, digital wallets, and cash. Fleet accounts are invoiced on net terms.",
  },
  {
    q: "Can you handle motorcycles, box trucks, or exotic cars?",
    a: "Yes. We carry soft straps, motorcycle chocks, and low-clearance ramps for lowered and exotic vehicles, plus medium-duty capacity for box trucks.",
  },
  {
    q: "Do you offer fleet or business accounts?",
    a: "We do. Fleet contracts include priority dispatch tiers, consolidated monthly billing, and a dedicated account contact. Details are on our Fleet Contracts page.",
  },
] as const;
