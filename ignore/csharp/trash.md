### Autres types

#### Enumérations

Les énumérations sont des types de données qui permettent de définir un ensemble de constantes nommées du type entier.
Pour définir une énumération, on utilise le mot clé `enum` suivi du nom de l'énumération et de ses valeurs.

```cs
enum Couleur
{
    Rouge, // 0
    Vert, // 1
    Bleu // 2
}
```

Par défaut, les valeurs de l'énumération sont de type `int`, elles commencent à 0 et s'incrémentent de 1.

Il est possible de spécifier une valeur pour chaque élément de l'énumération.

```cs
enum Couleur
{
    Rouge = 10,
    Vert = 20,
    Bleu = 30
}
```

##### Enumérations comme indicateurs binaires

Si vous souhaitez qu'un type d'énumération représente une combinaison de choix, définissez ses valeurs comme des puissances de deux distinctes (1, 2, 4, 8, etc.). Chaque valeur représente un seul bit qui peut être activé ou désactivé. Il faut également lui appliquer l'attribut `Flags`.

Vous pourrez alors utiliser les opérateurs binaires pour combiner des choix ou croiser des combinaisons de choix.

```cs
[Flags]
public enum Days
{
   None = 0b_0000_0000,  // 0
   Monday = 0b_0000_0001,  // 1
   Tuesday = 0b_0000_0010,  // 2
   Wednesday = 0b_0000_0100,  // 4
   Thursday = 0b_0000_1000,  // 8
   Friday = 0b_0001_0000,  // 16
   Saturday = 0b_0010_0000,  // 32
   Sunday = 0b_0100_0000,  // 64
   Weekend = Saturday | Sunday
}

public class FlagsEnumExample
{
   public static void main()
   {
      Days meetingDays = Days.Monday | Days.Wednesday | Days.Friday;
      Console.WriteLine(meetingDays);
      // Output:
      // Monday, Wednesday, Friday

      Days workingFromHomeDays = Days.Thursday | Days.Friday;
      Console.WriteLine($"Join a meeting by phone on {meetingDays & workingFromHomeDays}");
      // Output:
      // Join a meeting by phone on Friday

      bool isMeetingOnTuesday = (meetingDays & Days.Tuesday) == Days.Tuesday;
      Console.WriteLine($"Is there a meeting on Tuesday: {isMeetingOnTuesday}");
      // Output:
      // Is there a meeting on Tuesday: False

      var a = (Days)37; // 37 = 32 + 4 + 1 = Saturday + Wednesday + Monday
      Console.WriteLine(a);
      // Output:
      // Monday, Wednesday, Saturday
   }
}
```

#### Les structures

Les structures sont des types de données qui permettent de définir un ensemble de champs.
Pour définir une structure, on utilise le mot clé `struct` suivi du nom de la structure et de ses champs.

```cs
struct Point
{
    public int X;
    public int Y;
}
```

Les structures sont des types de données qui sont passés par valeur et non par référence.

En règle générale, vous utilisez des types de structure pour concevoir de petits types centrés sur les données qui n'ont pas de comportement. Par exemple, les types de structure sont appropriés pour représenter des points dans un système de coordonnées ou des valeurs de pixels dans une image, mais pas pour représenter un employé dans une entreprise, car un employé a un comportement tel que le calcul de la rémunération. Envisagez plutôt d'utiliser une classe pour des données avec un comportement.

Si vous concevez un type de structure, considérez la possibilité de déclarer la structure comme `readonly` pour éviter que les membres de la structure ne soient modifiés après la création de la structure.

#### Les tuples

Les tuples sont des types de données qui permettent de regrouper plusieurs éléments de types différents.
Pour définir un tuple, on utilise des parenthèses `()` et on sépare les éléments par des virgules `,`.

```cs
(int, int) tuple1 = (1, 2);
Console.WriteLine($"Le tuple1 contient ${tuple1.Count} éléments et sa somme est {tuple1.Sum}");
// Output:
// Le tuple1 contient 2 éléments et sa somme est 3

(double, float, int) tuple2 = (1.5, 2.5f, 3);
Console.WriteLine($"Un tuple avec 3 éléments : ${tuple2.Item1}, ${tuple2.Item2}, ${tuple2.Item3}");
// Output:
// Un tuple avec 3 éléments : 1.5, 2.5, 3
```

Le cas d'usage le plus courant des tuples est de retourner plusieurs valeurs d'une méthode.

```cs
(int, int) GetMinMax(int[] array)
{
    int min = array[0];
    int max = array[0];

    for (int i = 1; i < array.Length; i++)
    {
        if (array[i] < min)
        {
            min = array[i];
        }
        else if (array[i] > max)
        {
            max = array[i];
        }
    }

    return (min, max);
}
```
