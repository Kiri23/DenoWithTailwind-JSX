export default function ({ children }: { children: string }) {
    return (<button hx-get="/search"
      className="border bg-indigo-600 text-white px-2 py-1 rounded m-2"
    >
      {children}
    </button>);
  }