import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useApi } from '../hooks/useApi';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

import TaskList from '../components/TaskList';

const API_URL = 'https://my-json-server.typicode.com/SilvaJunior47/gerenciador-tarefas-react/tasks';
function Home( ) {
  const { data: tasks, loading, error, setData: setTasks } = useApi();
  const [newTaskText, setNewTaskText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'completed', 'pending'
  const [currentPage, setCurrentPage] = useState(1);

  // Lógica de Filtro e Busca
  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        if (statusFilter === 'completed') return task.completed;
        if (statusFilter === 'pending') return !task.completed;
        return true;
      })
      .filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [tasks, searchTerm, statusFilter]);

  // Lógica de Paginação
  const paginatedTasks = useMemo(() => {
    const startIndex = (currentPage - 1) * TASKS_PER_PAGE;
    return filteredTasks.slice(startIndex, startIndex + TASKS_PER_PAGE);
  }, [filteredTasks, currentPage]);

  const pageCount = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    try {
      const response = await axios.post(API_URL, { text: newTaskText, completed: false });
      setTasks(prevTasks => [...prevTasks, response.data]);
      setNewTaskText('');
    } catch (err) {
      console.error("Falha ao adicionar tarefa", err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      try {
        await axios.delete(`${API_URL}/${taskId}`);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      } catch (err) {
        console.error("Falha ao deletar tarefa", err);
      }
    }
  };

  const handleToggleTask = async (taskId, currentStatus) => {
    try {
      const response = await axios.patch(`${API_URL}/${taskId}`, { completed: !currentStatus });
      setTasks(prevTasks =>
        prevTasks.map(task => (task.id === taskId ? response.data : task))
      );
    } catch (err) {
      console.error("Falha ao atualizar tarefa", err);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Minhas Tarefas
      </Typography>

      {/* Formulário para Adicionar Tarefa */}
      <Box component="form" onSubmit={handleAddTask} sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Nova Tarefa"
              variant="outlined"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Filtros e Busca */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Buscar Tarefa"
            variant="outlined"
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
            >
              <MenuItem value="all">Todos</MenuItem>
              <MenuItem value="completed">Concluídas</MenuItem>
              <MenuItem value="pending">Pendentes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Indicador de Loading e Erro */}
      {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}
      {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}
      
      {/* Lista de Tarefas */}
      {!loading && !error && (
        <TaskList
          tasks={paginatedTasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      )}

      {/* Paginação */}
      {!loading && !error && pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Paper>
  );
}

export default Home;
