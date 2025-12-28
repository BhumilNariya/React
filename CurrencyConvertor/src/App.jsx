import { useState } from "react";
import { InputBox } from "./components/InputBox";
import "./App.css";
import useCurrenyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrenyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F83%2F189283-050-DF7E0E75%2FBanknotes-world.jpg&f=1&nofb=1&ipt=90ea8a7e4dd5c2561ed414b46fcc1bc9672c327b3bbe3f4e4d6ce595a839be89')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
                label="From"
                amount={amount}      
                currencyOptions={options} 
                onCurrencyChange={(currency)=>setAmount(amount)} 
                selectCurrency={from}      
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
               label="To"
                amount={convertedAmount}      
                currencyOptions={options} 
                onCurrencyChange={(currency)=> setTo(currency)} 
                selectCurrency={from} 
                amountDisable
              
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase} to {to.toUpperCase}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
