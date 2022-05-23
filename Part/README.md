#   OPP-In-Javascript

JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP).

In this tutorial, I'll explain OOP and show you how to use it.

According to Wikipedia, class-based programming is

a style of Object-oriented programming (OOP) in which inheritance occurs via defining classes of objects, instead of inheritance occurring via the objects alone

The most popular model of OOP is class-based.

But as I mentioned, JavaScript isn't a classed-based langauge – it's is a prototype-based langauge.

According to Mozilla's documentaion:

A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object.
 
Take a look at this code:

let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));
// Expected Output
// Dillion
// false

The object variable names has only two properties - fname and lname . No methods at all.

So where does hasOwnProperty come from?

Well, it comes from the Object prototype.

Try logging the contents of the variable to the console:

console.log(names);
