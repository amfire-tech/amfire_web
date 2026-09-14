import { authFetch } from "@/stores/auth-store";

/**
 * Open the printable invoice in a new tab. The tab is opened synchronously so
 * the click gesture isn't lost across the fetch (popup blockers).
 * The document carries its own "Download PDF" button → browser print-to-PDF.
 */
export async function openInvoice(paymentId: string): Promise<boolean> {
  const tab = window.open("", "_blank");
  const res = await authFetch(`/api/invoices/${paymentId}`);
  if (!res.ok) {
    tab?.close();
    return false;
  }
  const html = await res.text();
  if (!tab) return false;
  tab.document.write(html);
  tab.document.close();
  return true;
}
