---
title: Integration magic
author: ''
date: '2022-05-19'

tags:
  - R
  - math
  - integration
  - ggplot
---
<html>
<body>
<style>

body{
  font-family: Outfit;
  font-size:17px;
  background: #B7e3f3;
}

</style>

```{r}
curve <- function(t) {3.6*(t/2)}
integrate(curve, lower=1, upper=9)

intgr8 <- Vectorize(function(f = curve, lower=0,upper,...){
    integrate(f,lower,upper,...)[['value']] },'upper')


ggplot(data.frame(x = c(0,8)),aes(x=x)) + 
   stat_function(fun = intgr8, args = list(f = curve, lower=0))
```