import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-100">Campus Guide</p>
          <h1 className="mt-3 text-4xl font-bold">ค้นหาสถานที่ภายในมหาวิทยาลัย</h1>
          <p className="mt-3 max-w-xl text-blue-50">
            เรียนรู้ข้อมูลสถานที่สำคัญภายในมหาวิทยาลัยได้ง่ายและรวดเร็ว
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/place"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              ดูสถานที่ทั้งหมด
            </Link>
            <Link
              href="/place-management"
              className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Admin
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              about me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
