import { useEffect, useState } from "react";

export function useData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  const load = () => {
    setIsLoading(true);
    getData()
      .then((loadedData) => {
        setData(loadedData);
      })
      .catch((error) => {
        SetError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, error };
}

export function useClicker() {
  const [clicks, setClicks] = useState(0);
  const clickListener = () => setClicks((clicksState) => clicksState + 1);

  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  return clicks;
}


