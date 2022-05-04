import { useRef } from 'react';
import { alpha, styled, useTheme } from '@mui/system';
import { Controller, useForm, useFormState, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Autocomplete,
  Button,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import generateRandomString from 'apps/flow-chart-app/src/utils/randomString';
import { Datagrid, IconComponent } from '@gessa/ui';
import { IFlowchart } from 'apps/flow-chart-app/src/fake-db/db/data-flow-db';
import { IConnectorData } from 'apps/flow-chart-app/src/fake-db/db/connector-db';
import { IDefaultValues, IDefaultOptions } from '../FlowChartUi';
import { InputBox } from '@gessa/ui';
export interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface IFormSubmit {
  type: string;
  data: any;
}
export interface AddPipelineFormProps {
  testConnectionData: any;
  selectedElement: IFlowchart;
  rawConnectors: IConnectorData[];
  newFields: any;
  defaultValues: IDefaultValues;
  defaultOptions: IDefaultOptions;
  sendFormData: (data: IFormSubmit) => void;
}

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

const AddPipeline = (props: AddPipelineFormProps) => {
  const [connectorNameOptions, setConnectorNameOptions] = useState<any>();
  const [submitStatus, setsubmitStatus] = useState('save');
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
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
    '& Select': {
      backgroundColor: '#292929',
    },
  }));

  // const Select = styled('select')(({ theme }) => ({
  //   ' & MuiSelect-select': {
  //     backgroundColor: 'red',
  //     height: 'auto',
  //     Height: '1.4375em',
  //     textOverflow: 'ellipsis',
  //     whiteSpace: 'nowrap',
  //     overflow: 'hidden',
  //   },
  // }));

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
                const payload = {
                  label: nodes[index].name,
                  value: data[i],
                };
                val.push(payload);
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

  const serializeOptions = (data: any): any => {
    const optionArray: IOption[] = [];
    // const index = data.findIndex(
    //   (value: any) => value.type.toLowerCase() === 'connectors'
    // );
    // if (index !== -1) {
    const connectorList = data;
    for (let i = 0; i < connectorList.length; i += 1) {
      if (connectorList[i].name) {
        const payload = {
          label: connectorList[i].name,
          value: connectorList[i].name,
        };
        optionArray.push(payload);
      }
    }
    // }
    return optionArray;
  };
  // const serializeOptions = (data: any): any => {
  //   console.log(data);
  //   const optionArray: IOption[] = [];
  //   const index = data.findIndex(
  //     (value: any) => value.type.toLowerCase() === 'connectors'
  //   );
  //   if (index !== -1) {
  //     const connectorList = data[index].children;
  //     for (let i = 0; i < connectorList.length; i += 1) {
  //       if (connectorList[i].name) {
  //         const payload = {
  //           label: connectorList[i].name,
  //           value: connectorList[i].name,
  //         };
  //         optionArray.push(payload);
  //       }
  //     }
  //   }
  //   console.log(optionArray);
  //   return optionArray;
  // };
  useEffect(() => {
    setConnectorNameOptions(
      serializeOptions(props.defaultValues.connectorTypes)
    );
  }, [props.defaultValues]);

  useEffect(() => {}, [props.testConnectionData]);

  const serilizeValidationSchema = (formData: any) => {
    const validationObjFinal: any = {};
    const arr = [];
    for (let i = 0; i < formData.length; i += 1) {
      //   for (let j = 0; j < formData[i].form.length; j += 1) {
      const payload: any = [];
      payload[formData[i].validation.name] = Yup.string();
      if (formData[i].validation.required) {
        payload[formData[i].validation.name] = Yup.string();
        //   Object.assign(validationObjFinal, payload);
      }
      if (
        formData[i].validation.required &&
        formData[i].validation.errorMessage
      ) {
        payload[formData[i].validation.name] = Yup.string().required(
          formData[i].validation.errorMessage
        );
        Object.assign(validationObjFinal, payload);
      }
      //   }
    }
    return validationObjFinal;
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      Yup.object().shape(
        {
          name: Yup.string().required('Enter Name'),
          connectorName: Yup.string().required('Select Connector Name'),
          connectorType: Yup.string().required('Select Connector Type'),
          tags: Yup.array(),
          dataFrameName: Yup.string(),
          // database1: Yup.string(),
          // dataBase: Yup.string().required('Enter Database name'),
          // table: Yup.string().required('Enter Table name'),
        },
        { ...serilizeValidationSchema(props.newFields) }
      )
    ),
    defaultValues: serilizeDefaultValues(),
  });

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

  const theme = useTheme();

  const connectorTypeOptions = [
    {
      label: 'Input',
      value: 'Input',
    },
    {
      label: 'Store',
      value: 'Store',
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
  const onSubmit = (data: any) => {
    const obj = JSON.parse(JSON.stringify(data));
    if (obj && obj.connectorType.toLowerCase() === 'input') {
      obj.tags = [];
      const payload: IFormSubmit = {
        type: submitStatus,
        data: obj,
      };
      props.sendFormData(payload);
    }
    if (obj && obj.connectorType.toLowerCase() === 'store') {
      obj.dataFrameName = '';
      const payload: IFormSubmit = {
        type: submitStatus,
        data: obj,
      };

      props.sendFormData(payload);
    }
  };
  const onDraft = (data: any) => {
    const obj = JSON.parse(JSON.stringify(data));
    obj.tags = [];
    const payload: IFormSubmit = {
      type: 'draft',
      data: obj,
    };
    props.sendFormData(payload);
  };

  const onCancel = () => {
    const payload: IFormSubmit = {
      type: 'cancel',
      data: false,
    };

    props.sendFormData(payload);
  };

  const onDelete = () => {
    const payload = {
      type: 'delete',
      data: false,
    };
    // props.sendFormData(payload);
  };

  const onTestData = (data: any) => {
    const obj = JSON.parse(JSON.stringify(data));
    obj.tags = [];
    const payload: IFormSubmit = {
      type: 'test',
      data: obj,
    };
    // props.sendFormData(payload);
  };
  const inputRef = useRef();

  useEffect(() => {
    setOptions(
      serilizeOptions(
        props.defaultOptions.options,
        props.defaultOptions.elementId,
        watch('connectorType')
      )
    );
  }, []);

  return (
    <div
      className="box box-border flex flex-col relative flex-grow justify-start w-full  overflow-x-hidden overflow-y-hidden"
      style={{ height: '100%' }}
    >
      <div
        className="flex flex-row justify-between items-center p-2"
        style={{
          borderBottomWidth: '1px',
          borderBottomColor: theme.palette.background.paper,
        }}
      >
        <div>
          <p className="text-xl  leading-8">Add Pipeline</p>
        </div>
        <div>
          <Close className="h-4 " onClick={onCancel} />
        </div>
      </div>
      <div className="relative flex flex-col  gap-5 flex-grow h-full">
        <form
          className="flex flex-col justify-between items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="flex flex-col justify-start items-start flex-grow w-full p-2 overflow-y-auto overflow-x-hidden"
            style={{ height: 'calc(100vh - 99px)' }}
          >
            <div
              className="form-group w-full  py-1 px-0 flex flex-col "
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
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={generateRandomString()}
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{ fontSize: '18px' }}
              >
                Connector Name
              </InputLabel>
              <Select
                {...register('connectorName')}
                key={generateRandomString()}
                placeholder={'Select Connector Name'}
                onChange={(e) => setValue('connectorName', e.target.value)}
                defaultValue={getValues('connectorName')}
              >
                {connectorNameOptions &&
                  connectorNameOptions.length &&
                  connectorNameOptions.map((myopt: any) => {
                    return (
                      <MenuItem
                        key={generateRandomString()}
                        value={myopt.value}
                      >
                        {myopt.label}
                      </MenuItem>
                    );
                  })}
              </Select>

              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['connectorName']?.message}
              </div>
            </div>
            <div
              className="form-group w-full  py-1 px-0 flex flex-col gap-2"
              key={generateRandomString()}
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{ fontSize: '18px' }}
              >
                Connector Type
              </InputLabel>
              <Select
                {...register('connectorType')}
                key={generateRandomString()}
                value={getValues('connectorType')}
                placeholder={'Select Connector Type'}
              >
                {connectorTypeOptions &&
                  connectorTypeOptions.length &&
                  connectorTypeOptions.map((myopt: any) => {
                    return (
                      <MenuItem
                        key={generateRandomString()}
                        value={myopt.value}
                      >
                        {myopt.label}
                      </MenuItem>
                    );
                  })}
              </Select>

              <div
                className="invalid-feedback text-red-400"
                key={generateRandomString()}
              >
                {errors['connectorType']?.message}
              </div>
            </div>
            {(!watch('connectorType') ||
              watch('connectorType').toLowerCase() === 'input') && (
              <div
                className="form-group w-full  py-1 px-0 flex flex-col gap-2"
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
                  placeholder={'Enter Data Frame Name'}
                  key={generateRandomString()}
                  autoFocus={
                    watch('connectorType') &&
                    watch('connectorType').toLowerCase() === 'input'
                      ? true
                      : false
                  }
                  id="dataFrameName"
                  //register={register}
                />
                <div
                  className="invalid-feedback text-red-400"
                  key={generateRandomString()}
                >
                  {errors['dataFrameName']?.message}
                </div>
              </div>
            )}
            {watch('connectorType') &&
              watch('connectorType').toLowerCase() === 'store' && (
                <div
                  className="form-group w-full  py-1 px-0 flex flex-col gap-2"
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
                        id="days-autocomplete"
                        onChange={(event, value) => field.onChange(value)}
                        options={options1}
                        renderInput={(params) => (
                          <TextField
                            label="Select tags"
                            name="tags"
                            type="search"
                            autoFocus={
                              watch('connectorType') &&
                              watch('connectorType').toLowerCase() === 'store'
                                ? true
                                : false
                            }
                            inputRef={ref}
                            {...params}
                          />
                        )}
                      />
                    )}
                  />
                  <div
                    className="invalid-feedback text-red-400"
                    key={generateRandomString()}
                  >
                    {errors['tags']?.message}
                  </div>
                </div>
              )}
            <div className="flex flex-col flex-grow items-center justify-center w-full border "></div>
            <div className="flex flex-row justify-between items-center ">
              <div>
                <p className="text-xl  leading-8">Properties</p>
              </div>
            </div>
            {props.newFields &&
              props.newFields.length &&
              props.newFields.map((field: any) => {
                return (
                  <div
                    className="w-full  py-1 px-0 flex flex-col gap-2 "
                    key={generateRandomString()}
                  >
                    <InputLabel
                      shrink
                      htmlFor="bootstrap-input"
                      style={{ fontSize: '22px' }}
                    >
                      {field.label}
                    </InputLabel>
                    <BootstrapInput
                      {...register(field.name)}
                      defaultValue={field.value}
                      id={field.name}
                      //register={register}
                    />

                    <div
                      className="invalid-feedback text-red-400"
                      key={generateRandomString()}
                    >
                      {errors[field.name]?.message}
                    </div>
                  </div>
                );
              })}

            <div className="flex flex-col w-full py-1 gap-2">
              <div className="form-group flex flex-row justify-end items-center gap-2">
                <Button
                  variant="contained"
                  type="submit"
                  className="h-9 text-sm py-2.5 px-6"
                  style={{
                    backgroundColor: '#292929',
                    color: theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                  }}
                  value="save"
                  onClick={() => setsubmitStatus('test')}
                >
                  Test
                </Button>
              </div>
            </div>
            <div
              className="w-full py-1 "
              style={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.getContrastText(
                  theme.palette.background.paper
                ),
                height: '300px',
              }}
            >
              <Datagrid
                rows={props.testConnectionData.rows}
                columns={props.testConnectionData.cols}
              />
            </div>
          </div>
          <div
            className="flex flex-col w-full bottom-0 absolute"
            style={{
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <div
              className="form-group flex flex-row justify-end items-center gap-2 p-2"
              style={{
                borderTopWidth: '1px',
                borderTopColor: theme.palette.background.paper,
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#292929',
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                type="reset"
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
                type="reset"
                style={{
                  backgroundColor: '#292929',
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
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
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                value={'Save'}
                className="h-9 text-sm py-2.5 px-6"
                onClick={() => setsubmitStatus('save')}
              >
                Save
              </Button>
              <Button
                type="submit"
                style={{
                  backgroundColor: '#292929',
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
                variant="contained"
                value={'Save'}
                className="h-9 text-sm py-2.5 px-6"
                onClick={() => setsubmitStatus('draft')}
              >
                Draft
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
export default AddPipeline;
