# Corrections de contraste pour accessibilité

## Problèmes détectés
- `text-slate-500` (contrast ratio: ~4.5:1) → `text-slate-400` (6.96:1)
- `text-slate-400` (contrast ratio: ~6.9:1) → `text-slate-300` (9.45:1) 
- `text-slate-600` (contrast ratio: ~3.0:1) → `text-slate-400` (6.96:1)

## Sur fond sombre (bg-slate-950 #020617)
- Pour texte principal : `text-slate-200` ou `text-white` (>15:1)
- Pour texte secondaire : `text-slate-300` (>9:1)
- Pour texte tertiaire : `text-slate-400` (>6.9:1)

## Sur cards (bg-slate-800/900)
- Pour texte principal : `text-slate-100` ou `text-white`
- Pour texte secondaire : `text-slate-300`
- Pour labels : `text-slate-400` minimum

## Couleurs d'accent
- `text-[#818CF8]` indigo : OK (5.98:1)
- `text-[#67E8F9]` cyan : OK (12.32:1)
- `text-[#A78BFA]` violet : À vérifier (peut-être trop faible)