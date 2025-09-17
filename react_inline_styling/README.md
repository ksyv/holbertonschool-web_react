<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Inline styling](#subparagraph0)
  - [1. install Aphrodite](#subparagraph1)
  - [2. Conditionally applying style](#subparagraph2)
  - [3. Responsive design](#subparagraph3)
  - [4. Animation](#subparagraph4)

## Resources
### Read or watch:
* [Aphrodite](https://github.com/khan/aphrodite)
* [Inline styling](https://bobbyhadz.com/blog/react-inline-styles)
* [Test  CSS Style](https://github.com/testing-library/jest-dom#tohavestyle)
* [CSS Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)
* [CSS Media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
* [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)
* [Prevent aphrodite styles injection](https://github.com/Khan/aphrodite/issues/62)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* the differences between using a CSS file and inline styling
* how to use a CSS-in-JS tool like Aphrodite
* how to use conditions within JS to apply different styles
* how to use responsive design and make the application show a different UI according to the screen size
* how to create small animations within the app

## Requirements
### General
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS usingnode 20.x.xandnpm 10.x.x
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the folder of the project, is mandatory
* Install Jest globally:npm install -g jest

## Task
### 0. Inline styling <a name='subparagraph0'></a>

* Copy over the <code>task_5</code> directory from the <code>React components</code> project (We’ll be using it as the base for this project)
* Rename the <code>task_5</code> directory to <code>task_0</code>

<strong>Modify the <code>CourseListRow</code> component in <code>task_0/dashboard/src/CourseList/CourseListRow.jsx</code>:</strong>

* Using inline styling, change the background color of a row to <code>#f5f5f5ab</code>
* Using inline styling, change the background color of a header row to <code>#deb5b545</code>
* If needed, modify the test file so every test pass.

<strong>Tests:</strong>

* Add a test that check when the <code>isHeader</code> prop is true, the cell background color is <code>#deb5b545</code>.
* Add a test that check when the <code>isHeader</code> prop is true and <code>secondTextCell</code> is not null, the cell background color is <code>#deb5b545</code>.
* Add a test that check when the <code>isHeader</code> prop is false, the cell background color is <code>#f5f5f5ab</code>.

<strong>Tips:</strong>

* For better performances, never create and pass an object to an element directly. Use a constant instead
* Use the <code>isHeader</code> prop to easily pick the style you want to apply to the <code>tr</code> tag
* You can convert the <code>Hex</code> color to <code>rgb</code> color in order to PASS your test.

<strong>Requirement:</strong>

* Even if the modification is small, make sure that your test suites are still passing. Especially the file <code>CourseListRow.spec.js</code>

---

### 1. install Aphrodite <a name='subparagraph1'></a>

Install Aphrodite using npm with:

<code>npm install --save aphrodite</code>

<strong>Modify the <code>App</code> component in <code>task_1/dashboard/src/App/App.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the body and the footer within the file
* Delete the file <code>App.css</code> and the import

<strong>Modify the <code>BodySectionWithMarginBottom</code> component in <code>task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the margin within the file
* Delete the file <code>BodySection.css</code> and the import

<strong>Modify the <code>CourseList</code> component in <code>task_1/dashboard/src/CourseList/CourseList.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the list within the file
* Remove the styling for the list within the <code>CourseList.css</code> file

<strong>Modify the <code>Header</code> component in <code>task_1/dashboard/src/Header/Header.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the logo and the header within the file
* Delete the file <code>Header.css</code> and the import

<strong>Modify the <code>Login</code> component in <code>task_1/dashboard/src/Login/Login.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the margin within the file
* Delete the file <code>Login.css</code> and the import

<strong>Modify the <code>Notifications</code> component in <code>task_1/dashboard/src/Notifications/Notifications.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the notifications panel within the file
* Remove the styling for the notifications panel from the <code>Notifications.css</code>

<strong>Make sure the test suites are still passing!</strong>

<strong>Tips:</strong>

* Look into using <code>StyleSheetTestUtils.suppressStyleInjection</code> at the top of your test file, to prevent issues with style injections

<strong>Requirements:</strong>

* At this point, the UI should look exactly the same with the inline styling as it was with the CSS files



<strong>All your tests that check whether the correct color is displayed or not will fail. This is because you have prevented the <code>Aphrodite</code> library from injecting CSS styling during testing. Feel free to comment them out in order to pass your tests.</strong>

---

### 2. Conditionally applying style <a name='subparagraph2'></a>

<strong>Modify the <code>NotificationItem</code> component in <code>task_2/dashboard/src/Notifications/NotificationItem.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the urgent and default items
* Using condition, apply the styling to the <code>li</code> element
* Delete the <code>Notifications.css</code> file and remove any import

<strong>Modify the <code>NotificationItem.test</code> suite in <code>task_2/dashboard/src/Notifications/NotificationItem.spec.js</code>:</strong>

* Make sure that tests are still passing

<strong>Modify the <code>CourseListRow</code> component in <code>task_2/dashboard/src/CourseList/CourseListRow.jsx</code>:</strong>

* Modify the component to use Aphrodite within the js file
* Define the styling for the different type of rows (default rows, header rows)
* Define the styling for the different type of <code>th</code> elements
* Delete the <code>CourseList.css</code> file and remove any import

<strong>Modify the <code>CourseListRow.test</code> suite in <code>task_2/dashboard/src/CourseList/CourseListRow.spec.js</code>:</strong>

* Make sure that tests are still passing
* Test properties one by one if easier

<strong>Requirements:</strong>

* Use conditions as much as you can, do not repeat elements
* At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

<strong>Tips:</strong>

* You can either use conditions or use an array to apply the different styling. Conditions are usually more robust

---

### 3. Responsive design <a name='subparagraph3'></a>

Let’s make the application responsive to the screen size using media queries. We are going to only focus on large screen and screens with a width under 900px

<strong>Modify the component <code>Login</code> in <code>task_3/dashboard/src/Login/Login.jsx</code>:</strong>

* Make sure that a label and an input are on each line
* Make sure that the button is on a new line
* The screen should look like the image below:

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/c3ed54e1dba4b232adc1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250917%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250917T071953Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=9aedbe8bfae9ed0ebefb72fd86d61e10af79bd9a6bbc02d841343dffd91ecf4a" style=""/>

<strong>Modify the component <code>Notifications</code> in <code>task_3/dashboard/src/Notifications/Notifications.jsx</code>:</strong>

* When the panel is open, it should take over the entire screen
* There should be no padding because of the <code>ul</code> element
* The font size of the text should be 20px

<strong>Modify the component <code>NotificationItem</code> in <code>task_3/dashboard/src/Notifications/NotificationItem.jsx</code>:</strong>

* The item should take the entire screen width
* A black border should be displayed at the bottom
* The font size of the text should be 20px
* The padding for the item should be <code>10px 8px</code>

<strong>Requirements:</strong>

* When the notifications panel is open, the screen should look like the image below:

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/e0d15ee8d2e28be1e130.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250917%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250917T071953Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=65cd512a855d08edb7aca5151eb38d5bf178a0513a177acf4912e86fc8e73e4c" style=""/>

---

### 4. Animation <a name='subparagraph4'></a>

Let’s create an animation that we can display when the user hovers on the <code>Notifications</code> menu or when there is a new notification. In <code>task_4/dashboard/Notifications/Notifications.jsx</code>:

* Create one object containing the CSS frames to make the opacity change from <code>0.5</code> to <code>1</code>
* Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px

Modify the styling for the menu item to:

* Float on the right of the screen over every element
* The background color should be <code>#fff8f8</code>
* Show the pointer cursor when hovering the element
* On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only
* When the list of notifications is visible, hide the menu item

<strong>Requirements:</strong>

* When the notifications panel is hovered or opened, the UI should look like the image below:

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/8d302a65b1be36662c54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250917%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250917T071953Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=7884aef2ebce165a49f30b76bd52a8c887ae672c95209bfec69fad3fa11b8806" style=""/>

---


## Authors
Ksyv - [GitHub Profile](https://github.com/ksyv)
