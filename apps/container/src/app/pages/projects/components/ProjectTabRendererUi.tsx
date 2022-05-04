import React, { memo, useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AddConnector from '../../add-connector/AddConnector';
import AddPipeline from '../../add-pipeline/AddPipeline';
import DataFlow from '../../data-flow/DataFlow';
import { IRProjectTab } from '../store/projectTabSlice';
import TabDefaultUi from './TabDefaultUi';
import TabDefinitionUi from './TabDefinitionUi';
import TabScheduleUi from './TabScheduleUi';
import TabStatsUi from './TabStatsUi';

import { connectorForm } from './../../../model/connectorForm.model';
import pipelineForm from '../../../model/pipelineForm.model';
import CustomSnackbar from './CustomSnackbar';

interface ProjectTabRendererUiProps {
  tab: any;
  closeTab: (formData: any, tabData?: any) => void;
  connectorAllType?: any;
  validateForm: (data: any) => any;
  isValidate: boolean;
}

const formData = [...connectorForm];

const formData3 = [...pipelineForm];

const ProjectTabRendererUi = (props: ProjectTabRendererUiProps) => {
  const [tabData, setTabData] = useState();
  const performAction = (formData: any, tabData: any) => {
    props.closeTab({ formData, tabData });
  };
  const validateForm = (data: any) => {
    console.log(data);
    const payload = {
      endpointId: 'ep001',
      endpointName: 'dataeaze',
      endpointType: 'MySQL',
      details: data.data.properties,
    };
    props.validateForm(payload);
  };

  const renderProjectTab = (
    data: any,
    performAction: any,
    connectorAllType: any
  ): any => {
    const handleSubmittedForm = (formData: any) => {
      if (formData && formData.type === 'close') {
        performAction(formData, data);
      }
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (data && data.type) {
      switch (data.type.toLowerCase()) {
        case 'definition':
          return (
            <div>
              <TabDefinitionUi tab={data} />
            </div>
          );
        case 'schedule':
          return (
            <div>
              <TabScheduleUi tab={data} />
            </div>
          );
        case 'stats':
          return (
            <div>
              <TabStatsUi tab={data} />
            </div>
          );
        case 'connectors':
          // eslint-disable-next-line no-case-declarations
          const payload: any = {
            connectorName: data.name,
            type: data.type,
          };
          return (
            <div>
              <AddConnector
                title={formData[0].title}
                formData={formData}
                connectorAllType={connectorAllType}
                defaultValues={payload}
                getNewFormData={handleSubmittedForm}
                tabData={props.tab}
                validateForm={validateForm}
                isValidate={props.isValidate}
              />
            </div>
          );
        case 'pipelines':
          return (
            <div>
              {/* <AddPipeline
                title={formData3[0].title}
                formData={formData3}
                getNewFormData={handleSubmittedForm}
              /> */}
            </div>
          );
        case 'getstarted':
          return (
            <div className="flex  justify-center items-center h-full">
              <TabDefaultUi tab={data} />
            </div>
          );
      }
    } else {
      return <div>content type not found:else part executed</div>;
    }
  };

  useMemo(() => {
    setTabData(props.tab);
  }, [props.tab]);

  return (
    <div className="w-full h-full">
      {renderProjectTab(tabData, performAction, props.connectorAllType)}
    </div>
  );
};

export default memo(ProjectTabRendererUi);
