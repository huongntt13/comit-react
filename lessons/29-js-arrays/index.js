/*# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 29"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Make an array of your siblings' names or your favorite movie characters' names.
  - Make an array of your parents' names.
  - Combine these two arrays using concat().
  - Add your pets' names using push().
  - Reverse the order of the array.
  - Access one of your parents' names using the square bracket notation.
  - Update the name of one of your parents using the index and square bracket notation
  - Loop over the array and log each item to the console
    - use both a `for` loop and a `for..of` loop */
    
   let siblingNames = ["Alice","Tom", "Jerry", "Paw Patrol"];
   let parentNames = ["Blippi", "Anan", "Coco", "Hermes"];
   let combinedNames = siblingNames.concat(parentNames);
     
   let petNames =["Lulu"];
   combinedNames.push(petNames);
   console.log(combinedNames);
  
   
   combinedNames.reverse();
   let i = parentNames.indexOf("Anan");
   parentNames[i] ="Daddy";
   console.log(parentNames);

   for (let i =0; i<combinedNames.length; i++)
   {console.log(combinedNames[i])};



   
   

  
   
  
