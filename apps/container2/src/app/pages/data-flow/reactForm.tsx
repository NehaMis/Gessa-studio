/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Input from '@mui/material/Input';
import { CodeOff } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { IconComponent } from '@gessa/ui';

export interface ReactForm {
  formData: Array<any>;
  validationSchema: any;
  getNewFormData: any;
  closeDrawer: any;
}
const ReactForm = (props: ReactForm) => {
  const theme = useTheme();

  // const validationSchema = props.validationSchema;

  const closeDrawerEvent = () => {
    props.closeDrawer(true);
  };
  const serilizeDefaultValues = () => {
    const obj: any = {};
    if (props && props.formData && props.formData.length) {
      for (let i = 0; i < props.formData.length; i += 1) {
        const str: Array<string> = Object.keys(props.formData[i]);
        // Object.assign(obj, {str['name']:props.formData[i].value});
        obj[props.formData[i].name] = props.formData[i].value[0];
      }
    }
    return obj;
  };

  const serilizeValidationSchema = (formData: any) => {
    const validationObjFinal: any = {};
    const arr = [];
    for (let i = 0; i < formData.length; i += 1) {
      const payload: any = [];
      payload[formData[i].validation.name] = Yup.string();
      if (formData[i].validation.required) {
        payload[formData[i].validation.name] = Yup.string().required();
      }
      if (
        formData[i].validation.required &&
        formData[i].validation.errorMessage
      ) {
        payload[formData[i].validation.name] = Yup.string().required(
          formData[i].validation.errorMessage
        );
      }
      Object.assign(validationObjFinal, payload);
    }
    return Yup.object().shape(validationObjFinal);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(serilizeValidationSchema(props.formData)),
    defaultValues: serilizeDefaultValues(),
  });

  const [formObj, setNewFormObj] = useState({});

  const [multiSelectData, setMultiSelect] = useState(['']);
  const [selectedValue, setSelectedValue] = useState<any>();

  const onSubmit = (data: any) => {
    const obj = JSON.stringify(data, null, 2);
    setNewFormObj(obj);
    props.getNewFormData(data);
  };
  const getOptionsRendered = (data: any) => {
    return (
      data &&
      data.length &&
      data.map((myopt: any) => {
        return (
          <option key={Math.random().toString()} value={myopt.value}>
            {myopt.label}
          </option>
        );
      })
    );
  };

  const handleChange = (e: any) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions;

    const newColors: any = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      newColors.push(selectedOptions[i].value);
    }

    setMultiSelect(newColors);
  };

  const onSelect = (selectedList: any, selectedItem: any) => {};

  const onRemove = (selectedList: any, removedItem: any) => {};
  const data = [
    {
      value: '1',
      label: 'tag 1',
    },
    {
      value: '2',
      label: 'tag 2',
    },
    {
      value: 3,
      label: 'tag 3',
    },
    {
      value: 4,
      label: 'tag 4',
    },
    {
      value: 5,
      label: 'tag 5',
    },
    {
      value: 6,
      label: 'tag 6',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <div
        className="flex flex-row justify-between items-center "
        style={{
          borderBottomWidth: '1px',
          borderBottomColor: theme.palette.background.paper,
        }}
      >
        <p className="text-xl  leading-8">Add Pipeline</p>
        <div onClick={closeDrawerEvent}>
          <IconComponent
            name={'Close'}
            color={theme.palette.getContrastText(
              theme.palette.background.paper
            )}
            label={'Close'}
            key={'a'}
            size={20}
          />
        </div>
      </div>
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {props.formData &&
            props.formData.length &&
            props.formData.map(
              (form: {
                label: string;
                type: string;
                name: string;
                placeholder: string;
                options: Array<any>;
                value: Array<string>;
              }) => {
                if (form && form.type) {
                  switch (form.type) {
                    case 'text':
                      return (
                        <div
                          className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                          key={Math.random().toString()}
                        >
                          <label key={Math.random().toString()}>
                            {form.label}
                          </label>
                          <input
                            key={Math.random().toString()}
                            style={{
                              backgroundColor: theme.palette.background.paper,
                              color: theme.palette.getContrastText(
                                theme.palette.background.paper
                              ),
                            }}
                            type="text"
                            placeholder={form.placeholder}
                            {...register(form.name)}
                            className={`form-control ${
                              errors[form.name]
                                ? 'is-invalid leading-8 p-2 h-10 text-sm'
                                : ' leading-8 p-2 h-10 text-sm'
                            }`}
                          />
                          <div
                            className="invalid-feedback text-red-500"
                            key={Math.random().toString()}
                          >
                            {errors[form.name]?.message}
                          </div>
                        </div>
                      );

                      break;
                    case 'select':
                      return (
                        <div
                          className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                          key={Math.random().toString()}
                        >
                          <label key={Math.random().toString()}>
                            {form.label}
                          </label>
                          <select
                            className="leading-8 p-2 h-10 text-sm"
                            {...register(form.name)}
                            key={Math.random().toString()}
                            style={{
                              backgroundColor: theme.palette.background.paper,
                              color: theme.palette.getContrastText(
                                theme.palette.background.paper
                              ),
                            }}
                            placeholder={form.placeholder}
                          >
                            {getOptionsRendered(form.options)}
                          </select>
                        </div>
                      );
                      break;
                    case 'multiselect':
                      return (
                        <div
                          className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                          key={Math.random().toString()}
                        >
                          <label key={Math.random().toString()}>
                            {form.label}
                          </label>
                          <select
                            className="leading-8 p-2 h-10 text-sm"
                            {...register(form.name)}
                            key={Math.random().toString()}
                            style={{
                              backgroundColor: theme.palette.background.paper,
                              color: theme.palette.getContrastText(
                                theme.palette.background.paper
                              ),
                            }}
                            placeholder={form.placeholder}
                          >
                            {getOptionsRendered(form.options)}
                          </select>
                        </div>
                      );

                      break;
                  }
                } else {
                  return (
                    <div
                      className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                      key={Math.random().toString()}
                    >
                      <label key={Math.random().toString()}>{form.label}</label>
                      <input
                        key={Math.random().toString()}
                        type="text"
                        style={{
                          backgroundColor: theme.palette.background.dark,
                          color: theme.palette.getContrastText(
                            theme.palette.background.paper
                          ),
                        }}
                        {...register('username')}
                        className={`form-control ${
                          errors.username
                            ? 'is-invalid leading-8 p-2 h-10 text-sm'
                            : 'leading-8 p-2 h-10 text-sm'
                        }`}
                        placeholder={form.placeholder}
                      />
                      <div
                        className="invalid-feedback text-red-500"
                        key={Math.random().toString()}
                      >
                        {errors.username?.message}
                      </div>
                    </div>
                  );
                }
              }
            )}
          <div className="form-group flex flex-row justify-start items-center gap-2">
            <Button
              variant="contained"
              type="submit"
              className="h-9 text-sm py-2.5 px-6"
            >
              Save
            </Button>
            <Button variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactForm;
