import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages has no server-side rewrite, so a direct hit on /aktualnosci
// (shared link, refresh) would return its own 404 page. Serving a copy of the
// built index.html as 404.html lets the router take over and render the route.
//
// CNAME is NOT written here — it lives in public/ so that every build carries
// it into dist/. A build that omits it unclaims vendingtech.pl the moment it is
// published, which takes the site down until the domain is re-saved in Settings.
const ghPagesFiles = (): Plugin => ({
  name: "gh-pages-files",
  apply: "build",
  closeBundle() {
    const dist = resolve(__dirname, "dist");
    copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPagesFiles()],
  base: "/",
});
