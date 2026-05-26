import { useCallback, useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./component/inputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

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
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4025825/pexels-photo-4025825.jpeg?_gl=1*rtl7lo*_ga*MjA0Njg1Nzc4MC4xNzc5NzE3NDI5*_ga_8JE65Q40S6*czE3Nzk3MTc0MjgkbzEkZzEkdDE3Nzk3MTc2NjEkajIwJGwwJGgw')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectedCurrency={from}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                // onCurrencyChange={(cur) => setAmount(amount)}
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
                selectedCurrency={to}
                currencyOptions={options}
                // onAmountChange={(amount) => setConvertedAmount(amount)}
                amountDisable
                onCurrencyChange={(cur) => setTo(cur)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;