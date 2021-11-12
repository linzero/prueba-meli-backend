const itemsService = require( "../services/ItemsService")

const ItemsController = {};

ItemsController.searchItems = async ( req, res ) => {
        let results = await itemsService.searchItems_GET(req.query.q)

        if (results) {

            res.json({
                ok:true,
                results
            })

        } else {
            res.json({
                ok:false,
                message: 'Hubo un error al consultar los productos'
            })
        }
}


ItemsController.itemDetail = async ( req, res ) => {
    let results = await itemsService.detailItem_GET(req.params.id)
    let description = await itemsService.detailItemDescription_GET(req.params.id)

    if (results) {

        res.json({
            ok:true,
            item:results,
            description
        })

    } else {
        res.json({
            ok:false,
            message: 'Hubo un error al consultar los productos'
        })
    }
}

module.exports = ItemsController

