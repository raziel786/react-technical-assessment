import React, { SyntheticEvent, useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Editor from '@monaco-editor/react';
import DefaultFiles from '../defaultFiles';

const styles = {
  placeholder: {
    fontSize: 16,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
} as const;

type Props = {
  fileName?: string;
};

export default function Console({ fileName }: Props) {
  const [files] = useState(DefaultFiles);
  const [isModified, setIsModified] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const updateContent = () => {
    setOpen(true);
    const updatedFiles = files;
    /**
     * find the path from the file name
     */
    const { path } = files.filter((file) => file.path.includes(fileName))[0];
    /**
     * then update the contents based off the file path
     */
    updatedFiles.find((file) => file.path === path && ((file.content = content), true));
    setIsModified(false);
  };

  useEffect(() => {
    /**
     * determine if a file has been selected and modified.
     * If it has, update its content before the file changes.
     */
    if (fileName.length > 0 && isModified) {
      updateContent();
    }
  }, [fileName]);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (fileName.length === 0) {
    return <div style={styles.placeholder}>Please select a file</div>;
  }
  const { path = '', contents = '' } = files.filter((file) => file.path.includes(fileName))[0];

  const language = fileName.split('.')[1];
  return (
    <>
      <Editor
        path={path}
        onChange={(e) => {
          setIsModified(true);
          setContent(e);
        }}
        defaultLanguage={language}
        defaultValue={contents}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="File Auto-Saved"
      />
    </>
  );
}

Console.defaultProps = {
  fileName: "",
}