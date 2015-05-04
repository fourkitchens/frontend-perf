/**
 * This script stores each visitor's progress via localStorage.
 */
'use strict';

var trainingPrefix = 'frontend-perf-training';
var trainingName = trainingPrefix + '_dcla_';

//
// Check for progress when page loads.
//
if (localStorage.getItem(trainingName) !== null) {
  populateStorage();
} else {
  initStorage();
}

//
// First-time visit needs to initialize storage.
//
function initStorage() {
  localStorage.setItem(trainingName, trainingName);
}

//
// Populate the page based on past progress
//
function populateStorage() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  for (var i = 0; i < checkboxes.length; ++i) {
    checkboxes[i].checked = (localStorage.getItem(trainingName + checkboxes[i].id) === 'true') ? true : false;
  };
}

//
// Set status of a checkbox
//
function setStorage(id) {
  var checkbox = document.getElementById(id);
  var newValue = (checkbox.checked) ? 'true' : 'false';

  // checked = true, unchecked = false.
  localStorage.setItem(trainingName + id, newValue);
}

//
// Listen for changes and save each change. The entire set of checkboxes gets
// saved each time.
//
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (var i = 0; i < checkboxes.length; ++i) {
  checkboxes[i].addEventListener('change', function listen() {
    setStorage(this.id);
  });
};
