const NotesModel = require( "../../models/notesModel" )
const NotesServices = {
    getList:async ()=>{
        return NotesModel.find().sort({ editTime: -1 })
    },  
}

module.exports = NotesServices