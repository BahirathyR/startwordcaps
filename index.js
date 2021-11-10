function extractstrcaps(str){
    var strcaps=str.toLowerCase().split(' ').map(item=>item[0].substring(1)).join(' '
    )
}
var string="welcome you to all"
console.log(extractstrcaps(string))
module.exports.extractstrcaps=extractstrcaps;