function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lT5Z0nBfE/model.json',modelReady);
}

function modelReady(){
    classifier.classify(got_results);
}

function got_results(error,results){
   if(error){
       console.error(error);
   }else{
       console.log(results);
       random_number_r=Math.floor(Math.random()*255)+1;
       random_number_g=Math.floor(Math.random()*255)+1;
       random_number_b=Math.floor(Math.random()*255)+1;

       document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
       document.getElementById("result_confidence").innerHTML='Accuracy'+(results[0].confidence*100).toFixed(2);
       document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
       document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img=document.getElementById('drift');
       img_1=document.getElementById('noob');
       img_2=document.getElementById('Ender_Dragon');
       img_3=document.getElementById('Carnage');

       if(results[0].label=="clap"){
           img.src='aliens-01.gif';
           img_1.src='aliens-02.png';
           img_2.src='aliens-03.png';
           img_3.src='aliens-04.png';
       }
       else if(results[0].label=="Background Noise"){
        img.src='aliens-01.png';
        img_1.src='aliens-02.png';
        img_2.src='aliens-03.gif';
        img_3.src='aliens-04.png';
       }
       else if(results[0].label=="Bell"){
        img.src='aliens-01.png';
        img_1.src='aliens-02.png';
        img_2.src='aliens-03.png';
        img_3.src='aliens-04.gif';
       }
       else if(results[0].label=="moving a packet"){
        img.src='aliens-01.png';
        img_1.src='aliens-02.gif';
        img_2.src='aliens-03.png';
        img_3.src='aliens-04.png';
       }
   }

}

