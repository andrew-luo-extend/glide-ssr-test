const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    outputFileTracingIgnores: ["**canvas**"],
    // instrumentationHook: true,
  },
};

export default nextConfig;
