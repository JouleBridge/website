import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", ".source/**", "next-env.d.ts", "public/vendor/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default eslintConfig;
