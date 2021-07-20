---
nav_order: 3
permalink: v0.1.7/outsideprefsclass/
title: Outside PREFS class
version: v0.1.7
---

<!-- <link rel="stylesheet" href="/css/monokai.css" type="text/css" /> -->

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# PREFS class

# Outside PREFS class

## Methods outside PREFS class

Methods that aren't inside the PREFS class.

---
### `ReadJsonFile()`

```python
ReadJsonFile(filename: str, extension: str="json") -> any
```

Reads a JSON file and returns it's value.

Arguments:

-   `filename (str)`: The name of JSON file to read.
-   `extension (str, optional="json")`: The extension of the file to read, json as default.

Example:

```python
import PREFS

prefs = PREFS.ReadJsonFile("someJSONFile") # Read someJSONFile and store it's value in prefs
JSONPrefs = PREFS.PREFS(prefs, filename="jsonPrefs") # Create an instance of the PREFS class using a json file as input for the prefs argument
```

---
### `ReadPREFSFile()`

```python
ReadPrefs(filename: str, extension: str="prefs", separator: str="=", ender: str="\n", continuer: str=">", 
		interpret: bool=True, dictionary: bool=False, verbose: bool=False, cascade: bool=True) -> dict
```

Given the filename of PREFS file returns it's value.

The arguments are the almost the same as PREFS class.

Arguments:

- `filename (str, optional="prefs")`: The name of the file (supports path).
- `extension (str, optinal="prefs")`: The extension of the file.
- `separator (str, optional="=")`: The character between pref and value in the file.
- `ender (str, optional="\n")`: The character at the end of each pref:value.
- `continuer (str, optional=">")`: The character that precede a tree/cascade (nested dictionary).
- `interpret (bool, optional=True)`: Interpret the value stored as python.
- `dictionary (bool, optional=False)`: Writes the prefs as a python dictionary, no more human-readable (avoid any error at reading).
- `verbose (bool, optional=False)`: Print logs all operations.
- `cascade (bool, optional=True)`: Stores nested dictionaries as tree/cascade.

Returns:
	A dictionary with the PREFS of the given PREFS filename.

Example:

```python
import PREFS

# Instead of doing this
"""UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en"
    })"""

# Create manually a PREFS file with the default PREFS
UserPrefs = PREFS.PREFS(prefs = PREFS.ReadPREFSFile("prefs"))

print(UserPrefs.file)

>>> {'theme': 'light', 'lang': 'en'}
```

This is the `prefs` file given as the default PREFS:
```python
#PREFS
theme='light'
lang='en'
```

---
### `ConvertToPREFS()`
```python
ConvertToPREFS(prefs: dict, separator: str="=", ender: str="\n", continuer: str=">", 
        interpret: bool=True, dictionary: bool=False, verbose: bool=False, cascade: bool=True) -> str
```

Converts the given dictionary into PREFS format and returns it as string:

Arguments:

- `prefs (dict)`: A dictionary with the default preferences.
- `separator (str, optional="=")`: The character between pref and value in the file.
- `ender (str, optional="\n")`: The character at the end of each pref:value.
- `continuer (str, optional=">")`: The character that precede a tree/cascade (nested dictionary).
- `dictionary (bool, optional=False)`: Writes the prefs as a python dictionary, no more human-readable (avoid any error at reading).
- `verbose (bool, optional=False)`: Print logs all operations.
- `cascade (bool, optional=True)`: Stores nested dictionaries as tree/cascade.


Returns:
    A string with the given dictionary in PREFS format. 

Example:

```python
import PREFS

prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    } # Defining a dictionary with a example of default PREFS

PREFSrepresentation = PREFS.ConvertToPREFS(prefs) # Converting prefs dictionary into PREFS format

print(PREFSrepresentation) # Printing the PREFSrepresentation of prefs dictionary

>>> 
#PREFS
theme='light'
lang='en'
keybindings=>
    Copy='Ctrl+C'
    Paste='Ctrl+V'
    Cut='Ctrl+X'
```