import { useEffect, useState } from 'react';

//const BASE_URL = 'https://xenah-dev-portal.herokuapp.com/';
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

export const useProjects = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    console.log('Fetching projects');
    fetch(`${BASE_URL}/projects`, {signal: abortController.signal})
    .then( (res) => res.json())
    .then((res) => {
        setData([...res.projects]);
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

export const addRating = (developerId, stat, rating) => {
  console.log(`Add rating of ${rating}`)
  const options = {
    method: 'PATCH',
  };
  fetch(`${BASE_URL}/developers/adminRating/${developerId}/${stat}/${rating}`, options)
    .then((res) => {
      if (!res.ok) console.log('Not okay', res);
    });
}

export const login = async (email) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  }
  return fetch(`${BASE_URL}/developerLogin`, options)
    .then((res) => res.json())
    .then((body) => body.developer)
}

