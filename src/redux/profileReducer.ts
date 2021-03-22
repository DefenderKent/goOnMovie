import { profileAPI } from '../api/api';
import { PhotoType, PostType, ProfileType } from '../types/types';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTOS = 'SAVE_PHOTOS';

let initialState = {
  posts: [
    { id: 1, message: 'Але', likeCount: 14 },
    { id: 2, message: 'Да!', likeCount: 11 },
    { id: 3, message: 'Что с деньгами', likeCount: 12 },
    { id: 4, message: 'Какими деньгами?', likeCount: 4 },
  ] as Array<PostType>,
  newPostText: 'kent228',
  profile: null as ProfileType | null,
  status: 'Hellow228',
};
export type initialStateType =typeof initialState
const profileReducer = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };
      let stateCopy = { ...state };

      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);

      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTOS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType};
    }
    default:
      return state; 
  }
};
type addPostActionCreatorType ={
  type:typeof ADD_POST,
  newPostText:string
}
export const addPostActionCreator = (newPostText:string):addPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});
type setUserProfileType={
  type:typeof SET_USER_PROFILE,
  profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type setStatusType ={
  type:typeof SET_STATUS,
  status:string
}
export const setStatus = (status:string):setStatusType => ({ type: SET_STATUS, status });
type savePhotoSuccessType ={
  type:typeof SAVE_PHOTOS,
  photos:PhotoType
}
export const savePhotoSuccess = (photos:PhotoType):savePhotoSuccessType => ({ type: SAVE_PHOTOS, photos });

export const getUserProfile = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};
export const updateStatus = (status:string) => async (dispatch:any) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file:any) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  debugger;
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
};
export default profileReducer;
