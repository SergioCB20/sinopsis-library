"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Book, RelatedProduct } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { books, relatedProducts } from "@/lib/data";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Book | RelatedProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { user: "Carlos", text: "Excelente producto, muy recomendado!" },
    { user: "Ana", text: "Me encantó, la calidad es increíble." },
  ]);

  useEffect(() => {
    if (!params?.id) return;

    const foundProduct =
      books.find((book) => book.id === params.id) ||
      relatedProducts.find((product) => product.id === params.id) ||
      null;

    setProduct(foundProduct);
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = { user: "Yo", text: comment };
    setComments([...comments, newComment]);
    setComment("");
  };

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Producto no encontrado</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <Button variant="outline" onClick={() => router.back()}>
        Volver
      </Button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={400}
          className="rounded-lg object-cover"
          priority
          style={{ width: "auto", height: "auto" }}
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {"author" in product && (
            <p className="text-gray-600 mt-2">Autor: {product.author}</p>
          )}
          {"price" in product && product.price !== undefined && (
            <p className="text-lg font-semibold mt-4">${product.price.toFixed(2)}</p>
          )}
          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <label className="font-semibold">Cantidad:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="border border-gray-400 rounded-md p-2 w-16 text-center"
            />
          </div>

          <Button className="mt-6" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </div>
      </div>

      {/* Sección de Comentarios */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📝 Comentarios de Clientes</h2>

        {/* Lista de comentarios */}
        {comments.length > 0 ? (
          <div className="space-y-4 mb-4">
            {comments.map((c, index) => (
              <div key={index} className="border-b pb-3">
                <p className="font-semibold">{c.user}</p>
                <p className="text-gray-700">{c.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay comentarios aún.</p>
        )}

        {/* Formulario para agregar comentario */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-3 rounded-md mt-2"
          placeholder="Escribe tu comentario..."
        />
        <Button className="mt-3" onClick={handleAddComment}>
          Enviar Comentario
        </Button>
      </div>
    </div>
  );
}
