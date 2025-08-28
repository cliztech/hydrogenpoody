import { useParams } from "@remix-run/react";

export default function Product() {
  const { handle } = useParams();
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Product: {handle}</h1>
    </main>
  );
}
