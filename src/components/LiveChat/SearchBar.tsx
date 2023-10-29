// SearchBar.tsx
import React from 'react';
import { InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
interface SearchBarProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar = ({value,onChange}:SearchBarProps) => {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 12px',
        maxWidth: 400,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        marginBottom: 2,
      }}
    >
      <InputBase
        sx={{
          marginLeft: 1,
          flex: 1,
          color: '#fff',
          '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.6)',
          },
        }}
        placeholder="Search or start new chat"
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => onChange(e.target.value)}
        inputProps={{ 'aria-label': 'search or start new chat' }}
      />
      <IconButton
        type="submit"
        sx={{
          p: '10px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
        onClick={(e: { preventDefault: () => any; }) => e.preventDefault()}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
