export const generateYearsOptions = (min?: number) => {
  const maxYear = new Date().getFullYear()
  const minYear = min ?? maxYear - 50

  return Array.from({ length: maxYear - minYear + 1 }, (_, i) => i + minYear + 1).reverse()
}
