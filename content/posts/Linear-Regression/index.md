---
title: ggplot
date: 2020-12-02T09:43:22+13:00
tags: ["R", "ggplot","visualisation","tidyverse"]
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
<br>
```
knitr::opts_chunk$set(message = FALSE,warning = F, echo = T,comment = F)
library(tidyverse)

fires <- read_csv("https://raw.githubusercontent.com/NicJC/Fires/main/fires.csv",show_col_types = FALSE)
```
<hr>

```
fires %>%
  filter(fire_year == 1984 & fire_origin == "private land" & true_cause == c("unsafe fire","abandoned fire")) %>%
  group_by(fire_year,true_cause,activity_class) %>%
  summarise(Count = n(),Total_burnt_hectares = sum(uc_hectares)) %>%
  arrange(desc(Total_burnt_hectares)) %>%
  ggplot() + aes(x = Total_burnt_hectares , y = activity_class) + 
  geom_boxplot(aes(color = activity_class)) + 
  labs(title = "Hectares burnt due to activity" , y = "" , x  = "Burnt Hectares") + 
  theme_bw()
```
<hr>

<img src="images/hectares.png" alt="" width="100%"/>

<hr>

```
fires %>% select(fire_year,true_cause,activity_class,uc_hectares) %>%
  filter(fire_year == c('1960','1970','1980','1990','2000'),
  true_cause == c("Camp Fire","abandoned fire","burning substance","unsafe fire") ) %>%
  group_by(fire_year,activity_class,true_cause,uc_hectares) %>%
  summarise(count = n(),Hect = sum(uc_hectares)) %>%
  ggplot() + aes(x=fire_year,y = count, color = true_cause, fill = true_cause ) + 
  geom_jitter(aes(size= Hect )) + 
  labs(title = "Count of Fires according to cause, and Hectares burnt", x = "Year" , y = "Count")
  
```
<hr>
<img src="images/jitter.png" alt="" width="100%"/>
<hr>

```
fires %>% select(fire_year,true_cause,activity_class,uc_hectares) %>%
  filter(fire_year == c('1960','1970','1980','1990','2000'),
  true_cause == c("Camp Fire","abandoned fire","burning substance","unsafe fire") ) %>%
  group_by(fire_year,activity_class,true_cause,uc_hectares) %>%
  summarise(count = n(),Hectares = sum(uc_hectares)) %>%
  pivot_wider(names_from = true_cause, values_from = count) %>%
  ggplot() + aes(x = fire_year ) + geom_bar(aes(color = activity_class)) + 
  labs(title = "Count of Activity by Year" , x = "Year" , y = "Count")
```

<hr>

<img src="images/barplot.png" alt="" width="100%"/>