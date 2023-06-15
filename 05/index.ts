function foo(name: string): number {
  return name.length
}

const foo2 = function(name: string): number {
  return name.length
}

const foo3: (name: string) => number = (name) => {
  return name.length
}

const foo4 = (name: string): number => {
  return  name.length
}

type FuncFoo = (name: string) => number
const foo5: FuncFoo = (name) => {
  return name.length
}

interface FuncFooStruct {
  (name: string): number
}
const foo6: FuncFooStruct = (name: string) => {
  return name.length
}

function foo7(): void {}
function foo8(): undefined {
  return
}

function foo9(arg1: string, ...rest: any[]) {}
foo9('brad', 1,2,3,4)
function foo10(arg1: string, ...rest: [number, boolean]) {}
foo10('brad', 100, true)


function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return foo.toString()
  } else {
    return foo*599
  }
}
console.log(func(1))
console.log(func(1, false))
console.log(func(1, true))

async function asyncFunc(): Promise<void> {}
