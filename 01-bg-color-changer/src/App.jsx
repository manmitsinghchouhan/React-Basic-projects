import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-10 inset-x-0 flex justify-center px-2">
        <div className="flex justify-around gap-3 bg-white px-2 py-2 rounded-xl">
          <button
            className="bg-red-500 px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
          <button
            className="bg-blue-500 px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
          <button
            className="bg-green-500 px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="bg-purple-500 px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("purple");
            }}
          >
            purple
          </button>
          <button
            className="bg-pink-500 px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("pink");
            }}
          >
            pink
          </button>
          <button
            className="bg-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => {
              setColor("white");
            }}
          >
            white
          </button>
          <button
            className="bg-black px-8 py-3 rounded-full shadow-lg text-cyan-50 "
            onClick={() => {
              setColor("black");
            }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
