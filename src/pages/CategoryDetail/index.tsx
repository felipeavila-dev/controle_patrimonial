import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TitleArea } from "../../components/TitleArea";
import { GrDatabase } from "react-icons/gr";
import { Context } from "../../contexts/Context";
import {getProductByCategory} from '../../helpers/helpers';
import { ItemDatabaseType } from "../../types/DatabaseTypes";
import { ProductDetail } from "../ProductDetail";
import * as C from './style';

export const CategoryDetail = (props: any) => {
  const params = useParams();

  const { itemDetail, setItemDetail, showModal, setShowModal, items} = useContext(Context);
  
  const [allItems, setAllItems] = useState<ItemDatabaseType[]>([]);

  useEffect(() => {
    const currentItems = getProductByCategory(String(params.id), items);
    setAllItems(currentItems);
  }, [showModal]);

  const handleSelectItem = (item: ItemDatabaseType) => {
    setItemDetail(item);
    setShowModal(true);
  }

  return(
    <C.Container>
      <TitleArea titleIcon={<GrDatabase size='2.5rem' />} title={`${params.id}`} subtitle={`Listagem de itens da categoria ${ params.id }`}/>
      <C.TableArea>
        { allItems.length > 0 &&
          <table className="table table-responsive table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Modelo</th>
              <th>Quantidade</th>
              <th>Setor</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {allItems.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.title}</td>
                <td>{item.model}</td>
                <td>{item.quantity}</td>
                <td>{item.department}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleSelectItem(item) }>
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </C.TableArea>

      {showModal && itemDetail && 
        <ProductDetail />
      }

      <C.BackButton>
        <Link to="/">Voltar</Link>
      </C.BackButton>
    </C.Container>
  );
}