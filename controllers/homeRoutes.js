const router = require('express').Router();
const { User,  Project } = require('../models')

const serialize = JSON.stringify

router.get('/', async (req, res) => {
  const projectData = await Project.findAll({
    include: [User]
  });

const projects = projectData.map((project) => {
  return project.get({ plain: true });
});

  res.render('all', {projects} )
})

module.exports = router;
