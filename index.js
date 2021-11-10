var str = "welcome to all";

startwordcaps(str)

function startwordcaps(str){

console.log(str.toLowerCase().split(' ').map(item=>item[0].toUpperCase()+item.substring(1)).join(' '))

}

module.exports.startwordcaps=startwordcaps;