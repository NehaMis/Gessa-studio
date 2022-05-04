import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import {
  removeTab,
  setActiveTab,
  updateTab,
  updateData,
} from '../../../../src/store/endpointStore';
import { Close, Circle } from '@mui/icons-material';
import TabContent from './TabContent';

const TabsContainer = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabs = useSelector((state: any) => state.tabs.tabs);
  const activeTab = useSelector((state: any) => state.tabs.activeTabId);

  const handleTabClose = (tab: any, e: any) => {
    e.stopPropagation();
    dispatch(removeTab(tab));
  };

  return (
    <div className="flex-1">
      <div className="flex">
        {tabs.map((tab: any) => (
          <div
            onClick={() => dispatch(setActiveTab(tab.id))}
            className="cursor-pointer h-12 w-40 flex justify-between items-center pl-3 pr-3 text-sm"
            style={{
              backgroundColor:
                tab.id === activeTab
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.primary['200']
                    : theme.palette.primary['100']
                  : null,
            }}
            key={tab.id}
          >
            <p className="truncate mr-3">{tab.title}</p>
            {tab.unsaved ? (
              <Circle className="h-3" onClick={(e) => alert('Save first')} />
            ) : (
              <Close className="h-4" onClick={(e) => handleTabClose(tab, e)} />
            )}
          </div>
        ))}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        {tabs
          .filter((tab: any) => tab.id === activeTab)
          .map((tab: any) => (
            <TabContent tab={tab} key={tab.id} />
          ))}
      </div>
    </div>
  );
};

export default TabsContainer;
