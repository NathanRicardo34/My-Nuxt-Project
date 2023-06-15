// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
    ],
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: ['~/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    // routeRules: {
    //     // Homepage pre-rendered at build time
    //     // '/': { prerender: true },
    //     // Product page generated on-demand, revalidates in background
    //     // '/products/**': { swr: true },
    //     // Blog post generated on-demand once until next deploy
    //     // '/blog/**': { isr: true },
    //     // Admin dashboard renders only on client-side
    //     // '/admin/**': { ssr: false },
    //     // Add cors headers on API routes
    //     // '/api/**': { cors: true },
    //     // Redirects legacy urls
    //     // '/old-page': { redirect: '/new-page' }
    // }
})
