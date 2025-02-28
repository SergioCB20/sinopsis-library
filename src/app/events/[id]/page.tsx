"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/data"; // Suponiendo que tienes un array de eventos en data.ts

export default function EventPage() {
  const router = useRouter();
  const { id } = useParams();
  const [event, setEvent] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;
    const foundEvent = events.find((e) => e.id === id) || null;
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return <p className="text-center mt-10 text-red-500">Evento no encontrado</p>;
  }

  const googleFormUrl = "https://forms.google.com/tu-formulario"; // Reemplaza con tu enlace de Google Forms
  const whatsappNumber = "+51970857296"; // Reemplaza con el número de WhatsApp sin "+"
  const message = encodeURIComponent(
    `Hola, me gustaría obtener más información sobre el evento: ${event.name}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <Button variant="outline" onClick={() => router.back()}>
        Volver
      </Button>

      <div className="mt-6">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full"
          priority
        />

        <h1 className="text-3xl font-bold mt-4">{event.name}</h1>
        <p className="text-gray-600 mt-2">{event.date}</p>
        <p className="text-lg mt-4">{event.description}</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button  className="bg-purple-400 text-gray-700 border border-black hover:bg-purple-600 hover:text-white">
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
              Inscribirse en el Evento
            </a>
          </Button>

          <Button variant="outline" className="bg-green-400 hover:bg-green-600 hover:text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
