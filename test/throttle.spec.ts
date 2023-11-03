import { throttle, sleep } from '../src'

describe('throttle', function () {
  it('should work', async function () {
    let num = 0
    let func = throttle(() => num++, 500)

    func()
    func()
    func()
    await sleep(600).then(() => expect(num).toEqual(1))

    func()
    await sleep(600).then(() => expect(num).toEqual(2))
  })
})
