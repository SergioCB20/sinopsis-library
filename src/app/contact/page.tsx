"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/nuestro-local.jfif" // Asegúrate de tener una imagen en public/images
          alt="Nuestro Local"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl font-bold">📍 ¡Visítanos en Nuestro Local!</h1>
          <p className="mt-2 text-lg">Estamos encantados de recibirte y compartir nuestra pasión contigo.</p>
        </div>
      </div>

      {/* Información de Contacto */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">📞 Contáctanos</h2>
        <p className="mt-4 text-gray-600">Si tienes dudas o sugerencias, no dudes en escribirnos.</p>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <p className="flex items-center space-x-2 text-lg">
            <FaMapMarkerAlt className="text-red-500" /> <span>Av. Universitaria 1801</span>
          </p>
          <p className="flex items-center space-x-2 text-lg">
            <FaPhone className="text-blue-500" /> <span>+51 970 857 296</span>
          </p>
          <p className="flex items-center space-x-2 text-lg">
            <FaEnvelope className="text-green-500" /> <span>contacto@libsinopsis.com</span>
          </p>
        </div>
      </div>

      {/* Mapa (Google Maps embebido) */}
      <div className="mt-10 flex justify-center">
        <iframe
          className="w-full md:w-3/4 h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.9537363159041!3d-37.81627917975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f998b3%3A0x2f9f0db1c4e0f8df!2sMelbourne!5e0!3m2!1sen!2sau!4v1632041571286!5m2!1sen!2sau"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Redes Sociales */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">📲 ¡Síguenos en Redes Sociales!</h2>
        <div className="flex justify-center space-x-6 mt-6">
          <Button variant="ghost" className="text-blue-600 text-2xl">
            <FaFacebook />
          </Button>
          <Button variant="ghost" className="text-pink-500 text-2xl">
            <FaInstagram />
          </Button>
          <Button variant="ghost" className="text-black text-2xl">
            <FaTiktok />
          </Button>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="mt-16 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">📩 Envíanos un mensaje</h2>
        <form>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-2 mb-4 border rounded h-32"
          />
          <Button variant="primary" className="w-full">Enviar</Button>
        </form>
      </div>
    </div>
  );
}
