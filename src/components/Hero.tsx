import React from 'react';

export default function Hero() {
  return (
    <section className="grid __custom_layout min-h-screen">
      <nav className="__custom_navbar"></nav>

      <aside className="bg-gray-800 __custom_sidebar"></aside>

      <main className="__custom_main">
        <h1 className="font-bold text-8xl text-center bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-blue-500 my-8">
          Wrachliotis
        </h1>

        <div className="text-green-600">Hello world</div>
      </main>
    </section>
  );
}
