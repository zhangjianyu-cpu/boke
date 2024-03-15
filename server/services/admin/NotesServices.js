const NotesModel = require( "../../models/notesModel" )
const NotesServices = {
    add:async ({title,content,editTime})=>{
        return NotesModel.create({
            title,content,editTime
        })
        
    },
    getList:async ({_id})=>{
        return _id?NotesModel.find({_id}):NotesModel.find().sort({ editTime: -1 })
    },  
    delList:async ({_id})=>{
        return NotesModel.deleteOne({_id})
    },
    updateList: async ( { _id,title, content, editTime } ) =>
    {
        return NotesModel.updateOne({_id},{
            title,content,editTime
        })

    },
}

module.exports = NotesServices