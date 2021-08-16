//前回の復習
function helloWorld() {
  const hello = document.getElementById ( "hello" )//htmlで取得したidを取得
  hello.innerText = "Hello World"
}

//関数の実行
helloWorld()

function selfIntroduction(name, id, age){
  const introduction = document.getElementById(id)
  introduction.innerText = "私の名前は" + name + "です" + age + "歳です"
}

//関数の実行
selfIntroduction("さとし","text1",15)