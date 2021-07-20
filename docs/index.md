# What is PREFS?

PREFS is a simple but useful python library to store and manage user preferences.
PREFS creates a file with your preferences, and allows you write new preferences overwrite the file and much more.

## What does PREFS do?
In simple words PREFS searches for a file with the given name and if file not found create it with default PREFS.

### Features

-   Creates a total human-readable file.
-   If nested dictionaries (such as key bindings) creates a tree/cascade.
-   Supports `export/import` JSON files.

Given this dictionary:
```python
{"theme": "light", 
    "lang": "en", 
    "keybindings": {
        "Ctrl+D": "Duplicate", 
        "Ctrl+C": "Copy", 
        "Ctr+V": "Paste", 
        "Ctrl+X": "Cut", 
        "Ctrl+Q": "Quit"}
    }
```

Prefs creates this file:
```python
#PREFS
theme="light"
lang="en"
keybindings=>
  Ctrl+D="Duplicate"
  Ctrl+C="Copy"
  Ctrl+V="Paste"
  Ctrl+X="Cut"
  Ctrl+Q="Quit"
```