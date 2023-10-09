# Test

Pour créer un test, il suffit de créer un fichier avec le nom du fichier à tester suivi de `_test.go`.

Par exemple, pour tester le fichier `main.go`, il faut créer le fichier `main_test.go`.

## Redaction des tests

Pour lancer des test, il faut d'abord les rédiger.

Pour ceci nous commencerons toujours par créer un slice de structure `test` qui contiendra les tests à effectuer.

Par exemple si j'ai cetet fonction :

```go
package main

func Add(a, b int) int {
    return a + b
}
```

Je vais créer un fichier `main_test.go` avec le contenu suivant :

```go
package main

import (
    "testing"
)

var tests = struct[] {
   name string // Le nom du test
   a, b int // Les paramètres de la fonction
   expected int // Le résultat attendu
   err bool // Si on attend une erreur
}{
   // Puis nous allons définir une batterie de test selon la struct ci-dessus :
   {"Test qui doit réussir", 1, 2, 3, false},
   {"Test qui doit échouer", 1, 2, 4, false},
   {"Test qui doit échouer", 1, 2, 3, true},
}
```

Ensuite nous allons créer une fonction `TestAdd` qui prendra en paramètre un pointeur vers un objet de type `testing.T` :

```go
package main

import (
    "testing"
)

var tests = struct[] {
   name string // Le nom du test
   a, b int // Les paramètres de la fonction
   expected int // Le résultat attendu
   err bool // Si on attend une erreur
}{
   // Puis nous allons définir une batterie de test selon la struct ci-dessus :
   {"Test qui doit réussir", 1, 2, 3, false},
   {"Test qui doit échouer", 1, 2, 4, false},
   {"Test qui doit échouer", 1, 2, 3, true},
}

func TestAdd(t *testing.T) {
    // On parcours les tests
    for _, test := range tests {
        // On appelle la fonction Add avec les paramètres du test
        result, err := Add(test.a, test.b)

        // Si on attend une erreur
        if test.err {
            // Si on a pas d'erreur, on indique que le test doit échouer
            if err == nil {
                t.Errorf("Test %s : Add(%d, %d) = %d, expected error", test.name, test.a, test.b, result)
            }
        } else {
            // Si on a une erreur, on indique que le test doit réussir
            if err != nil {
                t.Errorf("Test %s : Add(%d, %d) = %d, expected %d", test.name, test.a, test.b, result, test.expected)
            }
        }
    }
}
```

## Lancer les tests

Pour lancer les tests, il nous suffira d'utiliser la commande `go test` :
