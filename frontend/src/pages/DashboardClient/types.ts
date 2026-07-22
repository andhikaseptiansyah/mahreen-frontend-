export type Project = {
  title: string;
  description: string;
  progress: number;
  status: string;
  extraMembers: number;
};

export type ActivityIcon = "certificate" | "payment" | "milestone";

export type Activity = {
  title: string;
  description: string;
  time: string;
  icon: ActivityIcon;
};

export type CompletionItem = {
  label: string;
  complete: boolean;
  pending?: boolean;
};

export type MetricIcon = "projects" | "orders" | "donations" | "certificates";

export type DashboardMetric = {
  label: string;
  value: string;
  note: string;
  icon: MetricIcon;
  compact?: boolean;
};

export type NewsItem = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type ScheduleEntry = {
  month: string;
  day: string;
  title: string;
  description: string;
  time: string;
  label: string;
  mandatory?: boolean;
  attendees?: string;
  showAvatars?: boolean;
};
