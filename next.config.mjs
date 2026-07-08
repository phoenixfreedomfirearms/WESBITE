/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ffl-transfer.html",
        destination: "/ffl-transfer",
        permanent: true,
      },
      {
        source: "/inventory.html",
        destination: "/inventory",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/custom-builds.html",
        destination: "/custom-builds",
        permanent: true,
      },
      {
        source: "/safety-classes.html",
        destination: "/safety-classes",
        permanent: true,
      },
      {
        source: "/survival-school.html",
        destination: "/survival-school",
        permanent: true,
      },
      {
        source: "/service-area.html",
        destination: "/service-area",
        permanent: true,
      },
      {
        source: "/suppressors.html",
        destination: "/suppressors",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/terms.html",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/cookies.html",
        destination: "/cookies",
        permanent: true,
      },
      {
        source: "/returns.html",
        destination: "/returns",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/ffl-transfer",
        destination: "/ffl-transfer.html",
      },
      {
        source: "/inventory",
        destination: "/inventory.html",
      },
      {
        source: "/services",
        destination: "/services.html",
      },
      {
        source: "/custom-builds",
        destination: "/custom-builds.html",
      },
      {
        source: "/safety-classes",
        destination: "/safety-classes.html",
      },
      {
        source: "/survival-school",
        destination: "/survival-school.html",
      },
      {
        source: "/service-area",
        destination: "/service-area.html",
      },
      {
        source: "/suppressors",
        destination: "/suppressors.html",
      },
      {
        source: "/contact",
        destination: "/contact.html",
      },
      {
        source: "/terms",
        destination: "/terms.html",
      },
      {
        source: "/privacy",
        destination: "/privacy.html",
      },
      {
        source: "/cookies",
        destination: "/cookies.html",
      },
      {
        source: "/returns",
        destination: "/returns.html",
      },
    ];
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
