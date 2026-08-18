import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import {
  LANGUAGE_OPTIONS,
} from '../../../core/i18n/language.config';

import {
  LanguageService,
} from '../../../core/i18n/language.service';

import {
  Language,
} from '../../../core/i18n/language.model';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelector {
  private readonly languageService =
    inject(LanguageService);

  readonly options = LANGUAGE_OPTIONS;

  readonly language =
    this.languageService.language;

  readonly open = signal(false);

  toggle(): void {
    this.open.update((value) => !value);
  }

  select(language: Language): void {
    this.languageService.setLanguage(language);
    this.open.set(false);
  }
}