---
title:   
date: 2020-12-19T15:44:19Z
---

<style type="text/css">


body {
  scroll-snap-type: y proximity;
  scroll-padding-top: 15vh;
  overflow-y: scroll;
}

img {
  border-radius: 8px;
}

#pic{
width:100%;
height: 100px;
}

@keyframes slidein {
  from {
    margin-left: 55%;
    width: 100%;
    margin-top: 5px;
    animation: slidein 1s ;
   }
   
 to {
    margin-left: 5%;
    width: 100%;
    margin: 140px;
    margin-top: 75px;
  }
}


a, a:link, a:visited {
  text-decoration: none;
  padding: 9px 15px;
  color: #438ebc;

}

#interests{
  width:justify;
  text-align: left;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: Outfit;
  }

#about{
  width:justify;
  text-align: left;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  word-break: break;
  flex-flow: column wrap;
  font-family: Outfit; 
}

#connect{
  width:justify;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: Outfit;
  
}

#data{
  width:justify;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: Outfit;
  
}

a:hover{
color: #bc438e;
padding:5px;

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
  background: #fcfcfa;
  color: #438ebc;
  align-items: center;
}

.heading {
  font-size: 3em;
}

.caption {
  font-size: 1em;
  padding: 5px;
  font-family: Outfit;
}

h3{
text-align: left;
}

</style>

<body>
<div id="pic">
<img src="/images/avatar.jpg"/>
</div>



<h3><u>My personal interests include:</u></h3>
<p></p>

<div id="interests">
        - Maths and Statistics<br>
        - Analytics<br>
        - Data Modeling<br>
        - Analytic programming
        <p></p>
</div>


<div id="about">

<center>

<H3><u>About me</u></H3> 
<p></p>
</center>

I love numbers, and I'm truly amazed by how numbers control so many things in our daily lives. 
I'm particularly fascinated by number distributions, and how certain sequences of numbers are able to predict future outcomes.
<p>
I enjoy looking at the fundamental elements of popular trends like linear regression, machine learning, artificial intelligence and the like.
There are basic building blocks to all of these mathematical concepts.

</div>


<br>
  

 <!-- datasets --     #fcfcfa     #bc438e     #438ebc>
 
  <div class="data">
<h3><u>  Free Data</u></h3>
    <div id="dt" ><br>
      <a href="https://github.com/NicJC/Datasets">Check out my datasets!</a>
    </div>
    </div>

<br>

<div class="connect">

<u><H3>Conect with me on</H3></u>

<a href="https://github.com/NicJC/" target="_blank" rel="  noopener"><i  class="fab fa-github"></i></a>

<a href="https://www.linkedin.com/in/nicholas-coxen/" target="_blank" rel="  noopener"><i  class="fab fa-linkedin-in"></i></a>
    
<center>
</div>
<!-- Tag cloud -->
<div class="tagcloud">
<u><p><H3>Tags</H3></p></u>


<script>

$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});
</script> 

</div>
</body>
</head>
</html>


 
