export type PostType = {
    id: number;
    message: string;
    likeCount: number;
  };
  export  type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: contactsType;
    photo:PhotoType
  };
  export  type contactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  export type PhotoType={
    small:string|null,
    large:string|null
  }