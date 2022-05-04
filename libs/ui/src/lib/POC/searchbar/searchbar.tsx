import { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface SearchbarProps {
  value: string;
  placeholder: string;
  icon: IconComponentProps;
  onSearch: any;
}
const StyledSearchbar = styled('div')(({ theme }) => {
  return {
    '.searchbar-component': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      width: '100%',
      marginRight: '30px',
      height: '48px',
      backgroundColor: '#ffffff',
      '.searchbar-wrapper': {
        boxSizing: 'border-box',
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: '4px',
        overflow: 'hidden',
        padding: '12px 16px 12px 16px',
        border: '1px solid #e2e2e2',
        'searchbar-input': {
          width: '100%',
          flex: '80',
          height: '30px',
          display: 'flex',
          '.input': {
            border: 'none',
            flex: '100',
            marginRight: '22px',
            fontSize: '18px',
          },
          '.input:focus-visible': { outline: 'none' },
        },
        '.searchbar-icon': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
      },
    },
  };
});

export function Searchbar(props: SearchbarProps) {
  const [enteredString, setEnteredString] = useState(props.value);
  const searchTextChange = (event?: any) => {
    setEnteredString(event?.target.value);
    props.onSearch(enteredString);
  };
  const sendSearchString = () => {
    props.onSearch(enteredString);
  };

  // useEffect(() => {
  //   props.onSearch(enteredString);
  // }, []);

  return (
    <StyledSearchbar>
      <div className="searchbar-component">
        <div className="searchbar-wrapper">
          <div className="searchbar-input">
            <input
              className="input"
              type="text"
              placeholder={props.placeholder}
              onChange={searchTextChange}
              value={enteredString}
            />
          </div>
          <div className="searchbar-icon" onClick={sendSearchString}>
            <IconComponent
              name={props.icon.name}
              color={props.icon.color}
              label={props.icon.label}
              size={props.icon.size}
            ></IconComponent>
          </div>
        </div>
      </div>
    </StyledSearchbar>
  );
}

export default Searchbar;
