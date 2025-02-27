/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 Desactiva ESLint en build (No recomendado para producción)
  },
};

export default nextConfig;