<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Basic components](#subparagraph0)
  - [1. Write the tests for each component](#subparagraph1)
  - [2. Separation of Concerns](#subparagraph2)
  - [3. Devtool React extension](#subparagraph3)
  - [4. CourseList & CourseListRow](#subparagraph4)
  - [5. Enhance Notifications component](#subparagraph5)

## Resources
### Read or watch:
* [React Official Website](https://react.dev/)
* [Getting started with React](https://flaviocopes.com/vite-react-app/)
* [React overview](https://react.dev/learn)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [React Fragments](https://react.dev/reference/react/Fragment)
* [Conditional Rendering](https://react.dev/learn/conditional-rendering)
* [Typechecking with PropTypes](https://blog.logrocket.com/validate-react-props-proptypes/)
* [React Testing Library](https://testing-library.com/docs/)
* [Query within an element](https://testing-library.com/docs/dom-testing-library/api-within/)
* [Jest Matchers](https://jestjs.io/docs/using-matchers)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* How to create basic React components using functions
* How to reuse components
* How to pass properties to components
* How to use Fragments
* When to use a key to improve a loop’s performance

## Requirements
### General
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS usingnode 20.x.xandnpm 10.x.x
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally:npm install -g jest

## Task
### 0. Basic components <a name='subparagraph0'></a>

Start with your files from the last task of the <code>React intro</code> project

Instead of creating new elements, we’re going to create components to split the project. The <code>App.jsx</code> is going to become the main entry point, the shell, for every component in the app.

Create a new folder <code>Header</code>:

* Create a functional component <code>Header</code> inside the <code>Header.jsx</code> where you move the code of the header from the <code>App.jsx</code>.
* Move the CSS code, related to the header, from the <code>App.css</code> to a new file named <code>Header.css</code>.
* Create an empty test file <code>Header.spec.js</code>.

Create a new folder <code>Footer</code>:

* Create a functional component <code>Footer</code> inside the <code>Footer.jsx</code> where you move the code of the footer from the <code>App.jsx</code>.
* Move the CSS code, related to the footer, from the <code>App.css</code> to a new file named <code>Footer.css</code>
* Create an empty test file <code>Footer.spec.js</code>.

Create a new folder <code>Login</code>:

* Create a functional component <code>Login</code> inside the <code>Login.jsx</code> where you move the code of the login form from the <code>App.jsx</code>.
* Move the CSS code, related to the login, from the <code>App.css</code> to a new file named <code>Login.css</code>
* Create an empty test file <code>Login.spec.js</code>.

In the <code>App.jsx</code>:

* Along with the Notifications component, import the Header, the Login, and the Footer components
* Pass the components in the above order respectively
* Wrap the above elements inside a react <code>&lt;Fragment&gt;</code>

<strong>Tests:</strong>

In the <code>App.spec.js</code>:

* As an entry point, in the App.spec.js file, check that all components are rendered correctly

In the <code>Header.spec.js</code>:

* Copy all Header related unit tests within the Header.spec.js file

In the <code>Login.spec.js</code>:

* Copy all Login related unit tests within the Login.spec.js file

In the <code>Footer.spec.js</code>:

* Copy all Footer related unit tests within the Footer.spec.js file

Requirements:

* At this point, reloading the App should display the exact same page as the last task
* The console in your browser should not show any errors or warnings

---

### 1. Write the tests for each component <a name='subparagraph1'></a>

Let’s start improving the tests:

Import your new Header component within the test, and write two checks:

* Check whether the <code>Header</code> component contains the Holberton logo.
* Check whether the <code>Header</code> component contains the heading <code>h1</code> element with the correct text



Import your new <code>Login</code> component within the test, and check:

* Add a test to verify whether the <code>Login</code> includes 2 <code>label</code>, 2 <code>inputs</code>, and 1 <code>button</code> elements
* Add a test to verify whether the <code>inputs</code> elements get focused (you can choose one of them in build your test) whenever the related <code>label</code> is clicked



Import your new <code>Footer</code> component within the test, and check:

* Check whether the <code>p</code> element renders the string <code>Copyright {the current year} - Holberton School</code>, whenever the <code>getFooterCopy()</code> “isIndex” argument is set to <code>true</code>

<strong>Note:</strong>

* The <code>Notifications.spec.js</code> unit tests will be evaluated, so make sure they work as expected

---

### 2. Separation of Concerns <a name='subparagraph2'></a>

Inside the <code>App</code> component add a new empty array called <code>notificationsList</code> and fill it in with the notification items from the <code>Notifications</code> component, make sure each item has the following 3 keys <code>id</code>, <code>type</code>, and <code>value</code>:

* <code>id</code>: a random unique number
* <code>type</code>: whether it is default or urgent
* <code>value</code>: notification text (the 3rd item should be <code>HTML</code>)

The new array should be passed as a prop to the <code>Notifications</code> component, which is a child of the <code>App</code> component.

Inside the <code>Notifications</code> component, Since the <code>li</code> element is repeated more than once, create a new component that will be responsible for rendering these elements.

Within a new file <code>NotificationItem.jsx</code> create a new component named <code>NotificationItem</code>:

* This component should render a <code>li</code> tag
* The component should accept three properties (<code>type</code>, <code>html</code>, and <code>value</code>)
* The <code>data-notification-type</code> attribute should take the <code>type</code> prop as its value
* The <code>dangerouslySetInnerHTML</code> attribute should take the <code>html</code> prop as its value
* The <code>li</code> tag should render the text from the prop’s <code>value</code> .
* Your JSX code should conditionally render the notification items based on the value of the <code>type</code> prop



Every component should be tested. Create a new file named <code>NotificationItem.spec.js</code> , and add the following tests:

* Check whether the <code>li</code> element has the color <code>blue</code>, and the the attribute <code>data-notification-type</code> set to <code>default</code> whenever the component receives the prop’s type as “default”.
* Check whether the <code>li</code> element has the color <code>red</code>, and the the attribute <code>data-notification-type</code> set to <code>urgent</code> whenever the component receives the props’s type as “urgent”.



* The <code>Notifications</code> component should accept the prop <code>notifications</code> which will be set to the value of <code>notificationsList</code> (By default it should be an empty array)
* Import the new <code>NotificationItem</code> component and replace the <code>&lt;li&gt;</code> tags with <code>NotificationItem</code> components. (this is a common case where the <code>map</code> array method comes in handy)



* Ensure that the Notifications component still displays the 3 notification items, with the appropriate text

<strong>Requirements:</strong>

* At this point, reloading the <code>Holberton dashboard</code> React application should still render the same design.
* The console in your browser should not show any errors or warnings
* There should be no lint errors

---

### 3. Devtool React extension <a name='subparagraph3'></a>

Using the React extension in Chrome:

* Modify the type of the first NotificationItem to change from “default” to “urgent”. The first notification should change color to red and vice versa, take a screenshot
* Profile the load of the application and note which component is the longest to render after <code>App</code> component, take a screenshot

<strong>Requirements:</strong>

* You have to push all your code boilerplate with the screenshots from your browser react devtools result

---

### 4. CourseList & CourseListRow <a name='subparagraph4'></a>

Create a new folder <code>CourseList</code> and a new component with the name <code>CourseListRow</code>. The component accepts 3 props:

* <code>isHeader</code> (default value: <code>false</code>)
* <code>textFirstCell</code> (default value: empty string)
* <code>textSecondCell</code> (default value: null)

The component returns a <code>tr</code> element, and within that element:

* If <code>isHeader</code> is <code>true</code>:


  * If <code>textSecondCell</code> is <code>null</code>, it returns a <code>th</code> element containing <code>textFirstCell</code> with a <code>colSpan = 2</code>
  * If <code>textSecondCell</code> is not null, it returns two <code>th</code> elements containing <code>textFirstCell</code> and <code>textSecondCell</code>
* If <code>isHeader</code> is <code>false</code>

  * It returns two <code>td</code> elements containing <code>textFirstCell</code> and <code>textSecondCell</code>

Create a <code>CourseListRow.spec.js</code> file, and add the following tests:

* When <code>isHeader</code> is <code>true</code>:


  * When <code>textSecondCell</code> is null, check whether the component renders one <code>columnheader</code> that has the attribute<code>colspan = 2</code>
  * When <code>textSecondCell</code> is not null,  check whether the component renders 2 <code>&lt;th&gt;</code> cells .
* When <code>isHeader</code> is <code>false</code>:


  * Add a check to test the component renders correctly two <code>td</code> elements within a <code>tr</code> element



In the folder <code>CourseList</code>, create a new component named <code>CourseList</code> where it’s:

* A child of the <code>App</code> component
* <p>Receive <code>courses</code> prop (by default it’s an empty array)</p>
* <p>It returns a <code>table</code> element with an id <code>CourseList</code></p>
* <p>It contains a <code>thead</code> element</p>
* <p>It includes a <code>CourseListRow</code> with the props <code>textFirstCell="Available courses"</code> and <code>isHeader=true</code></p>
* <p>It includes a <code>CourseListRow</code> with the props <code>textFirstCell="Course name"</code>, <code>textSecondCell="Credit"</code>, and <code>isHeader=true</code></p>
* <p>It contains a <code>tbody</code> element:</p>

  * It includes a <code>CourseListRow</code> component that will take course data with every iteration
  * When the <code>courses</code> prop is empty the <code>CourseListRow</code> component should render a row with text <code>No course available yet</code>



* Check that it renders 5 different rows when it receive an array of courses objects
* Check that it renders 1 row whenever it receive an empty array



* Create and import a file <code>CourseList.css</code> where you will be able to add the below styling for the component



* <p>Add an array of courses objects <code>coursesList</code>, where each object has the following key-value pairs</p>

  * <code>id</code>: unique number
  * <code>name</code>: ES6, Webpack, React
  * <code>credit</code>: 60, 20, 40
* <p>Modify the <code>App</code> component to display either the <code>Login</code>, or the <code>CourseList</code> component:</p>
* <p>Create a property <code>isLoggedIn</code>. It should be <code>false</code> by default</p>
* <p>When <code>isLoggedIn</code> is <code>false</code>, display the <code>Login</code> component</p>
* <p>Otherwise display the <code>CourseList</code> component</p>



* <p>When the <code>isLoggedIn</code> is set to <code>false</code>:</p>

  * Check that the <code>App</code> component should render the <code>Login</code> component
* <p>When the <code>isLoggedIn</code> is set to <code>true</code>:</p>

  * Check that the <code>App</code> component should render a <code>CourseList</code> component



<code>App</code>:

* Modify the CSS to make the UI looks like the image below when <code>isLoggedIn</code> is <code>false</code>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/1c9259a842b824ce6f749b6db12ae1807742bae0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d87a68c970b1f9aff36557f35f022b46874699c6e4ae23eba5b0e9f090c62129" style=""/>

* Modify the CSS to make the UI looks like the image below when <code>isLoggedIn</code> is <code>true</code>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/898b52472179db2a357a1da83dcac7f7e58522e8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=645bff445bd3c3a2ef3ed5aca0279b650470e2ddbfce1169d86525d922234501" style=""/>

* Modify the CSS to make the UI looks like the image below when <code>isLoggedIn</code> is <code>true</code> and the courses prop is an empty array

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/ab09dbfdee0eacfef0782cdd0ed57cb6f56d8958.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f9db635827597bfdb74e8e1fb1fdcfc12f1714ca8573ab72dd9e2e15f65f052d" style=""/>

Requirements:

* The console in your browser should not show any error or warning
* All unit tests PASS
* No lint errors

---

### 5. Enhance Notifications component <a name='subparagraph5'></a>

Add a new <code>div</code> element with the class <code>notifications-title</code>:

* It contains a text <code>Your notifications</code>
* It should be displayed right before <code>div.Notifications</code> container element

Add a prop to the <code>Notifications</code> component named <code>displayDrawer</code>:

* <p>By default it should be <code>false</code></p>

  * In this case the notification items, the text “Here is the list of notifications”, and the button should not be displayed
* <p>Otherwise:</p>

  * the notification items, the text “Here is the list of notifications”, and the button should be displayed
* <p>When the <code>notifications</code> prop receives an empty array the <code>Notifications</code> component should display the text <code>No new notification for now</code></p>
* <p>In All cases, the text “Your Notifications” should always be displayed.</p>



* <p>Add new tests to check the behavior of the UI whenever the prop <code>displayDrawer</code> set to <code>false</code>:</p>

  * Check that the <code>Notifications</code> component doesn’t displays the close button, the <code>p</code> element (Here’s the list…), or the notification items
* <p>Add new tests to check the behavior of the UI whenever the the prop <code>displayDrawer</code> set to <code>true</code>:</p>

  * Check that the <code>Notifications</code> component displays the close button, the <code>p</code> element (Here’s the list…), and the notification items
* <p>Add new tests to check the behavior of the UI whenever the prop <code>displayDrawer</code> set to <code>true</code> and <code>notifications</code> prop is empty:</p>

  * Check that the <code>Notifications</code> component displays the text <code>No new notification for now</code>
* <p>In all cases, the “Your Notifications” text check should PASS.</p>
* <p>All tests should PASS</p>



<code>Notifications</code> rendering cases:

* Modify the CSS to make the UI looks like the image below when <code>displayDrawer</code> is <code>true</code>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/180c2987bffff1e96178dcdfd939ff1ea70938e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=320f25bb05cfc3662975f9c7e487278214b8e5be5ac100afb336de645463b32c" style=""/>

* Modify the CSS to make the UI looks like the image below when <code>displayDrawer</code> is <code>true</code> & <code>notifications</code> prop empty:

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/c4399c726941b491d3cfede0ad6ace9d5275a539.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=39fae95d42b0e9d824e1b72e7b9698d9a93daba1a5b5904395f1a5d985883a26" style=""/>

* Modify the CSS to make the UI looks like the image below when <code>displayDrawer</code> is <code>false</code>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4c208e54072410a89c7a5da30bb4da50cc131b40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250729%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250729T092352Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=dcb379609ce682dfb2de21596bee7bfcd6f08f94ba048f4135102b8427a11353" style=""/>

---


## Authors
Ksyv - [GitHub Profile](https://github.com/ksyv)
