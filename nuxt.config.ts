// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      // all pages that can only be accessed by authenticated users
      include: ["/dashboard(/*)?"],
      exclude: [],
      cookieRedirect: false,
    },
  },
});
