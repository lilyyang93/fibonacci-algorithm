def fibonacci(n):
  fib = [0, 1]
  result = 0
  i = 0
  while i < n:
    result = fib[i]+fib[i+1]
    fib.append(result)
    i+=1
  return fib[i]


