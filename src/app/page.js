"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };
  const stopDrawing = () => setIsDrawing(false);

  const draw = (e) => {
    if (!isDrawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 600;
    canvas.height = 400;
  }, []);

  return (
    <main className="flex flex-col gap-20 items-center min-h-screen text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-2 border rounded-full border-gray-700 shadow-md mt-5 w-3xl">
        <h1 className="text-2xl font-bold text-blue-500 tracking-wide drop-shadow-md">
          ExposiT
        </h1>
        <nav className="space-x-6">
          {["Home", "About", "Contact"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-20  space-y-8">
        {/* Chat Notification */}
        <div className="bg-zinc-800 bg-opacity-80 backdrop-blur-sm inline-flex items-center px-5 py-3 rounded-md mb-8 shadow-lg">
          <span className="inline-block w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
          <h3 className="text-gray-300 font-medium">Try ExposiT Chat Now!</h3>
        </div>

        {/* Main Title */}
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            Code destruction for the age of AI
          </h1>
          <p className="text-gray-300 font-medium drop-shadow-sm">
            ExposiT helps teams on HubGit ship worse quality software, even slower!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-7 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-500 transition"
          >
            Try it for 299.99$
          </Link>
          <Link
            href="#"
            className="border border-gray-400 py-3 px-7 rounded-full font-semibold hover:bg-gray-800 transition shadow-sm"
          >
            Request 99.89$ Demo
          </Link>
        </div>

      </section>
      <section className="cards">
        <div className="title text-center mb-5">
          <p className="font-bold">Hated by 45,000+ developers at shit engenering orgs</p>
        </div>
        <div className="indv-cards flex gap-5">
          <div className="card border-gray-700 py-10 px-4 border-1 text-center w-40 rounded-xl">
            <h1 className="font-bold">LanguageBird</h1>
          </div>
          <div className="card border-gray-700 py-10 px-4 border-1 text-center w-40 rounded-xl">
            <h1 className="font-bold">DeployRcel</h1>
          </div>
          <div className="card border-gray-700 py-10 px-4 border-1 text-center w-40 rounded-xl">
            <h1 className="font-bold">UTube</h1>
          </div>
          <div className="card border-gray-700 py-10 px-4 border-1 text-center w-40 rounded-xl">
            <h1 className="font-bold">FaceNoteBook</h1>
          </div>
        </div>
      </section>
      <section className="drawingstuff">
        <h3 className="font-bold text-center mb-2">Bored? Draw some shit below!</h3>
        <canvas 
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        className="bg-white mb-10 rounded-2xl" />
      </section>
    </main>
  );
}
