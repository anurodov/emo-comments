//API and keys
let input;
let api = "https://api.mlab.com/api/1/databases/commentemotions/collections/test?";
let apiKey = "apiKey=Wg1RQ-mRUnADf_JceH9oWbfpxDieEE15";
let sadCount = 0;
let joyCount = 0;
let angCount = 0;
let anCount = 0;
let tenCount = 0;
let conCount = 0;

let sadCountRes = 0;
let joyCountRes = 0;
let angCountRes = 0;
let anCountRes = 0;
let tenCountRes = 0;
let conCountRes = 0;

let p;
let blankspace;
let comment;
let header;

function setup() {
  header = createImg('header_big.png');
  header.class('header');
  p = createP('See how readers feel about your article');
  p.class('intro');
  createCanvas(600,200);
  background('#F1F1F1');
  blankspace = createP(" ");
  blankspace.class ('blank');
  buttonHap = createButton('Positive');
  buttonSad = createButton('Sad');
  buttonAng = createButton('Angry');
  buttonAn = createButton('Analytical');
  buttonTent = createButton('Tentative');
  buttonCon = createButton('Confident');
  blankspace = createP(" ");
  blankspace.class ('blank');
  buttonHap.mousePressed(search_happy);
  buttonSad.mousePressed(search_sad);
  buttonAng.mousePressed(search_ang);
  buttonAn.mousePressed(search_an);
  buttonTent.mousePressed(search_ten);
  buttonCon.mousePressed(search_con);


  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

	function gotData(data) {
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "tentative") {
          tenCount ++;
          tenCountRes = tenCount/data.length*100;
    	    }
    if (data[i].tone == "analytical") {
          anCount ++;
          anCountRes = anCount/data.length*100;
      	  }
    if (data[i].tone == "confident") {
          conCount ++;
          conCountRes = conCount/data.length*100;
        	}
    if (data[i].tone == "joy") {
          joyCount ++;
          joyCountRes = joyCount/data.length*100;
          }
    if (data[i].tone == "anger") {
          angCount ++;
          angCountRes = angCount/data.length*100;
          }
    if (data[i].tone == "sadness") {
          sadCount ++;
          sadCountRes = sadCount/data.length*100;
          }
		}
	}
}

function draw() {
  stroke('#525252');
  line (0,100,600,100);
  noStroke();
  fill('#525252');
  text ('0',5,98);
  fill('#E07976');
  ellipse(50,100,joyCountRes*3);
  ellipse(joyCountRes*3 + 110, 100, sadCountRes*3);
  ellipse(sadCountRes*3 + 200, 100, angCountRes*3);
  ellipse(angCountRes*3 + 320, 100, anCountRes*3);
  ellipse(anCountRes*3 + 340, 100,tenCountRes*3);
  ellipse(tenCountRes*3 + 430, 100, conCountRes*3);
}

function search_happy() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

  function gotData(data) {
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "joy") {
      let avatar = createImg ('avatar.png');
      avatar.class('avatar');
      let name = createP('User #' + i);
      name.class('commenter');
      comment = createP(data[i].text);
      comment.class('comment');
    	}
		}
	}
}

function search_sad() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

  function gotData(data) {
    for (let i = 0; i < data.length-1; i++) {
      if (data[i].tone == "sadness") {
        let avatar = createImg ('avatar.png');
        avatar.class('avatar');
        let name = createP('User #' + i);
        name.class('commenter');
        comment = createP(data[i].text);
        comment.class('comment');
    	}
		}
	}
}

function search_ang() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

function gotData(data) {
  document.body.P = ' ';
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "anger") {
      let avatar = createImg ('avatar.png');
      avatar.class('avatar');
      let name = createP('User #' + i);
      name.class('commenter');
      comment = createP(data[i].text);
      comment.class('comment');
    	}
		}
	}
}

function search_an() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

function gotData(data) {
  document.body.P = ' ';
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "analytical") {
      let avatar = createImg ('avatar.png');
      avatar.class('avatar');
      let name = createP('User #' + i);
      name.class('commenter');
      comment = createP(data[i].text);
      comment.class('comment');
    	}
		}
	}
}

function search_con() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

function gotData(data) {
  document.body.P = ' ';
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "confident") {
      let avatar = createImg ('avatar.png');
      avatar.class('avatar');
      let name = createP('User #' + i);
      name.class('commenter');
      comment = createP(data[i].text);
      comment.class('comment');
    	}
		}
	}
}

function search_ten() {
  //Delete previous comments
  $('.comment').remove();
  $('.avatar').remove();
  $('.commenter').remove();

  let url = api + apiKey;
  console.log(url);
  loadJSON(url, gotData);

function gotData(data) {
  document.body.P = ' ';
  for (let i = 0; i < data.length-1; i++) {
    if (data[i].tone == "tentative") {
      let avatar = createImg ('avatar.png');
      avatar.class('avatar');
      let name = createP('User #' + i);
      name.class('commenter');
      comment = createP(data[i].text);
      comment.class('comment');
    	}
		}
	}
}
