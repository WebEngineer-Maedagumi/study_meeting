// オブジェクト
const profile = {
  name: "Taro Yamada",
  age: 23,
};

console.log(profile); // オブジェクト全体を参照する
console.log(profile.name); // 'name'というプロパティ名の値を参照する
console.log(profile.age); // 'age'というプロパティ名の値を参照する

const introduce = (person) => {
  console.log(`私の名前は${person.name}です。${person.age}歳です。`);
};

introduce(profile);

profile.weight = 64;
console.log(profile); // {name: 'Taro Yamada', age: 23, weight:64} -> 追加したプロパティが入ってきた

// 配列

const todolist = ["task 1", "task 2", "task 3", "task 4", "task 5"];

console.log(todolist);
console.log(todolist[0]);

// for文
for (let i = 0; i < 5; i++) {
  console.log(todolist[i]);
}

// mapメソッド
todolist.map((todo) => {
  console.log(`map method: ${todo}`);
});

// filterメソッド
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = numbers.filter((number) => number % 2 === 0);
console.log(filteredArray);

// pushメソッド
todolist.push("task 6");
console.log(todolist);

// unshiftメソッド
todolist.unshift("new task");
console.log(todolist);

// delete演算子
delete todolist[0];
console.log(todolist);
