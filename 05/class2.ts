class Bar {
  prop: string

  constructor(inputProp: string, public arg2: string) {
    this.prop = inputProp
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  get propA(): string {
    return `${this.prop}A`
  }

  set propA(value: string) {
    this.prop = `${value}A`
  }
}

const b = new Bar('111', '222')
console.log(b)
