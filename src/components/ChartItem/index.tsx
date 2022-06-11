import { Chart } from 'react-google-charts';
import * as C from './style';

export const ChartItem = (props: any) => {
  return (
    <C.Container>
      <Chart
        chartType={props.type}
        data={props.data}
        options={props.options}
      />
    </C.Container>
  );
}