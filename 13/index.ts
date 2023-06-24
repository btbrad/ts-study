interface Foo {
  name: string
  age: number
  gender: boolean
}

type Foo2 = Pick<Foo, 'name' | 'age'>

type FunctionType = (...args: any) => any
type MyParameters<T extends FunctionType> = T extends (...args: infer P) => any
  ? P
  : never
type Res1 = MyParameters<(a: number, b: number) => number>
type MyReturnType<T extends FunctionType> = T extends (...args: any) => infer P
  ? P
  : never
type Res2 = MyReturnType<(a: number, b: number) => number>
