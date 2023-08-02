import { property } from '../src'


interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

describe('property function', () => {
  const objects = [{ a: { b: 2 } }, { a: { b: 1 } }]

  it('should return the correct property values', () => {
    const getB = property<typeof objects[0], 'a.b'>('a.b')
    expect(getB(objects[0])).toBe(2)
    expect(getB(objects[1])).toBe(1)
  })

  it('should handle non-existing properties gracefully', () => {
    const getC = property<typeof objects[0], 'a.c'>('a.c')
    expect(getC(objects[0])).toBeUndefined()
	})
	
	const person: Person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  };

  it('should get the correct property value from an object', () => {
    const getName = property<Person, 'name'>('name');
    const getCity = property<Person, 'address.city'>('address.city');

    expect(getName(person)).toBe('John Doe');
    expect(getCity(person)).toBe('New York');
  });

  it('should handle nested properties', () => {
    const getCountry = property<Person, 'address.country'>('address.country');
    expect(getCountry(person)).toBe('USA');
  });

  it('should return undefined for non-existing properties', () => {
    const getLastName = property<Person, 'lastName'>('lastName');
    const getStreet = property<Person, 'address.street'>('address.street');

    expect(getLastName(person)).toBeUndefined();
    expect(getStreet(person)).toBeUndefined();
  });

  it('should handle non-object inputs', () => {
    const getLength = property<string, 'length'>('length');
    const getFirstChar = property<string, '0'>('0');

    expect(getLength('hello')).toBe(5);
    expect(getFirstChar('hello')).toBe('h');
  });

  it('should handle array inputs', () => {
    const getFirstElement = property<number[], '0'>('0');
    const getNestedElement = property<number[][], '1.0'>('1.0');

    expect(getFirstElement([1, 2, 3])).toBe(1);
    expect(getNestedElement([[1, 2], [3, 4]])).toBe(3);
  });

})