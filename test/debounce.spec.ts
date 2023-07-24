import { debounce, sleep } from '../src'

describe('debounce', function () {
  it('only executes once when called rapidly', async function () {
    let num = 0
    let func = debounce(() => num++, 500)

    func()
    func()
    func()
    expect(num).toEqual(0)
    await sleep(610).then(() => expect(num).toEqual(1))
  })
})