import PropTypes from "prop-types";

import "./Joke.css";

import animal from "../assets/joke-animal.jpg";

const Joke = ({ joke }) => {
  return (
    <main>
      <div className="joke-top">
        <div className="joke-container">
          <div className="category">{joke.category}</div>
          <div className="type">
            {joke.type === "single" ? (
              <div className="joke">{joke.joke}</div>
            ) : (
              <div>
                <div className="setup">{joke.setup}</div>
                <div className="delivery">{joke.delivery}</div>
              </div>
            )}
          </div>
          <div className="line"></div>
          <div className="flags">
            {Object.entries(joke.flags).map(([flag, value]) => (
              <button key={flag} className={value ? "true" : "false"}>
                {flag}
              </button>
            ))}
          </div>
          <div>
            {joke.safe ? (
              <p className="safe">Safe for Everyone</p>
            ) : (
              <p className="unsafe">Warning: Explicit Content</p>
            )}
          </div>
        </div>
      </div>

      <div className="img-container">
        <img src={animal} alt="joke-animal" />
      </div>
    </main>
  );
};

Joke.propTypes = {
  joke: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    flags: PropTypes.shape({
      nsfw: PropTypes.bool.isRequired,
      religious: PropTypes.bool.isRequired,
      political: PropTypes.bool.isRequired,
      racist: PropTypes.bool.isRequired,
      sexist: PropTypes.bool.isRequired,
      explicit: PropTypes.bool.isRequired,
    }),
    safe: PropTypes.bool.isRequired,
  }),
};

export default Joke;
