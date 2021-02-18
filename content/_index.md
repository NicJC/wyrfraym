<html>

<head>

<style>

body{
background-color: #DCD9C9;

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
    margin-left: 80%;
    width: 300%;
    margin-top: 10px;
    
   }
 to {
    margin-left: 30%;
    width: 300%;
    margin: 140px;
    margin-top: 75px;
  }
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



</style>

<body>

<div id="pic">

<img src="/images/avatar.jpg"  />

</div>

<div id="txt">

<p><h3><b><i>Hi, my name is Nic</i></b></h3></p>

</div>






</body>
</head>
</html>
