/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  // from here

  //console.log(Math.floor(Math.random() * group.length));

  let who = ["santa", "a rabbi", "this bbw chick"];
  let action = "held me ransom";
  let what = ["with a knife", "in a shrine"];
  let when = ["today", "in october", "during the eclipse"];

  let whoIndex = 0;
  let actionIndex = 0;
  let whatIndex = 0;
  let whenIndex = 0;

  let generateExcuse = () => {
    return (
      who[whoIndex] +
      "" +
      action[actionIndex] +
      "" +
      [whatIndex] +
      "" +
      [whenIndex]
    );
  };

  document.body.querySelector("#excuses").innerHTML = "Hello world";
  // to here
};
