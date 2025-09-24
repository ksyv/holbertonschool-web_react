<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Adding a local state for notifications](#subparagraph0)
  - [1. Controlled components and state callback](#subparagraph1)
  - [2. Context](#subparagraph2)
  - [3. Log Out implementation](#subparagraph3)
  - [4. Context consumer & advanced state](#subparagraph4)

## Resources
### Read or watch:
* [State and lifecycle](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
* [SetState and State callback](https://react.dev/reference/react/Component#setstate)
* [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
* [Context API on Class Component](https://blog.logrocket.com/react-reference-guide-context-api/)
* [Forms and Controlled components](https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form)
* [Lifting State Up](https://react.dev/learn/sharing-state-between-components)
* [React State hook](https://react.dev/reference/react/useState)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* What the state of a component or a container is
* The lifecycle of a component
* How to modify a state and execute code in the right order
* What a controlled component is
* How to use Forms in React
* How to reuse smaller components, keep them pure, and lift its state to principal containers
* The use of a React Hook and how to create one
* How to pass data deeply using context

## Requirements
### General
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS usingnode 20.x.xandnpm 10.x.x
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally:npm install -g jest

## Task
### 0. Adding a local state for notifications <a name='subparagraph0'></a>

Using the previous project (<code>React inline styling</code>), we have modularized our React application without worrying about interactions and state, which is usually a recommended approach to development. Now, our application is in a good position to start adding logic and state.

<strong>Modify the App component in <code>task_0/dashboard/src/App/App.jsx</code>:</strong>

Create a local state to store a <code>displayDrawer</code> element:

* Define the default value for the state in the <code>constructor</code> of the Class
* Create a function named <code>handleDisplayDrawer</code> that will set the value of <code>displayDrawer</code> to <code>true</code>
* Create a function named <code>handleHideDrawer</code> that will set the value of <code>displayDrawer</code> to <code>false</code>



<strong>Modify the <code>Notifications</code> import in <code>App.jsx</code>:</strong>

* Pass the  <code>displayDrawer</code> prop to the component  using the local state
* Pass the new functions <code>handleDisplayDrawer</code> and <code>handleHideDrawer</code> as props.



<strong>Modify the Notifications component in <code>Notifications.jsx</code>:</strong>

* When clicking on <code>Your notifications</code>, call <code>handleDisplayDrawer</code>
* When clicking on the close button, call <code>handleHideDrawer</code>

At this point, after reloading the React application you should be able to show or hide the notifications panel



<strong>Modify the Notifications test suite in <code>Notifications.spec.js</code>:</strong>

* Add a test to verify that clicking on the menu item calls <code>handleDisplayDrawer</code>
* Add a test to verify that clicking on the close button calls <code>handleHideDrawer</code>



<strong>Tips:</strong>

* Remember that you implemented <code>shouldComponentUpdate</code>. You will need to modify its logic to allow the component to re-render when the  <code>displayDrawer</code> prop  changes
* Remember to use spies to verify whether a function is being called. You can pass a spy as a property



<strong>Requirements:</strong>

* When running the application, there should not be any errors in the console

---

### 1. Controlled components and state callback <a name='subparagraph1'></a>

<strong>Create a form within the Login component &amp; handle login submission in <code>task_1/dashboard/src/Login/Login.jsx</code>:</strong>

To solve this task, convert  you should the functional <code>Login</code> component to a <code>class</code> component:

* Create a local state with the value <code>isLoggedIn</code> set to <code>false</code>
* Create a function named <code>handleLoginSubmit</code> that updates the local state by setting <code>isLoggedIn</code> to <code>true</code>
* Wrap the input fields within a <code>form</code> element
* Replace the button with an <code>input</code> element of type <code>submit</code>
* When the form is submitted, call the newly created login submission handling function



<strong>Create controlled component:</strong>

* Modify the local state to add two new values:  <code>email</code> and <code>password</code>. By default, both should be empty strings.
* Set the email and the password input values to the local state
* Create two methods, <code>handleChangeEmail</code> and <code>handleChangePassword</code>:


  * Each method should handle changes to its respective input field (Email or Password):


    * When the user types into the email input, <code>handleChangeEmail</code> should be called
    * When the user types into the password input, <code>handleChangePassword</code> should be called
* Ensure the local component state updates in real time as the user types:


  * The email input field should update the email state
  * The password input field should update the password state accordingly.



<strong>Modify state callback:</strong>

* Modify the local state to add a new value <code>enableSubmit</code>, set to <code>false</code> by default.
* Modify the Submit button so that it is only enabled when the <code>enableSubmit</code> value  is <code>true</code>
* Enable the Submit button whenever:


  * Both fields are not empty.
  * The email input contains a valid email address.
  * The password input contains at least 8 characters.



<strong>Add tests:</strong>

* Add a test to verify that the submit button is disabled by default.
* Add a test to verify that the button becomes enabled only after both the Email and Password inputs meet the required criteria.



<strong>Requirements:</strong>

* The state should have all the default values set in the <code>constructor</code>
* Submitting the form should not reload the page.
* The <code>email</code> input must be valid email address, and the <code>password</code> must have at least 8 characters.
* The submit input should be enabled when the above conditions are met
* There should not be any linting errors in the console when running the application.



<strong>Tips:</strong>

* Use a regular expression (Regex) to validate the email input.
* At this stage, clicking the enabled Submit input does not render the CourseList component. This functionality will be addressed in the next task.

---

### 2. Context <a name='subparagraph2'></a>

<strong>Create a simple React Context in <code>task_2/dashboard/src/Context/context.js</code>:</strong>

* <p>Define a default user object with the following properties:</p>

  * <code>email</code>: set to an empty string
  * <code>password</code>: set to an empty string
  * <code>isLoggedIn</code>: set to false
* <p>Define a default logOut function as an empty function: () =&gt; {}.</p>

Create and export a <code>newContext</code> variable that initializes a new React context. This context should include the user object and the logOut function as its default values.



<strong>Create the local state for the App in <code>App.jsx</code>:</strong>

* <p>Update the local state of the <code>App</code> component by:</p>

  * Adding a user object that mirrors the context’s user object
  * Adding a logout property that references the logOut function from the context
* <p>Create a <code>logIn</code> method that takes  <code>email</code> and <code>password</code> as parameters. When the method is called:</p>

  * Update the user object in the local state
  * Set the <code>email</code> and <code>password</code> to the values entered.
  * Set the <code>isLoggedIn</code> value to <code>true</code>
* <p>Create a <code>logOut</code> method that resets the value of the <code>user</code> object in the local state</p>
* <p>Remove the  <code>isLoggedIn</code> and <code>logOut</code> props from the <code>App</code>. These will now be accessed through the state.</p>
* <p>In the <code>render()</code> method, refactor the code to use the state to display either the <code>CourseList</code> or the <code>Login</code> components.</p>
* <p>Pass the new <code>logIn</code> method,along with the user’s email and password, to the <code>Login</code> component as props.</p>



<strong>in <code>Login.jsx</code>:</strong>

* Update the local state:


  * Remove the <code>isLoggedIn</code> property, as it is no longer used.
  * Retrieve email and password from the props object (ensure they have default values).
* Modify the <code>handleLoginSubmit</code> to call the newly created <code>logIn</code> method from the props.



<strong>Checkpoint</strong>

Test your application. At this point, you should be able to log in to your React app:

* <p>By entering a valid email and a password with 8 or more characters:</p>

  * The submit button should become clickable.
-The <code>CourseList</code> component should render.
  * The <code>Login</code> component should unmount.
* <p>Verify that the Notifications panel continues to work correctly. You should be able to show/hide the panel by clicking the top-right text and the close button.</p>



<strong>Setting the context in <code>App.jsx</code>:</strong>

* In the App component, wrap the entire app with the context provider element created earlier.
* Set the value of the provider to the context’s user object and logOut function using the local state.



<strong>Add tests on the <code>Login.spec.js</code>:</strong>

* Verify that the logIn method prop is correctly called with the user’s email and password when the login form is submitted



<strong>Requirements:</strong>

* Be aware that React Context uses reference identity to determine when to re-render. Avoid directly creating objects within the provider’s value prop.
* The submit button should only be enabled if the email is valid and the password is at least 8 characters long.

---

### 3. Log Out implementation <a name='subparagraph3'></a>

<strong>Modify the <code>Header</code> component in <code>task_3/dashboard/src/Header/Header.jsx</code>:</strong>

* Use the <code>ContextType</code> API to allow the <code>Header</code> component to inherit the context.
* Add a new section under the header that is only displayed when the <code>isLoggedIn</code> property in the <code>user</code> object within the context is <code>true</code>:


  * This section should display “Welcome <strong>email</strong> (<em>logout</em>)”
  * Add the id attribute <code>logoutSection</code> to this section.
  * When clicking on the <code>logout</code> link, should call the <code>logOut</code> function from the context.



At this point, your Holberton Dashboard React application should allow users to log in and log out successfully.



<strong>Create the tests!</strong>

<strong>In <code>Header.spec.js</code></strong>

* Ensure all current tests pass without errors.
* When the <code>Header</code> component uses a default context value, verify that the <code>logoutSection</code> is not rendered.
* When the <code>Header</code> component is provided with a user context where <code>isLoggedIn</code> is <code>true</code>, and email and password are set, verify that the<code>logoutSection</code> is rendered.
* When the <code>Header</code> component is provided with a user context where <code>isLoggedIn</code> is <code>true</code>, and email and password are set, link the <code>logOut</code> function to a spy. Verify that clicking on the “logout” link calls the spy.



<strong>In <code>App.spec.js</code></strong>

* Refactor the previous tests to rely on the application’s state instead of props.
* Refactor the tests to verify that the user interface updates correctly whenever the state changes.



<strong>Requirements:</strong>

* Your React application should fully support both login and logout functionality.
* The logout functionality must be triggered from the Header component.
* After refactoring, ensure that any unused state and props are cleaned up.

---

### 4. Context consumer & advanced state <a name='subparagraph4'></a>

<strong>Context consumer: modify the Footer component in <code>task_4/dashboard/src/Footer/Footer.jsx</code></strong>

* Without converting the component into a class, subscribe the Footer component to context changes.
* When a user exists and is logged in, display a new paragraph containing a link with the text: <code>Contact us</code>.



<strong>Modify the test suite in <code>Footer.spec.js</code>:</strong>

* Refactor the tests to work correctly with the updated <code>Footer</code> component.
-Add a test to verify that the “Contact us” link is not displayed when the user is logged out in the context.
* Add a test to verify that the “Contact us” link is displayed when the user is logged in within the context.



<strong>Advanced state: Modify the <code>App</code> container in <code>App.jsx</code>:</strong>

* Update the state of the <code>App</code> component to include two properties:
* notifications: Holds the values from <code>notificationsList</code>.
* courses: Holds the values from <code>coursesList</code>.
<br/>
* <p>Create a method <code>markNotificationAsRead</code>:</p>

  * It accepts an <code>id</code> (number) as a parameter
  * Logs the string: <code>Notification {id} has been marked as read</code> to the console.
  * Removes the notification with the given id from the notifications list within the state.
* <p>Pass the new method as a prop to the <code>Notifications</code> component.</p>
* <p>Pass the list of notifications to the <code>Notifications</code> component using the state.</p>



<strong>Modify the <code>Notifications</code> container in <code>Notifications.jsx</code>:</strong>

* Replace the <code>shouldComponentUpdate</code> method by converting the component to a <code>PureComponent</code>. This will enable automatic comparison of props and state.
* Replace the existing <code>markAsRead</code> method with the new <code>markNotificationAsRead</code> method received as a prop.



<strong>Modify the test suite in <code>App.spec.js</code>:</strong>

* Add a test to verify that:


  * Clicking on a notification item removes it from the notification list.
  * Logs the expected string with the corresponding notification ID to the console.



<strong>Modify the test suite in <code>Notifications.spec.js</code>:</strong>

* Refactor the tests to match the updated structure of the <code>Notifications</code> component.



<strong>Checkpoint</strong>

Test your application to ensure the following functionality:

* When logged in:


  * A new paragraph with a “Contact us” link should appear in the <code>Footer</code>.
* When viewing the notification panel:


  * Clicking on any notification item should remove it and log the corresponding string to the console.



<strong>Requirements:</strong>

* By clicking on any notification item, you should be able to remove it  from the notification list and log the appropriate string with the corresponding notification ID to the console.
* The<code>markNotificationAsRead</code> method should handle both the removal and the logging.
* A valid email address and 8+ character password are required to activate the submit button.
* A logged in user should see a <code>logout</code> link in the <code>Header</code> component and a <code>Contact us</code> link in the <code>Footer</code> component
* No console errors should be raised
* No linting errors



<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/10/ba57fd6b23228eba70ceed550633523485d54d1e.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250924%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250924T074241Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1b8518b33763cde67990b2e23aa5ec5592af34ad68696cd1d7d0b97a454a338f" style=""/>

---


## Authors
Ksyv - [GitHub Profile](https://github.com/ksyv)
