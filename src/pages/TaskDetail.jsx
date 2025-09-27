import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const API_URL = 'http://localhost:3001/tasks';

function TaskDetail( ) {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_URL}/${taskId}`);
        setTask(response.data);
      } catch (err) {
        setError('Tarefa não encontrada ou falha na API.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [taskId]);

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      {task && (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            Detalhes da Tarefa
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            {task.text}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Status: {task.completed ? 'Concluída' : 'Pendente'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ID da Tarefa: {task.id}
          </Typography>
        </>
      )}
      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mt: 4 }}
      >
        Voltar para a Lista
      </Button>
    </Paper>
  );
}

export default TaskDetail;
