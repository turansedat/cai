// REFERENCE : https://github.com/ml5js/ml5-examples/tree/master/javascript/ImageClassification
import ml5 from "ml5";

const image = document.getElementById("image"); // The image we want to classify
const result = document.getElementById("result"); // The result tag in the HTML
const probability = document.getElementById("probability"); // The probability tag in the HTML

// Initialize the Image Classifier method with MobileNet
ml5
  .imageClassifier("MobileNet")
  .then(classifier => classifier.predict(image))
  .then(results => {
    result.innerText = results[0].className;
    probability.innerText = results[0].probability.toFixed(4);
  });
document.getElementById("app").innerHTML = `
`;
