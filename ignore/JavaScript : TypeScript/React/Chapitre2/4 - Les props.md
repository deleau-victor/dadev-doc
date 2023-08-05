# 4 – Les props

## A – Qu'est-ce que sont les Props ?

Avec les composants, React nous met à disposition une propriété nommée **Props**, c'est un objet vide dans lequel on va pouvoir ajouter n'importe quelle valeur.

Pour y accéder dans le JSX nous procéderons de cette manière, grâce à des accolades nous appellerons la propriété props de la classe Title qui provient de l'extension Component de notre classe :

```tsx title=components/title.tsx
import { Component } from "react"

class Tilte extends Component {
	render = () => <h1>{this.props}</h1>
}

export default Tilte
```

## B – Définir le contenu de Props

Nous pouvons **définir le contenu de l'objet props**, nous pouvons alors lui ajouter des propriétés.

Ces propriétés pourront être **définies depuis le composant parent**, à aucun moment, les différentes propriétés de props ne seront initialisé dans le composant lui-même.

Par exemple nous pouvons ajouter la propriété "title" qui sera de type string à nos composant de cette manière :

```tsx title=components/title.tsx
type Props = {
	content: string
}

class Tilte extends Component<Props> {
	render = () => <h1>{this.props.content}</h1>
}
```

:::info
Pour ajouter une propriété à props en TypeScript, il est nécessaire de **créer un type** pour props qui contiendra toutes les propriétés de props ainsi que leur type.
:::

## C – Utiliser les Props

Nous pouvons alors utiliser cette propriété dans app.tsx sur le composant **Title** en appelant **la propriété content** dans la balise. Bien évidemment, si l'on définit une props avec le nom "content" dans notre composant, il faudra utiliser le nom de celle-ci dans notre balise.

```tsx title=components/title.tsx
class App extends Component {
	render = () => (
		<>
			<Tilte content='Hello World' />
			<p>It is {new Date().toLocaleTimeString()}</p>
		</>
	)
}
```

Vous devriez maintenant voir "Hello World" s'afficher sur votre page !
Vous pouvez modifier cette valeur à votre guise. Remarquez également que vous pouvez dupliquer votre composant et attribuer des valeurs distinctes à ceux-ci.

## D – La propriété Children

Il est également possible de passer des noeuds JSX dans les composants à travers des props.

Il est possible de faire passer des noeuds JSX directement dans les Props mais il existe une propriété particulière qui est prévue pour retourner des noeuds JSX directement dans notre composant en créant sa **balise fermante** et en appelant la props **children** dans notre composant.

Pour illustrer cela nous allons créer un nouveau composant "Article" dans lequel nous appellerons la propriété **children** :

```tsx title=components/article.tsx
import React, { Component, PropsWithChildren } from "react"

export default class article extends Component<PropsWithChildren> {
	render() {
		return <article>{this.props.children}</article>
	}
}
```

Aparté sur le typage de la propriété children
Plutôt que de créer un type dans lequel nous définirons ce que renvoie la props children nous utiliserons le type **"PropsWithChildren"** qui nous est fournis par react comme dans l'exemple ci-dessus afin d'éviter de se retrouver avec ce type d'interface :

```tsx title=components/article.tsx
type articleProps: {
	children: React.ReactNode | React.ReactNode[] | string | JSX.Element | JSX.Element[]
}
```

S'il vous est nécessaire de faire passer d'autres props que children nous étendrons le type **"PropsWithChildren"** avec un generics de cette manière :

```tsx title=components/article.tsx
import React, { Component, PropsWithChildren } from "react"

type articleProps: {
	title: string
}

export default class article extends Component<PropsWithChildren<articleProps>> {
	render() {
		return (
			<article>
				<h1>{this.props.title}</h1>
				{this.props.children}
			</article>
		)
	}
}

```

Enfin pour utiliser cette fameuse propriété children il suffit de faire passer le noeud ou les noeuds JSX que l'on souhaite entre la balise ouvrante et la balise fermante de notre composant :

```tsx title=app.tsx
class App extends Component {
	render = () => (
		<>
			<Tilte content='Hello World' />
			<p>It is {new Date().toLocaleTimeString()}</p>
			<Article>
				<p>Je suis la propriété children du composant "Article"</p>
				<p>Je le suis également</p>
			</Article>
		</>
	)
}
```
