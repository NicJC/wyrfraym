---
title:   
date: 2020-12-19T15:44:19Z

---

<style type="text/css">

  
body {
  font-family: Outfit;
}


.dropdown-item{
font-family: Outfit;
color:black;
border-color:azure;

}

.dropdown-menu{
background-color: #d3eaf2;
border-color:azure;
}


.btn-primary:hover{
font-family: Outfit;
color:black;
background-color: #B7e3f3;
border-color:azure;
}

.btn-primary{
  color:#134b5f;
  width:auto;
  float:left;
  background-color: #d3eaf2;
  border-color:azure;

}


img {
  border-radius: 8px;
}

#pic{
  margin: 100px;
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
    width: 100%;
    margin: 0px;
    margin-top: 75px;
  }
}




a:link {
  color: #134b5f;

}

#interests{
  width:justify;
  text-align: left;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  }

#about{
  width:justify;
  text-align: left;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  word-break: break;
  flex-flow: column wrap;
  
}





* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Outfit;
}

body,
html {
  width: 100%;
  height: 100%;
}

#wrapper {
  background: #B7e3f3;
  width: 100%;
  height: 100%;
  color: #134b5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#wrapper * {
  margin: 5px;
}

.heading {
  font-size: 3em;
  padding: 10px 5px;
}

.caption {
  font-size: 1em;
  padding: 5px;
  font-family: Courier;
}

.animatable {
  position: relative;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: .75s cubic-bezier(1,-0.01,.12,.8) 1s 1 reveal forwards;
}

.animatable::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #20262b;
  padding: inherit;
  animation: .75s cubic-bezier(1,-0.01,.12,.8) 1.75s 1 hideBlack forwards;
}

@keyframes reveal {
  from { clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); }
  to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}

@keyframes hideBlack {
  from { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  to { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
}

</style>

<body>

<div id="pic">

<img src="/images/avatar.jpg"  />

</div>

<div class="menu">
 
  <p></p>                                        

  <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Menu
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Home</a></li>
      <li><a class="dropdown-item" href="/posts/">Posts</a></li>
      <li><a class="dropdown-item" href="#connect">Connect</a></li>
      <li><a class="dropdown-item-text" href="#">Text Link</a></li>
      <li><span class="dropdown-item-text">Just Text</span></li>
    </ul>
  </div>
</div>


<div id="wrapper">
  <div class="heading animatable">Hi, My name is Nic!</div>
</div>

<h3><u>My personal interests include:</u></h3>

<div id="interests">
        - Maths and Statistics<br>
        - Analytics<br>
        - Data Modeling<br>
        - Analytic programming
</div>


<div id="about">
<center>
<H3><u>About me</u></H3>       
</center>
I love numbers, and I'm truly amazed by how numbers control so many things in our daily lives. 
I'm particularly fascinated by number distributions, and how certain sequences of numbers are able to predict future outcomes.
<p>
I enjoy looking at the fundamental elements of popular trends like linear regression, machine learning, artificial intelligence and the like.
There are basic building blocks to all of these mathematical concepts.

</div>


<br>
  

 <!-- datasets -->
 
  <div class="data">
    <div id="dt" ><br>
      <a href="https://github.com/NicJC/Datasets">Check out my datasets!</a>
    </div>
    </div>

<br>



<!-- Tag cloud -->

<p><H3>Tags:</H3></p>


<script>

$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});
</script> 


</body>
</head>
</html>


 
