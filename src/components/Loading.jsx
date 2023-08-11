// CSS
import styles from "./css/Loading.module.css";
import { PropTypes } from "prop-types";

export default function Loading({ text = "Loading..." }) {
  return (
    <div className={styles.loading}>
      <div>
        <h1>{text}</h1>
        {text === "Loading..." ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
          >
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ) : null}
      </div>
      <span>@dition0221</span>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};
