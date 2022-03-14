function StartClassification()
{
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2sS05pYSf//model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error,results)
{
    console.log('GOT RESULT');
}