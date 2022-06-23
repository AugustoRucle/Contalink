# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Preguntas

- ¿Como determinas si una cadena de texto es un palíndromo?
(Un palíndromo es una palabra que al leerla al revés dice lo mismo. Ej. “Reconocer”)
** Tomo la cadena de texto, en este caso es "Reconocer".

** Con la cadena de texto actual hago un recorrido de manera inversa, es decir, recorro apartir de la ultima letra, tomo esta letra y voy generando una nueva cadena de texto.

** Una vez terminado el recorrido comparo mi nueva cadena con la primera y si ambas son la misma palabra entonces decimos que es un "palindromo" en otro caso no lo es.

- Dado un arreglo de enteros, ¿Como determinas cual es el segundo más grande de todos esos enteros?
** Identifico si hay numeros repetidos en dado caso de que exitan, los elimino para que asi solo tenga números unicos

** Despues comparo el primer número del arreglo con un valor, en este caso "0" (se tomando un número más inferior a cualquier otra en el arreglo)
    ** Si ese número es mayor entonces tomo ese número como el más grande y el anterior valor de mi número mayor como el 
    segundo más grande

    ** Prosigo con el siguiente número, en dado caso que el siguiente número no sea mayor que mi número mas grande entonces lo comparo con mi segundo número más grande y si este es mayor entonces tomo ese número cómo el segundo mayor

    ** Repito este proceso hasta acabar con los números

** La estretegia fue tomár un numéro mayor y si este es actualizado entonces sabemos que su valor anterior es el segundo mayor que existe

- ¿Como determinas si dos cadenas de texto son anagramas?
(Un anagrama es cuando dos palabras contienen exactamente los mismos caracteres pero en diferente orden. Ej. Acuerdo – Ecuador)

** Primero identifico si ambas cadenas tiene el mismo tamaño ya que si no cumple con esta condición entonces no es un "anagrama"

** Lo segundo seria recorrer las cadenas de textos e ir tomando nota o almacenando de alguna manera la cantidad de veces que cada letra o caracter se repite en cada cadena de texto

** Sabiendo entonces cuentas veces se repite cada letra, entonces analizamos el número de veces que se repite cada letra de tal forma que si encontramos al menos una letra que tiene mas o menos veces peticiones que la otra entonces sabemos que no es un "anagrama"
