"use client";

import React, { useState } from "react";

const items = [
  { id: 1, name: "Tent" },
  { id: 2, name: "Sleeping Bag" },
  { id: 3, name: "Fire" },
];

export default function CampingItemsSequencing() {
  const [order, setOrder] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("");

  const toggleItem = (id: number) => {
    if (order.includes(id)) {
      setOrder(order.filter((itemId) => itemId !== id));
    } else {
      setOrder([...order, id]);
    }
  };

  const checkOrder = () => {
    if (order.length !== items.length) {
      setMessage("Please select all items in order.");
      return;
    }
    const correctOrder = items.map((item) => item.id);
    const isCorrect = order.every((id, index) => id === correctOrder[index]);
    setMessage(isCorrect ? "Correct order! Well done." : "Incorrect order. Try again.");
  };

  const reset = () => {
    setOrder([]);
    setMessage("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Put Camping Items in Order</h2>
      <p className="mb-4">Select the camping items in the correct order: Tent → Sleeping Bag → Fire</p>
      <div className="flex flex-col space-y-2 mb-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-3 border rounded ${
              order.includes(item.id) ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <button
          onClick={checkOrder}
          className="mr-4 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Check Order
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Reset
        </button>
      </div>
      {message && <p className="font-semibold">{message}</p>}
    </div>
  );
}
