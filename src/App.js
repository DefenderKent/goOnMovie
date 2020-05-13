import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsCotainer from "./components/Dialogs/DialogsCotainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { connect } from "react-redux";
import Setting from "./components/Setting/Setting";
import { Route } from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsCotainer = React.lazy(() =>
  import("./components/Dialogs/DialogsCotainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route
            path="/dialogs"
            render={() => (
              <React.Suspense fallback={<div>Loading...</div>}>
                <DialogsCotainer />
              </React.Suspense>
            )}
          />
          <Route
            path="/users"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <UsersContainer />
                </React.Suspense>
              );
            }}
          />
          <Route path="/login" render={() => <Login />} />
          <Route
            path="/news"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <NewsContainer />
                </React.Suspense>
              );
            }}
          />
          {/* <Route path="/news" component={News} state={this.props.state} /> */}
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  initialized: state.app.initialized
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
