import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "var(--color-tertiary-500)",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #328739 
		"--color-primary-50": "224 237 225", // #e0ede1
		"--color-primary-100": "214 231 215", // #d6e7d7
		"--color-primary-200": "204 225 206", // #cce1ce
		"--color-primary-300": "173 207 176", // #adcfb0
		"--color-primary-400": "112 171 116", // #70ab74
		"--color-primary-500": "50 135 57", // #328739
		"--color-primary-600": "45 122 51", // #2d7a33
		"--color-primary-700": "38 101 43", // #26652b
		"--color-primary-800": "30 81 34", // #1e5122
		"--color-primary-900": "25 66 28", // #19421c
		// secondary | #F1F2E7 
		"--color-secondary-50": "253 253 251", // #fdfdfb
		"--color-secondary-100": "252 252 250", // #fcfcfa
		"--color-secondary-200": "252 252 249", // #fcfcf9
		"--color-secondary-300": "249 250 245", // #f9faf5
		"--color-secondary-400": "245 246 238", // #f5f6ee
		"--color-secondary-500": "241 242 231", // #F1F2E7
		"--color-secondary-600": "217 218 208", // #d9dad0
		"--color-secondary-700": "181 182 173", // #b5b6ad
		"--color-secondary-800": "145 145 139", // #91918b
		"--color-secondary-900": "118 119 113", // #767771
		// tertiary | #473D32 
		"--color-tertiary-50": "227 226 224", // #e3e2e0
		"--color-tertiary-100": "218 216 214", // #dad8d6
		"--color-tertiary-200": "209 207 204", // #d1cfcc
		"--color-tertiary-300": "181 177 173", // #b5b1ad
		"--color-tertiary-400": "126 119 112", // #7e7770
		"--color-tertiary-500": "71 61 50", // #473D32
		"--color-tertiary-600": "64 55 45", // #40372d
		"--color-tertiary-700": "53 46 38", // #352e26
		"--color-tertiary-800": "43 37 30", // #2b251e
		"--color-tertiary-900": "35 30 25", // #231e19
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
		
	}
}