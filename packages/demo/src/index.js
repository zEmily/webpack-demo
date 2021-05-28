import sayHello from '@demo/package';
import subPathStr from '@demo/package/feature';
import conditionalESModule from '@demo/conditional_package';
import notNodeEnv from '@demo/nested_condition';
import { a as something } from '@demo/only_cjs';
import { hello } from './other/test_file.cjs'; // 这里预期会报错，因为这里只能以Commonjs的模式进行加载。但 webpack 进行了完整的解析

const conditionalCommonJSModule = require('@demo/conditional_package');

console.log('子模块导出 ->', subPathStr);
console.log('条件导出 ES模块 -> ', conditionalESModule);
console.log('条件导出 CommonJS -> ', conditionalCommonJSModule);
console.log('条件导出非 node 环境 ->', notNodeEnv);
console.warn('【此处与原生node不符】import .cjs 文件中的某个属性 ->', hello);
console.warn(
  '【此处与原生node不符】package.json 中 "type: commonjs" 时，.js 文件不得使用 ES模块的提取属性用法 ->',
  something
);

sayHello();

/* === 以下无关 === */
function component() {
  const element = document.createElement('div');
  element.innerHTML = '请打开浏览器的控制台，查看 console 内容';
  return element;
}

document.body.appendChild(component());
