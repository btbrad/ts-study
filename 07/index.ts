type Factory<T> = T | string | number
type FactoryWithBool = Factory<boolean>
const foo: FactoryWithBool = true

type MaybeArray<T> = T | T[]

function ensureArray<T>(input: MaybeArray<T>): T[] {
  if (Array.isArray(input)) {
    return input
  } else {
    return [input]
  }
}

type UnionIntersection1 = (1 | 2 | 3) & (2 | 3)

interface AllStringTypes {
  [key: string]: string;
  propA: string;
}

interface Foo2 {
  a: 1;
  b: 2;
  3: 'c'
}

type keys = keyof Foo2 & {}

interface NumberRecord {
  [key: string]: number;
}
type PropType = NumberRecord[string]

type Clone<T> = {
  [K in keyof T]: T[K]
}

interface A {
  name: string;
  age: number;
}

type AClone = Clone<A>
