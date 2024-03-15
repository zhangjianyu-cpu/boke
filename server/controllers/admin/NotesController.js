const NotesServices = require("../../services/admin/NotesServices")

const NotesController = {
    add: async ( req, res ) =>
    {
        console.log( req.body );
        const {title,content} = req.body
        //调用 service进行添加
        await NotesServices.add({
            title,content,editTime:new Date()
        })
        res.send({
            ActionType:"OK"
        })
    },
    getList: async ( req, res ) =>
    {
        // console.log( req.body );
        // const {title,content} = req.body
        //调用 service进行添加
        const result=await NotesServices.getList(
            {_id:req.params.id}
        )
        res.send({
            ActionType: "OK",
            data:result
        })
    },
    delList: async ( req, res ) =>
    {
        const result = await NotesServices.delList({_id:req.params.id})
        res.send( {
            ActionType: "OK",

        })
    },
    updateList:async (req,res)=>{
        console.log(req.body)
        const {title,content,_id} = req.body
        //调用 service进行添加
        await NotesServices.updateList( {
            _id,
            title,
            content,
            editTime: new Date(),
        })
        res.send({
            ActionType:"OK"
        })
    },
}

module.exports = NotesController