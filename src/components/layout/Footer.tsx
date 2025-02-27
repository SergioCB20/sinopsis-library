import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo */}
        <div className="text-lg font-bold mb-4 md:mb-0">Sinopsis Librerías</div>

        {/* Links de navegación */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm mb-4 md:mb-0">
          <FooterLink href="/about" label="Sobre Nosotros" />
          <FooterLink href="/products" label="Productos" />
          <FooterLink href="/events" label="Eventos" />
          <FooterLink href="/contact" label="Contacto" />
        </ul>

        {/* Redes Sociales */}
        <div className="flex space-x-4">
          <SocialIcon href="https://www.instagram.com/sinopsis2311/" icon={FaInstagram} label="Instagram" />
          <SocialIcon href="https://www.facebook.com/profile.php?id=61573507474264" icon={FaFacebook} label="Facebook" />
          <SocialIcon href="https://www.tiktok.com/@libreriasinopsis3" icon={FaTiktok} label="TikTok" />
          <SocialIcon href="https://wa.me/+51970857296" icon={FaWhatsapp} label="WhatsApp" />
          <SocialIcon href="https://www.google.com/maps/place/Las+Sirenitas/@-11.9757078,-77.0631499,17z/data=!3m1!4b1!4m6!3m5!1s0x9105ce4a73a749b5:0x6d47d4c9d6f27266!8m2!3d-11.9757078!4d-77.060575!16s%2Fg%2F11gh2qsz5k?entry=tts&g_ep=EgoyMDI1MDExNS4wIPu8ASoASAFQAw%3D%3D" icon={FaMapMarkerAlt} label="Google Maps" />
        </div>
      </div>

      {/* Derechos de autor */}
      <p className="text-gray-400 text-sm text-center mt-6">
        © {new Date().getFullYear()} Sinopsis Librerías. Todos los derechos reservados.
      </p>
    </footer>
  );
}

// Componente reutilizable para los enlaces del footer
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-gray-400 transition">
        {label}
      </Link>
    </li>
  );
}

// Componente reutilizable para los iconos de redes sociales
function SocialIcon({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition text-2xl"
      aria-label={label}
    >
      <Icon />
    </Link>
  );
}
