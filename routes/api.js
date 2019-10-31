import express from 'express';

import models from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  models.isbn.findAll().then(isbn => res.json(isbn));
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: 'Incorrect id' });
  }

  models.isbn
    .findOne({
      where: {
        id
      }
    })
    .then((isbn) => {
      if (!isbn) {
        return res.status(404).json({ error: 'No Book' });
      }

      return res.json(isbn);
    });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log(id);
  if (!id) {
    return res.status(400).json({ error: 'Incorrect id' });
  }
  console.log(req.body);
  const isbn = req.body.isbn || '';
  if (!isbn.length) {
    return res.status(400).json({ error: 'Incorrenct isbn' });
  }

  models.isbn
    .update(
      {
        isbn
      },
      {
        where: {
          id
        }
      }
    )
    .then(() => models.isbn.findOne({
      where: { id }
    }))
    .then(isbn => res.status(200).json(isbn));
});

export default router;
