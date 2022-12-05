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
  font-family: helvetica;
  }

#about{
  width:justify;
  text-align: left;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  word-break: break;
  flex-flow: column wrap;
  font-family: helvetica; 
}

#connect{
  text-align: left;
  width:justify;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: helvetica;
  
}

#data{
  width:justify;
  font-color:black;
  line-height: 17px;
  font-size: justify;
  font-family: helvetica;
  
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
  font-family: helvetica;
}

h3{
text-align: left;
}

</style>

<body>
<div id="pic">
<img src="/images/avatar.jpg"/>
</div>



<h3>My personal interests include:</h3>
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

<H3>About me</H3> 
<p></p>
</center>

I love numbers, and I'm truly amazed by how numbers control so many things in our daily lives. 
I'm particularly fascinated by number distributions, and how certain sequences of numbers are able to predict future outcomes.
<p>
I enjoy looking at the fundamental elements of popular trends like linear regression, machine learning, artificial intelligence and the like.
There are basic building blocks to all of these mathematical concepts.

</div>


<br>
  


 
<div class="data">
<h3>Free Data</h3>
    <div id="dt" ><br>
      <h3><a href="https://github.com/NicJC/Datasets">Check out my datasets!</a></h3>
    </div>
    </div>

<br>

<h3>Connect</h3>

<div id="connect" ><br>
<a href="https://nicstats.netlify.app/contact/" target="_blank">
<img src="/./_index_files/connect.svg" alt="" width="5%"/>
</a>


    
<center>
</div>

<div class="tagcloud">
<p><H3>Tag cloud</H3></p>


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


 
