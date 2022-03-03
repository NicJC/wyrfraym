---
title: "Gun Violence"

date: '2022-03-03'

tags:
  - R 
  - dplyr 
  - data-manipulation
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

## There are several ways of manipulating data in R, The Dplyr package from the tidyverse makes this quite easy.

```
knitr::opts_chunk$set(echo = TRUE)
library(tidyverse)
library(patchwork)
library(broom)
library(kableExtra)
```

```
gun<-read_csv("https://raw.githubusercontent.com/NicJC/Gun-Violence/main/gun.csv")
head(gun)
```
### First 'select' the fields that you want to display

We use the pipe operator (%>%) to assign a different procedure to the data.

### we have the data, then we assign to the data via %>% and the select operation, where we select our fields.

```
gun %>%
  select("Incident.Date" , "State" , "City.Or.County" , "Killed" , "Injured")
```

![](images/select.png)

### Then we filter the selection to not include "New York"

### We add a pipe %>% and we filter the data to not include (!= / not equal to)

```
gun %>%
  select("Incident.Date" , "State" , "City.Or.County" , "Killed" , "Injured") %>%
  filter(State != "New York")
```
![](images/filter.png)

### Then we arrange the data by State descending

### We pipe in the arrangement of the data, where we arrange by date , and descending State 

```
gun %>%
  select("Incident.Date" , "State" , "City.Or.County" , "Killed" , "Injured") %>%
  filter(State != "New York") %>%
  arrange(desc(State),"Incident.Date")
```
![](images/arrange.png)

## Finally, we pipe in a group_by function which groups the data and allocates a count.

## <b><u>Note</u></b> that for each operation, there needs to be a pipe operation prior to the operation which has the %>% perform the operation on the ever changing data.

```
R<-gun %>%
  select("Incident.Date" , "State" , "City.Or.County" , "Killed" , "Injured") %>%
  filter(State != "New York") %>%
  arrange(desc(State),"Incident.Date") %>%
  group_by(City.Or.County)

```
![](images/group_by.png)
```
View(R)
```

### We can View the object R which had the data-manipulation saved to it.

### The group_by adds a count to the the data table, which produces a count of fatalities.

![](images/head.png)
