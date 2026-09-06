import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // This site builds with `output: "export"` and `images.unoptimized: true`,
      // so next/image performs no optimization here — it cannot run the
      // optimizer on a static export. Its remaining benefit is layout
      // stability, which the explicit width/height on every <img> already
      // provides. All images are now local SVG or a 7.7KB PNG, so the
      // bandwidth concern the rule guards against does not apply.
      // Revisit if this ever moves off static export.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
