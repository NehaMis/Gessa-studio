export const pipelineForm = [
  {
    title: 'Add Pipeline',
    form: [
      {
        type: 'text',
        value: [''],
        label: 'Name',
        name: 'name',
        placeholder: 'Enter Name',
        options: [],
        required: true,
        validation: {
          name: 'name',
          required: true,
          errorMessage: 'Name is required',
          min: 0,
          max: 0,
        },
      },

      {
        type: 'textarea',
        value: [''],
        label: 'Description',
        name: 'description',
        placeholder: 'Enter Description',
        options: [],
        required: true,
        validation: {
          name: 'description',
          required: true,
          errorMessage: 'Description required',
          min: 0,
          max: 0,
        },
      },
    ],
  },
];

export default pipelineForm;
