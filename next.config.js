  // next.config.js
module.exports = {
    output: 'export', // Ensures Next.js exports static HTML
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Optional: Adds a trailing slash to URLs
  };
  

  // /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
