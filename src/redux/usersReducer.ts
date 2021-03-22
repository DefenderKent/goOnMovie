
import { usersAPI } from '../api/api';
import { PhotoType } from '../types/types';
import { updateObjectInArry } from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
type userType = {
  name: string;
  id: number;
  photos: PhotoType;
  status: null | string;
  followed: boolean;
};
let initialState = {
  users: [] as userType[],
  pageSize: 3 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<any>,
};
export type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArry(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArry(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};
type followSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};
type unfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};
type setUsersType = {
  type: typeof SET_USERS;
  users: userType[];
};
type setCurrentPagesType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
type toggleFollowingInProgressType = {
  type: typeof FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const followSuccess = (userId: number): followSuccessType => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users: userType[]): setUsersType => ({
  type: SET_USERS,
  users,
});
export const setCurrentPages = (currentPage: number): setCurrentPagesType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching:boolean, userId:number):toggleFollowingInProgressType => ({
  type: FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const requestUsers = (currentPage:number, pageSize:number) => {
  return async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPages(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfolowFlow = async (
  dispatch:any,
  userId:number,
  apiMethod:any,
  actionCreator:any
) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};
export const follow = (userId:number) => {
  return async (dispatch:any) => {
    followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId:number) => {
  return async (dispatch:any) => {
    followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};


export default usersReducer;
