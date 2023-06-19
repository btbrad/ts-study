type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

interface Foo {
  name: string
  age: number
}

type Foo1 = MyPartial<Foo>

type IsEqual<T> = T extends true ? true : false

type A = IsEqual<true>
type B = IsEqual<false>
type C = IsEqual<111>

type Factory<T = boolean> = T | string | number
const foo2: Factory = true

type ResStatus<ResCode extends number = 404> = ResCode extends 200 | 204 | 304
  ? 'success'
  : 'failed'
type res1 = ResStatus<200>
type res2 = ResStatus<404>
// type res3 = ResStatus<'123'>
type res4 = ResStatus

type Conditional<Type, Condition, TruthResult, FalsyResult> =
  Type extends Condition ? TruthResult : FalsyResult

type c1 = Conditional<'brad', string, 'success', 'failed'>
type c2 = Conditional<'12', number, 'success', 'failed'>

function swap<T, U>([start, end]: [T, U]): [U, T] {
  return [end, start]
}

const swapped1 = swap([1, 2])
console.log(swapped1)
const swapped2 = swap(['brad', 29])
console.log(swapped2)
