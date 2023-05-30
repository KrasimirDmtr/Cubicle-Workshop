const cubes = [
    {
        id: '@!j1i31jialk,sd',
        name: 'Eco-Dark',
        description: 'This cube...',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg',
        difficultyLevel: '4'
        
    },
    {
        id: '@!j1i31jasdadasialk,sd',
        name: 'Megaminx',
        description: 'This cube...',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg',
        difficultyLevel: '2'
    }
]
const uniqid = require('uniqid')

exports.getAll = (search, from, to) => {
    let result = cubes.slice()

    if (search){
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }
    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }
    return result;
    
}

exports.getOne = (cubeID) => cubes.find(x => x.id === cubeID);


exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };
    cubes.push(newCube);

    return cubes;
}