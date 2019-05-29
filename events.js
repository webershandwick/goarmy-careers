//setup
var TwoAnswerQuestions = new Array();
TwoAnswerQuestions[0] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question1/A_Normal.png", "/content/dam/goarmy/sstk/interests/question1/B_Normal.png", "/content/dam/goarmy/sstk/interests/question1/bg.png", "0,1,3,5,8", "2,4,7,9", 0);
TwoAnswerQuestions[1] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question2/A_Normal.png", "/content/dam/goarmy/sstk/interests/question2/B_Normal.png", "/content/dam/goarmy/sstk/interests/question2/bg.png", "0,1,3", "4,7,9", 0);
TwoAnswerQuestions[2] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question3/A_Normal.png", "/content/dam/goarmy/sstk/interests/question3/B_Normal.png", "/content/dam/goarmy/sstk/interests/question3/bg.png", "6", "8", 0);
TwoAnswerQuestions[3] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question4/A_Normal.png", "/content/dam/goarmy/sstk/interests/question4/B_Normal.png", "/content/dam/goarmy/sstk/interests/question4/bg.png", "3,5,6", "2", 0);
TwoAnswerQuestions[4] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question5/A_Normal.png", "/content/dam/goarmy/sstk/interests/question5/B_Normal.png", "/content/dam/goarmy/sstk/interests/question5/bg.png", "1,5", "7", 0);
TwoAnswerQuestions[5] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question6/A_Normal.png", "/content/dam/goarmy/sstk/interests/question6/B_Normal.png", "/content/dam/goarmy/sstk/interests/question6/bg.png", "9", "1", 0);
TwoAnswerQuestions[6] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question7/A_Normal.png", "/content/dam/goarmy/sstk/interests/question7/B_Normal.png", "/content/dam/goarmy/sstk/interests/question7/bg.png", "3", "4", 0);
TwoAnswerQuestions[7] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question8/A_Normal.png", "/content/dam/goarmy/sstk/interests/question8/B_Normal.png", "/content/dam/goarmy/sstk/interests/question8/bg.png", "2,6", "5", 0);
TwoAnswerQuestions[8] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question9/A_Normal.png", "/content/dam/goarmy/sstk/interests/question9/B_Normal.png", "/content/dam/goarmy/sstk/interests/question9/bg.png", "0", "9,7", 0);
TwoAnswerQuestions[9] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question10/A_Normal.png", "/content/dam/goarmy/sstk/interests/question10/B_Normal.png", "/content/dam/goarmy/sstk/interests/question10/bg.png", "3,4,7,9", "5", 0);
TwoAnswerQuestions[10] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question11/A_Normal.png", "/content/dam/goarmy/sstk/interests/question11/B_Normal.png", "/content/dam/goarmy/sstk/interests/question11/bg.png", "8", "0,4,5,7", 0);
TwoAnswerQuestions[11] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question12/A_Normal.png", "/content/dam/goarmy/sstk/interests/question12/B_Normal.png", "/content/dam/goarmy/sstk/interests/question12/bg.png", "1", "2", 0);
TwoAnswerQuestions[12] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question13/A_Normal.png", "/content/dam/goarmy/sstk/interests/question13/B_Normal.png", "/content/dam/goarmy/sstk/interests/question13/bg.png", "3,9", "0,1,2,4,6,8", 0);
TwoAnswerQuestions[13] = new TwoAnswerQuestion("/content/dam/goarmy/sstk/interests/question14/A_Normal.png", "/content/dam/goarmy/sstk/interests/question14/B_Normal.png", "/content/dam/goarmy/sstk/interests/question14/bg.png", "0,8", "2,6", 0);


var myTwoQuesCollection = new TwoAnswerQuestionCollection(TwoAnswerQuestions);
var TwoAnswers = new Array(); //this will get filled with the answers.

var ThreeAnswerQuestions = new Array();      //   question  pos     neg 
ThreeAnswerQuestions[0] = new ThreeAnswerQuesiton("Balancing your budget?","0","");
ThreeAnswerQuestions[1] = new ThreeAnswerQuesiton("Creating graphic art or drawings?","1","");
ThreeAnswerQuestions[2] = new ThreeAnswerQuesiton("Boxing, wrestling or practicing martial arts?","2","");
ThreeAnswerQuestions[3] = new ThreeAnswerQuesiton("Writing computer code?","3","");
ThreeAnswerQuestions[4] = new ThreeAnswerQuesiton("Solving geometry problems?","4","");
ThreeAnswerQuestions[5] = new ThreeAnswerQuesiton("Speaking/learning foreign languages?","5","");
ThreeAnswerQuestions[6] = new ThreeAnswerQuesiton("Debating an issue with someone?","6","");
ThreeAnswerQuestions[7] = new ThreeAnswerQuesiton("Troubleshooting a car problem?","7","");
ThreeAnswerQuestions[8] = new ThreeAnswerQuesiton("Giving first aid?","8","4,5,6");
ThreeAnswerQuestions[9] = new ThreeAnswerQuesiton("Driving a truck or watercraft?","9","");
ThreeAnswerQuestions[10] = new ThreeAnswerQuesiton("Using a computer?","0,1,3","");
ThreeAnswerQuestions[11] = new ThreeAnswerQuesiton("Speaking in public?","1,6","");
ThreeAnswerQuestions[12] = new ThreeAnswerQuesiton("Using a power tool?","4,7,9","");
ThreeAnswerQuestions[13] = new ThreeAnswerQuesiton("Paying attention to detail?","0,3,4,5,7,8","");
ThreeAnswerQuestions[14] = new ThreeAnswerQuesiton("Reading and following maps?","2,5,9","");
ThreeAnswerQuestions[15] = new ThreeAnswerQuesiton("Doing Sudoku and other puzzles?","5,6","");
ThreeAnswerQuestions[16] = new ThreeAnswerQuesiton("Taking target practice?","2,6","");
ThreeAnswerQuestions[17] = new ThreeAnswerQuesiton("Changing the oil on your car or truck?","4,7,9","");
ThreeAnswerQuestions[18] = new ThreeAnswerQuesiton("Fixing a computer problem?","3","");
ThreeAnswerQuestions[19] = new ThreeAnswerQuesiton("Organizing your computer files?","0,1,8","");
ThreeAnswerQuestions[20] = new ThreeAnswerQuesiton("Climbing a rope?","2","");
ThreeAnswerQuestions[21] = new ThreeAnswerQuesiton("Solving a problem under pressure?","2,5,6,8","");

var myQCollection = new TAQCollection(ThreeAnswerQuestions);
var ThreeAnswers = new Array(); //this will get filled with the 3-answer question answers.
//setup results
var ResultsArray = new Array();
for(tmp=0;tmp<10;tmp++){
ResultsArray[tmp] = 0;
}

var quiz = getQueryString('quiz');
if(!quiz || quiz == undefined) return;
//end setup
/* ResultsArray
0=Administrative Support
1=Arts & Media
2=Combat
3=Computers & Technology
4=Construction & Engineering
5=Intelligence & Combat Support
6=Legal & Law Enforcement
7=Mechanics
8=Medical & Emergency
9=Transportation & Aviation
*/


jQuery(document).ready(function () {
    jQuery('.GateInterests a').click(function () {
        StartInterests();
    });
    jQuery('.GateSkills a').click(function () {
        StartSkills();
    });
    jQuery('.clear').click(function () {
        jQuery('.QuestionHolder').html('');
    });

    startQuizByURL(quiz);
});

window.addEventListener('load', function(){
    startQuizByURL(quiz); //failsave quiz init
});

function StartInterests() {
    jQuery('.Gate').hide();
    jQuery('.StartInterests').show();
    PreLoadInterestsImages();
    jQuery('.StartInterests div a').click(function () {
        jQuery('.StartInterests').hide();
        myTwoQuesCollection.Draw('.QuestionHolder', 0);
    });
    
}
function StartSkills() {    
    jQuery('.Gate').hide();
    jQuery('.StartSkills').show();
    jQuery('.StartSkills div a').click(function () {
        jQuery('.StartSkills').hide();
        myQCollection.Draw3('.QuestionHolder', 1);
    });
}
function PreLoadInterestsImages() {
    var myTAQ = TwoAnswerQuestions[0];
    var preload_image_object = new Image();
    preload_image_object.src = myTAQ.BGImage;
    preload_image_object.src = myTAQ.AImage;
    preload_image_object.src = myTAQ.BImage;
}
function PreLoadCommon() {
    var reqImages = new Array();
    reqImages[0] = "/content/dam/goarmy/sstk/takeTest.png";
    reqImages[1] = "/content/dam/goarmy/sstk/progressBG.png";    
    reqImages[2] = "/content/dam/goarmy/sstk/next_active.png";
    reqImages[3] = "/content/dam/goarmy/sstk/next_inactive.png";
    //interests
    reqImages[4] = "/content/dam/goarmy/sstk/interests/interestsStartBG.png";   
    //skills
    reqImages[5] = "/content/dam/goarmy/sstk/skills/skillsStartBG.png";

    var preload_image_object = new Image();
    for(i=0; i<=reqImages.length; i++) {
         preload_image_object.src = reqImages[i];
    }
}
function startQuizByURL(query){
    if(query.match(/interests/i)){
        console.log(query);
        StartInterests();
    } else if(query.match(/skills/i)){
        console.log(query);
        StartSkills();
    }
}
function getQueryString( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
}