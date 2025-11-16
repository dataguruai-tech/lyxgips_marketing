import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn("SUPABASE_URL or SUPABASE_SERVICE_KEY is not set. Supabase logging will be disabled.");
}

const supabase = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/send-comment", async (req, res) => {
  try {
    const { comments } = req.body;

    if (!comments || typeof comments !== "string") {
      return res.status(400).json({ error: "comments is required" });
    }

    // 1) Save to Supabase if configured
    if (supabase) {
      const { error: insertError } = await supabase
        .from("comments")
        .insert({ comment: comments });

      if (insertError) {
        console.error("Supabase insert error:", insertError);
      }
    }

    // 2) Prepare Markdown body
    const markdownBody = `# Новый комментарий клиента по LuxGyps Miami

**Комментарий:**

> ${comments.replace(/\n/g, "\n> ")}

---

Отправлено из формы LuxGyps Miami Strategic Marketing Analysis.
`;

    // 3) Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Комментарии и согласование Фазы II - LuxGyps Miami",
      text: markdownBody,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-comment error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
