// types.ts (or inside your Contact.tsx file)
export interface FormField {
    name: string
    label: string
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
    required?: boolean
    options?: string[]
  }
  