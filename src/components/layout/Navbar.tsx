"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu, FiSearch, FiX } from "react-icons/fi"; // Importando íconos desde react-icons
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/products?search=${search}`);
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Sinopsis Librerías
        </Link>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <NavItem href="/about" label="Sobre Nosotros" />
          <NavItem href="/products" label="Productos" />
          <NavItem href="/events" label="Eventos" />
          <NavItem href="/contact" label="Contacto" />
          <NavItem href="/cart" label="Carrito 🛒" />
        </ul>

        {/* Buscador */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-lg"
        >
          <input
            type="text"
            placeholder="Buscar libros..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none focus:outline-none px-2 text-white placeholder-gray-400"
          />
          <Button type="submit" variant="ghost" size="icon">
            <FiSearch className="w-5 h-5 text-gray-400" />
          </Button>
        </form>

        {/* Botón de menú en móviles */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Menú desplegable en móviles */}
      <div className={cn("md:hidden transition-all", isOpen ? "block" : "hidden")}>
        <ul className="bg-gray-800 flex flex-col items-center space-y-3 py-3">
          <NavItem href="/about" label="Sobre Nosotros" />
          <NavItem href="/products" label="Productos" />
          <NavItem href="/events" label="Eventos" />
          <NavItem href="/contact" label="Contacto" />
          <NavItem href="/cart" label="Carrito 🛒" />
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-700 px-3 py-1 rounded-lg w-4/5"
          >
            <input
              type="text"
              placeholder="Buscar libros..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none focus:outline-none px-2 text-white placeholder-gray-400 w-full"
            />
            <Button type="submit" variant="ghost" size="icon">
              <FiSearch className="w-5 h-5 text-gray-400" />
            </Button>
          </form>
        </ul>
      </div>
    </nav>
  );
}

// Componente de Item de Navegación reutilizable
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-gray-400 transition">
        {label}
      </Link>
    </li>
  );
}
