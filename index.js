const likeBtns = document.querySelector('#likeBtn');
    const unlikeBtn = document.getElementById("unlikeBtn");
    const resetBtn = document.getElementById('resetBtn');
    const Likecount = document.getElementById('likeCount');
    const Unlikecount = document.getElementById('unlikeCount')

    // Set initial count value to 0
    let count = 0;
    let uncount = 0;

    // Add event listener for the Like button
    likeBtns.addEventListener('click', function abc() {
      //count++;
      console.log("inCount");
      count = count + 1;
     Likecount.textContent = count;
    });

    // Add event listener for the Unlike button
    unlikeBtn.addEventListener('click', function abc() {
         //count++
      console.log("outCount")

      uncount = uncount + 1;
        Unlikecount.textContent = uncount;
        console.log(Unlikecount);
      
    });

    // Add event listener for the Reset button
    resetBtn.addEventListener('click', function() {
      count = 0;
      uncount = 0;
      Likecount.textContent = count;
      Unlikecount.textContent = uncount;
    });