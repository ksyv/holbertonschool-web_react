import $ from 'jquery';
import _ from 'lodash';

// Fonction de mise à jour du compteur
let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

// Ajout des éléments au DOM
$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Liaison de la fonction debounce au bouton
  $('#button').on('click', _.debounce(updateCounter, 500));
});