import $ from 'jquery';
import '../header/header.css';

console.log('Init header');

$(document).ready(() => {
  $('body').prepend('<div id="header"><img id="logo" src="./assets/holberton-logo.jpg" alt="Holberton Logo"><h1>Holberton Dashboard</h1></div>');
});