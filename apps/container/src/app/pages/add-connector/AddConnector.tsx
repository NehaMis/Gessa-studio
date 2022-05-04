import { useState, useEffect, useRef } from 'react';
import { alpha, styled, useTheme } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { handleInputChange } from 'react-select/dist/declarations/src/utils';
import { Controller, useForm } from 'react-hook-form';
// import InputBox from '../projects/components/InputBox';
import { InputBox } from '@gessa/ui';

import {
  Autocomplete,
  Button,
  Typography,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
// import { parseProperties } from 'apps/container/src/utils/commonFunction';
import { parseProperties } from '../../../../../../apps/container/src/utils/commonFunction';
import {
  getOnlyProjectConnectorDetails,
  getProjectConnectorDetails,
} from '../projects/store/projectContentTreeSlice';
// import generateRandomString from 'libs/ui/src/static/randomString';
// import generateRandomString from '../../../../../../libs/ui/src/static/randomString';

export interface IFormInputs {
  title: string;
  formData: Array<any>;
  validationSchema?: any;
  getNewFormData: any;
  defaultValues?: any;
  connectorAllType?: any;
  tabData?: any;
  isValidate: boolean;
  validateForm: (data: any) => any;
}

const StyledAddConnector = styled('div')(({ theme }) => {
  return {
    '.border': {
      borderColor: theme.palette.custom.form3,
    },
    '.add-button': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.common.white,
    },
    '.btn-cancel': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.custom.btnColor,
      color: theme.palette.custom.btnColor,
    },
    '.title-color': {
      color: theme.palette.common.white,
    },
    '.dropdown': {
      backgroundColor: theme.palette.custom.selectedText,
      color: theme.palette.primary,
    },
  };
});

const AddConnector = (props: IFormInputs) => {
  const theme = useTheme();
  /** not using yet */
  // const serilizeDefaultValues = () => {
  //   const obj: any = {};
  //   if (props && props.formData && props.formData.length) {
  //     for (let i = 0; i < props.formData.length; i += 1) {
  //       for (let j = 0; j < props.formData[i].form.length; j += 1) {
  //         const str: Array<string> = Object.keys(props.formData[i].form[j]);
  //         // Object.assign(obj, {str['name']:props.formData[i].value});
  //         obj[props.formData[i].form[j].name] =
  //           props.formData[i].form[j].value[0];
  //       }
  //     }
  //   }
  //   return obj;
  // };
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

  const serilizeValidationSchema = (formData: any) => {
    const validationObjFinal: any = {};
    const arr = [];
    // for (let i = 0; i < formData.length; i += 1) {
    //   for (let j = 0; j < formData[i].form.length; j += 1) {
    //     const payload: any = [];
    //     payload[formData[i].form[j].validation.name] = Yup.string();
    //     if (formData[i].form[j].validation.required) {
    //       payload[formData[i].form[j].validation.name] = Yup.string();
    //       //   Object.assign(validationObjFinal, payload);
    //     }
    //     if (
    //       formData[i].form[j].validation.required &&
    //       formData[i].form[j].validation.errorMessage
    //     ) {
    //       payload[formData[i].form[j].validation.name] = Yup.string().required(
    //         formData[i].form[j].validation.errorMessage
    //       );
    //       Object.assign(validationObjFinal, payload);
    //     }
    //   }
    // }
    return validationObjFinal;
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      Yup.object().shape(serilizeValidationSchema(props.formData))
    ),
    defaultValues: props.defaultValues,
  });

  const [formObj, setNewFormObj] = useState({});
  const [multiSelectData, setMultiSelect] = useState(['']);
  const [selectedValue, setSelectedValue] = useState<any>();
  const [filterdData, setfilterdData] = useState([]);
  const [conncetorType, setConncetorType] = useState('');
  const [formData, setFormData] = useState({});
  const [connectorName, setConnectorName] = useState('');
  const [metaConnectorId, setMetaConnectorId] = useState('');
  const fetchedData: any = useRef({});
  const [isValidate, setIsValidate] = useState(props.isValidate);
  const [selectedMenu, setSelectedMenu] = useState('Validate');

  const [data, setData]: any = useState({});

  useEffect(() => {
    setIsValidate(props.isValidate);
  }, [props.isValidate]);

  const onSubmit = (data: any) => {
    /** removed extra field added in data of connectorName */
    console.log(data);
    if (selectedMenu == 'Validate') {
      const name = data.connectorName;
      delete data[name];

      /** updated connector type */
      data.type = conncetorType;
      const formDataProperties = parseProperties(data);

      const filledData = {
        name: connectorName || props.defaultValues.connectorName,
        meta_connector_id: metaConnectorId,
        properties: formDataProperties,
      };
      console.log(data);

      const payload = {
        type: 'validate',
        data: filledData,
      };
      console.log(payload);

      props.validateForm && props.validateForm(payload);
    } else {
      const name = data.connectorName;
      delete data[name];

      /** updated connector type */
      data.type = conncetorType;
      const formDataProperties = parseProperties(data);

      const filledData = {
        name: connectorName || props.defaultValues.connectorName,
        meta_connector_id: metaConnectorId,
        properties: formDataProperties,
      };

      const payload = {
        type: 'close',
        data: filledData,
      };
      props.getNewFormData(payload);
    }
  };

  const getOptionsRendered = props?.connectorAllType.map((type: any) => {
    return type.name;
  });

  const handleOptionChange = (e: any, clear = true) => {
    setConncetorType(e.target.value);
    let data = [];
    for (let i = 0; i < props.connectorAllType.length; i++) {
      if (e.target.value === props.connectorAllType[i].name) {
        setMetaConnectorId(props.connectorAllType[i]._id);
        data = props.connectorAllType[i].properties
          .filter((type: any) => type.property_type === 'connection_property')
          .map((filteredType: any) => {
            return filteredType;
          });

        setfilterdData(data);
      }
    }

    if (!data.length) {
      data = filterdData || [];
    }

    if (clear) {
      data.forEach((row: { key: string }) => {
        let value = '';
        try {
          if (e.target.value === fetchedData.current.type) {
            value = fetchedData.current[row.key];
          }
        } catch (error) {
          console.error('error here', error);
        }

        setValue(row.key, value);
      });
    }
  };
  const handleOnChange = (e: any) => {
    setConnectorName(e.target.value);
  };

  const handleDynamicChange = (value: any, label: any, index: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [index]: { key: label, value: value },
    }));
  };

  useEffect(() => {
    fetchedData.current = {};
    if (props.tabData?.id) {
      getOnlyProjectConnectorDetails(props.tabData?.id)
        .then((data) => {
          const properties = data.data[0]?.properties || [];
          let type = '';
          properties.forEach((row: any) => {
            fetchedData.current[row.key] = row.value;
            if (row.key === 'type') {
              type = row.value;
            }
          });

          handleOptionChange({
            target: {
              value: type,
            },
          });
        })
        .catch((error) => {
          console.log(error);
          handleOptionChange({
            target: {
              value: '',
            },
          });
        });
    } else {
      handleOptionChange({
        target: {
          value: '',
        },
      });
    }
  }, [props.tabData]);

  return (
    <StyledAddConnector>
      <div className="w-100 flex flex-col gap-5">
        <Typography variant="body1" className="mt-4 mx-4 font-bold title-color">
          Connector Details
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col justify-between"
          style={{ height: 'calc(100vh - 96px)' }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 mx-4">
              <div
                className="form-group w-full py-1 px-0 flex flex-col gap-2"
                key={Math.random().toString()}
              >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Type
                </InputLabel>
                <Select
                  className="h-11 dropdown"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={conncetorType}
                  onChange={(e) => handleOptionChange(e)}
                >
                  {getOptionsRendered.map((item: any) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>

              <div
                className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                key={Math.random().toString()}
              >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Name
                </InputLabel>
                <InputBox
                  defaultValue={props.defaultValues.connectorName}
                  // id={item.key}
                  onBlur={(e: any) => handleOnChange(e)}
                  // onchange={onChange}
                  placeholder="Enter name"
                  register={register}
                  val={props.defaultValues.connectorName || connectorName}
                />
              </div>
            </div>
            {filterdData && filterdData.length && (
              <div className="flex flex-col gap-4">
                <Typography
                  variant="body1"
                  className="mt-1 mx-4 font-bold title-color"
                >
                  Properties
                </Typography>

                <div className=" box-border relative px-4 grid gap-x-5 grid-cols-2 w-full pt-4 border border-b-0 border-l-0 border-r-0">
                  {filterdData.map(
                    (
                      item: { key: string; datatype: string },
                      index: any
                    ): any => {
                      if (item && item.datatype) {
                        switch (item.datatype) {
                          case 'string':
                            return (
                              <div
                                className="w-full  py-1 px-0 flex flex-col gap-2 "
                                // key={generateRandomString()}
                              >
                                <InputLabel shrink htmlFor="bootstrap-input">
                                  {item.key}
                                </InputLabel>
                                <InputBox
                                  defaultValue={''}
                                  id={item.key}
                                  // onchange={onChange}
                                  placeholder={item.key}
                                  register={register}
                                  val={item.key}
                                  val2={{
                                    required: true,
                                    maxLength: 20,
                                  }}
                                />
                                {/* {errors[item.key] && (
                                  <span>This field is required</span>
                                )} */}
                                {errors[item.key] === 'required' && (
                                  <p className="error-text">
                                    {' '}
                                    This field is required
                                  </p>
                                )}
                                {/* {errors?.item.key === 'required' && (
                                  <p className="error-text">
                                    {' '}
                                    This field is required
                                  </p>
                                )}
                                {errors?.item.key === 'maxLength' && (
                                  <p className="error-text">
                                    {' '}
                                    Name cannot exceed 20 characters
                                  </p>
                                )} */}

                                <div
                                  className="invalid-feedback text-red-400"
                                  // key={generateRandomString()}
                                >
                                  {errors[item.key]?.message}
                                </div>
                              </div>
                            );
                          case 'dropdown':
                            return <div>dropdown</div>;
                        }
                      }
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="form-group flex flex-row justify-end items-center gap-2 p-4 border border-b-0 border-l-0 border-r-0">
            <Button
              variant="outlined"
              type="reset"
              className="h-9 text-sm py-2.5 px-6 btn-cancel"
              onClick={() => {
                setSelectedMenu('Reset');
                props.getNewFormData({
                  type: 'close',
                  data: {},
                });
              }}
            >
              Cancel
            </Button>
            {!isValidate && (
              <Button
                type="submit"
                variant="contained"
                className="add-button"
                value={'Save'}
                onClick={() => {
                  setSelectedMenu('Save');
                }}
              >
                Save
              </Button>
            )}
            {isValidate && (
              <Button
                type="submit"
                variant="contained"
                className="add-button"
                value={'Validate'}
                onClick={() => {
                  setSelectedMenu('Validate');
                }}
              >
                Validate
              </Button>
            )}
          </div>
        </form>
      </div>
    </StyledAddConnector>
  );
};

export default AddConnector;
