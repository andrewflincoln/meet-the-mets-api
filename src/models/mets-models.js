const uuid = require('uuid/v4')
const mets = [ 
               {id: uuid(), name: 'David Wright', position: '3B', bats: 'Right'},
               {id: uuid(), name: 'Wilmer Flores', position: 'Sweetheart', bats: 'Right'}, 
               {id: uuid(), name: 'Jacob deGrom', position: 'P', bats: 'Left'} 
             ]  


function getAll() {
    return mets
}
function getOne(id) {
   const idPlayer = mets.find(idPlayer => idPlayer.id === id)
   return idPlayer
}
function create(name, position, bats) {
    const newPlayer = {}
    newPlayer.id = uuid()
    newPlayer.name = name
    newPlayer.position = position
    newPlayer.bats = bats
    mets.push(newPlayer)
    return newPlayer
}
function deletePlayer(id) {
    const idPlayer = mets.find(idPlayer => idPlayer.id === id)
    if (!idPlayer) return
    mets.splice(mets.indexOf(idPlayer), 1)
    return idPlayer
}
function updatePlayer(id, name, position, bats) {
    const idPlayer = mets.find(idPlayer => idPlayer.id === id)
    if (!idPlayer) return
    if (name) idPlayer.name = name
    if (position) idPlayer.position = position
    if (bats) idPlayer.bats = bats
    return idPlayer
}


module.exports = { getAll, create, getOne, deletePlayer, updatePlayer}