const supportedLngs = ['EN', 'MY', 'KM']

export const ni18nConfig = {
  fallbackLng: supportedLngs,
  supportedLngs,
  ns: ['translation'],
  react: {
    useSuspense: false,
  },
}