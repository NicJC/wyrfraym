---
title:   
date: 2020-12-19T15:44:19Z

---


<style>

body{
   background-image: url("images/mathbanner1.png");
   background-repeat: no-repeat;
   background-color: #B7e3f3;
}



img {
  border-radius: 8px;
}

#pic{
  margin: 100px;
  animation-duration: 4s;
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
    width: 100%;
    margin: 50px;
    margin-top: 95px;
  }
}

body{
   background: rgb(192, 192, 192);
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
color: #33322e;
}

.btn-int{
color: #33322e;
}

.nav-tabs {
float: center;
}

.dt {
  width: 200px;
  height: 50px;
  background-color: #FCFAF8;

}

@keyframes dt {
  0%   {background-color:#FCFAF8; left:0px; top:0px;}
  30%  {background-color:#FCFAF8; left:950px; top:0px;}
  100% {background-color:#FCFAF8; left:0px; top:0px;}
}

a:link {
  color: #4de4cb;

}

#interests{
    text-align: left;
  line-height: 20px;
  font-size: justify;
  }

#about{
  text-align: left;
  font-color:black;
  font-size: justify;
  
  word-break: break-all;
  flex-flow: column wrap;
  
}

</style>

<body>



<div id="pic">

<img src="/images/avatar.jpg"  />

</div>

<div id="txt">

<p><p style="font-size:22px"><b><i>Hi, my name is Nic</i></b></p>

</div>
<h3><b><u>My personal interests include:</u></b></h3>

<div id="interests">
        - Maths and Statistics<br>
        - Analytics<br>
        - Data Modeling<br>
        - Analytic programming
</div>
<div id="about">
<B><H3><u>About me</u></H3></B>       
<center>
I love numbers, and I'm truly amazed by how numbers control so many things in our daily lives. 
I'm particularly fascinated by number distributions, and how certain sequences of numbers are able to predict future outcomes.

I enjoy looking at the fundamental elements of popular trends like linear regression, machine learning, artificial intelligence and the like.
There are basic building blocks to all of these mathematical concepts.</center>


</div>

  <br>
  
  


 <!-- datasets -->
 
  <div class="data">
    <div id="dt" ><br>
      <a href="https://github.com/NicJC/Datasets">Check out my datasets!</a>
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


 
