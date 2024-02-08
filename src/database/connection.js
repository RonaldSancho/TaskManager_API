import sql from "mssql"
import config from "./config.js";

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    server: config.dbServer,
    options: {
        encrypt: true, 
        trustServerCertificate: true
    }
}

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch(error){
        console.error(error)
    }
}

export {sql};