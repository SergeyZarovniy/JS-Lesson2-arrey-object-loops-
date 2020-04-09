// // // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// // // 1. перебрати його циклом while
// // // let arr = [2,17,13,6,22,31,45,66,100,-18]
// // // let i = 0;
// // // while (i > arr.length);
// // // i++
// // // console.log(arr);


// // // 2. перебрати його циклом for
// // // let arr1 = [2,17,13,6,22,31,45,66,100,-18]
// // // for(i=0; i > arr1.length; i++);
// // // console.log(arr1);


// // // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// // // let arr2 = [2,17,13,6,22,31,45,66,100,-18]
// // // let i =0;
// // // while(i > arr2.length);
// // // i++;
// // // console.log(arr2)


// // // 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// // // let arr = [2,17,13,6,22,31,66,100,-18,57,19,3] ;
// // //  for ( let i = 0; i < arr.length; i++) {
// // //      if (i%2 !==0) {
// // //          console.log(arr[i])
// // //      }
// // //  }


// // // 5. перебрати циклом while та вивести  числа тільки парні  значення 

// // // let arr = [2,17,13,6,22,31,66,100,-18,57,19,3] ;
// // //  let i = 0;
// // //   while (i < arr.length) {
// // //       if (arr[i]%2 ===0) {
// // //           console.log(arr[i])
// // //       }
// // //       i++
// // //   }

// // // 6. перебрати циклом for та вивести  числа тільки парні  значення

// // // let arr = [2,17,13,6,22,31,66,100,-18,57,19,3] ;
// // //  for (let i = 0; i < arr.length; i++) {
// // //      if (arr[i]%2 ===0) {
// // //          console.log(arr[i])
// // //      }
// // //  }

// // // 7. замінити кожне число кратне 3 на слово "okten"

// // // let arr = [2,17,13,6,22,31,66,100,-18,57,19,3] ;
// // //  for( let i = 0; i < arr.length; i++) {
// // //      if (arr[i]%3 ===0) {
// // //           arr[i] = 'okten';
// // //          console.log(arr)
// // //      }
// // //  }
// // // // 8. вивести масив в зворотньому порядку.
// // // let arr = [2,17,13,6,22,31,66,100,-18,57,19,3] ;
// // // for( let i = arr.length; i >= 0; i--) {
// // //     console.log(arr[i])
// // // }

// // //
// // // 9.  Cтворити пустий масив та :
// // // - заповнити його 50 парними числами за допомоги циклу.

// // // let emptyArr = []
// // // for (let i = 0; i < 50; i++) {
// // //     let randomVal = parseInt(Math.random() * 150 )
// // //     if ( randomVal%2 ===0) {
// // //         emptyArr.push(randomVal)
// // //     }
// // //     console.log(emptyArr)
// // // }
// // // 10. Заповнити його 50 непарними числами за допомоги циклу.
// // // 
// // //    let emptyArr = []
// // // for (let i = 0; i < 50; i++) {
// // //     let randomVal = parseInt(Math.random()*150)
// // //     if (randomVal % 2 !==0) {
// // //         emptyArr.push(randomVal)
// // //     }
// // //     console.log(emptyArr)
// // // }
// //     // let emptyArr = []
// //      // let i = 0;
// // // while (i < 50) {
// // //     let randomVal = parseInt(Math.random() *150);
// // //     if ( randomVal %2 ===0) {
// // //         emptyArr.push(randomVal);
// // //     }
// // //     i++
// // //     console.log(emptyArr)
// // // }
// // class--------------
// //  
// //  створити пустий масив та :
// // 1. заповнити його 50 парними числами за допомоги циклу.

// // let emptyArr = [];
// // for ( let i = 0; i < 100; i++) {
// //     let randomVal = parseInt(Math.random() *150);
// //     if (randomVal%2 ===0) {
// //         emptyArr.push(randomVal)
// //     }
// //     console.log(emptyArr)
// // }
// // 2. заповнити його 50 непарними числами за допомоги циклу.

// // let emptyArr = [];
// // for ( let i = 0; i < 50; i++) {
// //     let randomVal = parseInt(Math.random() * 150 );
// //     if (randomVal%2 !==0) {
// //         emptyArr.push(randomVal);
// //     }
// //     console.log(emptyArr)
// // }
// // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов. 
// //  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// // let emptyArr = [];
// //    for(let i =0; i < 50; i++){
// // let randomVal = parseInt(Math.random(8)*732 );
// // emptyArr.push(randomVal);
// //    }
// // console.log(emptyArr)

// //  2. вывести на консоль  каждый третий елементf 
// // let emptyArr =[];
// //  for( let i =0; i<50; i++){
// //      let randomVal=parseInt(Math.random(8)*732);
// //      emptyArr.push(randomVal);
// //     //  console.log(emptyArr)
// //      if (emptyArr[i]%3 ===0) {
// //          console.log(emptyArr[i]);
// //      }
// //  }
// //  3. вывести на консоль  каждый третий елемент 
// //  но при условии что его значение является парным.

// // let emptyArr = [];
// //  for(let i = 0; i < 25; i++) {
// //      let randomVal = parseInt(Math.random(8)*782);
// //      emptyArr.push(randomVal);
// //      console.log(emptyArr)
// //       for (let i = 3; i<emptyArr.length;i++){
// //         if (i%3 ===0,emptyArr[i]%2 ===0){
// //             console.log(emptyArr[i])
// //         }
// //       }   
// //  }
// //  4. вывести на консоль  каждый третий елемент 
// //  но при условии что он имеет парное значение и 
// //  записать их в другой массив.



// //   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// // for (let h = 0; h < 3; h++) {

// //     for (let m = 0; m < 60; m++) {

// //         for (let s = 0; s < 60; s++) {

// //             if ((h < 2 && m < 60 && s < 60) || (h === 2 && m < 20 && s <= 60)) {

// //                 console.log(h + 'hours' + ' ' + m + 'minutes' + ' ' + s + 'seconds')
// //             }
// //         }
// //     }
// // }
// // console.log(2 + 'hours' + ' ' + 20 + 'minutes' + ' ' + 0 + 'seconds' + ' ' + 'Time is up!!')

// // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// // let randomArr = [22,55,36,5,47,78,98,12,36,58,111];
// // for ( let i = 0; i < randomArr.length; i++) {
// //     let fifthVal = randomArr[i] * 5;
// //     let dobleAraay = []
// //     dobleAraay.push(fifthVal) 
// //     console.log(dobleAraay)
// // }
// let emptyArr = [];
// let emptyArr2 = [];
// for (let i = 0; i < 25 ; i++) {
//     let randomVal = parseInt(Math.random() * 100)
//     emptyArr.push(randomVal)
//     console.log(emptyArr)
//     let fifth = emptyArr[i] * 5;
//     emptyArr2.push(fifth);
//     // console.log(emptyArr2)
    
// }
