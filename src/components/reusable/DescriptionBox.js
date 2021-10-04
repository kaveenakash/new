import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const DescriptionBox = (props) => {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (contentState) => {
    setEditorState(contentState);
    
    
  };
  const handleDescription = () =>{
    props.setDescription(editorState.getCurrentContent().getPlainText())
    props.setFormID(3)
  }
  return (
    <React.Fragment>
      <center>
        <Editor
          editorStyle={{
            border: "1px solid",
            width: "100%",
            minHeight: "25rem",
            maxHeight: "25rem",
          }}
          wrapperStyle={{
            width: "100%",
            minHeight: "25rem",
            maxWidth: "1200px",
          }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName={{ backgroundColor: "red" }}
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </center>
      <br />
      <center>
        <Button
          className={classes.nextButton}
          type="submit"
          variant="outlined"
          align="right"
          color="secondary"
          onClick={handleDescription}
        >
          Next
        </Button>
      </center>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  nextButton: {
    borderRadius: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.seaWhite,
    },
  },
}));

export default DescriptionBox;
