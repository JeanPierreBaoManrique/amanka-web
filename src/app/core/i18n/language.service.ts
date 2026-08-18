import {
  Injectable,
  computed,
  signal,
} from '@angular/core';

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from './language.config';

import {
  Language,
  SUPPORTED_LANGUAGES,
} from './language.model';

import { ES_TRANSLATIONS } from './translations/es';
import { EN_TRANSLATIONS } from './translations/en';

const TRANSLATIONS = {
  es: ES_TRANSLATIONS,
  en: EN_TRANSLATIONS,
} as const;

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLanguage =
    signal<Language>(this.resolveInitialLanguage());

  readonly language =
    this.currentLanguage.asReadonly();

  readonly translations = computed(
    () => TRANSLATIONS[this.currentLanguage()],
  );

  constructor() {
    this.updateDocumentLanguage(
      this.currentLanguage(),
    );
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);

    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language,
    );

    this.updateDocumentLanguage(language);
  }

  private resolveInitialLanguage(): Language {
    const storedLanguage =
      localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (this.isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguage =
      navigator.language
        .split('-')[0]
        .toLowerCase();

    if (this.isSupportedLanguage(browserLanguage)) {
      return browserLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  private isSupportedLanguage(
    language: string | null,
  ): language is Language {
    return (
      language !== null &&
      SUPPORTED_LANGUAGES.includes(
        language as Language,
      )
    );
  }

  private updateDocumentLanguage(
    language: Language,
  ): void {
    document.documentElement.lang = language;
  }
}