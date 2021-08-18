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
  <script src="index.js"></script>
</body>
</html>
```

<br/>

1. 関数の書き方①

```javascript
//
function sample () {
  //関数の処理
}
```
<br/>

2. 関数の書き方②

```javascript
//アロー関数
const sample = () => {
  //関数の処理
}

```
<br/>

3. 関数の実行

```javascript
//関数名()で作成した関数を使用できます。
sample()
```

<br/>

4. 簡単な関数を作ってみよう！
```javascript 
//足し算をする関数
const add = () => {
  const sum = 2 + 3
  console.log(sum)
}
```
<br/>

4. 引数＆戻り値がある関数の書き方

```javascript 
const add = (num1,num2) => {
  const sum = num1 + num2
  return sum
}
```
<br/>

5. 関数の実行

```javascript 
//関数の実行
add(2,3)
```

<br/>

6. アロー関数省略記法の書き方
```javascript 
//関数の中の処理が一行の場合アロー関数の省略記法が使えます。
//returnや{}を省略でき、見た目もスッキリするので慣れたら是非使っていきましょう！
const add = (num1,num2) => num1 + num2
```

7. 問題 引き算をする関数を作成し、ログに計算結果を表示してください。関数名はsubtraction、第1実引数に３を第2実引数に4を指定してください。

