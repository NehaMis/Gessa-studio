import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { Button, TextInputField } from '@gessa/ui';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function SchemaCard(props: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  console.log(props.displayArray);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const expandedState = {};
  return (
    <Box>
      {props.displayArray.map((fieldRecord: any, index: number) => {
        return (
          <Accordion
            expanded={expanded === fieldRecord.sectionTitle}
            onChange={handleChange(fieldRecord.sectionTitle)}
            sx={{
              mb: 2,
              '& .Mui-expanded': {
                minHeight: '48px !important',
                marginY:"0px !important",
                display:"flex",
                alignItems:"center"
              },
              '& .MuiAccordionSummary-content':{
                minHeight: '48px !important',
                marginY:"0px !important",
                display:"flex",
                alignItems:"center"
              },
              '& .MuiAccordionDetails-root':{
                padding:"20px 16px 16px !important"
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: 'fit-content', flexShrink: 0 }}>
                {expanded === fieldRecord.sectionTitle
                  ? fieldRecord.sectionTitle
                  : fieldRecord.fieldName}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                {expanded === fieldRecord.sectionTitle ? null : (
                  <FiberManualRecordIcon
                    sx={{
                      color: 'white',
                      width: '10px',
                      height: '10px',
                      mx: 1.5,
                    }}
                  />
                )}
                {expanded === fieldRecord.sectionTitle ? '' : fieldRecord.type}
              </Typography>
            </AccordionSummary>
            <Box sx={{display:"flex", justifyContent:"center"}}>{expanded === fieldRecord.sectionTitle ? <hr style={{width:"98%"}}/> : null}</Box>
            <AccordionDetails>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flevaluexDirection: 'row',
                  marginBottom: '32px',
                  justifyContent: 'flex-start',
                  gap: '15%',
                }}
              >
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Field Name'}
                  value={fieldRecord.fieldName}
                  isDisabled={true}
                />
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Type'}
                  value={fieldRecord.type}
                  isDisabled={true}
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '32px',
                  justifyContent: 'flex-start',
                  gap: '15%',
                }}
              >
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Mandatory'}
                  value={fieldRecord.mandatory === true ? 'Yes' : 'No'}
                  isDisabled={true}
                />
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Unique'}
                  value={fieldRecord.unique === true ? 'Yes' : 'No'}
                  isDisabled={true}
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: '15%',
                }}
              >
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Null Allowed'}
                  value={fieldRecord.nullAllowed === true ? 'Yes' : 'No'}
                  isDisabled={true}
                />
                <TextInputField
                  variant={'filled'}
                  color={'primary'}
                  label={'Default Value'}
                  value={fieldRecord.defaultValue}
                  isDisabled={true}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
