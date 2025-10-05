// lib/brevo.ts
import Brevo from "@getbrevo/brevo";

// Check if API key exists
if (!process.env.BREVO_API_KEY) {
  console.warn("⚠️ BREVO_API_KEY is not set");
} else {
  console.log("✅ BREVO_API_KEY is configured");
}

const brevoClient = new Brevo.TransactionalEmailsApi();

// Set API key
brevoClient.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

// Helper function to verify configuration
export const verifyBrevoConfig = () => {
  return {
    hasApiKey: !!process.env.BREVO_API_KEY,
    apiKeyLength: process.env.BREVO_API_KEY?.length || 0,
    isConfigured: !!process.env.BREVO_API_KEY && process.env.BREVO_API_KEY.length > 0
  };
};

export { brevoClient };