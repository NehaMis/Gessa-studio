import { Button, TextField } from '@mui/material';
// import { Button } from '@gessa/ui';
// import { TextInputField } from '@gessa/ui';
// import { Dropdown } from '@gessa/ui';
import { Transfer } from '@gessa/ui';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Transfer from './transfer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Switch from '@mui/material/Switch';
// import
interface FieldsObject {
  open: boolean;
  fieldName: string;
  type: string;
  mandatory: boolean;
  unique: boolean;
  nullAllowed: boolean;
  defaultValue: string;
}

interface AddSchemaObjects {
  schemaName: string;
  fields: FieldsObject[];
}

interface FilterSchemaObject {
  search: string;
  schemaName: string;
  type: string;
  createdBy: string;
  createdOn: Array<any>;
}

export default function SchemaSettings() {
  const [filterDrawer, setFilterDrawer] = useState<boolean>(false);
  const [columnOptionDrawer, setColumnOptionDrawer] = useState<boolean>(false);
  const [addSchemaDrawer, setAddSchemaDrawer] = useState<boolean>(false);

  const [filterSchemaObject, setFilterSchemaObject] =
    useState<FilterSchemaObject>({
      search: '',
      schemaName: '',
      type: 'selectType',
      createdBy: 'createdBy',
      createdOn: [],
    });

  const [isFilterSchemaValid, setIsFilterSchemaValid] =
    useState<boolean>(false);

  function isValildFilterSchemaObjet() {
    if (filterSchemaObject.schemaName !== '') {
      setIsFilterSchemaValid(true);
    } else {
      setIsFilterSchemaValid(false);
    }
  }

  const filterSchemaOnchangeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    isValildFilterSchemaObjet();
    setFilterSchemaObject({ ...filterSchemaObject, [name]: value });
  };

  const saveFilterSchemaObject = () => {
    console.log(filterSchemaObject);
  };

  const [columnOptionObject, setColumnOptionObject] = useState<any>(null);
  const [addSchemaObject, setAddSchemaObject] = useState<AddSchemaObjects>({
    schemaName: '',
    fields: [
      {
        open: true,
        fieldName: '',
        type: 'integer',
        mandatory: false,
        unique: false,
        nullAllowed: false,
        defaultValue: 'string',
      },
    ],
  });
  const [isValidAddSchema, setIsValidAddSchema] = useState<boolean>(false);
  function isValidAddSchemaObject() {
    let flag = false;
    addSchemaObject.fields.map((field) => {
      if (field.fieldName !== '' && addSchemaObject.schemaName !== '') {
        flag = true;
      }
    });
    setIsValidAddSchema(flag);
  }

  const AddSchemaObjectOnChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'schemaName') {
      setAddSchemaObject({ ...addSchemaObject, [name]: value });
    }

    isValidAddSchemaObject();
  };

  const addSChemaObjectFieldsOnchangeHandler = (e: any, index: number) => {
    const name = e.target.name;

    const tempFields: any = addSchemaObject.fields;
    if (name === 'mandatory' || name === 'unique' || name === 'nullAllowed') {
      tempFields[index][name] = e.target.checked;
    } else {
      tempFields[index][name] = e.target.value;
    }

    setAddSchemaObject({ ...addSchemaObject, fields: [...tempFields] });

    isValidAddSchemaObject();
  };

  const saveSchemaHandler = () => {
    console.log(addSchemaObject);

    const schemas = addSchemaDb;
    schemas.push(addSchemaObject);
    setAddSchemaDb(schemas);
  };

  const closeFeild = (fieldIndex: number) => {
    const tempFields = addSchemaObject.fields.map(
      (field: FieldsObject, indx) => {
        console.log('hello' + field);
        if (indx === fieldIndex) {
          return {
            ...field,
            open: !field.open,
          };
        } else {
          return { ...field, open: false };
        }
      }
    );

    setAddSchemaObject({ ...addSchemaObject, fields: [...tempFields] });
  };

  const addMoreField = () => {
    const tempFields = addSchemaObject.fields.map((field) => ({
      ...field,
      open: false,
    }));
    setAddSchemaObject({
      ...addSchemaObject,
      fields: [
        ...tempFields,
        {
          open: true,
          fieldName: '',
          type: '',
          mandatory: false,
          unique: false,
          nullAllowed: false,
          defaultValue: '',
        },
      ],
    });
  };

  const removeField = (fieldIndex: number) => {
    const tempFields = addSchemaObject.fields.filter(
      (field, index) => fieldIndex !== index
    );
    setAddSchemaObject({ ...addSchemaObject, fields: [...tempFields] });
  };

  const [addSchemaDb, setAddSchemaDb] = useState<AddSchemaObjects[]>([]);

  return (
    <Box
      sx={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Button
        onClick={() => {
          setAddSchemaDrawer(!addSchemaDrawer);
        }}
      >
        <AddIcon />
      </Button>
      <Button onClick={() => setFilterDrawer(!filterDrawer)}>
        <FilterAltOutlinedIcon />
      </Button>
      <Button onClick={() => setColumnOptionDrawer(!columnOptionDrawer)}>
        <NotesOutlinedIcon />
      </Button>

      {/* FilterDrawer Content .............................................  */}
      <Drawer
        open={filterDrawer}
        anchor="right"
        onClose={() => setFilterDrawer(false)}
      >
        <>
          <Box
            sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              boxSizing: 'border-box',
              minWidth: '360px',
            }}
          >
            <Typography
              component="h6"
              sx={{ fontWeight: '600', fontSize: '14px' }}
            >
              Filter
            </Typography>
            <CloseIcon
              onClick={() => {
                setFilterDrawer(false);
              }}
              sx={{ fontSize: '21px', cursor: 'pointer' }}
            />
          </Box>
          <Divider />

          <Box sx={{ padding: '20px 10px', boxSizing: 'border-box' }}>
            <FormControl sx={{ width: '100%' }} size="small">
              <TextField
                name="search"
                value={filterSchemaObject.search}
                onChange={(e) => {
                  filterSchemaOnchangeHandler(e);
                }}
                size="small"
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  endAdornment: <SearchIcon />,
                  className: 'assign-height',
                }}
              />
            </FormControl>
          </Box>
          <Divider />

          <Box sx={{ padding: '15px 10px' }}>
            <FormControl sx={{ width: '100%' }} size="small">
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  paddingLeft: '10px',
                }}
              >
                Schema Name
              </Typography>
              <TextField
                name="schemaName"
                value={filterSchemaObject.schemaName}
                onChange={(e) => {
                  filterSchemaOnchangeHandler(e);
                }}
                placeholder="Schema name"
                size="small"
              />
            </FormControl>
          </Box>

          <Box sx={{ padding: '10px 10px' }}>
            <FormControl sx={{ width: '100%' }} size="small">
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  paddingLeft: '10px',
                }}
              >
                Type
              </Typography>
              <Select
                name="type"
                onChange={(e) => {
                  filterSchemaOnchangeHandler(e);
                }}
                value={filterSchemaObject.type}
              >
                <MenuItem value="selectType">Select Type</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ padding: '10px 10px' }}>
            <FormControl sx={{ width: '100%' }} size="small">
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  paddingLeft: '10px',
                }}
              >
                Created By
              </Typography>
              <Select
                name="createBy"
                onChange={(e) => {
                  filterSchemaOnchangeHandler(e);
                }}
                value={filterSchemaObject.createdBy}
              >
                <MenuItem value="createdBy">Created By</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ padding: '0px 10px' }}>
            <Typography
              sx={{ marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}
            >
              Created On
            </Typography>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="From"
            endText="To"
            value={[null, null]}
            onChange={() => null}
            renderInput={(startProps: any, endProps: any) => (
              <React.Fragment>
                <TextField
                  size="small"
                  sx={{ width: '160px' }}
                  {...startProps}
                />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField size="small" sx={{ width: '160px' }} {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider> */}
          </Box>

          <Box
            sx={{
              padding: '10px',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'end',
              bottom: '0px',
              right: '0px',
              width: '100%',
              borderTop: '1px solid #E0E0E0',
              boxSizing: 'border-box',
            }}
          >
            <br />
            <Button
              sx={{ marginRight: '10px' }}
              variant="outlined"
              color="primary"
            >
              Cancle
            </Button>
            <Button
              disabled={!isFilterSchemaValid}
              onClick={saveFilterSchemaObject}
              variant="contained"
              color="primary"
            >
              Apply
            </Button>
          </Box>
        </>
      </Drawer>

      {/* ColumnOption Content ........................................................  */}
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={columnOptionDrawer}
        onClose={() => setColumnOptionDrawer(false)}
      >
        <DialogTitle>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              // padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
              Column Option
            </Typography>
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                setColumnOptionDrawer(false);
              }}
            />
          </Box>
        </DialogTitle>
        <Divider />

        <DialogContent>
          <Box>
            <Typography
              sx={{ fontSize: '16px', fontWeight: '400', marginBottom: '20px' }}
            >
              Add or remove Column. To change the column order, drag and drop a
              field.
            </Typography>

            <Box sx={{ mt: 5 }}>
              <Transfer
                leftListLabel="Available Fields"
                rightListLabel="Selected Fields"
                leftList={[
                  { label: 'displayerror', value: 'error' },
                  { label: 'displayerror1', value: 'error1' },
                  { label: 'displayerror2', value: 'error2' },
                  { label: 'displayerror3', value: 'error3' },
                ]}
                rightList={[
                  { label: 'displayerror4', value: 'error4' },
                  { label: 'displayerror5', value: 'error5' },
                  { label: 'displayerror6', value: 'error6' },
                  { label: 'displayerror7', value: 'error7' },
                ]}
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Box
            sx={{
              padding: '0px 10px',
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Button variant="outlined" color="primary">
              cancle
            </Button>
            <Box>
              <Button
                sx={{ marginRight: '10px' }}
                variant="outlined"
                color="primary"
              >
                Restore Defaults
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>

      {/* AddSchema Drawer ...................................................................................  */}
      <Drawer
        anchor="right"
        open={addSchemaDrawer}
        onClose={() => {
          setAddSchemaDrawer(false);
        }}
      >
        <Box
          sx={{ minWidth: '574px', minHeight: '100%', position: 'relative' }}
        >
          <Box
            sx={{
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{ fontSize: '22px', fontWeight: '700' }}
              variant="h6"
            >
              Add Schema
            </Typography>
            <CloseIcon
              onClick={() => {
                setAddSchemaDrawer(false);
              }}
              sx={{ fontSize: '15px', cursor: 'pointer' }}
            />
          </Box>
          <Divider />

          <Box sx={{ padding: '10px', boxSizing: 'border-box' }}>
            <FormControl sx={{ width: '100%', mb: 4 }}>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  paddingLeft: '15px',
                }}
              >
                Schema Name
              </Typography>
              <TextField
                placeholder="Schema name"
                name="schemaName"
                onChange={(e) => {
                  AddSchemaObjectOnChangeHandler(e);
                }}
                value={addSchemaObject.schemaName}
                sx={{ fontSize: '14px', fontWeight: '400' }}
                size="small"
              />
            </FormControl>
            <Box sx={{ minHeight: '420px', height: 'auto' }}>
              {addSchemaObject.fields.map((field, index) => (
                <Accordion
                  key={index}
                  expanded={field.open}
                  onChange={() => closeFeild(index)}
                  sx={{ mb: 2 }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>
                      {field.open ? `Field ${index + 1}` : 'User ID .Integer'}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      borderTop: '1px solid rgba(0, 0, 0, .125)',
                      margin: '0px 10px',
                      padding: '8px 0px 16px',
                    }}
                  >
                    <FormControl sx={{ width: '100%' }} size="small">
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: '400',
                          paddingLeft: '10px',
                        }}
                      >
                        Field Name
                      </Typography>
                      <TextField
                        name="fieldName"
                        value={field.fieldName}
                        onChange={(e) => {
                          addSChemaObjectFieldsOnchangeHandler(e, index);
                        }}
                        placeholder="Enter Field Name"
                        size="small"
                      />
                    </FormControl>

                    <FormControl sx={{ width: '100%', mt: 2 }} size="small">
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: '400',
                          paddingLeft: '10px',
                        }}
                      >
                        Type
                      </Typography>
                      <Select
                        value={field.type}
                        onChange={(e) => {
                          addSChemaObjectFieldsOnchangeHandler(e, index);
                        }}
                        name="type"
                      >
                        <MenuItem value="string">String</MenuItem>
                        <MenuItem value="integer">Integer</MenuItem>
                        <MenuItem value="boolean">Boolean</MenuItem>
                        <MenuItem value="decimal">Decimal</MenuItem>
                        <MenuItem value="date">Date</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                      </Select>
                    </FormControl>

                    <Box sx={{ mt: 3, mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Typography
                          sx={{ fontSize: '12px', fontWeight: '400' }}
                        >
                          Mandatory
                        </Typography>
                        <Switch
                          name="mandatory"
                          onChange={(e) => {
                            addSChemaObjectFieldsOnchangeHandler(e, index);
                          }}
                          checked={field.mandatory}
                          size="small"
                        />
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Typography
                          sx={{ fontSize: '12px', fontWeight: '400' }}
                        >
                          Unique
                        </Typography>
                        <Switch
                          name="unique"
                          size="small"
                          onChange={(e) => {
                            addSChemaObjectFieldsOnchangeHandler(e, index);
                          }}
                          checked={field.unique}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Typography
                          sx={{ fontSize: '12px', fontWeight: '400' }}
                        >
                          NullAllowed
                        </Typography>
                        <Switch
                          name="nullAllowed"
                          size="small"
                          onChange={(e) => {
                            addSChemaObjectFieldsOnchangeHandler(e, index);
                          }}
                          checked={field.nullAllowed}
                        />
                      </Box>
                    </Box>

                    <FormControl sx={{ width: '100%', mb: 2 }} size="small">
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: '400',
                          paddingLeft: '10px',
                        }}
                      >
                        Default Value
                      </Typography>
                      <Select
                        name="defaultValue"
                        placeholder="String"
                        value={field.defaultValue}
                        onChange={(e) => {
                          addSChemaObjectFieldsOnchangeHandler(e, index);
                        }}
                        sx={{ fontSize: '14px', fontWeight: '400' }}
                      >
                        <MenuItem value="string">String</MenuItem>
                      </Select>
                    </FormControl>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Typography
                        onClick={() => removeField(index)}
                        sx={{
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '400',
                          color: 'red',
                        }}
                      >
                        - Remove
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}

              <Typography
                onClick={addMoreField}
                sx={{
                  color: '#1872C6',
                  fontSize: '13px',
                  mt: 1,
                  cursor: 'pointer',
                }}
              >
                + Add More
              </Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
                Cancle
              </Button>
              <Button
                disabled={!isValidAddSchema}
                onClick={saveSchemaHandler}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
