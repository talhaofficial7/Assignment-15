//1. Write a JavaScript program to list the properties of a JavaScript object
//var student = {
    //name : "David Rayy",
    //class : "VI",
    //rollno : 12 };
    //Sample Output: name,sclass,rollno

    var student = {
        name : "David Rayy",
        class : "VI",
        rollno : 12 };
        var studetkeys = Object.keys(student)
        console.log(studetkeys);


    var studentvalues = Object.values(student)
    console.log(studentvalues);

    //2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object:
var student1 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

console.log("Before deleting rollno property: ");
console.log(student1);

delete student1.rollno;
console.log("After deleting rollno property: ");
console.log(student1);

//3. Write a JavaScript program to get the length of a JavaScript object.   
//Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 
var length = Object.keys(student).length;

console.log("Length of the object: " + length);

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var status = book.readingStatus ? "already read" : "not read yet";

        console.log("Book Title: " + book.title + ", Author: " + book.author + ", Reading Status: " + status);
      }

      //5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
//Volume of a cylinder : V = πr2h
//where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      var volume = Math.PI * this.radius * this.radius * this.height;
      return volume.toFixed(4); // returns volume with four decimal places
    }
  }
  
  // create a new Cylinder object
  var cylinder = new Cylinder(5, 10);
  
  // get the volume of the cylinder
  var volume = cylinder.getVolume();
  
  console.log("The volume of the cylinder is: " + volume);

  //6. Write a Bubble Sort algorithm in JavaScript.   
//Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//Sample Data: [6,4,0, 3,-2,1]
//Expected Output : [-2, 0, 1, 3, 4, 6]

function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // Sample Data
  var data = [6, 4, 0, 3, -2, 1];
  
  // Call the bubbleSort function
  var sortedData = bubbleSort(data);
  
  console.log(sortedData); 
  
  //7. Write a JavaScript program which returns a subset of a string.   
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]

function getSubsets(str) {
    var subsets = [];
    for (var i = 0; i < str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
    return subsets;
  }
  
  // Sample Data
  var str = "dog";
  
  // Call the getSubsets function
  var subsets = getSubsets(str);
  
  console.log(subsets); 

  //8. Write a JavaScript program to create a Clock.   
//Note: The output will come every second.
//Expected Console Output :
//"14:37:42"
//"14:37:43"
//"14:37:44"
//"14:37:45"
//"14:37:46"
//"14:37:47"
  
function clock() {
    setInterval(function() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      console.log(time);
    }, 10);
  }
  
 // clock();

  //9. Write a JavaScript program to calculate the area and perimeter of a circle.   
//Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


  //10. Write a JavaScript program to sort an array of JavaScript objects.   
//Sample Object :

var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort(function(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});

console.log(library);


//11. Write a JavaScript function to print all the methods in an JavaScript object.   
//Test Data :
//console.log(all_properties(Array));
//["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]


function all_properties(obj) {
  var props = [];
  for (var prop in obj) {
    if (typeof obj[prop] === 'function') {
      props.push(prop);
    }
  }
  return props;
}

console.log(all_properties(Array));

//
//13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.   
function getAllPropertyNames(obj) {
  var props = [];
  do {
    var keys = Object.keys(obj);
    props.push(...keys);
  } while (obj = Object.getPrototypeOf(obj));
  return props;

}
//14. Write a JavaScript function to retrieve all the values of an object's properties.

function getObjectValues(obj) {
  console.log(obj);
}
var myObject = {
  a: 'Hello',
  b: 'World',
  c: 123
};

var values = getObjectValues(myObject);
console.log(values);

//15. Write a JavaScript function to convert an object into a list of [key, value] pairs.

function objectToPairs(obj) {
  console.log(obj );
}


var myObject = {
  a: 'Hello',
  b: 'World',
  c: 123
};

var pairs = objectToPairs(myObject);
console.log(pairs);

//16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function reverseObject(obj) {
  return Object.keys(obj).reduce((acc, key) => {
      acc[obj[key]] = key;
      return acc;
  }, {});
}

var myObject = {
  a: 'Hello',
  b: 'World',
  c: 123
};

var reversedObject = reverseObject(myObject);
console.log(reversedObject);

//17. Write a JavaScript function to check whether an object contains given property.

function hasProperty(obj, property) {
  console.log(property);
}
var myObject = {
  a: 'Hello',
  b: 'World',
  c: 123
};

console.log(hasProperty(myObject, 'a')); 
console.log(hasProperty(myObject, 'd')); 
