import { aData } from "./module/a.js";
console.log(aData);
import bData from "./module/b.js";
console.log(bData);
import {
  cFunc,
  testVariable,
  moduleConnect
} from "./module/c.js";

console.log(cFunc(1,2,3)); // [1,2,3]
console.log(testVariable); // 1
console.log(moduleConnect) // "this is connection"