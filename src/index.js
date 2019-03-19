/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {    
let spech = [];
  for (i=1; i<=preferences.length; i++)
  spech.push(i);

let count = 0;
  for (j=0; j<preferences.length; j++){  

    for (k=0; k<spech.length; k++) { 

      if (spech[k] == references[j] ) {

        for (m=0; m<spech.length; m++){

          if (preferences[k] == spech[m] && preferences[m] == spech[j] && spech[m] != spech[k] && spech[j] != spech[k]  ) {
          count = count + 1;          
          }

        }
      }

    }

  }
  return (count/3)
};
