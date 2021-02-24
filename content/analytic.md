---
title: ""
date: 2021-02-21T10:59:27+13:00
layout: analytics
---

<head>
<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="3D Thumbnail Hover Effects" />
        <meta name="keywords" content="3d, 3dtransform, hover, effect, thumbnail, overlay, curved, folded" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style_common.css" />
        <link rel="stylesheet" type="text/css" href="css/style1.css" />
        <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300,300italic' rel='stylesheet' type='text/css' />
		<script type="text/javascript" src="js/modernizr.custom.69142.js"></script> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<style>

#pic{
   background-repeat: repeat-x;
   width: 800px;
}

</style>

<div id="pic">

<img src="/images/mathbanner.png"  />

</div>

<style>

body{
background-color: #FCFAF8;

}

h3{
color: #649B92;
font-style: Rajdhani;
}

h3{
color: #649B92;
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

<h3 onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#FCFAF8;width:750px;height:10px;padding:20px;"><b>
Analytical programming
</b>
<script>
function mOver(obj) {
  obj.innerHTML = "Python, R and Julia"
}

function mOut(obj) {
  obj.innerHTML = "There are 3 awesome programming languages that are good for Analytics"
}
</script></h3>

</head>
<body>

<br>
<br>
<style>

.boxgroup {
  display: flex;
  height: justify;
  flex-wrap: wrap;
  align-content: justify;
  background-color: #FCFAF8;
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
<h6 class="Acardtitle">R programming</h6></div>
<a href="https://nicstats.netlify.app/tags/visualisation/" target="_blank" rel="noopener">
<img src="/images/rproject.png"/></a>

</div>


<div class="B">
<div class="Bcardbody">
<h6 class="Bcardtitle">Python</h6></div>
<a href="https://nicstats.netlify.app/tags/python/">
<img src="https://img.icons8.com/dusk/64/000000/python.png"/></a>

</div>
  
  
<div class="C">
<div class="Ccardbody">
<h6 class="Ccardtitle">Julia</h6></div>
<a href="https://nicstats.netlify.app/tags/jupyter/">
<img src="/images/julia.png"/></a>

</div>

</div>




</body>
</head>

