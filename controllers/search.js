import sequelize from 'sequelize';

import models from '../models';
import { removeDuplicateSpace, spaceToWildcard } from '../helpers/texts';

const Op = sequelize.Op;

function getBooks(req, res) {
  const query = spaceToWildcard(req.query.query);
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
    limit: 3
  }).then(books => res.render('search', {
    books,
    query: removeDuplicateSpace(req.query.query)
  })
  );
}

function getBook(req, res) {
  models.books.findAll().then(books => res.json(books));
}

export { getBooks, getBook };
