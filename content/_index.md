---
title:   
date: 2020-12-19T15:44:19Z

---

<style type="text/css">

  
body {
  font-family: Outfit;
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

<!--Text Slide-->

.txt{
  
  margin: 100px;
  animation-duration: 3s;
  animation-name: slide;
  margin-top: 75px;
}

@keyframes slide {
  from {
    margin-left: 55%;
    width: 300%;
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

.dt:hover{
color:red;
}

</style>

<body>

<div id="pic">

<img src="/images/avatar.jpg"  />

</div>

<div id="txt">

<p><h3>Hi, my name is Nic</h3></p>

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

<p>><H3>Tags:</H3></p>



</body>
</head>
</html>


 
