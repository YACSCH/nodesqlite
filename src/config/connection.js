import sqlite3  from 'sqlite3';
const dbName = 'myDatabase.db'

let db = new sqlite3.Database( dbName, (err) => {
    if(err){
        console.error(err.message)
    }
    else{
        console.log("Connected to the database");
        db.run('CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, description TEXT )', (err) => {
            if(err){
                console.error(err.message)
            }else{
                console.log('Table create or existed')       
            }
        })
    }
})

export default db;