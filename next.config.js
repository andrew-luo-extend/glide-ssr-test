const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    outputFileTracingIgnores: ["**canvas**"],
    // instrumentationHook: true,
  },
  output: "standalone",
};

export default nextConfig;
