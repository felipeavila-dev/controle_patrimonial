// import { CategoriesType, ItemDatabaseType} from '../types/DatabaseTypes';
// import { ItemsDatabase } from '../data/database';
import {ItemDatabaseType} from '../types/DatabaseTypes';


export const getProductQuantityByCategory = (items:ItemDatabaseType[] , category: string) => {
  const filteredItems = items.filter((item) => item.category === category);
  return filteredItems.length;
}

export const getProductByCategory = (category: string, items: ItemDatabaseType[]) => {
  const products = items.filter((product) => product.category === category);
  return products;
}

export const getProductById = (id: string, items: ItemDatabaseType[]) => {
  const product = items.find((currentProduct) => currentProduct.id === id);
  return product;
}

// REPORTS

export const filterByText = (items: ItemDatabaseType[] | [], word: string) => {
    const filteredItems = items.filter((product) => product.title.toLowerCase().includes(word.toLowerCase()));
    return filteredItems;
}

export const filterByCategory = (items: ItemDatabaseType[], word: string) => {
  const filteredItems = items.filter((product) => product.category.toLowerCase() === word.toLowerCase());
  return filteredItems;
}

export const filterByDepartment = (items: ItemDatabaseType[], word: string) => {
  const filteredItems = items.filter((product) => product.department.toLowerCase() === word.toLowerCase());
  return filteredItems;
}