var express = require('express');
var router = express.Router();
var path = require('path');
const asyncHandler = require('express-async-handler');
const Models = require('../sequelize');

/*To Dos */
// convos/byDate - List all PLO Duiscussions by Date - Most recent (top) to oldest (bottom)
// convos/dept - List Departments
// convos/dept/:dept_id - list all discussions associated with [department]
// convos/prog - List Departments
// convos/prog/:dept_id - List all Programs in [department]
// convos/prog/:prog_id - List all discussions associated with that program


/* GET /convos listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.render('convos/convos', {
    title: 'SLO Discussions',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
  });
}));

/* covos/bydate */

/* /covos/dept  */

/* /covos/prog  */
/* /convos/dept */
//Presents a list of Departments, which generates link to discussion list
router.get('/dept', asyncHandler(async (req, res, next) => {
  const departments = await Models.departments.findAll({
    attributes: [
      'dept_id',
      'dept_name'
      ],
      raw: true,
      
  });
  res.render('convos/convosDept', {
    title: 'Discussions by Department',
    metaDescription: 'SLO Manager',
    menuPath: req.originalPath,
    departments: departments,
  });
}));

/* /convos/prog */
//Presents a list of programs, with a generated URL link
//Should add functionality to group discussions by Program
router.get('/prog', asyncHandler(async (req, res, next) => {
  const programs = await Models.programs.findAll({
    attributes: [
      'prog_id',
      'prog_name',
      'dept_id'
      ],
      raw: true,
  });
  res.render('convos/convosProg', {
    title: 'Disuccions by Program',
    metaDescription: 'Discussion Viewer',
    programs: programs,
  });
}));

module.exports = router;