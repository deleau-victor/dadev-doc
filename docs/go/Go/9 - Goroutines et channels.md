# Les goroutines et channels

## Les goroutines

Une goroutine est une fonction qui s'exécute en parallèle d'autres fonctions, elle est donc asynchrone.

Pour créer une goroutine il suffit d'ajouter le mot clé `go` devant l'appel de la fonction.

Exemple :

```go
package main

import (
   "fmt"
   "time"
)

func main() {
   // Exécution de la fonction sayHello avec une goroutine
   go printNumbers()

   // Exécution d'une fonction sans goroutine
   for i := 0; i <= 5; i++ {
      fmt.Println("Main function", i)
      time.Sleep(1 * time.Second)
   }

   // On quelques secondes pour que la goroutine se termine
   time.Sleep(3 * time.Second)

}

func printNumbers() {
   for i := 0; i <= 5; i++ {
      fmt.Println(i)
      time.Sleep(1 * time.Second)
   }
}
```

Dans cet exemple la fonction `printNumbers` est exécutée en parallèle de la fonction `main`.
Les deux fonctions s'exécutent donc en même temps, en l'éxecutant vous devriez obtenir le résultat suivant ou un résultat similaire :

```bash
0
Main function 0
1
Main function 1
2
Main function 2
3
Main function 3
4
Main function 4
5
Main function 5
```

Les deux fonctions s'éxécutent donc bien en parallèle.
A noter qu'ici nous avons utiliser la fonction `Sleep` du package `time` à la fin de la fonction `main` pour attendre que la goroutine se termine.
Dans un cas réel il faudra utiliser des channels pour attendre la fin de l'exécution d'une goroutine.
Ce que nous allons voir à la suite.

## Les channels

Un channel (canal en français) est un mécanisme de communication et de synchronisation qui permet l'échange de données entre goroutines.
Il agit comme un tuyau dans lequel on peut envoyer et recevoir des données.

Un channel peut être utilisé pour envoyer des données d'une goroutine à une autre de manière synchronisée.
Cela signifie que lorsque qu'une goroutine envoie des données dans un channel, elles seront bloquées jusqu'à ce qu'une autre goroutine les récupère.
De même lorsque qu'une goroutine tente de récupérer des données dans un channel, elle sera bloquée jusqu'à ce qu'une autre goroutine envoie des données dans le channel.

### Créer un channel

Pour créer un channel il suffit d'utiliser la fonction `make` du package `make` suivi du mot clé `chan` et du type de données que l'on souhaite envoyer dans le channel.

Exemple :

```go
package main

func main() {
   // Création d'un channel de type string
   channel := make(chan string)
}
```

### Utiliser un channel

Pour envoyer des données dans un channel il suffit d'utiliser le mot clé `chan` suivi du nom du channel et du mot clé `<-` suivi des données à envoyer.
Pour récupérer des données dans un channel il suffit d'utiliser le mot clé `<-` suivi du nom du channel.

Exemple :

```go
package main

import (
   "fmt"
   "time"
)

func main() {
   // Création d'un channel de type int
   intChannel := make(chan int)

   // Goroutine qui envoie une donnée dans le channel
   go func() {
      // Envoi d'une donnée dans le channel
      intChannel <- 16
   }()

   // Récupération de la donnée dans le channel
   value := <-intChannel

   fmt.Println(value) // Affiche la valeur reçue : 16
}
```

Dans cet exemple nous avons créé un channel de type `int` puis nous avons créé une goroutine qui envoie la valeur `16` dans le channel.
Ensuite nous récupérons la valeur envoyée dans le channel et nous l'affichons.

### Le mot clé "defer"

Le mot clé `defer` permet de reporter l'exécution d'une fonction jusqu'à la fin de l'exécution de la fonction courante.
Il est souvent utilisé pour fermer des fichiers ou des channels.

Exemple :

```go
package main

import (
   "fmt"
   "time"
)

func main() {
   // Création d'un channel de type int
   intChannel := make(chan int)

   // Goroutine qui envoie une donnée dans le channel
   go func() {
      // Envoi d'une donnée dans le channel
      intChannel <- 16
   }()

   // Récupération de la donnée dans le channel
   value := <-intChannel

   fmt.Println(value) // Affiche la valeur reçue : 16

   // Fermeture du channel
   defer close(intChannel)
}
```

Dans cet exemple nous avons utilisé le mot clé `defer` pour fermer le channel à la fin de l'exécution de la fonction `main`.

### Les channels bufferisés

Un channel bufferisé est un channel qui peut contenir plusieurs valeurs.

Pour créer un channel bufferisé il suffit d'utiliser la fonction `make` du package `make` suivi du mot clé `chan` et du type de données que l'on souhaite envoyer dans le channel suivi du nombre de valeurs que l'on souhaite pouvoir stocker dans le channel.

Exemple :

```go
package main

import (
   "fmt"
   "time"
)

func main() {
   // Création d'un channel bufferisé de type int
   intChannel := make(chan int, 2)

   // Envoi de deux valeurs dans le channel
   intChannel <- 16
   intChannel <- 32

   // Récupération des deux valeurs dans le channel
   value1 := <-intChannel
   value2 := <-intChannel

   fmt.Println(value1) // Affiche la valeur reçue : 16
   fmt.Println(value2) // Affiche la valeur reçue : 32
}
```
