/*# Exercise Instructions

- Create the files `index.html` and `index.js`
- Set the document title to "Lesson 28"
- Include the `index.js` file into the `index.html`
- Inside the `index.js`:
  - Define a user variable and assign a literal object
  - Show the user object as output
  - Show the user type as output using typeof
  
  - Set the following properties on the user
    - username: `batman`
    - password: `hunter2`
  - Log the user variable again
  - Show the message "Access Granted" if the users username is batman and the password is `*******`, else show "Access Denied"
  
  - Create a second user object
    - username: `wonderwoman`
    - password: `123123`
    - Create a greet function on the user object that logs `Hello, I am <the username on this object>`,
    - Create a function to update the username on this user object, taking in the new username as a function argument
  - Call the greet method on the second user object
  - Call the update username method on the second user object to change the username
  - Call the greet method one more time */

  let user = {
    username:"batman",
    password:"hunter2",
    login(){
      if (this.username ='batman' && this.password =='hunter2') {console.log ("Access Granted")}
      else {console.log ("Access Denied")};}
    };  
    console.log(user);
    console.log(typeof(user));
    console.log(user.login());
   

    let user2={
      username:"wonderwoman",
      password:"123123",
      greet(){
        console.log("Hello, I am " + this.username);
      }
    }
      
    console.log(user2);
    console.log(user2.greet());

    user2.username ="superwoman";
    console.log(user2);
    console.log(user2.greet());
    
    
       


    
