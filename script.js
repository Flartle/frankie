const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const newPage = document.getElementById("secondPage");
const button = document.getElementById("nextBtn");
const classes = ['pew','franki3','frank', 'container', 'slider'];
function showNext() {
  button.style.display = 'inline-block';
  button.style.top = '474px'
}; 

let currentIndex = 0;
button.addEventListener('click',function() {
    // Remove all cycle classes
  for (let element of document.getElementsByClassName(classes[currentIndex])) {
    element.style.display = 'none';
    }
  // Add the current cycle class
  currentIndex = (currentIndex + 1) % classes.length;
 for (let element of document.getElementsByClassName(classes[currentIndex])) {
    element.style.display = 'block';
    }
  if (classes[currentIndex] == 'pew') {
      return;
  }
  else if(classes[currentIndex] == 'franki3')
  {
    let nowTop = parseInt(button.style.top) || 0;
    button.style.top = (nowTop+463) +'px';
  }
  else if (classes[currentIndex] == 'frank')
    {
      return
    }
 else if(classes[currentIndex]=='container')
 {
  let currentTop = parseInt(button.style.top)||0;
  button.style.display="none";
 }
 else if(classes[currentIndex]=='slider')
 {
  button.style.display='none';
  newPage.style.display = 'none';
  // Initialize on load
 }
 else 
 {
  return;
 }
});
// Function to show buttons again
function showButtons() {
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
};

// Function to hide stuff
function hideButtons() {
    for (let element of document.getElementsByClassName('container')) {
    element.style.display = 'none';
    }
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
};
// swaps to secondPage after yes is pressed
function showNewPage() {
  newPage.style.display = "block";
};


yesBtn.addEventListener("click", function() {
    document.getElementById('secondAlert').style.display = 'block';
     // Hide buttons after Yes is clicked
     yesBtn.style.pointerEvents='none';
     noBtn.style.pointerEvents='none';
});
closeNOW.addEventListener("click", () =>{
    document.getElementById('secondAlert').style.display = 'none';
    hideButtons();
    showNewPage();
    showNext();
})

  const customAlert = document.getElementById('customAlert');
  const alertMessage = document.getElementById('alertMessage');
  const closeAlert = document.getElementById('closeAlert');
  const messages = [
        "WHY DID U PRESS THIS???",
        "stop..",
        "howd u mispress so many times",
        "frankie..",
        "STOPPP",
        "just press yes",
        "it never stops",
        "it's gonna start back at the beginning",
        "its okay i still love you... dont press no again"
    ];
    let messageIndex = 0;

noBtn.addEventListener("click", function() {
        alertMessage.textContent = messages[messageIndex];
        customAlert.style.display = 'block'; // Show the alert
        messageIndex = (messageIndex + 1)%messages.length; // Cycle through messages
        setTimeout(showButtons, 100); 
        yesBtn.style.pointerEvents='none';
        noBtn.style.pointerEvents='none';
    });

    closeAlert.addEventListener('click', () => {
        customAlert.style.display = 'none'; // Hide the alert
        yesBtn.style.pointerEvents='auto';
        noBtn.style.pointerEvents='auto';
    });
    
/*const button = document.getElementById('myButton');
document.addEventListener('mousemove', function(event) {
  const rect = button.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate distance from mouse to center of button
  const distX = mouseX - (rect.left + rect.width / 2);
  const distY = mouseY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(distX**2 + distY**2);

  // If the mouse is within 100px, move the button away
  if (distance < 100) {
    button.style.transform = `translate(${distX/2}px, ${distY/2}px)`;
  } else {
    button.style.transform = '';
  }
});
*/ // if i decide to do moving instead of resizing
 document.getElementById('noBtn').onclick = function () {
  const yes = document.getElementById('yesBtn');
  const no = document.getElementById('noBtn');

  let yWidth = yes.offsetWidth;
  let yHeight = yes.offsetHeight;
  let yFont = parseFloat(window.getComputedStyle(yes).fontSize);

  let nWidth = no.offsetWidth;
  let nHeight = no.offsetHeight;
  let nFont = parseFloat(window.getComputedStyle(no).fontSize);

  let stepCount = 0;
  const maxSteps = 5; 

  const interval = setInterval(() => {
    // Stop after a few steps
    if (stepCount >= maxSteps) {
      clearInterval(interval);
      return;
    }

    // Grow Yes button slightly
    yWidth += 6;
    yHeight += 2;
    yFont += 1;
    yes.style.width = yWidth + 'px';
    yes.style.height = yHeight + 'px';
    yes.style.fontSize = yFont + 'px';

    // Shrink "No" button just a bit
    if (nWidth > 40 && nHeight > 20 && nFont > 10) {  // Set minimum sizes
      nWidth -= 6;
      nHeight -= 2;
      nFont -= 1;
      no.style.width = nWidth + 'px';
      no.style.height = nHeight + 'px';
      no.style.fontSize = nFont + 'px';
    }
    stepCount++;
  }, 100);
};
// slider
 var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  const sliderImages = {
    1: "url('https://t3.ftcdn.net/jpg/03/20/35/28/360_F_320352822_Du18cSR0okuxVfYKgQIYYU794iqjQRAU.jpg')",
    2: "url('https://www.freeiconspng.com/uploads/free-download-broken-heart-png-images-24.png')",
    3: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMZxhREsWrNk0Ly6mI0I-BuSKgKgca4ytPA&s')"
  };

  function updateSliderImage() {
    output.innerHTML = slider.value;

    const value = parseInt(slider.value, 10);

    let image;

    if (value >= 50) {
      image = sliderImages[1];
    } else if (value >= 25 && value < 50) {
      image = sliderImages[2];
    } else {
      image = sliderImages[3];
    }

    slider.style.setProperty('--thumb-image', image);
  }

  slider.addEventListener('input', updateSliderImage);
  updateSliderImage();
   const mySlider = document.getElementById('myRange');
    const displayText = document.getElementById('displayText');

    mySlider.addEventListener('input', function() {
        const sliderValue = parseInt(this.value); // Get the current slider value as an integer
        if (sliderValue == 100)
        {
          displayText.textContent = 'WOWOOWOWO I LVOE YOU TOO I LOVE YOU SO SO SO MUCH MUAH MUAH MUAH';
        }
        else if (sliderValue >= 50) {
            displayText.textContent = 'I LOVE YOU SO SO SO MUCHHH';
        } 
        else if (sliderValue < 50 && sliderValue >25) {
            displayText.textContent = 'i think ur going the wrong way';
        } 
         else {
            displayText.textContent = 'wrong way buddy'
        }
    });
