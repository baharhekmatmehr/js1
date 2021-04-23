// function maxi (array){
//      let hi = array.toString();
//      console.log(typeof (hi)); 
//      let hello = hi.split();
//      console.log(typeof (hello)); 
//      const bahar= array.map( x =>2*(x) );
//      return (bahar);
// }
// console.log(maxi([ 6, 2, 1, 8, 10 ]));

function sumArray(array){
    let hi = array.toString().split(" ");
    const bahar=hi.map((hi)=>parseInt(hi));
    let maria=bahar.reduce((bahar)=>(value1 > maxi) ? value1 : max);
    let maryam=bahar.reduce((bahar)=>(value2 < mini) ? value2 : min);
    console.log(maria);
    console.log(maryam);
    let all= maria + maryam ;
    let arsalan = bahar.reduce((accumulator, currentValue) => accumulator + currentValue);
    let sara = all - arsalan ;
    console.log(sara);
}
sumArray([ 6, 2, 1, 8, 10 ]);






// function sumArray(array){
//     let hi = array.toString().split("");
//     const bahar=hi.map((hi)=>parseInt(hi));
//     const maria=bahar.reduce((bahar)=>(value1 > max) ? value1 : max);
//     const maryam=bahar.reduce((bahar)=>(value2 < min) ? value2 : min);
//     let all= "maria" + "maryam" ;
//     let arsalan = bahar.reduce((accumulator,currentValue) => accumulator + currentValue);
//     let shabnam = arsalan + all ;
//     return shabnam;
// }