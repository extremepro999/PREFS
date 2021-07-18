---
nav_order: 1
permalink: v0.1.6/start/
title: Getting started
---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# PREFS class

# Welcome to PREFS Documentation

PREFS is a simple but useful python library to store and manage user preferences.

## Installation and import

To install PREFS you need to have pip installed (if you don't have it installed see [pip.pypa.io/en/stable/installing](https://pip.pypa.io/en/stable/installing/)):

Windows:
`pip install PREFS`  
MacOS and Linux:
`pip3 install PREFS`

Once you have installed PREFS correctly create a new python file and import PREFS:

```python
import PREFS # Importing PREFS python library
```

## Create PREFS file

To create a PREFS file you need to create an instance of the PREFS class passing in the `prefs` parameter a dictionary with the default PREFS:

```python
UserPrefs = PREFS.PREFS(prefs = {
    "theme": "light",
    "lang": "en",
    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}
    }) # Creating an instance of the PREFS class passing the default prefs as a dictionary in prefs paramater
```

PREFS class has others optional parameters such as:

-   `filename (str, default="prefs")`: The name of the PREFS file (supports path).
-   `interpret (bool, default=True)`: If True interpret all types, if False interpret all as a string.

If you open your PREFS file, you will see something like this:

```python
#PREFS
theme='light'
lang='en'
keybindings=>
    Copy='Ctrl+C'
    Paste='Ctrl+V'
    Cut='Ctrl+X'
```

## Read PREFS

To access to the PREFS file you can call the `ReadPrefs()` method or access to the `file` attribute,
both returns a dictionary with the PREFS:

Using `ReadPrefs()` method:

```python
print(UserPrefs.ReadPrefs()) # Getting PREFS with ReadPrefs() method and printing it

>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}
```

Using `file` attribute:

```python
print(UserPrefs.file) # Getting PREFS with file attribute and printing it

>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}
```

## Write PREFS

To change the value of a pref you need to use `WritePrefs()` method which requires:

-   `pref (str)`: The name of the pref to modify or create if it doesn't exist.
-   `value (any)`: The value to assign to the given pref.

For example:

```python
print(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it
>>> en

UserPrefs.WritePrefs("lang", "es") # Changing the lang value from en to es

print(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it
>>> es
```

If you want to change the value of a nested dictionary (e.g. keybindings) you need to pass the keys path separated by a forward slash.
For example:

```python
print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}

UserPrefs.WritePrefs("keybindings/Copy", "Ctrl+D") # Changing the Copy value inside the dictionary keybindings inside the PREFS file from Ctrll+C to Ctrl+D

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}
```

In the above example we have accessed to a nested dictionary using the keys path and modified the pref `Copy` from `Ctrl+C` to `Ctrl+D`.

As you know PREFS file is a dictionary so if you pass any key that isn't in the PREFS file it will be created:
For example:

```python
print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}

UserPrefs.WritePrefs("keybindings/Quit", "Ctrl+Q") # Creating the Quit pref inside keybindings dictionary inside the PREFS file with Ctrl+Q as value

print(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it
>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X', 'Quit': 'Ctrl+Q'}
```

---

## Links

-   Github page: [https://github.com/Patitotective/PREFS](https://github.com/Patitotective/PREFS).
-   Pypi page: [https://pypi.org/project/PREFS/](https://pypi.org/project/PREFS/).

-   Contact me:
    -   Discord: **patitotective#0127**.
    -   Email: **cristobalriaga@gmail.com**.