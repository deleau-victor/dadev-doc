# Manipuler du Json

En go il est possible de manipuler du Json grâce au package `encoding/json`.

## Encoder du Json

Pour encoder du Json, il suffit d'utiliser la fonction `json.Marshal` en lui passant en paramètre un type de données.

```go
package main

import (
   "encoding/json"
   "fmt"
)

func main() {
   // Création d'une variable de type map[string]string
   var person map[string]string = map[string]string{
      "name": "John",
      "age":  "25",
   }

   // Encodage de la variable person en Json
   jsonPerson, err := json.Marshal(person)
   if err != nil {
      fmt.Println(err)
   }

   // Affichage du Json
   fmt.Println(string(jsonPerson)) // Affiche {"age":"25","name":"John"}
}
```

## Décoder du Json

Pour décoder du Json, il suffit d'utiliser la fonction `json.Unmarshal` en lui passant en paramètre un tableau de bytes et un pointeur vers un type de données.

```go
package main

import (
   "encoding/json"
   "fmt"
)

func main() {
   // mock de Json
   jsonMock := `
{
   "name": "John",
   "age":  "25",
}`

   // Création d'une variable de type []byte
   var jsonPerson []byte = []byte(jsonMock)

   // Création d'une variable de type map[string]string
   var person map[string]string

   // Décodage du Json dans la variable person
   err := json.Unmarshal(jsonPerson, &person)
   if err != nil {
      fmt.Println(err)
   }

   // Affichage de la variable person
   fmt.Println(person) // Affiche map[age:25 name:John]
}
```
