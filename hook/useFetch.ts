"use client";

import { useState, useEffect, useCallback } from "react";
import qs from "querystring";

interface IProps {
  endpoint: string;
  inputParams?: any;
}

export const useFetch = <T>({ endpoint, inputParams }: IProps) => {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "https://dummyjson.com/";
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  if (params) {
    endpoint += "?" + params;
  }

  const fetchData = useCallback(async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch(`${baseURL}${endpoint}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();

      setIsFetching(false);
      setData(json);
    } catch (error) {
      setError(`${error}`);
      setIsFetching(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isFetching, error, refetch: fetchData };
};
