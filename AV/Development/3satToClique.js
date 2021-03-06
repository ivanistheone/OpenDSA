/*global ODSA, setPointerL */
//"use strict";
$(document).ready(function () {
//  var av = new JSAV(av_name);
  var av = new JSAV($('.avcontainer'));
  
  var label1, label2 , label3, label4, label5, label6,label7,label8,label9;
  //slide2
  var y = 0;

  av.umsg("<b>Reduction of 3SAT to Clique</b>");

  y=20;

  label1 = av.label("We transform a formula &Phi; of <i>k</i> three-clause literals into a k-Clique problem in the following way.",{top:y}); 
  label1.show();

  y = y+50;
  label2 = av.label("We construct a graph G of <i>k</i> clusters with a maximum of <i>3</i> nodes in each cluster.",{top:y}); 
  label2.show();

  y = y+50;
  label3 = av.label("Each cluster corresponds to a clause in &Phi;.",{top:y}); 
  label3.show();

  y = y+50;
  label4 = av.label("Each node in a cluster is labeled with a literal from the clause.",{top:y}); 
  label4.show();

  y = y+50;
  label6 = av.label("An edge is put between all pairs of nodes in different clusters except for pairs of teh form <i>(x, ^x)</i>",{top:y}); 
  label6.show();

  y = y+50;
  label5 = av.label("No edge is put between any pair of nodes in the same cluster.",{top:y}); 
  label5.show();

//slide 14
  av.step();
  label1.hide();
  label2.hide();
  label3.hide();
  label4.hide();
  label5.hide();
  label6.hide();

  av.umsg("<b>Example of 3SAT to k-Clique Reduction</b>");
  y=-40;
  x=0;
  label1 = av.label("&Phi; = ",{top:y,left:x}); 
  label1.show();
  x = x+35;
  label2 = av.label("(x<sub>2</sub> + x<sub>1</sub> + ^x<sub>3</sub>)",{top:y,left:x}).css({"color":"red","opacity":0.5}); 
  label2.show();
  x = x+100;
  label5 = av.label(".",{top:y,left:x-5}); 
  label5.show();
  label3 = av.label("(^x<sub>1</sub> + ^x<sub>2</sub> + x<sub>4</sub>)",{top:y,left:x}).css({"color":"green","opacity":0.5}); 
  label3.show();
  x = x+110;
  label6 = av.label(".",{top:y,left:x-5}); 
  label6.show();
  label4 = av.label("(x<sub>2</sub> + ^x<sub>4</sub> + x<sub>3</sub>)",{top:y,left:x}).css({"color":"blue","opacity":0.5}); 
  label4.show();

  var  g1 = av.ds.graph({width: 450, height: 450,layout: "manual", directed: false});
  x=0;
  y=100;
  var x21 = g1.addNode("^x<sub>1</sub>", {"left": x+100, "top": y}).css({"background-color":"green","opacity":0.5});
  var x22 = g1.addNode("^x<sub>2</sub>", {"left": x+200,"top": y}).css({"background-color":"green","opacity":0.5});
  var x23 = g1.addNode("x<sub>4</sub>", {"left": x+300, "top": y}).css({"background-color":"green","opacity":0.5});
   
  var x11 = g1.addNode("x<sub>2</sub>", {"left": x+20, "top": y+90}).css({"background-color":"red","opacity":0.5});
  var x12 = g1.addNode("x<sub>1</sub>", {"left": x+10,"top": y+180}).css({"background-color":"red","opacity":0.5});
  var x13 = g1.addNode("^x<sub>3</sub>", {"left": x, "top": y+270}).css({"background-color":"red","opacity":0.5});
   
  var x31 = g1.addNode("x<sub>2</sub>", {"left": x+400, "top": y+90}).css({"background-color":"blue","opacity":0.5});
  var x32 = g1.addNode("^x<sub>4</sub>", {"left": x+410,"top": y+180}).css({"background-color":"blue","opacity":0.5});
  var x33 = g1.addNode("x<sub>3</sub>", {"left": x+420, "top": y+270}).css({"background-color":"blue","opacity":0.5});
   
  g1.layout();

//slide 15
  av.step();
  e1=g1.addEdge(x11,x31);
  e1.css({"stroke":"orange"});
  e2=g1.addEdge(x11,x32);
  e2.css({"stroke":"orange"});
  var ec3=g1.addEdge(x11,x33);
  ec3.css({"stroke":"orange"});
  e4=g1.addEdge(x11,x21);
  e4.css({"stroke":"orange"});
  var ec1=g1.addEdge(x11,x23);
  ec1.css({"stroke":"orange"});
  g1.layout();


//slide 16
  av.step();

  e1.css({"stroke":"black"});
  e2.css({"stroke":"black"});
  ec3.css({"stroke":"black"});
  e4.css({"stroke":"black"});
  ec1.css({"stroke":"black"});

  e1=g1.addEdge(x12,x31);
  e1.css({"stroke":"orange"});
  e2=g1.addEdge(x12,x32);
  e2.css({"stroke":"orange"});
  e3=g1.addEdge(x12,x33);
  e3.css({"stroke":"orange"});
  e4=g1.addEdge(x12,x22);
  e4.css({"stroke":"orange"});
  e5=g1.addEdge(x12,x23);
  e5.css({"stroke":"orange"});
  g1.layout();

//slide 17
  av.step();

  e1.css({"stroke":"black"});
  e2.css({"stroke":"black"});
  e3.css({"stroke":"black"});
  e4.css({"stroke":"black"});
  e5.css({"stroke":"black"});

  e1=g1.addEdge(x13,x31);
  e1.css({"stroke":"orange"});
  e2=g1.addEdge(x13,x32);
  e2.css({"stroke":"orange"});
  e3=g1.addEdge(x13,x21);
  e3.css({"stroke":"orange"});
  e4=g1.addEdge(x13,x22);
  e4.css({"stroke":"orange"});
  e5=g1.addEdge(x13,x23);
  e5.css({"stroke":"orange"});
  g1.layout();


//slide 18
  av.step();

  e1.css({"stroke":"black"});
  e2.css({"stroke":"black"});
  e3.css({"stroke":"black"});
  e4.css({"stroke":"black"});
  e5.css({"stroke":"black"});

  e1=g1.addEdge(x21,x31);
  e1.css({"stroke":"orange"});
  e2=g1.addEdge(x21,x32);
  e2.css({"stroke":"orange"});
  e3=g1.addEdge(x21,x33);
  e3.css({"stroke":"orange"});
  g1.layout();

//slide 19
  av.step();

  e1.css({"stroke":"black"});
  e2.css({"stroke":"black"});
  e3.css({"stroke":"black"});

  e2=g1.addEdge(x22,x32);
  e2.css({"stroke":"orange"});
  e3=g1.addEdge(x22,x33);
  e3.css({"stroke":"orange"});
  g1.layout();

//slide 20
  av.step();

  e2.css({"stroke":"black"});
  e3.css({"stroke":"black"});

  e2=g1.addEdge(x23,x31);
  e2.css({"stroke":"orange"});
  var ec2=g1.addEdge(x23,x33);
  ec2.css({"stroke":"orange"});
  g1.layout();

//slide 21 
  av.step();

  e2.css({"stroke":"black"});
  ec2.css({"stroke":"black"});
  g1.layout();


//slide 22
  av.step();
  g1.hide();
  label1.hide();
  label2.hide();
  label3.hide();
  label4.hide();
  label5.hide();
  label6.hide();
  av.umsg("<b>3SAT to k-Clique Reduction</b>");
   
  y=0;
  label7 = av.label("<b>G has a k-clique if and only if φ is satisfiable.</b>",{top:y,left:x}); 
  label7.show();

  y = y+50;   
  label8 = av.label("[=&gt] Let C be a <i>k</i>-clique of G. C has exacty one node from each clause and each node in C  can be independently assigned w.r.t. to each other. ",{top:y,left:x}); 
  label8.show();
     
  y = y+50;   
  label9 = av.label("[&lt=] Let A be a satisfying assignment. Select from each triple a literal that is satisfied by A to construct a set S. <i>||S|| = k</i> and it is a k-clique in G.",{top:y,left:x}); 
  label9.show();

//slide 23

  av.step();
  av.umsg("<b>Example of 3SAT to k-Clique Reduction</b>");
  g1.show();
  label1.show();
  label2.show();
  label3.show();
  label4.show();
  label5.show();
  label6.show();

  label7.hide();
  label8.hide();
  label9.hide();

  label9 = av.label("<b>Satisfiable for x2 = TRUE , x3= TRUE , x4 = TRUE </b>",{top:-10,left:x}); 
  label9.show();

  ec1.css({"stroke":"#CC0099","stroke-width":"6"});
  ec2.css({"stroke":"#CC0099","stroke-width":"6"});
  ec3.css({"stroke":"#CC0099","stroke-width":"6"});
  g1.layout();

  av.recorded();
});
