import { type } from 'os';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

type InitialState = {
  message: Messages;
  dialogsData: DialogsData;
};

type Messages = {
  id: number;
  message: string;
};
type DialogsData = {
  id: number;
  name: string;
  img: string;
};
let initialState = {
  messages: [
    { id: 1, message: 'KKKK' },
    { id: 2, message: 'eeeee' },
    { id: 3, message: 'Tira goo e' },
    { id: 4, message: 'maping' },
    { id: 5, message: 'come with me' },
  ] as Array<Messages>,

  dialogsData: [
    {
      id: 1,
      name: 'Dima',
      img:
        'https://i.pinimg.com/originals/67/06/89/6706898caf5e80cdd151127b2a68ae44.png',
    },
    {
      id: 2,
      name: 'Vada',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbozi3TkcLpmnL-ZjfDDyRc1d1PUWVByTxCdUmHhaVqyZTNoVt',
    },
    {
      id: 3,
      name: 'Tira',
      img:
        'https://www.pngitem.com/pimgs/m/369-3696594_jump-ultimate-stars-art-jojo-bizarre-adventure-minecraft.png',
    },
    { id: 4, name: 'Dora', img: 'https://i.redd.it/60f66hgzbd411.png' },
    {
      id: 5,
      name: 'Lilpump',
      img:
        'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/63596492_377780566185772_5222704345568981105_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&bc=1571337657&oh=f8f2aed085ffb360d393e629208f5f93&oe=5E649E68&ig_cache_key=MjA3MDg4NjI1MTM3ODI5MTY2MQ%3D%3D.2',
    },
  ]as Array<DialogsData>,
};

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return { ...state, newMessageBody: action.body };

    case ADD_MESSAGE:
      let body = action.newMessageBody;

      return {
        ...state,

        messages: [...state.messages, { id: 6, message: body }],
      };

    // stateCopy.messages = [...state.messages];
    // stateCopy.newMessage = "";
    // stateCopy.messages.push({ id: 6, message: newMessage });

    default:
      return state;
  }
};
type AddNewMessageBodyActionType = {
  type: typeof ADD_MESSAGE;
  newMessageBody: string;
};

export const addMassageCreator = (
  newMessageBody: any
): AddNewMessageBodyActionType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});
type UpdateNewMessageCreatorActionType = {
  type: typeof UPDATE_NEW_MESSAGE;
  body: any;
};
export const updateNewMessageCreator = (
  body: any
): UpdateNewMessageCreatorActionType => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});
export default dialogsReducer;
