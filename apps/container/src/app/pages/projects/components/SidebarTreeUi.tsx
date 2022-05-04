import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';

import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { IconComponent, CustomTreeview } from '@gessa/ui';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import history from '../../../../utils/history';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../../../store';
import {
  setDialogStatus,
  selectActiveDialogStatus,
} from '../../../../store/dropdownSlice';
import { unstable_batchedUpdates } from 'react-dom';
import { selectActiveProjectTabId } from '../store/projectTabSlice';

const isNodeExpanded = (node: any) => {
  return node
    .closest('.MuiTreeItem-content')
    .classList.contains('Mui-expanded');
};

function TransitionComponent(props: any) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });
}

//   return (
//     <animated.div style={style}>
//       <Collapse {...props} />
//     </animated.div>
//   );
// }

// TransitionComponent.propTypes = {
//   /**
//    * Show the component; triggers the enter or exit states
//    */
//   // nodeId: PropTypes.string,
//   in: PropTypes.bool,
// };

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

const StyledSidebarTree = styled('div')(({ theme }) => {
  return {
    // '.input': {
    //   borderColor: theme.palette.custom.form2,
    //   color: theme.palette.,
    // },
  };
});

// let lastNode = 0;

export default function CustomizedTreeView(
  {
    projectContentTree,
    addContentTreeItem,
    setActiveProjectContent,
    openTab,
  }: any,
  props: any
) {
  const [textValue, setTextValue] = React.useState('');
  const [showTextBoxNode, setShowTextBoxNode] = React.useState(-1);
  const [selectedData, setSelectedData]: any = React.useState({});
  const [selectedType, setSelectedType]: any = React.useState('');
  const [clickedOutside, setClickedOutside] = React.useState(false);
  const [expanded, setExpanded] = React.useState([]);
  const [open, setOpen]: any = React.useState(false);
  const rootState = useSelector((state: IRootState) => state);

  const activeProjectTab = selectActiveProjectTabId(rootState);
  const dispatch = useDispatch();
  const dialogStatus = selectActiveDialogStatus(rootState);

  const onChange = (e: any) => {
    if (e.key === 'Enter') {
      setShowTextBoxNode(-1);
      addContentTreeItem({ contentName: textValue, ...selectedData });
      setTextValue('');
    }
  };

  const handleOnBlur = (e: any) => {
    if (e.target.value === '') {
      setClickedOutside(true);
      setShowTextBoxNode(-1);
    } else {
      addContentTreeItem(textValue, selectedData.type, selectedData.project_id);
      setTextValue('');
    }
  };

  // const handleDialog = () => {
  //   isAddProject = true;

  // };
  const onNodeSelect = (e: any) => {
    setSelectedType(e.target.innerText);
  };

  const handleClickOpen = () => {
    if (dialogStatus) {
      setOpen(true);
    }
    // setOpen(false);
    // setOpen(true);
  };

  const handleClose = () => {
    dispatch(setDialogStatus(false));
    setOpen(false);
    // history.push('/project');
  };

  const handleDontSave = () => {
    dispatch(setDialogStatus(false));
    setOpen(false);
    // history.push('/project');
  };

  const handleSave = () => {
    setOpen(false);
    // history.push('/project');
  };

  const renderChilds = (data: any, level: number) => {
    return data?.children?.map?.((child: any) => (
      <StyledTreeItem
        nodeId={child._id}
        label={child.name}
        key={child._id}
        // style={{
        //   backgroundColor: activeProjectTab === child._id ? 'gray' : '#191919',
        //   /** this one is used to change background selected color */
        // }}
        onClick={(e: any) => {
          setActiveProjectContent(
            child,
            !child?.children || child?.children.length === 0, // isLeafNode
            level // level
          );
          handleClickOpen();
        }}
      >
        {renderChilds(child, level + 1)}
      </StyledTreeItem>
    ));
  };

  return (
    <>
      <div className="flex flex-col">
        <CustomTreeview
          activeProjectContentId={props.activeProjectContentId}
          data={projectContentTree}
          addContentTreeItem={addContentTreeItem}
          setActiveProjectContent={setActiveProjectContent}
          handleClickOpen={handleClickOpen}
        />
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description-1"
        className="border-2"
      >
        <DialogTitle>{'Do you want to save the changes?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description-1">
            Your changes will be lost if you don't save them.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Link className="" to="/project"> */}
          <Button onClick={handleDontSave}>Don't Save</Button>
          {/* </Link> */}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
