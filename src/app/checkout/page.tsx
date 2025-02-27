"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Book, RelatedProduct } from "@/lib/types";

export default function CheckoutPage() {
  const [cart, setCart] = useState<(Book | RelatedProduct & { quantity: number })[]>([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    deliveryMethod: "delivery", // Default: Envío a domicilio
    paymentMethod: "credit_card",
  });

  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems: typeof cart) => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * ("quantity" in item ? item.quantity : 1),
      0
    );
    setTotal(totalPrice);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.email || (formData.deliveryMethod === "delivery" && !formData.address)) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    // Vaciar el carrito
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    // Mostrar mensaje y redirigir después de 2 segundos
    alert("✅ ¡Pedido realizado con éxito! 🎉");
    setTimeout(() => {
      router.push("/success"); // Redirige a una página de éxito
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">🛍️ Checkout</h1>

      {/* Datos del Comprador */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">📌 Datos del Comprador</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-md mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-md mb-3"
        />
      </div>

      {/* Método de Entrega */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">🚚 Método de Entrega</h2>
        <select
          name="deliveryMethod"
          value={formData.deliveryMethod}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-md"
        >
          <option value="delivery">Envío a domicilio</option>
          <option value="pickup">Recoger en tienda</option>
        </select>

        {formData.deliveryMethod === "delivery" && (
          <input
            type="text"
            name="address"
            placeholder="Dirección de envío"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md mt-4"
          />
        )}
      </div>

      {/* Métodos de Pago */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">💳 Método de Pago</h2>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-md"
        >
          <option value="credit_card">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Transferencia Bancaria</option>
        </select>
      </div>

      {/* Resumen del Pedido */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">🛒 Resumen del Pedido</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No hay productos en el carrito</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={60}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  {"quantity" in item && <p className="text-gray-600">Cantidad: {item.quantity}</p>}
                  <p className="text-gray-800 font-semibold">
                    ${(item.price || 0 * ("quantity" in item ? item.quantity : 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <h2 className="text-lg font-bold text-right mt-4">
              Total: ${total.toFixed(2)}
            </h2>
          </div>
        )}
      </div>

      {/* Botón para finalizar */}
      <div className="mt-6 text-center">
        <Button className="w-full text-lg" onClick={handleCheckout}>
          Finalizar Pedido
        </Button>
      </div>
    </div>
  );
}
