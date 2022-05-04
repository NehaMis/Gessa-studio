import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { DialogTitle } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import styles from './messageWindow.module.css';
import Button from '@mui/material/Button';
import { IconComponent } from '../../POC/icon-component/icon-component';
import {useTheme} from '@mui/material'

export interface MessageWindowProps {
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  open: boolean;
  actions: { name: string; value: string; primary: boolean, handleClick?: () => void; }[];
  title: string;
  description: string;
  icon?: any;
  elevation: number;
}

export function MessageWindow({
  open,
  onClose,
  actions,
  title,
  description,
  icon,
  elevation,
}: MessageWindowProps) {
  const dslTheme = useTheme()
  return (
    <Dialog open={open} onClose={onClose} sx={{'& .MuiPaper-elevation':{
      position:"absolute", top:0
    }}}>
      <Box className={styles['messageWindow']}>
        <Box className={styles['closeBtn']} >
          <IconComponent name="close_black_24dp" label="close" size={28} handleClick={onClose}/>
        </Box>
        <Box sx={{mb:4.5}}className={styles['message']}>
        {icon ?<Box className={styles['icon']}>  {icon } </Box>: null}
          <Box className={styles['messageBody']}>
            <DialogTitle sx={{ padding: '8px 14px', color:dslTheme.palette.primary.main }}>
              {title ? title : null}
            </DialogTitle>
            <Box component="p" sx={{color:dslTheme.palette.text.primary}} className={styles['description']}>
              {description ? description : null}
            </Box>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: '10px' }} />
        <DialogActions className={styles['actions']}>
          {actions
            ? actions.map((action, index) => (
                <Button
                onClick={(e)=>{action.handleClick && action.handleClick()}}
                  variant={action.primary ? 'contained' : 'outlined'}
                  style={
                    actions.length - 1 !== index ? { marginRight: '10px' } : {}
                  }
                >
                  {action.name}
                </Button>
              ))
            : null}
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default MessageWindow