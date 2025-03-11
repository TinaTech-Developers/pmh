import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; // Import Head from next/head
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pressletter Media House ",
  description:
    "PMH Pressletter Media House is a signage and media company located in Belvedere, specializing in signage solutions and media services. Visit us at 17 Tredgold Drive, Belvedere.",
  keywords:
    "Pressletter Media House, signage, media company, Belvedere, Tredgold Drive, signage solutions, media services",
  authors: [
    {
      name: "PMH Pressletter Media House",
      url: "https://yourwebsite.com", // Add your business URL here
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title:
      "PMH Pressletter Media House | Signage & Media Solutions in Belvedere",
    description:
      "PMH Pressletter Media House is a signage and media company based in Belvedere. We specialize in high-quality signage and media services. Visit us at 17 Tredgold Drive.",
    url: "https://yourwebsite.com", // Update with the actual URL
    siteName: "PMH Pressletter Media House",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Add an actual image URL for sharing
        width: 1200,
        height: 630,
        alt: "PMH Pressletter Media House Logo or Service",
      },
    ],
    type: "website",
    locale: "en_US", // Added locale for more region-specific optimization
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Add structured data inside <Head> */}
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                name: "PMH Pressletter Media House",
                description:
                  "PMH Pressletter Media House offers signage and media services in Belvedere, specializing in custom signage solutions.",
                url: "https://yourwebsite.com", // Your business URL
                logo: "https://yourwebsite.com/logo.jpg", // Update with your actual logo URL
                image: "https://yourwebsite.com/og-image.jpg", // Add an image URL relevant to your business
                telephone: "+44-1234-567890", // Update with your business phone number
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "17 Tredgold Drive",
                  addressLocality: "Belvedere",
                  addressRegion: "Kent",
                  postalCode: "DA17 5JB", // Replace with the correct postal code
                  addressCountry: "GB",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "51.478", // Replace with actual latitude
                  longitude: "0.149", // Replace with actual longitude
                },
                sameAs: [
                  "https://www.facebook.com/yourbusiness", // Your Facebook URL
                  "https://www.instagram.com/yourbusiness", // Your Instagram URL
                ],
                openingHours: [
                  "Mo-Sa 09:00-18:00", // Update with your actual business hours
                ],
              }),
            }}
          />
        </Head>

        <Navbar />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
