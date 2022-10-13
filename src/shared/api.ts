interface Error {
  code: string;
  message: string;
}

const fetchApi = async (url: string) => {
  try {
    const fullUrl = `${process.env.REACT_APP_API_END_POINT! as string}/${url}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (e: unknown) {
    const error = e as Error;
    console.log(error.message);
  }
};

export { fetchApi };
