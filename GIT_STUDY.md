# Study Meeting No.1 ターミナル、Git、Githubについて

### よく使うターミナルコマンド一覧
| コマンド | 説明 |
| --- | --- |
| ls | 現在のディレクトリ内に存在するディレクトリ、ファイルを表示する |
| cd | ディレクトリ間を移動するコマンドです　cd Desktopなど |
| mkdir | ディレクトリを作成するコマンドです。例 mkdir test・・・testを作成
| rm | ファイルを削除するコマンドです。rm ファイル名 |
| mv | mv AAA BBBのように使います。この場合、AAAをBBBに移動するということになります。|
| pwd | 現在のディレクトリのパスを表示します。|



### vs code　おすすめの拡張機能
| name | description |
| --- | --- |
| Bracket Pair Colorizer 2 | カッコを色分けしてくれる |
| indent-rainbow | インデントを虹色で表示してくれる |
| Auto Rename Tag | ペアになっているHTML/XMLタグの名前を自動的に変更する
| Japanese Language Pack for Visual Studio Code | エディタを日本語化 |
| Auto Close Tag | タグを自動で閉じてくれる。|
| Material Icon Theme | ファイルのiconを分かりやすく変更 |
| Material Themeなど | エディタの色合いを変更してくれる。  themeなどと検索すると入り色々出てくるので、お好みで変えてください。|
| Prettier - Code formatter | codeを自動で整形してくれる。設定が必要なので、Googleなどで検索してみてください。|




  

## Gitについて

### gitのバージョン確認
`git --version`  
git version 2.29.2のような表示になればinstallされています。

### git initコマンド

`git init` git の初期化を行うコマンド

### git add コマンド

`git add ファイル名` 変更をステージングするためのコマンド  

※`git add .`は変更全てをステージングします。

### git commit コマンド

`git commit`ステージングしたファイルをGitリポジトリに保存するコマンド。

`git commit -m "コメント内容"`でvimを開かずにcommit出来ます。

### git status コマンド

`git status` 変更内容を一覧で表示するコマンド。ステージングされているもの、されていないものを表示します。  

`git add`,`git commit`前に`git status`を確認することをおすすめします。

### git push origin コマンド

`git push origin ブランチ名` commitした内容をGithubに送信するためのコマンド。  

ブランチ名にはローカルで作業を行ったブランチを指定するのが一般的である。

###  git pull コマンド

`git pull origin main(ブランチ名)` Githubから自身のローカルに変更内容(最新の情報)を同期するためのコマンド。

### その他について

そのほかのgit、Githubのコマンドについては [こちら](https://docs.google.com/document/d/18lVZyyVXGR8PGqRH7GENDYcGRtsT1lSzFNoSPGXngvI/edit?usp=sharing) をご確認ください。
