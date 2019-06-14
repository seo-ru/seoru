import sequelize from 'sequelize';

import models from '../models';
import { splitQueryToWildcard } from '../helpers/texts';

const Op = sequelize.Op;

function getBooks(req, res) {
  const query = splitQueryToWildcard(req.query.query);
  models.books.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${query}%`
          }
        },
        {
          subtitle: {
            [Op.like]: `%${query}%`
          }
        },
        {
          author: {
            [Op.like]: `%${query}%`
          }
        },
        {
          publisher: {
            [Op.like]: `%${query}%`
          }
        }
      ]
    },
    offset: 0,
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
