import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? 'text.secondary' : 'text.primary',
        my: 1,
        bgcolor: 'action.hover',
        borderRadius: 1
      }}
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onToggle(task.id, task.completed)}
      />
      <Link component={RouterLink} to={`/tarefa/${task.id}`} color="inherit" underline="hover" sx={{ flexGrow: 1 }}>
        <ListItemText primary={task.text} />
      </Link>
    </ListItem>
  );
}

export default TaskItem;
