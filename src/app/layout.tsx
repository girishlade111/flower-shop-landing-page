import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const SITE_URL = "https://flowershop.ladestack.in";
const SITE_NAME = "Flower Shop";
const SITE_TITLE = "Flower Shop - Fresh Blooms Delivered Daily | Premium Floral Arrangements";
const SITE_DESCRIPTION =
  "Discover beautiful, handpicked flowers for every occasion. From romantic roses to cheerful sunflowers, we bring nature's beauty to your doorstep. Same-day delivery, custom arrangements, and 100+ fresh flower varieties available 24/7.";

export const metadata: Metadata = {
  // ── Primary Meta Tags (Long Form) ──
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "flower shop",
    "fresh flowers",
    "flower delivery",
    "bouquet",
    "roses",
    "sunflowers",
    "tulips",
    "orchids",
    "lavender",
    "lily",
    "wedding flowers",
    "birthday flowers",
    "anniversary flowers",
    "same day flower delivery",
    "custom floral arrangements",
    "online flower shop",
    "premium flowers",
    "flower bouquet delivery",
    "floral design",
    "plants and flowers",
    "sympathy flowers",
    "get well flowers",
    "congratulations flowers",
    "Valentine's Day flowers",
    "Mother's Day flowers",
    "flower subscription",
    "LadeStack",
    "Girish Lade",
  ],
  authors: [
    { name: "Girish Lade", url: "https://ladestack.in" },
    { name: "LadeStack", url: "https://ladestack.in" },
  ],
  creator: "Girish Lade",
  publisher: "LadeStack",
  applicationName: SITE_NAME,
  generator: "Next.js 15",
  referrer: "origin-when-cross-origin",
  category: "Shopping",
  classification: "Flower Shop, E-commerce, Retail",

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Long Form) ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    countryName: "India",
    emails: ["girish@ladestack.in"],
    phoneNumbers: [],
    faxNumbers: [],
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Flower Shop - Fresh Blooms Delivered Daily",
        type: "image/png",
      },
      {
        url: `${SITE_URL}/og-image-square.png`,
        width: 1080,
        height: 1080,
        alt: "Flower Shop Logo",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card (Short Form) ──
  twitter: {
    card: "summary_large_image",
    site: "@girish_lade_",
    creator: "@girish_lade_",
    title: "Flower Shop - Fresh Blooms Delivered Daily",
    description:
      "Beautiful, handpicked flowers for every occasion. Same-day delivery, 100+ varieties, custom arrangements. Order now!",
    images: [`${SITE_URL}/og-image.png`],
  },

  // ── Verification (add tokens when available) ──
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    other: {},
  },

  // ── Alternate Languages ──
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  // ── Icons ──
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Flower Shop",
  description:
    "Premium flower shop offering fresh blooms, custom arrangements, and same-day delivery for every occasion.",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  email: "girish@ladestack.in",
  sameAs: [
    "https://instagram.com/girish_lade_",
    "https://github.com/girishlade111",
    "https://ladestack.in",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flower Collection",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Rose Elegance",
          description: "Classic red roses arranged with baby's breath and greenery",
          image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600",
          offers: {
            "@type": "Offer",
            price: "45.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Sunflower Delight",
          description: "Bright and cheerful sunflower bouquet",
          image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=600",
          offers: {
            "@type": "Offer",
            price: "38.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Tulip Paradise",
          description: "Colorful tulip arrangement for spring celebrations",
          image: "https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=600",
          offers: {
            "@type": "Offer",
            price: "42.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Orchid Luxe",
          description: "Exotic orchid arrangement for elegant occasions",
          image: "https://images.unsplash.com/photo-1566907225470-af29ce3074f5?w=600",
          offers: {
            "@type": "Offer",
            price: "55.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Lavender Dreams",
          description: "Fragrant lavender bouquet for relaxation and romance",
          image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600",
          offers: {
            "@type": "Offer",
            price: "35.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Lily Bouquet",
          description: "Stunning lily arrangement for special occasions",
          image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600",
          offers: {
            "@type": "Offer",
            price: "48.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#ec4899" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}