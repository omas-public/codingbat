# codingbat

## Warmup-1

### sleep_in

```
def sleep_in(weekday, vacation):
  return (not weekday or vacation)
```
### monkey_trouble 

```
def monkey_trouble(a_smile, b_smile):
  # use xor
  return not(a_smile ^ b_smile) 
```

#### 別解
```
def monkey_trouble(a_smile, b_smile):
 return (a_smile == b_smile) 
```

###  sum_double


```
def sum_double(a, b):
  sum = a + b
  return sum * 2 if a == b else sum
```

### diff21 

```
def diff21(n):
 diff = abs(21 - n)
 return diff * 2 if n > 21 else diff 
```

### parrot_trouble

```
def parrot_trouble(talking, hour):
  daytime = ( 7 <= hour <= 20 )
  return talking and not daytime
```

### makes10

```
def makes10(a, b):
  sum = a + b;
  return 10 in [sum ,a ,b]
```

### near_hundred 

```
def near_hundred(n):
  near100 = abs(100 - n) <= 10
  near200 = abs(200 - n) <= 10
  return (near100 or near200)
```

###  pos_neg 
```
def pos_neg(a, b, negative):
  bothneg = a < 0 and b < 0
  eitherneg = a * b < 0
  return  (eitherneg and not negative) or (bothneg and negative)
```

### not_string 

```
def not_string(str):
  return  str if str.startswith('not') else 'not ' + str 
```

###  missing_char

```
def missing_char(str, n):
  return str.replace(str[n],'',1)
```

### front_back

```
def front_back(str):
 return str if length <= 1 else str[-1] +  str[1: -1] + str[0]
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
```
def front3(str):
  return str[:3] * 3
```

## Warmup-2

### string_times

```
def string_times(str, n):
 return str * n
```

### front_times

```
def front_times(str, n):
  return str[:3] * n
```

### string_bits

```
def string_bits(str):
  return str[::2]
```

### string_splosion
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
```
def last2(str):
  lenc = 2
  return [str[x:x + lenc] for x in range(len(str) -lenc)].count(str[-lenc:])
```
### array_count9

```
def array_count9(nums):
  return nums.count(9)
```

### array_front9

```
def array_front9(nums):
  return 9 in nums[:4]
```

### array123
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
  return [(x == y) for x, y in zip(
    [a[x:x + 2] for x in range(len(a) - 1)]
    ,[b[x:x + 2] for x in range(len(b) - 1)]
  )].count(True)
```