# 9 – Remonter une information

Nous avons pour l'instant vu comment faire passer une information d'un composant parent à un composant enfant avec les props. Nous allons maintenant voir comment faire remonter une information d'un composant enfant à un composant parent.

## A – Comment faire remonter une information ?

Nous allons maintenant créer un nouveau composant que l'on nommera Button, nous souhaitons maintenant transmettre l'évènement de clic au composant parent.

Pour cela, nous allons utiliser une props qui contiendra une fonction, cette même fonction sera elle chargée d'exécuter la fonction "handleDisplayClock" qui se trouve dans notre composant parent.

Nous procéderons donc de cette manière :

```tsx title=components/button.tsx
type Props = {
	onClick: () => void
}

export default class Button extends Component<PropsWithChildren<Props>> {
	state = {}

	render() {
		return (
			<button onClick={() => this.props.onClick()}>
				{this.props.children}
			</button>
		)
	}
}
```

```tsx title=app.tsx
type Props = {}

type State = {
	isVisible: boolean
}

class App extends Component<Props, State> {
	state = {
		isVisible: false,
	}

	handleDisplayClock = () => {
		this.setState({ isVisible: !this.state.isVisible })
	}

	render = () => (
		<>
			<Tilte content='Hello World' />
			{this.state.isVisible && <Clock />}
			<Article>
				<p>Je suis la propriété children du composant "Article"</p>
			</Article>
			<Button onClick={() => this.handleDisplayClock()}>
				Cliquer ici !
			</Button>
		</>
	)
}
```

De cette manière, nous faisons remonter l'information que le bouton a été cliqué au composant parent qui exécutera alors la fonction "handleDisplayClock". C'est donc avec les fonctions que nous faisons remonter des informations
