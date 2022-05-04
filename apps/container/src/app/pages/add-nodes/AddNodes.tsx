import { useTheme } from '@mui/system';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
var randomize = require('randomatic');

const AddNodes = (props: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('Enter Name'),
        dataFrameName: Yup.string().required('Enter Data Frame Name'),
        chooseDataFrame: Yup.string().required('Choose Data Frame'),
        addFile: Yup.string().required('Enter Url'),
      })
    ),
  });

  const [closeStatus, setHandleClose] = useState(false);

  const handleClose = () => {
    setHandleClose(true);
  };

  const theme = useTheme();

  return (
    <div className="box box-border flex flex-col relative flex-grow justify-start  w-full">
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
              className="form-group w-full  py-1 px-0 flex flex-col  gap-2 "
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
              className="form-group w-full   flex flex-col gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Data Frame Name</label>
              <select
                className="leading-8 p-2 h-10 text-sm"
                {...register('dataFrameName')}
                key={randomize('a0', 10)}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                placeholder={'Enter Data frame name'}
              >
                {/* {getOptionsRendered(form.options)} */}
              </select>
              <div
                className="invalid-feedback text-red-400"
                key={randomize('a0', 10)}
              >
                {errors['dataFrameName']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Choose Data Frame</label>
              <select
                className="leading-8 p-2 h-10 text-sm"
                {...register('chooseDataFrame')}
                key={randomize('a0', 10)}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                placeholder={'Choose Data Frame'}
              >
                {/* {getOptionsRendered(form.options)} */}
              </select>
              <div
                className="invalid-feedback text-red-400"
                key={randomize('a0', 10)}
              >
                {errors['chooseDataFrame']?.message}
              </div>
            </div>

            <div className="border-b-2"></div>
            <div className="flex flex-row justify-between items-center ">
              <div>
                <p className="text-xl  leading-8">Properties</p>
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col  gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Add File</label>
              <input
                key={randomize('a0', 10)}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                type="text"
                placeholder={'Enter Url'}
                {...register('addUrl')}
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
                {errors['addFile']?.message}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <Typography variant="body1"> --OR--</Typography>
            </div>
            {/* <div
              className="form-group w-full  py-1 px-0 flex flex-col  gap-2"
              key={randomize('a0', 10)}
            >
              <label key={randomize('a0', 10)}>Upload</label>
              <input
                key={randomize('a0', 10)}
                style={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                type="file"
                placeholder={'Enter Url'}
                {...register('addUrl')}
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
                {errors['addFile']?.message}
              </div>
            </div> */}
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
      <div>{/* buttons save cancel */}</div>
    </div>
  );
};
export default AddNodes;
