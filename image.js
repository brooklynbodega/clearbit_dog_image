// Write a script that will replace all image tags 
// on clearbit.com with a picture of your favorite dog.

// Find all images on a web page:
// https://www.stevefenton.co.uk/2019/09/find-all-images-on-a-page-with-javascript/
Array.prototype.map.call(document.images, function (i) {
  console.log('image', i.src);
});

// Update image source test
Array.prototype.map.call(document.images, function (i) {
  i.src = "dog test";
});

// Update image source to replace all images with an image of Sparky the bull terrier
Array.prototype.map.call(document.images, function (i) {
  i.src = 'https://i.dailymail.co.uk/1s/2020/06/04/11/29214248-0-image-a-48_1591267818379.jpg';
});
