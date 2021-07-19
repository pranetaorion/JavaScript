// 高階関数arrayWalkを定義
function arraryWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

// 結果を格納するためのグローバル変数
var result = 0;
function sumElement(value, key) {
  // 与えられた要素配列で変数resultを加算
  result += value;
}

var ary = [1, 2, 4, 8, 16];
arraryWalk(ary, sumElement);
console.log('合計値：' + result);