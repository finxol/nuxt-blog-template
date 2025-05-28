import blogConfig from "./blog.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: { url: blogConfig.site, name: blogConfig.title },

    telemetry: false,
    devtools: { enabled: true },
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@tailwindcss/typography",
        "@nuxt/icon",
        "nuxt-og-image"
    ],

    future: {
        compatibilityVersion: 4
    },

    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            }
        }
    },

    runtimeConfig: {
        public: blogConfig
    },

    ogImage: {
        fonts: [
            {
                name: "Recoleta",
                weight: 700,
                path: "/fonts/recoleta-bold.ttf"
            }
        ]
    },

    icon: {
        clientBundle: {
            icons: [
                "ant-design:github-filled",
                "ri:mastodon-fill",
                "ri:bluesky-fill",
                "ri:sun-fill",
                "ri:moon-fill"
            ],
            scan: true
        }
    },

    typescript: {
        typeCheck: true
    },

    routeRules: {
        "/": { prerender: true },
        "/about": { prerender: true },
        "/posts/**": { prerender: true }
    },

    compatibilityDate: "2025-05-28"
});
