
var express = require('express');
const NotesController = require( '../../controllers/web/NotesController' );
var NotesRouter = express.Router();

NotesRouter.get("/webapi/notes/list",NotesController.getList)
module.exports = NotesRouter;
