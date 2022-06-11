import { CategoriesType, ItemDatabaseType} from '../types/DatabaseTypes';

// ITEMS
export const ItemsDatabase: ItemDatabaseType[] = [
  {
    id: '1',
    title: 'Notebook Dell i3',
    model: 'Inspiron 5555',
    quantity: 3,
    category: 'Notebook',
  },
  {
    id: '2',
    title: 'Notebook Dell i5',
    model: 'Inspiron 5555',
    quantity: 3,
    category: 'Notebook',
  },
  {
    id: '3',
    title: 'Notebook Dell i3',
    model: 'Inspiron 5555',
    quantity: 3,
    category: 'Notebook',
  },
  {
    id: '4',
    title: 'Lenovo Thinkcentre i3',
    model: 'Thinkcentre 1111',
    quantity: 3,
    category: 'Desktop',
  },
  {
    id: '5',
    title: 'HP Laserjet m1212',
    model: 'Laserjet m1212',
    quantity: 1,
    category: 'Impressora',
  },
  {
    id: '6',
    title: 'HP Laserjet m147',
    model: 'Laserjet m147',
    quantity: 1,
    category: 'Impressora',
  },
  {
    id: '7',
    title: 'Nobreak',
    model: 'UPS',
    quantity: 1,
    category: 'Outros',
  },
  {
    id: '8',
    title: 'Nobreak',
    model: 'UPS',
    quantity: 1,
    category: 'Outros',
  },
];

// CATEGORIES
export const CategoriesDatabase: CategoriesType[] = [
  {
    title: 'Notebook',
    color: '#b0d66f'
  },
  {
    title: 'Desktop',
    color: '#db8ad3'
  },
  {
    title: 'Impressora',
    color: '#a2dcef',
  },
  {
    title: 'Outros',
    color: '#d8ab7d',
  }
];