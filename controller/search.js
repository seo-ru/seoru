import sequelize from 'sequelize';

import models from './../models';

const Op = sequelize.Op;

function getBooks(req, res) {
  models.books.findAll({
    where: {
      title: {
        [Op.like]: `%${req.query.query}%`
      }
    },
    limit: 10
  }).then(books => res.render('search', {
    books
  })
  );
}

function getBook(req, res) {
  models.books.findAll().then(books => res.json(books));
}

export { getBooks, getBook };
