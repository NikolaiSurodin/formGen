import { educationDocumentsOptions } from '@/const/educationDocumentsOptions'
import { educationOptions } from '@/const/educationOptions'

export const options = [
  {
    model_type: 'text',
    model: 'surname',
    type: 'text',
    title: 'Отчество',
  },
  {
    model_type: 'number',
    model: 'phone',
    type: 'number',
    title: 'Номер телефона',
  },
  {
    model_type: 'select',
    model: 'education',
    type: 'select',
    title: 'Образование',
    options: educationOptions
  },
  {
    model_type: 'multiselect',
    model: 'education_document',
    type: 'multiselect',
    title: 'Документы об образовании',
    options: educationDocumentsOptions
  }
]
