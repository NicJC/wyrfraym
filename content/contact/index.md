---
title: "Contact"
author: ''
date: '2022-02-13'

tags: ["contact"]
---

<style>

.flip-card {
  background-color: transparent;
  position: relative;
  width: 300px;
  height: 200px;
  
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  transform: rotateY(0deg);
}

/* Style the back side */
.flip-card-back {
  transform: rotateX(180deg);
}

</style>

<body>
<div class="flip-card">
  <div class="flip-card-inner">
      <div class="flip-card-front">
		    <img src="images/avatar.jpg"  style="width:300px;height:300px;">
		
		  
		    <div class="flip-card-back">
			      <h1>Nic Coxen</h1>
           <p>BI Analyst</p>
           </div>
     
		    </div>
	</div>
</div>







</body>
</head>
</html>
