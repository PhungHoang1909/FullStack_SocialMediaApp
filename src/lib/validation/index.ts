import { z } from "zod"

export const SignupValidation = z.object({

  name: z.string().min(2, {message: 'Name Too short'}), 
  username: z.string().min(2, {message: 'UserNameToo short'}),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Must be at least 8 characters.'})
})