import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <br></br>
      
      <h1 className="px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Campus Guide</h1>
      {children}
      <div className="mt-6 flex justify-end">
        <Link
          href="/about"
          className="inline-block rounded border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700 transition hover:bg-blue-100"
        >
          About ME
        </Link>
      </div>
    </div>
  );
}
