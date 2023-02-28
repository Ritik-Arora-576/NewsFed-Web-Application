import React from "react";

export default function NewsItem(props) {
  return (
    <div className="col">
      <div className={`card text-${props.dark==="dark"?"white":"dark"} bg-${props.dark}`}>
        <img src={`${props.imgUrl}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={`${props.newsUrl}`} className="btn btn-primary">
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}
