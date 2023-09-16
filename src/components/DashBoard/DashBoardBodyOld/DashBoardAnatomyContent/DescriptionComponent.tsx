import React from 'react'
import TextField from '@mui/material/TextField';
import { useAppDispatch,useAppSelector } from '../../../../app/hooks';
import { changeDescription } from '../../../../features/DashBoard/dashBoardSlice';
function DescriptionComponent() {
  const description=useAppSelector((state)=>state.dashBoard.description);
  const dispatch=useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.target.value; // Get the new value from the event
    dispatch(changeDescription(newDescription));
  };
  return (
    <TextField
    id="outlined-multiline-flexible"
    label="Description"
    multiline
    maxRows={4}
    sx={{ width: '100%' }}
    value={description} // Set the value of the text field
    onChange={handleChange} // Call handleChange when the text changes
  />
  )
}

export default DescriptionComponent