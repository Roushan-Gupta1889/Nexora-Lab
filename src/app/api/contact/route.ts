import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Rate Limiting (in-memory, per-IP) ───────────────────────────────────────
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count++;
  return false;
}

// ─── Validation ──────────────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  service: string;
  message: string;
}

function validateForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (!data.mobile || data.mobile.trim().length < 10) {
    return "Please enter a valid mobile number.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return "Please enter a valid email address.";
  }
  if (!data.subject || data.subject.trim().length < 2) {
    return "Subject must be at least 2 characters.";
  }
  if (!data.service || data.service.trim() === "") {
    return "Please select a service.";
  }
  if (!data.message || data.message.trim().length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}

// ─── Service Label Mapping ───────────────────────────────────────────────────
const serviceLabels: Record<string, string> = {
  "new-website": "New Website",
  "website-redesign": "Website Redesign",
  "e-commerce": "E-Commerce Development",
  "landing-page": "Landing Page Design",
  seo: "SEO Optimization",
  "web-app": "Web Application",
  "launch-support": "Launch Support",
  other: "Other",
};

// ─── Email Template ──────────────────────────────────────────────────────────
function buildEmailHtml(data: ContactFormData): string {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const serviceLabel = serviceLabels[data.service] || data.service;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#E6A520,#D4941A);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#FFFFFF;font-size:24px;font-weight:700;letter-spacing:-0.5px;">
                Kivox.in
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:0.5px;">
                NEW CONTACT FORM SUBMISSION
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 24px;color:#333;font-size:15px;line-height:1.6;">
                You have received a new inquiry from your website contact form. Here are the details:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #F0EDE8;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;border-bottom:1px solid #F0EDE8;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;width:140px;">Name</td>
                  <td style="padding:14px 20px;background:#FFFFFF;border-bottom:1px solid #F0EDE8;font-size:14px;color:#222;font-weight:500;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;border-bottom:1px solid #F0EDE8;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;">Mobile</td>
                  <td style="padding:14px 20px;background:#FFFFFF;border-bottom:1px solid #F0EDE8;font-size:14px;color:#222;">${escapeHtml(data.mobile)}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;border-bottom:1px solid #F0EDE8;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;">Email</td>
                  <td style="padding:14px 20px;background:#FFFFFF;border-bottom:1px solid #F0EDE8;font-size:14px;color:#222;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color:#E6A520;text-decoration:none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;border-bottom:1px solid #F0EDE8;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;">Subject</td>
                  <td style="padding:14px 20px;background:#FFFFFF;border-bottom:1px solid #F0EDE8;font-size:14px;color:#222;">${escapeHtml(data.subject)}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;border-bottom:1px solid #F0EDE8;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;">Service</td>
                  <td style="padding:14px 20px;background:#FFFFFF;border-bottom:1px solid #F0EDE8;font-size:14px;color:#222;">
                    <span style="display:inline-block;background:#FFF8E7;color:#C78C10;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">${escapeHtml(serviceLabel)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:#FAF8F5;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.8px;vertical-align:top;">Message</td>
                  <td style="padding:14px 20px;background:#FFFFFF;font-size:14px;color:#222;line-height:1.7;">${escapeHtml(data.message).replace(/\n/g, "<br/>")}</td>
                </tr>
              </table>

              <!-- Timestamp -->
              <p style="margin:24px 0 0;color:#999;font-size:12px;text-align:center;">
                Submitted on ${timestamp} (IST)
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#FAF8F5;border-top:1px solid #F0EDE8;text-align:center;">
              <p style="margin:0;color:#AAA;font-size:11px;">
                This email was sent from the contact form on <a href="https://kivox.in" style="color:#E6A520;text-decoration:none;">Kivox.in</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ─── Auto-Reply Email Template ───────────────────────────────────────────────
function buildAutoReplyHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#E6A520,#D4941A);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#FFFFFF;font-size:28px;font-weight:700;letter-spacing:-0.5px;">
                Kivox.in
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.85);font-size:12px;letter-spacing:1px;text-transform:uppercase;">
                Modern Digital Experiences
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <!-- Greeting -->
              <p style="margin:0 0 20px;color:#222;font-size:16px;font-weight:600;">
                Hi ${escapeHtml(name)},
              </p>

              <p style="margin:0 0 16px;color:#444;font-size:14px;line-height:1.8;">
                Thank you for reaching out to <strong style="color:#E6A520;">Kivox.in</strong>.
              </p>

              <p style="margin:0 0 16px;color:#444;font-size:14px;line-height:1.8;">
                We've received your inquiry successfully and our team will review your message shortly.
              </p>

              <p style="margin:0 0 24px;color:#444;font-size:14px;line-height:1.8;">
                At Kivox.in, we help brands build premium digital experiences through modern websites, AI solutions, branding, and automation systems.
              </p>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,#E6A520,transparent);margin:24px 0;"></div>

              <!-- Useful Links -->
              <p style="margin:0 0 16px;color:#222;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;">
                Useful Links
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://kivox.in" style="color:#E6A520;text-decoration:none;font-size:14px;font-weight:500;">
                      🌐 kivox.in
                    </a>
                    <span style="color:#BBB;font-size:13px;margin-left:8px;">— Our Website</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://kivox.in/#services" style="color:#E6A520;text-decoration:none;font-size:14px;font-weight:500;">
                      🛠️ kivox.in/services
                    </a>
                    <span style="color:#BBB;font-size:13px;margin-left:8px;">— Our Services</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <a href="https://kivox.in/#work" style="color:#E6A520;text-decoration:none;font-size:14px;font-weight:500;">
                      📂 kivox.in/work
                    </a>
                    <span style="color:#BBB;font-size:13px;margin-left:8px;">— Our Portfolio</span>
                  </td>
                </tr>
              </table>

              <!-- Response Time -->
              <div style="background:#FFF8E7;border:1px solid #F0E4C4;border-radius:12px;padding:16px 20px;margin:0 0 24px;">
                <p style="margin:0;color:#8B6914;font-size:13px;line-height:1.6;">
                  ⏱️ We typically respond within <strong>24 hours</strong>. If your inquiry is urgent, feel free to reply to this email directly.
                </p>
              </div>

              <!-- Sign-off -->
              <p style="margin:0 0 4px;color:#444;font-size:14px;">
                Looking forward to working with you.
              </p>
              <p style="margin:0 0 0;color:#444;font-size:14px;">
                Best Regards,
              </p>

              <!-- Signature -->
              <div style="margin-top:20px;padding-top:20px;border-top:1px solid #F0EDE8;">
                <p style="margin:0 0 4px;color:#222;font-size:15px;font-weight:700;">
                  Kivox.in
                </p>
                <p style="margin:0;color:#999;font-size:12px;font-style:italic;">
                  Modern Digital Experiences Powered by Creativity & AI
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#FAF8F5;border-top:1px solid #F0EDE8;text-align:center;">
              <p style="margin:0 0 8px;color:#AAA;font-size:11px;">
                This is an automated response from <a href="https://kivox.in" style="color:#E6A520;text-decoration:none;">Kivox.in</a>
              </p>
              <p style="margin:0;color:#CCC;font-size:10px;">
                © ${new Date().getFullYear()} Kivox.in · All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── POST Handler ────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Check API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_YOUR_API_KEY_HERE") {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Parse body
    const body = await request.json();
    const data: ContactFormData = {
      name: body.name?.toString() || "",
      mobile: body.mobile?.toString() || "",
      email: body.email?.toString() || "",
      subject: body.subject?.toString() || "",
      service: body.service?.toString() || "",
      message: body.message?.toString() || "",
    };

    // Validate
    const validationError = validateForm(data);
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

// Send both emails in parallel via Resend
const resend = new Resend(apiKey);

const [adminResult, autoReplyResult] = await Promise.allSettled([
  // 1. Admin notification email
  resend.emails.send({
    from: "Kivox.in <hello@kivox.in>",
    to: ["kivox.contact@gmail.com"],

    subject: `New Inquiry: ${data.subject} — from ${data.name}`,

    html: buildEmailHtml(data),

    // When YOU click reply
    replyTo: data.email,
  }),

  // 2. Auto-reply email to client
  resend.emails.send({
    from: "Kivox.in <hello@kivox.in>",

    // Send to actual client
    to: [data.email],

    subject: `Thank you for contacting Kivox.in, ${data.name}!`,

    html: buildAutoReplyHtml(data.name),

    // When CLIENT clicks reply
    replyTo: "kivox.contact@gmail.com",
  }),
]);

    // Check if admin notification failed (critical)
    if (
      adminResult.status === "rejected" ||
      (adminResult.status === "fulfilled" && adminResult.value.error)
    ) {
      const err =
        adminResult.status === "rejected"
          ? adminResult.reason
          : adminResult.value.error;
      console.error("Admin email error:", JSON.stringify(err, null, 2));
      return NextResponse.json(
        { success: false, error: `Failed to send email: ${err?.message || "Unknown error"}` },
        { status: 500 }
      );
    }

    // Log auto-reply failure but don't block the user
    if (
      autoReplyResult.status === "rejected" ||
      (autoReplyResult.status === "fulfilled" && autoReplyResult.value.error)
    ) {
      console.warn("Auto-reply email failed (non-critical):", 
        autoReplyResult.status === "rejected" 
          ? autoReplyResult.reason 
          : autoReplyResult.value.error
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

