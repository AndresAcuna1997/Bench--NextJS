
Next JS posee un router integrado el cual corresponde a las carpetas dentro del folder `app` en la raíz del proyecto.

Si deseamos crear una ruta como lo es por ejemplo `/dashboard` simplemente debemos crear una carpeta y un archivo llamado `page.tsx` esto creara la ruta y ya podrá ser accedida desde el navegador.

### Archivos reservados dentro del app router

1. **page**: Este es el contenido de la pagina, solo puede haber una en el mismo nivel si existe mas de un `page.tsx` en una carpeta puede llevar a comportamientos inesperados
2. **loading**: En caso de que el contenido sea dinámico y requiera de recursos externos (e.g Http request, server action) el loading se mostrara automáticamente mientras el contenido es cargado.
3. **layout**: Archivo el cual recibe un prop llamado `children` los cuales son componentes JSX. Este archivo es un componente que va a servir como padre al contenido del `page.tsx` del mismo nivel y a todos los componentes que este alberga. Pueden existir layouts anidados, estos son útiles para reutilizar una interfaz en varias paginas como un nav, también se pueden consultar datos que puedan llegar a ser necesarios en varios hijos del layout
4. **error**: Similar al loading es un archivo que cuando se presente un error o excepción durante el proceso se mostrara automáticamente, en este se puede  extraer un prop el cual permite intentar cargar la ruta que fallo

### Rutas dinámicas

Next.js permite la creación de rutas dinámicas para manejar escenarios donde los segmentos de las rutas dependen de datos o no se conocen de antemano. Para declarar un segmento dinámico, se utiliza un nombre de carpeta entre corchetes, por ejemplo, `[nombreCarpeta]`. Estos segmentos dinámicos se pasan como el prop `params` a las funciones de layout, page, route y generateMetadata.

#### Ejemplo básico: Rutas dinámicas con un slug

Para una aplicación de blog donde cada post tiene un slug único, se puede estructurar la ruta como `app/blog/[slug]/page.js`. El segmento dinámico `[slug]` representa el post individual, y este parámetro puede usarse para obtener y mostrar datos del post.

```tsx
app/blog/[slug]/page.js 

export default async function Post({ params }) 
{ return <div>{params.slug}</div>; }
```

#### Optimización con `generateStaticParams`

La función `generateStaticParams` permite pre-renderizar rutas dinámicas en tiempo de compilación, mejorando los tiempos de carga al evitar cálculos o solicitudes en tiempo real.

#### Segmentos "catch-all"

Para capturar múltiples segmentos en una misma ruta, Next.js utiliza segmentos "catch-all", representados con tres puntos dentro de los corchetes `[...nombreCarpeta]`. Esto es útil para estructuras de URL más complejas, como categorías anidadas.

Por ejemplo, en una plataforma de compras:

- Ruta: `app/shop/[...categories]/page.js`
- Coincidiría con URLs como `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.

```tsx
 Dentro de app/shop/[...categories]/page.js 
 export default function Category({ params }) {   
 // params.categories es un array como ['clothes', 'tops', 't-shirts']   
 return <div>{params.categories.join(',')}</div>; }
```
#### Segmentos "catch-all" opcionales

Para hacer que el segmento sea opcional, se usan corchetes dobles `[[...nombreCarpeta]]`. Esto permite que la ruta funcione incluso si no se proporciona un parámetro. Por ejemplo, `app/shop/[[...categories]]/page.js` coincidirá con:

- `/shop`
- `/shop/clothes`
- `/shop/clothes/tops`
- `/shop/clothes/tops/t-shirts`

#### TypeScript en rutas dinámicas

Con TypeScript, puedes definir tipos para los parámetros de las rutas, proporcionando seguridad de tipos y evitando errores en tiempo de ejecución.

Las rutas dinámicas de Next.js ofrecen una estructura de routing flexible y eficiente, ideal para gestionar diversas necesidades de enrutamiento en aplicaciones modernas.