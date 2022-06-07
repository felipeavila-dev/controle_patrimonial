import { createContext } from "react";
import {CategoriesDatabase, ItemsDatabase} from '../data/database';
import {ChildrenType} from '../types/ChildrenType';

const InitialState = {
  CategoriesDatabase,
  ItemsDatabase,
}

export const Context = createContext(InitialState);

export const ContextProvider = ({children}: ChildrenType) => {
    return (
      <Context.Provider value={InitialState}>
        {children}
      </Context.Provider>
    )
}