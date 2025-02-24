"use client";
import { useState } from "react";
import OrderNow from "./OrderNow";

export default function Page() {
  const [description, setDescription] = useState(""); // Now it's actually used

  return (
    <div>
      <OrderNow description={description} setDescription={setDescription} />
    </div>
  );
}

