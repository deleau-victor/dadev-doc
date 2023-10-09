# Les Modules et packages

## Les modules

Un module est un ensemble de packages.

Un module est défini par un fichier `go.mod` à la racine du projet.
Ce fichier contient le nom du module ainsi que la version de Go utilisée.

Pour créer un module il suffit d'utiliser la commande `go mod init` suivi du nom du module.

Exemple :

```bash
go mod init github.com/username/project
```

## Les packages

Un package est un ensemble de fichiers Go qui partagent le même nom.
Les fichiers d'un même package peuvent accéder aux variables et fonctions déclarées dans les autres fichiers du package.
A noter que par défaut les packages prennent le nom du dossier dans lequel ils sont définis.

Le package `main` est un package spécial, il permet de créer un exécutable et doit obligatoirement contenir une fonction `main`.
le package main sera toujours utiliser dans les fichiers à la racine d'un projet.

Exemple :

```go
package main
```

### Importer un package

Pour importer un package il suffit d'utiliser le mot clé `import` suivi du nom du package.

Si le package est un package standard il suffit d'utiliser le nom du package.

Exemple :

```go
import "fmt"
```

Si le package est un package de votre module il suffit d'utiliser le nom du module suivi du nom du package.

Exemple :

```go
import "github.com/username/project/functions"
```

Vous aurez ainsi accès aux variables et fonctions déclarées dans le package.
