"use client";
import { useEffect } from "react";

export default function BlogPage() {
  const onclickButton = () => {
    window.dataLayer?.push({
      event: "EventoTeste",
    });
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <section className="pt-6">
        <h2 className="text-xl font-bold">Blog Page</h2>
        <button onClick={onclickButton}>Disparar Pixel</button>
      </section>
    </main>
  );
}
