# Codingbat 2
## Warmup-2
### 1. string_times
```
def string_times(str, n):
  result = ''
  i=0
  while i<n:
    result += str
    i += 1
  return result
```

### 2. front_times
```
def front_times(str, n):
  if len(str) < 3:
    front = str
  else:
    front = str[:3]
  result = ''
  for i in range(n):
    result += front
  return result
```

### 3. string_bits
```
def string_bits(str):
  result = ""
  for i in range(0, len(str)):
    if i % 2 == 0:
      result = result + str[i]
  return result
```

### 4. string_splosion
```
def string_splosion(str):
  result = ''
  for i in range(len(str)+1):
    result += str[:i]
  return result
```

### 5. last2
```
def last2(str):
  if len(str) < 2:
    return 0
  last2 = str[len(str)-2:]
  count = 0
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count = count + 1
  return count
```

### 6. array_count9
```
def array_count9(nums):
  result = 0
  for i in nums:
    if i == 9:
      result += 1
  return result
```

### 7. array_front9
```
def array_front9(nums):
  result = False
  for i in range(4):
    if len(nums) > i:
      if nums[i] == 9:
        result = True
  return result
```

### 8. array123
```
def array123(nums):
  if len(nums)<3:
    return False
  for i in range(len(nums)-2):
    if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
      result = True
      break
    else:
      result = False
  return result
```
### 9. string_match
```
def string_match(a, b):
  r = len(a) if len(a)<len(b) else len(b)
  result = 0
  for i in range(r):
    if a[i:i+2] == b[i:i+2] and len(a[i:i+2]) == 2 and len(b[i:i+2]) == 2:
      result += 1
  return result
```

## Logic-2
### 10.make_bricks
```
def make_bricks(small, big, goal):
  number_of_fives = goal/5
  number_of_ones = goal - (5*number_of_fives)
  if number_of_fives <= big and number_of_ones <= small:
    return True
  elif (number_of_ones+5<=small) and (big*5 + number_of_ones + 5 == goal):
    return True
  else:
    return False
```

### 11.lone_sum
```
def lone_sum(a, b, c):
  if a == b == c:
    return 0
  elif a == b:
    return c
  elif a == c:
    return b
  elif b == c:
    return a
  else:
    return a + b + c
```

### 12.lucky_sum
```
def lucky_sum(a, b, c):
  if a == 13:
    return 0
  elif b == 13:
    return a
  elif c == 13:
    return a + b
  else:
    return a + b + c
```

### 13.no_teen_sum
```
def no_teen_sum(a, b, c):
  return fix_teem(a) + fix_teem(b) + fix_teem(c)

def fix_teem(n):
  if n>=13 and n<=19:
    if n == 15 or n == 16:
      return n
    else:
      return 0
  else:
    return n
```

### 14.round_sum
```
def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
def round10(num):
  if num%10>=5:
    return num/10*10 + 10
  else:
    return num/10*10
```

### 15.close_far
```
def close_far(a, b, c):
  if abs(b-a) <= 1:
    close = b
  elif abs(c-a) <= 1:
    close = c
  else:
    return False
  if (close == b) and (abs(c-a) >= 2) and (abs(c-b)>=2):
    return True
  elif (close == c) and (abs(b-a) >= 2) and (abs(b-c)>=2):
    return True
  else:
    return False
```
## String-2
### 16.double_char
```
def double_char(str):
  result = ''
  for i in str:
    result += i
    result += i
  return result
```

### 17.count_hi
```
def count_hi(str):
  a = str.split('hi')
  return len(a) - 1
```

### 18.cat_dog
```
def cat_dog(str):
  a = str.split('cat')
  b = str.split('dog')
  if len(a) == len(b):
    return True
  else:
    return False
```

### 19.count_code
```
def count_code(str):
  result = 0
  for i in range(len(str)-3):
    if str[i:i+2] == 'co' and str[i+3] == 'e':
      result += 1
  return result
```

### 20.end_other
```
def end_other(a, b):
  a = a.lower()
  b = b.lower()  return (b.endswith(a) or a.endswith(b))
```
### 21.xyz_there
```
def xyz_there(str):
  str = str.replace('.xyz', '')
  if 'xyz' in str:
    return True
  else:
    return False
```

## List-2
### 22.count_evens
```
def count_evens(nums):
  result = 0
  for i in nums:
    if i%2 == 0:
      result += 1
  return result
```

### 23.big_diff
```
def big_diff(nums):
  maxx = nums[0]
  minn = nums[0]
  for i in range(len(nums)):
    if nums[i] > maxx:
      maxx = nums[i]
    if nums[i] < minn:
      minn = nums[i]
  return maxx - minn

### 24.centered_average
```
def centered_average(nums):
  total = 0
  number_of_excepts = 2
  centered = nums
  centered.remove(max(nums))
  centered.remove(min(nums))
  for i in centered:
    total += i
  return total/len(centered)
```
### 25.sum13
```
def sum13(nums):
  sum = 0
  for i in range(0, nums.count(13)):
    if nums.count(13):
      after = nums.index(13)
      nums.remove(13)
      if after < len(nums):
        nums.pop(after)
  for i in nums:
    sum += i
  return sum
```
### 26.sum67
```
def sum67(nums):
  dontadd = 0
  sum = 0
  for i in range(0, len(nums)):
    if dontadd == 0:
      if nums[i] == 6:
        dontadd = 1
      else:
        sum += nums[i]
    else:
      if nums[i] == 7:
        dontadd = 0
      else:
        pass
  return sum

### 27.has22
```
def has22(nums):
  indices = []
  for i in range(0, len(nums)):
    if nums[i] == 2:
      indices.append(i)
  for i in range(0, len(indices)-1):
    if indices[i+1] - indices[i] == 1:
      return True
  return False
```