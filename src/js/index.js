/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#genbttn").addEventListener("click", () => {
    document.body.querySelector("#excuses").innerHTML = generateExcuse();
    // GENERATE RANDOM #
    // USE RANDOM # AS index
    whoIndex = Math.floor(Math.random() * who.length);
    actionIndex = Math.floor(Math.random() * action.length);
    whatIndex = Math.floor(Math.random() * what.length);
    // whenIndex = Math.floor(Math.random() * when.length);

    let randomnumber = Math.random();
    console.log(randomnumber);
    let lengthofwhen = when.length;
    console.log(lengthofwhen);
    let rawnumber = randomnumber * lengthofwhen;
    console.log(rawnumber);
    let whenIndex = Math.floor(rawnumber);
    console.log(whenIndex);
  });
  // from here

  //      create a set of random excuses
  //      index escuse with random #
  //      print excuse to DOM

  let who = ["santa", "a rabbi", "this bbw chick"];
  let action = ["held me ransom"];
  let what = ["with a knife", "in a shrine"];
  let when = ["today", "in october", "during the eclipse"];

  let whoIndex = 0;
  let actionIndex = 0;
  let whatIndex = 0;
  let whenIndex = 0;

  let generateExcuse = () => {
    return (
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };

  // to here
};
