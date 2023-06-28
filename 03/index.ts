const username: string = 'bt'
const age: number = 24

const temp1: null = null
const temp2: undefined = undefined

const temp3: string = null
const temp4: string = undefined

const voidVar1: void = undefined
const voidVar2: void = null

const arr6: [number, string, string] = [22, 'bt', 'study']
// arr6[99]
const arr7: [number, string?, string?] = [22]
type TupleLength = typeof arr7.length

const arr8: [string, number, boolean] = ['bt', 12, true]
// const [name, age, male, other] = arr8

interface IDescription {
  readonly name: string
  age: number
  male?: boolean
  func?: Function
}

const obj1: IDescription = {
  name: 'bt',
  age: 28,
  male: true,
}

obj1.male = false
// obj1.func()
// obj1.name = 'brad'

const obj10: {} = 'bt'
// obj10.name = 'brad'

const test1: number = null
const test2: number = undefined

void (function iif() {
  console.log('invoked!')
})()
