import { useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface ChartCardProps {
  id: string;
  backgroundColor: string;
  title: string;
  titleColor: string;
  tagBackgroundColor: string;
  tagColor: string;
  tagName: string;
  icon: IconComponentProps;
}

export interface ChartDataLabel {
  label: ChartData;
}

export interface ChartData {
  id: string;
  backgroundColor: string;
  title: string;
  tagBackgroundColor: string;
  tagColor: string;
  tagName: string;
  image: any;
}
export interface IPosition {
  x: number;
  y: number;
}
const StyledCard = styled('div')(({ theme }) => {
  return {
    '&': {
      padding: '0px',
      borderRadius: '3px',
      minWidth: '220px',
      display: 'flex',
      flexDirection: 'column',
    },
  };
});

const StyledCardTitle = styled('div')(({ theme }) => {
  return {
    '&': {
      color: '#333333',
      fontWeight: '400',
      fontSize: '16px',
      marginLeft: '20px',
      marginTop: '5px',
    },
  };
});

const StyledTag = styled('div')(({ theme }) => {
  return {
    '&': { padding: '6px 12px', fontWeight: '400', fontSize: '12px' },
  };
});

const StyledText = styled('div')(({ theme }) => {
  return {
    '&': { padding: '6px 12px', fontWeight: '400', fontSize: '12px' },
  };
});

const StyledHorizontalLine = styled('div')(({ theme }) => {
  return {
    '&': {
      minWidth: '52px',
      maxWidth: '80px',
      textAlign: 'center',
      margin: '12px',
    },
  };
});

export function ChartCard(props: ChartCardProps) {
  const theme = useTheme();

  return (
    <StyledCard
      className="card flex flex-column w-13 rounded p-0"
      style={{
        backgroundColor: theme.palette.primary.main,
        minWidth: '220px',
      }}
    >
      <div className="cardRow flex flex-row p-3">
        <IconComponent
          name={props.icon.name}
          size={props.icon.size}
          color={props.icon.color}
          label={props.icon.label}
        />
        <StyledCardTitle
          className="title font-normal text-base"
          style={{
            color: theme.palette.getContrastText(theme.palette.primary.main),
          }}
        >
          {props.title}
        </StyledCardTitle>
      </div>
      <StyledHorizontalLine className="horizonatalLine"></StyledHorizontalLine>
      <StyledTag
        className="tags"
        style={{ backgroundColor: props.tagBackgroundColor }}
      >
        <StyledText className="tagText" style={{ color: props.tagColor }}>
          {props.tagName}
        </StyledText>
      </StyledTag>
    </StyledCard>
  );
}

export default ChartCard;
