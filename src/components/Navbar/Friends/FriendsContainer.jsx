import React from "react";
import s from "./Friends.module.css";
import Friends from "./Friends";
import { usersAPI } from "./../../../api/api";
import {
  follow,
  unfollow,
  setCurrentPages,
  toggleFollowingInProgress,
  requestUsers
} from "./../../../redux/usersReducer";
import { connect } from "react-redux";
import { getUsers } from "./../../../redux/usersSelectors";
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "./../../../redux/usersSelectors";
class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  render() {
    return (
      <Friends
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPages,
  toggleFollowingInProgress,
  getUsers: requestUsers
})(FriendsContainer);
