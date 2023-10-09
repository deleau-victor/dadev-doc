# Conditions et boucles

## Les conditions

Il existe deux types de conditions en Go : **if** et **switch**.

### La condition if

On utilisera simplement le mot clé **if** suivi de la condition pour déclarer une condition if.
Il est également possible d'utiliser les mot clés **else** et **else if** pour déclarer des conditions supplémentaires.

```go
if a == 1 {
    // Si a est égal à 1
} else if a == 2 {
    // Si a est égal à 2
} else {
    // Sinon
}
```

Il est également possible de déclarer une variable dans la condition if avec l'affectation dynamique.

```go
if a := 1; a == 1 {
    // ...
}
```

### La condition switch

On utilisera le mot clé **switch** suivi de l'expression à tester pour déclarer une condition switch, puis on déclarera les différents cas avec le mot clé **case**.

Le mot clé **default** permet de déclarer le cas par défaut si aucun des cas précédents n'est vérifié.

Par défaut, une condition switch ne teste que l'égalité :

```go
switch expression {
   case 1:
        // Si expression est égal à 1
   case 2:
        // Si expression est égal à 2
   default:
        // Sinon
      }
```

Mais il est également possible de tester d'autres conditions sans spécifier d'expression :

```go
switch {
   case a == 1:
      // ...
   case a == 2:
         // ...
   default:
         // ...
      }
```

## Les boucles

En Go, le seul type de boucle existant est la boucle **for**.
Il n'existe pas de boucle **while** et **do while** mais on peut les simuler avec une boucle **for**.

On peut utiliser le mot clé **break** pour sortir d'une boucle et le mot clé **continue** pour passer à l'itération suivante sans exécuter le reste du code de la boucle.

### Créer une boucle

Pour créer une boucle for, on utilise le mot clé **for**.

La boucle la plus basique est la boucle **for** avec une condition et un incrément :

```go
// Avec initialisation de variable
for i := 0; i < 10; i++ {
    // ...
}

// Sans initialisation de variable
var i int
for ; i < 10; i++ {
    // ...
}
```

Il est également possible de créer une boucle **for** sans condition et sans incrément :
Auquel cas la boucle sera infinie et il faudra utiliser un **break** pour en sortir.

```go
var i int

for {
    i++
} // Boucle infinie

for {
    if i == 10 {
        break
    }
    i++
} // Boucle contrôlée avec un break
```

Pour finir, il est possible de créer une boucle **for** avec une condition seulement :

```go
for i < 10 {
    // ...
}
```
