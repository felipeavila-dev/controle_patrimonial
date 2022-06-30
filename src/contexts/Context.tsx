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
  itemDetail: ItemDatabaseType;
  setItemDetail: React.Dispatch<any>;
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
  userEmail: string;
  setUserEmail: React.Dispatch<any>;
}

const InitialState = {
  categories: [],
  setCategories: () => null,
  items: [],
  setItems: () => null,
  itemQuantity: [],
  setItemQuantity: () => null,
  itemDetail:{
    id: '',
    title: '',
    model: '',
    quantity: -1,
    department: '',
    category: '',
    description: ''
  },
  setItemDetail: () => null,
  showModal: false,
  setShowModal: () => null,
  userEmail: '',
  setUserEmail: () => null,
}

export const Context = createContext<initialStateType>(InitialState);

export const ContextProvider = ({children}: ChildrenType) => {
  const [categories, setCategories] = useState(CategoriesDatabase);
  const [items, setItems] = useState(ItemsDatabase);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [itemDetail, setItemDetail] = useState(InitialState.itemDetail);
  const [showModal, setShowModal] = useState(InitialState.showModal);
  const [userEmail, setUserEmail] = useState(InitialState.userEmail);

  const contextState = {
    categories,
    setCategories,
    items,
    setItems,
    itemQuantity,
    setItemQuantity,
    itemDetail,
    setItemDetail,
    showModal,
    setShowModal,
    userEmail,
    setUserEmail,
  }

    return (
      <Context.Provider value={contextState}>
        {children}
      </Context.Provider>
    )
}