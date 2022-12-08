---
title: "Contact"
author: ''
date: '2022-02-13'

tags: ["contact"]
---

<style>
body
    margin: 0
    padding: 0
    font-family: helvetica;
    background-color: #eee
    a
        color: #ffffff
        text-decoration: none

.card
    position: absolute
    top: 50%
    left: 50%
    height: 400px
    width: 300px
    transform: translate(-50%, -50%)
    transform-style: preserve-3d
    perspective: 600px
    transition: .5s
    &:hover .card-front
        transform: rotateX(-180deg)
    &:hover .card-back
        transform: rotateX(0deg)


.card-front
    height: 100%
    width: 100%
    background-image: url(![](images/avatar.jpg))
    background-position: 50% 50%
    background-size: cover
    position: absolute
    top: 0
    left: 0
    background-color: #000000
    backface-visibility: hidden
    transform: rotateX(0deg)
    transition: .5s

.card-back
    height: 100%
    width: 100%
    position: absolute
    top: 0
    left: 0
    background-color: #000000
    backface-visibility: hidden
    transform: rotateX(180deg)
    transition: .5s
    color: #ffffff
    text-align: center
    h2
        margin: 60% auto 35% auto
        font-size: 26px
        span
            font-size: 20px
    a
        height: 20px
        width: 20px
        padding: 5px 5px
        border-radius: 4px
        line-height: 20px
        &:hover
            color: #000000
            background-color: #fff


</style>

<body>


<p></p>

<center>
<div class="card">
        <div class="card-front"></div>
        <div class="card-back">
            <h2>Nic Coxen<br><span>Business Intelligence Analyst</span></h2>
            <div class="social-icons">

                <a href="#" class="fas fa-code-branch" aria-hidden="true"></a>
                <a href="#" class="fa fa-linkedin" aria-hidden="true"></a>
                
            </div>
        </div>
    </div>
</center>


<p></p>

<a href="https://www.linkedin.com/in/nicholas-coxen/" target="_blank">
<img src="images/linkedin1.svg" alt="" width="5%"/>
  
</a>
&nbsp&nbsp&nbsp&nbsp

<a href="https://github.com/NicJC" target="_blank">
  <img src="images/github.svg" alt="" width="5%"/>

</a>




</body>
</head>
</html>
