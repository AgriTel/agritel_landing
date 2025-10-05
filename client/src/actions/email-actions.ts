// actions/email-actions.ts
"use server";

import { supabase } from "@/lib/supabase";
import { brevoClient } from "@/lib/brevo";
import { emailSchema } from "@/schema/email-schema";

export async function waitListServer(formData: FormData) {
  const email = formData.get("email");
  console.log("🔍 Server action called with email:", email);

  const validate = emailSchema.safeParse({ email });

  if (!validate.success) {
    return { 
      success: false, 
      error: { email: validate.error.issues[0]?.message || "Invalid email" } 
    };
  }

  try {
    const validEmail = validate.data.email;

    // ✅ Only insert email - let Supabase generate the ID automatically
    console.log("📊 Saving to Supabase...");
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ 
        email: validEmail
        // Don't include id - let the database generate it
        // Don't include created_at - let the database set the default
      }])
      .select();

    if (error) {
      console.error("❌ Supabase error details:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });
      
      if (error.code === '23505') {
        return { success: false, error: { email: "Email already registered" } };
      }
      
      if (error.code === '23502') {
        return { success: false, error: { email: "Database error: Missing required field" } };
      }
      
      return { 
        success: false, 
        error: { email: `Database error: ${error.message}` } 
      };
    }

    console.log("✅ Saved to Supabase:", data);

    // ✅ Send Welcome Email via Brevo
    console.log("📧 Sending email via Brevo...");
    try {
      await brevoClient.sendTransacEmail({
        sender: { email: "aaronnartey001@gmail.com", name: "AgriTel" },
        to: [{ email: validEmail }],
        subject: "Welcome to AgriTel 🌱",
        htmlContent: `
          <div style="font-family: sans-serif; color: #222;">
            <h2>Welcome to AgriTel 🚜</h2>
            <p>We're thrilled to have you join our mission to transform agriculture with smart technology.</p>
            <p>Stay tuned — we'll keep you updated with our latest progress.</p>
            <p>— The AgriTel Team 🌿</p>
          </div>
        `,
      });
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);
      // Continue even if email fails
    }

    return { 
      success: true, 
      message: "You're on the waitlist! Check your email for confirmation." 
    };
    
  } catch (err: any) {
    console.error("💥 Unexpected error:", err);
    return { 
      success: false, 
      error: { email: "Something went wrong. Please try again." } 
    };
  }
}