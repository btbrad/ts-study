const func = (input: string) => {
  return input.length > 10
}
type FuncReturnType = ReturnType<typeof func>

function isString(input: unknown): input is string {
  return typeof input === 'string'
}

function foo(input: string | number) {
  if (isString(input)) {
    input.replace('aaaa', 'ccc')
  }
  if (typeof input === 'number') {
    console.log(input)
  }
}

interface Foo {
  kind: 'foo';
  diffType: string;
  fooOnly: boolean;
  shared: number;
}

interface Bar {
  kind: 'bar';
  diffType: number;
  barOnly: boolean;
  shared: number;
}

function handle1(input: Foo | Bar) {
  const { diffType } = input
  if (typeof diffType === 'string') {
    // input.fooOnly;
  } else {
    // input.barOnly;
  }
}

const obj = {
  name: 'brad'
}
console.log(typeof obj.name)