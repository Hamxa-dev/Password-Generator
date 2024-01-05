import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);

  function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  }

  function includeNumber(e) {
    setNumber(e.target.checked);
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }
  function includeLowerCase(e) {
    setLowerCase(e.target.checked);
  }
  function includeUpperCase(e) {
    setUpperCase(e.target.checked);
  }

  return (
    <>
      <form className="border-2 bg-[#00000086] rounded-3xl  w-[70%] h-[550px] ml-[15%] mt-[3%]">
        <h1 className="text-5xl font-bold text-center mt-[10%]  max-[960px]:text-4xl">
          Password Generator
        </h1>
           <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full ml-[25%] mt-5"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        <div className=" ">
          <h1 className="w-[50%]  max-[960px]:text-sm   h-10 text-3xl text-center mt-[3%] mx-[25%] rounded-md break-words bg-[#b2b0b06c] whitespace-wrap max-[960px]:pt-3">
            {password}
            <i className="fa-regular fa-copy ml-[7%]"></i>
          </h1>
          <h2 className="font-bold ml-[25%] mt-9">Password Length</h2>
          <label htmlFor="length" className="ml-[25%] font-bold">
            {length}
          </label>
          <input
            type="range"
            id="length"
            min={8}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            value={length}
            className="w-[48%] h-3 ml-2"
          />

          <div className="font-bold ml-[25%] mt-5 ">
            <label htmlFor="number">Number</label>
            <input
              type="checkbox"
              id="number"
              checked={number}
              onChange={includeNumber}
              className="ml-2"
            />
          </div>
          <div className="font-bold ml-[25%] mt-5 ">
            <label htmlFor="symbol">Symbol</label>
            <input
              type="checkbox"
              id="symbol"
              checked={symbol}
              onChange={includeSymbol}
              className="ml-2"
            />
          </div>
          <div className="font-bold ml-[25%] mt-5 ">
            <label htmlFor="lowerCase">Lowercase</label>
            <input
              type="checkbox"
              id="lowerCase"
              checked={lowerCase}
              onChange={includeLowerCase}
              className="ml-2"
            />
          </div>
          <div className="font-bold ml-[25%] mt-5 ">
            <label htmlFor="upperCase">Uppercase</label>
            <input
              type="checkbox"
              id="upperCase"
              checked={upperCase}
              onChange={includeUpperCase}
              className="ml-2"
            />
          </div>
        </div>
      </form>
    </>
  );
}


  export default App