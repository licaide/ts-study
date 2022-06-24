typescript 新建项目配置
npm install --save-dev typescript
npm install --save-dev ts-node
mkdir ./vscode/launch.json
在新建的.eslintrc.json 添加如下内容

{
"name": "Current TS File",
"type": "node",
"request": "launch",
"program": "${workspaceRoot}/node_modules/ts-node/dist/bin.js",
            "args": [
                "${relativeFile}"
],
"cwd": "${workspaceRoot}",
"protocol": "inspector"
}
这样使 F5 就可以直接测试当前打开的文件
要指定文件 吧"${relativeFile}"替换文具体的文件就可以了
执行 tsc 就可以编译 ts 文件

typescript eslint 配置说
npm install --save-dev eslint
npm install --save-dev typescript
npm install --save-dev @typescript-eslint/parser
npm install --save-dev @typescript-eslint/eslint-plugin
mkdir .eslintrc.json
在新建的.eslintrc.json 添加如下内容
{
"parser": "@typescript-eslint/parser",
"plugins": [
"@typescript-eslint"
],
"rules": {
// 禁止使用 var
"no-var": "error",
// 优先使用 interface 而不是 type
"@typescript-eslint/consistent-type-definitions": [
"error",
"interface"
],
"prefer-const": "error",
"spaced-comment": "error"
}
}
vscode 添加 eslint 工具
vscode 重新打开项目编辑器就会用 eslint 识别代码

typescript 测试框架配置

npm install --save-dev chai @types/chai
npm install --save-dev mocha @types/mocha
npm install --save-dev nyc @types/nyc

在新建的 package.json 添加如下内容
"scripts": {
"test": "mocha -r ts-node/register test/**/\*.ts",
"coverage": "nyc --reporter=html mocha -r ts-node/register test/**/\*.ts"
}

这样执行 npm run test 就可以跑测试了
这样执行 npm run coverage 在项目下查看的 coverage 文件就可以查看代码测试覆盖率
