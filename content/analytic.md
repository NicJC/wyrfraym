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

.pic{
border-radius: 8px;
}


body{
 background-image: url("images/mathbanner.png");
 background-repeat: repeat-x;
}

}

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

</head>

<body>



<p><h4>Julia</h4></p>
<p><h4>Python</h4></p>
<p><h4>R</h4></p>

<div id="pic">

<img src="/images/mathbanner.jpg"  />

</div>
<div class="container mt-3">
  <h2>Dynamic Tabs</h2>
  <br>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu1">Menu 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu2">Menu 2</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="container tab-pane fade"><br>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>

<script>
$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});
</script>


</body>



