# Type de données et opérateurs

## Installation

Télécharger le fichier d'installation sur le site officiel : https://go.dev/dl/

## Les types de données

### Les types de base

| **Type**   | **Description**      |
| ---------- | -------------------- |
| **bool**   | true ou false        |
| **string** | chaîne de caractères |

### Les types numériques

Il existe 4 familles de types numériques :

- les entiers
- les entiers non signés (exclusivement positifs)
- les flottants
- les complexes

#### Les entiers

| **Type**         | **Taille** | **Description**              | **Valeurs possibles**                      |
| ---------------- | ---------- | ---------------------------- | ------------------------------------------ |
| **uint8 / byte** | 8 bits     | entier non signé sur 8 bits  | 0 à 255                                    |
| **uint16**       | 16 bits    | entier non signé sur 16 bits | 0 à 65535                                  |
| **uint32**       | 32 bits    | entier non signé sur 32 bits | 0 à 4294967295                             |
| **uint64**       | 64 bits    | entier non signé sur 64 bits | 0 à 18446744073709551615                   |
| **int8**         | 8 bits     | entier signé sur 8 bits      | -128 à 127                                 |
| **int16**        | 16 bits    | entier signé sur 16 bits     | -32768 à 32767                             |
| **int32 / rune** | 32 bits    | entier signé sur 32 bits     | -2147483648 à 2147483647                   |
| **int64**        | 64 bits    | entier signé sur 64 bits     | -9223372036854775808 à 9223372036854775807 |

#### Les flottants

| **Type**    | **Taille** | **Description**      | **Précision**         |
| ----------- | ---------- | -------------------- | --------------------- |
| **float32** | 32 bits    | flottant sur 32 bits | 7 chiffres décimales  |
| **float64** | 64 bits    | flottant sur 64 bits | 15 chiffres décimales |

#### Les complexes

| **Type**       | **Taille** | **Description**       |
| -------------- | ---------- | --------------------- |
| **complex64**  | 64 bits    | complexe sur 64 bits  |
| **complex128** | 128 bits   | complexe sur 128 bits |

:::info

Il existe également des types numériques dynamiques qui diffèrent selon l'architecture du système utilisé :

- **int** : entier signé sur 32 ou 64 bits
- **uint** : entier non signé sur 32 ou 64 bits

Ce sont ces types qui seront le plus souvent utilisés.

:::

## Les Opérateurs

### Les opérateurs arithmétiques

| **Opérateur** | **Description** | **Exemple** |
| ------------- | --------------- | ----------- |
| **+**         | Addition        | 1 + 2 = 3   |
| **-**         | Soustraction    | 1 - 2 = -1  |
| **\***        | Multiplication  | 1 \* 2 = 2  |
| **/**         | Division        | 1 / 2 = 0   |
| **%**         | Modulo          | 1 % 2 = 1   |

### Les opérateurs de comparaison

| **Opérateur** | **Description**   | **Exemple** |
| ------------- | ----------------- | ----------- |
| **==**        | Egal              | 1 == 2      |
| **!=**        | Différent         | 1 != 2      |
| **<**         | Inférieur         | 1 < 2       |
| **<=**        | Inférieur ou égal | 1 <= 2      |
| **>**         | Supérieur         | 1 > 2       |
| **>=**        | Supérieur ou égal | 1 >= 2      |

### Les opérateurs logiques

| **Opérateur** | **Description** | **Exemple**        |
| ------------- | --------------- | ------------------ |
| **&&**        | ET              | 1 == 1 && 2 == 2   |
| **\|\|**      | OU              | 1 == 1 \|\| 1 == 2 |
| **!**         | NON             | !(1 == 1)          |

### Les opérateurs d'incrémentation et de décrémentation

| **Opérateur** | **Description** | **Exemple** |
| ------------- | --------------- | ----------- |
| **++**        | Incrémentation  | a++         |
| **--**        | Décrémentation  | a--         |

### Les opérateurs d'affectation

| **Opérateur** | **Description** | **Exemple** |
| ------------- | --------------- | ----------- |
| **=**         | Affectation     | a = 1       |
| **+=**        | Addition        | a += 1      |
| **-=**        | Soustraction    | a -= 1      |
| **\*=**       | Multiplication  | a \*= 1     |
| **/=**        | Division        | a /= 1      |
| **%=**        | Modulo          | a %= 1      |
