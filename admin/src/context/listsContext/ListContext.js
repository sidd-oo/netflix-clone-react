import { ListsReducer } from "./ListsReducer";
import { createContext, useReducer } from "react";

const INTIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListsContext = createContext(INTIAL_STATE);

export const ListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListsReducer, INTIAL_STATE);

  return (
    <ListsContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
