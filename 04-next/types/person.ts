import { z } from 'zod/v4';

export const PersonSchema = z.object({
  id: z.uuid(),
  firstName: z.string(),
  lastName: z.string(),
  sex: z.enum(['male', 'female', 'other']),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected YYYY-MM-DD'),
  email: z.email(),
  phone: z.string(),
  street: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string(),
  username: z.string(),
  jobTitle: z.string(),
  company: z.string(),
  ssn: z.string(),
  iban: z.string(),
  website: z.url(),
  avatar: z.url(),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-']),
  maritalStatus: z.enum([
    'single',
    'married',
    'divorced',
    'widowed',
    'separated',
  ]),
  nationality: z.string(),
});

export type Person = z.infer<typeof PersonSchema>;
