"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ItemCard from "@/components/ui/ItemCard";
import { Book, RelatedProduct } from "@/lib/types";
import { books, relatedProducts } from "@/lib/data";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || ""; // Obtiene el parámetro `search`
  
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("name");

  const allItems: (Book | RelatedProduct)[] = [...books, ...relatedProducts];

  const filteredItems = useMemo(() => {
    return allItems
      .filter((item) =>
        filter === "all" || ("category" in item && item.category === filter)
      )
      .filter((item) =>
        search ? item.name.toLowerCase().includes(search) : true
      );
  }, [filter, search]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sort === "price" && "price" in a && "price" in b) {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  }, [filteredItems, sort]);

  return (
    <div className="container mx-auto p-6">
      {/* Título dinámico */}
      <h1 className="text-3xl font-bold mb-6">
        {search ? <em>Resultados de: "{search}"</em> : "Nuestros Productos"}
      </h1>

      {/* Filtros y Ordenamiento */}
      <div className="flex justify-between mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">Todos</option>
          <option value="book">Libros</option>
          <option value="merchandise">Accesorios</option>
          <option value="stationery">Papelería</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="name">Ordenar por Nombre</option>
          <option value="price">Ordenar por Precio</option>
        </select>
      </div>

      {/* Lista de Productos */}
      {sortedItems.length === 0 ? (
        <p className="text-gray-500 text-center">No se encontraron productos</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <ItemCard key={item.id} item={item} text="Comprar" href={`/products/${item.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}
