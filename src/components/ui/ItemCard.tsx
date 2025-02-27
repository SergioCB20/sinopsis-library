import Image from "next/image";
import { Book, RelatedProduct, Event } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface ItemCardProps {
    item: Book | RelatedProduct | Event;
    text:string;
    href?:string;
}

export default function ItemCard({ item, text, href }: ItemCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Image
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md"
        width={128}
        height={100}
      />
      <h3 className="text-lg font-bold mt-4">{item.name}</h3>
      
      {"author" in item && <p className="text-gray-600">{item.author}</p>}
      {"price" in item && item.price !== undefined && <p className="text-gray-600">${item.price.toFixed(2)}</p>}
      {"date" in item && "location" in item && (
        <>
          <p className="text-gray-600">{item.date}</p>
          <p className="text-gray-500">{item.location}</p>
        </>
      )}
      <Button variant="primary" size="medium" className="mt-4" href={href}>
        {text}
      </Button>
    </div>
  );
}

