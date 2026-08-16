import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPlace, places } from '@/data/places'
 
type Props = {
  params: Promise<{ slug: string }>
}
 
export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }))
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const place = findPlace(slug)
 
  if (!place) return { title: 'ไม่พบสถานที่' }
 
  return {
    title: `${place.name} | Campus Guide`,
    description: place.summary,
  }
}
 
export default async function PlacePage({ params }: Props) {
  const { slug } = await params
  const place = findPlace(slug)
 
  if (!place) notFound()
 
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold text-slate-900">{place.name}</h1>
        <p className="mt-3 text-base text-slate-600">{place.summary}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">อาคาร</p>
            <p className="mt-2 text-slate-800">{place.building}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">เวลาเปิด</p>
            <p className="mt-2 text-slate-800">{place.openHours}</p>
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">สิ่งอำนวยความสะดวก</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {place.facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
      </article>
    </main>
  )
}