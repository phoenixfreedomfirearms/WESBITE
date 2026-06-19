import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenixfreedomfirearms.com"),
  title: "Phoenix Freedom Firearms | Guns, Ammo, Transfers & Service",
  description:
    "Barnesville's local firearms store for guns, ammo, inventory, $15 transfers, suppressor support, gunsmithing, and training.",
  applicationName: "Phoenix Freedom Firearms",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/assets/img/brand/phoenix-freedom-firearms-logo.png", type: "image/png" },
    ],
    shortcut: ["/assets/img/brand/phoenix-freedom-firearms-logo.png"],
    apple: [
      { url: "/assets/img/brand/phoenix-freedom-firearms-logo.png" },
    ],
  },
  openGraph: {
    title: "Phoenix Freedom Firearms | Guns, Ammo, Transfers & Service",
    description:
      "Barnesville's local firearms store for guns, ammo, inventory, $15 transfers, suppressor support, gunsmithing, and training.",
    url: "https://phoenixfreedomfirearms.com",
    siteName: "Phoenix Freedom Firearms",
    type: "website",
    images: [
      {
        url: "/assets/img/brand/phoenix-freedom-firearms-logo.jpg",
        alt: "Phoenix Freedom Firearms logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Freedom Firearms | Guns, Ammo, Transfers & Service",
    description:
      "Barnesville's local firearms store for guns, ammo, inventory, $15 transfers, suppressor support, gunsmithing, and training.",
    images: ["/assets/img/brand/phoenix-freedom-firearms-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050605",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
