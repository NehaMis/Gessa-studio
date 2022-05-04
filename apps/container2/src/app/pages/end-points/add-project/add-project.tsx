import Navbar2 from '../../../components/navbar2/navbar2';
import AddProjectForm from './add-project-form';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import { addNewProject } from 'apps/container2/src/store/projectData';

/* eslint-disable-next-line */
export interface AddProjectProps {}

export function AddProject(props: AddProjectProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tempFormData = useSelector((state: any) => state.project);

  const [submitForm, submitFormHandler] = useState();

  const handleSubmittedForm = (data: any) => {
    const payload = {
      key: 'tempForm',
      value: [{ ...data, id: Math.random().toString() }],
    };
    const newData = JSON.parse(JSON.stringify(tempFormData));
    newData.tempData = [];
    newData.tempData.push(payload);
    dispatch(addNewProject(newData));
  };

  const addNewProjectApi = async (currentProject: any) => {
    const response = await axios.post('/api/project', {
      params: currentProject,
    });
    const data = await response.data;
    return data;
  };
  const formData3 = [
    {
      title: 'Add Pipeline',
      form: [
        {
          type: 'text',
          value: [''],
          label: 'Name',
          name: 'name',
          placeholder: 'Enter Name',
          options: [],
          required: true,
          validation: {
            name: 'name',
            required: true,
            errorMessage: 'Name is required',
            min: 0,
            max: 0,
          },
        },

        {
          type: 'textarea',
          value: [''],
          label: 'Description',
          name: 'description',
          placeholder: 'Enter Description',
          options: [],
          required: true,
          validation: {
            name: 'description',
            required: true,
            errorMessage: 'Description required',
            min: 0,
            max: 0,
          },
        },
      ],
    },
  ];
  const formData2 = [
    {
      title: 'Add Project',
      form: [
        {
          type: 'text',
          value: [''],
          label: 'Name',
          name: 'name',
          placeholder: 'Enter Name',
          options: [],
          required: true,
          validation: {
            name: 'name',
            required: true,
            errorMessage: 'Name is required',
            min: 0,
            max: 0,
          },
        },

        {
          type: 'text',
          value: [''],
          label: 'Tags',
          name: 'tags',
          placeholder: 'Enter Tags',
          options: [],
          required: true,
          validation: {
            name: 'tags',
            required: true,
            errorMessage: 'Tags required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'textarea',
          value: [''],
          label: 'Description',
          name: 'description',
          placeholder: 'Enter Description',
          options: [],
          required: true,
          validation: {
            name: 'description',
            required: true,
            errorMessage: 'Description required',
            min: 0,
            max: 0,
          },
        },
      ],
    },
  ];
  const formData = [
    {
      title: 'Add Connector',
      form: [
        {
          type: 'select',
          name: 'type',
          value: ['connector4'],
          label: 'Type',
          placeholder: 'Select Type',
          options: [
            { value: 'connector1', label: 'connector1' },
            { value: 'connector2', label: 'connector2' },
            { value: 'connector3', label: 'connector3' },
            { value: 'connector4', label: 'connector4' },
          ],
          required: true,
          validation: {
            name: 'type',
            required: true,
            errorMessage: 'Type is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'text',
          value: [''],
          label: 'Name',
          name: 'connectorName',
          placeholder: 'Enter Name',
          options: [],
          required: true,
          validation: {
            name: 'connectorName',
            required: true,
            errorMessage: 'Connector name is required',
            min: 0,
            max: 0,
          },
        },
      ],
    },
    {
      title: ' Properties',
      form: [
        {
          type: 'text',
          value: [''],
          name: 'endPoint',
          label: 'End Point',
          placeholder: 'Enter End Point',
          options: [],
          required: true,
          validation: {
            name: 'endPoint',
            required: true,
            errorMessage: 'Endpoint is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'text',
          value: [''],
          label: 'User Name',
          name: 'userName',
          placeholder: 'Enter User Name',
          options: [],
          required: true,
          validation: {
            name: 'userName',
            required: true,
            errorMessage: 'User Name is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'password',
          value: [''],
          label: 'Password',
          name: 'password',
          placeholder: 'Enter Password',
          options: [],
          required: true,
          validation: {
            name: 'password',
            required: true,
            errorMessage: 'Password is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'text',
          value: [''],
          label: 'Port',
          name: 'port',
          placeholder: 'Enter Port',
          options: [],
          required: true,
          validation: {
            name: 'port',
            required: true,
            errorMessage: 'Port is required',
            min: 0,
            max: 0,
          },
        },
      ],
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="flex flex-row w-full flex-grow">
      {/* <div className="relative flex flex-col">
          <Navbar2 />
        </div> */}
      {/* <div className="relative flex flex-col w-full"> */}
      {window.location.href.indexOf('add-project') !== -1 && (
        <AddProjectForm
          title={formData2[0].title}
          formData={formData2}
          getNewFormData={handleSubmittedForm}
        />
      )}
      {window.location.href.indexOf('add-connector') !== -1 && (
        <AddProjectForm
          title={formData[0].title}
          formData={formData}
          getNewFormData={handleSubmittedForm}
        />
      )}
      {window.location.href.indexOf('add-pipeline') !== -1 && (
        <AddProjectForm
          title={formData3[0].title}
          formData={formData3}
          getNewFormData={handleSubmittedForm}
        />
      )}
      {/* </div> */}
    </div>
  );
}

export default AddProject;
