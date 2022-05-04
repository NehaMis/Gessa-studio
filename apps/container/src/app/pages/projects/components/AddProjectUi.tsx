import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IRProject } from '../store/projectsSlice';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import { alpha, styled, useTheme } from '@mui/system';
import _without from 'lodash/without';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';
import CustomSnackbar from './CustomSnackbar';
import history from '../../../../utils/history';
// import { TagsInput } from '@gessa/ui';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
// import Snackbar from '@mui/material/Snackbar';
import {
  setDialogStatus,
  selectActiveDialogStatus,
} from '../../../../store/dropdownSlice';
import TagsInput from './TagsInput';
import {
  Autocomplete,
  Button,
  Typography,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';

interface Props {
  addProject: (project: any) => void;
  setSnackData: (setdata: {
    open: boolean;
    msg: string;
    severity: string;
    duration: number;
  }) => void;
}

interface IFormInput {
  name: string;
  tag?: Array<string>;
  description: string;
}

function getProjectObject() {
  const tags = [
    'devops',
    'microfrontend',
    'bigdata',
    'cybersecurity',
    'cloud computing',
    'HPC',
  ];
  return {
    name: 'Project ' + Math.round(Math.random() * 100),
    description: 'Test project for local DB, Time:' + new Date().toString(),
  };
}

const StyledAddProject = styled('div')(({ theme }) => {
  return {
    '.btn-tab': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary,
    },
    '.btn-cancel': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.custom.btnColor,
      color: theme.palette.custom.btnColor,
    },

    '.btn-add': {
      backgroundColor: theme.palette.background.paper,
      color: 'white',
    },
    '.btn-hover': {
      backgroundColor: theme.palette.custom.btnColor,
    },
    '.input-default': {
      backgroundColor: theme.palette.custom.form3,
      color: theme.palette.primary,
    },

    '.autocomplete-default': {
      backgroundColor: theme.palette.custom.form3,
      color: theme.palette.primary,
    },
    '.error-text': {
      color: theme.palette.custom.formError,
    },
    '.add-text': {
      color: theme.palette.primary,
    },
    '.border': {
      borderColor: theme.palette.custom.form3,
    },
  };
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    // marginTop: theme.spacing(3),
    // fontSize: '17px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    // Use the system font instead of the default Roboto font.

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase': {
    margin: 'none',
  },
}));

const AddProjectUi = ({ addProject, setSnackData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [project, setProject]: any = useState({});
  const rootState = useSelector((state: IRootState) => state);
  const [tags, setTags]: any = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <CloseIcon fontSize="small" />
    </React.Fragment>
  );

  const addTag = (e: any) => {
    // if (e.key === 'Enter') {
    if (e.target.value.length > 0) {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
    // }
  };

  const removeTag = (removedTag: any) => {
    const newTags = tags.filter((tag: any) => tag !== removedTag);
    setTags(newTags);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dialogStatus = selectActiveDialogStatus(rootState);
  const handleClose = () => {
    navigate('/project/');
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleClick();

    setSnackData({
      open: true,
      msg: 'Project added successfully!',
      severity: 'success',
      duration: 3000,
    });

    dispatch(setDialogStatus(false));
    const payload = {
      name: data.name,
      description: data.description,
      tag: tags,
      micro_apps: [],
    };
    setProject(data);
    addProject(payload);
    handleClose();
  };

  const names = ['microfrontend', 'cloud computing', 'hpc'];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <StyledAddProject className="col-span-full h-full overflow-y-hidden overflow-x-hidden flex-grow">
      <div className=" p-2 border-t-1 border-b-1 border-l-0  border-r-0 border top-0">
        <Typography className="text-sm font-bold add-text  p-3 ">
          Add Project
        </Typography>
      </div>
      <form
        className="h-full w-full flex flex-col justify-between"
        style={{ height: 'calc(100vh - 70px)' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col " style={{ overflowY: 'auto' }}>
          <div className="">
            <div className="flex flex-col p-4 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label className="p-2">Name</label>
                  {/* <InputLabel shrink htmlFor="bootstrap-input">
                    Name
                  </InputLabel>
                  <BootstrapInput
                    {...register('name', {
                      required: true,
                      maxLength: 20,
                    })}
                    // defaultValue={props.defaultValues.connectorName}
                    // id={item.key}
                    onBlur={() => dispatch(setDialogStatus(true))}
                    // onchange={onChange}
                    placeholder="Enter Name"
                  /> */}
                  <input
                    className="form-control p-2 h-14 add-text input-default rounded"
                    {...register('name', {
                      required: true,
                      maxLength: 20,
                    })}
                    placeholder="Enter Name"
                    onBlur={() => dispatch(setDialogStatus(true))}
                  />
                  {errors?.name?.type === 'required' && (
                    <p className="error-text"> This field is required</p>
                  )}
                  {errors?.name?.type === 'maxLength' && (
                    <p className="error-text">
                      {' '}
                      Name cannot exceed 20 characters
                    </p>
                  )}
                  {/* {errors?.name?.type === 'pattern' && (
                  <p className="error-text">Alphabetical characters only</p>
                )} */}
                </div>
                <div className="flex flex-col -mt-1">
                  <label className="p-2">Tags</label>
                  <TagsInput
                    addTag={addTag}
                    removeTag={removeTag}
                    tags={tags}
                    // {...register('tag', { required: true })}
                  />

                  {/* <Tag {...register('tag', { required: true })} /> */}
                  {/* <Select
              {/* <div className="flex flex-col gap-4">
                <Select
                  {...register('tag', { required: true, maxLength: 100 })}
                /> */}
                  {/* {(errors.tag as any)?.type === 'required' && (
                  <p className="error-text">This field is required</p>
                )} */}
                </div>
              </div>
              <div className="flex flex-col w-full gap-4 ">
                <label className="p-2">Description</label>
                <textarea
                  cols={100}
                  rows={7}
                  className="h-40 p-2 w-full add-text input-default rounded"
                  {...register('description', {
                    required: true,
                    maxLength: 100,
                  })}
                  placeholder="Enter Description"
                  onBlur={() => dispatch(setDialogStatus(true))}
                />
                {errors?.description?.type === 'required' && (
                  <p className="error-text">This field is required</p>
                )}
                {errors?.description?.type === 'maxLength' && (
                  <p className="error-text">
                    Description cannot exceed 100 characters
                  </p>
                )}
                {/* {errors?.name?.type === 'pattern' && (
                <p className="error-text">Alphabetical characters only</p>
              )} */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col  justify-between items-stretch  p-2  border-t-1  border-b-0 border-l-0  border-r-0 border top-0"
          style={{ height: '70px' }}
        >
          <div className=" relative flex flex-row flex-grow justify-end items-center h-full mr-2 gap-4">
            <Link className="" to="/project">
              <Button
                type="button"
                className="h-9 text-sm btn-cancel"
                variant="outlined"
              >
                Cancel
              </Button>
            </Link>

            <Button
              type="submit"
              className={`h-9  text-sm btn-add hover:bg-blue-500`}
              variant="contained"
              value={'Save'}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </StyledAddProject>
  );
};

export default AddProjectUi;
