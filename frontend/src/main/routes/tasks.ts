import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/tasks/:id/delete', async (req, res) => {
    try {
      await axios.delete(`http://localhost:4000/api/tasks/${req.params.id}`);
      res.redirect('/'); 
    } catch (error) {
      res.status(500).send('Failed to delete task');
    }
  });

  app.get('/tasks/:id/change-title', (req, res) => {
    res.render('change-title', { id: req.params.id });
  });

  app.post('/tasks/:id/change-title', async (req, res) => {
    try {
      await axios.patch(`http://localhost:4000/api/tasks/${req.params.id}`, {
        title: req.body.title
      });
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Failed to update title');
    }
  });

  app.get('/tasks/:id/change-description', (req, res) => {
    res.render('change-description', { id: req.params.id });
  });

  app.post('/tasks/:id/change-description', async (req, res) => {
    try {
      await axios.patch(`http://localhost:4000/api/tasks/${req.params.id}`, {
        description: req.body.description
      });
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Failed to update description');
    }
  });

  app.get('/tasks/:id/change', (req, res) => {
    res.render('change-id', { id: req.params.id });
  });

  app.post('/tasks/:id/change-id', async (req, res) => {
    try {
      await axios.patch(`http://localhost:4000/api/tasks/${req.params.id}`, {
      id: req.body.id
      });
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Failed to update id');
    }
  });

  app.get('/tasks/create', (req, res) => {
    res.render('create-task');
  });

  app.post('/tasks/create', async (req, res) => {
    try {
      await axios.post('http://localhost:4000/api/tasks', {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        dueDate: req.body.dueDate ? new Date(req.body.dueDate).toISOString() : null
      });
      res.redirect('/');
    } catch (error) {
      res.status(500).render('error');
    }
  });
}