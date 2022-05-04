import styled from '@emotion/styled';
import { Avatar, Typography } from '@mui/material';
import CustomChip from '../../Atoms/custom-chip/chip';
import { IOptions } from '../table-header-cell/table-header-cell';
import './table-cell.css';
import { useTheme } from '@mui/system';

export interface IAvatar {
  value: string;
  path: string;
}
export interface IStatus {
  color: string;
  value?: string;
}
export interface IText {
  value: string;
}

/* eslint-disable-next-line */
export interface ITableCellComponentProps {
  text: IText;
  primaryAvatar?: IAvatar;
  leftAvatar?: IAvatar;
  rightAvatar?: IAvatar;
  status?: IStatus;
  tags?: IOptions[];
  cellClicked: (event: any) => void;
}

const StyledTableCellComponent = styled('div')(({ theme }) => {
  return {
    // '&': {
    //   backgroundColor:
    //     theme.palette.mode === 'light' ? '' : theme.palette.background.default,
    // },
  };
});

export function TableCellComponent(props: ITableCellComponentProps) {
  const theme: any = useTheme();
  return (
    <StyledTableCellComponent>
      <div
        className="table-cell-container"
        onClick={(e) => props.cellClicked(props)}
      >
        {props.primaryAvatar && (
          <Avatar
            alt={props.primaryAvatar.value}
            src={props.primaryAvatar.path}
            sx={{ height: 24, width: 24, fontSize: 16 }}
          />
        )}
        {props.leftAvatar && (
          <Avatar
            alt={props.leftAvatar.value}
            src={props.leftAvatar.path}
            sx={{ height: 24, width: 24, fontSize: 16 }}
          />
        )}
        {props.status && props.status.color && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                backgroundColor: props.status.color,
              }}
            ></div>
            <Typography
              sx={{
                position: 'relative',
                fontSize: 14,
                fontWeight: 400,
                color:
                  theme.palette.mode === 'light'
                    ? '#594e4e'
                    : theme.palette.text.primary,
              }}
            >
              {props.status.value}
            </Typography>
          </div>
        )}
        {props.text && (
          <Typography
            color="#231f1f"
            sx={{
              position: 'relative',
              fontSize: 14,
              fontWeight: 400,
              color:
                theme.palette.mode === 'light'
                  ? '#594e4e'
                  : theme.palette.text.primary,
            }}
          >
            {props.text.value}
          </Typography>
        )}
        {props.rightAvatar && (
          <Avatar
            alt={props.rightAvatar.value}
            src={props.rightAvatar.path}
            sx={{ height: 24, width: 24, fontSize: 16 }}
          />
        )}
        {props.tags &&
          props.tags.length &&
          props.tags.map((element, index) => {
            return (
              <CustomChip key={index} label={element.label} color="primary" />
            );
          })}
      </div>
    </StyledTableCellComponent>
  );
}

export default TableCellComponent;
