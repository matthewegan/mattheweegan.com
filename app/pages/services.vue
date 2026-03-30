<script setup lang="ts">
const { data: services } = await useAsyncData("services", () =>
  queryCollection("content").path("/services").first(),
);

if (!services.value) {
  throw createError({
    statusCode: 404,
    message: "Services page not found",
  });
}

useSeoMeta({
  title: services.value.title,
  description: services.value.description,
  ogTitle: services.value.title,
  ogDescription: services.value.description,
  ogType: "website",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: services.value.title,
  twitterDescription: services.value.description,
  twitterImage: "/og-image.png",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Matthew Egan — Freelance Web Development",
        url: "https://mattheweegan.com/services",
        description: services.value.description,
        email: "matt@mattheweegan.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Washington",
          addressRegion: "DC",
          addressCountry: "US",
        },
        sameAs: [
          "https://linkedin.com/in/matthew-egan-2a1b369",
          "https://github.com/matthewegan",
        ],
        founder: {
          "@type": "Person",
          name: "Matthew Egan",
          jobTitle: "Senior Software Architect",
          url: "https://mattheweegan.com",
          knowsAbout: [
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "Nuxt",
            "React",
            "Next.js",
            "HubSpot CMS",
            "HubL",
            "Tailwind CSS",
            "API Integration",
            "AWS",
            "Cloudflare Workers",
          ],
        },
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "Vue.js",
          "Nuxt",
          "React",
          "Next.js",
          "HubSpot CMS",
          "HubL",
          "Tailwind CSS",
          "API Integration",
          "AWS",
          "Cloudflare Workers",
        ],
        areaServed: {
          "@type": "Country",
          name: "US",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Web Development",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Landing Page Development",
                    description:
                      "Responsive landing page from Figma or design specs using Vue/Nuxt, React/Next.js, or Astro with Tailwind CSS",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: 500,
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Multi-Page Website Build",
                    description:
                      "Full website build from design specs with component architecture, SEO, and performance optimization",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: 1500,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "API Integration & Automation",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "API Integration",
                    description:
                      "REST API integrations, data syncing, webhook pipelines, CMS migrations, serverless functions, and search implementation",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: 500,
                    maxPrice: 2000,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "HubSpot CMS Development",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom HubSpot Module",
                    description:
                      "Hand-coded HubSpot CMS modules with HubL, configurable fields, and scoped CSS",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: 500,
                    maxPrice: 1500,
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Full HubSpot Site Build",
                    description:
                      "Custom HubSpot website from Figma designs with DND areas, multi-site architecture, and A/B testing support",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    minPrice: 3000,
                  },
                },
              ],
            },
          ],
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <PageMain>
      <article class="terminal-window p-6 sm:p-8">
        <ContentRenderer
          v-if="services"
          :value="services"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </PageMain>
  </div>
</template>
