const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //category.findAll()
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  //category.findByPk(req.params.id)
});

router.post('/', (req, res) => {
  // create a new category
  //category.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  //category.update(req.body, where)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
