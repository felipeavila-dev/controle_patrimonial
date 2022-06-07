type ItemType = {
  id: string;
  title: string;
  model: string;
  quantity: number;
  category: string;
}

export const ItemsDatabase: ItemType[] = [
  {
    id: '1',
    title: 'Notebook Dell i3',
    model: 'Inspiron 5555',
    quantity: 3,
    category: 'Notebook',
  }
];

export const CategoriesDatabase = [
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