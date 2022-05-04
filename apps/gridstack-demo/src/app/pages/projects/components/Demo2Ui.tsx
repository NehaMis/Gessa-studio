import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import Grid from './grid';
import GridCard from './gridCards';
import Widgets, { IComponent, IWidgetType, WIDGETS_V1 } from './widgets';

export interface Demo2Props {}

export const Demo2 = (props: Demo2Props) => {
  const [widgets, setWidgets] = useState([]);

  // const getypename = (data: any) => {
  //   if (data.type) {
  //     return WIDGETS[data.type];
  //   }
  //   return;
  // };

  const getData = (data: IWidgetType): IComponent => {
    const index = WIDGETS_V1.findIndex(
      (value: IWidgetType) => value.type === data.type
    );
    if (index !== -1) {
      return WIDGETS_V1[index].data;
    } else {
      return {
        component: () => <div> No Data Found</div>,
        label: 'noDataFound',
        w: 4,
        h: 4,
      };
    }
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-row justify-start items-">
        <div className="  border rounded flex flex-col justify-start items-center">
          <Drawer
            style={{ flexShrink: 0 }}
            variant="permanent"
            PaperProps={{
              style: {
                width: 250,
                borderLeft: '1px solid rgba(255,255,255,0.12)',
                // top: '50px',
                height: 'calc(100vh)',
              },
            }}
            anchor="right"
          >
            <div className="flex flex-row"></div>
            <Widgets />
          </Drawer>
        </div>
        <div className="w-full border rounded overflow-y-auto">
          <Grid setWidgets={setWidgets}>
            {(actions: any) =>
              widgets.map((widget: IWidgetType) => {
                // const { component: Widget, label } = getypename(widget)
                // widget.type === 'barchart'
                //   ? WIDGETS.barchart
                //   : widget.type === 'grid'
                //   ? WIDGETS.grid
                //   : widget.type === 'map'
                //   ? WIDGETS.map
                //   : WIDGETS.chartCard;
                const { component: Widget, label } = getData(widget);
                return (
                  Widget && (
                    <GridCard
                      key={Math.random.toString()}
                      actions={actions}
                      title={label}
                      {...widget}
                    >
                      <Widget />
                    </GridCard>
                  )
                );
              })
            }
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
