//コンソールでHello World
console.log ( "hello world" )

const hello = "hello world"//helloに"hello world"を代入

console.log ( hello )

//ブラウザにHello World
function helloWorld () {
  const hello = document.getElementById ( "hello" )//htmlで取得したidを取得
  hello.innerText = "Hello World"
}

helloWorld ()