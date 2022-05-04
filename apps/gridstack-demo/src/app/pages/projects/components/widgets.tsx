import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Card1, ChartCard, Datagrid } from '@gessa/ui';
import BarChart from 'libs/ui/src/lib/Molecules/bar-chart/bar-chart';
import MapComponent from 'libs/ui/src/lib/Molecules/map-component/map-component';
// import { BarChartComponent } from '@iauro/soulify';
import themes from './../../../../theme/index';
export interface IComponent {
  component: any;
  label: string;
  w?: number;
  h?: number;
  x?: number;
  y?: number;
}
export interface IWidgetType {
  type: string;
  data: IComponent;
}

const iconm = {
  name: 'Menu-Mysql',
  size: 40,
  color: '#ff00ff',
  label: 'Menu-Mysql',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params: any) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const x = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const y = [10, 20, 30, 40, 50, 60, 70];
const barchartcomponent = {
  height: 0,
  width: 0,
  data: {
    labels: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
        ],
        borderColor: [
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
          themes.default.palette.custom.form1,
        ],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
};

export const WIDGETS_V1: IWidgetType[] = [
  {
    type: 'grid',
    data: {
      // component: () => <div style={{ textAlign: 'center' }}>GRID</div>,
      component: () => <Datagrid columns={columns} rows={rows}></Datagrid>,
      label: 'Grid',
      w: 4,
      h: 4,
      x: 4,
      y: 10,
    },
  },
  {
    type: 'barchart',
    data: {
      component: () => <BarChart x={x} y={y}></BarChart>,
      label: 'BarChart',
      w: 4,
      h: 4,
    },
  },
  {
    type: 'map',
    data: {
      component: () => <MapComponent></MapComponent>,
      label: 'map',
      w: 4,
      h: 4,
      x: 10,
      y: 40,
    },
  },
  // {
  //   type: 'lineChart',
  //   data: {
  //     component: () => (
  //       <BarChartComponent
  //         height={barchartcomponent.height.toString()}
  //         width={barchartcomponent.width.toString()}
  //         data={barchartcomponent.data}
  //         stacked={false}
  //         horizontal={false}
  //       ></BarChartComponent>
  //     ),
  //     label: 'lineChart',
  //     w: 8,
  //     h: 8,
  //     x: 20,
  //     y: 40,
  //   },
  // },

  // {
  //   type: 'lineChart',
  //   data: {
  //     component: () => (
  //       <DoughnutChart
  //         height={barchartcomponent.height.toString()}
  //         width={barchartcomponent.width.toString()}
  //         data={barchartcomponent.data}
  //         stacked={false}
  //         horizontal={false}
  //       ></BarChartComponent>
  //     ),
  //     label: 'lineChart',
  //     w: 8,
  //     h: 8,
  //     x: 20,
  //     y: 40,
  //   },
  // },

  {
    type: 'chartCard',
    data: {
      component: () => (
        <Card1
          leftAccent={'#ff0000'}
          icon={{
            name: 'Menu-Mysql',
            size: 40,
            color: '#000000',
            label: 'Menu-Mysql',
          }}
          text={'Mysql demo'}
        />
      ),
      label: 'chartcard',
      w: 4,
      h: 4,
    },
  },
];
// export const WIDGETS = {
//   grid: {
//     // component: () => <div style={{ textAlign: 'center' }}>GRID</div>,
//     component: () => <Datagrid columns={columns} rows={rows}></Datagrid>,
//     label: 'Grid',
//     w: 4,
//     h: 4,
//   },
//   barchart: {
//     component: () => <BarChart x={x} y={y}></BarChart>,
//     label: 'BarChart',
//     w: 4,
//     h: 4,
//   },
//   map: {
//     component: () => <MapComponent></MapComponent>,
//     label: 'map',
//     w: 4,
//     h: 4,
//     x: 10,
//     y: 40,
//   },
//   chartCard: {
//     component: () => (
//       <Card1
//         leftAccent={'#ff0000'}
//         icon={{
//           name: 'Menu-Mysql',
//           size: 40,
//           color: '#000000',
//           label: 'Menu-Mysql',
//         }}
//         text={'Mysql demo'}
//       />
//     ),
//     label: 'chartcard',
//     w: 4,
//     h: 4,
//   },
// };

export default function Widgets() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* {Object.entries(WIDGETS).map(([key, value]) => (
        <div
          key={key}
          data-type={key}
          className="droppable grid-stack-item w-full"
          gs-h={value.h}
          gs-w={value.w}
        >
          {value.label}
        </div>
      ))} */}
      {WIDGETS_V1.map((widget: IWidgetType) => (
        <div
          key={widget.type}
          data-type={widget.type}
          className="droppable grid-stack-item w-full"
          gs-h={widget.data.h}
          gs-w={widget.data.w}
        >
          {widget.data.label}
        </div>
      ))}
    </div>
  );
}
