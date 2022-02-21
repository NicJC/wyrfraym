---
title: 'police arrests'
author: ''
date: '2022-02-21'
slug: []
categories: []
tags:
  - R
  - ggplot
  - visualisation
---

<html>
<body>
<style>

body{
  font-family: Outfit;
  font-size:17px;
  background: #B7e3f3;
}

.img{
border-radius: 8px;

}


</style>

```
knitr::opts_chunk$set(echo = FALSE , warning = FALSE , message = FALSE)
library(tidyverse)
library(ggfortify)
library(kableExtra)
library(leaflet)
```
<u><h3>Read data into a dataframe</h3></u>

```
arrests <- read.table("https://raw.githubusercontent.com/NicJC/Datasets/main/Arrests.csv", 
                  header = TRUE,
                 sep = ",")
```


```
df<-head(arrests,200)

kable(df) %>%
  kable_styling(full_width = F)
```
![df](df.png)

```
ggplot(arrests, aes(Age, fill = Race)) + 
geom_bar() +
labs(
    x = "Age of offence",
    y = "Count of arrests",
    title = "Barchart of Arrests by Age"
  ) 
```

<img src="images/barchart.png" alt="arrests by age" width="100%"/>

```
df<-head(arrests,100)

map = leaflet(df)%>%
  addTiles() %>%
  addCircles(lng = ~Longitude, lat = ~Latitude, popup = ~as.character(Category), label = ~as.character(Category))%>%
  
  addMarkers(lng = ~Longitude, lat = ~Latitude, popup = ~as.character(Category), label = ~as.character(Category))

map

```

<img src="images/map.png" alt="map of arrests" width="100%"/>

<u><h3>Map of 100 arrests in the Wahington area</h3></u>

```
df<-head(arrests,100)

boxplot(df$Age,horizontal = T, xlab = "Age", main="Boxplot of Age which arrests are spread over")
```

<img src="images/boxplot.png" alt="boxplot" width="100%"/>

</body>
