import Chip from '@mui/material/Chip';
import './chip.css';
import Box from '@mui/material/Box';

export interface ChipProps {
  /**
   * a node to be rendered in the special component.
   */

  variant?: any;
  label?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  rightIcon?: any;
  leftIcon?: any;
  rightIconClick?: () => void;
  leftIconClick?: () => void;
}

export default function CustomChip({
  label,
  variant,
  color,
  rightIcon,
  rightIconClick,
  leftIconClick,
  leftIcon,
}: ChipProps) {
  return (
    <Chip
      label={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ cursor: 'pointer' }} onClick={leftIconClick}>
            {leftIcon}
          </Box>

          <Box sx={{ padding: '4px' }}> {label} </Box>

          <Box sx={{ cursor: 'pointer' }} onClick={rightIconClick}>
            {rightIcon}
          </Box>
        </Box>
      }
      variant={variant}
      color={color}
    />
  );
}
