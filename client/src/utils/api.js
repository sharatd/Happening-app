import { useEffect, useState } from "react";

import environment from "./environment";

const BASE_URL = environment.BASE_URL;

export const useDevelopers = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${BASE_URL}/developers`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        setData([...res.developers]);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.toString()));

    return () => {
      abortController.abort();
    };
  }, []);

  return [data, loading, error];
};

export const useProjects = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${BASE_URL}/projects`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        setData([...res.projects]);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.toString()));

    return () => {
      abortController.abort();
    };
  }, []);

  return [data, loading, error];
};

export const addRating = (developerId, stat, rating) => {
  const options = {
    method: "PATCH",
  };
  fetch(
    `${BASE_URL}/developers/adminRating/${developerId}/${stat}/${rating}`,
    options
  ).then((res) => {
    if (!res.ok) console.log("Not okay", res);
  });
};

export const patchDevNotes = (adminNotes, devId) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("PATCH", `${BASE_URL}/developers/adminNotes/${ devId }`, false);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ notes: adminNotes }));
};

export const login = async (email) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  };
  return fetch(`${BASE_URL}/developerLogin`, options)
    .then((res) => res.json())
    .then((body) => body.developer);
};

export const apply = (pid, did, text) => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  };
  return fetch(`${BASE_URL}/projects/${pid}/modifyApplied/${did}`, options)
  .then((res) => {
    if (!res.ok) console.log("Not okay", res);
  })
};

export const addProjectHandleSubmit = (project) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", `${BASE_URL}/projects`, false);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(project));
};

export const patchProjectInfo = (project, projectId) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", `${BASE_URL}/projects/${projectId}`, false);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(project))
};

export const deleteProject = (projectId) =>  {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", `${BASE_URL}/projects/${projectId}`, false);
  xhttp.send();
};

export const addDevToProject = (projectId, developerId) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", `${BASE_URL}/projects/${projectId}/modifyDevelopers/${developerId}`, false);
  xhttp.send();
};

export const removeDevFromProject = (projectId, developerId) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", `${BASE_URL}/projects/${projectId}/modifyDevelopers/${developerId}`, false);
  xhttp.send();
};

export const addNewDeveloper = (devInfo) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", `${BASE_URL}/developers`, false);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(devInfo));
};

export const updateDeveloperInfo = (devInfo, accountId) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("PATCH", `${BASE_URL}/developers/${accountId}`, false);
  xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(devInfo));
};