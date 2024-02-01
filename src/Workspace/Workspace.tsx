import React, { useState } from 'react';
import Console from './Console';
import FileTree from './FileTree';

const styles = {
  root: {
    display: 'flex',
  },
  filetree: {
    backgroundColor: 'lightgrey',
    minWidth: 100,
    height: '100vh',
    width: '25%',
    color: 'black',
    resize: 'horizontal',
    overflow: 'auto',
  },
  console: {
    minWidth: 100,
    width: '75%',
    resize: 'horizontal',
    overflow: 'auto',
  },
} as const;

export default function Parent() {
  const [fileName, setFileName] = useState<string>('');
  return (
    <div style={styles.root}>
      <div style={styles.filetree}>
        <FileTree fileName={fileName} setFileName={setFileName} />
      </div>
      <div style={styles.console}>
        <Console fileName={fileName} />
      </div>
    </div>
  );
}
