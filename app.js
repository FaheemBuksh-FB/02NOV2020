var val = prompt("Execution Count??")
for (var i = 0; i <= val; i++) {
    for (var j = val; j > i; j--) {
        document.write('&nbsp')
    }
    for (var j = 0; j < i; j++) {
        document.write('*');
    }
    document.write('<br>');
}
for (var i = 0; i <= val; i++) {
    for (var j = 0; j < i; j++) {
        document.write('&nbsp')
    }
    for (var j = val - i; j > 0; j--) {
        document.write('*');
    }
    document.write('<br>');
}



//CLASS TASK
// var val = prompt("Execution Count??")
// for(var i = 0; i <val; i++){
//     for(var j = val; j>i; j--){
//         document.write('&nbsp')

//     }
//     // for(var j = 0; j < i ; j++){
//     //     document.write('*');
//     // }
//     document.write('*')
//     document.write('<br>');
// }

// //ASSIGNMENT
//      *
//     * *
//    *   *
//   *     *
//  *       *