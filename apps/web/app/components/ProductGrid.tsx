import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: string;
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    globalThis
      .fetch("/products")
      .then((r) => r.json())
      .then((d) => setProducts(d.products));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-2">
          <h2 className="font-bold">{p.title}</h2>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
