#### Section 486.

Para utilizar los iconos del archivo MainHeader.jsx instalar

`npm i react-icons`

Estos iconos se utilizan como un componente.

e.g.

`<MdMessage />
<MdPostAdd size={18} />
`
Nota:
Como convención es bueno utilizar el prefijo on cuando se quiere indicar en el nombre de una función que esta es una función.

e.g.

`<Modal onClose={onStopPosting}>`

##### Adding a Backend to the React SPA

Es importante poner a correr el backend para que se pueda conectar con el frontend.

Y cuando se hace una solicitud POST se debe ir al BE y en el archivo posts.json se puede ver la información que se envío al BE.

[Respuesta POST](./src/assets/respuesta-post.jpg)
