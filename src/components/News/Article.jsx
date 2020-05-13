import React from "react";
import * as axios from "axios";
import s from "./News.module.css";

const Article = props => {
  debugger;
  return (
    <div className={`${s.mb20} ${s.pl15}`}>
      <div></div>
      <div>Источник:{props.source}</div>
      <div className={s.images}>
        <img src={props.urlToImage} alt="" />
      </div>
      <div>
        <h3>Автор:{props.author}</h3>
      </div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>{props.description}</div>
      <div>{props.content}</div>
      <div>{props.publishedAt}</div>
    </div>
  );
};

export default Article;
