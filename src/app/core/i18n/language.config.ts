import {
  Language,
  LanguageOption,
} from './language.model';

export const DEFAULT_LANGUAGE: Language = 'es';

export const LANGUAGE_STORAGE_KEY =
  'amanka.language';

export const LANGUAGE_OPTIONS: readonly LanguageOption[] = [
  {
    code: 'es',
    label: 'Español',
    shortLabel: 'ES',
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
  },
];