# Coding Bat 1

## Warmup-1

### 1. sleep_in

```
def sleep_in(weekday, vacation):
  if(not weekday or vacation):
    return True
  else:
    return False
```

### 2. monkey_trouble

```
def monkey_trouble(a_smile, b_smile):
  if((a_smile and b_smile) or ((not a_smile) and (not b_smile))):
    return True
  else:
    return False
```

### 3. sum_double
```
def sum_double(a, b):
  result = a+b
  if(a == b):
    result = 2*result
  return result
```

### 4. diff21
```
def diff21(n):
  if n>21:
    result = 2*(n-21)
  else:
    result = 21-n
  return result
```

### 5. parrot_trouble
```
def parrot_trouble(talking, hour):
  if talking:
    if hour<7 or hour>20:
      return True
    else:
      return False
  else:
    return False
```

### 6. makes10

```
def makes10(a, b):
  if a==10 or b==10 or a+b==10:
    return True
  else:
    return False
```

### 7. near_hundred
```
def near_hundred(n):
  if abs(100-n)<=10 or abs(200-n)<=10:
    return True
  else:
    return False
```

### 8. pos_neg
```
def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
```

### 9. not_string
```
def not_string(str):
  a = str.split('not')
  if len(a) > 1 and a[0]=="":
    return str
  else:
    return "not " + str
```

### 10.missing_char
```
def missing_char(str, n):
  return str[0:n] + str[n+1:]
```

### 11.front_back
```
def front_back(str):
  if len(str) == 1:
    return str
  elif len(str) == 2:
    return str[1] + str[0]
  else:
    return str[-1:] + str[1:-1] + str[:1]
```

### 12.front3
```
def front3(str):
  if len(str) < 3:
    return str+str+str
  else:
    return str[:3] + str[:3] + str[:3]
```

## String-1

### 13.hello_name
```
def hello_name(name):
  return "Hello " + name + "!"
```

### 14.make_abba
```
def make_abba(a, b):
  return a + b + b + a
```

### 15.make_tags
```
def make_tags(tag, word):
  return "<" + tag + ">" + word + "</" + tag + ">"
```

### 16.make_out_word
```
def make_out_word(out, word):
  return out[0:2] + word + out[2:]
```

### 17.extra_end
```
def extra_end(str):
  return 3*(str[-2:])
```

### 18.first_two
```
def first_two(str):
  if len(str) < 2:
    return str
  else:
    return str[0:2]
```

### 19.first_half
```
def first_half(str):
  return str[0:len(str)/2]
```

### 20.without_end
```
def without_end(str):
  return str[1:-1]
```

### 21.combo_string
```
def combo_string(a, b):
  if len(a)<len(b):
    return a+b+a
  else:
    return b+a+b
```

### 22.non_start
```
def non_start(a, b):
  return a[1:] + b[1:]
```

### 23.left2
```
def left2(str):
  return str[2:] + str[0:2]
```

## List-1
### 24.first_last6
```
def first_last6(nums):
  if (nums[0] == 6) or (nums[len(nums)-1] == 6):
    return True
  else:
    return False
```

### 25.same_first_last
```
def same_first_last(nums):
  if len(nums)>0:
    if nums[0] == nums[len(nums) - 1]:
      return True
    else:
      return False
  else:
    return False
```

### 26.make_pi
```
def make_pi():
  return [3,1,4]
```

### 27.common_end
```
def common_end(a, b):
  if (a[0] == b[0]) or (a[len(a)-1] == b[len(b)-1]):
    return True
  else:
    return False
```

### 28.sum3
```
def sum3(nums):
  return nums[0]+nums[1]+nums[2]
```

### 29.rotate_left3
```
def rotate_left3(nums):
  return [nums[1], nums[2], nums[0]]
```

### 30.reverse3
```
def reverse3(nums):
  return [nums[2], nums[1], nums[0]]
```

### 31.max_end3
```
def max_end3(nums):
  if nums[0]>nums[2]:
    return [nums[0],nums[0],nums[0]]
  else:
    return [nums[2],nums[2],nums[2]]
```

### 32.sum2
```
def sum2(nums):
  if len(nums) == 0:
    return 0
  elif len(nums) == 1:
    return nums[0]
  else:
    return nums[0] + nums[1]
```

### 33.middle_way
```
def middle_way(a, b):
  return [a[1],b[1]]
```

### 34.make_ends
```
def make_ends(nums):
  return [nums[0], nums[-1]]
```

### 35.has23
```
def has23(nums):
  if 2 in nums or 3 in nums:
    return True
  else:
    return False
```

## Logic-1
### 36.cigar_party
```
def cigar_party(cigars, is_weekend):
  if is_weekend:
    if cigars>=40:
      return True
    else:
      return False
  else:
    if cigars>=40 and cigars<=60:
      return True
    else:
    return False
```

### 37.date_fashion
```
def date_fashion(you, date):
  if you<=2 or date<=2:
    return 0
  elif you>=8 or date>=8:
    return 2
  else:
    return 1
```

### 38.squirrel_play
```
def squirrel_play(temp, is_summer):
  upper = 90
  if is_summer:
    upper = 100
    return (temp>=60 and temp<=upper)
```

### 39.caught_speeding
```
def caught_speeding(speed, is_birthday):
  gift = 0
  if is_birthday:
    gift = 5
    if speed <= 60+gift:
      return 0
  elif speed >= 81+gift:
    return 2
  else:
    return 1
```

### 40.sorta_sum
```
def sorta_sum(a, b):
  total = a+b
  if total > 9 and total < 20:
    return 20
  else:
    return total
```

### 41.alarm_clock
```
def alarm_clock(day, vacation):
  weekday_alarm = "7:00"
  weekend_alarm = "10:00"
  if vacation:
    weekday_alarm = "10:00"
    weekend_alarm = "off"
  if day>0 and day<6:
    return weekday_alarm
  else:
    return weekend_alarm
```

### 42.love6
```
def love6(a, b):
  if a==6 or b==6 or a+b==6 or abs(a-b)==6:
    return True
  return False
```

### 43.in1to10
```
def in1to10(n, outside_mode):
  if not outside_mode:
    return (n>=1 and n<=10)
  else:
    return (n<=1 or n>=10)
```

### 44.near_ten
```
def near_ten(num):
  return (num%10==0 or num%10==1 or num%10==2 or abs(10-num%10)==2 or abs(10-
num%10)==1 or abs(10-num%10)==0)
```