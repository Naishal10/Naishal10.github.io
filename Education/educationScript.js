
let currentIndex = 0;


function showNextSection() {
  if (currentIndex < 2) {
    showPart(currentIndex + 1);
  } else {
    showPart(0);
  }
  console.log(currentIndex)
}

function showPart(partNumber) {
    // Hide all parts
    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "none";

    // Show the selected part
    document.getElementById("section-" + partNumber).style.display = "block";
}
