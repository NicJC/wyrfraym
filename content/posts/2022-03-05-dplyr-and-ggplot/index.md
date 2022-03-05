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

```
knitr::opts_chunk$set(echo = TRUE,warning = F , comment = F)
library(tidyverse)
library(patchwork)
library(broom)
library(gridExtra)
library(cowplot)
```

```
energy<-read_csv("https://raw.githubusercontent.com/NicJC/Energy_transition/master/EnergyTransition.csv")
```


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
![](/../../R/energy_files/geom_bar.png)

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category ==  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine"))
```
![](/../../R/energy_files/t1.png)

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category ==  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine"))%>%
ggplot() + geom_point(
  aes(
    x = Year , y = Category , color = factor(Year),size = Category ))+ labs(title = "Energy transition",caption = "Energy transition by Category and Year") + theme(panel.background = element_rect(fill = "lightgray")) 
```
![](/../../R/energy_files/geom_point.png)

```
energy %>%
  select( Year , Category , Country , ProvidedValue , Month) %>%
  filter(Category !=  c("Fossil_Gas", "Geothermal" , "Nuclear" , "Wind_offshore","Hydro_Marine")) %>% 
  group_by(Category)%>% 
  summarise(Count = n()) %>%
  ggplot() + geom_jitter(aes(y = Category , x = Count , color  = factor(Count))) + labs(title = "Energy transition", subtitle = " Count of Energy transition by Category")+ theme(
  legend.text = element_text(size = 12),
  legend.title = element_text(size = 15, face = "bold"),
  panel.grid.major = element_line(color = "black", size = 0.5),
  panel.background = element_rect(fill = "azure") ,
    plot.title = element_text(margin = margin())
)
```

![](/../../R/energy_files/geom_jitter.png)
