import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://th.bing.com/th/id/OIP.pWCcXYnug3x3v_zQ3bFd-QHaE9?pid=ImgDet&rs=1"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {date}
            </small>
          </p>
          <Link
            rel="noreferrer"
            to={newsUrl}
            target="_blank"
            className="btn btn-sn btn-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
