import React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <Typography sx={{ mt: 4, textAlign: 'center' }}>Nenhuma tarefa encontrada.</Typography>;
  }

  return (
    <List>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}

export default TaskList;
