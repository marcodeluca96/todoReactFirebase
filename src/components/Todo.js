import { Checkbox } from '@mui/material';

const Todo = ({ id, text, isChecked, updateCheck }) => {
  const todoCheckUpt = (e) => {
    updateCheck(id, text, e.target.checked);
  };
  return (
    <div className='todo_div'>
      <Checkbox
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        checked={isChecked}
        onChange={todoCheckUpt}
      />
      <p className={isChecked ? 'text_done' : ''}>{text}</p>
    </div>
  );
};

export default Todo;
