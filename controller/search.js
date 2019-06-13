import models from './../models';

function getBooks(req, res) {
  models.books.findAll({ limit: 10 }).then(books => res.json(books));
}

function getBook(req, res) {
  models.books.findAll().then(books => res.json(books));
}

export { getBooks, getBook };
