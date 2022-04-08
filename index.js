// import { obj, b } from "./test.js";
// setTimeout(() => {
//   console.log("--->", obj, b);
// }, 2000);

(() => {
  document.getElementById("bbb").onclick = () => console.log("click");
  for (let i = 0; i < 100000; i++) {
    console.log("--->", i);
  }
})();
