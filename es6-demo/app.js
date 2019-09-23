const logModule = require('./module.js');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  //请求css文件， 看url中是否包含.css，不要忘记>0，表示存在，包含， True
  //请求css文件，请求js文件，请求数据库...
  if(request.url.indexOf('.css')>0){
    const cssContent = fs. readFileSync('./style.css')
    response.write(cssContent);
  }
  const content = fs.readFileSync('./index.html')
  response.write(content)
  response.write('hello, world')
  response.end()
}).listen(5666);

logModule.logMessage('server is running on 5666')


//  fs.readFile('./text.txt', (content)=>{
//     logModule.logMessage(content)
// })


// var fileContent= fs.readFileSync('./text.txt')

// logModule.logMessage(fileContent)
// logModule.logMessage('test')
