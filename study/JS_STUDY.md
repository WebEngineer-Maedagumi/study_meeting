# JavaScriptと仲良くなろうvol.1

## 環境構築


1. Home brewがインストールされているかの確認

`brew --version`

2. インストールされていない場合は以下のコマンドを実行

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

3. nodebrewのインストール

`brew install nodebrew`

4. nodebrewの安定版のインストール

`nodebrew install stable`

5. nodebrewのバージョン一覧を確認

`nodebrew ls`

6. インストールしたバージョンを指定して切り替える

`nodebrew use v14.17.4`

7. nodeのパスを通す  
`echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile'`

8. ターミナルの再起動  


9. nodeとnpmのバージョン確認  

`node -v`  
`npm -v`

## 変数、定数について

`const` 定数を宣言する際に使う。値の再代入は不可。  

`let` 変数宣言時に使用する。値の再代入は可能。

`const(let) N = 1`  

上記の場合、定数(変数)Nに1を代入しているためNの値は１となります。

## 演算子について

足し算 `+`  

引き算 `-`

掛け算 `*`  

割り算 `/`

剰余演算 `%`(あまりを求める時に使用)

### console.logについて

javaScriptのデバッグに使う入出力ウィンドウ  

例`console.log("Hello World")`

### htmlファイルのテンプレート

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>study meeting2</title>
    </head>
    <body>
    
    </body>
</html>
```

### jsファイルを作成
```javascript
console.log("Hello World")
```

### ターミナルでjsファイルを実行する

```ターミナル
node index.js(ファイル名)
```


### `index.html`でjsファイルを呼び出す(index.js)

`index.html`を以下のように変更

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>study meeting2</title>
</head>
<body>
    <script src="index.js"></script>//scriptタグを追加
</body>
</html>
```

### コンソールでHello worldを表示

ブラウザで [このような](https://i.gyazo.com/b75a365f6b4413d8cb1965930b0f7dd3.png) 表示になっていれば正常に読み込めています。



## ブラウザにHello Worldを表示

1. `index.html`を以下のように変更
2. `bodyタグ`に`id`をつけます。
3. `id`は任意で大丈夫です。ここでは`hello`としています。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>study meeting2</title>
</head>
<body>
    <div id="hello"></div>//ここを追加
    <script src="index.js"></script>
</body>
</html>
```

4. `index.js`を以下のように変更(関数を追加します。)

```javascript
function helloWorld() {
    const hello =　document.getElementById("hello")//htmlで取得したidを取得
    hello.innerText = "Hello World"
}
```

5. `index.js`に以下を追加(関数を実行します。)

```javascript
helloWorld()
```
6. ブラウザでこのような表示になっていれば正常に関数が実行されています。

[ブラウザ表示](https://i.gyazo.com/35b4fc83de0ff111fa4369c8d297df1f.png)
