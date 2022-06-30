import { ItemDatabaseType } from '../../types/DatabaseTypes';
import { GrPrint } from "react-icons/gr";
import * as C from './style';
import React, { useRef } from 'react';

type Props = {
  allItems: ItemDatabaseType[];
}

export const ReportResults = ({allItems}: Props) => {
  const tableRef = useRef(null);


const handleExport = () => {
  const table = document.getElementsByTagName('table');
}

  return (
    <C.Container>
      <C.PrinterIcon>
        <span>Exportar relatório</span>
        <p><GrPrint size="2.5rem" onClick={ handleExport }/></p>
      </C.PrinterIcon>
      <C.Table className="table" ref={tableRef}>
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
        <tbody>
          { allItems.map((item, index) => (
            <tr key={ index }>
              <th scope="row">{index}</th>
                <td>{item.title}</td>
                <td>{item.model}</td>
                <td>{item.quantity}</td>
                <td>{item.department}</td>
                <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  );
}