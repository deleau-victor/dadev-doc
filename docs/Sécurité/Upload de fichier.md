# Upload de fichier

## Sommaire

- [Introduction](#introduction)
- [Menaces liées à l'upload de fichier](#menaces-liées-à-lupload-de-fichier)
  - [Les fichiers malveillants](#les-fichiers-malveillants)
  - [Récupération de fichiers publics](#récupération-de-fichiers-publics)
- [Protection de l'upload de fichier](#protection-de-lupload-de-fichier)
  - [Validation des extensions](#validation-des-extensions)
    - [Liste des extensions autorisées](#liste-des-extensions-autorisées)
    - [Blocage des extensions](#blocage-des-extensions)
  - [Validation du type de contenu](#validation-du-type-de-contenu)
  - [Validation de la signature du fichier](#validation-de-la-signature-du-fichier)
  - [Génération de noms de fichier aléatoires](#génération-de-noms-de-fichier-aléatoires)
  - [Validation du contenu du fichier](#validation-du-contenu-du-fichier)
  - [Emplacement de stockage](#emplacement-de-stockage)
  - [Permissions basées sur le rôle](#permissions-basées-sur-le-rôle)
  - [Permissions basées sur le système](#permissions-basées-sur-le-système)
  - [Limites d'upload et de téléchargement](#limites-dupload-et-de-téléchargement)
- [Conclusion](#conclusion)

## Introduction

L'upload de fichiers devient quasiment essentiel dans toute application, permettant à l'utilisateur d'envoyer sa photo, son CV ou une vidéo. L'application doit être capable de se protéger contre les fichiers malveillants afin de garantir la sécurité de l'application et des utilisateurs.

En résumé, les principes suivants doivent être suivis pour une mise en œuvre sécurisée de l'upload de fichiers :

- **Listez les extensions autorisées : n'autoriser que les extensions nécessaires au fonctionnement de l'application.**
  - **Assurez que la validation de l'entrée utilisateur est appliquée avant de valider les extensions.**
- **Validez le type du fichier, en ne tenant pas compte de l'en-tête Content-Type car il peut être falsifié.**
- **Remplacer le nom de fichier par un nom unique généré par l'application.**
- **Définissez une limite de taille pour le nom de fichier. Restreignez également les caractères autorisés si possible.**
- **Définissez une limite de taille de fichier.**
- **N'autoriser que les utilisateurs autorisés à uploader des fichiers.**
- **Stockez les fichiers sur un serveur différent. Si ce n'est pas possible, stockez-les en dehors de la racine du site web.**
  - **Dans le cas d'un accès public aux fichiers, utiliser un gestionnaire qui est mappé à des noms de fichiers à l'intérieur de l'application (someid -> file.ext).**
  - **Faîtes passer le fichier par un antivirus ou un environnement d'exécution isolé s'il est disponible pour vérifier qu'il ne contient pas de données malveillantes.**
- **Veillez à ce que les bibliothèques utilisées soient configurées de manière sécurisée et maintenues à jour.**
- **Protégez l'upload de fichiers contre les attaques CSRF.**

## Menaces liées à l'upload de fichier

Afin d'évaluer et de savoir exactement quelles protections mettre en place, il est essentiel de connaître les risques liés à la fonctionnalité de l'upload de fichiers. Les sections suivantes présentent ces risques.

### Les fichiers malveillants

Les hackeurs peuvent utiliser l'upload de fichiers pour envoyer des fichier malveillants sur le serveur.
Ces fichiers peuvent être utilisés pour :

1. Exploiter des vulnérabilités dans l'analyseur de fichiers ou le module de traitement (par exemple, l'exploit ImageTrick, XXE).
2. Utiliser le fichier à des fins de hameçonnage (pishing).
3. Envoyer des bombes ZIP, des bombes XML (également connues sous le nom d'attaque des billions de rires) ou simplement de gros fichiers pour remplir le stockage du serveur, ce qui nuit à la disponibilité du serveur et la compromet.
4. Écraser un fichier existant sur le système.
5. Ajouter du contenu actif côté client (XSS, CSRF, etc.) qui pourrait mettre en danger d'autres utilisateurs si les fichiers sont publiquement accessibles.

### Récupération de fichiers publics

Si le fichier uploadé est accessible publiquement, des menaces supplémentaires peuvent survenir :

1. Divulgation publique d'autres fichiers.
2. Lancer une attaque DoS en demandant de nombreux fichiers. Les requêtes sont petites, mais les réponses sont beaucoup plus importantes.
3. Le contenu du fichier pourraît être considéré comme illégal, offensant ou dangereux (par exemple, données personnelles, données protégées par des droits d'auteur, etc.), ce qui ferait de vous un hébergeur de fichiers malveillants.

## Protection de l'upload de fichier

Il n'y a pas de solution miracle pour valider le contenu de l'utilisateur. Mettre en œuvre une approche de défense en profondeur est essentiel pour rendre le processus d'upload plus difficile à exploiter et mieux protégé en fonction des besoins et des exigences du service. Mettre en œuvre plusieurs techniques est recommandé, car aucune technique seule n'est suffisante pour sécuriser le service.

### Validation des extensions

Assurez-vous que la validation se produit après le décodage du nom de fichier et qu'un filtre approprié est mis en place pour éviter certaines tentatives de contournement connues, telles que :

- Double extension (`file.php.jpg`)
- Octets nuls (`file.php%00.jpg`) où .jpg est ignoré par le système d'exploitation et php devient l'extension du fichier.
- Regex incorrects (`file.php.jpg` est autorisé mais `file.php.jpg.gif` ne l'est pas).

#### Liste des extensions autorisées

Autorisez uniquement les extensions nécessaires pour répondre aux besoins de l'application et ne permettez aucun type d'extensions non requis. Par exemple, si le système nécessite :

- Des images, autorisez uniquement les extensions d'image (`.jpg`, `.png`, `.gif`, etc.).
- Des CV, autorisez uniquement les extensions de document (`.pdf`, `.doc`, `.docx`, `.odt`, etc.).

En fonction des besoins de l'application, assurez-vous de n'autoriser que les extensions nécessaires et de bloquer toutes les autres.

#### Blocage des extensions

Identifiez les types de fichiers potentiellement dangereux et bloquez les extensions que vous considérez comme dangereuses pour votre service.

Veuillez noter que le blocage d'extensions spécifiques est une mesure de protection faible en soi. La section sur la vulnérabilité de l'upload de fichiers sans restrictions décrit comment les hackeurs peuvent tenter de contourner ce type de vérification.

### Validation du type de contenu

Le type du contenu des fichiers uploadés est fourni par l'utilisateur et ne peut donc pas être considéré comme sûr, car il est facile à falsifier. Bien qu'il ne doive pas être utilisé comme mesure de sécurité, il permet de vérifier rapidement que les utilisateurs ne téléchargent pas accidentellement des fichiers avec le mauvais type.

Outre la définition de l'extension du fichier uploadé, son type MIME peut être vérifié pour une protection rapide contre les upload malveillants de fichiers simples.

Cela peut être fait de préférence avec une approche de liste d'autorisations ; sinon, cela peut être fait avec une approche de liste de blocage.

### Validation de la signature du fichier

En conjonction avec la validation du type du contenu, la validation de la signature du fichier peut être effectuée et vérifiée par rapport au fichier attendu.

Cela ne doit pas être utilisé seul, car il est courant et facile de le contourner.

### Génération de noms de fichier aléatoires

Les noms de fichiers peuvent mettre le système en danger de différentes manières, que ce soit en utilisant des caractères non acceptables ou en utilisant des noms de fichiers spéciaux et restreints. Pour Windows, reportez-vous au guide MSDN. Pour une vue d'ensemble plus large des différents systèmes de fichiers et de leur traitement des fichiers, consultez la page Wikipédia sur les noms de fichiers.

Afin d'éviter les menaces mentionnées ci-dessus, il est essentiel de créer un nom aléatoire en tant que nom de fichier, par exemple en générant un UUID/GUID. Si le nom de fichier est nécessaire pour les besoins de l'entreprise, une validation appropriée de l'entrée doit être effectuée pour les vecteurs d'attaque côté client (par exemple, contenu actif entraînant des attaques XSS et CSRF) et côté serveur (par exemple, écraser des fichiers spéciaux ou création de fichiers). Les limitations de taille des noms de fichiers doivent être prises en compte en fonction du système qui stocke les fichiers, car chaque système a sa propre limite de taille de nom de fichier. Si les noms des fichiers d'utilisateurs sont nécessaires, envisagez de mettre en œuvre les mesures suivantes :

- Limiter la taille du nom du fichier.
- Limiter les caractères autorisés dans le nom du fichier.

### Validation du contenu du fichier

Comme mentionné dans la section [Récupération de fichiers publics](#récupération-de-fichiers-publics), le contenu du fichier peut contenir des données malveillantes.

En fonction du type attendu, une validation spéciale du contenu du fichier peut être appliquée :

Pour les images, l'application de techniques de réécriture d'images permet de détruire tout contenu malveillant injecté dans une image ; cela peut être fait par randomisation.

Pour les documents Microsoft, l'utilisation d'Apache POI permet de valider les documents téléchargés.

Les fichiers ZIP ne sont pas recommandés car ils peuvent contenir tous types de fichiers et les vecteurs d'attaque liés à ceux-ci sont nombreux.

Le service de'upload de fichiers devrait permettre aux utilisateurs de signaler du contenu illégal et aux propriétaires de droits d'auteur de signaler des abus.

Si les ressources le permettent, un examen manuel des fichiers devrait être effectué dans un environnement sandbox avant de les rendre publics.

L'ajout d'une certaine automatisation à l'examen pourrait être utile, mais c'est un processus rigoureux qui doit être bien étudié avant son utilisation. Certains services (par exemple, VirusTotal) fournissent des API pour analyser les fichiers par rapport à des empreintes de fichiers malveillantes bien connues. Certains frameworks peuvent vérifier et valider le type de contenu brut en le comparant à des types de fichiers prédéfinis, comme dans la bibliothèque ASP.NET Drawing Library. Méfiez-vous des menaces de fuite de données et de collecte d'informations par le biais de services publics.

### Emplacement de stockage

L'emplacement où les fichiers doivent être stockés doit être choisi en fonction des exigences de sécurité et des besoins de l'entreprise. Les points suivants sont définis par ordre de priorité en matière de sécurité, et sont inclusifs :

1. Stocker les fichiers sur un serveur différent, ce qui permet une ségrégation complète des tâches entre l'application servant l'utilisateur et l'hôte gérant les téléchargements de fichiers et leur stockage.
2. Stocker les fichiers en dehors de la racine du site web, ce qui empêche les utilisateurs d'accéder directement aux fichiers.
3. Stocker les fichiers à l'intérieur de la racine du site web et les définir avec des permissions en écriture uniquement.
4. Si un accès en lecture est nécessaire, il convient de définir des contrôles appropriés (par exemple, IP interne, utilisateur autorisé, etc.).

Stocker les fichiers d'une manière étudiée dans des bases de données est une technique supplémentaire. Cela est parfois utilisé pour les processus de sauvegarde automatique, les attaques non liées au système de fichiers et les problèmes de permissions. En revanche, cela ouvre la porte à des problèmes de performances (dans certains cas), aux considérations de stockage pour la base de données et ses sauvegardes, et cela ouvre la porte aux attaques par injection SQL. Cette méthode est recommandée uniquement lorsque le service dispose d'un administrateur de bases de données (DBA) et que ce processus se révèle être une amélioration par rapport au stockage dans le système de fichiers.

### Permissions basées sur le rôle

Avant d'accéder à un service de téléchargement de fichiers, une validation appropriée doit être effectuée à deux niveaux pour l'utilisateur téléchargeant un fichier :

- Niveau d'authentification :
  - L'utilisateur est-il authentifié ?
- Niveau d'autorisation :
  - L'utilisateur est-il autorisé à télécharger des fichiers ?

### Permissions basées sur le système

Définir les permissions des fichiers selon le principe du moindre privilège.

Les fichiers doivent être stockés de manière à garantir que :

- Les utilisateurs du système autorisés sont les seuls à pouvoir lire les fichiers.
- Seules les autorisations requises sont définies pour le fichier.
  - Si l'exécution est nécessaire, il est nécessaire de scanner le fichier avant de l'exécuter, conformément aux meilleures pratiques de sécurité, afin de s'assurer qu'aucune macro ou aucun script caché n'est disponible.

### Limites d'upload et de téléchargement

L'application doit définir des limites appropriées pour le service d'upload afin de protéger la capacité de stockage des fichiers. Si le système va extraire les fichiers ou les traiter, la limite de taille du fichier doit être prise en compte

## Conclusion

L'upload de fichiers est une fonctionnalité essentielle pour de nombreuses applications. Cependant, il est souvent mal implémenté et peut entraîner de graves vulnérabilités dans l'application. Les développeurs doivent être conscients des risques liés à l'upload de fichiers et des mesures de sécurité à mettre en œuvre pour protéger l'application et les utilisateurs.
