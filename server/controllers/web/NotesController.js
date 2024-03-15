const NotesServices = require("../../services/web/NotesServices")

const NotesController = {
    getList: async ( req, res ) =>
    {
        console.log( req.body );
        const {title,content} = req.body
        //调用 service进行添加
        const result=await NotesServices.getList({
            title,content,
        })
        res.send({
            ActionType: "OK",
            data:result
        })
    },

}

module.exports = NotesController