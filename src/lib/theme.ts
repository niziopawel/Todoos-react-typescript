import { Dict } from '../utils/dictionary'

export type ColorThemeType = {
  primaryColor: string
  onPrimaryHover: string
  onPrimaryFocus: string
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

const defaultTheme: ColorThemeType = {
  primaryColor: '#6200EE',
  onPrimaryHover: '#710EFF',
  onPrimaryFocus: '#5D00E2',
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

const darkTheme: ColorThemeType = {
  primaryColor: '#BB86FC',
  onPrimaryHover: '#964df0',
  onPrimaryFocus: '#783cc2',
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

export const theme: Dict<ColorThemeType> = {
  defaultTheme,
  darkTheme,
}
