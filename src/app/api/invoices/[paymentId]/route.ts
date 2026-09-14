import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/services/auth/api-auth";
import { prisma } from "@/db/client";
import { invoiceHtml } from "@/lib/invoice-template";

/** GET — printable invoice document. Admins see any; a client sees only their own. */
export async function GET(req: NextRequest, { params }: { params: Promise<{ paymentId: string }> }) {
  const auth = await requireAuth(req);
  if ("error" in auth) return auth.error;

  const { paymentId } = await params;

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: {
      project: {
        select: {
          name: true,
          totalValue: true,
          clientId: true,
          client: { select: { name: true, email: true, company: true, phone: true } },
        },
      },
    },
  });

  if (!payment) return NextResponse.json({ error: "Invoice not found" }, { status: 404 });

  if (payment.project.clientId !== auth.payload.sub && !["SUPER_ADMIN", "ADMIN"].includes(auth.payload.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const html = invoiceHtml({
    id: payment.id,
    label: payment.label,
    amount: payment.amount?.toString() ?? "0",
    percent: payment.percent,
    status: payment.status,
    dueDate: payment.dueDate,
    paidDate: payment.paidDate,
    createdAt: payment.createdAt,
    project: { name: payment.project.name, totalValue: payment.project.totalValue?.toString() ?? null },
    client: payment.project.client,
  });

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}
