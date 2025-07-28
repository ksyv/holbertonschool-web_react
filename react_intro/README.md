<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Basic application](#subparagraph0)
  - [1. Basic Tests](#subparagraph1)
  - [2. Embedding expressions, functions](#subparagraph2)
  - [3. Modify the App](#subparagraph3)
  - [4. Test the sign in form](#subparagraph4)
  - [5. Update the Notifications](#subparagraph5)
  - [6. Utils tests](#subparagraph6)
  - [7. Test the notifications list](#subparagraph7)
  - [8. Deploy to a GitHub page](#subparagraph8)
  - [9. Reorganize the files](#subparagraph9)

## Resources
### Read or watch:
* [React Official Website](https://react.dev/)
* [Getting started with React](https://flaviocopes.com/vite-react-app/)
* [React overview](https://react.dev/learn)
* [Vite | docs](https://vite.dev/guide/)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Jest Matchers](https://jestjs.io/docs/using-matchers)
* [Queries In Testing Library](https://testing-library.com/docs/queries/about/)
* [mocking functions in testing](https://www.meticulous.ai/blog/how-to-use-jest-spyon)
* [Handling user events in RTL](https://testing-library.com/docs/react-testing-library/migrate-from-enzyme/#simulate-user-events)
* [dangerouslySetInnerHTML in React](https://refine.dev/blog/use-react-dangerouslysetinnerhtml/)
* [Deploying React App to github pages](https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* How to create a basic Javascript application with React
* How to use the build toolviteto start developing quickly with React
* What JSX is and how it works.
* How to add inline styles in React.
* How to implement simple forms in React.
* How to implement unit tests using React Testing Library
* How to use the React Developer Tools to debug your code
* How to deploy a react application to GitHub pages.

## Requirements
### General
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS usingnode 20.x.xor greater andnpm 10.x.x
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally:npm install -g jest

## Task
### 0. Basic application <a name='subparagraph0'></a>

<strong>Create a basic app named <code>dashboard</code> using the build tool <code>vite</code> in your <code>task_0</code> directory</strong>

You will need a <strong><em>favicon</em></strong>, the <strong><em>Holberton logo</em></strong>, and a <strong><em>close button image</em></strong>. Download these files and place the logo and button images in the <code>src/assets</code> folder, and put the favicon in the <code>public</code> folder.

<strong>holberton-logo.jpg</strong>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=69dd4220d702f57438a6bedff879326acba8e4c7e90ac377f32487f62282b02c" style=""/>

<strong>favicon.ico</strong>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=23b78a124cd5eb2fe89a95f97981accea9c2f3ae5a6be935a88e3f1edc71a063" style=""/>

<strong>close-button.png</strong>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/2d96723b038e2e92001b59f72c0418a8595802aa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6b7c82617ae0280ff9b3a8ace0c49842d1aeac2d968a90ea11b8411dcdb00eb3" style=""/>

<strong>Remove the following unused files:</strong>

* <code>index.css</code>
* <code>public/vite.svg</code> and <code>src/assets/react.svg</code>

<strong>Update index.html file:</strong>

* Change the title of the document to be <code>Holberton - School dashboard</code>
* Change the icon to be Holberton’s logo

Set up the following files in the project root folder:

* <p><code>setupTests.js</code>:
<details>
<summary><strong>Click to expand/hide:</strong></summary>
<pre><code>
import '@testing-library/jest-dom';
</code></pre>
</details></p>
* <p><code>.babelrc</code> file:
<details>
<summary><strong>Click to expand/hide:</strong></summary>
<pre><code>
{
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", { "runtime": "automatic" }]
    ]
}
</code></pre>
</details></p>
* <p><code>fileTransformer.js</code> file:
<details>
<summary><strong>Click to expand/hide:</strong></summary>
<pre><code>
import path from 'path';</code></pre></details></p>
<p>export default {
    process(sourceText, sourcePath, options) {
        return {
            code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
        };
    },
};

</p>
* <p>Configure Jest at the end of your <code>package.json</code>:
<details>
<summary><strong>Click to expand/hide:</strong></summary>
<pre><code>
"jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "&lt;rootDir&gt;/fileTransformer.js",
  "^.+\\.(css|less|scss)$": "identity-obj-proxy"
},
"setupFilesAfterEnv": [
  "<rootdir>./setupTests.js"
]
}
</rootdir></code></pre>
</details></p>
* <p>Make sure to install the following packages:</p>

  * <code>@babel/preset-env</code>
  * <code>@babel/preset-react</code>
  * <code>identity-obj-proxy</code>
  * <code>@testing-library/jest-dom</code>
  * <code>@testing-library/react</code>
  * <code>jest-environment-jsdom</code>
  * <code>@testing-library/user-event</code>

<strong>in <code>task_0/dashboard/src/App.jsx</code>, create a function <code>App</code> that returns:</strong>

* A <code>div</code> with a class <code>App-header</code> containing the Holberton logo with <code>alt</code> text: <code>holberton logo</code>, and a <code>h1</code> with the text <code>School dashboard</code> (color: <code>#e1003c</code>)
* A <code>div</code> with a class <code>App-body</code> containing a paragraph with the text <code>Login to access the full dashboard</code>
* A <code>div</code> with a class <code>App-footer</code> containing a paragraph with the text <code>Copyright {the current year e.g: 2025} - holberton School</code>

<strong>Ad the CSS styles to the <code>App.css</code> to match the design in the screenshot below:</strong>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/d3aca29c0fa33276ffa9de0d8611cd331511997b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=8f8029e4db53e223e17a304ef5b24d51325fd8b40b83bf5c72e71659e63eef6c" style=""/>

<strong>Requirements:</strong>

* Push your<code>package.json</code>and Make sure the <code>jest</code> package is included.
* Use the same names for the downloadable images (<code>holberton-logo.jpg</code> , <code>close-button.png</code>, <code>favicon.ico</code>).
* Ensure the lint check passes without errors (hint: add <code>Jest</code> as the test runner in the ESLint configuration file).
* Make sure the app’s style matches the screenshot.

---

### 1. Basic Tests <a name='subparagraph1'></a>

Testing is a crucial part in the web development. in React projects, you’ll use the <code>React Testing Library</code> and <code>Jest</code> as a test runner.

Create a new file named <code>App.spec.js</code> inside the src folder, and add the following imports:

* <code>render</code> and <code>screen</code> from <code>@testing-library/react</code>
* The <code>App</code> component

Now that all dependencies are imported, let’s write the first tests:

* Write a test to check if the <code>h1</code> element with the text <code>School Dashboard</code> is rendered.
* Write a test to check that the text content within the 2 <code>p</code> elements in the app-body and app-footer divs matches the text shown in the previous task screenshot.
* Write a test to check if an <code>img</code> element is rendered.

<strong><em>Tips:</em></strong>

* Use a single query to check for the <code>&lt;h1&gt;</code> element and its text content.
* Match the <code>&lt;img&gt;</code> element using its <code>alt</code> attribute’s text content to ensure your test is robust.
* Ignore case sensitivity in your assertions to improve the coverage and reliability of your tests.

---

### 2. Embedding expressions, functions <a name='subparagraph2'></a>

<strong>Using your code from the previous task, create a new file <code>task_1/dashboard/src/utils.js</code>:</strong>

* Create a function <code>getCurrentYear</code> that will return the current year.
* Create a function <code>getFooterCopy</code>:


  * It accepts one argument <code>isIndex</code>(boolean).
  * When true, the function should return <code>Holberton School</code>, otherwise it’ll return <code>Holberton School main dashboard</code>
* Update the <code>&lt;div&gt;</code> App-footer in <code>App.jsx</code> to use these two functions.



<strong>Add a new file <code>task_1/dashboard/src/Notifications.jsx</code>, and create a Notifications function:</strong>

* The function should return a <code>&lt;div&gt;</code> with the class <code>notifications</code>
* The div should contain a paragraph with the text <code>Here is the list of notifications</code>

<strong>Create a new file <code>task_1/dashboard/src/Notifications.css</code> where you add the necessary styles to match the design shown in the provided screenshot.</strong>



<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4fb11d71985c3e9053301f38f4da71ff5de34649.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=4b04505466330103d1aaa3372eca50a3676a6275f7b67f73852b688191cfaf99" style=""/>



<strong>Render the Notifications component:</strong>

* <p>Update <code>App.jsx</code> :</p>

  * Render the new <code>Notifications</code>  component and wrap it inside a <code>div</code> with class <code>root-notifications</code>
* <p>Use the React browser extension to check if the <code>Notifications</code> component is nested correctly as a child of the <code>App</code> component.</p>

<strong>Requirements:</strong>

* The new <code>Notifications</code> component should be implemented as a child within <code>App</code> in <code>App.jsx</code>.
* Ensure the lint check passes with no errors.

---

### 3. Modify the App <a name='subparagraph3'></a>

<strong>Using your code from the previous task, in <code>task_2/dashboard/src/App.jsx</code> under the paragraph with text <code>Login to access the full dashboard</code>:</strong>

* Add a <code>label</code> and an <code>input</code>element for email.
* Add a <code>label</code> and an <code>input</code> element for password.
* Add a <code>button</code> element with the text “OK”

<strong>Requirements:</strong>

* When the user clicks on a label element, the corresponding input field should be focused
* No lint errors should appear

---

### 4. Test the sign in form <a name='subparagraph4'></a>

Let’s test the new form.

Update the <code>App.spec.js</code> file to add the following tests:

* Check whether the <code>App</code> component renders 2 input elements.
* Check whether the <code>App</code> component renders 2 label elements with the text <code>Email</code> and <code>Password</code>.
* Check whether the <code>App</code> component renders a button with the text ‘OK’

<strong>Tips:</strong>

* Use <code>regex</code> to ensure case-insensitive matching.

---

### 5. Update the Notifications <a name='subparagraph5'></a>

<strong>Update <code>task_2/dashboard/src/utils.js</code>:</strong>

* Create a function <code>getLatestNotification</code>: 


  * This function should return the following string : <code>&lt;strong&gt;Urgent requirement&lt;/strong&gt; - complete by EOD</code>

<strong>Update <code>task_2/dashboard/src/Notifications.jsx</code> in the Notifications div:</strong>

* Add a button element:


  * Style the button inline so it appears on the right side of the notifications box. (without using the CSS file):
  * Add the attribute <code>aria-label</code> with the value <code>Close</code>.
  * When the user clicks the button, it should log <code>Close button has been clicked</code> to the console..
-Add an <code>&lt;img&gt;</code> tag inside the button:
  * The <code>&lt;img&gt;</code> should import the close-icon.png image.
* Add an unordered list <code>&lt;ul&gt;</code> after the paragraph:


  * The list should contain the following items:


    * First item: Default priority with the text <code>New course available</code>
    * Second item: Urgent priority with the text <code>New resume available</code>
    * Last item: Display the text returned by <code>getLatestNotification</code> using <code>dangerouslySetInnerHTML</code>.
* Add a data attribute for priority:


  * Assign a priority level to the first and second list items using a <code>data-priority</code> attribute.

<strong>In <code>task_2/dashboard/src/Notifications.css</code>:</strong>

* Add CSS styles to match the screenshot below.

<strong>Requirements:</strong>

* No lint errors should show up
* Your app should look like the following screenshot:

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/676bb04908adbf59c1f5269243eac55aa4841ee1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6f10a4f1c5405262c5cdbfb2f157c85d62d885590c8834f6fbe1cce04a24de55" style=""/>

---

### 6. Utils tests <a name='subparagraph6'></a>

<strong>Update <code>task_3/dashboard/src/utils.spec.js</code>:</strong>

Use Jest to test the following functions to ensure they return the desired outputs:

* Write a test to check that the function <code>getCurrentYear</code> returns the correct year (be careful to not create a time bomb).
* Write a test to check that <code>getFooterCopy</code> returns the correct string when the argument is true or false.
* Write a test to check the returned string form <code>getLatestNotification</code>

---

### 7. Test the notifications list <a name='subparagraph7'></a>

<strong>In <code>task_3/dashboard/src/Notifications.spec.js</code></strong> create the following tests:

* Add a test to check the existence of the notifications title <code>Here is the list of notifications</code> .
* Add a test to check the existence of the <code>button</code> element in the notifications.
* Verify that there are 3 <code>li</code> elements as notifications rendered, as shown in the shared screenshot .
* Check whether clicking the close button logs <code>Close button has been clicked</code> to the console.

<strong>Tips:</strong>

-Take a look at how RTL (React Testing Library) handles user events.
- Use the <code>fireEvent</code> API  to simulate a click event for the button.

<strong>Requirements:</strong>

* Make sure your tests ignore case to ensure better test coverage.

---

### 8. Deploy to a GitHub page <a name='subparagraph8'></a>

Deploy your application to GitHub Pages using the <code>gh-pages</code> branch.

Add the link to your deployed web page within a new file in the <code>task_4</code> folder and name it <code>holberton-dashboard.txt</code>

<strong>Requirement:</strong>

* Your web page <code>Holberton dashboard</code> must match the design shown in the provided screenshot.
<br/><br/>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/e9eda297e77bfc0bde1f5252f2e778df55fef2c8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=80edcc38a61c63c8f387c9cde62d14d2e3a7c1346eb1cf7df2bd4882d41735cf" style=""/>

---

### 9. Reorganize the files <a name='subparagraph9'></a>

Let’s restructure the project:

* Create folder structure:


  * Move every file related to the <code>App</code> into an <code>App</code> folder.
  * Move every file related to the <code>Notifications</code> into a <code>Notifications</code> folder.
  * Move every file related to the utility functions into a <code>utils</code> folder.
  * Move every asset file (like images, logos) into an <code>assets</code> folder.
* Set up the favicon.ico:


  * Place the favicon.ico in the <code>public</code> folder.

<strong>Requirements:</strong>

* Make sure to fix the import statements in your files, so all tests run successfully.
* The <code>favicon.ico</code> should be displayed on the React application browser tab.
* Your React application should look similar to the one shown in the screenshot below.
* No lint errors.



<strong>Screenshot at this level:</strong>

<img alt="" loading="lazy" src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/b03d7cb2ddc658c92838f7bfe1b9982ba4976032.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250728%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20250728T072412Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ac02ded9d4adef6f34140eb6954449611565f85fc67307040c05de79a986c43e" style=""/>

---


## Authors
Ksyv - [GitHub Profile](https://github.com/ksyv)
