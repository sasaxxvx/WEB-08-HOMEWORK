        // let a=100; 
        // const b =200;
        // function functionScope(){
        //   if (true){
        //   } 
        //   console.log(a+b); 
        // }
        // functionScope()

//let, const在平级才可以访问到，调用的时候
//let 定义变量可以改， const不可以改

        // firstName='weiwei';
        // surName='zuo';
        // console.log(`My name is ${firstName} ${surName}`);
//string interpolation当中，尽量不要出现加号，用${}写法

//ES6 写法+arrow function -->method 1
        // let array =[0,1,2,3];
        // array.forEach(function(i){
        //   console.log(i*2);
        // }
        // )


//--> method 2
        // let array1=[0,1,2,3];
        // array1.forEach(i=>{
        //   console.log(i*4)
        // }
        // )
//异步，中间没有停顿，同时处理多个客人的煎饼单子 async
//同步， 中间有停顿，一次只能处理一个客人的煎饼单子 sync


// new features: map

        // let array =[0,1,2,3];

        // const res=array.map( i=>{
        //   return i*2
        // }
        // )
        // console.log(res)
        // console.log(array)

//new features: forEach

        // let array =[0,1,2,3];

        // const res=array.forEach( i=>{
        //   return i*2
        // }
        // )
        // console.log(res)


        


// filterResult
        // array=[1,2,3,4]
        // const filterResult=array.filter(i=>(i<3))
        // console.log(filterResult) 

array=[1,2,3,4]
const sum=array.reduce ((sum, value)=>{
  return sum=sum-value;
//可以是累加，也可以是累减

});

console.log(sum);