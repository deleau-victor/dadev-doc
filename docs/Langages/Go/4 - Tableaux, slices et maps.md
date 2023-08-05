# Tableaux, Slices et Maps

## Les tableaux et les slices

Les tableaux et les slices sont des structures permettant de stocker des collections d'éléments.
Cependant, ils diffèrent dans leur nature et dans leur utilisation.

Un tableau est une collection d'éléments de même type à taille fixe non modifiable.
Tandis qu'un slice est une collection d'éléments de même type à taille non définie et modifiable.

### Créer un tableau

Il est possible de créer un tableau de différentes manières telles que :

- ```go
  // Déclaration du tableau et de sa taille
  var list [2]int
  // Assignation des valeurs
  a[0] = 1 // -> list = [1, 0]
  a[1] = 2 // -> list = [1, 2]
  ```

- ```go
  // Déclaration du tableau et de sa taille avec assignation directe des valeurs
  var list = [2]int{1, 2} // -> list = [1, 2]
  ```

- ```go
  // Il est également possible de laisser le compilateur définir la taille du tableau
  // Attention, cela ne signifie pas que la taille du tableau est modifiable
  var list = [...]int{1, 2} // -> list = [1, 2]
  ```

- ```go
  // Création d'un tableau avec une affectation dynamique
  list := [2]int{1, 2} // -> list = [1, 2]
  ```

### Utiliser un tableau

On peut accéder à un élément d'un tableau en utilisant son index.

```go
var list [2]int = [2]int{1, 2}
// Accès à l'élément d'index 0 du tableau
fmt.Println(list[0])
```

On peut également récupérer la taille d'un tableau.

```go
 list := [2]int{1, 2}
 // Récupérer la taille du tableau
 len(list) // -> 2
```

Enfin, il possible de parcourir un tableau avec une boucle for.

```go
 // Parcourir le tableau dans une boucle avec la méthode range
 for index, value := range list {
  fmt.Println(index, value)
 }
```

### Créer un slice

Passons maintenant aux slices.
La création d'un slice est similaire à celle d'un tableau, cependant, lors de la déclaration, on ne définit pas forcément sa taille et celle-ci reste variable.

Les slices peuvent utiliser les mêmes méthodes que les tableaux, cependant, ils peuvent également utiliser la méthode **append** qui permet d'ajouter un élément à la fin du slice.

On utilisera la méthode **make** pour créer un slice, ce qui permettra de configurer les paramètres du slice et de leur réserver de l'espace mémoire.

La méthode **make** prend en paramètre le type du slice, la taille du slice et optionnellement la capacité du slice.
La taille indiquée initialise le slice avec des valeurs par défaut afin de remplir le slice.
La **capcité** correspond à la taille maximale que peut atteindre le slice avant de devoir réallouer de l'espace mémoire, par défaut si la capacité n'est pas spécifiée, elle est de la taille du slice.

On peut utiliser ces différentes méthodes pour créer un slice :

- ```go
  // Création d'un slice contenant des entiers de taille 0
  var list = make([]int, 0)
  // Utilisation de la méthode append pour ajouter des éléments au slice
  list = append(list, 1) // -> list = [1]
  list = append(list, 2) // -> list = [1, 2]
  ```

- ```go
  // Création d'un slice contenant des entiers avec une taille de 2 et une capacité de 2
  var list = make([]int, 2, 2)
  // Utilisation de la méthode append pour ajouter des éléments au slice
  list = append(list, 1, 2) // -> list = [1, 2]
  list = append(list, 3) // -> list = [1, 2, 3] (la capacité du slice est atteinte et le slice est réalloué)
  ```

- ```go
  // Création d'un slice avec une affectation dynamique
  list := append(make([]int, 0), 1, 2, 3, 4) // -> list = [1, 2, 3, 4]
  ```

## Les maps

Une map est une structure permettant de stocker des données sous forme de clé/valeur.
Les clés et les valeurs peuvent être de n'importe quel type.
Elle est similaire à une table de hashage ou un dictionnaire.

Comme pour les slices, on utilisera la méthode **make** pour créer une map, la seule différence est que l'on ne peut pas spécifier la capacité de la map en paramètre et que la taille est optionnelle.

### Créer une map

On peut créer une map de différentes manières telles que :

- ```go
  // Création d'une map avec des clés de type string et des valeurs de type int
  var list = make(map[string]int)
  list["a"] = 1 // -> list["a"] = 1
  list["b"] = 2 // -> list["b"] = 2
  ```

- ```go
  // Création d'une map avec affectation dynamique de taille 2
  list := make(map[string]int, 2)
  list["a"] = 1 // -> list["a"] = 1
  list["b"] = 2 // -> list["b"] = 2
  ```

- ```go
  // Déclaration d'une map sans make avec assignation directe des valeurs.
  list := map[string]int{
  "a": 1,
  "b": 2,
  }
  ```

### Utiliser une map

On peut accéder à une valeur d'une map en utilisant sa clé.

```go
list := map[string]int{
 "a": 1,
 "b": 2,
}
// Accès à la valeur de la clé "a"
fmt.Println(list["a"])
```

On peut également récupérer la taille d'une map.

```go
list := map[string]int{
 "a": 1,
 "b": 2,
}

// Récupérer la taille de la map
len(list) // -> 2
```

Enfin, il possible de parcourir une map avec une boucle for.

```go
list := map[string]int{
 "a": 1,
 "b": 2,
}

// Parcourir la map dans une boucle avec la méthode range
for key, value := range list {
 fmt.Println(key, value)
}
```
