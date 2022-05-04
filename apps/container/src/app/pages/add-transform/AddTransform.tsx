import { useTheme } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
//Remove comments
// import { Datagrid } from '@gessa/ui';
var randomize = require('randomatic');

const AddTransform = (props: any) => {
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
        tags: Yup.string().required('Select Tags'),
        sqlQuery: Yup.string().required('Enter Query'),
      })
    ),
  });

  const [closeStatus, setHandleClose] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setHandleClose(true);
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
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 200,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
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

  const getOptionsRendered = (data: any) => {
    return (
      data &&
      data.length &&
      data.map((myopt: any) => {
        return (
          <option key={randomize('a0', 10)} value={myopt.value}>
            {myopt.label}
          </option>
        );
      })
    );
  };

  return (
    <div className="box box-border flex flex-col relative flex-grow justify-start  w-full overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row justify-between items-center p-2">
        <div>
          <p className="text-xl  leading-8">Add Nodes</p>
        </div>
        <div>
          <Close className="h-4 " onClick={handleClose} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-5 flex-grow">
        <form className="flex flex-col justify-start items-start flex-grow">
          <div className="flex flex-col justify-start items-start flex-grow w-full p-2">
            <div
              className="form-group w-full py-1 px-0 flex flex-col gap-2 "
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Name</label>
              <input
                key={randomize('a0', 10)}
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
                key={randomize('a0', 10)}
              >
                {errors['name']?.message}
              </div>
            </div>
            <div
              className="form-group w-full flex flex-col gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Description</label>
              <input
                key={randomize('a0', 10)}
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
                key={randomize('a0', 10)}
              >
                {errors['description']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Tags</label>
              <select
                className="leading-8 p-2 h-10 text-sm"
                {...register('connectorType')}
                key={randomize('a0', 10)}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                placeholder={'Select data frame tags'}
              >
                {getOptionsRendered(options22)}
              </select>

              <div
                className="invalid-feedback text-red-400"
                key={randomize('a0', 10)}
              >
                {errors['tags']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Sql Query</label>
              <textarea
                {...register('sqlQuery')}
                cols={100}
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
                key={randomize('a0', 10)}
              >
                {errors['sqlQuery']?.message}
              </div>
            </div>
            <div className="flex ">
              {/* remove comments */}
              {/* <Datagrid rows={rows} columns={columns} /> */}
            </div>
            <div className="border-b-2"></div>
          </div>
          <div className="flex flex-col w-screen">
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
