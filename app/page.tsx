"use client";

import React, { useState, useEffect } from 'react';

// Data JSON dari soal modul
const response = {
  page: 1,
  results: [
    {
      userId: 1, id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

export default function Page() {
  // Logika Counter Demo
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Alert akan muncul jika count bukan 0 dan habis dibagi 10
    if (count !== 0 && count % 10 === 0) {
      alert(`localhost:5173 says\n10 is divisible by 5\n(Angka saat ini: ${count})`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      
      {/* UI Navigation Bar*/}
      <nav className="flex justify-between items-center bg-teal-600 text-white p-4 rounded-lg shadow-md mb-8">
        <div className="text-4xl font-bold">Zhafarrel Alvarezqi Pradsandhanna Kadarusman</div>
        
        {/* Menu menggunakan Flexbox */}
        <ul className="flex space-x-6 text-lg">
          <li className="cursor-pointer hover:text-teal-200 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-teal-200 transition-colors">Profile</li>
          <li className="cursor-pointer hover:text-teal-200 transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Counter */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto text-center border-t-4 border-teal-500">
        <h2 className="text-2xl font-bold mb-6">Counter Demo</h2>
        <div className="text-5xl font-semibold mb-8">{count}</div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold w-12 h-12 rounded flex items-center justify-center transition-colors shadow-sm"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold px-6 py-2 rounded transition-colors shadow-sm"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold w-12 h-12 rounded flex items-center justify-center transition-colors shadow-sm"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* UI Card Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Cards</h2>
        
        {/* Menggunakan Grid agar responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Mapping data array */}
          {response.results.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-xl mb-3 capitalize text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base line-clamp-4 flex-1 whitespace-pre-line">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      
    </div>
  );
}