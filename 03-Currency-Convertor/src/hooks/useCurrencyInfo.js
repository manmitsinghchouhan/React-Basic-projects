import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => {
        return res.json();
        // console.log(res);
      })
      .then((res) => {
        setData(res[currency]);
        // console.log();
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
