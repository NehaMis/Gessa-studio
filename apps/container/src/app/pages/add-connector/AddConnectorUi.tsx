import { useState, useEffect } from 'react';
import { alpha, styled, useTheme } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { handleInputChange } from 'react-select/dist/declarations/src/utils';
import { Controller, useForm } from 'react-hook-form';

import {
  Autocomplete,
  Button,
  Typography,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import { parseProperties } from 'apps/container/src/utils/commonFunction';
import {
  getOnlyProjectConnectorDetails,
  getProjectConnectorDetails,
} from '../projects/store/projectContentTreeSlice';
import generateRandomString from 'libs/ui/src/static/randomString';

const StyledAddConnector = styled('div')(({ theme }) => {
  return {
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

const AddConnectorUi = ({
  onSubmit,
  handleOptionChange,
  conncetorType,
  getOptionsRendered,
  handleOnChange,
  defValue,
  connectorName,
  filterData,
  formData,
  validate,
}: any): any => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(Yup.object().shape(validate(formData))),
    // defaultValues: props.defaultValues,
  });

  return (
    <StyledAddConnector>
      <div className="w-100 flex flex-col gap-5">
        <Typography variant="body1" className="mt-4 mx-4">
          Add Connector
        </Typography>
        <form
          onSubmit={() => handleSubmit(onSubmit)}
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
                  className="h-12"
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
                <BootstrapInput
                  {...register(defValue || connectorName)}
                  defaultValue={defValue}
                  // id={item.key}
                  onBlur={(e) => handleOnChange(e)}
                  // onchange={onChange}
                  placeholder="Enter name"
                />
              </div>
            </div>
            {filterData && filterData.length && (
              <div className="flex flex-col gap-4">
                <Typography variant="body1" className="mt-1 mx-4">
                  Properties
                </Typography>

                <div className=" box-border relative px-4 grid gap-x-5 grid-cols-2 w-full pt-4 border border-b-0 border-l-0 border-r-0">
                  {filterData.map(
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
                                key={generateRandomString()}
                              >
                                <InputLabel shrink htmlFor="bootstrap-input">
                                  {item.key}
                                </InputLabel>
                                <BootstrapInput
                                  {...register(item.key, {
                                    required: true,
                                    maxLength: 20,
                                  })}
                                  defaultValue={''}
                                  id={item.key}
                                  placeholder={item.key}
                                />
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
                                  key={generateRandomString()}
                                >
                                  {/* {errors[item.key]?.message} */}
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
              className="h-9 text-sm py-2.5 px-6"
              onClick={() => {
                const payload = {
                  type: 'close',
                  data: {},
                };
                formData(payload);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="h-9 text-sm "
              value={'Save'}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </StyledAddConnector>
  );
};

export default AddConnectorUi;
