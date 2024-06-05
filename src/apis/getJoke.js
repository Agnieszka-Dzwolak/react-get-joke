const getJoke = async () => {
  try {
    const res = await fetch(`https://v2.jokeapi.dev/joke/Any`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getJoke;
