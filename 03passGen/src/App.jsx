import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numTrue, setNumTrue] = useState(false);
  const [symbolsTrue, setSymbolsTrue] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const passGenerator = useCallback(() => {
    setCopyBtnText("Copy");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numTrue) str += "0123456789";
    if (symbolsTrue) str += "!@#$%^&*()[]{}_~-+";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numTrue, symbolsTrue, setPassword]);

  useEffect(() => {
    passGenerator();
  }, [length, numTrue, symbolsTrue, passGenerator]);

  const copyPassToClipboard = useCallback(() => {
    setCopyBtnText("Copied!");
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="mx-auto my-8 w-full max-w-md rounded-lg bg-gray-500 px-4 text-orange-500 shadow-md">
      <h1 className="my-3 text-center text-white">Password Generator</h1>
      <div className="mb-4 flex overflow-hidden rounded-lg shadow">
        <input
          type="text"
          value={password}
          className="w-full px-3 py-1 outline-none"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className=" bg-blue-700 px-3 py-0.5 text-white "
          onClick={copyPassToClipboard}
        >
          {copyBtnText}
        </button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numTrue}
            id="numInput"
            onChange={() => {
              setNumTrue((prev) => !prev);
            }}
          />
          <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={symbolsTrue}
            id="symInput"
            onChange={() => {
              setSymbolsTrue((prev) => !prev);
            }}
          />
          <label htmlFor="symInput">Symbols</label>
        </div>
      </div>
    </div>
  );
}
export default App;
