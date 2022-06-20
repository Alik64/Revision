/* implémenter une fonction qui trouve le plus petit intervalle positif entre les deux éléments du tableau.
ex: [1,6,4,2] => 1 car 2-1 = 1

!!! 
Tableau dois comporter au moins 2 éléments, et 100 000 max
La solution doit être optimiser pour les tableaux de grands tailles. */

let arr = [6, 1, 4, 2];

function findSmallestInterval(arr) {
  let sortedArr = arr.sort();
  let result = sortedArr[1] - sortedArr[0];
  return result;
}
console.log("findSmallestInterval(arr) ==>", findSmallestInterval(arr));

// var items = [5, 3, 7, 6, 2, 9];

// first call to quick sort

function useQuickSort(arr, left, right) {
  const swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  };

  const partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSort = (items, left, right) => {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  };

  return quickSort(arr, left, right);
}
const resultArr = useQuickSort(arr, 0, arr.length - 1);
console.log(resultArr[1] - resultArr[0]);
