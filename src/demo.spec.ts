import {FizzBuzz} from "./demo";

describe('Fizz or Buzz',()=>{
    test('Should be Fizz or Buzz',()=>{
        let num1=new FizzBuzz(5);
        let num2=new FizzBuzz(6);
        let num3=new FizzBuzz(15);
        let num4=new FizzBuzz(7);
         expect(num1.message).toEqual('Fizz');
         expect(num2.message).toEqual('Buzz');
         expect(num3.message).toEqual('FizzBuzz');
         expect(num4.message).toEqual("Fail");
    });
})