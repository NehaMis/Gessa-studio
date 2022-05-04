import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export interface IFormInputs {
  title: string;
  formData: Array<any>;
  validationSchema?: any;
  getNewFormData: any;
}

const AddProjectForm = (props: IFormInputs) => {
  const theme = useTheme();
  const serilizeDefaultValues = () => {
    const obj: any = {};
    if (props && props.formData && props.formData.length) {
      for (let i = 0; i < props.formData.length; i += 1) {
        for (let j = 0; j < props.formData[i].form.length; j += 1) {
          const str: Array<string> = Object.keys(props.formData[i].form[j]);
          // Object.assign(obj, {str['name']:props.formData[i].value});
          obj[props.formData[i].form[j].name] =
            props.formData[i].form[j].value[0];
        }
      }
    }
    return obj;
  };

  const serilizeValidationSchema = (formData: any) => {
    const validationObjFinal: any = {};
    const arr = [];
    for (let i = 0; i < formData.length; i += 1) {
      for (let j = 0; j < formData[i].form.length; j += 1) {
        const payload: any = [];
        payload[formData[i].form[j].validation.name] = Yup.string();
        if (formData[i].form[j].validation.required) {
          payload[formData[i].form[j].validation.name] = Yup.string();
          //   Object.assign(validationObjFinal, payload);
        }
        if (
          formData[i].form[j].validation.required &&
          formData[i].form[j].validation.errorMessage
        ) {
          payload[formData[i].form[j].validation.name] = Yup.string().required(
            formData[i].form[j].validation.errorMessage
          );
          Object.assign(validationObjFinal, payload);
        }
      }
    }
    return validationObjFinal;
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      Yup.object().shape(serilizeValidationSchema(props.formData))
    ),
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

  return (
    <div className="w-full flex flex-col gap-5">
      {props.title && (
        <div className="flex flex-row justify-start items-center ">
          <p className="text-xl  leading-8">{props.title}</p>
          {/* <Divider
            orientation={'horizontal'}
            color={'#ffffff'}
            variant={'fullWidth'}
            light={true}
          /> */}
        </div>
      )}
      <div className="relative p-2 flex flex-col flex-grow w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {props.formData.length &&
            props.formData.map((formElement: any) => {
              return (
                <div key={Math.random().toString()}>
                  {formElement.title && (
                    <div
                      style={{
                        borderBottomWidth: '1px',
                        borderBottomColor: theme.palette.background.paper,
                      }}
                    >
                      <div className="mb-3">{formElement.title}</div>
                    </div>
                  )}
                  <div
                    className=" box-border relative  grid gap-x-5 gap-y-2 grid-cols-2 w-full"
                    key={Math.random().toString()}
                  >
                    {formElement &&
                      formElement.form &&
                      formElement.form.length &&
                      formElement.form.map(
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
                                        backgroundColor:
                                          theme.palette.background.paper,
                                        color: theme.palette.getContrastText(
                                          theme.palette.background.paper
                                        ),
                                      }}
                                      type="text"
                                      placeholder={form.placeholder}
                                      {...register(form.name)}
                                      className={`form-control rounded ${
                                        errors[form.name]
                                          ? 'is-invalid leading-8 p-2 h-10 text-sm'
                                          : ' leading-8 p-2 h-10 text-sm'
                                      }`}
                                    />
                                    <div
                                      className="invalid-feedback text-red-400"
                                      key={Math.random().toString()}
                                    >
                                      {errors[form.name]?.message}
                                    </div>
                                  </div>
                                );
                                break;
                              case 'password':
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
                                        backgroundColor:
                                          theme.palette.background.paper,
                                        color: theme.palette.getContrastText(
                                          theme.palette.background.paper
                                        ),
                                      }}
                                      type="password"
                                      placeholder={form.placeholder}
                                      {...register(form.name)}
                                      className={`form-control ${
                                        errors[form.name]
                                          ? 'is-invalid leading-8 p-2 h-10 text-sm'
                                          : ' leading-8 p-2 h-10 text-sm'
                                      }`}
                                    />
                                    <div
                                      className="invalid-feedback text-red-400"
                                      key={Math.random().toString()}
                                    >
                                      {errors[form.name]?.message}
                                    </div>
                                  </div>
                                );
                                break;
                              case 'textarea':
                                return (
                                  <div
                                    className="form-group w-full  py-1 px-0 flex flex-col gap-2"
                                    key={Math.random().toString()}
                                  >
                                    <label key={Math.random().toString()}>
                                      {form.label}
                                    </label>
                                    <textarea
                                      {...register('description')}
                                      cols={100}
                                      rows={7}
                                      style={{
                                        backgroundColor:
                                          theme.palette.background.paper,
                                        color: theme.palette.getContrastText(
                                          theme.palette.background.paper
                                        ),
                                        height: '150px',
                                      }}
                                      placeholder={form.placeholder}
                                      className={`form-control ${
                                        errors[form.name]
                                          ? 'is-invalid leading-8 p-2 h-10 text-sm'
                                          : ' leading-8 p-2 h-10 text-sm'
                                      }`}
                                      {...register(form.name)}
                                    />
                                    <div
                                      className="invalid-feedback text-red-400"
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
                                        backgroundColor:
                                          theme.palette.background.paper,
                                        color: theme.palette.getContrastText(
                                          theme.palette.background.paper
                                        ),
                                      }}
                                      placeholder={form.placeholder}
                                    >
                                      {getOptionsRendered(form.options)}
                                    </select>
                                    <div
                                      className="invalid-feedback text-red-400"
                                      key={Math.random().toString()}
                                    >
                                      {errors[form.name]?.message}
                                    </div>
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
                                        backgroundColor:
                                          theme.palette.background.paper,
                                        color: theme.palette.getContrastText(
                                          theme.palette.background.paper
                                        ),
                                      }}
                                      placeholder={form.placeholder}
                                    >
                                      {getOptionsRendered(form.options)}
                                    </select>
                                    <div
                                      className="invalid-feedback text-red-400"
                                      key={Math.random().toString()}
                                    >
                                      {errors[form.name]?.message}
                                    </div>
                                  </div>
                                );
                                break;
                            }
                          } else {
                            //do nothing
                          }
                        }
                      )}
                  </div>
                </div>
              );
            })}
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
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
