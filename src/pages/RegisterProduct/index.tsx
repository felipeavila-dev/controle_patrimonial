import { TitleArea } from '../../components/TitleArea';
import * as C from './style';
import {CategoriesDatabase} from '../../data/database';
import {ItemDatabaseType} from '../../types/DatabaseTypes';
import { v4 as uuidv4} from 'uuid';

import { GrAddCircle } from "react-icons/gr";
import React, { ChangeEvent, useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import { toast } from 'react-toastify';

export const RegisterProduct = () => {
  const {items, setItems} = useContext(Context);

  const [newItem, setNewItem] = useState<ItemDatabaseType>({
    id: uuidv4(),
    title: '',
    model: '',
    quantity: 0,
    department: '',
    category: '',
    description: '',
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewItem({...newItem, [event.target.name]: event.target.value})
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    setItems([...items, newItem]);
    toast.success('Item cadastrado com sucesso!');
    setNewItem({
      id: '',
      title: '',
      model: '',
      quantity: 0,
      department: '',
      category: '',
      description: '',
    });
  }

  return(
    <C.Container>
      <TitleArea titleIcon={<GrAddCircle size='2.5rem' />} title='Registro de itens' subtitle='Tela de cadastro de produtos'/>
      <C.Form>
          <C.InputArea className='form-floating'>
            <C.Input type="text" className="form-control" name="title" id="title" placeholder="Nome do equipamento" value={newItem.title} onChange={handleChangeInput}/>
            <C.Label htmlFor="title" >Título do equipamento</C.Label>
          </C.InputArea>
          <C.InputArea className='form-floating'>
            <C.Input type="text" className="form-control" name='model' id="model" value={newItem.model} placeholder="Modelo" onChange={handleChangeInput}/>
            <C.Label htmlFor="model" className="form-label">Modelo</C.Label>
          </C.InputArea>
          <C.InputArea className='form-floating'>
            <C.Input type="number" className="form-control" name='quantity' id="quantity" value={newItem.quantity} placeholder="Quantidade" onChange={handleChangeInput} />
            <C.Label htmlFor="quantity" className="form-label">Quantidade</C.Label>
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="category" className="form-label">Categoria do equipamento</C.Label>
            <select className="form-select" name='category' size={6} aria-label="size 3 select example" onChange={handleChangeInput} >
              {CategoriesDatabase.map((category) => (
                <option key={category.title} value={category.title}>{ category.title }</option>
              ))}
            </select>
          </C.InputArea>
          <C.InputArea className='form-floating'>
            <C.Input type="text" className="form-control" name='department' id="department" placeholder="Departamento" value={newItem.department} onChange={handleChangeInput} />
            <C.Label htmlFor="department" className="form-label">Departamento que esta utilizando o equipamento</C.Label>
          </C.InputArea>
          <C.InputArea className='form-floating'>
            <C.Input type="text" className="form-control" name='description' id="description" placeholder="Descrição" value={newItem.description} onChange={handleChangeInput} />
            <C.Label htmlFor="description" className="form-label">Observações relevantes</C.Label>
          </C.InputArea>
          <C.InputArea>
            <C.Button className='btn btn-success' onClick={handleSubmitForm}>Cadastrar</C.Button>
          </C.InputArea>
        </C.Form>
    </C.Container>
  );
}