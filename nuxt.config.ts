// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hub: { database: true },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxthub/core"],
  runtimeConfig: {
    stripeSecretKey: import.meta.env.STRIPE_SECRET_KEY,
    stripeWebhookSecret: import.meta.env.STRIPE_WEBHOOK_SECRET,
  },
});
