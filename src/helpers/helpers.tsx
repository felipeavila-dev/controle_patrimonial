// import { CategoriesType, ItemDatabaseType} from '../types/DatabaseTypes';
import { ItemsDatabase } from '../data/database';


export const getProductByCategory = (category: string) => {
  const filteredItems = ItemsDatabase.filter((item) => item.category === category);
  return filteredItems.length;
}