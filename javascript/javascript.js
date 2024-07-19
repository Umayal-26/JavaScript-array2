//1st Array Manipulation

let num=[1,2,3,4,5,6,7]
num.push(45)
document.write("Push = ",num,"<br>")
num.pop()
document.write("Pop = ",num,"<br>")
num.unshift(25)
document.write("Unshift = ",num,"<br>")
num.shift(25)
document.write("shift = ",num,"<br>")

//2nd Array sorting

let num1=[1,2,3,4,5,6,7]
num.reverse()
document.write("Reverse of the given number : ",num1,"<br>")
 num.sort()
 document.write("Sorting of the given number : ",num1)

//3rd Finding maximum and minimum


 function minimum(arr)
 {
     return Math.min(...arr)
 }
 document.write("Minimum of the given number : ",minimum([1,2,3,4,5]),"<br>")
 function maximum(arr)
 {
     return Math.max(...arr)
 }
  document.write("Maximum of the given number : ",maximum([1,2,3,4,5]))