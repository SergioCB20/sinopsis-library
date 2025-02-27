"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirige a la página principal cuando llegue a 0
    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 ¡Pedido Exitoso!</h1>
      <p className="text-lg text-gray-700">
        Tu compra ha sido procesada correctamente. 🎁 <br />
        ¡Gracias por confiar en nosotros! ❤️
      </p>

      <p className="text-sm text-gray-500 mt-4">
        Redirigiéndote a la tienda en {countdown} segundos...
      </p>

      <Button className="mt-6 px-6 py-3" onClick={() => router.push("/")}>
        Volver a la Tienda
      </Button>
    </div>
  );
}
