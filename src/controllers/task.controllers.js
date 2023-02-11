export const getTasks = async (req, res) => {
    return res.json({
        message: 'getting tasks'
    });
}

export const createTask = async (req, res) => {
    return res.json({
        message: 'creating tasks'
    });
}

export const updateTask = async(req, res) => {
    return res.json({
        message: 'updating tasks'
    });
}

export const deleteTask = async (req, res) => {
    return res.json({
        message: 'removing tasks'
    });
}