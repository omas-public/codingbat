# codingbat

## Warmup-1

### sleep_in

weekday が false または vacation が true の時に
true を返しそれ以外はfalseを返す関数

```
def sleep_in(weekday, vacation):
  return (not weekday or vacation)
```

### monkey_trouble 

asmile,bsmileがともにtrue,またはともにfalseの時に
trueを返しそれ以外はfalseを返す関数

```
def monkey_trouble(a_smile, b_smile):
 return not(a_smile ^ b_smile) 
```

#### 別解
```
def monkey_trouble(a_smile, b_smile):
 return (a_smile == b_smile) 
```

###  sum_double

aとbの値が等しい時はaとbの合計の2倍を返し
そうでない時は合計を返す関数

```
def sum_double(a, b):
  return (a + b) * 2 if a == b else a + b
```

### diff21 
21とnの差分を絶対値で返す,ただしnが21以上だった時は
差分の絶対値を2倍にして返す

```
def diff21(n):
 diff = abs(21 - n)
 return diff * 2 if n > 21 else diff 
```

### parrot_trouble
hourが7未満または20より大きくかつtakingがtrueの時に
trueを返しそれ以外はfalseを返す関数｡

```
def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))
```
### makes10
aとbの合計が10,もしくはaが10もしくはbが10の時
にtrueを返しそれ以外はfalseを返す関数

```
def makes10(a, b):
  sum = a + b;
  return sum == 10 or a == 10 or b == 10
```

### near_hundred 
100または200との差分の絶対値が10以下の場合は
trueを返しそれ以外はfalseを返す関数

```
def near_hundred(n):
  near100 = abs(100 - n) < 10 + 1
  near200 = abs(200 - n) < 10 + 1
  return (near100 or near200)
```

###  pos_neg 
a,bがいずれか一方が負数かつnegativeがfalseのとき
またはa,bがともに負数かつnegativeがtrueのときtrue
を返しそれ以外はfalseを返す関数｡

TODO a,bを計算すれば negativeはでるので 比較式で出す
```
def pos_neg(a, b, negative):
  bothneg = a < 0 and b < 0
  eitherneg = a * b < 0
  return  (eitherneg and not negative) or (bothneg and negative)
```

### not_string 
strが'not'から始まっていればそのまま返し
そうでなければ'not 'を最初につけて返す｡

```
def not_string(str):
  return  str if str.startswith('not') else 'not ' + str 
```

###  missing_char
strからn番目の文字を消して返す｡

```
def missing_char(str, n):
  return str.replace(str[n],'',1)
```

### front_back
strの最初の文字と最後の文字を入れ替える
但しstrが1文字以下ならなにもしない｡

```
def front_back(str):
 length = len(str)
 return str if length < 2 else str[length -1] +  str[1: -1] + str[0]
```

### front3 
strの先頭から3文字を3回繰り返して返す

```
def front3(str):
  return str[0:3] * 3
```


