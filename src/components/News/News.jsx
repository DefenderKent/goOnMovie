import React from "react";
import * as axios from "axios";
import Preloader from "./../common/Preloader/Preloader";
import s from "./News.module.css";
import Article from "./Article";

const News = props => {
  debugger;

  let newsBar = props.news.map(n => {
    debugger;
    return (
      <Article
        title={n.title}
        content={n.content}
        author={n.author}
        urlToImage={n.urlToImage}
        description={n.description}
        source={n.source.name}
        publishedAt={n.publishedAt}
      />
    );
  });
  return (
    <div>
      <div>{newsBar}</div>
    </div>
  );
};

export default News;
