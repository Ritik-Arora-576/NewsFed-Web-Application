import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState(Array.from({ length: 0 }));

  const fetchData = () => {
    setTimeout(() => {
      setArticles(articles.concat(Array.from({ length: 9 })));
    }, 1500);
  };

  useEffect(() => {
    setArticles(Array.from({ length: 9 }));
  },[]);

  return (
    <div className="container my-4">
      <h1 align="center" style={{visibility: "hidden"}}>TOP HEADLINES</h1>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={true}
        loader={<Spinner />}
        style={{overflow:"hidden"}}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles.map((element, index) => {
            return (<NewsItem key={index} dark={props.dark}/>);
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
