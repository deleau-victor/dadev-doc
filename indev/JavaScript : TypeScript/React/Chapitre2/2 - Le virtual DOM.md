# 2 – Le virtual DOM

## A – Qu'est-ce que le virtual DOM ?

React crée ce que l'on appelle un **virtual DOM** qui est bien distinct du DOM du navigateur.

React prépare un DOM virtuel avant d'envoyer le DOM Réel au navigateur ce qui va permettre de contrôler précisément chaque élément de manière indépendante afin que React gère les mises à jour effectuées dans le DOM en cherchant à les minimiser pour un gain optimal de performance.

Ceci permet également de porter les applications react vers d'autres contexte que le navigateur telles que des applications mobiles ou de bureau.

## B – Comprendre le virtual DOM

Pour mieux comprendre ceci nous allons prendre un exemple.

Nous allons tout d'abord créer une fonction qui contiendra notre route.render() que l'on appellera DisplayTime et nous viendrons afficher l'heure actuelle :

```tsx title=index.tsx
const DisplayTime = () => {
	root.render(
		<div>
			<p>Time will display below</p>
			<p>It is {new Date().toLocaleTimeString()}</p>
		</div>,
	)
}

DisplayTime()
```

:::note Rappel
Afin de démarrer le serveur de développement il faut utiliser la commande :

```bash
$ npm start
```

:::

Si nous nous rendons sur notre page, nous verrons notre texte ainsi que l'heure actuelle s'afficher.

Nous souhaiterions cependant que l'heure se mette à jour à chaque seconde, pour cela, nous allons utiliser un 'setInterval()' :

```tsx title=index.tsx
const DisplayTime = () => {
	root.render(
		<div>
			<p>Time will display below</p>
			<p>It is {new Date().toLocaleTimeString()}</p>
		</div>,
	)
}

setInterval(DisplayTime, 1000)
```

Notre heure se met maintenant à jour chaque seconde.

On pourrait ici croire que tout notre JSX est re-rendu chaque seconde, si l'on avait beaucoup de composant ou beaucoup de contenu à l'intérieur de ce rendu, cela pourrait poser des problèmes de performance.

Cependant, grâce au virtual DOM, react va pouvoir faire la différence entre **ce qui est mis à jour et ce qui n'est pas mis à jour**. Ainsi, react va faire des opérations de comparaison, va comparer un état précédent avec un état actuel et quelle partie du contenu a changée ne mettant celle-ci à jour.
