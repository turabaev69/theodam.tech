// next.config.js
module.exports = {
    output: 'export', // Ensure Next.js exports static HTML
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Optional: Adds a trailing slash to URLs
  };
  