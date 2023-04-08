import { useEffect, useState } from 'react';


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
  

    return {data, isLoading, error}
}