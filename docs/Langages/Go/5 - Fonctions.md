# Les fonctions

## Créer une fonction

Les fonctions sont créées avec le mot clé **func** suivi du nom de la fonction, des paramètres et du type de retour.
Les fonctions peuvent avoir plusieurs paramètres et plusieurs retours.
A noter qu'il est possible de nommer les retours.

Exemple :

```go
// Fonction sans paramètre et sans retour.
func hello() {
    fmt.Println("Hello World")
}

// Fonction avec un paramètre et sans retour.
func sayHello(name string) {
    fmt.Println("Hello", name)
}

// Fonction avec deux paramètres et un retour.
func add(a int, b int) int {
    return a + b
}

// Fonction avec deux paramètres et plusieurs retours.
func add(a int, b int) (int, int) {
    return a + b, a - b
}

// Fonction avec deux paramètres et un retour nommé.
func add(a int, b int) (result int) {
    result = a + b
    return
}
```

## Fonctions anonymes

On peut également créer des fonctions anonymes qui peuvent être appelées directement après leur création.

```go
func main() {
    // Fonction anonyme sans paramètre et sans retour.
    func() {
        fmt.Println("Hello World")
    }() // -> Hello World

    // Fonction anonyme avec un paramètre et sans retour.
    func(name string) {
        fmt.Println("Hello", name)
    }("John") // -> Hello John

    // Fonction anonyme avec un paramètre et un retour.
    func(a int, b int) int {
        return a + b
    }(1, 2) // -> 3

}
```

Il est cepandant plus courant de stocker la fonction anonyme dans une variable, afin de pouvoir l'utiliser plus tard.
Ce qui peut être une autre façon de créer une fonction nommée.

```go
// Sans affectation dynamique
var sayHello = func(name string) {
    fmt.Println("Hello", name)
}

// Avec affectation dynamique
sayHello := func(name string) {
    fmt.Println("Hello", name)
}
```

## Appeler une fonction

Pour appeler une fonction, on utilise son nom suivi des paramètres entre parenthèses.

```go
hello() // -> Hello World
sayHello("John") // -> Hello John
add(1, 2) // -> 3
```
