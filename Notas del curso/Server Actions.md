Las **Server Actions** permiten ejecutar código directamente en el servidor sin necesidad de configurar manualmente una ruta de API. En algunos casos, incluso funcionan si JavaScript está deshabilitado en el navegador.

#### ¿Cómo crear una Server Action?

Una Server Action es una función que debe incluir la directiva `'use server'`. Aquí un ejemplo básico:

```tsx
const Home = async () => {
  const update = async (data) => {
    'use server'
    const email = data.get('email')
    // Realizar alguna acción con el email
  }

  return (
    <form action={update}>
      <input name="email" type="email" />
      <button type="submit">Suscribirse</button>
    </form>
  )
}
```

Se puede hacer cualquier acción dentro de la Server Action, pero **no se puede esperar un valor de retorno**. Por eso son ideales para realizar tareas que no necesitan dar una respuesta directa al cliente, como actualizaciones o efectos secundarios.