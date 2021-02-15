---
title: "Julia Basics"
date: 2020-12-08T06:58:34+13:00
tags: ["Analytic programming", "Julia"]
---

Julia is a relatively new programming language which has been around since about 2012.It is a high performance, high-level dynamic programming language.

Julia is a multi-purpose language useful for many different applications. Julia is well suited to numerical analysis and computational science. Written code can almost be as fast as that of C.

# Load packages

```julia

Pkg.add("DataFrames")
Pkg.add("CSV")
Pkg.add("Plots")

```
   
# For loop


```julia

for i in 1:15
    if isodd(i) 
        # Using 'continue' keyword 
        continue
    else
        println(i) 
    end 
end 
```

    2
    4
    6
    8
    10
    12
    14
    

# While loop


```julia
i = 0
while i < 10
    global i = i + 1
    if isodd(i) 
       
        continue
    else
        println(i) 
    end 
end 
```

    2
    4
    6
    8
    10
    

# Add function


```julia
function add(x, y)       
     
    return x + y 
end 
  
Result = add(10, 20)  
println("Result is ", Result) 
```

    Result is 30
    

# Pruduct function


```julia
function prod(x, y) 
    return x * y 
    println("This will not be executed") 
end 
  
Result = prod(10, 20)  
println("Result is ", Result) 
```

    Result is 200
    


```



