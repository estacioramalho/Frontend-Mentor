let rating = 0;


function rating1() {
    rating = 1;
    console.log(rating);
}

function rating2() {
    rating = 2;
    console.log(rating);
}

function rating3() {
    rating = 3;
    console.log(rating);
}

function rating4() {
    rating = 4;
    console.log(rating);
}

function rating5() {
    rating = 5;
    console.log(rating);
}

function submit() {
    if (rating == 0) {
        alert("Please select a rating");
    } else {
        document.getElementById('active-container').style.display = 'none';
        document.getElementById('thankyou-container').style.display = 'flex';
        document.getElementById('rating-container').innerHTML = " " + rating + " ";
    }
}