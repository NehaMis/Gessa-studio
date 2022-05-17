import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { useTheme } from "@mui/system";
import { Box } from "@mui/material";

export interface SqlEditorProps{
    value:string;
    height?:string;
    width?:string;
    onChange:(value:any)=>void;
}

function SqlEditor({value, height='170px', width='100%', onChange}:SqlEditorProps) {
  const themes = useTheme();
  return (
    <Box>
      <CodeMirror
        value={value}
        height={height}
        width={width}
        indentWithTab={true}
        theme={themes.palette.mode}
        extensions={[sql()]}
        onChange={(
          __value: any,
          _viewUpdate: any /* TODO document why this arrow function is empty */
        ) => { 
            onChange(__value)
        }}
      />
    </Box>
  );
}

export default SqlEditor;
