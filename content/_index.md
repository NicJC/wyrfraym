<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  

<style>

body{
   background-image: url("images/mathbanner1.png");
   background-repeat: no-repeat;
}

img {
  border-radius: 8px;
}

#pic{
  margin: 140px;
  animation-duration: 3s;
  animation-name: slidein;
  margin-top: 75px;
}

@keyframes slidein {
  from {
    margin-left: 55%;
    width: 200%;
    margin-top: 10px;
   }
 
   
   
 to {
    margin-left: 40%;
    width: 200%;
    margin: 140px;
    margin-top: 75px;
  }
}
</style>


<style>

body{
   background-color: #FCFAF8;
   }
   
#txt{
  
  margin: 70px;
  animation-duration: 3s;
  animation-name: slide;
  margin-top: -95px;
}

@keyframes slide {
  from {
    margin-left: -50%;
    width: 300%;
    margin-top: -60px;
    
   }
 to {
    margin-left: 150%;
    width: 300%;
    margin: 70px;
    margin-top: -95px;
  }
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
  }
  
body {
  font-family: Baloo 2, Roboto, Rajdhani;
}



.card-link{
color: #649B92;
}

.accordion{
color: black;
}

.card-header{
color: #9B9264;
}

.btn-about{
color: #649B92;
}

.btn-int{
color: #649B92;
}

.nav-tabs {
float: center;
}

</style>

<body>

<div id="pic">

<img src="/images/avatar.jpg"  />

</div>

<div id="txt">

<p><p style="font-size:22px"><b><i>Hi, my name is Nic</i></b></p>

</div>

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
    

<h4>Visualization</h4>
  <br>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#home">Gadfly</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu1">ggplot</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#menu2">Seaborn</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
      <h3>Julia plotting</h3>
      <p>PGadfly is a plotting library for Julia </p>
    </div>
    <div id="menu1" class="container tab-pane fade"><br>
      <h3>R plotting</h3>
      <p>ggplot is an R graphics library.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br>
      <h3>Python plotting</h3>
      <p>Seaborn is one of Python's plotting libraries.</p>
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


<style>

#tags{
width: 175px;
}



#cDiv {
  width: 170px;
  height: 40px;
  background-color: #81de81;
  border: 1.5px solid black;
  border-radius: 8px;
  color: black;
}

</style>


<p><b><H4>Conect with me on:</H4></B></p>


<a href="https://github.com/NicJC" target="_blank">
  <img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=azure alt=github style="margin-bottom: 8px;" />
  
</a>

<a href="https://www.linkedin.com/in/nicholas-coxen/" target="_blank">
  <img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=azure alt=linkedin style="margin-bottom: 8px;" />
  
</a>

<div id="cDiv">

<h4><a href="https://codepen.io/nic-coxen" target="_blank">
  <i class="fab fa-codepen">CODEPEN</i><p style="font-size:12px"><p style="color:black">   </p></h4></a></div>


<script>
$(document).ready(function(){

  $('.btn-int').tooltip({title: "This really interests me", trigger: "hover"}); 
  $('.btn-about').tooltip({title: "More about me", trigger: "hover"}); 
});


</script>

<p><b><H3>Tags:</H3></B></p>


</body>
</head>
</html>


 
