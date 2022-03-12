/*  function getResult(s) {
    return s[0].toUpperCase() + s.substring(0, s.lenght);

}

console.log(
    getResult('имя'),
    '==',
    'Имя'
    );                         */







/* function getResult(a) {
    var s = 0;
    for (let i=0; i < a.length; i++) {
        s= s + a[i];

    }
    return s;
}
console.log(getResult([1, 2, 3, 4, 5]), '==', 15)
console.log(getResult([-1, -2, -3, -4, -5]), '==', -15)
console.log(getResult([-2, -2, 0, 4]), '==', 0) */









function getResult(s) {

    var a = ['0', '1', '2', '3', '4', '5',
     '6', '7', '8', '9','10', '11', '12',
      '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23', '24', '25', '26',
       '27', '28', '29','30', '31', '32 '];

    for (let i=0; i < a.length; i++) {
        s=cs.replace(a[i], '!');
    }

    return s;

}

console.log(
    getResult('Текст с числами 2 и 3 до 5'),
    '==',
    'текст с числами ! и ! до !'
); 

