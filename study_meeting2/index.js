
//コンソールでHello World
console.log("hello world")

//ブラウザにHello World
function helloWorld() {
    const hello =　document.getElementById("hello")//htmlで取得したidを取得
    hello.innerText = "Hello World"
}

helloWorld()