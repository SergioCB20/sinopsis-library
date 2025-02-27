import React from "react";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Nuestra Misión",
    content:
      "Fomentar el amor por la lectura y el conocimiento a través de una amplia selección de libros, eventos literarios y productos culturales.",
    bgImage: "/images/hero-1.jfif",
  },
  {
    title: "Nuestros Valores",
    content:
      "Compromiso con la cultura, inclusión, innovación y pasión por la literatura. Creemos en el poder transformador de los libros.",
    bgImage: "/images/hero-2.jfif",
  },
  {
    title: "Nuestros Servicios",
    content:
      "En nuestra librería encontrarás una gran variedad de libros, productos literarios y eventos exclusivos, desde charlas con autores hasta clubes de lectura y talleres creativos.",
    bgImage: "/images/hero-3.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-screen bg-cover bg-center border-b-4"
          style={{ backgroundImage: `url(${section.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-2xl px-4">
            <h2 className="text-5xl font-bold drop-shadow-lg">{section.title}</h2>
            <p className="mt-4 text-lg drop-shadow-md">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsPage;