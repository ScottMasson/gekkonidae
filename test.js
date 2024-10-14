import gekkonidae from "gekkonidae";


/** 
 - Test Obj
 */

 const obj = new gekkonidae.base.Obj

 // extend
 
 let obj1 = {a: 1};
 let obj2 = {b: 2};
 let obj3 = {c: 3};
 let obj4 = {
     level1: {
         level2: {
             value1: 1
         }
     }
 };
 let obj5 = {
     level1: {
         level2: {
             value2: 2
         },
         level3: {
             value3: 3
         },
         level4: [1,2,3,4,5]
     }
 };
 
 const mergeObj = obj.merge(true,obj1,obj2,obj3,obj4,obj5)
 
 console.log(mergeObj)
 
 
 /** 
  - Test Of 
  */
 
  const of = new gekkonidae.base.Of
  console.log(of.plainObject({}))