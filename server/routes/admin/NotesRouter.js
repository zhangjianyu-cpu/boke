
var express = require('express');
const NotesController = require( '../../controllers/admin/NotesController' );

var NotesRouter = express.Router();

NotesRouter.get( "/adminapi/notes/list", NotesController.getList )
NotesRouter.get( "/adminapi/notes/list/:id", NotesController.getList )
NotesRouter.post( "/adminapi/notes/list", NotesController.updateList )
NotesRouter.post( "/adminapi/notes/add", NotesController.add )
NotesRouter.delete( "/adminapi/notes/list/:id", NotesController.delList)
module.exports = NotesRouter;
