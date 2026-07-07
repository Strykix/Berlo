import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  CloudCog,
  Cpu,
  Database,
  Factory,
  Gauge,
  LineChart,
  MapPin,
  Network,
  PlugZap,
  RadioTower,
  Rocket,
  ServerCog,
  ShieldCheck,
  Snowflake,
  SunMedium,
  Wrench,
  Zap
} from "lucide-react";

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Cas d'usage", href: "/cas-usage" },
  { label: "Technologies", href: "/technologies" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" }
];

export const heroBadges = [
  { label: "Basé dans les Hauts-de-France", icon: MapPin },
  { label: "Approche pragmatique", icon: BadgeCheck },
  { label: "Résultats rapides", icon: Zap },
  { label: "Sécurité & souveraineté", icon: ShieldCheck }
];

export const contactDetails = {
  email: "lb.loicberger@gmail.com",
  mailto: "mailto:lb.loicberger@gmail.com",
  diagnosticMailto: "mailto:lb.loicberger@gmail.com?subject=Diagnostic%20IoT%20Berlo",
  phoneDisplay: "06 67 88 09 63",
  phoneHref: "tel:+33667880963"
};

export const metrics = [
  { label: "Capteurs connectés", value: "1280", type: "spark" },
  { label: "Alertes actives", value: "3", type: "sparkAlt" },
  { label: "Suivi des données", value: "continu", type: "bars" },
  { label: "Données en temps réel", value: "24h", type: "line" }
];

export const painPoints = [
  "Données siloées",
  "Visibilité limitée",
  "Pannes imprévues",
  "Relevés manuels",
  "Coûts énergétiques",
  "Documentation éparse",
  "Conformité & sécurité",
  "Supervision vieillissante"
];

export const services = [
  {
    title: "Diagnostic IoT terrain",
    price: "À partir de 990 € HT",
    description:
      "Analyse des usages, équipements, protocoles, données disponibles et opportunités IoT à plus forte valeur.",
    icon: RadioTower
  },
  {
    title: "POC IoT en 30 jours",
    price: "À partir de 5 900 € HT",
    description:
      "Connexion d'un premier périmètre avec collecte, stockage, dashboard et indicateurs métier mesurables.",
    icon: Rocket
  },
  {
    title: "Supervision & dashboards",
    price: "À partir de 490 € HT / mois",
    description:
      "Tableaux de bord orientés pilotage : équipements, consommations, usages, performance, historique et indicateurs de décision.",
    icon: LineChart
  },
  {
    title: "AMOA IoT / Industrie 4.0",
    price: "TJM indicatif 550 € HT / jour",
    description:
      "Cadrage technique, arbitrage cloud/edge, choix de plateforme IoT et coordination des partenaires sans complexifier inutilement.",
    icon: CloudCog
  }
];

export const useCases = [
  {
    title: "Bâtiments techniques",
    description: "CVC, GTB, comptages, qualité d'air, température, humidité, énergie.",
    impact: "Améliorer la visibilité sur le confort, les usages et la performance énergétique.",
    icon: Building2,
    image: "/industry/building-technical.jpg"
  },
  {
    title: "Industrie manufacturière",
    description: "Suivi de production, OEE, qualité, consommations et performance machines.",
    impact: "Mieux comprendre la performance terrain et prioriser les leviers d'amélioration.",
    icon: Factory,
    image: "/industry/industry-manufacturing.jpg"
  },
  {
    title: "Énergie & photovoltaïque",
    description: "Monitoring de production, reporting, comparaison de sites et indicateurs de rendement.",
    impact: "Objectiver les gains énergétiques et mieux piloter les actifs de production.",
    icon: SunMedium,
    image: "/industry/energy-photovoltaic.jpg"
  },
  {
    title: "Chambres froides & agroalimentaire",
    description: "Température, hygrométrie, traçabilité, qualité produit et suivi des conditions.",
    impact: "Renforcer le pilotage qualité et disposer d'un historique exploitable.",
    icon: Snowflake,
    image: "/industry/building-technical.jpg"
  },
  {
    title: "Maintenance industrielle",
    description: "Suivi moteurs, pompes, compresseurs, vibrations et consommations.",
    impact: "Passer d'un suivi ponctuel à une vision continue des actifs et de leur usage.",
    icon: Wrench,
    image: "/industry/industry-manufacturing.jpg"
  },
  {
    title: "Collectivités & bâtiments publics",
    description: "Suivi énergie, confort, CO2, humidité et usages des bâtiments.",
    impact: "Rendre les arbitrages énergie, confort et travaux plus mesurables.",
    icon: Gauge,
    image: "/industry/building-technical.jpg"
  }
];

export const industryVisuals = [
  {
    title: "Industrie connectée",
    eyebrow: "Production",
    description: "Capteurs, machines et lignes de production suivis par des données compréhensibles.",
    image: "/industry/industry-manufacturing.jpg"
  },
  {
    title: "Énergie supervisée",
    eyebrow: "Photovoltaïque",
    description: "Monitoring, reporting et comparaison pour objectiver la performance énergétique.",
    image: "/industry/energy-photovoltaic.jpg"
  },
  {
    title: "Bâtiments techniques",
    eyebrow: "CVC & GTB",
    description: "Équipements critiques, comptages et locaux techniques rendus visibles.",
    image: "/industry/building-technical.jpg"
  }
];

export const technologies = [
  { label: "MQTT", icon: RadioTower },
  { label: "Modbus", icon: Network },
  { label: "OPC-UA", icon: ServerCog },
  { label: "LoRaWAN", icon: Activity },
  { label: "Azure IoT Hub", icon: CloudCog },
  { label: "AWS IoT Core", icon: CloudCog },
  { label: "Grafana", icon: Gauge },
  { label: "InfluxDB", icon: Database },
  { label: "Power BI", icon: BarChart3 },
  { label: "Python", icon: Cpu },
  { label: "Docker", icon: ServerCog },
  { label: "Edge gateway", icon: Network },
  { label: "Capteurs industriels", icon: Cpu },
  { label: "API", icon: Network },
  { label: "Alerting", icon: AlertTriangle }
];

export const partnerTechnologies = [
  {
    category: "Automates & terrain",
    description: "Équipements et architectures industrielles courantes pour connecter le parc existant.",
    icon: PlugZap,
    items: ["Schneider Electric", "Siemens", "WAGO", "Phoenix Contact"]
  },
  {
    category: "Plateformes IoT next-gen",
    description: "Plateformes à évaluer selon le besoin réel : edge, cloud, MQTT, Digital Twin, volumes de données et passage à l'échelle.",
    icon: CloudCog,
    items: ["Azure IoT Operations", "AWS IoT SiteWise", "Siemens Insights Hub", "PTC ThingWorx", "HiveMQ", "EMQX"]
  },
  {
    category: "Data & supervision",
    description: "Outils de dashboard, séries temporelles et reporting pour suivre usages, performance et décisions.",
    icon: BarChart3,
    items: ["Grafana", "InfluxDB", "Power BI", "Node-RED"]
  },
  {
    category: "Industrialisation",
    description: "Briques techniques pour livrer des POC documentés, maintenables et extensibles.",
    icon: Boxes,
    items: ["Docker", "Python", "API", "Documentation"]
  }
];

export const methodSteps = [
  "Identifier les cas d'usage à valeur",
  "Cartographier les données utiles",
  "Connecter un premier équipement",
  "Visualiser les indicateurs métier",
  "Mesurer la valeur",
  "Étendre progressivement"
];

export const aboutStrengths = [
  "Cloud & IoT",
  "Digital Twin",
  "Dashboards & data",
  "Architecture technique",
  "Compréhension terrain",
  "Approche pragmatique"
];

export const needTypes = [
  "Diagnostic IoT terrain",
  "POC IoT",
  "Supervision / dashboard",
  "Énergie / photovoltaïque",
  "Maintenance industrielle",
  "Bâtiment technique",
  "Autre"
];

export const seoKeywords =
  "consultant IoT Hauts-de-France, IoT industriel Nord, supervision industrielle, dashboard énergie, performance industrielle, Industrie 4.0 PME, capteurs connectés, monitoring photovoltaïque, cloud IoT, transformation numérique industrielle";
