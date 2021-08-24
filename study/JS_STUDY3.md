# JavaScriptと仲良くなろうvol.3

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

1. if文の書き方

```javascript
if (条件) {
  ...　動作
}
```
<br/>

2. if/elseの書き方

```javascript
if (条件) {
  ...　動作
}else{
  ...　動作
}
```
<br/>

3. else ifの書き方

```javascript
if(条件){
 ...　動作
}else if(条件){
 ...　動作
}else{
 ...　動作
}
```
4. switchの書き方
```javaScript
switch (条件) {
  case 条件1:
    ...　動作 
    break;
  case 条件2:
    ...　動作
    break;
  ...
  case 条件N:
   ...　動作
    break;
  default:
    // 条件に一致するものが存在しない場合の動作
    break;
}
```
5. 例1:
```javascript 
// 今日の天気予報は雨の場合、傘を準備する。
let weather = "雨"
if(weather === "雨"){
	alert("傘を準備する。")
}
```
<br/>

6. 例2:
```javascript 
// 今日の天気予報は雨の場合、傘を準備する。雨以外の場合は傘を準備しない。
let weather = "雨"
if(weather === "雨"){
	alert("傘を準備する。")
}else{
	alert("傘を準備しない。")
}
```
7. 例3:
```javascript 
// 今日の天気予報は雨の場合、傘を準備する。なお、『紫外線警報』の場合は、傘とサンオイルを準備する。その以外、傘を準備しない。
let  weather = "紫外線警報"
if(weather === "雨"){
	alert("傘を準備する。")
}else if(weather === "紫外線警報"){
	alert("傘とサンオイルを準備する。")
}else{
	alert("傘を準備しない。")
}
```

8. 例4:
```javascript
if(weather === "雨"){
	alert("傘を準備する。")
}else  if(weather === "紫外線警報"){
	alert("傘とサンオイルを準備する。")
}else  if(weather === "雪"){
	alert("スノーブーツを準備する。")
}else  if(weather === "台風"){
	alert("レーンコートを準備する。")
}else{
	alert("傘を準備しない。")
}
```

8. 例5:
```javascript
let weather = "雨"　//今日の天気予報　例：台風、雪、紫外線警報など
switch (weather) {
  case "雨"　:
    alert("傘を準備する。")
    break;
  case "雪":
    alert("スノーブーツを準備する。")
    break;
  case "台風":
   　alert("レーンコートを準備する。")
    break;
  default:　
    alert("傘を準備しない。")
    break;
}
```
