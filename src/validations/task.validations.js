const errorId = 'There are no employees with that id';

export function notFound(res, rows) {
    if(rows.length <= 0) return res.status(404).json({
            message: errorId
        })
}

export function notUpdated(res, result) {
  return (result.affectedRows == 0)
    ? res.status(404).json({ message: errorId })
    : res.status(200).json({ message: 'Successfully updated' })
}

export function notRemoved(res, result) {
    return (result.affectedRows == 0)
      ? res.status(404).json({ message: errorId })
      : res.status(200).json({ message: 'Successfully removed' })
}
