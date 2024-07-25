import qs from "querystring";

interface PropsOptions {
  endpoint: string;
  inputParams?: any;
}

const fetchServer = async <T>({ endpoint, inputParams }: PropsOptions) => {
  const baseURL = "https://dummyjson.com/";

  let data!: T;
  let isError: boolean = false;
  let error: string | null = null;
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  if (params) {
    endpoint += "?" + params;
  }

  try {
    const response = await fetch(`${baseURL}${endpoint}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    data = json;
  } catch (err: any) {
    isError = true;
    error = err;
  }

  return { data, isError, error };
};

export default fetchServer;
