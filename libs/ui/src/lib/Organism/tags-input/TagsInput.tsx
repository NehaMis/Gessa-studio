import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
// import './tags.css';

export interface TagInputProps {
  addtag?: any;
  removeTag?: any;
}

export const TagsInput = (props: TagInputProps) => {
  const [tags, setTags]: any = useState([]);
  const addTag = (e: any) => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = '';
      }
    }
  };
  const removeTag = (removedTag: any) => {
    const newTags = tags.filter((tag: any) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <div className="App main-bg">
      <div className="tag-container">
        {tags.map((tag: any, index: any) => {
          return (
            <div key={index} className="tag">
              {tag}{' '}
              <CloseIcon
                style={{ fontSize: '18px' }}
                onClick={() => removeTag(tag)}
              ></CloseIcon>
            </div>
          );
        })}

        <input onKeyDown={addTag} />
      </div>
    </div>
  );
};
