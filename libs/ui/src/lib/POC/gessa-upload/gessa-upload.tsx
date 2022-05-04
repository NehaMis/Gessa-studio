import React, { useState, useRef } from 'react';

import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';
import { Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface GessaUploadProps {
  leftIcon: IconComponentProps;
  text: string;
  rightIcon: IconComponentProps;
}

const StyledGessaUpload = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export function GessaUpload(props: GessaUploadProps) {
  const [image, setImage] = useState('');
  const inputFile = useRef(null);

  const handleFileUpload = (e: any) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      const parts = filename.split('.');
      const fileType = parts[parts.length - 1];

      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    if (inputFile && inputFile.current) {
      // inputFile.current.click();
    }
  };

  return (
    <StyledGessaUpload>
      <div className="box-border relative flex flex-col h-14 border border-dashed justify-center">
        <div className="relative flex flex-row justify-between items-center gap-2 px-4">
          {props.leftIcon && (
            <div className="flex flex-row justify-start items-center">
              <div className="flex flex-col " onClick={onButtonClick}>
                <IconComponent
                  name={props.leftIcon.name}
                  color={props.leftIcon.color}
                  size={props.leftIcon.size}
                  label={props.leftIcon.label}
                />
              </div>
              <div>
                <input
                  style={{ display: 'none' }}
                  ref={inputFile}
                  onChange={handleFileUpload}
                  type="file"
                />
                {!image && (
                  <Typography variant="body1">
                    Drag & Drop or{' '}
                    <span onClick={onButtonClick} style={{ color: 'red' }}>
                      Browse
                    </span>
                  </Typography>
                )}

                {/* {props.text} */}
              </div>
            </div>
          )}
          {props.rightIcon && (
            <div className="flex flex-row ">
              <IconComponent
                name={props.rightIcon.name}
                color={props.rightIcon.color}
                size={props.rightIcon.size}
                label={props.rightIcon.label}
              />
            </div>
          )}
        </div>
      </div>
    </StyledGessaUpload>
  );
}

export default GessaUpload;
