import { Button } from "@/components/ui/Button";
import { books, relatedProducts, events } from "@/lib/data";
import ItemCard from "@/components/ui/ItemCard";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Bienvenidos a Sinopsis Librerías</h1>
        <p className="mt-4 text-lg">Tu destino para libros, accesorios y eventos literarios</p>
        <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg" href={`/products`}>
          Explorar Libros
        </Button>
      </section>

      {/* Libros Destacados */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Libros Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {books.slice(0, 3).map((book) => (
            <ItemCard key={book.id} item={book} text="Comprar" href={`/products/${book.id}`}/>
          ))}
        </div>
      </section>

      {/* Productos Relacionados */}
      <section className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center">Productos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {relatedProducts.slice(0, 3).map((product) => (
            <ItemCard key={product.id} item={product} text="Comprar" href={`/products/${product.id}`}/>
          ))}
        </div>
      </section>

      {/* Eventos */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {events.slice(0, 3).map((event) => (
            <ItemCard key={event.id} item={event} text="Inscribirse" href={`/events/${event.id}`}/>
          ))}
        </div>
      </section>
    </div>
  );
}
