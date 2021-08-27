# オブジェクトと配列について

### [概念(スライド)](https://docs.google.com/presentation/d/1y55eC0A4cs233xdIaUqCq0ZApZ6IT2QqIu0amaJVtuc/edit?usp=sharing)

---

## オブジェクトの使い方

#### 1. 宣言し方

定数・変数の名前を上げて、オブジェクトの値を波括弧で囲む

```
const object = {}
```

#### 2. 例のオブジェクト

```
const profile = {
	name: 'Taro Yamada',
	age: 23
}
```

#### 3. オブジェクト参照方法・データアクセス

参照方法: 2 種類の方法があります

- **ドット方法：** オブジェクト名.プロパティ名　（\*_この方法が主流_）

  先の作っておいた`profile` object のデータをアクセスしてみましょう

  例：
  `profile.name`

- **ブラケット方法：** オブジェクト名['プロパティ名'] (注意：' 'が必須です )

  例：
  `profile['name'] `

  `console.log`を実行したら 2 つの場合とも同じように検証画面で

  > 'Taro Yamada'

  の結果が出てきます。

- ブラケット方法（オブジェクト名['プロパティ名']） を使う場合

  例:

  ```
  const object = {
    1: 'Task 1',
    2: 'Task 2'
  }
  ```

  この場合なら
  `console.log(object.1)`
  を実行するとエラーが出てきます。
  参照できるように`console.log(object['1'])`の参照方を使うことです。

#### 4. オブジェクトのプロパティを再代入

続いて、`console.log(profile.name)`の下に下記のコードを実行しましょう

```
profile.name = '太郎山田';
console.log(profile.name)
```

結果：

> '太郎山田'

#### 5. オブジェクトにプロパティを追加

下記のコードを追加してみましょう

```
profile.gender = 'male';
console.log(profile);`
```

結果：

> {name: '太郎山田’, age: 32, address: '11 street', weight: 64, height: 180, birthday: '1st january 1989', gender: 'male'}

#### 6. 実際関数に使ってみましょう

下記の関数を作りましょう

```
const introduce = (person) => {
  console.log('私は${person.name}'と申します。${person.age}歳です。)
  }
```

そして、作ったオブジェクトを関数の引数として渡して、実行してみましょう

```
introduce(profile)
```

結果：

> 私は Taro Yamada と申します。32 歳です。

## 配列の使い方

#### 1. 宣言し方

定数・変数の名前を上げて、配列リテラル「[ ]」を使って宣言します。（\*_こちらの方が主流_）

```
const array = []
```

または下記のように Array（配列コンストラクタ）で宣言できます。

```
const array = new Array()
```

#### 2. 例の配列

```
const todolist = ['task 1', 'task 2', 'task 3']
```

#### 3. 配列の参照しかた・データアクセス

- 配列名[添字]

  (配列の添字(index)は０からはじまります。つまり、先頭要素の添字は０です)

  ```
  console.log(todolist[0])
  ```

  上記のコードを実行したら検証画面に

  > 'task 1'

  の結果が出てきます。

#### 4. 配列の要素の値を再代入

下記のコードを書きましょう

```
todolist[0] = 'task'
```

そして, `console.log(todolist[0])`を実行したら

> 'task'

の結果が出てきます

#### 5. 配列の基礎的な使い方

- ループ処理: 配列内のデータをループ処理するには、for 文を利用するのが一般的です。for 文は、指定した回数だけ処理を繰り返すための構文で、『for(初期値; 条件式; 増減値)』と記述します。具体例として、次のコードを見てみましょう。

  ```
  const array = ['a','b','c','d','e'];

  for(let i = 0; i < 5; i++) {
  　console.log(array[i]);
  }
  ```

  コードを実行すると検証画面に:

  ```
  'a'
  'b'
  'c'
  'd'
  'e'
  ```

  の結果が出てきます

---

- メソッド:

  - map: 各要素 1 つずつに処理を実行させることができます。

    記述：

    ```
    配列名.map(関数)
    ```

    今の配列：

    ```
    const todolist = ['task', 'task 2', 'task 3'];
    ```

    メソッドを実行:

    ```
    todolist.map((todo) => {
      console.log(todo)
    }
    ```

    map の引数は処理（関数）になります。todo は関数の仮引数になります。
    検証画面に確認すると

    ```
    'task'
    'task 2'
    'task 3'
    ```

    各要素に対して行が一つになる結果です。

  - filter: 配列内における特定の要素を抽出したい場合、filter メソッドを使います。 各要素の値を参照して、filter の中に囲んだ関数を処理します。

    記述：

    ```
    配列名.filter(関数)
    ```

    配列：

    ```
    const numbers = [1,2,3,4,5,6]
    ```

    メソッドを実行：

    ```
    const filteredArray = numbers.filter((number) => {
       number % 2 === 0
    }
    ```

    そして、`console.log(filteredArray)`を実行したら

    ```
    [2,4,6]
    ```

    の結果が出てきます。

  - push: 配列の最後に要素を追加します

    記述：

    ```
    配列名.push(追加したい値)
    ```

    今の配列：

    ```
    const todolist = ['task', 'task 2', 'task 3'];
    ```

    メソッドを実行：

    ```
    todolist.push('task 4')
    ```

    そして、`console.log(todolist)`を実行したら

    > ['task', 'task 2', 'task 3', 'task 4']

    の結果が出てきます

  - unshift: 配列の先頭に要素を追加します

    記述：

    ```
    配列名.unshift(追加したい値)
    ```

    今の配列：

    ```
    const todolist = ['task', 'task 2', 'task 3', 'task 4']
    ```

    メソッドを実行：

    ```
    todolist.unshift('new task')
    ```

    そして、`console.log(todolist)`を実行したら

    > ['new task', 'task', 'task 2', 'task 3', 'task 4']

  - delete 演算子: 指定した添字の要素を削除できます。

    記述：

    ```
    delete 配列名[削除したい値の添字]
    ```

    今の配列：

    ```
    const todolist = ['task', 'task 2', 'task 3', 'task 4']
    ```

    例えば、２番目の'task 2'を削除したいなら下記ようなコードを実行します

    ```
    delete todolist [1];
    ```

    そして、`console.log(todolist)`を実行すると検証画面に

    > ['task',,'task 3', 'task 4']

    なります。つまり、 `todolist[1]`の値は`undefined`になりました。
