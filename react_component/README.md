<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Switch to class components](#subparagraph0)
  - [1. Lifecycles](#subparagraph1)
  - [2. Handling Events](#subparagraph2)
  - [3. Reusable comments & specialization](#subparagraph3)
  - [4. Use the new components](#subparagraph4)
  - [5. High Order Component/HOC](#subparagraph5)
  - [6. Declare a pure component](#subparagraph6)
  - [7. Make your own pure component](#subparagraph7)

## Resources
### Read or watch:
* [React components](https://react.dev/reference/react/components)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [React Pure components](https://react.dev/reference/react/PureComponent)
* [React Higher Order Components](https://hackernoon.com/higher-order-components-hocs-in-react)
* [Class Component](https://www.w3schools.com/react/react_class.asp)
* [Implement a pure component](https://www.developerway.com/posts/pure-components-vs-functional-and-hooks)
* [Passing children props](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
* [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
* [Jest Matchers](https://jestjs.io/docs/using-matchers)
* [Check for props changes](https://jestjs.io/docs/using-matchers)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* When to use a Class or a function to create a component
* The lifecycle of a Class component
* How to test a component
* How to use a Jest spy to verify that a function is being called correctly.
* What an HOC is and how to use it
* How to optimize performance and control which components to render

## Requirements
### General
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS usingnode 20.x.xandnpm 10.x.x
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally:npm install -g jest

## Task
### 0. Switch to class components <a name='subparagraph0'></a>

Start this project with the files from the last task of the <code>React Props</code> project:

<strong>Convert the App function into a React Class:</strong>

* Convert the <code>App</code> component from <code>functional</code> to a <code>class</code> component
* All your tests should still pass.

<strong>Requirements:</strong>

* Reloading your React application should display the exact same page.
* The console in your browser should not show any errors or warnings.
* No lint errors should be present.

---

### 1. Lifecycles <a name='subparagraph1'></a>

<strong>Add Lifecycle Methods to a Component</strong>

In the <code>App</code> Class component:

* Add a prop named <code>logOut</code> with a default value of an empty function.
* Add an event listener when the component is <code>mounted</code> to detect when the user presses the keyboard keys.
* If the user presses the <code>control</code> and the <code>h</code> keys simultaneously, display an alert with the message <code>Logging you out</code> and call the <code>logOut</code> function.

<strong>Add the tests</strong>

In the <code>App.spec.js</code> test file:

* Create a test to verify that when the <code>control</code> and <code>h</code> keys are pressed, the <code>logOut</code> function, passed as a prop, is called once.
* Create a second test to ensure that the alert function  is called with the string <code>Logging you out</code>.

<strong>Tips:</strong>

* It’s a good practice to check if a key exists in an object before using its value.
* Consider mocking the <code>window.alert</code> function to use the appropriate  Jest Matcher and ensure your test passes.

<strong>Requirements:</strong>

* Make sure the event listener is removed when the component is unmounted.
* Restore the alert function in the test file after mocking it.
* Reloading the App component should still display the same page as in the last task.
* No lint errors should be present.

---

### 2. Handling Events <a name='subparagraph2'></a>

<strong>Create a new Event Handler</strong>

In the <code>Notifications</code> component:

* Convert the <code>functional component</code> into a React <code>Class component</code>
* Make sure that the tests are still passing
* Create a new <code>markAsRead</code> method within the Notifications class. It should accept one argument: id (number)
* When the function is called, it logs the message <code>Notification {id} has been marked as read</code> to the console.
* Pass the <code>markAsRead</code> function to the <code>NotificationItem</code> component as a prop

In the <code>NotificationItem</code> Class:

* Convert the <code>functional component</code> into a React <code>Class component</code>
* Make sure that the tests are still passing
* Modify the <code>li</code> element to call the new <code>markAsRead</code> function in response to the <code>onClick</code> event .

<strong>Add the tests</strong>

In the <code>Notifications.spec.js</code> test file:

* Check that when simulating a click on a notification item, it logs to the console the string <code>Notification {id} has been marked as read</code>, where the id corresponds to the item clicked. (The notification id should not be zero- based)



In the <code>NotificationItem.spec.js</code> test file:

* Pass the <code>markAsRead</code> prop to the <code>NotificationItem</code> and check that this prop is called whenever the click event is triggered.

<strong>Requirements:</strong>

* In the test file, make sure that the console function you mocked is restored.
* At this point, reloading the application should display the exact same page as in the last task. Use the React Chrome Extension to make sure that the Notifications component displays correctly.
* The console in your browser should not show any errors or warnings.

---

### 3. Reusable comments & specialization <a name='subparagraph3'></a>

<strong>Containment</strong>

Create a new component named <code>BodySection</code>. The component does not know its children and should render the following:

* <p>A div with the class <code>bodySection</code> containing:</p>

  * An <code>h2</code> element displaying a title passed as a prop.
  * The children of the component.

Create a new component named <code>BodySectionWithMarginBottom.jsx</code>, which does not know its children and should render the following:

* <p>A <code>div</code> with the class <code>bodySectionWithMargin</code> , that contains:</p>

  * The BodySection component, passing the prop into it.

Create a <code>BodySectionWithMarginBottom.css</code> file and set the following styles:

* Set the <code>bottom margin</code> of the <code>bodySectionWithMargin</code> div element to <code>40px</code>

<strong>Tips:</strong>

Rendering the following

```
<BodySection title="test">
  <p>test</p>
</BodySection>
```

Should generate:

```
<div className="bodySection">
  <h2>test</h2>
  <p>test</p>
</div>
```



<strong>Tests:</strong>

Create a <code>BodySection.spec.js</code> file and add the following tests:

* Test that the BodySection component renders a heading with the title prop value.
* Test that the BodySection component renders any number of children passed to it.



Create a <code>BodySectionWithMarginBottom.spec.js</code> file and add the following tests:

* Test that the <code>BodySectionWithMarginBottom</code> component contains a div with the class bodySectionWithMargin.
* Test that the <code>BodySectionWithMarginBottom</code> component renders the BodySection component.

---

### 4. Use the new components <a name='subparagraph4'></a>

<strong>in <code>task_3/dashboard/src/App/App.jsx</code>, modify the <code>App</code> component:</strong>

* Wrap the <code>CourseList</code> component with the newly created <code>BodySectionWithMarginBottom</code> component. The title should be <code>Course list</code>
* Wrap the <code>Login</code> component with the newly created <code>BodySectionWithMarginBottom</code> component. The title should be <code>Log in to continue</code>
* Using the <code>BodySection</code> component, add a new block  with the title <code>News from the School</code>. The component should contain a paragraph with the text: <code>Holberton School News goes here</code>



in <code>task_3/dashboard/src/App/App.spec.js</code>:

* Check that a title of <code>Course list</code> is displayed above the <code>CourseList</code> component when the <code>isLoggedIn</code> prop is set to true.
* Check that a title of <code>Log in to continue</code> is displayed above the <code>Login</code> component when the <code>isLoggedIn</code> prop is set to false.
* Add a test to check that a title with the text <code>News from the School</code>, and a paragraph element with the text <code>Holberton School News goes here</code> are displayed by default in the <code>App</code> component.



<strong>Tips</strong>:

* You can always use regex to avoid case-sensitive pitfalls and make your tests more robust.

<strong>Requirements</strong>:

* Make sure that the CSS is correctly applied to your component.
* The console in your browser should not show any errors or warnings.

---

### 5. High Order Component/HOC <a name='subparagraph5'></a>

We would like to add a way to log to the console every time a component is mounted and every time it is about to unmount.

<strong>To avoid repeating the same code everywhere, create a HOC component in <code>task_4/dashboard/src/HOC/WithLogging.jsx</code>:</strong>

* The HOC should log to the console <code>Component NAME_OF_THE_WRAPPED_COMPONENT is mounted</code> in <code>componentDidMount()</code>
* The HOC should log to the console <code>Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount</code> in <code>componentWillUnmount()</code>
* Modify the <code>displayName</code> of the HOC to always display <code>WithLogging(NAME_OF_THE_WRAPPED_COMPONENT)</code> in the React Chrome Extension or for debugging
* <code>NAME_OF_THE_WRAPPED_COMPONENT</code> should be the name of the wrapped component or class. If the wrapped element has no name, it should default to <code>Component</code>



* Wrap the <code>Login</code> and <code>CourseList</code> components with the new HOC
* You should see the logs from the HOC on the console whenever the value of the <code>isLoggedIn</code> prop changes from false to true or vice versa.



<strong>Add <code>WithLogging.spec.js</code>, write some tests for the HOC component:</strong>



You can use this mock class component inside your test file:

```
class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}
```

* Add a test to check that the <code>WithLogging</code> HOC renders a heading element with the text <code>Hello from Mock App Component</code>

<strong>Tips:</strong>

* Writing a unit test for HOC can be tricky. Create a variable with the HOC wrapping the above class component so you can use it in your test.
* With <code>StrictMode</code>, you’ll notice an extra <code>mount</code> and <code>unmount</code> cycles which is expected, read more <a href="/rltoken/0Osy-Ib-oYpKdqmQOAQdCw" target="_blank" title="here">here</a>

<strong>Requirements:</strong>

* In the test file, make sure to cleanup after each test execution (you use cleanup from <code>@testing-library/react</code>.
* Ensure your logs are properly displayed.
* The console in your browser should not show any errors or warnings.

---

### 6. Declare a pure component <a name='subparagraph6'></a>

In <code>NotificationItem.jsx</code>:

Make the component pure, so it only updates with props/state change.

---

### 7. Make your own pure component <a name='subparagraph7'></a>

<strong>In <code>task_5/dashboard/src/Notifications/Notifications.jsx</code>:</strong>

* Modify the file so that it only updates when the length of the notification list prop changes.
* You must implement this logic using the <code>shouldComponentUpdate</code>  lifecycle method to optimize performance.



<strong>In <code>Notifications.spec.js</code>, add two checks:</strong>

Although a pure component prevents re-rendering if no props or state are updated, the React Testing Library aims to check the actual rendered content instead.

To achieve this, we will implement two simple tests:

* Check that the <code>Notifications</code> component doesn’t re-render if the length of the <code>notifications</code> prop remains the same.
* Check that the <code>Notifications</code> component re-renders whenever the length of the <code>notifications</code> prop changes.



<strong>Requirements:</strong>

* The browser console should not display any errors or warnings.

---


## Authors
Ksyv - [GitHub Profile](https://github.com/ksyv)
