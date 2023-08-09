import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  // API
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setLoading(false);
      setDetail(json.data.movie);
    };
    getMovie();
  }, [id]);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail.large_cover_image} alt={detail.title} />
          <h2>
            <a href={detail.url} target="_blank" rel="noreferrer">
              {detail.title_long ? detail.title_long : detail.title}
            </a>
          </h2>
          <p>{`Rating: ${detail.rating}`}</p>
          <p>{`Run time: ${detail.runtime} [min]`}</p>
          {detail.genres ? (
            <div>
              <h3>Genres</h3>
              <ul>
                {detail.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {detail.description_intro ? <p>{detail.description_intro}</p> : null}
        </div>
      )}
    </div>
  );
}

export default Detail;
