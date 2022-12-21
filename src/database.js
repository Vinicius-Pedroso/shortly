import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {pool} = pg;

export const connectionDB = new pool({
    connectionString: process.env.DATABASE_URL,
    ssl:true
})