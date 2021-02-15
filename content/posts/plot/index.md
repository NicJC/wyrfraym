---
title: ggplot
date: 2020-12-03T07:48:29+13:00
tags: ["R","Visualisation","ggplot"]
---

I took some data from my computer, "Bike buyers" and decided to take the columns that I wanted to get some visuals on.

ggplot has a number of different ways of displaying data as displayed below.

```r
bikeb <- read.csv("C:/Data/bike_buyers.csv")

names(bikeb)
```

![png](p1.PNG)

```r
bike<-data.frame(Gender = bikeb$Gender, 
               Bike = bikeb$Purchased.Bike,
               Region = bikeb$Region,
               Age = bikeb$Age,
               Distance = bikeb$Commute.Distance)

str(bike)
head(bike,10)
```

![png](p2.PNG)

```r
library(ggplot2)
p <- ggplot(bike, aes(x=Age, y=Gender)) +geom_count()

p
```

![png](p3.png)

```r
mn<-min(bike$Age)-5
mn

mx<-max(bike$Age)+5
mx
```

```r
p + xlim(c(mn, mx))+ ggtitle("Gender and Age", subtitle="Bike Ownership for Gender according to age")
```
![png](p4.png)




