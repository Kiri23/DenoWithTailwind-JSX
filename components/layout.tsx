import { JSX } from "https://esm.sh/preact/jsx-runtime";

export default function ({ children, title }: { children: JSX.Element[], title: string }) {
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }