// Fonte única de dados do site — troque aqui quando tiver conteúdo real.
// Manter tudo tipado evita erros de digitação silenciosos ao consumir nos componentes.

export interface Brand {
  code: string;
  name: string;
  mono: string;
  desc: string;
  img: string;
}

export interface Product {
  code: string;
  name: string;
  price: string;
  size: "a" | "b" | "c";
  imgA: string;
  imgB: string;
}

export interface InstaPost {
  img: string;
  height: number;
  caption: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  avatar: string;
  text: string;
}

export const SITE = {
  name: "Bronx Multimarcas",
  url: "https://www.bronxmultimarcas.com.br",
  whatsapp: "https://wa.me/5521990323313",
  instagram: "https://instagram.com/bronxmultimarcas",
  address: {
    street: "Rua Luís coutinho cavalcanti, 337",
    district: "Guadalupe",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "21675-310",
  },
  hours: [
    { label: "Seg – Sex", value: "10h às 20h" },
    { label: "Sábado", value: "10h às 19h" }
  ],
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Luis%20coutinho%20cavalcanti%20337%20Guadalupe%20Rio%20de%20Janeiro&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Luis+coutinho+cavalcanti+337+Guadalupe+Rio+de+Janeiro",
};

export const brands: Brand[] = [
  { code: "M.01", name: "Nike", mono: "N", desc: "Movimento e cultura urbana em cada lançamento.", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80" },
  { code: "M.02", name: "Adidas Originals", mono: "A", desc: "Herança esportiva reinventada para a rua.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" },
  { code: "M.03", name: "Jordan", mono: "J", desc: "Legado de quadra virado linguagem global.", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80" },
  { code: "M.04", name: "Carhartt WIP", mono: "C", desc: "Streetwear com raiz no trabalho e resistência.", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80" },
  { code: "M.05", name: "New Balance", mono: "NB", desc: "Conforto técnico com estética premium.", img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=80" },
  { code: "M.06", name: "Stüssy", mono: "S", desc: "Pioneira do streetwear californiano.", img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=1000&q=80" },
];

export const products: Product[] = [
  { code: "NEW.01", name: "Corta-Vento Bronx", price: "R$ 349,00", size: "a", imgA: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80", imgB: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80" },
  { code: "NEW.02", name: "Moletom Oversized", price: "R$ 279,00", size: "b", imgA: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1100&q=80", imgB: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1100&q=80" },
  { code: "NEW.03", name: "Calça Cargo Tática", price: "R$ 329,00", size: "c", imgA: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80", imgB: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80" },
  { code: "NEW.04", name: "Runner Prototype", price: "R$ 599,00", size: "a", imgA: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80", imgB: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80" },
];


export const testimonials: Testimonial[] = [
  { name: "Lucas Andrade", role: "@lucas.andrd", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg", text: "Atendimento impecável e peças que fogem do óbvio." },
  { name: "Marina Costa", role: "@marina.cst", rating: 5, avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "Curadoria diferente de tudo que já vi no Rio." },
  { name: "Rafael Nunes", role: "@rafanunes", rating: 4, avatar: "https://randomuser.me/api/portraits/men/65.jpg", text: "Corta-vento surpreendeu na qualidade." },
  { name: "Beatriz Lima", role: "@bea.lima", rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "Entrega rápida e embalagem impecável." },
];
