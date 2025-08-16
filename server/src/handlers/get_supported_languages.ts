import { type SupportedLanguage } from '../schema';

// Language display names mapping
const languageNames: Record<SupportedLanguage, string> = {
  'en': 'English',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'it': 'Italian',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'zh': 'Chinese',
  'ar': 'Arabic',
  'hi': 'Hindi'
};

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
}

export async function getSupportedLanguages(): Promise<LanguageOption[]> {
  // This is a placeholder implementation! Real code should be implemented here.
  // The goal of this handler is to:
  // 1. Return the list of supported languages for translation
  // 2. Include both language codes and display names
  // 3. This will be used by the frontend to populate language selection dropdowns
  
  const languages: LanguageOption[] = Object.entries(languageNames).map(([code, name]) => ({
    code: code as SupportedLanguage,
    name
  }));
  
  return Promise.resolve(languages);
}