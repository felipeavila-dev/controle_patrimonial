import { TitleArea } from '../../components/TitleArea';
import { GrCompliance } from "react-icons/gr";
import * as C from './style';
import React, { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import { filterByText, filterByCategory, filterByDepartment } from '../../helpers/helpers';
import { ItemDatabaseType } from '../../types/DatabaseTypes';
import { ReportResults } from '../../components/ReportResults';

export const Reports = () => {
  const { categories, items } = useContext(Context);
  const [type, setType] = useState('');
  const [filteredItems, setFilteredItems] = useState<ItemDatabaseType[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    switch(type) {
      case 'title':
        setFilteredItems(filterByText(items, inputText));
        break;
      case 'category':
        setFilteredItems(filterByCategory(items, inputText));
        break;
      case 'department':
        setFilteredItems(filterByDepartment(items, inputText));
        break;
      default:
        setFilteredItems(items);
        break;
    }
  };

  return (
    <C.Container>
      <TitleArea titleIcon={ <GrCompliance size="2.5rem" /> } title="Página de relatórios" subtitle="Selecione as informações de acordo com o relatório desejado" />
      <C.SelectType>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="reportType" id="title" value="title" onChange={(e) => setType(e.target.value)}/>
        <label className="form-check-label" htmlFor="title">
          Título
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="reportType" id="category" value="category" onChange={(e) => setType(e.target.value)}/>
        <label className="form-check-label" htmlFor="category">
          Categoria
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="reportType" id="department" value="department" onChange={(e) => setType(e.target.value)}/>
        <label className="form-check-label" htmlFor="department">
          Departamento
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="reportType" id="all" value="all" onChange={(e) => setType(e.target.value)}/>
        <label className="form-check-label" htmlFor="all">
          Geral
        </label>
      </div>
        
      </C.SelectType>
      
      <C.Form>
        <div className="form-group">
          { type === 'title' &&
            <input className="form-control"
            type="text" name={type}
            placeholder="Digite o título de um item desejado"
            onChange={ (e) => setInputText(e.target.value) }
            />
          }
          { type === 'category' &&
           <>
            <select name="type" id="type" className="form-control" onChange={ (e) => setInputText(e.target.value) }>
              <option value=''>Selecione uma categoria</option>
              { categories.map((categorie, index) => (
                <option key={ index } value={categorie.title}>{ categorie.title }</option>
              ))}
            </select>
           </>
          }
          { type === 'department' &&  <input className="form-control" type="text" name={type} placeholder="Digite o departamento desejado" onChange={ (e) => setInputText(e.target.value)} /> }
        </div>
        <C.Button className="btn btn-success" onClick={ handleSubmit }>Buscar</C.Button>
      </C.Form>

      { filteredItems.length > 0 &&
        <ReportResults allItems={ filteredItems }/>
      }
      { filteredItems.length === 0 &&
        <h2>Não foi localizado nenhum resultado!</h2>
      }
    </C.Container>
  );
}