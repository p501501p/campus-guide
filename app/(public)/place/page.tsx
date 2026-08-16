import Link from "next/link";
import { places } from "@/data/places";

export default function Page() {
  return (
    <div>
      

      <ul>
        <div className="mx-auto max-w-4xl p-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mt-4 inline-block rounded border border-white/30 bg-white/10 px-4 py-2 black shadow-sm">
          <h1 className="text-xl font-bold">รายการสถานที่</h1>
        </div>
        {places.map((place) => (
          <li key={place.slug} className="border p-4 rounded mb-4">
            <h2 className="text-3xl font-bold text-slate-900">{place.name}</h2>
            <p>{place.summary}</p>
            <div className="mt-4 inline-block rounded border border-blue-300 bg-blue-50 px-3 py-2">
              <Link href={`/place/${place.slug}`} className="font-medium text-blue-700">
                ดูรายละเอียด
              </Link>
            </div>
          </li>
        ))}
         </section>
         </div>
      </ul>
    </div>
  );
}
