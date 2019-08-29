var myFirstPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("success!");
  }, 250);
});

myFirstPromise.then(function(successMessage) {
  document.write("Yay!" + successMessage);
});
