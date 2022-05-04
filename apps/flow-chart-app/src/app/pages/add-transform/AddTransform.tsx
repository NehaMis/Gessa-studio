import { useTheme } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Autocomplete, Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import { Datagrid } from '@gessa/ui';
import Select from '@mui/material/Select';
import generateRandomString from '../../../utils/randomString';
import { IOption } from '../flow-chart/components/add-pipeline/add-pipeline-v2';

const AddTransform = (props: any) => {
  const serilizeDefaultValues = () => {
    const obj: any = { tags: [] };
    const nodes = props.defaultOptions.options;
    if (props && props.defaultValues && props.defaultValues.length) {
      for (let i = 0; i < props.defaultValues.length; i += 1) {
        if (props.defaultValues[i].key === 'tags') {
          const data = props.defaultValues[i].value.split(',');
          const val = [{ label: 'select', value: 'select' }];
          for (let i = 0; i < data.length; i += 1) {
            if (data[i] !== 'select') {
              const index = nodes.findIndex(
                (value: any) => value.node_id === data[i]
              );
              if (index !== -1) {
                const payload = {
                  label: nodes[index].name,
                  value: data[i],
                };
                obj[props.defaultValues[i].key].push(payload);
              }
            }
          }
        } else {
          obj[props.defaultValues[i].key] = props.defaultValues[i].value;
        }
      }
    }
    return obj;
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('Enter Name'),
        description: Yup.string().required('Enter Description'),
        tags: Yup.string(),
        sqlQuery: Yup.string().required('Enter Query'),
      })
    ),
    defaultValues: serilizeDefaultValues(),
  });

  const serilizeOptions = (
    nodesData: any,
    elementId: string,
    type: string
  ): IOption[] => {
    const options: IOption[] = [{ label: 'select', value: 'select' }];
    if (type) {
      switch (type.toLowerCase()) {
        case 'input':
          for (let i = 0; i < nodesData.length; i += 1) {
            if (
              nodesData[i].type.toLowerCase() === 'transform' &&
              nodesData[i].name !== '' &&
              nodesData[i].node_id !== elementId
            ) {
              const payload = {
                label: nodesData[i].name,
                value: nodesData[i].node_id,
              };
              options.push(payload);
            }
          }
          return options;
          break;
        case 'transform':
          for (let i = 0; i < nodesData.length; i += 1) {
            if (
              (nodesData[i].type.toLowerCase() === 'transform' ||
                nodesData[i].type.toLowerCase() === 'input') &&
              nodesData[i].name !== '' &&
              nodesData[i].node_id !== elementId
            ) {
              const payload = {
                label: nodesData[i].name,
                value: nodesData[i].node_id,
              };
              options.push(payload);
            }
          }
          return options;
          break;
        case 'store':
          for (let i = 0; i < nodesData.length; i += 1) {
            if (
              nodesData[i].type.toLowerCase() === 'transform' &&
              nodesData[i].name !== '' &&
              nodesData[i].node_id !== elementId
            ) {
              const payload = {
                label: nodesData[i].name,
                value: nodesData[i].node_id,
              };
              options.push(payload);
            }
          }
          break;
      }
      return options;
    }
    return options;
  };

  const [closeStatus, setHandleClose] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [options1, setOptions] = useState<IOption[]>(
    serilizeOptions(
      props.defaultOptions.options,
      props.defaultOptions.elementId,
      props.defaultOptions.type
    )
  );
  const handleClose = () => {
    setHandleClose(true);
  };

  const onSubmit = (data: any) => {
    const obj = JSON.stringify(data, null, 2);
    props.sendFormData(data);
  };

  const onCancel = () => {
    props.sendFormData(false);
  };

  const MenuProps: any = {
    variant: 'menu',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  const theme = useTheme();
  const options22 = [
    { label: 'Tag1', value: 'Tag1' },
    { label: 'Tag2', value: 'Tag2' },
    { label: 'Tag3', value: 'Tag3' },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params: any) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
  ];

  const getOptionsRendered = (data: any) => {
    return (
      data &&
      data.length &&
      data.map((myopt: any) => {
        return (
          <option key={generateRandomString()} value={myopt.value}>
            {myopt.label}
          </option>
        );
      })
    );
  };

  return (
    <div className="box box-border flex flex-col relative flex-grow justify-start   w-96 h-screen overflow-x-hidden">
      <div
        className="flex flex-row justify-between items-center p-2"
        style={{
          borderBottomWidth: '1px',
          borderBottomColor: theme.palette.background.paper,
        }}
      >
        <div>
          <p className="text-xl leading-8">Add Nodes</p>
        </div>
        <div>
          <Close className="h-4 " onClick={onCancel} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-5 flex-grow">
        <form
          className="flex flex-col justify-start items-start flex-grow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-start items-start flex-grow w-full p-2">
            <div
              className="form-group w-full py-1  flex flex-col gap-2 "
              key={generateRandomString()}
            >
              <label key={generateRandomString()}>Name</label>
              <input
                key={generateRandomString()}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                type="text"
                placeholder={'Enter Name'}
                {...register('name')}
                className={`form-control rounded ${
                  errors['name']
                    ? 'is-invalid leading-8 p-2 h-10 text-sm'
                    : ' leading-8 p-2 h-10 text-sm'
                }`}
              />
              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['name']?.message}
              </div>
            </div>

            <div
              className="form-group w-full flex flex-col gap-2"
              key={generateRandomString()}
            >
              <label key={generateRandomString()}>Description</label>
              <input
                key={generateRandomString()}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                type="text"
                placeholder={'Enter Description'}
                {...register('description')}
                className={`form-control rounded ${
                  errors['description']
                    ? 'is-invalid leading-8 p-2 h-10 text-sm'
                    : ' leading-8 p-2 h-10 text-sm'
                }`}
              />
              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['description']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={generateRandomString()}
            >
              <label key={generateRandomString()}>Tags</label>
              <select
                className="leading-8 p-2 h-10 text-sm"
                {...register('tags')}
                key={generateRandomString()}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                placeholder={'Select data frame tags'}
              >
                {getOptionsRendered(options1)}
              </select>

              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['tags']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={generateRandomString()}
            >
              <label key={generateRandomString()}>Sql Query</label>
              <textarea
                {...register('sqlQuery')}
                cols={10}
                rows={7}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                  height: '150px',
                }}
                placeholder={'Enter Sql Query'}
                className={`form-control ${
                  errors['sqlQuery']
                    ? 'is-invalid leading-8 p-2 h-10 text-sm'
                    : ' leading-8 p-2 h-10 text-sm'
                }`}
                {...register('sqlQuery')}
              />
              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['sqlQuery']?.message}
              </div>
              <div className=" flex flex-col items-end justify-center gap-2 mb-2">
                <Button
                  variant="outlined"
                  type="submit"
                  className="h-9 text-sm py-2.5 px-6"
                >
                  Execute
                </Button>
              </div>
            </div>
            <div
              className="w-full "
              style={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.getContrastText(
                  theme.palette.background.paper
                ),
                height: '300px',
              }}
            >
              <Datagrid rows={rows} columns={columns} />
            </div>
            <div className="border-b-2"></div>
          </div>
          <div className="flex flex-col w-96 fixed bottom-0">
            <div
              className="form-group flex flex-row justify-end items-center gap-2 p-2"
              style={{
                borderTopWidth: '1px',
                borderTopColor: theme.palette.background.paper,
              }}
            >
              <Button
                variant="outlined"
                type="reset"
                className="h-9 text-sm py-2.5 px-6"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained" value={'Save'}>
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTransform;
