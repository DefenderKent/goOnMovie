import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Але", likeCount: 14 },
        { id: 2, message: "Да!", likeCount: 11 },
        { id: 3, message: "Что с деньгами", likeCount: 12 },
        { id: 4, message: "Какими деньгами?", likeCount: 4 },
      ],
      newPostText: "kent228",
    },
    pageDialog: {
      messages: [
        { id: 1, message: "Которые я вложил" },
        { id: 2, message: "Куда вложил?" },
        { id: 3, message: "В капитал" },
        { id: 4, message: "В какой капитал?" },
        { id: 5, message: "Прожиточного минимума" },
      ],
      newMessage: "",
      dialogsData: [
        {
          id: 1,
          name: "Dima",
          img:
            "https://i.pinimg.com/originals/67/06/89/6706898caf5e80cdd151127b2a68ae44.png",
        },
        {
          id: 2,
          name: "Vada",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbozi3TkcLpmnL-ZjfDDyRc1d1PUWVByTxCdUmHhaVqyZTNoVt",
        },
        {
          id: 3,
          name: "Tira",
          img:
            "https://www.pngitem.com/pimgs/m/369-3696594_jump-ultimate-stars-art-jojo-bizarre-adventure-minecraft.png",
        },
        { id: 4, name: "Dora", img: "https://i.redd.it/60f66hgzbd411.png" },
        {
          id: 5,
          name: "Lilpump",
          img:
            "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/63596492_377780566185772_5222704345568981105_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&bc=1571337657&oh=f8f2aed085ffb360d393e629208f5f93&oe=5E649E68&ig_cache_key=MjA3MDg4NjI1MTM3ODI5MTY2MQ%3D%3D.2",
        },
      ],
    },

    sitebar: [
      {
        id: 1,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaE42Lu5tZRuvzE35kLHNh_SOkzCv0rPvVN0cPv_qzOVn3Sig6",
        name: "Grihs",
      },
      {
        id: 1,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbvzUYUNfpJy4IW2dOiJpULZrtRhnof-wJOVbS09NaWyv5XDRi",
        name: "Mifa",
      },
      {
        id: 1,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOTVPDOjPR-JjQ1hsKfYMqKr4X7-8KtyXAfN4B1nQSDf-bhrX0",
        name: "Sifas",
      },
    ],
  },
  _callSubscriber() {
    console.log("stata izmememns");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.pageDialog = dialogsReducer(this._state.pageDialog, action);
    this._state.sitebar = sitebarReducer(this._state.sitebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
