---
nav_order: 2
permalink: v0.1.6/prefsclass/
title: PREFS class
version: v0.1.6
---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Init

```python
PREFS.PREFS(self, prefs: dict, filename: str="prefs", extension: str="prefs", separator: str="=", ender: str="\n", continuer: str=">",
interpret: bool=True, dictionary: bool=False, verbose: bool=False, cascade: bool=True):
```

```python
prefs (dict): A dictionary with the default preferences.
filename (str, optional="prefs"): The name of the file (supports path).
extension (str, optinal="prefs"): The extension of the file.
separator (str, optional="="): The character between pref and value in the file.
ender (str, optional="\n"): The character at the end of each pref:value.
continuer (str, optional=">"): The character that precede a tree/cascade (nested dictionary).
interpret (bool, optional=True): Interpret the value stored as python.
dictionary (bool, optional=False): Writes the prefs as a python dictionary, no more human-readable (avoid any error at reading).
verbose (bool, optional=False): Print logs all operations.
cascade (bool, optional=True): Stores nested dictionaries as tree/cascade.
```

## Attributes

Ignoring the init parameters.

### `file`

Easier way to acces to the PREFS file. Has the same value as `ReadPrefs()`.  
Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en"
    })

print(UserPrefs.file)

>>> {'theme': 'light', 'lang': 'en'}
```

## Methods

### `ReadPrefs()`

```python
ReadPrefs() -> dict
```

Reads the PREFS file and returns it's value.

Arguments:
Doesn't require any arguments.  
Returns:
A dictionary reading the PREFS file.

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    })


print(UserPrefs.ReadPrefs())

>>> {'theme': 'light', 'lang': 'en'}
```

### `WritePrefs()`

```python
WritePrefs(pref: str, value: any) -> None
```

Reads the PREFS file and changes the given key to the given value.

Arguments:

-   `pref (str)`: The name of the pref to modify or create if it doesn't exist.
-   `value (any)`: The value to assign to the given pref.

Returns:  
`None`

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

print(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it
>>> en

UserPrefs.WritePrefs("lang", "es") # Changing the lang value from en to es

print(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it
>>> es
```

To change the value of a nested dictionary pass a path of keys to find the value you want.
Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}

UserPrefs.WritePrefs("keybindings/Copy", "Ctrl+D") # Changing the Copy value inside the dictionary keybindings inside the PREFS file from Ctrll+C to Ctrl+D

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}
```

Another example creating a new pref in a nested dictionary:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}

UserPrefs.WritePrefs("keybindings/Quit", "Ctrl+Q") # Creating the Quit pref inside keybindings dictionary inside the PREFS file with Ctrl+Q as value

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X', 'Quit': 'Ctrl+Q'}
```

### `OverWritePrefs()`

```python
OverWritePrefs(prefs: dict=None) -> None
```

Overwrites the PREFS file with the default PREFS, if passed dictionary in prefs parameter overwrites PREFS file with these.

Arguments:

-   `prefs (dict, optional=None)`: A dictionary to overwrites the PREFS file with, if passed `None` overwrites PREFS file with default PREFS.

Returns:
`None`

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance


UserPrefs.OverWritePrefs() # Overwriting the PREFS file with the default PREFS

print(UserPrefs.file) # Getting PREFS with file attribute and printing it

>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}

UserPrefs.WritePrefs("lang", "es") # Changing the lang value from en to es

print(UserPrefs.file) # Getting PREFS with file attribute and printing it

>>> {'theme': 'light', 'lang': 'es', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}

```

The first time we run the above example the program will do this:

-   Define an instance of the PREFS class and pass a default PREFS
-   Overwrite the PREFS file with the default ones.
-   Print the PREFS file
-   Change the `lang` pref from en to es
-   Print again the PREFS file.

The second time will do this:

-   Define an instance of the PREFS class and pass a default PREFS
-   Overwrite the PREFS file that contains the modified `lang` pref with the default PREFS.

So the program will always has the same output because we overwrite the old PREFS with the default PREFS.

### `ChangeFilename()`

```python
ChangeFilename(filename: str) -> None
```

This method will change the name of the PREFS file if it exists.  
But when you init the PREFS instance you have passed another value in filename so if you don't change that value to new name of the file, PREFS will search for the old filename and create a new one because he couldn't find the old one.

Arguments:

-   `filename (str)`: The new filename of the PREFS file.

Returns: `None`

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

UserPrefs.ChangeFilename("otherFilename") # Chaning the name of the PREFS file from prefs to otherFilename

```

### `DeleteFile()`

```python
DeleteFile() -> None
```

Deletes the PREFS file if it exists.

Arguments: `None`  
Returns: `None`

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

UserPrefs.DeleteFile() # Delete the PREFS file

```

### `ConvertToJson()`

```python
ConvertToJson(filename: str="", extension: str="json") -> None
```

Converts the PREFS file into a JSON file.

Arguments:

-   `filename (str, optional="")`: The name of the JSON file, if empty the same name of the PREFS file.
-   `extension (str, optional="json")`: The extension of the JSON file, json as default.

Returns:
`None`

Example:

```python
import PREFS

UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an PREFS instance

UserPrefs.ConvertToJson() # Covnerts the PREFS file into a JSON one

```