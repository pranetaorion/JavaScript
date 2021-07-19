class MyIterator {
  // 引数経由で渡されたdataプロパティに設定
  constructor(data) {
    this.data = data;
    this[Symbol.iterator] = function*() {
      let current = 0;
      let that = this;
      while(current < that.data.length) {
        yield that.data[current++];
      }
    };
  }
}

// MyIteratorクラスで保持した配列を列挙
let itr = new MyIterator(['one', 'two', 'three']);
for(let value of itr) {
  console.log(value);
}