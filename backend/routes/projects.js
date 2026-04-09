const express = require('express');
const router = express.Router();
const db = require('../controllers/dbController');

router.get('/', async (req, res) => {
  try {
    res.json(await db.getProjects());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    res.json(await db.getAll());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/sync', async (req, res) => {
  try {
    const data = req.body;
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Invalid data' });
    }
    await db.saveAll(data);
    res.json({ ok: true, message: 'Database synced successfully' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await db.getProject(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = req.body;
    if (!project || !project.id) {
      return res.status(400).json({ error: 'Project must have an id' });
    }
    const saved = await db.saveProject(project);
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const project = { ...req.body, id: req.params.id };
    const saved = await db.saveProject(project);
    res.json(saved);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.deleteProject(req.params.id);
    res.json({ ok: true, message: 'Project deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch('/active/:id', async (req, res) => {
  try {
    await db.setActiveProject(req.params.id);
    res.json({ ok: true, message: 'Active project set to ' + req.params.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
