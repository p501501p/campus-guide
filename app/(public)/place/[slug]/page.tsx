import { Metadata } from "next";
import { findPlace, places } from "@/data/places";
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const place = findPlace(slug);

  if (place === undefined) {
    return <h1>Not found</h1>;
  }

  return (
    <div>
      <h1>{place?.name}</h1>
      <p>{place?.summary}</p>
      <p>Building: {place?.building}</p>
      <p>Open Hours: {place?.openHours}</p>
      <ul>
        {place?.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
}
