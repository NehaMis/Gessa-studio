import { useTheme } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase,
  InputLabel,
  TextField,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Close } from '@mui/icons-material';
import { useState, useEffect, useContext } from 'react';
import { IconComponent } from '@gessa/ui';
// import Select from '@material-ui/core/Select';
import { Datagrid } from '@gessa/ui';
import Select from '@mui/material/Select';
import generateRandomString from '../../../../../utils/randomString';
import { IOption } from '../add-pipeline/add-pipeline-v2';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { Parser } from 'node-sql-parser/build/mysql';
import { alpha, styled } from '@mui/system';
import { format } from 'sql-formatter';
import { ThemeContext } from 'apps/flow-chart-app/src/context';
import { InputBox } from '@gessa/ui';

const daysOfWeekSuggestions = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
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
const AddTransform2 = (props: any) => {
  const theme = useContext(ThemeContext);
  const [submitStatus, setsubmitStatus] = useState('save');
  const [validate, setValidate] = useState(true);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const parser = new Parser();
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      // marginTop: theme.spacing(3),
      // fontSize: '17px',
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      // border: '1px solid #ced4da',
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

  const serilizeDefaultValues = () => {
    const obj: any = { tags: [] };
    const nodes = props.defaultOptions.options;
    if (
      props &&
      props.defaultValues &&
      props.defaultValues.defaultValues &&
      props.defaultValues.defaultValues.length
    ) {
      for (let i = 0; i < props.defaultValues.defaultValues.length; i += 1) {
        if (props.defaultValues.defaultValues[i].key === 'tags') {
          const data = props.defaultValues.defaultValues[i].value.split(',');
          const val = [];
          for (let i = 0; i < data.length; i += 1) {
            if (data[i] !== 'select') {
              const index = nodes.findIndex(
                (value: any) => value.node_id === data[i]
              );
              if (index !== -1) {
                const dataFrameIndex = nodes[index].properties.findIndex(
                  (value: any) => value.key === 'dataFrameName'
                );
                if (dataFrameIndex !== -1) {
                  const payload = {
                    label: nodes[index].properties[dataFrameIndex].value,
                    value: data[i],
                  };
                  val.push(payload);
                }
              }
            }
          }
          obj[props.defaultValues.defaultValues[i].key] = val;
        } else {
          obj[props.defaultValues.defaultValues[i].key] =
            props.defaultValues.defaultValues[i].value;
        }
      }
    }
    return obj;
  };

  const serilizeOptions = (
    nodesData: any,
    elementId: string,
    type: string
  ): IOption[] => {
    const options: IOption[] = [
      { label: 'select', value: 'select', disabled: true },
    ];
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
              let name = '';
              // if (nodesData[i].type.toLowerCase() === 'input') {
              const index = nodesData[i].properties.findIndex(
                (value: any) => value.key === 'dataFrameName'
              );
              if (index !== -1) {
                name = nodesData[i].properties[index].value;
              }
              // } else {
              // name = nodesData[i].name;
              // }
              const payload = {
                label: name,
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

  const [options1, setOptions] = useState<IOption[]>(
    serilizeOptions(
      props.defaultOptions.options,
      props.defaultOptions.elementId,
      props.defaultOptions.type
    )
  );
  // useEffect(() => {
  //   const opt = serilizeOptions(
  //     props.defaultOptions.options,
  //     props.defaultOptions.elementId,
  //     props.defaultOptions.type
  //   );
  //   setOptions(opt);
  // }, [props]);

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string().required('Enter description'),
    dataFrameName: Yup.string().required('Enter data frame name'),
    tags: Yup.array().of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      })
    ),
    sqlQuery: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const onDraft = (data: any) => {
    const obj = JSON.parse(JSON.stringify(data));
    obj.tags = [];
    const payload = {
      type: 'draft',
      data: obj,
    };
    props.sendFormData(payload);
  };

  const onSubmit = (data: any) => {
    const obj = JSON.parse(JSON.stringify(data));
    const payload = {
      type: submitStatus,
      data: obj,
    };
    props.sendFormData(payload);

    // props.sendFormData(data);
  };
  const onCancel = () => {
    const payload = {
      type: 'cancel',
      data: false,
    };

    props.sendFormData(payload);

    // props.sendFormData(false);
  };

  const onDelete = () => {
    const payload = {
      type: 'delete',
      data: false,
    };
    props.sendFormData(payload);
  };

  return (
    <div className="flex flex-col relative">
      <div
        className="box box-border flex flex-col relative flex-grow justify-start   w-full h-screen overflow-x-hidden overflow-y-hidden"
        style={{ height: '100%' }}
      >
        <div
          className="flex flex-row justify-between items-center p-2"
          style={{
            borderBottomWidth: '1px',
            borderBottomColor: theme?.theme.palette.background.paper,
          }}
        >
          <div>
            <p className="text-xl leading-8">Add Nodes</p>
          </div>
          <div>
            <Close className="h-4 " onClick={onCancel} />
          </div>
        </div>
        <div className="relative flex flex-col  gap-5 flex-grow h-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between items-stretch"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow w-full p-2 overflow-y-auto overflow-x-hidden"
              style={{ height: 'calc(100vh - 99px)' }}
            >
              <div
                className="form-group w-full py-1  flex flex-col gap-2 "
                key={generateRandomString()}
              >
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: '22px' }}
                >
                  {'Name'}
                </InputLabel>
                <BootstrapInput
                  {...register('name')}
                  defaultValue=""
                  placeholder={'Enter Name'}
                  key={generateRandomString()}
                  id="name"
                  // register={register}
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
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: '22px' }}
                >
                  {'Description'}
                </InputLabel>
                <BootstrapInput
                  {...register('description')}
                  defaultValue=""
                  placeholder={'Enter Description'}
                  key={generateRandomString()}
                  id="description"
                />

                <div
                  className="invalid-feedback text-red-400"
                  key={generateRandomString()}
                >
                  {errors['description']?.message}
                </div>
              </div>
              <div
                className="form-group w-full flex flex-col gap-2"
                key={generateRandomString()}
              >
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  style={{ fontSize: '22px' }}
                >
                  {'Data Frame Name'}
                </InputLabel>
                <BootstrapInput
                  {...register('dataFrameName')}
                  defaultValue=""
                  placeholder={'Enter data frame name'}
                  key={generateRandomString()}
                  id="dataFrameName"
                  // register={register}
                />
                <div
                  className="invalid-feedback text-red-400"
                  key={generateRandomString()}
                >
                  {errors['dataFrameName']?.message}
                </div>
              </div>

              <div
                className="form-group w-full py-1  flex flex-col gap-2 "
                key={generateRandomString()}
              >
                <Controller
                  name="tags"
                  control={control}
                  defaultValue={[]}
                  render={({
                    field: { ref, ...field },
                    fieldState: { error },
                  }) => (
                    <Autocomplete
                      {...field}
                      disableClearable
                      disablePortal
                      filterSelectedOptions
                      multiple
                      getOptionDisabled={(option) => option.disabled}
                      getOptionLabel={(option) => option.label}
                      id="tags-input"
                      onChange={(event, value) => field.onChange(value)}
                      options={options1}
                      renderInput={(params) => (
                        <TextField
                          error={!!error}
                          helperText={error?.message}
                          label="Select Input Data Frames"
                          name="tags"
                          type="search"
                          inputRef={ref}
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </div>
              <div
                className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                key={generateRandomString()}
              >
                <div className="flex felx-row justify-between items-center gap-10">
                  <label key={generateRandomString()}>Sql Query</label>
                  <div
                    onClick={() => {
                      setIsOpenDialog(true);
                    }}
                  >
                    <IconComponent
                      name={'Edit'}
                      size={25}
                      label={'Edit'}
                    ></IconComponent>
                  </div>
                  <Dialog open={isOpenDialog} fullWidth maxWidth={'lg'}>
                    <DialogTitle>
                      <div className="flex flex-row justify-between items-center">
                        <div>Sql Query</div>
                        <div>
                          <Close
                            className="h-4 "
                            onClick={() => setIsOpenDialog(false)}
                          />
                        </div>
                      </div>
                    </DialogTitle>
                    <DialogContent>
                      <div className="flex flex-col w-full h-full">
                        <div>
                          <CodeMirror
                            value={getValues('sqlQuery')}
                            minHeight="400px"
                            indentWithTab={true}
                            theme={'dark'}
                            extensions={[sql()]}
                            {...register('sqlQuery')}
                            onBlur={(value: any) => {
                              setValidate(true);
                            }}
                            onChange={(value: any, viewUpdate: any) => {
                              setValue('sqlQuery', format(value));
                            }}
                          />{' '}
                        </div>
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        variant="contained"
                        type="submit"
                        style={{
                          backgroundColor: '#292929',
                          color: 'white',
                        }}
                        className="h-9 text-sm py-2.5 px-6"
                        onClick={() => {
                          setValidate(false);
                          const tableList = parser.astify(
                            getValues('sqlQuery')
                          );
                        }}
                      >
                        {'Validate'}
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: '#292929',
                          color: 'white',
                        }}
                        type="reset"
                        className="h-9 text-sm py-2.5 px-6"
                        onClick={() => setIsOpenDialog(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        value={'Save'}
                        style={{
                          backgroundColor: '#292929',
                          color: 'white',
                        }}
                        className="h-9 text-sm py-2.5 px-6"
                        onClick={() => setIsOpenDialog(false)}
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <CodeMirror
                  value={getValues('sqlQuery')}
                  height="200px"
                  indentWithTab={true}
                  theme={'dark'}
                  extensions={[sql()]}
                  {...register('sqlQuery')}
                  onBlur={(value: any) => {
                    setValidate(true);
                  }}
                  onChange={(value: any, viewUpdate: any) => {
                    setValue('sqlQuery', format(value));
                  }}
                />{' '}
                <div
                  className="invalid-feedback text-red-400"
                  key={generateRandomString()}
                >
                  {errors['sqlQuery']?.message}
                </div>
                <div className=" flex flex-col items-end justify-center gap-2 mb-2">
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      backgroundColor: '#292929',
                      color: 'white',
                    }}
                    className="h-9 text-sm py-2.5 px-6"
                    onClick={() => {
                      setValidate(false);
                      const tableList =
                        parser.astify(getValues('sqlQuery')) || '';
                      props.validateQuery(getValues('sqlQuery'));
                    }}
                  >
                    {validate ? 'Validate' : 'Execute'}
                  </Button>
                </div>
              </div>
              <div
                className="w-full "
                style={{
                  backgroundColor: theme?.theme.palette.background.paper,
                  color: theme?.theme.palette.getContrastText(
                    theme?.theme.palette.background.paper
                  ),
                  height: '300px',
                }}
              >
                <Datagrid rows={rows} columns={columns} />
              </div>
            </div>
            <div className="flex flex-col w-full bottom-0 absolute">
              <div
                className="form-group flex flex-row justify-end items-center gap-2 p-2"
                style={{
                  borderTopWidth: '1px',
                  borderTopColor: theme?.theme.palette.background.paper,
                  backgroundColor: '#191919',
                }}
              >
                <Button
                  variant="contained"
                  type="reset"
                  style={{
                    backgroundColor: '#292929',
                    color: 'white',
                  }}
                  className="h-9 text-sm py-2.5 px-6"
                  onClick={onDelete}
                >
                  <IconComponent
                    name={'Trash'}
                    size={25}
                    label={'Trash'}
                  ></IconComponent>
                  Delete
                </Button>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#292929',
                    color: 'white',
                  }}
                  type="reset"
                  className="h-9 text-sm py-2.5 px-6"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: '#292929',
                    color: 'white',
                  }}
                  value={'Save'}
                  className="h-9 text-sm py-2.5 px-6"
                  onClick={() => setsubmitStatus('save')}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: '#292929',
                    color: 'white',
                  }}
                  className="h-9 text-sm py-2.5 px-6"
                  onClick={() => setsubmitStatus('draft')}
                >
                  Draft
                </Button>
              </div>
            </div>{' '}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransform2;
