import { useState, useEffect } from "react";

import getJoke from "../apis/getJoke";
import Loading from "./Loading";
import Joke from "./Joke";

import "./JokeContainer.css";

const JokeContainer = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jokeData = await getJoke();
        setJoke(jokeData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const btnHandler = () => {
    setId((prevId) => prevId + 1);
  };
  return (
    <main>
      <button className="btn-get-joke" onClick={btnHandler}>
        Get a Joke
      </button>
      {loading && <Loading />}
      {joke && <Joke joke={joke} />}
      {error && <div className="error">Error retrieving joke data</div>}
    </main>
  );
};

export default JokeContainer;
