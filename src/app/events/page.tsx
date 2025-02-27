"use client";
import { useMemo } from "react";
import Image from "next/image";
import { events } from "@/lib/data"; // Asegúrate de importar tus eventos
import { Button } from "@/components/ui/Button";

export default function EventPage() {
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events]);

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">📅 Próximos Eventos</h1>

      {sortedEvents.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No hay eventos disponibles en este momento.</p>
      ) : (
        <div className="space-y-10">
          {sortedEvents.map((event) => (
            <div key={event.id} className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={event.imageUrl}
                alt={event.name}
                layout="fill"
                objectFit="cover"
                className="opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6 text-center">
                <h2 className="text-3xl font-bold">{event.name}</h2>
                <p className="text-lg mt-2">{new Date(event.date).toLocaleDateString()}</p>
                <p className="mt-4 max-w-2xl">{event.description}</p>
                <Button variant="primary" className="mt-6" href={`/events/${event.id}`}>Más información</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
