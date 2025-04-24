// filepath: frontend/src/main/routes/tasks.ts
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/tasks/:id/delete', (req, res) => {
    // TODO: Implement delete logic
    res.send(`Delete task with id ${req.params.id}`);
  });

  app.get('/tasks/:id/change-title', (req, res) => {
    // TODO: Implement change title logic
    res.send(`Change title for task with id ${req.params.id}`);
  });

  app.get('/tasks/:id/change-description', (req, res) => {
    // TODO: Implement change description logic
    res.send(`Change description for task with id ${req.params.id}`);
  });

  app.get('/tasks/:id/change', (req, res) => {
    // TODO: Implement change logic for ID (or just show a placeholder)
    res.send(`Change task with id ${req.params.id}`);
  });
}