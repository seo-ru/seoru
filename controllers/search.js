/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import sequelize from 'sequelize';

import models from '../models';
import { removeDuplicateSpace, spaceToWildcard } from '../helpers/texts';

const Op = sequelize.Op;

function getBooks(req, res) {
  const query = spaceToWildcard(req.query.query);
  const page = (!req.query.page) || (req.query.page < 1) ? 1 : req.query.page;
  const offset = (page - 1) * 10;

  models.books.findAndCountAll({
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
    offset,
    limit: 10
  }).then((result) => {
    const count = result.count;
    const pageCount = Math.ceil(result.count / 10);

    res.render('search', {
      books: result.rows,
      count,
      page,
      pageCount,
      query: req.query,
      removeDuplicateSpace,
      queryToString: (query) => {
        // https://stackoverflow.com/questions/8562613/how-to-add-url-parameter-to-the-current-url
        const strArray = [];

        for (const q in query) {
          strArray.push(`${q}=${query[q]}`);
        }

        const str = strArray.join('&');
        return (`?${str}`);
      }
    });
  });
}

function getBook(req, res) {
  models.books.findAll().then(books => res.json(books));
}

export { getBooks, getBook };
