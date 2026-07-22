import newsroomImage from "../assets/Newsroom/featured-building.png";
import ecosystemImage from "../assets/Newsroom/webinar-digital.png";
import type {
  Activity,
  CompletionItem,
  DashboardMetric,
  NewsItem,
  Project,
  ScheduleEntry,
} from "../pages/DashboardClient/types";

export const completionItems: CompletionItem[] = [
  { label: "Email, HP, Password", complete: true },
  { label: "Photo & DOB", complete: true },
  { label: "Official Address", complete: true },
  { label: "Company Profile", complete: false, pending: true },
  { label: "LinkedIn Integration", complete: false, pending: true },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "Active Projects",
    value: "3",
    note: "+1 this month",
    icon: "projects",
  },
  {
    label: "Total Orders",
    value: "12",
    note: "Studio Premium",
    icon: "orders",
  },
  {
    label: "Impact Donations",
    value: "Rp\n15.4M",
    note: "Tier 2\nImpact",
    icon: "donations",
    compact: true,
  },
  {
    label: "Certificates",
    value: "8",
    note: "Verified Assets",
    icon: "certificates",
  },
];

export const projects: Project[] = [
  {
    title: "Ecosystem Redesign",
    description: "Scalable design system architecture for enterprise-level",
    progress: 85,
    status: "In Progress",
    extraMembers: 4,
  },
  {
    title: "FinTech Dashboard",
    description: "Premium asset trading interface with focus on luxury visualization",
    progress: 40,
    status: "Review",
    extraMembers: 2,
  },
];

export const activities: Activity[] = [
  {
    title: "Sertifikat Diterbitkan",
    description: "Ecosystem Design Foundation Course completed.",
    time: "2 hours ago",
    icon: "certificate",
  },
  {
    title: "Pembayaran Berhasil",
    description: "Invoice #INV-2024-092 for Studio Credits.",
    time: "Yesterday",
    icon: "payment",
  },
  {
    title: "Project Milestone Selesai",
    description: "Architecture Review for Ecosystem Redesign.",
    time: "3 days ago",
    icon: "milestone",
  },
];

export const newsroomItems: NewsItem[] = [
  {
    category: "Insights",
    title: "Future of Digital Asset Sovereignty",
    excerpt: "Exploring the integration of Mahreen Ecosystem with...",
    image: newsroomImage,
    imageAlt: "Visual berita Mahreen Indonesia",
    href: "#/newsroom/berita",
  },
  {
    category: "Ecosystem",
    title: "Expanding the Creative Network",
    excerpt: "How our latest Studio update empowers thousands of...",
    image: ecosystemImage,
    imageAlt: "Visual pembaruan ekosistem Mahreen",
    href: "#/newsroom",
  },
];

export const scheduleEntries: ScheduleEntry[] = [
  {
    month: "Oct",
    day: "12",
    title: "Meeting with Creative\nDirector",
    description: "Project: Ecosystem Redesign\nWeekly Sync",
    time: "10:00 - 11:30",
    label: "Virtual",
    showAvatars: true,
  },
  {
    month: "Oct",
    day: "15",
    title: "Webinar: UI Motion\nMasterclass",
    description: "Learning Session: Advanced\nAnimation Principles",
    time: "14:00 - 16:00",
    label: "Mandatory",
    mandatory: true,
    attendees: "256 Attending",
  },
];
