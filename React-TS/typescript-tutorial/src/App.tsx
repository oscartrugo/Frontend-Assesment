import React from 'react';
import './App.css';

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name:string) => never;


// type Person = {
//   name: string;
//   age?: number; // ? means its optional, not 100% necesary
// }

// let person: Person = {
//   name: 'Oscar',
//   age: 23
// }

// let lotsOfPeople: Person[];

//let personName: unknown;

type X={
  a:string;
  b:number;
};

interface Person extends X{
  name: string;
  age?: number;
}



type Y=X &{
  c:string;
  d:number;
};

const App: React.FC = () => {
  return (
    <span className="heading">Taskify</span>
  );
}

export default App;
