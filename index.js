

function startwordcapsy(str){

console.log(str.toLowerCase().split(' ').map(item=>item[0].toUpperCase()+item.substring(1)).join(' '))

}

module.exports.startwordcapsy=startwordcapsy;