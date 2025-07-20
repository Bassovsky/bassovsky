
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  {
    id: 1,
    name: "Cheap Discord Nitro Month",
    price: 5.0,
    image: "/nitro_month.png",
  },
  {
    id: 2,
    name: "Cheap Discord Nitro Year",
    price: 40.0,
    image: "/nitro_year.png",
  },
  {
    id: 3,
    name: "Cheap Discord Decorations",
    price: 3.25,
    image: "/decorations.png",
  },
  {
    id: 4,
    name: "Farm Merge Valley",
    price: 8.0,
    image: "/farm_merge.png",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#200033] to-[#0e001a] text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">bassovsky.com</h1>
      <p className="text-center text-lg mb-10">Digital Subscriptions & Game Currency</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-[#2c003e] hover:shadow-lg cursor-pointer"
            onClick={() => setSelected(product)}
          >
            <CardContent className="p-4 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="h-24 mb-4" />
              <p className="text-center font-semibold">{product.name}</p>
              <p className="text-purple-400 mt-2">${product.price.toFixed(2)}</p>
              <Button className="mt-4 w-full">Purchase</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1c002c] p-6 rounded-xl w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
            <p className="mb-4">Price: ${selected.price.toFixed(2)}</p>
            <p className="mb-4 text-sm text-gray-300">
              To purchase, contact us on Telegram: <br />
              <a href="https://t.me/yourtelegram" className="text-blue-400 underline">@yourtelegram</a>
            </p>
            <Button onClick={() => setSelected(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
