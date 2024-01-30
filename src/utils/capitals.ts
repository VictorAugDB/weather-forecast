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
    acc[
      curr
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase()
    ] = curr
    return acc
  },
  {} as Record<string, string>,
)
