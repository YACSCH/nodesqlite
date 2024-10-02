import { readItems, createItems,  updateItems, deleteItems } from '../models/itemModel.js'

const getAllItems = async (req,res) => {
    await readItems((err, rows) => {
        if (err) {
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
};

const createItem = async  (req,res) => {
    const { name, description } = req.body;
    await createItems(name, description, (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else{
            res.status(201).send(`Item is added ID : ${ data.id}`)
        }
    })
}

const updateItem = async (req,res) => {
    const id = req.params.id
    const { name, description } = req.body;
    await updateItems(id, name, description, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else{
            res.status(200).send("Update item")
        }
    })
};

const deleteItem = async  (req,res) => {
    const id = req.params.id
    await deleteItems(id, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else{
            res.status(200).send("Deleted")
        }
    })
};

    export {
        getAllItems,
        createItem,
        updateItem,
        deleteItem
    }