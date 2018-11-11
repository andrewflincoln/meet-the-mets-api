const model = require('../models/mets-models')

function getAll(req, res, next) {
    const data = model.getAll()
    res.status(200).json({ data })
}
function getOne(req, res, next) {
    const idPlayer = model.getOne(req.params.id)
    if (idPlayer) return res.status(200).json(idPlayer)
    next()
}
function create(req, res, next) {
    const newPlayer = model.create(req.body.name, req.body.position, req.body.bats)
    if (!req.body.name) next({error: { status: 400, message: `Your Met needs a name!`}})
    res.status(201).json(newPlayer)
}
function deletePlayer(req, res, next) {
    const idPlayer = model.deletePlayer(req.params.id)
    if (!idPlayer) return next()
    res.status(200).json(idPlayer)
}
function updatePlayer(req, res, next) {
    const idPlayer = model.updatePlayer(req.params.id, req.body.name, req.body.position, req.body.bats)
    if (idPlayer) return res.status(200).json(idPlayer)
    next()
}


module.exports = { getAll, create, getOne, deletePlayer, updatePlayer }