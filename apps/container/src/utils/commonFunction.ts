import { FormProperty } from '../fake-db/db/data-flow-db';

export function parseProperties(form: any): FormProperty[] {
  const properties: FormProperty[] = [];

  const keys = Object.keys(form);
  if (keys && keys.length > 0) {
    for (let i = 0; i < keys.length; i += 1) {
      if (typeof form[keys[i]] === 'string') {
        const payload: FormProperty = {
          key: keys[i],
          value: form[keys[i]],
        };
        properties.push(payload);
      } else {
        const data = form[keys[i]];

        const arr = [];
        for (let i = 0; i < data?.length; i += 1) {
          arr.push(data[i].value);
        }
        const payload: FormProperty = {
          key: keys[i],
          value: arr.toString(),
        };
        properties.push(payload);
      }
    }
  }

  return properties;
}

// export default { parseProperties };
