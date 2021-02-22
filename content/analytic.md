---
title: ""
date: 2021-02-21T10:59:27+13:00
layout: analytics
---

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<style>

body{
background-color: #FCFAF8;

}

h3{
color: #649B92;
font-style: Rajdhani;
}

h3{
color: #9B9264;
}

.h3:hover{
   background-color: #92649B;
}


h4{
color: #649B92;
}

.h4:hover{
   background-color: black;
}


ul { 
  list-style-type: none; 
  overflow: hidden; 
  width:200px;
  float: right;
}


ul li {
  width: 120px;
}
    
ul li a {
  display: block;
  color: #4de4cb;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}



ul li .active {
  background-color: #FCFAF8;
  color: black;
  font-weight: 1000;
  border-radius: 8px;
}



</style>

<hr>
<p><b><H3>Analytic coding:</H3></B></p>
<hr>



<ul><h2>
  <li><a href="/">Home</a></li>
  <li><a href="/posts/">Posts</a></li>
  <li><a href="/analytic/">Analytics</a></li>
  <li><a href="#about">About</a></li>
</ul></b></h2>



<h2 onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#FCFAF8;width:500px;height:10px;padding:20px;"><b>
Analytical programming
</b>
<script>
function mOver(obj) {
  obj.innerHTML = "Python, R and Julia"
}

function mOut(obj) {
  obj.innerHTML = "There are 3 awesome programming languages that are good for Analytics"
}
</script></h2>

</head>

<body>

<style>

.boxgroup {
  display: flex;
  height: justify;
  flex-wrap: wrap;
  align-content: justify;
  background-color: #f5f4f3;
  }

.boxgroup > div{
  background-color: beige;
  align-content: center;
  width: 180px;
  line-height: justify;
  margin: 10px;
  text-align: center;
  line-height: 180px;
  font-size: justify;
  border-radius: 8px;
  border: 1.5px solid black
}

.boxgroup div.A {
  background-color: #8c4ba3;
  border: 1.5px solid black;
  width: 300px;
  margin: 10px;
  text-align: center;
  line-height: 130px;
  border-radius: 8px;
  color: black;
}

.boxgroup div.B {
  background-color: #4287f5;
   border: 1.5px solid black;
  width: 300px;
  margin: 10px;
  text-align: center;
  line-height: 130px;
  border-radius: 8px;
  color: black;
}


.boxgroup div.C {
  background-color: #25cc25;
   border: 1.5px solid black;
  width: 300px;
  margin: 10px;
  text-align: center;
  line-height: 130px;
  border-radius: 8px;
  color: black;
}

.boxgroup div.A:hover {
      opacity: 0.3;
      background-color: grey;
    }
    
  .boxgroup div.B:hover {
      opacity: 0.3;
      background-color: grey;
    }
    
  .boxgroup div.C:hover {
      opacity: 0.3;
      background-color: grey;
    }  
</style>

<div class="boxgroup">

<div class="A">
<div class="Acardbody">
<h6 class="Acardtitle">Visualisation</h6></div>
<a href="https://nicstats.netlify.app/tags/visualisation/" target="_blank" rel="noopener">
<img src="https://img.icons8.com/plasticine/100/4a90e2/combo-chart.png"/></a>

</div>


<div class="B">
<div class="Bcardbody">
<h6 class="Bcardtitle">Python</h6></div>
<a href="https://nicstats.netlify.app/tags/python/">
<img src="https://img.icons8.com/dusk/64/000000/python.png"/></a>

</div>
  
  
<div class="C">
<div class="Ccardbody">
<h6 class="Ccardtitle">Jupyter Notebook</h6></div>
<a href="https://nicstats.netlify.app/tags/jupyter/">
<img src="/images/jupyter.png"/></a>

</div>

</div>

</body>
</head>

