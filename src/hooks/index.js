import * as API from 'api'
import { useEffect, useState } from 'react';


export function useData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState(null);
  
    const load = () => {
      setIsLoading(true);
      API.getOtherUsers()
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