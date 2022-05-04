import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Context } from '../../../../../../apps/container/src/app/pages/projects/components/Context';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconComponent from '../../Atoms/icon-component/icon-component';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// web.cjs is required for IE11 support
import { unstable_batchedUpdates } from 'react-dom';
import { useTheme } from '@mui/system';

export interface CustomTreeviewProps {
  data: Array<any>;
  activeProjectContentId: string;
  projectContentTree?: any;
  addContentTreeItem?: any;
  setActiveProjectContent?: any;
  handleClickOpen?: any;
}

const isNodeExpanded = (node: any) => {
  return node
    .closest('.MuiTreeItem-content')
    .classList.contains('Mui-expanded');
};

const StyledTreeItem = styled((props: any) => (
  <TreeItem
    className="p-2"
    nodeId={props.nodeId}
    {...props}
    // TransitionComponent={TransitionComponent}
  />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.9,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  [`& .${treeItemClasses.content}`]: {
    height: 40,
  },
}));

export const CustomTreeview = (props: CustomTreeviewProps) => {
  const [textValue, setTextValue] = React.useState('');
  const [showTextBoxNode, setShowTextBoxNode] = React.useState(-1);
  const [selectedData, setSelectedData]: any = React.useState({});
  const [selectedType, setSelectedType]: any = React.useState('');
  const [clickedOutside, setClickedOutside] = React.useState(false);
  const [expanded, setExpanded] = React.useState([]);
  const [open, setOpen]: any = React.useState(false);

  const onChange = (e: any) => {
    if (e.key === 'Enter') {
      setShowTextBoxNode(-1);
      props.addContentTreeItem({ contentName: textValue, ...selectedData });
      setTextValue('');
    }
  };

  const handleOnBlur = (e: any) => {
    if (e.target.value === '') {
      setClickedOutside(true);
      setShowTextBoxNode(-1);
    } else {
      //addContentTreeItem(textValue, selectedData.type, selectedData.project_id);
      setTextValue('');
    }
  };

  const renderChilds = (data: any, level: number) => {
    return data?.children?.map?.((child: any) => (
      <StyledTreeItem
        nodeId={child._id}
        label={child.name}
        key={child._id}
        className={context === child._id ? 'selected' : ''}
        icon={
          child?.children.length ? (
            <IconComponent
              name={'Arrow-Down'}
              color={theme.palette.getContrastText(
                theme.palette.background.paper
              )}
              size={18}
              label={'Arrow-Down'}
            />
          ) : level > 1 ? (
            <IconComponent
              name={'dot'}
              color={theme.palette.getContrastText(
                theme.palette.background.paper
              )}
              size={20}
              label={'dot'}
            />
          ) : (
            <IconComponent
              name={'DiamondSolid'}
              color={theme.palette.getContrastText(
                theme.palette.background.paper
              )}
              size={20}
              label={'Diamond-Solid'}
            />
          )
        }
        // style={{
        //   backgroundColor: activeProjectTab === child._id ? 'gray' : '#191919',
        //   /** this one is used to change background selected color */
        // }}
        onClick={(e: any) => {
          props.setActiveProjectContent(
            child,
            !child?.children || child?.children.length === 0, // isLeafNode
            level // level
          );
          props.handleClickOpen();
          setContext(child._id);
        }}
      >
        {renderChilds(child, level + 1)}
      </StyledTreeItem>
    ));
  };
  const [context, setContext] = React.useContext(Context);

  const theme = useTheme();

  return (
    <div className="p-2">
      <TreeView
        aria-label="customized"
        // defaultExpanded={['1']}
        defaultCollapseIcon={
          <IconComponent
            name={'Arrow-Down'}
            color={theme.palette.getContrastText(
              theme.palette.background.paper
            )}
            size={18}
            label={'Arrow-Down'}
          />
        }
        defaultExpandIcon={
          <IconComponent
            name={'Arrow-Right'}
            color={theme.palette.getContrastText(
              theme.palette.background.paper
            )}
            size={20}
            label={'Arrow-Right'}
          />
        }
        defaultEndIcon={
          <IconComponent
            name={'DiamondSolid'}
            color={theme.palette.getContrastText(
              theme.palette.background.paper
            )}
            size={20}
            label={'Diamond-Solid'}
          />
        }
        className="mt-6"
        selected={context}
      >
        {props?.data.map((data: any, index: number) => {
          return (
            <div key={data._id} className="w-100 overflow-hidden flex">
              <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                <StyledTreeItem
                  nodeId={data._id}
                  label={
                    <div className="flex justify-between w-100 ">
                      <div style={{ flexGrow: 1 }}>{data.type}</div>
                      <div
                        onClick={(e) =>
                          unstable_batchedUpdates(() => {
                            isNodeExpanded(e.target) && e.stopPropagation();
                            setShowTextBoxNode(index);
                            setClickedOutside(false);
                            setSelectedData(data);
                          })
                        }
                        className=" px-2 cursor-pointer"
                      >
                        <IconComponent
                          name={'Vector'}
                          color={'white'}
                          size={18}
                          label={'Add'}
                        />
                      </div>
                    </div>
                  }
                  style={{ width: '100%' }}
                  classes={{ label: 'py-2' }}
                >
                  {index === showTextBoxNode && (
                    <ClickAwayListener
                      onClickAway={() => setShowTextBoxNode(-1)}
                    >
                      <div className="flex items-center border-2 border-blue-800">
                        <div className="m-2">
                          <IconComponent
                            name={'Diamond-Solid'}
                            color={'white'}
                            size={20}
                            label={'Arrow-Right'}
                          />
                        </div>
                        {!clickedOutside ? (
                          <input
                            style={{
                              outline: 'none',
                            }}
                            className="z-10 w-40 -ml-8 pl-7 h-8 bg-transparent"
                            onKeyUp={onChange}
                            onBlur={(e) => handleOnBlur(e)}
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                            autoFocus
                          ></input>
                        ) : (
                          ''
                        )}
                      </div>
                    </ClickAwayListener>
                  )}
                  {renderChilds(data, 1)}
                </StyledTreeItem>
              </div>
            </div>
          );
        })}
      </TreeView>
    </div>
  );
};

// export default CustomTreeview;
