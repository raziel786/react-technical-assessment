import React, { useState } from 'react';
import 'react-folder-tree/dist/style.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { getFileNames, generateFileTree } from '../Utilities/FileOrganisation';
import SearchBar from './Components/SearchBar';

type WorkspaceProps = {
  fileName: string;
  setFileName: (fileName: string) => void;
};

type TreeProps = {
  index: number;
  name: string;
  children: React.ReactNode;
};

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  cancelButton: {
    paddingRight: 16,
    cursor: 'pointer',
  },
  button: {
    fontSize: 16,
    cursor: 'pointer',
    padding: 8,
    border: 0,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
  }
} as const;

export default function FileTree({ fileName, setFileName }: WorkspaceProps) {
  const [focused, setFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState([]);

  const fileNames = getFileNames();
  const fileTree = generateFileTree();

  const renderTree = ({ index, name, children }: TreeProps) => {
    const fileExtension = name.split('.')[1] || '';
    return (
      <TreeItem
        style={{
          backgroundColor: fileName === name ? '#adadad' : 'unset',
        }}
        onClick={
          fileExtension.length > 0 ? () => setFileName(name) : () => null
        }
        key={index}
        nodeId={index}
        label={name}
      >
        {children && children.map(renderTree)}
      </TreeItem>
    );
  };

  const onSearch = (searchValue: string) => {
    setSearch(searchValue);
    const results = fileNames.filter((file) => (
      file.toLowerCase().includes(searchValue.toLowerCase())
    ));
    setSearchResults(results);
  };

  const onClear = () => {
    setSearch('');
    setSearchResults([]);
    setFocused(false);
  };

  const onFocus = () => {
    setSearch('');
    setSearchResults([]);
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <>
      <SearchBar
        value={search}
        onChange={onSearch}
        onClear={onClear}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {search.length > 0
        && searchResults.length > 0
        && (
        <div
          style={styles.column}>
          {searchResults.map((result) => (
            <button
              key={result}
              type="button"
              onClick={() => setFileName(result)}
              style={{
                backgroundColor: fileName === result ? '#adadad' : 'unset',
                ...styles.button,
              }}
            >
              {result}
            </button>
          ))}
        </div>
        )}
      {search.length > 0 && searchResults.length === 0 && (
        <p style={styles.center}>
          No Results Found
        </p>
      )}
      {!focused && searchResults.length === 0 && search.length === 0 && (
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(fileTree)}
        </TreeView>
      )}
    </>
  );
}
