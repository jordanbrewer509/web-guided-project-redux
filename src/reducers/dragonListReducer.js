import { ADD_MEMBER, UPDATE_NEW_MEMBER } from "../actions/dragonListActions";

export const initialState = {
    appName: "Redux Test",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MEMBER:
      return {
        ...state,
        newMember: action.payload
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      };
    default:
      return state;
  }
};

export default dragonListReducer;