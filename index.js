function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(array1, array2) {
  let mergedArray = []

  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] < array2[0]) {
      mergedArray.push(findMinAndRemoveSorted(array1))
    } else {
      mergedArray.push(findMinAndRemoveSorted(array2))
    }
  }
  let arrayWithDups = mergedArray.concat(array1).concat(array2)
  return [...new Set(arrayWithDups)]
}

function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}

function binarySearch(sortedArr, diff) {
  let min = 0
  let max = sortedArr.length - 1
  let guess

  while (min <= max) {
    guess = Math.floor((min + max) / 2)

    if (sortedArr[guess] === diff) {
      return guess
    } else {
      if (sortedArr[guess] < diff) {
        min = guess + 1
      } else {
        max = guess - 1
      }
    }
  }
  return false
}

function bruteForceTwoSum(array, sum) {
  let matchingArray = []

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        matchingArray.push([array[i],array[j]])
      }
    }
  }
  return matchingArray
}

function binarySearchTwoSum(array, sum) {
  let sortedArr = mergeSort(array)
  let results = []

  for (let i = 0; i<sortedArr.length; i++) {
    let diff = sum - sortedArr[i]
    let binaryIndex = binarySearch(sortedArr, diff)

    if (binaryIndex) {
      results.push([sortedArr[i], sortedArr[binaryIndex]])
    }
  }
  return results
}
