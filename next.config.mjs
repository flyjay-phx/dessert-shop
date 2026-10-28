/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // GitHub Pages(https://flyjay-phx.github.io/dessert-shop/)용 정적 내보내기
  output: "export",
  basePath: "/dessert-shop",
  images: { unoptimized: true },
  // <img src>에는 basePath가 자동으로 붙지 않아서 화면 코드에서 직접 붙인다
  env: { NEXT_PUBLIC_BASE_PATH: "/dessert-shop" },
};

export default nextConfig;
