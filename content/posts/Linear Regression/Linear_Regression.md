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

<script src="https://gist.github.com/NicJC/12893317af7a1d901c9db07079cc12e3.js"></script>

<img src="/posts/Linear Regression/Linear_Regression_files/df.png" alt="" width="100%" height="80%"/>

<hr>



### Splitting the data into a training set and a test set which we'll use later on.

<script src="https://gist.github.com/NicJC/12ed8588d7ce1a75b900998247e40d02.js"></script>

### we assign a linear model(lm1) to a model of "Priority" with respect to all the other variables in the data-frame (df).

<script src="https://gist.github.com/NicJC/5302e589db0affc9443f132835cfc8b1.js"></script>

### We run a summary statistic on this and observe that there are some significant predictors, (***), and many that aren't really useful. The adjusted r squared, or the coefficient of determination is very low too. This tells us that the predictors don't explain the variation in the data very well.

<img src="/posts/Linear Regression/Linear_Regression_files/lm1summary.png" alt="" width="100%" height="100%"/>

<hr>

### We can start checking the performance between different models, and try determine which model is the better model. To do this we first create a predition model and check the mean squared error of the model.

<script src="https://gist.github.com/NicJC/2c2b8a60a7baae3f6eec7daa53a3b761.js"></script>

[1] 0.1484985


### We can now take our lm1 model and use a backwards variable selection to find the optimal model that will remove predictors from the model to get to the lowest Akaike information criterion (AIC). R's backward variable selection uses AIC to determine and find the model that explains the most variation in the data model, and it will penalize models that use an excessive number of parameters. Generally we chose the model with the lowest AIC.

<script src="https://gist.github.com/NicJC/65b267f76fda14475694532afaa247e4.js"></script>


<img src="/posts/Linear Regression/Linear_Regression_files/AIC.png" alt="" width="80%" height="100%"/>

<hr>

#### Priority ~ 'Call Type','Battalion',Priority,'Unit Type',Neighborhood would be a better model.
### Let's check the summary statistics on this new model.



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

### Whichever way you look at this data, we just can't seem to find a good enough model using linear regression.
### Let's try a decision tree.


<script src="https://gist.github.com/NicJC/f55d9ddd83ed8850940039864af56ffc.js"></script>

### We fit a regression tree (lm4) , and then run a cross validation on lm4 with R's "printcp" command, we add a complexity parameter to the regression tree which reduces the error quite a lot. Hopefully this produces a good fit.


<img src="/posts/Linear Regression/Linear_Regression_files/regression tree.png" alt="" width="60%" height="60%"/>

<hr>

<script src="https://gist.github.com/NicJC/2ff00987faf13443244cf5d0d5230c57.js"></script>

### We print a plot of the Regression tree to see what it's doing, and on which nodes the tree splits.

<img src="/posts/Linear Regression/Linear_Regression_files/tree.png" alt="" width="100%"/>

<hr>

### Now we can predict and check the mean squared error.

<script src="https://gist.github.com/NicJC/df8ee930c9b9c80712996807be6f6a50.js"></script>

[1] 0.1528933

### Even worse! let's try a neural network.


<script src="https://gist.github.com/NicJC/3aea688af3a5240a465c658213c532ed.js"></script>






<hr>

### We can now predict with our neural network, and check the mean squared error.


<script src="https://gist.github.com/NicJC/ce7c0af16f3dce8bcfac4d16516c90d8.js"></script>

[1] 0.1396755

### This is a little better, the best so far. Let's also try a random forest.





The fit criteria can be referred to as the loss function. Training a neural network is done by adjusting the weights and biases of a neural network to minimize the loss function (finding the best fit) when using the training data.

When the model converges, it has basically found a set of criteria that minimizes the loss function /  penalty . The loss function should minimize the Residual Sum of Squares, thereby improving model fit.
