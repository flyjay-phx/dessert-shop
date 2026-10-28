/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // GitHub Pages(https://flyjay-phx.github.io/dessert-shop/)용 정적 내보내기
  output: "export",
  basePath: "/dessert-shop",
  images: { unoptimized: true },};

export default nextConfig;
