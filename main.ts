import renderToString from "https://cdn.skypack.dev/preact-render-to-string@v5.1.12";
import home from "./pages/home.tsx";

import { extract, install } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";

install({
  presets: [
    presetTailwind(),
    {
      theme: {
        fontFamily: {
          sans: ["Helvetica", "sans-serif"],
          serif: ["Times", "serif"],
        },
      },
    },
  ],
});

function ssr() {
  const { html, css } = extract(renderToString(home()));
  return html.replace("</head>", `<style data-twind>${css}</style></head>`);
}

Deno.serve((_request: Request) => {
  const headers = new Headers({ "Content-Type": "text/html" });
  const body = ssr();
  return new Response(body, { headers });
});
