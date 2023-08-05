# Scope et pointeur

## Le scope

Le scope est la portée d'une variable, c'est à dire l'endroit où elle est accessible.

### Le scope global

Une variable déclarée en dehors de toute fonction est une variable globale, elle est accessible partout dans le package courant.

Exemple :

```go
// main.go
package main

var a int = 1

// exemple.go
func main() {
    fmt.Println(a) // -> 1
}
```

### Le scope local

Une variable déclarée dans une fonction est une variable locale, elle est accessible uniquement dans la fonction courante.

Exemple :

```go
func main() {
    var a int = 1
    fmt.Println(a) // -> 1
}

func exemple() {
   fmt.Println(a) // -> Erreur : a n'est pas défini
}
```

### Le scope de bloc

Une variable déclarée dans un bloc est une variable de bloc, elle est accessible uniquement dans le bloc courant.

Exemple :

```go
func main() {
    if true {
        var a int = 1
        fmt.Println(a) // -> 1
    }
    fmt.Println(a) // -> Erreur : a n'est pas défini
}
```

## Les pointeurs

Un pointeur est une variable qui contient l'adresse d'une autre variable.

### Pourquoi utiliser des pointeurs ?

Les pointeurs permettent de modifier une variable déclarée dans un autre scope.

En go on distingue deux opérations :

- **Le passage par valeur** : une copie de la variable est passée en paramètre.
- **Le passage par référence** : l'adresse de la variable est passée en paramètre.

:::info

Par défaut, les variables sont passées par **valeur** sauf pour les **maps, les slices et les fonctions** qui sont toujours passées par **référence**.

:::

Avec un passage par valeur, la variable originale n'est pas modifiée, elle est copiée dans une nouvelle variable qui sera modifiée dans son scope.

Exemple :

```go
func increment(number int) {
   number++ // -> number = 2
}

func main() {
   number := 1
   // Passage par valeur
   increment(number)
   fmt.Println(number) // -> 1
}
```

Pour modifier la variable originale, il faudra passer par référence, c'est à dire passer l'adresse de la variable en paramètre, ce que permettent les pointeurs.

### Créer un pointeur

Pour créer un pointeur on utilise le symbole **&** suivi du nom de la variable.
On notera que le type du pointeur correspond au type de la variable précédé de **\***.

```go
var variable int = 1 // -> a = 1
var pointeur *int = &a // -> b = 0x1040a124
```

le pointeur contient alors l'adresse de la variable ce qui permet de la modifier directement même depuis un autre scope.

Il faut également noter que les pointeurs peuvent être nil, c'est à dire qu'ils ne pointent sur aucune variable.

```go
var pointeur *int // -> pointeur = nil
```

### Utiliser un pointeur

Pour utiliser un pointeur on utilise le symbole **\*** suivi du nom du pointeur.

Nous allons reprendre l'exemple précédent en modifiant la fonction increment pour qu'elle prenne un pointeur en paramètre.

```go
func increment(number *int) {
   *number++ // -> number = 2
}

func main() {
   number := 1
   // Passage par référence
   increment(&number)
   fmt.Println(number) // -> 2
}
```

Ici l'original est modifié car on utilise le pointeur pour modifier la valeur de la variable hors de son scope.
