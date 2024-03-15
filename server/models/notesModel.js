
const mongoose  = require("mongoose")
const Schema = mongoose.Schema
// user产品===>users集合

const NotesType = {
    title:String,
    content:String,
    editTime: Date,

}
const NotesModel = mongoose.model("notes",new Schema(NotesType))

module.exports = NotesModel