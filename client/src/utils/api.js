import { useEffect, useState } from 'react';

//const BASE_URL = 'https://cs394-happening.herokuapp.com';
const BASE_URL = 'http://localhost:8081';

export const useDevelopers = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    console.log('Fetching new data');
    fetch(`${BASE_URL}/developers`, {signal: abortController.signal})
    .then( (res) => res.json())
    .then((res) => {
        setData([...res.developers]);
        setLoading(false);
        setError(null);
    })
    .catch((err) => setError(err.toString())) 

    return () => {
      abortController.abort();
    }
  }, [])

  return [data, loading, error];
}
