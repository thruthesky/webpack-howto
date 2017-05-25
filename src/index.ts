import { Plus } from './plus';
import { Minus } from './minus';
import './index.scss';


console.log("App begins...HMR");
console.log("Plus: ", (new Plus).get());
console.log("Minus: ", (new Minus).get() );


let count = 0;
setInterval( ()=>{
    count++;
    console.log('count - ' + count);
    //document.querySelector('body').innerHTML += `<div>Count: ${count}</div>`;
}, 1000);