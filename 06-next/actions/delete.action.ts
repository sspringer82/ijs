'use server';

import { deletePerson } from '@/api/persons';
import { revalidatePath } from 'next/cache';

export async function deleteAction(id: string) {
  await deletePerson(id);

  revalidatePath('/');
}
