import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/place" className="text-blue-500 underline">
        ไปหน้า place
      </Link>
    </div>
  );
}
