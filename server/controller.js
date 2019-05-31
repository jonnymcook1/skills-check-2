const inventory = {
    image:'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gsuin11ptg5qgktmzoat/air-force-1-07-shoe-JkTGzADv.jpg',
    name: 'af1',
    price: 111
}

    const getInventory =  (req, res, next) => {
        const db = req.app.get('db')
 
        db.get_inventory()
        .then( product => res.sendStatus(200).send(product))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    }

    // const postInventory = (req, res, next) => {
    //     const db = req.app.get('db')
    //     const {name, price, image} = req.body

    //     db.create_inventory([name, price, image])
    //     .then(() => res.sendStatus(200))
    //     .catch( error => {
    //         res.status(500).send({message: 'Sorry we suck!'})
    //         console.log(error)
    //     })
    // }


module.exports= {
    getInventory,
    postInventory
}