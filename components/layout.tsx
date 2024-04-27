import { JSX } from "https://esm.sh/preact/jsx-runtime";

export default function ({ children, title }: { children: JSX.Element[], title: string }) {
    return (
      <html>
        <head>
          <title>{title}</title>
          <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }