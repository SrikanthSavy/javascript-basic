var array=[1,7,3,9,5]
var objects= {
    key1:"Srikanth",
    key2:"shoda"
}

for(var i=0;i<array.length;i++)
{
    console.log("arrayelements: ",array[i]);
}

// for/of  for arrays  - loop 
for(x of array)
 console.log("arrayelement for/of : ",x);

//for/in       for objects - keys 
for (y in objects)
   {
    console.log("arrayelement for/in : ",y); // prints keys 
    console.log("arrayelement for/in : ",objects[y]); // prints value
   } 
