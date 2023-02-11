import { pool } from "../db.js";

const dbInaccessible =  'Something goes wrong';

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM user`
        );
        res.json(rows)
    } catch (err) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}

export const createUser = async (req, res) => {
    try {
        const {name, email} = req.body;
        const [rows] = await pool.query(
            `INSERT INTO user (name, email, creation_date) VALUES (?, ?, CURDATE())`,
            [name, email]
        );
        res.send({
            id: rows.insertId,
            name,
            email, 
        });
    } catch (err) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}