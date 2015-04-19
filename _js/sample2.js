/**
 * This is a second JS file that will be combined with the other one.
 */
(function () {
  var message1 = 'This is second JS file.';
  var message2 = 'It has been combined with the first.';

  // console.log gets stripped out during minification
  console.log(message1, message2);
})();
