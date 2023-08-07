import { template } from '../src'

describe('template function', () => {
    it('replaces all occurrences', () => {
        const tmp = `
    Hello my name is {{name}}. I am a {{type}}.
    Not sure why I am {{reason}}.

    Thank You - {{name}}
  `
        const data = {
            name: 'Ray',
            type: 'template',
            reason: 'so beautiful'
        }

        const result = template(tmp, data)
        const expected = `
    Hello my name is ${data.name}. I am a ${data.type}.
    Not sure why I am ${data.reason}.

    Thank You - ${data.name}
  `

        expect(result).toEqual(expected)
    })

    it('replaces all occurrences given template', () => {
        const tmp = `Hello <name>.`
        const data = {
            name: 'world'
        }

        const result = template(tmp, data, /<(.+?)>/g)
        expect(result).toEqual(`Hello ${data.name}.`)
    })

    it('should replace multiple variables', () => {
        expect(template('{{ greeting }}, {{ name }}!', { greeting: 'hello', name: 'world' })).toBe('hello, world!');
    });

    it('should ignore whitespace around variable names', () => {
        expect(template('hello, {{   name   }}!', { name: 'world' })).toBe('hello, world!');
    });
})