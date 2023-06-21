doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]



function doubleValues(arr) {
    let doubledArray = [];

    for (let i = 0; i < arr.length; i++)  {
        doubledArray.push(arr[i] * 2);
    }

    return doubledArray;
}




onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]


function onlyEvenValues(arr) {
    let evenValues = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ===0) {
            evenValues.push(arr[i]);
        }
    }

    return evenValues;
}



showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']



function showFirstAndLast(arr) {
    // Below, should I use const? Arr/ obj can be updated. Check?
    let firstLastResult = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let firstChar = word.charAt(0);
        let lastChar = wrod.charAt(word.length - 1);

        let newWord = firstChar + lastChar;
        firstLastResult.push(newWord);

    }

    return firstLastResult;
}





addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */



      function addKeyAndValue(arr, key, value) {
        for (let i = 0; i arr.length; i++) {
            arr[i][key] = value;
        }

        return arr;
      }




      vowelCount('Elie') // {e:2,i:1};
      vowelCount('Tim') // {i:1};
      vowelCount('Matt') // {a:1})
      vowelCount('hmmm') // {};
      vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}



function vowelCount(str) {
    const counts = {};

    const lowerStr = str.toLowerCase();

    const vowels = ['a','e','i','o','u'];

    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            if(!counts[char]) {
                counts[char] = 1;
            } else; {
                counts[char]++;
            }
        }
    }

    return counts;
}




      doubleValuesWithMap([1,2,3]) // [2,4,6]
      doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]


function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}




      valTimesIndex([1,2,3]) // [0,2,6]
      valTimesIndex([1,-2,-3]) // [0,-2,-6]


function valTimesIndex(arr) {
    return arr.map((value, index) => value * index);
}





      extractKey(
        [
          {name: 'Elie'},
          {name: 'Tim'},
          {name: 'Matt'},
          {name: 'Colt'}
        ],
        'name'
      )
      
        // ['Elie', 'Tim', Matt', 'Colt']


function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
}


/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
}




filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )
    
    /*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */

function filterByValue(arr, key) {
return arr.filter(ob => obj.hasOwnProperty(key));
}



      find([1,2,3,4,5], 3) // 3
      find([1,2,3,4,5], 10) // undefined


function find(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return arr[i];
        }
    }
    return undefined;
}





      findInObj(
        [
          {first: 'Elie', last:"Schoppik"},
          {first: 'Tim', last:"Garcia", isCatOwner: true},
          {first: 'att', last:"Lane"},
          {first: 'Colt', last:"Steele", isCatOwner: true}
        ],
        'isCatOwner',
        true
      )
      
      // {first: 'Tim', last:"Garcia", isCatOwner: true}

function findInObj(arr, key, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i];
        }
    }
    return null;
}




      removeVowels('Elie') // ('l')
      removeVowels('TIM') // ('tm')
      removeVowels('ZZZZZZ') // ('zzzzzz')

function removeVowels(str) {
    const vowels = ['a','e','i','o','u']
    const lowercasedStr = str.toLowerCase();
    let result = '';

    for (let i = 0; i < lowercasedStr.length; i++) {
        if (!vowels.includes(lowercasedStr[i])) {
            result += lowercasedStr[i];
        }
    }
    return result;
}


      doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
      doubleOddNumbers([4,4,4,4,4]) // []



function doubleOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0.map(num => num * 2))
}
