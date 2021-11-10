var str = "welcome to all";

wordCaps(str)

function wordCaps(str){

console.log(str.toLowerCase().split(' ').map(item=>item[0].toUpperCase()+item.substring(1)).join(' '))

}

module.exports.wordCaps=wordCaps;