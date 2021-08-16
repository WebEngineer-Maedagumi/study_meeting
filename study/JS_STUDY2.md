# JavaScriptと仲良くなろうvol.2

### htmlファイルのテンプレート

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>study meeting3</title>
</head>
<body>
  <div id="hello"></div>
  <div id="text1"></div>
</body>
</html>
```

<br/>

1. `index.js`を以下のように変更(関数を追加します。コピペでOKです。)

```javascript
function helloWorld () {
  
}
```
2. 先程の関数に以下を追記してください(コピペでOKです。)
```javascript 
const hello = document.getElementById ( "hello" )
```
<br/>

3. console.log(hello)を追記してください。

```javascript 
console.log(hello)
```

<br/>

4. 関数を実行しましょう

```javascript 
helloWorld()
```

<br/>

5. ブラウザでlogを確認してみてください。

<br/>

5. 関数に hello.innerText = "Hello World"　を追記してください

```javascript 
hello.innerText = "Hello World"
```

6. 問題1 ブラウザに私の名前は〇〇ですと表示させる関数を作成してください。

<br/>

関数名は selfIntroductionを使ってください。

<br/>

7. 引数の使い方

```javascript 
function selfIntroduction(name) {
  const introduction = document.getElementById("text1")
  introduction.innerText = "私の名前は" + name + "です" 
}
```
<br/>

```javascript
selfIntroduction("さとし")
```

<br/>

8. idも引数に渡してみよう

```javascript 
function selfIntroduction(name,id) {
  const introduction = document.getElementById(id)
  introduction.innerText = "私の名前は" + name + "です" 
}
```
<br/>

```javascript
selfIntroduction("さとし","text1")
```

<br/>

9. 問題2　関数に第3引数ageを渡してブラウザに　私の名前は〇〇です。〇〇歳ですと表示させてください.


