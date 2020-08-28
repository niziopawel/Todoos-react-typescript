export type ColorTheme = {
  primaryColor: string
  primaryColorVariant: string
  secondaryColor: string
  secondaryColorVariant: string
  bgColor: string
  errColor: string
  onPrimaryColor: string
  onSecondaryColor: string
  onBackgroundColor: string
  onErrColor: string
}

const defaultTheme: ColorTheme = {
  primaryColor: '#6200EE',
  primaryColorVariant: '#3700B3',
  secondaryColor: '#03DAC6',
  secondaryColorVariant: '#018786',
  bgColor: '#fff',
  errColor: '#B00020',
  onPrimaryColor: '#fff',
  onSecondaryColor: '#000',
  onBackgroundColor: '#000',
  onErrColor: '#fff',
}

const darkTheme: ColorTheme = {
  primaryColor: '#BB86FC',
  primaryColorVariant: '#3700B3',
  secondaryColor: '#03DAC6',
  secondaryColorVariant: '#018786',
  bgColor: '#121212',
  errColor: '#CF6679',
  onPrimaryColor: '#000',
  onSecondaryColor: '#000',
  onBackgroundColor: '#fff',
  onErrColor: '#000',
}

export type ThemeType = {
  defaultTheme: ColorTheme
  darkTheme: ColorTheme
}

export const theme: ThemeType = {
  defaultTheme,
  darkTheme,
}
