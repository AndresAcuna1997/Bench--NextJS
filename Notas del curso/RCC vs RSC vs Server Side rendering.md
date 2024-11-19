
#### SSR (Server-Side Rendering)

El SSR mejora el renderizando la página inicial en el servidor. Sin embargo, la interactividad no está disponible inmediatamente, ya que el navegador debe descargar el bundle de JavaScript para habilitarla.

#### RSC (React Server Components)

Los RSC permiten escribir componentes que se ejecutan en el servidor y envían su salida al cliente de manera optimizada. Se dividen en dos tipos:

1. **Componentes del servidor**: Renderizados en el servidor. No manejan interactividad como clics o entradas de teclado ni utilizan hooks como `useState` o `useEffect`.
2. **Componentes del cliente**: Renderizados en el navegador, diseñados para manejar interactividad.

**Ventajas de RSC**:

- **Streaming desde el servidor**: El servidor envía los componentes del cliente como JavaScript, mientras que los del servidor ya están renderizados.
- **Bundles más pequeños**: Solo se descarga el código necesario para los componentes interactivos, acelerando el tiempo para la interactividad (**TTI**, _Time to Interactive_).

#### RSC vs. SSR

Aunque ambos realizan renderizado en el servidor, tienen diferencias clave:

- **SSR**:
    
    - Renderiza en el servidor solo durante la carga inicial.
    - El navegador descarga JavaScript para toda la aplicación, como en una SPA.
    - Menos eficiente en rendimiento debido al mayor tamaño del bundle.
- **RSC**:
    
    - Stream continuo desde el servidor.
    - Menor tamaño de los bundles y tiempos de carga más rápidos.
    - Mejor experiencia de usuario gracias a una interactividad más rápida.

