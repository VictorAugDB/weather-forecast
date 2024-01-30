const map = {
  'dom.': 'Domingo',
  'seg.': 'Segunda',
  'ter.': 'Terça',
  'qua.': 'Quarta',
  'qui.': 'Quinta',
  'sex.': 'Sexta',
  'sáb.': 'Sábado',
}

export function getWeekDay(date: Date) {
  const short = Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
  }).format(date)

  console.log(short, date)

  return map[short as keyof typeof map]
}
