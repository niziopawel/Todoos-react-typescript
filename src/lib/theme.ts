export type ColorTheme = {
  primary: string
  primaryVariant: string
  secondary: string
  secondaryVariant: string
  bc: string
  err: string
  onPrimaryColor: string
  onSecondaryColor: string
  onBackgroundColor: string
  onErrColor: string
}

const defaultTheme: ColorTheme = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  bc: '#fff',
  err: '#B00020',
  onPrimaryColor: '#fff',
  onSecondaryColor: '#000',
  onBackgroundColor: '#000',
  onErrColor: '#fff',
}

const darkTheme: ColorTheme = {
  primary: '#BB86FC',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  bc: '#121212',
  err: '#CF6679',
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
