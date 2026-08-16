import Link from "next/link";
import { places } from "@/data/places";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl">
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Place Management</h1>
        <p className="mt-1 text-sm text-slate-500">
          รายการสถานที่ทั้งหมดสำหรับแอดมิน
        </p>
      </div>

      <div className="space-y-4">
        {places.map((place) => (
          <div
            key={place.slug}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{place.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{place.summary}</p>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/place/${place.slug}`}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700"
                >
                  ดูรายละเอียด
                </Link>
                <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700">
                  จัดการ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
