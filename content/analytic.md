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

<div class="container mt-3">
 
  <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#collapseOne">
     <button class="btn btn-int">
     <p style="color:#9B9264"><b><p style="font-size:17px">My Interests include:</b></p>
     </button>
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-parent="#accordion">
        
        <div class="card-body">
        <p>
        - Maths and Statistics<br>
        - Analytics<br>
        - Data Modeling<br>
        - Analytic programming
        </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
        <button class="btn btn-about">
      <p style="color:#9B9264"><b><p style="font-size:17px">About me:</b></p>
      </button>
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
<p>
I love numbers, and I'm truly amazed by how numbers control so many things in our daily lives. 
I'm particularly fascinated by number distributions, and how certain sequences of numbers are able to predict future outcomes.
<br>
I like looking at the fundamental elements of popular trends like linear regression, machine learning, artificial intelligence and the like.
There are basic building blocks to all of these mathematical concepts.
<br>
Probability has a humble beginning in dice rolls and coin tossing, and simple linear regression is a set of averages of a x and y variables.  Once the basics are in place, concepts are built upon, and that's when it starts getting more involved. If we had to start talking about linear regression and throw in coefficient of determination, it gets tricky, but working up to, and explaining what this means is pretty straight forward, and then the whole picture starts coming into view.



</p>
        </div>
      </div>
    </div>

</ body>

