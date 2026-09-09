"use client";

type FeedEvent = {
  label: string;
  text: React.ReactNode;
  color: string;
};

const MANAGED_EVENTS: FeedEvent[] = [
  {
    label: "Infrastructure",
    text: "Compute, storage, network, and OpenShift cluster provisioned and operated.",
    color: "#f87171"
  },
  {
    label: "Patching",
    text: "OS, database, and Maximo Application Suite patches applied on schedule.",
    color: "#e0b43a"
  },
  {
    label: "Backups",
    text: "Automated daily backups with tested recovery procedures.",
    color: "#22d3ee"
  },
  {
    label: "Database",
    text: "DBA coverage, optimization, and administration included.",
    color: "#34d399"
  },
  {
    label: "Monitoring",
    text: "24x7 monitoring with alerting and operational dashboards.",
    color: "#7dd3fc"
  }
];

const PAAS_EVENTS: FeedEvent[] = [
  {
    label: "OpenShift Runtime",
    text: "We operate the Red Hat OpenShift cluster and MAS runtime.",
    color: "#f87171"
  },
  {
    label: "Platform Patches",
    text: "Cluster health, certificates, ingress, and MAS operators managed.",
    color: "#e0b43a"
  },
  {
    label: "Your Control",
    text: "You maintain configuration, customization, and functional ownership.",
    color: "#22d3ee"
  },
  {
    label: "Scaling",
    text: "Dynamic scaling and resource optimization handled.",
    color: "#34d399"
  }
];

const OPERATIONS_EVENTS: FeedEvent[] = [
  {
    label: "Documented Scope",
    text: "Clear definition of ownership, access, and responsibilities.",
    color: "#f87171"
  },
  {
    label: "Monitoring",
    text: "Proactive monitoring, alerting, and operational dashboards.",
    color: "#e0b43a"
  },
  {
    label: "Disaster Recovery",
    text: "Backup and recovery procedures tested and documented.",
    color: "#22d3ee"
  },
  {
    label: "Support Paths",
    text: "Clear escalation paths and support expectations defined.",
    color: "#34d399"
  },
  {
    label: "Day-2 Operations",
    text: "Clean handoff and ongoing operational support.",
    color: "#7dd3fc"
  }
];

type HostingFeedProps = {
  type: "managed" | "paas" | "operations";
  active?: boolean;
};

export function HostingFeed({ type, active }: HostingFeedProps) {
  const events = type === "managed" ? MANAGED_EVENTS : type === "paas" ? PAAS_EVENTS : OPERATIONS_EVENTS;
  const title =
    type === "managed"
      ? "Grable Hosting — Managed Maximo"
      : type === "paas"
        ? "Grable Hosting — Platform as a Service"
        : "Grable Hosting — Operating Model";

  return (
    <div className="mj-mock hosting-feed" data-active={active || undefined}>
      <div className="mj-mock__bar">
        <span className="mj-mock__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
      </div>
      <div className="hosting-feed__body">
        {events.map((e, i) => (
          <div key={e.label} className="hosting-feed__item" style={{ "--mj-i": i } as React.CSSProperties}>
            <span className="hosting-feed__dot" style={{ background: e.color }} aria-hidden="true" />
            <div className="hosting-feed__content">
              <strong>{e.label}</strong>
              <span>{e.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
