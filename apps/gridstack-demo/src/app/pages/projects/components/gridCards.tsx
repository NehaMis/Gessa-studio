import { IconComponent } from '@gessa/ui';
import { useEffect, useRef, useState } from 'react';

export default function GridCard({
  id,
  title: initialTitle,
  w,
  h,
  x,
  y,
  actions,
  children,
}: any) {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(true);
  const [title, setTitle] = useState(
    initialTitle || 'Double click to change title'
  );

  useEffect(() => {
    actions.handleRemove(ref.current, false);
    actions.handleAdd(ref.current);
  }, []);

  const handleToggle = (flag: any) => {
    setToggle(flag);
    actions.handleEnableMove(flag);
  };

  return (
    <div
      ref={ref}
      id={`${id}`} // convert to string
      className="grid-stack-item"
      gs-w={w}
      gs-h={h}
      gs-x={x}
      gs-y={y}
    >
      <div className="grid-stack-item-content">
        <header>
          {toggle ? (
            <h2
              title="Double click to change title"
              onDoubleClick={() => handleToggle(false)}
            >
              {title}
            </h2>
          ) : (
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Escape') {
                  handleToggle(true);
                  event.preventDefault();
                  event.stopPropagation();
                }
              }}
              onBlur={() => handleToggle(true)}
            />
          )}

          <button
            title="Delete widget"
            onClick={() => {
              actions.handleRemove(ref.current);
            }}
          >
            <IconComponent
              {...{
                name: 'Close',
                color: '#727cad',
                size: 25,
                label: 'Close',
              }}
            ></IconComponent>
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
