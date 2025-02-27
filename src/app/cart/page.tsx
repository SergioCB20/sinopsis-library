"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Book as OriginalBook, RelatedProduct } from "@/lib/types";

interface Book extends OriginalBook {
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<(Book | RelatedProduct & { quantity: number })[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Calcular el total a pagar
  const calculateTotal = (cartItems: typeof cart) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
    setTotal(totalPrice);
  };

  // Actualizar la cantidad de un producto
  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Eliminar un producto del carrito
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-gray-500">Tu carrito está vacío 🛒</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Tu Carrito</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 p-4 border rounded-lg shadow-md">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={80}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              {"author" in item && <p className="text-gray-600">Autor: {item.author}</p>}
              <p className="text-gray-800 font-semibold">${(item.price || 0).toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <label className="mr-2 font-medium">Cantidad:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border border-gray-400 rounded-md p-1 w-16 text-center"
                />
              </div>
            </div>
            <Button variant="outline" size="small" onClick={() => removeFromCart(item.id)}>
              ❌ Eliminar
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <Button className="mt-4" href={`/checkout`}>Procesar Compra</Button>
      </div>
    </div>
  );
}
