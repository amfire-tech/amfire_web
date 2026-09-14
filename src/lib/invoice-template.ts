/**
 * Invoice document — self-contained printable HTML styled with the AMFIRE
 * Design System tokens. Rendered server-side, printed to PDF by the browser.
 */

export interface InvoiceData {
  id: string;
  label: string;
  amount: string;
  percent: number;
  status: string;
  dueDate: Date | null;
  paidDate: Date | null;
  createdAt: Date;
  project: { name: string; totalValue: string | null };
  client: { name: string; email: string; company: string | null; phone: string | null };
}

const ISSUER = {
  name: "AMFIRE",
  tagline: "Design & engineering studio",
  email: "contact@amfire.in",
  site: "amfire.in",
};

const money = (v: string | number | null) =>
  "₹" + Number(v ?? 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const day = (d: Date | null) =>
  d ? d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—";

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

/**
 * Invoice number derived from the payment row — there is no dedicated column,
 * and the cuid suffix is already unique and stable. Swap in a real invoice_no
 * sequence if accounting ever needs consecutive numbering.
 */
export const invoiceNo = (p: { id: string; createdAt: Date }) =>
  `AMF-${p.createdAt.getFullYear()}-${p.id.slice(-6).toUpperCase()}`;

export function invoiceHtml(p: InvoiceData): string {
  const no = invoiceNo(p);
  const paid = p.status === "PAID";
  const overdue = p.status === "OVERDUE";
  const stamp = paid ? "PAID" : overdue ? "OVERDUE" : "DUE";
  const stampColor = paid ? "#047857" : overdue ? "#B91C1C" : "#B45309";
  const stampBg = paid ? "#ECFDF5" : overdue ? "#FEF2F2" : "#FFFBEB";

  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<title>${esc(`${ISSUER.name} Invoice ${no}`)}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  @page { size: A4; margin: 14mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #14110F; background: #FFFFFF;
    font-size: 12.5px; line-height: 1.5;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .sheet { max-width: 186mm; margin: 0 auto; padding: 10mm 0 0; }

  /* Header */
  .top { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; }
  .mark {
    font-size: 30px; font-weight: 800; letter-spacing: -0.04em; line-height: 1;
    background: linear-gradient(92deg, #E23A2E 0%, #F97316 55%, #FB923C 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .tagline { margin-top: 6px; font-size: 11px; color: #78716C; letter-spacing: 0.05em; text-transform: uppercase; }
  .doc { text-align: right; }
  .doc h1 { font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #78716C; font-weight: 600; }
  .doc .no { font-size: 20px; font-weight: 700; letter-spacing: -0.012em; margin-top: 2px; }
  .stamp {
    display: inline-block; margin-top: 8px; padding: 4px 12px; border-radius: 999px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
    color: ${stampColor}; background: ${stampBg}; border: 1px solid ${stampColor}33;
  }
  .rule { height: 3px; margin: 18px 0 22px; border-radius: 2px;
    background: linear-gradient(92deg, #E23A2E 0%, #F97316 55%, #FB923C 100%); }

  /* Parties + meta */
  .cols { display: flex; gap: 20px; }
  .cols > * { flex: 1; }
  .block { border: 1px solid #ECE7DF; border-radius: 12px; padding: 14px 16px; background: #FDFBF9; }
  .lbl { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #78716C; font-weight: 600; }
  .name { margin-top: 6px; font-size: 14px; font-weight: 700; letter-spacing: -0.012em; }
  .line { font-size: 12px; color: #57534E; }
  .meta { display: grid; grid-template-columns: auto auto; gap: 6px 16px; }
  .meta dt { font-size: 11.5px; color: #78716C; }
  .meta dd { font-size: 11.5px; font-weight: 600; text-align: right; }

  /* Items */
  table { width: 100%; border-collapse: collapse; margin-top: 22px; }
  thead th {
    font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #78716C;
    font-weight: 600; text-align: left; padding: 0 0 8px; border-bottom: 1px solid #ECE7DF;
  }
  thead th.r, tbody td.r { text-align: right; }
  tbody td { padding: 14px 0; border-bottom: 1px solid #F2EEE8; vertical-align: top; }
  .item { font-size: 13.5px; font-weight: 700; letter-spacing: -0.012em; }
  .sub { font-size: 11.5px; color: #78716C; margin-top: 3px; }
  .amt { font-size: 13.5px; font-weight: 600; white-space: nowrap; }

  /* Totals */
  .totals { display: flex; justify-content: flex-end; margin-top: 18px; }
  .totals .box { width: 260px; }
  .trow { display: flex; justify-content: space-between; padding: 7px 0; font-size: 12.5px; color: #57534E; }
  .grand {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-top: 8px; padding: 12px 16px; border-radius: 12px;
    background: linear-gradient(135deg, #FFF1E9, #FFE7DA); border: 1px solid #FBD9C4;
  }
  .grand .k { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; color: #57534E; }
  .grand .v { font-size: 20px; font-weight: 800; letter-spacing: -0.03em; }

  /* Footer */
  .notes { margin-top: 28px; padding-top: 16px; border-top: 1px solid #ECE7DF; }
  .notes p { font-size: 11.5px; color: #57534E; max-width: 66ch; margin-top: 6px; }
  .foot { margin-top: 20px; display: flex; justify-content: space-between; font-size: 11px; color: #78716C; }

  .noprint { position: fixed; top: 14px; right: 14px; }
  .noprint button {
    font: inherit; font-weight: 600; font-size: 13px; color: #fff; cursor: pointer;
    padding: 10px 18px; border: none; border-radius: 10px;
    background: linear-gradient(92deg, #E23A2E 0%, #F97316 55%, #FB923C 100%);
  }
  @media print { .noprint { display: none; } }
</style></head>
<body>
<div class="noprint"><button onclick="window.print()">Download PDF</button></div>
<div class="sheet">

  <div class="top">
    <div>
      <div class="mark">${ISSUER.name.toLowerCase()}</div>
      <div class="tagline">${esc(ISSUER.tagline)}</div>
    </div>
    <div class="doc">
      <h1>Invoice</h1>
      <div class="no">${no}</div>
      <div class="stamp">${stamp}</div>
    </div>
  </div>

  <div class="rule"></div>

  <div class="cols">
    <div class="block">
      <div class="lbl">Billed to</div>
      <div class="name">${esc(p.client.company || p.client.name)}</div>
      ${p.client.company ? `<div class="line">${esc(p.client.name)}</div>` : ""}
      <div class="line">${esc(p.client.email)}</div>
      ${p.client.phone ? `<div class="line">${esc(p.client.phone)}</div>` : ""}
    </div>
    <div class="block">
      <div class="lbl">Invoice details</div>
      <dl class="meta" style="margin-top:8px">
        <dt>Issued</dt><dd>${day(p.createdAt)}</dd>
        <dt>Due</dt><dd>${day(p.dueDate)}</dd>
        ${p.paidDate ? `<dt>Paid</dt><dd>${day(p.paidDate)}</dd>` : ""}
        <dt>Project</dt><dd>${esc(p.project.name)}</dd>
      </dl>
    </div>
  </div>

  <table>
    <thead><tr><th>Description</th><th class="r">Share</th><th class="r">Amount</th></tr></thead>
    <tbody>
      <tr>
        <td>
          <div class="item">${esc(p.label)}</div>
          <div class="sub">${esc(p.project.name)}${p.project.totalValue ? ` · project value ${money(p.project.totalValue)}` : ""}</div>
        </td>
        <td class="r">${p.percent}%</td>
        <td class="r amt">${money(p.amount)}</td>
      </tr>
    </tbody>
  </table>

  <div class="totals"><div class="box">
    <div class="trow"><span>Subtotal</span><span>${money(p.amount)}</span></div>
    <div class="trow"><span>Tax</span><span>—</span></div>
    <div class="grand"><span class="k">${paid ? "Amount paid" : "Amount due"}</span><span class="v">${money(p.amount)}</span></div>
  </div></div>

  <div class="notes">
    <div class="lbl">Payment terms</div>
    <p>${
      paid
        ? `Settled on ${day(p.paidDate)}. Thank you — no further action is needed.`
        : `Milestone-based invoicing: this stage is billed after sign-off. Payable by ${day(p.dueDate)}. For bank details or any query, write to ${ISSUER.email}.`
    }</p>
  </div>

  <div class="foot">
    <span>${esc(ISSUER.email)} · ${esc(ISSUER.site)}</span>
    <span>${no}</span>
  </div>

</div>
</body></html>`;
}
