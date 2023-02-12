import { pool } from "../db.js";

const dbInaccessible =  'Something goes wrong';

export const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT 
                title, 
                description, 
                isCompleted, 
                deadline
            FROM task`
        );
        res.json(rows)
    } catch (err) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}

export const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query(
            `SELECT * FROM task WHERE id = ?`, 
            [id]
        );
        res.send(rows[0]);
    } catch (err) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}

export const createTask = async (req, res) => {
    try {
        const { 
            title, 
            description, 
            isCompleted, 
            responsible,
            deadline, 
            comments, 
            id_user, 
            tags 
        } = req.body;

        const [rows] = await pool.query(
            `INSERT INTO task ( 
                title, 
                description, 
                isCompleted, 
                deadline, 
                id_user,
                comments, 
                responsible, 
                tags
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [ 
                title, 
                description, 
                isCompleted, 
                deadline,
                id_user,
                comments,
                responsible,
                tags 
            ]
        );
        res.send({
            id: rows.insertId,
            title,
            description,
            isCompleted,
            deadline,
            comments,
            id_user, 
            responsible,
            tags
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}

export const updateTask = async(req, res) => {
    try {
        const {id} = req.params;
        const { 
            title, 
            description, 
            isCompleted, 
            responsible,
            deadline, 
            comments, 
            id_user, 
            tags 
        } = req.body;
        const [result] = await pool.query(
            `UPDATE task SET 
                title = IFNULL(?, title), 
                description = IFNULL(?, description),
                isCompleted = IFNULL(?, isCompleted),
                deadline = IFNULL(?, deadline),
                id_user = IFNULL(?, id_user),
                comments = IFNULL(?, comments),
                responsible = IFNULL(?, responsible),
                tags = IFNULL(?, tags)
            WHERE id = (?)`,
            [ 
                title, 
                description, 
                isCompleted, 
                deadline,
                id_user,
                comments,
                responsible,
                tags,
                id
            ]
        );
    } catch (err) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(
            `DELETE FROM task WHERE id = ?`,
            [id]
        );
    } catch (error) {
        return res.status(500).json({
            message: dbInaccessible
        });
    }
}