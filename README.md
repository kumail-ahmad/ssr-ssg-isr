This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## SSR - Server Side Rendering

This is default behaviour

## SSG - Static Site Generation

Any content which does not have network calls is a static page by default

## ISG or ISR

fetch in next.js caches the response
To opt out use:

```
export const dynamic = 'force-dynamic';
```

However, there are exceptions, fetch requests are not cached when:

- Used inside a Server Action.
- Used inside a Route Handler that uses the POST method.

### ENVIRONMENTAL VARIABLES IN NEXT JS

The environmental variables in nextJS have the following precidence over each other :

1.  env.local

```
process.env.NEXT_PUBLIC_EMAIL
process.env.NEXT_PUBLIC_ID
```

2.  env (normal) This is secret

```
ID=5
EMAIL="secret.faulkner@icloud.com"
NAME="Hailey Faulkner"
```
