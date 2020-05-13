import React from "react";
import * as axios from "axios";
import s from "./News.module.css";
import Preloader from "./../common/Preloader/Preloader";
import News from "./News";
import { setNewsAC } from "./../../redux/newsReducer";
import { connect } from "react-redux";

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=e38b73a1eb4c448aa7bc93b86a731d75"
      )
      .then(response => {
        this.props.setNews(response.data.articles);
      });
  }

  render() {
    return (
      <>
        {this.props.news.length === 0 ? (
          <Preloader />
        ) : (
          <News news={this.props.news} />
        )}
        ;
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    news: state.newsPage.news
  };
};
let mapDispatchToProps = dispatch => {
  return {
    setNews: news => {
      dispatch(setNewsAC(news));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
