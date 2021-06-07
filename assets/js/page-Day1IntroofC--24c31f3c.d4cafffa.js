(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{470:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"day1-intro-of-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day1-intro-of-c"}},[e._v("#")]),e._v(" Day1: Intro of C##")]),e._v(" "),a("h2",{attrs:{id:"daily-journal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daily-journal"}},[e._v("#")]),e._v(" Daily Journal")]),e._v(" "),a("p",[e._v("Read Foundations of C# > C# Data Types and answer the following questions")]),e._v(" "),a("ol",[a("li",[e._v("What are the three categories of data types? How are they different?")])]),e._v(" "),a("p",[e._v("Value: A data type is a value type if it holds a data value within its own memory space. It means the variables of these data types directly contain values.")]),e._v(" "),a("p",[e._v("Example\nint i= 100;")]),e._v(" "),a("p",[e._v("bool byte char decimal\ndouble enum float int\nlong sbyte short struct\nuint ulong ushort")]),e._v(" "),a("p",[e._v("Reference: Unlike value types, a reference type doesn't store its value directly. Instead, it stores the address where the value is being stored. In other words, a reference type contains a pointer to another memory location that holds the data. Changing the data in one method")]),e._v(" "),a("p",[e._v('std2.StudentName="Steve";\nStudent std1 = new Student();\nstd1.StudentName="Bill";\nChangeReferenceType(std1);\nConsole.WriteLine(std1.StudentName); = "Steve"')]),e._v(" "),a("p",[e._v("In the above example, we pass the Student object std1 to the ChangeReferenceType() method. Here, it actually pass the memory address of std1. Thus, when the ChangeReferenceType() method changes StudentName, it is actually changing StudentName of std1 object, because std1 and std2 are both pointing to the same address in memory.")]),e._v(" "),a("p",[e._v('Example\nstring x = "YANKEES"')]),e._v(" "),a("p",[e._v("The followings are reference type data types:\nString\nArrays\nClass\nDelegate\nDefault value of reference types is NULL")]),e._v(" "),a("p",[e._v("Pointer:The type specified before the * in a pointer type is called the referent type. Only an unmanaged type can be a referent type.")]),e._v(" "),a("p",[e._v("When you declare multiple pointers in the same declaration, the asterisk (*) is written together with the underlying type only; it is not used as a prefix to each pointer name.")]),e._v(" "),a("p",[e._v("Example\nint* p1, p2, p3;   // Ok\nint *p1, *p2, *p3;   // Invalid in C#")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("What are the Value-type data types? What differences do you notice from JavaScript?")])]),e._v(" "),a("p",[e._v("Value-type data examples:\nbool byte char decimal\ndouble enum float int\nlong sbyte short struct\nuint ulong ushort")]),e._v(" "),a("p",[e._v('In C#, bools(bc of true or false), char(singular Character "A"), and number based values for the rest that pertain to the relative size of the int that may be trying to be assigned.')]),e._v(" "),a("p",[e._v("JS just assigns the number regardless of the size")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("In your own words how do Reference types get stored in memory? How does this differ from Value types?")])]),e._v(" "),a("p",[e._v("Reference types you have assign another value to then refer to that value to access it especially with strings to hold that value, but is never stored directly, such as with value data.")])])}),[],!1,null,null,null);t.default=s.exports}}]);