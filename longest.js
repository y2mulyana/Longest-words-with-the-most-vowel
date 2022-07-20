//Find the longest word in the sentence and if there are multiple words of the same length, choose one that has the highest number of vowels

//==== Original target string
const target = 'Smart people learn from Everything and everyone, average people from their Experience, stupid people already, have all the answers';

//=== Add test case, same word length with same vowel count
const target2 = 'Smart Kxxxxaiueo people learn from Everything and everyone, average people from their Experience, stupid people already, have all the answers';

//====== Add test case, for small test only =======
const target3 ='Smart Kxxxxxccvv';

function longestWords(params) {
  // Remove , and convert to array
  let normalize = params
  .replace(/,/g, '')
  .split(' ')

  // Array for help catching filter results
  let dummy = [''];
  let vg = ['']
  let longest = []

  //====== Find all longest words ======
  for(let i = 0; i < normalize.length; i++){
    if(normalize[i].length > dummy[0].length && normalize[i].match(/[aeiouAIUOE]/gi)){
  	    dummy[0] = normalize[i];
        vg[0] = normalize[i].match(/[aeiouAIUOE]/gi).length;
        // console.log(normalize[i]);
       } else if(normalize[i].length === dummy[0].length && normalize[i].match(/[aeiouAIUOE]/gi)){
        dummy.push(normalize[i]);
        vg.push(normalize[i].match(/[aeiouAIUOE]/gi).length)
       } 
    };

  // Find the words with maximum vowel count
  let num = Math.max(...vg) 
  for(let i = 0; i < dummy.length; i++){
    if(vg[i] === num){
     longest.push(dummy[i]);
    } 
  }
  
  // Final results 
  return longest
}

  
// console.log(dummy);
// console.log(vg);
// console.log(longest);
console.log(longestWords(target3))
