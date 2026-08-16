"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  "": "หน้าแรก",
  about: "เกี่ยวกับเรา",
  admin: "Admin",
  place: "สถานที่",
  "place-management": "Place Management",
};

export default function Breadcrumbs() {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [{ href: "/", label: "หน้าแรก" }];

  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    crumbs.push({
      href: currentPath,
      label: labelMap[segment] ?? segment.replace(/-/g, " "),
    });
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-slate-600"
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}

            {isLast ? (
              <span className="font-medium text-slate-900">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600 hover:underline">
                {crumb.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
