//https://teachablemachine.withgoogle.com/models/V40pjX3TE/
function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/V40pjX3TE/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log("Got result");
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result").innerHTML = results[0].label;
        confidence_rate = Math.round(results[0].confidence * 100);
        document.getElementById("confidence_percent").innerHTML = confidence_rate;
        document.getElementById("result").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("confidence_result").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");


        if(results[0].label == "Clapping") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "laughing") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Snapping") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Background Noise") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}