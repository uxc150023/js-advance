import { parseHtmlToAst } from "./astParser.js";

function compileToRenderFunction(html) {
  const ast = parseHtmlToAst(html);
  // console.log("--->", ast);
}

let tl = `<div id="app" style="color: red; font-size:20px;">
    你好，{{ name }}
    <span class="text" style="color:green"> {{ age}}</span>
  </div>`;
compileToRenderFunction(tl);
