import React, { useState, useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
const Item = ({ id }: any) => <div>I am item: {id}</div>;

const ControlledExample = () => {
  const { useState, useEffect, createRef, useRef } = React;
  const [items, setItems] = useState<any>([{ id: 'item-1' }, { id: 'item-2' }]);

  const ControlledStack = ({ items, addItem }: any) => {
    const refs = useRef<any>({});
    const gridRef = useRef<any>();

    if (Object.keys(refs.current).length !== items.length) {
      items.forEach(({ id }: any) => {
        refs.current[id] = refs.current[id] || createRef();
      });
    }

    useEffect(() => {
      gridRef.current =
        gridRef.current ||
        GridStack.init(
          {
            float: true,
          },
          '.controlled'
        );
      const grid = gridRef.current;
      grid.batchUpdate();
      grid.removeAll(false);
      items.forEach(({ id }: any) => grid.makeWidget(refs.current[id].current));
      grid.commit();
    }, [items]);

    return (
      <div>
        <button onClick={addItem}>Add new widget</button>
        <div className={`grid-stack controlled`}>
          {items.map((item: any, i: any) => {
            return (
              <div
                ref={refs.current[item.id]}
                key={item.id}
                className={'grid-stack-item'}
              >
                <div className="grid-stack-item-content">
                  <Item {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <ControlledStack
      items={items}
      addItem={() => setItems([...items, { id: `item-${items.length + 1}` }])}
    />
  );
};

const UncontrolledExample = () => {
  const gridRef = useRef<any>();

  const [state, setState] = useState({
    count: 0,
    info: '',
    items: [
      { x: 2, y: 1, h: 2 },
      { x: 2, y: 4, w: 3 },
      { x: 4, y: 2 },
      { x: 3, y: 1, h: 2 },
      { x: 0, y: 6, w: 2, h: 2 },
    ],
  });
  gridRef.current =
    gridRef.current ||
    GridStack.init(
      {
        float: true,
        cellHeight: '70px',
        minRow: 1,
      },
      '.uncontrolled'
    );

  const grid = gridRef.current;

  useEffect(() => {
    gridRef.current =
      gridRef.current ||
      GridStack.init(
        {
          float: true,
          cellHeight: '70px',
          minRow: 1,
        },
        '.uncontrolled'
      );

    const grid = gridRef.current;
    //
  }, []);

  const dridDragStop = () => {
    grid.on('dragstop', (event: any, element: any) => {
      const node = element.gridstackNode;
      setState((prevState) => ({
        ...prevState,
        info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
      }));

      // eslint-disable-next-line prefer-const
      let timerId;
      window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          info: '',
        }));
      }, 2000);
    });
  };

  const gridDragStart = () => {
    grid.on('dragstart', function (event: any, el: any) {
      const node = el.gridstackNode;
      const x = el.getAttribute('gs-x'); // verify node (easiest) and attr are the same
      const y = el.getAttribute('gs-y');
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          const grid = gridRef.current;
          const node: any = state.items[state.count] || {
            x: Math.round(12 * Math.random()),
            y: Math.round(5 * Math.random()),
            w: Math.round(1 + 3 * Math.random()),
            h: Math.round(1 + 3 * Math.random()),
          };
          node.id = node.content = String(state.count);
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          }));
          grid.addWidget(node);
        }}
      >
        Add Widget
      </button>
      <div>{JSON.stringify(state)}</div>
      <section
        className="grid-stack uncontrolled"
        onDragStart={gridDragStart}
      ></section>
    </div>
  );
};

/**
 * Demo component
 * */

const Demo = () => {
  return <UncontrolledExample />;
};

export default Demo;
