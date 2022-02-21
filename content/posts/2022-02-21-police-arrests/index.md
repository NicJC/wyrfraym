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

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = FALSE , warning = FALSE , message = FALSE)
library(tidyverse)
library(ggfortify)
library(kableExtra)

```


```{r}
arrests <- read.table("https://raw.githubusercontent.com/NicJC/Datasets/main/Arrests.csv", 
                  header = TRUE,
                 sep = ",")

head(arrests)
```

```{r}
ggplot(arrests, aes(Age, fill = Race)) + 
geom_bar() +
labs(
    x = "Age of offence",
    y = "Count of arrests",
    title = "Barchart of Arrests by Age"
  ) 
```

<img src="images/barchart.png" alt="arrests by age" width="100%"/>

</body>
