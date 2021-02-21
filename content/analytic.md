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

h4{
color: #649B92;
font-style: Rajdhani;
}


.h4:hover{
   width:150%;
   background-color: #92649B;
	 border-radius: 100px;
}

</style>

<hr>
<p><b><H4>Analytic coding:</H4></B></p>
<hr>

<b>
<ul><h2>
  <li><a href="/">Home</a></li>
  <li><a href="/posts/">Posts</a></li>
  <li><a href="/analytic/">Analytics</a></li>
  <li><a href="#about">About</a></li>
</ul></b></h2>


<!-- Nav tabs -->
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#home">R</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu1">Python</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu2">Julia</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
      <h3>R</h3>
      <p>R is a statistical programming language capable of analyzing complex statistical concepts.</p>
    </div>
    <div id="menu1" class="container tab-pane fade"><br>
      <h3>Python</h3>
      <p>Python is a very popular programming language and is very popular in areas of machine learning.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br>
      <h3>Julia</h3>
      <p>Julia is a relatively new programming language, and has some really good mathematical capability.</p>
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







