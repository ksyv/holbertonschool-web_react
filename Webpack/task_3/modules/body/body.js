import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

let count = 0;

const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

$(document).ready(() => {
  $('body').append('<div id="body"><button id="button">Click here to get started</button><p id="count"></p></div>');
  $('#button').on('click', _.debounce(updateCounter, 500));
});