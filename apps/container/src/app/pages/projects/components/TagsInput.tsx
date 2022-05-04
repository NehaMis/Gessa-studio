import CloseIcon from '@mui/icons-material/Close';
import './tags.css';

interface Props {
  tags: any;
  addTag: any;
  removeTag: any;
}

export default function TagsInput({ tags, addTag, removeTag }: Props) {
  return (
    <div className="App main-bg">
      <div className="tag-container">
        {tags?.map((tag: any, index: any) => {
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

        <input placeholder="Enter Tags" onBlur={(e) => addTag(e)} />
      </div>
    </div>
  );
}
