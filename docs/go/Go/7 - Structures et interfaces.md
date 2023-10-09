## Structures et interfaces

## Les structures

Une structure est un type qui permet de de définir un ensemble de champs pour représenter un objet.
On peut le voir comme l'interface d'un objet en programmation orientée objet.

### Créer une structure

Pour créer une structure, on utilise le mot clé `type` suivi du nom de la structure, du mot clé `struct` et des champs de la structure.

par exemple :

```go
type Person struct {
    Name string
    Age int
}
```

### Utiliser une structure

On peut ensuite utiliser cette structure comme un type de données.

```go
func main() {
    // Création d'une variable de type Person avec les valeurs "John" et 25
    person := Person{Name: "John", Age: 25}

    fmt.Println(person.Name) // Affiche "John"
    fmt.Println(person.Age) // Affiche 25
}
```

### Associer des méthodes à une structure

Il est également possible d'associer des méthodes à une structure.
Pour cela il suffit de définir une fonction avec comme premier paramètre le nom de la structure ainsi que d'un pointeur vers la structure.
Il est possible de ne pas utiliser de pointeur, mais dans ce cas la structure sera copiée à chaque appel de la méthode et cela peut engendre une baisse de performance.

```go
package main

import (
    "fmt"
)

// Création d'une structure Person
type Person struct {
    Name string
    Age int
}

// Associe la méthode GetName à la structure Person
func (p *Person) GetName() string {
    return p.Name
}

func main() {
    // Création d'une variable de type Person avec les valeurs "John" et 25
    person := Person{Name: "John", Age: 25}

    fmt.Println(person.GetName()) // Affiche "John"
}
```

## Les interfaces

Une interface est un type qui permet de définir un ensemble de méthodes.
On peut le voir comme l'interface d'une classe en programmation orientée objet.

### Créer une interface

Pour créer une interface, on utilise le mot clé `type` suivi du nom de l'interface, du mot clé `interface` et des méthodes de l'interface.

par exemple :

```go
type Person interface {
    GetName() string
    GetAge() int
}
```

### Utiliser une interface

On peut ensuite utiliser cette interface comme un type de données.

```go
package main

import (
    "fmt"
)

// Création d'une interface IPerson
type IPerson interface {
    GetName() string
    GetAge() int
}

// Création d'une structure Person
type Person struct {
    Name string
    Age int
}

// Associe la méthode GetName à la structure Person
func (p *Person) GetName() string {
    return p.Name
}

// Associe la méthode GetAge à la structure Person
func (p *Person) GetAge() int {
    return p.Age
}

func main() {
    // Création d'une variable de type Person avec les valeurs "John" et 25
    person := Person{Name: "John", Age: 25}

    // Création d'une variable de type IPerson avec la valeur de la variable person
    var iPerson IPerson = person

    fmt.Println(iPerson.GetName()) // Affiche "John"
    fmt.Println(iPerson.GetAge()) // Affiche 25
}
```
