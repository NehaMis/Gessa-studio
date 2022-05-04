import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from '@mui/material';
import { IRProjectTab, IRProjectTabs } from '../store/projectTabSlice';
import { Context } from './Context';
// import {
//   removeTab,
//   setActiveTab,;
//   updateTab,
// } from '../../../../src/store/tabsStore'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/system';
import { Close, Circle } from '@mui/icons-material';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IconComponent } from '@gessa/ui';
import { styled } from '@mui/system';

interface Props {
  projectTabs: IRProjectTab[];
  activeProjectTab: string;
  setActiveProjectTab: (tab: IRProjectTab) => void;
  closeTab: (tab: IRProjectTab, data?: any) => void;
}

const StyledAddProject = styled('div')(({ theme }) => {
  return {
    '.active-tab': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary,
    },

    '.disable-tab': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.custom.btnColor,
      color: theme.palette.custom.btnColor,
    },
  };
});

const TabsContainer = () => {
  const theme = useTheme();
  // const [activeTab, setActiveTab] = useState(0);

  const dispatch = useDispatch();

  const tabs = useSelector((state: any) => state.tabs.tabs);
  const activeTab = useSelector((state: any) => state.tabs.activeTabId);

  // const handleTabClose = (tab: any, e: any) => {
  //   e.stopPropagation();
  //   dispatch(removeTab(tab));
  // };

  return (
    <div className="flex-1">
      <div className="flex">
        {tabs.map((tab: any) => (
          <div
            // onClick={() => dispatch(setActiveTab(tab.id))}
            className={`cursor-pointer h-12 w-40 flex justify-between items-center pl-3 pr-3 text-sm ${
              tab.id === activeTab ? 'active-tab' : 'disable-tab'
            }`}
            key={tab.id}
          >
            <p className="truncate mr-3">{tab.title}</p>
            {tab.unsaved ? (
              <Circle className="h-3" onClick={(e) => alert('Save first')} />
            ) : (
              <Close
                className="h-4"
                //  onClick={(e) => handleTabClose(tab, e)}
              />
            )}
          </div>
        ))}
      </div>
      {/* <div className="p-4">
        {tabs
          .filter((tab: any) => tab.id === activeTab)
          .map((tab: any) => (
            <TabContent tab={tab} key={tab.id} />
          ))}
      </div> */}
    </div>
  );
};

const TabContent = ({ data }: any) => {
  return (
    <div className="border-t-2 w-full py-2 h-full overflow-y-auto overflow-x-hidden relative box-border">
      {data.name}
    </div>
  );
};

const StyledProjectTab = styled('div')(({ theme }) => {
  return {
    '.default-tab': {
      backgroundColor: theme.palette.custom.form2,
      color: theme.palette.primary,
    },
    '.selected-tab': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary,
    },
    '.border': {
      borderColor: theme.palette.custom.form3,
    },
    '.tabs-container': {
      background: theme.palette.custom.form3,
    },
  };
});

const StyledTab = styled('div')(({ theme }) => {
  return {
    '&': {
      background: theme.palette.custom.form2,
      color: theme.palette.common.white,
    },
  };
});

const ProjectTabsUi = ({
  projectTabs,
  activeProjectTab,
  setActiveProjectTab,
  closeTab,
}: Props) => {
  const [isCloseTab, setIsCloseTab] = useState(false);
  let tabData: any = {};

  const [defaultTabData] = useState({
    id: '123',
    name: 'Get Started',
    project_content_id: '',
    project_id: '',
    type: 'getStarted',
  });
  const [context, setContext] = React.useContext(Context);
  return (
    <StyledProjectTab
      className="w-100 tabs_container "
      style={{
        height: 'fit-content',
        flexGrow: 1,
        overflowY: 'hidden',
        overflowX: 'hidden',
        background: '#181818',
        width: 'calc(100vw - 250px)',
      }}
    >
      {/* <TabsContainer /> */}
      {/* <Typography variant="h4">Tabs</Typography> */}
      <div
        className="flex border border-t-0 border-b-1 border-l-0  border-r-0 "
        style={{ height: '50px' }}
      >
        {projectTabs.length !== 0 ? (
          <div
            className="flex relative flex-row overflow-x-auto overflow-y-hidden"
            style={{ flexGrow: 1, overflowX: 'auto' }}
          >
            {projectTabs.map((tab: IRProjectTab) => {
              tabData = tab.id === activeProjectTab ? tab : tabData;
              return (
                <StyledTab
                  key={tab.id}
                  className={`cursor-pointer w-36 h-18 flex justify-between p-2 ${
                    tab.id === activeProjectTab ? 'default-tab' : 'selected-tab'
                  } `}
                  onClick={() => {
                    setActiveProjectTab(tab);
                    setContext(tab.id);
                  }}
                  style={{
                    marginRight: '1px',
                  }}
                >
                  <div
                    key={tab.id}
                    className="pl-2 flex flex-row justify-start items-center"
                    style={{
                      width: '100px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tab.name}
                  </div>
                  <div
                    className="p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab);
                    }}
                  >
                    <IconComponent
                      name={'Close'}
                      color={'white'}
                      size={20}
                      label={'Close'}
                    />
                  </div>
                </StyledTab>
              );
            })}
          </div>
        ) : (
          <div>
            {isCloseTab ? (
              <StyledTab
                key={defaultTabData.id}
                className={`cursor-pointer mr-1 w-36 h-11 flex justify-between p-2 items-center  selected-tab${
                  defaultTabData.id === activeProjectTab
                    ? ' selected-tab'
                    : 'selected-tab'
                } `}
                onClick={() => setActiveProjectTab(defaultTabData)}
              >
                <div
                  key={defaultTabData.id}
                  className="pl-2 flex flex-row justify-start items-center"
                  style={{
                    width: '100px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p> {defaultTabData.name}</p>
                </div>
                <div
                  className="p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    // setIsCloseTab(true);
                    closeTab(defaultTabData);
                  }}
                >
                  <IconComponent
                    name={'Close'}
                    color={'white'}
                    size={20}
                    label={'Close'}
                  />
                </div>
              </StyledTab>
            ) : null}
          </div>
        )}
      </div>

      {/* <TabContent data={tabData} /> */}
    </StyledProjectTab>
  );
};

export default ProjectTabsUi;
