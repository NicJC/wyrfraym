<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
  
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

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
color: #33322e;
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
     <p style="color:#1b1121"><b><p style="font-size:17px">My Interests include:</b></p>
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
      <p style="color:#1b1121"><b><p style="font-size:17px">About me:</b></p>
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

<br>

<i class="fa fa-cog fa-spin"></i>

<!-- Tag cloud -->

<script>
$(document).ready(function(){

  $('.btn-int').tooltip({title: "This really interests me", trigger: "hover"}); 
  $('.btn-about').tooltip({title: "More about me", trigger: "hover"}); 
});
</script>



<p></i><b><H3>Tags:</H3></B></p>

</body>
</head>
</html>


 
