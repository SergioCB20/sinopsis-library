import { Book, RelatedProduct, Event } from "./types";
export const books: Book[] = [
  {
    id: "1",
    name: "Cien años de soledad",
    description:
      "Novela de Gabriel García Márquez, una obra maestra del realismo mágico.",
    price: 19.99,
    imageUrl: "/images/cien-años-de-soledad.jpg",
    category: "book",
    stock: 30,
    author: "Gabriel García Márquez",
    publisher: "Editorial Sudamericana",
    isbn: "978-84-376-0494-7",
    pages: 471,
    genre: "Realismo mágico",
    language: "Español",
    publicationDate: "1967-05-30",
  },
  {
    id: "2",
    name: "1984",
    description:
      "Distopía clásica de George Orwell sobre el control totalitario.",
    price: 14.5,
    imageUrl: "/images/1984.webp",
    category: "book",
    stock: 25,
    author: "George Orwell",
    publisher: "Secker & Warburg",
    isbn: "978-84-9062-126-4",
    pages: 328,
    genre: "Ciencia ficción, Distopía",
    language: "Español",
    publicationDate: "1949-06-08",
  },
  {
    id: "3",
    name: "Orgullo y prejuicio",
    description: "Una de las novelas románticas más famosas de Jane Austen.",
    price: 12.99,
    imageUrl: "/images/orgullo-prejuicio.jpg",
    category: "book",
    stock: 40,
    author: "Jane Austen",
    publisher: "Editorial Alba",
    isbn: "978-84-9065-292-3",
    pages: 432,
    genre: "Romance, Drama",
    language: "Español",
    publicationDate: "1813-01-28",
  },
  {
    id: "4",
    name: "El Hobbit",
    description: "La aventura de Bilbo Bolsón en la Tierra Media.",
    price: 17.99,
    imageUrl: "/images/el-hobbit.jpg",
    category: "book",
    stock: 35,
    author: "J.R.R. Tolkien",
    publisher: "Minotauro",
    isbn: "978-84-450-7375-0",
    pages: 310,
    genre: "Fantasía",
    language: "Español",
    publicationDate: "1937-09-21",
  },
  {
    id: "5",
    name: "Harry Potter y la piedra filosofal",
    description: "El inicio de la saga del joven mago.",
    price: 22.99,
    imageUrl: "/images/harry-potter1.jpg",
    category: "book",
    stock: 50,
    author: "J.K. Rowling",
    publisher: "Salamandra",
    isbn: "978-84-9838-007-7",
    pages: 256,
    genre: "Fantasía",
    language: "Español",
    publicationDate: "1997-06-26",
  },
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: "6",
    name: "Marcapáginas de madera",
    description: "Un marcapáginas artesanal grabado con láser.",
    price: 4.99,
    imageUrl: "/images/bookmark.webp",
    category: "stationery",
    stock: 100,
    material: "Madera",
    dimensions: "15cm x 3cm",
  },
  {
    id: "7",
    name: "Taza con frases literarias",
    description: "Taza de cerámica con citas famosas de libros.",
    price: 9.99,
    imageUrl: "/images/taza-literaria.webp",
    category: "merchandise",
    stock: 60,
    material: "Cerámica",
    dimensions: "10cm x 8cm",
  },
  {
    id: "8",
    name: "Cuaderno temático de escritores",
    description: "Cuaderno de notas con portadas de escritores famosos.",
    price: 7.5,
    imageUrl: "/images/cuaderno.jpg",
    category: "stationery",
    stock: 80,
    material: "Papel reciclado",
    dimensions: "A5",
  },
  {
    id: "9",
    name: "Lámpara de lectura LED",
    description: "Lámpara portátil para leer en la oscuridad sin molestar.",
    price: 12.99,
    imageUrl: "/images/lampara-led.jpg",
    category: "merchandise",
    stock: 40,
    material: "Plástico",
    dimensions: "15cm x 4cm",
  },
  {
    id: "10",
    name: "Bolsa tote literaria",
    description: "Bolsa de tela con frases inspiradoras de libros.",
    price: 14.99,
    imageUrl: "/images/bolsa-tote.webp",
    category: "merchandise",
    stock: 50,
    material: "Algodón",
    dimensions: "40cm x 35cm",
  },
  {
    id: "11",
    name: "Estuche de plumas temáticas",
    description: "Set de plumas con diseños inspirados en autores clásicos.",
    price: 8.99,
    imageUrl: "/images/plumas.jpg",
    category: "stationery",
    stock: 70,
    material: "Metal y plástico",
    dimensions: "Estuche de 20cm x 5cm",
  },
  {
    id: "12",
    name: "Poster de mapas literarios",
    description: "Mapas de mundos literarios como la Tierra Media o Narnia.",
    price: 16.99,
    imageUrl: "/images/poster-mapas.jpg",
    category: "merchandise",
    stock: 30,
    material: "Papel de alta calidad",
    dimensions: "50cm x 70cm",
  },
  {
    id: "13",
    name: "Set de stickers de libros",
    description: "Stickers temáticos con portadas de libros y frases célebres.",
    price: 5.99,
    imageUrl: "/images/stickers.webp",
    category: "stationery",
    stock: 90,
    material: "Vinilo",
    dimensions: "Pack de 10 stickers",
  },
  {
    id: "14",
    name: "Velas aromáticas inspiradas en libros",
    description: "Velas con aromas inspirados en clásicos literarios.",
    price: 13.5,
    imageUrl: "/images/vela-literaria.webp",
    category: "merchandise",
    stock: 40,
    material: "Cera de soja",
    dimensions: "200ml",
  },
  {
    id: "15",
    name: "Audífonos para audiolibros",
    description:
      "Auriculares inalámbricos diseñados para largas sesiones de audiolibros.",
    price: 29.99,
    imageUrl: "/images/audifonos.webp",
    category: "merchandise",
    stock: 20,
    material: "Plástico y metal",
    dimensions: "Ajustables",
  },
];
export const events: Event[] = [
  {
    id: "1",
    name: "Presentación de 'Cien años de soledad'",
    description:
      "Exploraremos la obra maestra de García Márquez con invitados especiales.",
    date: "2025-03-15T18:00:00Z",
    location: "Librería Sinopsis - Sala de eventos",
    imageUrl: "/images/evento-cien-años.webp",
    category: "presentation",
    price: 0,
    maxAttendees: 100,
    author: "Gabriel García Márquez",
    organizer: "Librería Sinopsis",
    tags: ["Realismo mágico", "Literatura clásica", "Evento gratuito"],
  },
  {
    id: "2",
    name: "Firma de libros con Isabel Allende",
    description:
      "Oportunidad única para conocer a la autora y llevarte un libro firmado.",
    date: "2025-04-10T16:00:00Z",
    location: "Librería Sinopsis - Área de firmas",
    imageUrl: "/images/firma-allende.jpeg",
    category: "book-signing",
    price: 0,
    maxAttendees: 200,
    author: "Isabel Allende",
    organizer: "Librería Sinopsis",
    tags: ["Novela histórica", "Mujeres escritoras", "Cultura"],
  },
  {
    id: "3",
    name: "Taller de escritura creativa",
    description:
      "Aprende técnicas de escritura narrativa con un escritor reconocido.",
    date: "2025-05-05T14:00:00Z",
    location: "Librería Sinopsis - Sala de talleres",
    imageUrl: "/images/taller-escritura.jpg",
    category: "workshop",
    price: 25.99,
    maxAttendees: 20,
    organizer: "Escuela de Escritura Creativa",
    tags: ["Escritura", "Creatividad", "Educación"],
  },
  {
    id: "4",
    name: "Club de lectura: '1984' de George Orwell",
    description: "Discutiremos los temas y mensajes de la distopía de Orwell.",
    date: "2025-06-02T19:00:00Z",
    location: "Librería Sinopsis - Sala de reuniones",
    imageUrl: "/images/club-1984.jpg",
    category: "other",
    price: 0,
    maxAttendees: 30,
    organizer: "Club de lectura Sinopsis",
    tags: ["Distopía", "Ciencia ficción", "Filosofía"],
  },
];
