import { Dict } from '../utils/dictionary'

export type ThemeType = {
  primaryColor: string
  onPrimaryHover: string
  onPrimaryFocus: string
  primaryColorVariant: string
  secondaryColor: string
  secondaryColorVariant: string
  bgColor: string
  primarySurfaceColor: string
  secondarySurfaceColor: string
  errColor: string
  onPrimaryColor: string
  onSecondaryColor: string
  onBackgroundColor: string
  onErrColor: string
  headerBgColor: string
  onHeaderColor: string
  shadowElevation1: string
}

const defaultTheme: ThemeType = {
  primaryColor: '#6200EE',
  onPrimaryHover: '#710EFF',
  onPrimaryFocus: '#5D00E2',
  primaryColorVariant: '#3700B3',
  secondaryColor: '#03DAC6',
  secondaryColorVariant: '#018786',
  primarySurfaceColor: '',
  secondarySurfaceColor: '',
  bgColor: '#fff',
  errColor: '#B00020',
  onPrimaryColor: '#fff',
  onSecondaryColor: '#000',
  onBackgroundColor: '#000',
  onErrColor: '#fff',
  headerBgColor: '#6200EE',
  onHeaderColor: '#fff',
  shadowElevation1: '0 1px 2px rgba(0,0,0,.15), 0 0 2px rgba(0,0,0,.1)',
}

const darkTheme: ThemeType = {
  primaryColor: '#BB86FC',
  onPrimaryHover: '#964df0',
  onPrimaryFocus: '#783cc2',
  primaryColorVariant: '#3700B3',
  secondaryColor: '#03DAC6',
  secondaryColorVariant: '#018786',
  primarySurfaceColor: '',
  secondarySurfaceColor: '',
  bgColor: '#0e0e10',
  errColor: '#CF6679',
  onPrimaryColor: '#000',
  onSecondaryColor: '#000',
  onBackgroundColor: '#fff',
  onErrColor: '#000',
  headerBgColor: '#18181b',
  onHeaderColor: '#ccc',
  shadowElevation1: '0 1px 2px rgba(0,0,0,.15), 0 0 2px rgba(0,0,0,.1)',
}

export const theme: Dict<ThemeType> = {
  defaultTheme,
  darkTheme,
}
