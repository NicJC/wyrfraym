---
title: css
author: ''
date: '2022-02-12'

tags:

  - visualisation
---
<html>
<body>
<style>




#pic {
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

<div class="pic">

<img src="images/python.svg" alt="" width="2%"/>
</div>
<script>

</script>
</body>
</html>
