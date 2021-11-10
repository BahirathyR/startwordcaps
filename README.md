# what is this?

Get sentence all word start letter to be convert uppercase.

# Installation

`npm i startwordcapsy --save


Then...
```
import {startwordcaps} from 'startwordcaps';

   function extractstrcaps(str){
    var strcaps=str.toLowerCase().split(' ').map(item=>item[0].substring(1)).join(' '
    )
}
var string="welcome you to all"
console.log(extractstrcaps(string))
module.exports.extractstrcaps=extractstrcaps;


```
## options
startwordcaps supports 1 option
* *strtype*- _toUpperCase/toLowerCase_(Default to toLowerCase)
