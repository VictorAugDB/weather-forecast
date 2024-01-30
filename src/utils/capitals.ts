import { normalizeRemoveDiacritics } from './normalizeRemoveDiacritics'

const capitalsBase = [
  'São Paulo',
  'Rio de Janeiro',
  'Brasília',
  'Fortaleza',
  'Salvador',
  'Belo Horizonte',
  'Manaus',
  'Curitiba',
  'Recife',
  'Goiânia',
  'Porto Alegre',
  'Belém',
  'São Luís',
  'Maceió',
  'Campo Grande',
  'Teresina',
  'João Pessoa',
  'Natal',
  'Cuiabá',
  'Aracaju',
  'Florianópolis',
  'Porto Velho',
  'Macapá',
  'Boa Vista',
  'Rio Branco',
  'Vitória',
  'Palmas',
]

export const capitals = capitalsBase.reduce(
  (acc, curr) => {
    acc[normalizeRemoveDiacritics(curr).toLocaleLowerCase()] = curr
    return acc
  },
  {} as Record<string, string>,
)
