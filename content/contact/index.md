---
title: "Contact"
author: ''
date: '2022-02-13'

tags: ["contact"]
---

<style>

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  display:inline-block;
}

.flip-card-back {
  background-color: silver;
  color: white;
  transform: rotateY(180deg);
    font-size: 150%;
    display:inline-block;
}

img {
  border-radius: 8px;
}

#connect{
  width:justify;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: Outfit;
  
}

</style>

<body>


<p></p>

<center>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
     <img src="/images/avatar.jpg" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>Nic Coxen</h1> 
      <p>Business Intelligence Analyst</p> 
      <p></p>
    </div>
  </div>
</div>
</center>


<p></p>

<a href="https://www.linkedin.com/in/nicholas-coxen/" target="_blank">
<img src="images/linkedin1.svg" alt="" width="5%"/>
  
</a>
&nbsp&nbsp&nbsp&nbsp

<a href="https://github.com/NicJC" target="_blank">
  <img src="images/github.svg" alt="" width="5%"/>

</a>

<p></p>

</body>
</head>
