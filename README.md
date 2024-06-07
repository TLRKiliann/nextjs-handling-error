# nextjs-handling-error

Handling error with NextJs 14

## Before starting

Use:

**$ pnpm run build**

otherwise, in dev mode, `thow new Error()` will not works.

## Most important points

- `reset()` doesn't works => useRouter => `router.back()` with btn (router.refresh() doesn't works too).

- `error.tsx` by segment is more granulary.

- `"use client"` have to be used from RCC that contains conditionnal `throw new Error("")`;

- function into error.tsx is named `ErrorBoundary`.

- notFound() have to be placed in RSC !