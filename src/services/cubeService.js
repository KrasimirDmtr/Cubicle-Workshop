const cubes = []
const uniqid = require('uniqid')

exports.getAll = () => cubes.slice();

exports.getOne = (cubeID) => cubes.find(x => x.id === cubeID);


exports.create = (cubeData) => {
    const newCube = {
        id:uniqid(),
        ...cubeData
    };
    cubes.push(newCube);

    return cubes;
}