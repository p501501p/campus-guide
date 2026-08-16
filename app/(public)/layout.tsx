import Breadcrumbs from "@/components/Breadcrumbs";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b bg-white px-5 py-4 shadow-sm">
        <Breadcrumbs />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
