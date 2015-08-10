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
  sum = a + b
  return sum * 2 if a == b else sum
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
  daytime = (hour >= 7 and hour <= 20)
  return talking and not daytime
```
### makes10
aとbの合計が10,もしくはaが10もしくはbが10の時
にtrueを返しそれ以外はfalseを返す関数

```
def makes10(a, b):
  sum = a + b;
  return 10 in [sum ,a ,b]
```

### near_hundred 
100または200との差分の絶対値が10以下の場合は
trueを返しそれ以外はfalseを返す関数

```
def near_hundred(n):
  near100 = abs(100 - n) <= 10
  near200 = abs(200 - n) <= 10
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
 return str if length <= 1 else str[length -1] +  str[1: -1] + str[0]
```

#### 別解
```
def front_back(str):
 tail = len(str) -1
 if(tail < 1) : 
   return str
 lstr=list(str)
 lstr[0],lstr[tail] = lstr[tail],lstr[0]
 return "".join(lstr)
```
### front3 
strの先頭から3文字を3回繰り返して返す

```
def front3(str):
  return str[:3] * 3
```

## Warmup-2

### string_times

文字列を複数回繰り返す

```
def string_times(str, n):
 return str * n
```
### front_times
3文字目までをn回繰り返す
```
def front_times(str, n):
  return str[:3] * n
```

### string_bits
奇数番目の文字列だけ返す
```
def string_bits(str):
  return str[::2]
```

### string_splosion
文字列を1文字,1文字から2文字,1文字から3文字...1文字から最後を結合して返す
```
def string_splosion(str):
  return "".join([str[:x + 1] for x in range(len(str))])
```
#### 別解
```
def string_splosion(str):
  return "".join(map(lambda x:str[:x + 1],range(len(str))))
```

### last2
最後の2文字と一致する2文字の回数を返す
```
def last2(str):
  lenc = 2
  return [str[x:x + lenc] for x in range(len(str) -lenc)].count(str[-lenc:])
```
### array_count9
リストにいくつ9が含まれているかを返す
```
def array_count9(nums):
  return nums.count(9)
```
### array_front9
リストの先頭から4番目までに9が含まれるかを判定し真偽値を返す
```
def array_front9(nums):
  return 9 in nums[:4]
```

### array123
リストの中に1,2,3がすべて含まれているかを真偽値で返す
```
def array123(nums):
  return 1 and 2 and 3 in nums
```

### string_match 

```
def string_match(a, b):
  return len([x for x,y in zip(
    [a[x:x + 2] for x in range(len(a) - 1)]
    ,[b[x:x + 2] for x in range(len(b) - 1)])
  if x == y])
```
別解
```
def string_match(a, b):
  return [(x == y) for x,y in zip(
    [a[x:x + 2] for x in range(len(a) - 1)]
    ,[b[x:x + 2] for x in range(len(b) - 1)]
  )].count(True)
```