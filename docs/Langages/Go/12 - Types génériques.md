# Types génériques

## Créer un type générique

En go il est possible de créer des types génériques avec le mot clé **interface**.
Ces types génériques définissent une liste de types qui peuvent être utilisés avec ce type générique.

Grâce à ces types génériques, il est possible de créer des fonctions qui peuvent être utilisées avec plusieurs types différents.

Exemple :

```go
// On définit un type générique qui peut être utilisé avec les types int et float64
type IntOrFloat interface {
    int | float64
}
```

## Utiliser un type générique avec une fonction

Pour utiliser un type générique avec une fonction, il faut définir le type générique dans la fonction.
Pour cela on utilsera un tableau sous cette forme : `[T Generic]` où `T` est le nom du type générique et `Generic` est le type générique que l'on placera avant les paramètres de la fonction.

```go
// Création d'une fonction générique
func printValue[T IntOrFloat](value T) {
   fmt.Println(value)
}

func main() {
   // On appelle la fonction printValue avec un int
   var a int = 1
   printValue(a) // -> 1

   // On appelle la fonction printValue avec un float64
   var b float64 = 1.5
   printValue(b) // -> 1.5

}

```

Il est également possible de définir les types directement dans la fonction :

```go
func printValue[T int | float64](value T) {
	fmt.Println(value)
}

// OU

func printValue[T interface{int | float64}](value T) {
	fmt.Println(value)
}
```

Cependant si l'on définit un type personnalité, l'appel de la fonction renverra une erreur :

```go
func main() {
   type f float64
   var a f = 1.5

   printValue(a) // -> f does not satisfy int | float64 (possibly missing ~ for float64 in int | float64)
}
```

Pour remédier à cela, il faut utiliser le symbole `~` devant le type personnalisé dans la définition du type générique :

```go
func printValue[T int | ~float64](value T) {
   fmt.Println(value)
}
```

Grâce à cela, tous les types qui implément le type float64 pourront être utilisés avec la fonction printValue.
