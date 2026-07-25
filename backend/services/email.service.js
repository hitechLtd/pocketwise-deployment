const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendResetPasswordEmail(email, resetLink) {
  const mailOptions = {
    from: `PocketWise AI <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset Your PocketWise AI Password",

    // Fallback for email clients that do not support HTML
    text: `
PocketWise AI Password Reset

Hello,

We received a request to reset the password for your PocketWise AI account.

Use the link below to create a new password:

${resetLink}

This password reset link will expire in 10 minutes.

If you did not request this password reset, you can safely ignore this email.
Your password will remain unchanged.

PocketWise AI
Your AI Financial Coach
`,

    html: `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>Reset Your Password</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: #f3f7f5;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <!-- Preview text shown beside the subject in some inboxes -->
    <div
      style="
        display: none;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        color: transparent;
      "
    >
      Reset your PocketWise AI password. This link expires in 10 minutes.
    </div>

    <!-- Main background table -->
    <table
      role="presentation"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: #f3f7f5;
        border-collapse: collapse;
      "
    >
      <tr>
        <td
          align="center"
          style="
            padding: 40px 16px;
          "
        >
          <!-- Email container -->
          <table
            role="presentation"
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              width: 100%;
              max-width: 600px;
              background-color: #ffffff;
              border-collapse: separate;
              border-spacing: 0;
              border-radius: 18px;
              overflow: hidden;
              box-shadow: 0 12px 35px rgba(15, 76, 58, 0.12);
            "
          >
            <!-- Header -->
            <tr>
              <td
                align="center"
                bgcolor="#0f4c3a"
                style="
                  padding: 44px 32px 40px;
                  background-color: #0f4c3a;
                "
              >
                <!-- Centered lock icon -->
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  align="center"
                  style="
                    margin: 0 auto;
                    border-collapse: collapse;
                  "
                >
                  <tr>
                    <td
                      width="72"
                      height="72"
                      align="center"
                      valign="middle"
                      bgcolor="#22c55e"
                      style="
                        width: 72px;
                        height: 72px;
                        background-color: #22c55e;
                        border-radius: 18px;
                        font-size: 34px;
                        line-height: 72px;
                        text-align: center;
                        vertical-align: middle;
                      "
                    >
                      🔒
                    </td>
                  </tr>
                </table>

                <h1
                  style="
                    margin: 24px 0 10px;
                    color: #ffffff;
                    font-size: 32px;
                    line-height: 40px;
                    font-weight: 700;
                  "
                >
                  Reset Your Password
                </h1>

                <p
                  style="
                    margin: 0;
                    max-width: 460px;
                    color: #d1fae5;
                    font-size: 16px;
                    line-height: 26px;
                  "
                >
                  Create a new password and continue managing your finances
                  securely.
                </p>
              </td>
            </tr>

            <!-- Email body -->
            <tr>
              <td
                style="
                  padding: 40px 40px 20px;
                "
              >
                <p
                  style="
                    margin: 0 0 18px;
                    color: #1f2937;
                    font-size: 16px;
                    line-height: 27px;
                  "
                >
                  Hello,
                </p>

                <p
                  style="
                    margin: 0 0 18px;
                    color: #374151;
                    font-size: 16px;
                    line-height: 27px;
                  "
                >
                  We received a request to reset the password for your
                  <strong>PocketWise AI</strong> account.
                </p>

                <p
                  style="
                    margin: 0 0 26px;
                    color: #374151;
                    font-size: 16px;
                    line-height: 27px;
                  "
                >
                  Click the button below to create a new password. For your
                  security, this reset link will expire in
                  <strong>10 minutes</strong>.
                </p>

                <!-- Reset button -->
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  align="center"
                  style="
                    margin: 0 auto 30px;
                    border-collapse: separate;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#22c55e"
                      style="
                        background-color: #22c55e;
                        border-radius: 12px;
                      "
                    >
                      <a
                        href="${resetLink}"
                        target="_blank"
                        style="
                          display: inline-block;
                          padding: 15px 34px;
                          color: #ffffff;
                          font-size: 16px;
                          line-height: 20px;
                          font-weight: 700;
                          text-decoration: none;
                          border-radius: 12px;
                        "
                      >
                        Reset Password
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Expiry notice -->
                <table
                  role="presentation"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    width: 100%;
                    margin: 0 0 28px;
                    background-color: #f0fdf4;
                    border-collapse: separate;
                    border-left: 4px solid #22c55e;
                    border-radius: 8px;
                  "
                >
                  <tr>
                    <td
                      style="
                        padding: 16px 18px;
                      "
                    >
                      <p
                        style="
                          margin: 0;
                          color: #166534;
                          font-size: 14px;
                          line-height: 23px;
                        "
                      >
                        This link can only be used within the next 10 minutes.
                        After that, you will need to request another password
                        reset link.
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Fallback URL -->
                <p
                  style="
                    margin: 0 0 10px;
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 23px;
                  "
                >
                  If the button does not work, copy and paste this link into
                  your browser:
                </p>

                <table
                  role="presentation"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    width: 100%;
                    margin: 0 0 28px;
                    background-color: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-collapse: separate;
                    border-radius: 8px;
                  "
                >
                  <tr>
                    <td
                      style="
                        padding: 14px 16px;
                        word-break: break-all;
                        overflow-wrap: anywhere;
                      "
                    >
                      <a
                        href="${resetLink}"
                        target="_blank"
                        style="
                          color: #16a34a;
                          font-size: 13px;
                          line-height: 21px;
                          text-decoration: none;
                          word-break: break-all;
                          overflow-wrap: anywhere;
                        "
                      >
                        ${resetLink}
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Security notice -->
                <p
                  style="
                    margin: 0 0 8px;
                    color: #374151;
                    font-size: 15px;
                    line-height: 25px;
                  "
                >
                  Did not request this password reset?
                </p>

                <p
                  style="
                    margin: 0;
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 24px;
                  "
                >
                  You can safely ignore this email. Your password will remain
                  unchanged.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  padding: 26px 32px 30px;
                  border-top: 1px solid #e5e7eb;
                  background-color: #f9fafb;
                "
              >
                <p
                  style="
                    margin: 0 0 6px;
                    color: #0f4c3a;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 24px;
                  "
                >
                  PocketWise AI
                </p>

                <p
                  style="
                    margin: 0;
                    color: #9ca3af;
                    font-size: 13px;
                    line-height: 20px;
                  "
                >
                  Your AI Financial Coach
                </p>
              </td>
            </tr>
          </table>

          <!-- Outside footer -->
          <table
            role="presentation"
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              width: 100%;
              max-width: 600px;
              border-collapse: collapse;
            "
          >
            <tr>
              <td
                align="center"
                style="
                  padding: 20px 16px 0;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #9ca3af;
                    font-size: 12px;
                    line-height: 20px;
                  "
                >
                  This is an automated security email from PocketWise AI.
                  Please do not reply.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendResetPasswordEmail,
};