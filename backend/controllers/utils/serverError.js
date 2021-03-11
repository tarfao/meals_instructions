module.exports = (res) => {
    return res.status(400).json({ errors: ['Server error!']})
}