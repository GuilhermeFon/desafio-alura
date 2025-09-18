"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({currentPage, totalPages}: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `/?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center space-x-1 md:space-x-4 mt-8">
      {pages.map((page) => (
        <Link
          key={page}
          href={createPageUrl(page)}
          scroll={false}
          className={`px-3 py-2 rounded-sm transition-colors text-white font-bold ${
            currentPage === page ? "bg-tertiary" : "bg-foreground-light"
          }`}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
