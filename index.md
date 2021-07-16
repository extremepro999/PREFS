---
#layout: default
title: Home
nav_order: 0
---


# What is PREFS?

PREFS is a simple but useful python library to store and manage user preferences.

### Features

-   Creates a total human-readable file.
-   If nested dictionaries (such as key bindings) creates a tree/cascade.
-   Supports `export/import` JSON files.

This could be a PREFS file:

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