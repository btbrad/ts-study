class Foo {
  private prop: string

  constructor(inputProps: string) {
    this.prop = inputProps
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  public get propA(): string {
    return this.prop
  }

  public set propA(value: string) {
    this.prop = `${value}+A`
  }
}

class Foo2 {
  constructor(private arg1: number, private arg2: string) {}
}

new Foo2(123, 'brad')
