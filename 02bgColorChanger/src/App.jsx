import { useState } from "react";

function App() {
  const [bgColor, setbgColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <p className="text-green-500 text-2xl text-center mb-5">
        Click on the button to change
        <br /> background color accordingly.
      </p>
      <div className="fixed  bg-orange-500 rounded-r-3xl flex flex-col justify-center p-2 gap-5 text-xl lg:flex-row lg:h-auto lg:static lg:mx-10 lg:rounded-3xl">
        <button
          className="Red rounded-2xl px-3"
          style={{ backgroundColor: "red" }}
          onClick={() => setbgColor("red")}
        >
          Red
        </button>
        <button
          className="Green rounded-2xl px-4"
          style={{ backgroundColor: "green" }}
          onClick={() => setbgColor("green")}
        >
          Green
        </button>
        <button
          className="Blue rounded-2xl px-4"
          style={{ backgroundColor: "blue" }}
          onClick={() => setbgColor("blue")}
        >
          Blue
        </button>
        <button
          className="Olive rounded-2xl px-4"
          style={{ backgroundColor: "Olive" }}
          onClick={() => setbgColor("Olive")}
        >
          Olive
        </button>
        <button
          className="Gray rounded-2xl px-4"
          style={{ backgroundColor: "Gray" }}
          onClick={() => setbgColor("Gray")}
        >
          Gray
        </button>
        <button
          className="Yellow rounded-2xl px-4"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setbgColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="Pink rounded-2xl px-4"
          style={{ backgroundColor: "pink" }}
          onClick={() => setbgColor("pink")}
        >
          Pink
        </button>
        <button
          className="Purple rounded-2xl px-4"
          style={{ backgroundColor: "purple" }}
          onClick={() => setbgColor("purple")}
        >
          Purple
        </button>
        <button
          className="Lavender rounded-2xl px-4"
          style={{ backgroundColor: "Lavender" }}
          onClick={() => setbgColor("Lavender")}
        >
          Lavender
        </button>
        <button
          className="White rounded-2xl px-4 text-black"
          style={{ backgroundColor: "white" }}
          onClick={() => setbgColor("white")}
        >
          White
        </button>
        <button
          className="Black rounded-2xl px-4 text-white"
          style={{ backgroundColor: "black" }}
          onClick={() => setbgColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
