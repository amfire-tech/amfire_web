import type { Metadata } from "next";
import { Mail, Clock, Tag, User } from "lucide-react";

export const metadata: Metadata = { title: "Leads | amfire Admin" };

// Placeholder data — replace with DB fetch when Supabase is wired
const leads = [
  { id: 1, name: "Rahul Sharma", email: "rahul@techstartup.in", buildType: "Web App", budget: "₹3L–10L", timeline: "ASAP", message: "Need a SaaS platform for HR management with AI features.", submittedAt: "2025-03-28", status: "New" },
  { id: 2, name: "Priya Nair", email: "priya@edventures.in", buildType: "AI Agent", budget: "₹1L–3L", timeline: "1 Month", message: "Looking to build an AI tutor for our EdTech platform.", submittedAt: "2025-03-27", status: "In Review" },
  { id: 3, name: "Arjun Mehta", email: "arjun@clearpath.in", buildType: "Full Product", budget: "₹10L+", timeline: "3 Months", message: "Multi-tenant construction SaaS with AI document processing.", submittedAt: "2025-03-25", status: "Proposal Sent" },
];

const statusColors: Record<string, string> = {
  New: "bg-primary/10 text-primary border-primary/20",
  "In Review": "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  "Proposal Sent": "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  Won: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  Lost: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function AdminLeadsPage() {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leads</h1>
            <p className="text-sm text-muted-foreground mt-1">{leads.length} submissions</p>
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-foreground">am</span>
            <span className="gradient-text">fire</span>
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: leads.length },
            { label: "New", value: leads.filter((l) => l.status === "New").length },
            { label: "In Review", value: leads.filter((l) => l.status === "In Review").length },
            { label: "Proposals Sent", value: leads.filter((l) => l.status === "Proposal Sent").length },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl border border-border bg-card">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Leads table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Project</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Budget</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Date</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={lead.id} className={`border-b border-border last:border-0 hover:bg-secondary/20 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/5"}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                          <User size={14} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Mail size={10} />{lead.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary border border-border text-foreground">
                        <Tag size={10} />{lead.buildType}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1.5 max-w-[200px] truncate">{lead.message}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className="text-foreground font-medium">{lead.budget}</span>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock size={10} />{lead.timeline}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground">{lead.submittedAt}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[lead.status] ?? "bg-secondary text-foreground border-border"}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Connect Supabase to load live submissions from the database.
        </p>
      </div>
    </div>
  );
}
