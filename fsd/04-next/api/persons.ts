import ky from 'ky';
import { PersonSchema, type Person } from '../types/person';

const url = 'http://localhost:3001/persons';

export async function getAllPersons(): Promise<Person[]> {
  const persons = await ky.get(url + '?count=100').json();

  return PersonSchema.array().parse(persons);
}

export async function getPersonById(id: string): Promise<Person | null> {
  const person = await ky.get(`${url}/${id}`).json();

  try {
    return PersonSchema.parse(person);
  } catch {
    return null;
  }
}
