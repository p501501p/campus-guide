import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      <aside className="w-64 bg-slate-900 p-6 text-white">
        <h1 className="text-2xl font-bold">Admin</h1>

        <nav className="mt-8 space-y-3">
          <Link href="/place-management" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
            Place Management
          </Link>
          <Link href="/" className="block rounded-lg px-3 py-2 hover:bg-slate-800">
            Home
          </Link>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="border-b bg-white px-6 py-4 shadow-sm">
          <Breadcrumbs />
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
