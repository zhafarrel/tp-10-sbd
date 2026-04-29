"use client";

import React, { useState, useEffect } from "react";

// Data JSON bawaan dari Modul (Tetap utuh sesuai instruksi)
const response = {
  page: 1,
  results: [
    {
      userId: 1, id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500?random=1",
    },
    {
      userId: 1, id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500?random=2",
    },
    {
      userId: 1, id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500?random=3",
    },
    {
      userId: 1, id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500?random=4",
    },
    {
      userId: 1, id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500?random=5",
    },
  ],
};

export default function Page() {
  const [count, setCount] = useState(0);

  // Logika Counter
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Sistem Peringatan: Angka saat ini (${count}) habis dibagi 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 font-sans text-slate-200">
      
      {/* UI Navigation Bar */}
      <nav className="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl mb-12 sticky top-4 z-50">
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400 tracking-wider">
            Zhafarrel Alvarezqi Pradsandhanna Kadarusman
          </span> 
        </div>
        
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-cyan-400 transition-all hover:scale-110">Home</li>
          <li className="cursor-pointer hover:text-fuchsia-400 transition-all hover:scale-110">Profile</li>
          <li className="cursor-pointer hover:text-cyan-400 transition-all hover:scale-110">Settings</li>
           <li className="cursor-pointer hover:text-fuchsia-400 transition-all hover:scale-110">Contacts</li>
        </ul>
      </nav>

      {/* UI Counter Demo */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-2xl opacity-20 rounded-3xl"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl max-w-md mx-auto text-center">
          <h2 className="text-xl font-bold mb-2 text-slate-300 uppercase tracking-widest">Counter Demo</h2>
          
          <div className="text-7xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            {count}
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              className="w-14 h-14 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(232,121,249,0.4)] hover:text-fuchsia-400"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white rounded-full font-bold uppercase tracking-wide transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
            <button
              className="w-14 h-14 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:text-cyan-400"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* UI Card Component */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8 space-x-4">
          <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-200 tracking-wider">Data Card</h2>
          <div className="h-1 w-full flex-1 bg-slate-800 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {response.results.map((item) => (
            <div 
              key={item.id} 
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.3)] flex flex-col"
            >
              <div className="relative overflow-hidden">
                {/* Efek overlay pada image data */}
                <div className="absolute inset-0 bg-fuchsia-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative">
                <div className="absolute top-0 left-6 w-12 h-0.5 bg-gradient-to-r from-fuchsia-500 to-transparent"></div>
                
                <h3 className="font-bold text-lg mb-3 text-slate-200 capitalize group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm flex-1 whitespace-pre-line line-clamp-4 leading-relaxed">
                  {item.body}
                </p>
                
                <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                  <button className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-widest">
                    Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}