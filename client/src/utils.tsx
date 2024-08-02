import { User } from "firebase/auth"
import { z } from "zod"

export interface ClothingItem {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number | 0
}
export interface Subcategory {
  name: string
  route: string
  items: ClothingItem[]
}

export interface Category {
  id: number
  imageUrl: string
  category: string
  route: string
  placement: boolean
  subcategories: Subcategory[]
}
export interface Categories {
  [key: string]: Category
}

// USER AUTH TYPES
export type UserType = User | null
export interface emailSignUp {
  email: string
  password: string
}
export interface emailSignIn {
  email: string
  password: string
}

// IMITATES THE FORM SCHEMA TYPE FROM sign-in.tsx
export const createFormSchema = (variant: string) => {
  const formSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email",
    }),
    password: z
      .string()
      .min(7, {
        message: "Password must be atleast 7 characters long",
      })
      .max(20, {
        message: "Password must not exceed 20 characters",
      }),
    confirmPassword:
      variant === "Register"
        ? z
            .string()
            .min(7, {
              message: "Password must be atleast 7 characters long",
            })
            .max(20, {
              message: "Password must not exceed 20 characters",
            })
        : z.literal(""),
  })
  return formSchema
}

export type FormType = {
  email: string
  password: string
  confirmPassword: string
}
