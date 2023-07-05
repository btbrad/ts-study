function foo(name: string): number {
  return name.length
}

const foo1 = function (name: string): number {
  return name.length
}

const foo2: (name: string) => number = function (name) {
  return name.length
}

const foo3 = (name: string): number => {
  return name.length
}

const foo4: (name: string) => number = (name) => {
  return name.length
}

type FuncFood = (name: string) => number
const foo5: FuncFood = (name) => {
  return name.length
}

interface FuncFooStruct {
  (name: string): number
}

function foo6(): void {}
function bar(): undefined {
  return
}

function foo7(name: string, age?: number): number {
  const inputAge = age || 18
  return name.length + inputAge
}

function foo8(name: string, age: number = 18): number {
  return name.length + age
}

function foo9(arg1: string, ...rest: any[]) {}
function foo10(arg1: string, ...rest: [number, boolean]) {}
foo10('brad', 100, false)

function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo * 599
  }
}

function func1(foo: number, bar: true): string
function func1(foo: number, bar?: false): number
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo * 599
  }
}
const res1 = func1(599)
const res2 = func1(599, true)
const res3 = func1(599, false)
