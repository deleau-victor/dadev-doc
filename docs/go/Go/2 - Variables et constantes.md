# Variables et constantes

## Les variables

### Créer une variable

Une variable est un espace mémoire qui contient une valeur et qui peut être modifiée.
A noter qu'il n'existe pas de types null en Go, une variable non initialisée aura la valeur zéro de son type.
La valeur zéro dépend du type de la variable :

- 0 pour les types numériques
- false pour les booléens
- "" pour les chaînes de caractères (une chaîne de caractère vide)
- nil pour les slices, les maps, les pointeurs, les fonctions et les interfaces

:::info

**Nil** est une valeur spéciale qui peut être assignée à n'importe quel type de données et qui signifie que la variable ne pointe vers aucune valeur.

:::

On peut utiliser différentes méthodes pour créer une variable :

- ```go
  // Création d'une variable de type entier
  var integer int // -> integer = 0
  ```

- ```go
  // Création d'une variable de type entier avec une initialisation
  var integer int = 1 // -> integer = 1
  ```

- ```go
  // Création d'une variable de type entier avec une affectation dynamique
  integer := 1 // -> integer = 1
  ```

On peut également créer plusieurs variables en même temps :

Avec des variables de **même type** :

```go
// Création de deux variables de type entier
var a, b int // -> a = 0, b = 0
```

Avec des variables de **types différents** :

```go
// Création de trois variables de types différents
var (
    a string // -> a = ""
    b int = 5 // -> b = 5
    c bool // -> c = false
)
```

## Les constantes

Une constante est un espace mémoire qui contient une valeur et qui ne peut pas être modifiée.
Contrairement aux variables, les constantes doivent être initialisées lors de leur création.

Pour créer une constante on utilise le mot clé **const** :

```go
  // Création d'une constante de type entier
  const integer int = 1 // -> integer = 1
```

On peut également créer plusieurs constantes en même temps :

Avec des constantes de **même type** :

```go
// Création de deux constantes de type entier
const a, b int = 1, 2 // -> a = 1, b = 2
```

Avec des constantes de **types différents** :

```go
// Création de trois constantes de types différents
const (
    a string = "Hello"
    b int = 5
    c bool = true
)
```

Il existe également un mot clé pour créer des constantes de type numérique
**iota** : permet de créer une suite de constantes numériques incrémentées de 1

Exemple :

```go
const (
    a = iota // -> a = 0
    b // -> b = 1
    d // -> _ = 2
    c // -> c = 3
)
```
