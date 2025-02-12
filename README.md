# Roberto's :

    "dev": "next dev -p 1234",
    npm cache clean --force  -> antes de cada "npm run dev"

"dependencies": {
"next": "^13.0.7",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"swr": "^2.0.0",
"dotenv": "^16.4.7",
"mongodb": "^3.6.4",
"postcss": "^8.5.1"
}

# Roberto's

yarn add postcss
Error encontraado:  
PROBLEMA:<Link legacyBehavior href={props.link}>
SOLUCION <Link legacyBehavior href={`{$props.link}`}>
https://stackoverflow.com/questions/66821351/nextjs-error-message-failed-prop-type-the-prop-href-expects-a-string-or-o

# Roberto's : how to use Styled Components in Next

https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
yarn add styled-components

## en next.config.js:

module.exports = {
compiler: {
styledComponents: true,
},
}

## en lib/registriy.js:

'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
// Only create stylesheet once with lazy initial state
// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

useServerInsertedHTML(() => {
const styles = styledComponentsStyleSheet.getStyleElement()
styledComponentsStyleSheet.instance.clearTag()
return <>{styles}</>
})

if (typeof window !== 'undefined') return <>{children}</>

return (
<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
{children}
</StyleSheetManager>
)
}

## en \_document.js:

import Document, { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '../lib/registry';
class MyDocument extends Document {
render() {
return (

<Html lang="en">
<Head />
<body>
<StyledComponentsRegistry>
<div id="overlays" />
<Main />
<NextScript />
</StyledComponentsRegistry>
</body>
</Html>
);
}
}
export default MyDocument;

# Roberto's migrar de React a Next

https://apiumhub.com/es/tech-blog-barcelona/migrando-proyecto-react-js-a-next-js/

copio index.css a styles/globals.css
copio lo de dentro de public de React a public de next (imagenes ,pdf,.ico. index.html)
copio carpeta components de React a node con el nombre de components-react
copio App.js de React como index-react.js en Next
copio el index.css de React a styles/index-react.css de Next
en Next \_app.js: import '../styles/index-react.css';
copio de package.json de React a Next aquellos paquetes que no esten y no añadiendo react-router-dom y react-scripts
<img -> <Image width={160} height={160} -> el Image es de next/image

Cambia todas las variables de: REACT*APP* al prefijo NEXT*PUBLIC*.

Si quieres mover tu proyecto a un SPA, puedes mover tu index.html a una ruta genérica que se llame: pages/[[[...app]]].js..

# Roberto's

## Problema:

error Error: getaddrinfo ENOTFOUND registry.yarnpkg.com
at GetAddrInfoReqWrap.onlookupall [as oncomplete]

## Solucion:

sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

"dev": "next dev --turbo",

# Roberto's :

    "dev": "next dev -p 1234",
    npm cache clean --force  -> antes de cada "npm run dev"

"dependencies": {
"next": "^13.0.7",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"swr": "^2.0.0",
"dotenv": "^16.4.7",
"mongodb": "^3.6.4",
"postcss": "^8.5.1"
}

# Roberto's

yarn add postcss
Error encontraado:  
PROBLEMA:<Link legacyBehavior href={props.link}>
SOLUCION <Link legacyBehavior href={`{$props.link}`}>
https://stackoverflow.com/questions/66821351/nextjs-error-message-failed-prop-type-the-prop-href-expects-a-string-or-o

# Roberto's : how to use Styled Components in Next

https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
yarn add styled-components

## en next.config.js:

module.exports = {
compiler: {
styledComponents: true,
},
}

## en lib/registriy.js:

'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
// Only create stylesheet once with lazy initial state
// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

useServerInsertedHTML(() => {
const styles = styledComponentsStyleSheet.getStyleElement()
styledComponentsStyleSheet.instance.clearTag()
return <>{styles}</>
})

if (typeof window !== 'undefined') return <>{children}</>

return (
< sheet={styledComponentsStyleSheet.instance}>
{children}
</>
)
}

## en \_document.js:

import Document, { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '../lib/registry';
class MyDocument extends Document {
render() {
return (

<Html lang="en">
<Head />
<body>
<StyledComponentsRegistry>
<div id="overlays" />
<Main />
<NextScript />
</StyledComponentsRegistry>
</body>
</Html>
);
}
}
export default MyDocument;

# Roberto's migrar de React a Next

https://apiumhub.com/es/tech-blog-barcelona/migrando-proyecto-react-js-a-next-js/

copio index.css a styles/globals.css
copio lo de dentro de public de React a public de next (imagenes ,pdf,.ico. index.html)
copio carpeta components de React a node con el nombre de components-react
copio App.js de React como index-react.js en Next
copio el index.css de React a styles/index-react.css de Next
en Next \_app.js: import '../styles/index-react.css';
copio de package.json de React a Next aquellos paquetes que no esten y no añadiendo react-router-dom y react-scripts
<img -> <Image width={160} height={160} -> el Image es de next/image

Cambia todas las variables de: REACT*APP* al prefijo NEXT*PUBLIC*.

Si quieres mover tu proyecto a un SPA, puedes mover tu index.html a una ruta genérica que se llame: pages/[[[...app]]].js..

# Roberto's

## Problema:

error Error: getaddrinfo ENOTFOUND registry.yarnpkg.com
at GetAddrInfoReqWrap.onlookupall [as oncomplete]

## Solucion:

sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

"dev": "next dev --turbo",

## Problema:

'bar' no es boolean

## Solucion:

!!props.bar ?

# Styled components en anext 14

https://medium.com/zestgeek/how-to-set-up-styled-components-with-next-js-14-51f7baf3e627

# Problema:

parece que no se puede pasar un booleano como prop y se debe pasar como string "false" o "true"

# solucions:

usar versión 5 de styled components

# Poblema

No funciona el carrusel en Slider.jsx

# solucion:

añado 'use client' pq no funciona para next pero si para react.
    "react-slick": "^0.22.3",
I am using next 14.1.4 and react-slick 0.30.2 and this solved the issue for me

yarn add @next/codemod@latest