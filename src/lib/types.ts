// Interfaz base para cualquier producto
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "book" | "merchandise" | "stationery" | "other";
  stock: number;
}

// Interfaz para libros (hereda de Product)
export interface Book extends Product {
  category: "book";
  author: string;
  publisher: string;
  isbn: string;
  pages: number;
  genre: string;
  language: string;
  publicationDate: string; // Formato YYYY-MM-DD
}

// Interfaz para productos relacionados (marcapáginas, tazas, etc.)
export interface RelatedProduct extends Product {
  category: "merchandise" | "stationery" | "other";
  material?: string;
  dimensions?: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string; // Formato ISO "YYYY-MM-DDTHH:mm:ssZ"
  location: string;
  imageUrl: string;
  category: "presentation" | "book-signing" | "workshop" | "other";
  price?: number; // Puede ser gratuito
  maxAttendees?: number; // Opcional: límite de personas
  author?: string; // Si aplica (por ejemplo, en una firma de libros)
  organizer: string;
  tags?: string[];
}
