import db from '../config/connection.js';


//CREATE
const createItems = (name, description, callback) => {
    const sql = `INSERT INTO items (name, description) VALUES (?,?)`;
    db.run(sql, [name, description], function(err) {
        callback(err, { id: this.lastID })
    })
}

//READ
const readItems = ( callback ) => {
    const sql = `SELECT * FROM items`;
    db.all(sql, [], callback)
}

//UPDATE
const updateItems = (id, name, description, callback) => {
    const sql = `UPDATE items SET name = ?, description = ? WHERE id = ?`;
    db.run(sql, [name, description, id], callback)
}

//DELETE
const deleteItems = (id,  callback) => {
    const sql = `DELETE FROM items  WHERE id = ?`;
    db.run(sql, [id], callback)
}

export  { createItems, readItems, updateItems, deleteItems }