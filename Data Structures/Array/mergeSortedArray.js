// a = [0, 3, 4, 31]
// b = [4, 6, 30]
// [0, 3, 4, 4, 6, 30, 31 ]

const a = [0, 3, 4, 31];
const b = [4, 6, 30];

// a.push(84);
// console.log(a);

// a.sort();
// console.log(a);


// intial approch
function mergeSortedArrays1(a, b) {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }

  console.log(a);

  const result = bsort(a);

  console.log(result);
}

function bsort(q)
{
    var swap = false;
    var temp;
    for (let i = 0; i < q.length - 1; i++) {
        swap = false;

        for (let j = 0; j < q.length - i - 1; j++) {
            
            if(q[j] > q[j + 1]) {

                temp = q[j];
                q[j] = q[j + 1];
                q[j + 1] = temp;

                swap = true;
            }
        }

        if (swap) {
            break;
        }

    }

    return q;
}

const x = [0, 3, 4, 31];
const y = [4, 6, 30];
mergeSortedArrays1(x, y);



// 2nd approch whithout using bubble sort function
function mergeSortedArrays2(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }


  mergeSortedArrays2([0,3,4,31], [3,4,6,30]);