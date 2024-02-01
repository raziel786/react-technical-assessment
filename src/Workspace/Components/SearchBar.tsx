import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';

type Props = {
  value: string;
  onFocus: () => void;
  onBlur:() => void;
  onClear: () => void;
  onChange: (searchValue: string) => void
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
} as const;

export default function SearchBar({
  value, onFocus, onBlur, onClear, onChange,
}: Props) {
  return (
    <div style={styles.root}>
      <Input
        aria-label="search-bar"
        fullWidth
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        style={{
          margin: 8,
        }}
        placeholder="Search for file..."
        id="outlined-start-adornment"
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
          )}
      />
      <CancelIcon style={styles.cancelButton} onClick={() => onClear()} />
    </div>
  );
}
