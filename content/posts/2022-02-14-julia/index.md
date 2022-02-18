---
title: 'Julia'
author: ''
date: '2022-02-14'
tags:
  - Julia
  - math
  - statistics
---
<body>
<style>
body {
  scroll-snap-type: y proximity;
  scroll-padding-top: 15vh;
  overflow-y: scroll;
}


body{
  width:100%;
  line-height: 17px;
  font-size: justify;
  font-family: Outfit;
  position:absolute;

}

.comment{
  position:flex;
  margin:20px;
  padding: 30px;
  width:justify;
  font-color:black;
  
}

p1{
color:#134b5f;
}

p2{

  width:justify;
  color:black;
  float:left;
  
}

</style>

<div class="comment">
This quote is from the developers of Julia :

—Jeff Bezanson, <br>
-Stefan Karpinski,<br> 
-Viral Shah <i>and</i> <br>
-Alan Edelman<br>
"We are greedy: we want more".<br>
<p>
"We want a language that's open source, with a liberal license. We want the
speed of C with the dynamism of Ruby. We want a language that's
homo-iconic, with true macros like Lisp, but with obvious, familiar
mathematical notation like Matlab. We want something as usable for
general programming as Python, as easy for statistics as R, as natural for
string processing as Perl, as powerful for linear algebra as Matlab, as good
at gluing programs together as the shell. Something that is dirt simple to
learn, yet keeps the most serious hackers happy. We want it interactive
and we want it compiled.<br>

(<p1>Did we mention it should be as fast as C?</p1>)"</p> 

The above quote comes from<u>[this article](https://julialang.org/blog/2012/02/why-we-created-julia/)</u>

</div>

<p2>

Julia is a rich programming language that has a lot to offer, besides the speed and mathematical proficiency, Julia also does pretty well as far a graphing and plotting is concerned.


Take a look ...

Julia also has the capability of using R data sets - the famous R iris data set...

# Julia Plots


```julia
using RDatasets , StatsPlots
iris = dataset("datasets", "iris");


@df iris scatter(
    :SepalLength,
    :SepalWidth,
    group = :Species,
    title = "Iris data",
    xlabel = "Length",
    ylabel = "Width",
    m = (0.5, [:cross :hex :star7], 12),
    bg = RGB(0.2, 0.2, 0.2)
)
```




    
![svg](output_1_0.svg)
    




```julia
xs = [string("x", i) for i = 1:10]
ys = [string("y", i) for i = 1:6]
z = float((1:6) * reshape(1:10, 1, :))
heatmap(xs, ys, z, aspect_ratio = 2)
```




    
![svg](output_2_0.svg)
    




```julia
density(randn(50), xlabel = "xlabel", ylabel = "ylabel")
```




    
![svg](output_3_0.svg)
    




```julia
f(x, a) = begin
        1 / x + a * x ^ 2
    end
xs = collect(0.1:0.05:2.0)
as = collect(0.2:0.1:2.0)
x_grid = [x for x = xs for y = as]
a_grid = [y for x = xs for y = as]
plot(x_grid, a_grid, f.(x_grid, a_grid), st = :surface
    , xlabel = "longer xlabel"
    , ylabel = "longer ylabel"
    , zlabel = "longer zlabel")
```




    
![svg](output_4_0.svg)
    




```julia
plot(rand(10, 4), layout = 4
    , xguide = "x guide"
    , yguide = "y guide"
    , xguidefonthalign = [:left :right :right :left]
    , yguidefontvalign = [:top :bottom :bottom :top]
    , xguideposition = :top, yguideposition = [:right :left :right :left]
    , ymirror = [false true true false]
    , xmirror = [false false true true]
    , legend = false
    , seriestype = [:bar :scatter :path :stepmid])

```




    
![svg](output_5_0.svg)
    




```julia
scatter!(rand(50), markersize = 6, c = :steelblue)
```




    
![svg](output_6_0.svg)
    




```julia

```


</p2>
</body>