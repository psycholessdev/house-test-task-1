import { z } from 'zod'

export const feedbackFormSchema = z.object({
  name: z
    .string({ message: 'Имя обязательно для заполнения.' })
    .min(2, 'Имя должно состоять как минимум из 2 символов.'),

  phone: z.string({ message: 'Телефон обязателен для заполнения.' }).regex(
    /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
    'Формат телефона должен соответствовать +7 (423) 123-45-67'
  ),

  email: z
    .string()
    .email('Формат email должен соответствовать mail@example.com')
    .or(z.literal('')),

  message: z.string().optional(),
}).transform(fields => {
  if (fields.email === '') {
    // email input is an empty string by default,
    // it will not pass the email regexp
    delete fields.email
  }

  return fields
})
