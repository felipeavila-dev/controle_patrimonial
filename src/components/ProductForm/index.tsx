import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../../contexts/Context';
import {CategoriesDatabase} from '../../data/database';
import { FormModal } from '../FormModal';
import * as C from './style';

export const ProductForm = () => {
  const {itemDetail, setItemDetail, items, setItems, setShowModal} = useContext(Context);

  const [disableForm, setDisableForm] = useState(true);

  const handleEditForm = (event: React.FormEvent) => {
    event.preventDefault();
    setDisableForm(false);
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setItemDetail({...itemDetail, [event.target.name]: event.target.value});
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    items.forEach((item) => {
      if(item.id === itemDetail.id) {
       item.id = itemDetail.id;
       item.title = itemDetail.title;
       item.model = itemDetail.model;
       item.quantity = itemDetail.quantity;
       item.department = itemDetail.department;
       item.category = itemDetail.category;
       item.description = itemDetail.description;
      }
    });
    toast.success('Dados alterados com sucesso!', {
      autoClose: 3000,
    });
    setShowModal(false);
  }

  return(
   <C.Container>
      <FormModal>
        <span className="close-modal" onClick={() => setShowModal(false)}>❌</span>
       <C.Form>
          <C.InputArea>
            <C.Label htmlFor="title" className="form-label">Título do equipamento</C.Label>
            <C.Input type="text" className="form-control" name="title" id="title" value={itemDetail.title} disabled={disableForm} onChange={handleChangeInput}/>
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="model" className="form-label">Modelo</C.Label>
            <C.Input type="text" className="form-control" name='model' id="model" value={itemDetail.model} disabled={disableForm} onChange={handleChangeInput}/>
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="quantity" className="form-label">Quantidade</C.Label>
            <C.Input type="number" className="form-control" name='quantity' id="quantity" value={itemDetail.quantity} disabled={disableForm} onChange={handleChangeInput} />
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="category" className="form-label">Categoria do equipamento</C.Label>
            <select className="form-select" name='category' size={6} disabled={disableForm} onChange={handleChangeInput} >
              {CategoriesDatabase.map((category) => {
                if(category.title === itemDetail.category) {
                 return <option className='teste' key={category.title} selected value={category.title} >{ category.title }</option>
                }
                return <option key={category.title} value={category.title}>{ category.title }</option>
              })}
            </select>
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="department" className="form-label">Departamento que esta utilizando o equipamento</C.Label>
            <C.Input type="text" className="form-control" name='department' id="department" disabled={disableForm} onChange={handleChangeInput} />
          </C.InputArea>
          <C.InputArea>
            <C.Label htmlFor="description" className="form-label">Observações relevantes</C.Label>
            <C.Input type="text" className="form-control" name='description' id="description" disabled={disableForm} onChange={handleChangeInput} />
          </C.InputArea>
          <C.InputArea>
            <C.Button className='btn btn-warning' onClick={handleEditForm}>Editar</C.Button>
            <C.Button className='btn btn-success' disabled={disableForm} onClick={handleSubmitForm}>Salvar</C.Button>
          </C.InputArea>
        </C.Form>
      </FormModal>
   </C.Container>
  );
}