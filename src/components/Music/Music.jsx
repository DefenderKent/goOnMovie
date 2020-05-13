import React from "react";
import s from "./Music.module.css";
import * as axios from "axios";
import { setdb } from "./../../redux/fireBaseReducer";
import { connect } from "react-redux";
class Music extends React.Component {
  componentDidMount() {
    axios
      .get("https://qrrr-ae1f8.firebaseio.com/person.json")
      .then(response => {
        if (this.props.persons.length === 0) {
          this.props.sedb(response.data.name);
        }
      });
  }

  render() {
    debugger;
    return (
      <div>
        Music
        <div></div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  debugger;
  return {
    persons: state.persons
  };
};
let mapDispatchToProps = dispatch => {
  debugger;
  return {
    sedb: persons => {
      dispatch(setdb(persons));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Music);
