import React from 'react';
import { styled } from '@mui/system';
import { Button, Divider, Typography } from '@mui/material';
import CardWithText from 'libs/ui/src/lib/Organism/card-with-text/cardWithText';
import generateRandomString from 'apps/container/src/utils/randomString';
import { Datagrid } from '@gessa/ui';

interface SummaryPageProps {}

const StyledSummaryPage = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const data: any = {
  title: 'All Data Frames',
  dataFrames: [
    {
      title: 'Input',
      subtitle: 'Upto current query index lorem ipsum',
      actions: [
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
      ],
    },
    {
      title: 'Transform',
      subtitle: 'Upto current query index lorem ipsum',
      actions: [
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },

        {
          text: 'Choice',
          style: 'outline',
        },
      ],
    },
    {
      title: 'Output',
      subtitle: 'Upto current query index lorem ipsum',
      actions: [
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },
        {
          text: 'Choice',
          style: 'outline',
        },

        {
          text: 'Choice',
          style: 'outline',
        },
      ],
    },
  ],
};

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

const SummaryPage = (props: SummaryPageProps) => {
  return (
    <StyledSummaryPage>
      <div className="relative flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden p-1 gap-3">
        <div className="flex flex-row">
          <Typography variant="h5">{data.title}</Typography>
        </div>
        <div
          className="flex flex-col justify-start items-start flex-grow w-full p-1 overflow-y-auto overflow-x-hidden"
          style={{ height: 'calc(100vh - 205px)' }}
        >
          {data &&
            data.dataFrames &&
            data.dataFrames.length &&
            data.dataFrames.map((frame: any) => {
              return (
                <div
                  key={generateRandomString()}
                  className="flex flex-col gap-5 w-full"
                >
                  <CardWithText
                    key={generateRandomString()}
                    title={frame.title}
                    subtitle={frame.subtitle}
                    actions={frame.actions}
                  ></CardWithText>
                  <Divider
                    key={generateRandomString()}
                    orientation="horizontal"
                  />
                </div>
              );
            })}
          <div className="flex flex-col gap-3 w-full ">
            <Typography variant="h5">{'Students'}</Typography>
            <Datagrid columns={columns} rows={rows}></Datagrid>
          </div>
        </div>
        <div className="flex flex-col" style={{ height: '40px' }}>
          <div className="flex flex-col w-full bottom-0 absolute">
            <div className="form-group flex flex-row justify-end items-center gap-2 p-2">
              <Button
                type="submit"
                variant="contained"
                value={'Save'}
                className="h-9 text-sm py-2.5 px-6"
              >
                Deploy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledSummaryPage>
  );
};

export default SummaryPage;
