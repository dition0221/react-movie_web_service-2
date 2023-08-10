import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import Loading from "../components/Loading";
// CSS
import "./css/Detail.css";

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

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="detail-container">
          <div className="detail">
            <div>
              <img
                className="poster"
                src={detail.large_cover_image}
                alt={detail.title}
              />
            </div>
            <div>
              <h2>
                <a href={detail.url} target="_blank" rel="noreferrer">
                  {detail.title_long ? detail.title_long : detail.title}
                </a>
              </h2>
              <div className="detail__meta">
                <span>{`✨ ${
                  detail.rating ? detail.rating : "❓"
                } / 10.0`}</span>
                <span>{`🕘 ${
                  detail.runtime ? detail.runtime : "❓"
                } min`}</span>
              </div>
              {detail.description_intro ? (
                detail.description_intro.length > 820 ? (
                  <p>{`${detail.description_intro.slice(0, 820)}...`}</p>
                ) : (
                  <p>{detail.description_intro}</p>
                )
              ) : null}
              {detail.genres ? (
                <div>
                  <br />
                  <ul>
                    {detail.genres.map((genre) => (
                      <li key={genre}>▪{genre}&nbsp;</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <img
              className="background"
              src={detail.background_image_original}
              alt={detail.background_image_original}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
