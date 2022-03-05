---
title: 'energy'
author: "Nic Coxen"
date: '2022-03-05'
output: html_document
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

### Load R libraries:

```
knitr::opts_chunk$set(echo = TRUE,warning = F , comment = F)
library(tidyverse)
library(patchwork)
library(broom)
library(gridExtra)
library(cowplot)
```
<hr>

### Get data

```
energy<-read_csv("https://raw.githubusercontent.com/NicJC/Energy_transition/master/EnergyTransition.csv")
```

<hr>

### dplyr to manipulate data and to pipe to ggplot:

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category ==  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine")) %>%
  ggplot()  +
  geom_bar(
    aes(x=Category,fill = Country ,size = Year)) + labs(title = "Energy transition by Category") + theme(
  legend.text = element_text(size = 12),
  legend.title = element_text(size = 15, face = "bold"),
  panel.grid.major = element_line(color = "gray60", size = 0.8),
  panel.background = element_rect(fill = "beige")
)
```
## BarPlot

<img src="images/geom_bar.png" alt="" width="100%"/>



<hr>


```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category ==  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine"))
```
<hr>

### The data frame from the above operation



![](images/t1.png)

<hr>

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category ==  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine"))%>%
ggplot() + geom_point(
  aes(
    x = Year , y = Category , color = factor(Year),size = Category ))+ 
    labs(title = "Energy transition",caption = "Energy transition by Category and Year") + 
    theme(panel.background = element_rect(fill = "lightgray")) 
```
<hr>


<img src="images/geom_point.png" alt="" width="120%"/>

<hr>

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category !=  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine")) %>% 
  group_by(Category)%>% 
  summarise(Count = n()) %>%
  ggplot() + geom_jitter(aes(y = Category , x = Count , color  = factor(Count))) + 
  labs(title = "Energy transition", subtitle = " Count of Energy transition by Category")+ theme(
  legend.text = element_text(size = 12),
  legend.title = element_text(size = 15, face = "bold"),
  panel.grid.major = element_line(color = "black", size = 0.5),
  panel.background = element_rect(fill = "azure") ,
    plot.title = element_text(margin = margin())
)
```
<hr>


<img src="images/t2.png" alt="" width="40%"/>
<hr>

### The data frame from the below JitterPlot.

<hr>

<img src="images/geom_jitter.png" alt="" width="120%"/>

<hr>
