# 1 – La syntaxe JSX

## A – Qu'est-ce que le JSX ?

La syntaxe **JSX** est une **extension syntaxique du JavaScript** elle permet de créer des éléments HTML au sein même du javascript et de les manipuler aisément.

Pour illustrer ceci, prenons un exemple :

Nous souhaitons rajouter de manière dynamique du texte dans un élément HTML grâce à JavaScript

Nous précèderions de cette manière avec HTML et JavaScript :

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Exemple texte dynamique</title>
	</head>
	<body>
		<div id="container"></div>

		<script>
			const container = document.getElementById("container")
			const paragraph = document.createElement("p")
			const content = document.createTextNode("Hello World !")
			paragraph.appendChild(content)
			container.appendChild(paragraph)
		</script>
	</body>
</html>
```

En JSX nous procèderons comme ceci :

```tsx title=index.tsx
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<p>Hello World !</p>)
```

Ceci n'est bien évidemment pas du HTML mais du JSX, ce texte pourrait tout aussi bien être dans une variable :

```tsx title=index.tsx
const monTexte = <p>Hello World !</p>

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(monTexte)
```

Pour bien comprendre comment cela fonctionne, dans les exemples précédents, nous avons utilisés la fonction ReactDOM.createRoot().

ReactDOM.createRoot() est une méthode fournie par la librairie ReactDOM, cette méthode va donc aller chercher l'élément HTML ayant l'ID "root" qui constitue l'élément racine de notre application et nous donner accès à des méthodes.

Nous pouvons alors utiliser la méthode .render(), cette méthode va utiliser le JSX entré en tant paramètre pour rendre la vue en HTML.

L'utilisation de ces méthodes n'est nécessaire qu'afin de rendre le composant principal de notre application, tous les autres composants ne seront formés que de JSX et l'appel de cette méthode ne sera pas nécessaire. Cette méthode est d'ailleurs pré-réalisée dans le fichier 'index.tsx' lors de la création d'un projet avec create-react-app.

## B – Comment fonctionne le JSX ?

Le JSX n'est pas naturellement interprétable par notre navigateur.

React utilise donc la librairie **Babel** qui permet de traduire le JSX en un code intelligible par le navigateur.

Ce code intelligible est parfaitement réalisable par nous-même.

Par exemple ce code :

```tsx
const section = (
	<section id='section'>
		<h1 className='title'>Hello world !</h1>
		<p>Lorem, ipsum</p>
	</section>
)
```

deviendra après la traduction par Babel :

```tsx
const mainTitle = React.createElement(
	"h1",
	{ className: "section" },
	"Hello world !",
)
const paragraph = React.createElement("p", {}, "Lorem, ipsum")
const section = React.createElement("section", { id: "section" }, [
	mainTitle,
	paragraph,
])
```

Un élément JSX correspond à la fonction **React.createElement()** qui en premier argument va prendre le nom de l'élément HTML (balise) qui sera créé, en deuxième argument un objet qui aura pour clés les noms des attributs HTML que l'on souhaite ajouter et leurs valeurs en tant que valeurs et en troisième argument la valeur du contenu de l'élément HTML qui peut aussi être un tableau d'éléments.

Cette syntaxe bien que naturellement intelligible par le navigateur n'est pas pratique à utiliser et c'est ce pourquoi le JSX est disponible afin de nous simplifier la tâche.

## C – Les attributs en JSX

Comme en HTML, nous pouvons ajouter des attributs à nos balise tels que 'id', 'class'... toujours de la même manière qu'en HTML, nous viendrons placer ces attributs directement dans la balise.

:::caution Attention aux attributs
Il faut cependant faire attention car certains attributs n'ont pas le même nom en JSX, par exemple, **'class'** deviendra **'className'**
:::

## D – Utiliser du javascript dans le JSX

Il est possible de manipuler directement les éléments du DOM en JSX.

Si nous souhaitions afficher un prénom selon une variable, nous pourrions simplement utiliser des accolades dans le JSX afin de pouvoir utiliser du JavaScript directement dans celui.

Nous procéderons donc de cette manière :

```tsx
const fisrtName = "John"

const section = (
	<section>
		<h1>Hello {firstName}!</h1>
	</section>
)
```
