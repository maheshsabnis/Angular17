import express from 'express';

const instance  =express();

instance.use(express.json());

let employees = [
    {EmpNo:1,EmpName:'ABC', Salary:88888},
    {EmpNo:2,EmpName:'ABC', Salary:88888},
    {EmpNo:3,EmpName:'ABC', Salary:88888},
    {EmpNo:4,EmpName:'ABC', Salary:88888},
    {EmpNo:5,EmpName:'ABC', Salary:88888}
];




instance.listen(7090,()=>{
    console.log(`Server is started on port 7090`);
});