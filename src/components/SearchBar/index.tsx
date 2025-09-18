"use client";

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Search} from "lucide-react";
import {debounce} from "lodash";

const categories = [
  {id: "mobile", label: "Mobile"},
  {id: "programacao", label: "Programação"},
  {id: "frontend", label: "Frontend"},
  {id: "devops", label: "DevOps"},
  {id: "ux-design", label: "UX & Design"},
  {id: "data-science", label: "Data Science"},
  {id: "inovacao-gestao", label: "Inovação & Gestão"},
];

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );

  const debouncedSearch = debounce((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    params.set("page", "1");
    router.replace(`/?${params.toString()}`, { scroll: false });
  }, 500);

  const handleChangeSearch = (value: string) => {
    setSearchTerm(value); 
    debouncedSearch(value);
  };

  const handleChangeCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category !== selectedCategory) {
      setSelectedCategory(category);
      params.set("category", category);
    } else {
      setSelectedCategory("");
      params.delete("category");
    }

    params.set("page", "1");
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-6 mt-[15px] mb-8 lg:h-10">
      <div className="flex flex-col sm:flex-row gap-4 space-x-8">
        <p className="font-chakra font-bold text-2xl text-tertiary content-center">
          Minhas Postagens
        </p>
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => handleChangeSearch(e.target.value)}
            className="w-full px-3.5 py-2 pr-10 border border-primary rounded-sm"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 px-3 text-tertiary"
          >
            <Search color="var(--primary)" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <span className="font-bold text-tertiary">Categorias:</span>
        <div className="flex gap-2 lg:w-[276px] overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleChangeCategory(category.id)}
              className={`whitespace-nowrap px-3 py-2 rounded-sm font-bold cursor-pointer text-white ${
                selectedCategory === category.id ? "bg-tertiary" : "bg-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
