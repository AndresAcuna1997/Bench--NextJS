El Middleware en Next.js se utiliza para interceptar y procesar solicitudes antes de que lleguen a las rutas o contenido en caché. Es ideal para redirecciones, reescrituras de URL, autenticación y más.

Este archivo tiene acceso a las cookies lo cual permite leer, configurar y eliminarla fácilmente

### Crear middleware

El archivo `middleware.ts` debe ubicarse en la raíz del proyecto (junto a `app`).

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Codigo
}
```

Como acceder a las cookies en un middleware:

```ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.cookies.set('user', 'active')
  return response
}
```

Respuestas desde un middleware

```ts
export function middleware(request: NextRequest) {
  return new NextResponse('Acceso denegado', { status: 403 })
}
```
### Matcher:

Matcher es un configuración especial la cual permite especificar que rutas se va a ejecutar el código del middleware

```ts
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```