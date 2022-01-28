'use strict';
const fs = require('fs');
const fileName = './test.txt';



async function main() {
  for (let count = 0; count < 500; count++) {
  //await　を使うには Promise　オブジェクトにしなければならない。
  await new Promise((resolve) => {
    //ここに非同期的な処理を書く
    fs.appendFile(fileName, 'おはようございます', 'utf8', () => {
      resolve()})//ファイル書き込みがおわったらresolveを実行
  })
  }
}

main()
