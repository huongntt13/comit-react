/*# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 22"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Prompt the user to enter the current hour (out of 0-23) and store it in a variable
  - If the number is less than 0 OR greater than 23 alert them letting them know that their input is incorrect
  - If the number is less than 8 OR greater than or equal to 18 alert them that hour is outside of office hours
  - If the number is greater than or equal to 8 AND less than 18 alert them that we are open */

  let currentHour = prompt("Enter the current hour");
  if (currentHour <0 || currentHour >23)
  {console.log("Input is incorrect");}
  else if (currentHour <8 || currentHour >=18)
  {console.log("Outside of office hour");}
  else
  {console.log("we are open");}