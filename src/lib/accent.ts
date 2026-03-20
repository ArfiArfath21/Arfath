import type { AccentTone } from '@/types/site'

export const toneGlowBackgrounds: Record<AccentTone, string> = {
  green:
    'radial-gradient(circle at 100% 10%, rgb(var(--tone-green-rgb) / 0.18), transparent 42%), radial-gradient(circle at 0% 88%, rgb(var(--tone-green-rgb) / 0.08), transparent 34%)',
  red:
    'radial-gradient(circle at 100% 8%, rgb(var(--tone-red-rgb) / 0.16), transparent 42%), radial-gradient(circle at 0% 82%, rgb(var(--tone-red-rgb) / 0.08), transparent 34%)',
  blue:
    'radial-gradient(circle at 100% 8%, rgb(var(--tone-blue-rgb) / 0.18), transparent 42%), radial-gradient(circle at 0% 82%, rgb(var(--tone-blue-rgb) / 0.08), transparent 34%)',
  amber:
    'radial-gradient(circle at 100% 8%, rgb(var(--tone-amber-rgb) / 0.18), transparent 42%), radial-gradient(circle at 0% 82%, rgb(var(--tone-amber-rgb) / 0.08), transparent 34%)',
}

export function resolveTone(tone?: AccentTone): AccentTone {
  return tone ?? 'amber'
}

export const toneAccentStyles: Record<
  AccentTone,
  { color: string; borderColor: string; backgroundColor: string }
> = {
  green: {
    color: 'rgb(var(--tone-green-rgb))',
    borderColor: 'rgb(var(--tone-green-rgb) / 0.24)',
    backgroundColor: 'rgb(var(--tone-green-rgb) / 0.1)',
  },
  red: {
    color: 'rgb(var(--tone-red-rgb))',
    borderColor: 'rgb(var(--tone-red-rgb) / 0.24)',
    backgroundColor: 'rgb(var(--tone-red-rgb) / 0.1)',
  },
  blue: {
    color: 'rgb(var(--tone-blue-rgb))',
    borderColor: 'rgb(var(--tone-blue-rgb) / 0.24)',
    backgroundColor: 'rgb(var(--tone-blue-rgb) / 0.1)',
  },
  amber: {
    color: 'rgb(var(--tone-amber-rgb))',
    borderColor: 'rgb(var(--tone-amber-rgb) / 0.24)',
    backgroundColor: 'rgb(var(--tone-amber-rgb) / 0.1)',
  },
}
