import ky from 'ky';
import { PersonSchema, type Person } from '../types/person';

const url = 'http://localhost:3001/persons?count=100';

export async function getAllPersons(): Promise<Person[]> {
  const persons = await ky.get(url).json();

  return PersonSchema.array().parse(persons);
}
