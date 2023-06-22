export const timeName = (date: string) => {
  if (date === '11' || date === '12' || date === '13' || date === '14') {
    return 'часов назад';
  } else {
    switch (date.at(-1)) {
      case "1": return 'час назад'
      case "2": return 'часа назад'
      case "3": return 'часа назад'
      case "4": return 'часа назад'
      case "5": return 'часов назад'
      case "6": return 'часов назад'
      case "7": return 'часов назад'
      case "8": return 'часов назад'
      case "9": return 'часов назад'
      case "0": return 'часов назад'
    }
  }
}