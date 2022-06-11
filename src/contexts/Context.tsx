import { createContext, useState } from "react";
import {CategoriesDatabase, ItemsDatabase} from '../data/database';
import {ChildrenType} from '../types/ChildrenType';
import {CategoriesType, ItemDatabaseType} from '../types/DatabaseTypes';

type initialStateType = {
  categories: CategoriesType[];
  setCategories: React.Dispatch<any>;
  items: ItemDatabaseType[];
  setItems: React.Dispatch<any>;
  itemQuantity: any[];
  setItemQuantity: React.Dispatch<any>;
}

const InitialState = {
  categories: [],
  setCategories: () => null,
  items: [],
  setItems: () => null,
  itemQuantity: [],
  setItemQuantity: () => null,
}

export const Context = createContext<initialStateType>(InitialState);

export const ContextProvider = ({children}: ChildrenType) => {
  const [categories, setCategories] = useState(CategoriesDatabase);
  const [items, setItems] = useState(ItemsDatabase);
  const [itemQuantity, setItemQuantity] = useState([]);

  const contextState = {
    categories,
    setCategories,
    items,
    setItems,
    itemQuantity,
    setItemQuantity
  }

    return (
      <Context.Provider value={contextState}>
        {children}
      </Context.Provider>
    )
}