import { useTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import ReactForm from './reactForm';
import React, { useState } from 'react';
export interface sidebarInterface {
  formdata: any;
  validationSchema: any;
  getUpdatedFormData: any;
  closeDrawerSidebar: any;
}

const Sidebar = (props: sidebarInterface) => {
  const theme = useTheme();

  const [formData, setFormData] = useState();
  const getNewFormDataEvent = (data: any) => {
    props.getUpdatedFormData(data);
  };

  const closeDrawerEvent = (data: any) => {
    props.closeDrawerSidebar(data);
  };

  return (
    <div
      className="relative shadow-lg p-4 rounded w-80 h-full"
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div className=" relative">
        <ReactForm
          formData={props.formdata}
          validationSchema={props.validationSchema}
          getNewFormData={getNewFormDataEvent}
          closeDrawer={closeDrawerEvent}
        />
      </div>
    </div>
  );
};

export default Sidebar;
