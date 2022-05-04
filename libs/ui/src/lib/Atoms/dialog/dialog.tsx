import React from 'react';
import { Dialog as DialogBox } from '@mui/material';

export interface DialogProps {
  open: boolean;
  children: React.ReactNode;
  fullScreen?: boolean;
  fullWidth: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose?: (event: any, reason: string) => void;
}

export function Dialog({
  open,
  children,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose,
}: DialogProps) {
  return (
    <DialogBox
      fullWidth={fullWidth}
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
    >
      {children}
    </DialogBox>
  );
}

export default Dialog;
