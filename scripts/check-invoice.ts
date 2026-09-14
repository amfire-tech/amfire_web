/**
 * Self-check for the invoice document. Client-supplied names land in an HTML
 * page, and the amounts are money, so both get asserted. No test runner:
 *
 *   node --experimental-strip-types scripts/check-invoice.ts
 */
import assert from "node:assert/strict";
import { invoiceHtml, invoiceNo, type InvoiceData } from "../src/lib/invoice-template.ts";

const base: InvoiceData = {
  id: "cm1abcd9xyz123",
  label: "Milestone 2 · Design",
  amount: "35000",
  percent: 50,
  status: "PENDING",
  dueDate: new Date("2026-09-10"),
  paidDate: null,
  createdAt: new Date("2026-08-01"),
  project: { name: "Website rebuild", totalValue: "70000" },
  client: { name: "Asha <script>", email: "asha@acme.in", company: "Acme & Co", phone: null },
};

const html = invoiceHtml(base);

// Escaping: no raw client markup reaches the page.
assert.ok(!html.includes("<script>"), "client name must be escaped");
assert.ok(html.includes("Asha &lt;script&gt;"));
assert.ok(html.includes("Acme &amp; Co"));

// Money and share render with the Indian grouping the rest of the app uses.
assert.ok(html.includes("₹35,000.00"), "amount formatting");
assert.ok(html.includes("50%"), "percent share");
assert.ok(html.includes("Amount due"), "unpaid invoices ask for money");

// Invoice number is stable and derived from the row.
assert.equal(invoiceNo(base), "AMF-2026-XYZ123");
assert.equal(invoiceNo(base), invoiceNo({ ...base }));

// Paid invoices flip the stamp, the total label and the terms.
const paid = invoiceHtml({ ...base, status: "PAID", paidDate: new Date("2026-09-14") });
assert.ok(paid.includes(">PAID<"), "paid stamp");
assert.ok(paid.includes("Amount paid"));
assert.ok(paid.includes("14 Sept 2026"), "paid date");

// Optional fields must not print "undefined".
const bare = invoiceHtml({
  ...base,
  dueDate: null,
  project: { name: "Website rebuild", totalValue: null },
  client: { name: "Solo Founder", email: "solo@x.in", company: null, phone: null },
});
assert.ok(!bare.includes("undefined"), "no undefined leaks");
assert.ok(bare.includes("Solo Founder"));

console.log("invoice template OK");
