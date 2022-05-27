---
title: "Regression"

date: '2022-04-17'
tags:
  - R 
  - Neural_Networks 
  - Regression
  - Random_Forests
---


<html>

<p> We have some data from a fire department, and we want to try predict "priority" based on the given variables. There are several ways to do this.

</p>
<hr>

<p> First, we load some libraries for prediction and also plotting</p>


<script src="https://gist.github.com/NicJC/45e840a1fe3d6079718a2cb3828a93d2.js"></script>
<body>
<style>

body{
  font-family: Outfit;
  font-size:17px;
  background: #B7e3f3;
}

</style>


<br>

<p> Read in some data for the fire department</p>

<script src="https://gist.github.com/NicJC/451b53dda579afc78a875d5f299a27c8.js"></script>

<p> Rename fields</p>


<script src="https://gist.github.com/NicJC/d7360fb0e73742e95382fbc167f255b9.js"></script>


<p> Let's take a look at the data</p>



<img src="/posts/Linear Regression/Linear_Regression_files/df.png" alt="" width="100%" height="80%"/>

<hr>



### Splitting the data into a training set and a test set which we'll use later on.

<script src="https://gist.github.com/NicJC/12ed8588d7ce1a75b900998247e40d02.js"></script>

### we assign a linear model(lm1) to a model of "Priority" with respect to all the other variables in the data-frame (df).

<script src="https://gist.github.com/NicJC/5302e589db0affc9443f132835cfc8b1.js"></script>

<img src="/posts/Linear Regression/Linear_Regression_files/lm1summary.png" alt="" width="100%" height="100%"/>

<hr>


<script src="https://gist.github.com/NicJC/2c2b8a60a7baae3f6eec7daa53a3b761.js"></script>

[1] 0.1484985


<script src="https://gist.github.com/NicJC/65b267f76fda14475694532afaa247e4.js"></script>


<img src="/posts/Linear Regression/Linear_Regression_files/AIC.png" alt="" width="80%" height="100%"/>

<hr>

<script src="https://gist.github.com/NicJC/6ebf50d6aa55bbfb9fa5ec1825654965.js"></script>


<img src="/posts/Linear Regression/Linear_Regression_files/lm2summary.png" alt="" width="100%" height="100%"/>

<hr>

<script src="https://gist.github.com/NicJC/3c3e817abcfa3159a3e1b4619e8fc8bd.js"></script>


<img src="/posts/Linear Regression/Linear_Regression_files/lm3summary.png" alt="" width="100%" height="100%"/>

<hr>

<script src="https://gist.github.com/NicJC/5877b67f4cf5ded4dccd0ed5f59a57ed.js"></script>

[1] 0.1484985

<script src="https://gist.github.com/NicJC/26bcca2ce6b87aa530c0cbdcdecbbb07.js"></script>

[1] 0.1484985


<script src="https://gist.github.com/NicJC/f55d9ddd83ed8850940039864af56ffc.js"></script>


<img src="/posts/Linear Regression/Linear_Regression_files/regression tree.png" alt="" width="60%" height="60%"/>

<hr>

<script src="https://gist.github.com/NicJC/2ff00987faf13443244cf5d0d5230c57.js"></script>



<img src="/posts/Linear Regression/Linear_Regression_files/tree.png" alt="" width="100%"/>

<hr>

<script src="https://gist.github.com/NicJC/df8ee930c9b9c80712996807be6f6a50.js"></script>

[1] 0.1528933


We set the seed here for reproducibility, so that we can get the same results by setting the same seed if we wanted to.

<script src="https://gist.github.com/NicJC/51ee9dc1921c9d4b31672ba3e3177ef7.js"></script>



<img src="/posts/Linear Regression/Linear_Regression_files/converged.png" alt="" width="60%" height="60%"/>


<hr>


<script src="https://gist.github.com/NicJC/ce7c0af16f3dce8bcfac4d16516c90d8.js"></script>

[1] 0.2041005


The fit criteria can be referred to as the loss function. Training a neural network is done by adjusting the weights and biases of a neural network to minimize the loss function (finding the best fit) when using the training data.

When the model converges, it has basically found a set of criteria that minimizes the loss function /  penalty . The loss function should minimize the Residual Sum of Squares, thereby improving model fit.
