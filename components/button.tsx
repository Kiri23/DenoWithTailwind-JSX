import { JSX } from "https://esm.sh/preact/jsx-runtime";

export default function ({ children }: { children: string }) {
    return (<button
      className="border bg-indigo-600 text-white px-2 py-1 rounded m-2"
    >
      {children}
    </button>);
  }