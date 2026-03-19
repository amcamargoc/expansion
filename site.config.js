module.exports = {
  // General details
  projectName: "AI Agentic Landing Page",
  domain: "https://example.com", // Replace with actual domain later

  // SEO Configuration
  seo: {
    title: "AI Agentic Landing Pages | Automate your discoverability",
    description: "Build fast, SEO-optimized landing pages powered by dynamic multi-agent workflows.",
    keywords: ["AI", "landing page", "automation", "SEO", "nextjs", "react", "agents"],

    // Open Graph / Social Media
    openGraph: {
      type: "website",
      locale: "en_US",
      site_name: "AI Agentic Landing Page",
      images: [
        {
          url: "https://example.com/og-image.jpg", // Replace
          width: 1200,
          height: 630,
          alt: "AI Agentic Landing Page Banner",
        },
      ],
    },

    twitter: {
      handle: "@yourhandle",
      site: "@yoursite",
      cardType: "summary_large_image",
    },
  },

  // Social/Bot Automation Config (Phase 2 feature flags)
  automation: {
    publishComments: false,
    autoPostInstagram: false,
  }
};
