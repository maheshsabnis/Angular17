export class Employee {
     [key:string]:any;
    constructor(public EmpNo:number, public EmpName: string, public DeptName:string, public Designation:string, public Salary: number) {
    }
    // public EmpNo:number = 0;
    // public EmpName: string = "";
    // public DeptName:string = "";
    // public Designation:string = "";
    // public Salary: number = 0;
}


export const Employees =[
    {
      EmpNo:101, EmpName: 'Ajay', DeptName: 'IT', Designation: 'Manager', Salary:12000
    },
    {
      EmpNo:102, EmpName: 'Binod', DeptName: 'HR', Designation: 'Engineer', Salary:11000
    },
    {
      EmpNo:103, EmpName: 'Charu', DeptName: 'SL', Designation: 'Developer',Salary:10000
    },
    {
      EmpNo:104, EmpName: 'Deepak', DeptName: 'IT', Designation: 'Manager',Salary:12000
    },
    {
      EmpNo:105, EmpName: 'Eshwar', DeptName: 'HR', Designation: 'Manager',Salary:12000
    },
    {
      EmpNo:106, EmpName: 'Falgun', DeptName: 'SL', Designation: 'Manager',Salary:12000
    },
  ];

