import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// CSS
import styles from "./css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <div>
        <h2>
          <Link to={`/movie/${id}`} className={styles.link}>
            {title}
          </Link>
        </h2>
        <p>
          {summary
            ? summary.length > 200
              ? `${summary.slice(0, 200)}...`
              : summary
            : "❌ No Summary"}
        </p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>▪{genre}&nbsp;</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
