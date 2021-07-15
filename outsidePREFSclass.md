---
nav_order: 3
---


# Outside PREFS class

## Methods outside PREFS class

Methods that aren't inside the PREFS class.

### `ReadJsonFile()`

```python
ReadJsonFile(filename: str, extension: str="json")
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

### `GetStats()`

```python

GetStats(mode: str="overall", period: str="", mirrors: bool=None, version: str="", os: str="", format: str="markdown")
```

Using pypistats library returns PREFS stats.

To see the arguments and the return values see [https://pypi.org/project/pypistats/](https://pypi.org/project/pypistats/)

Example:

```python
import PREFS

PREFS.GetStats() # Get PREFS library stats in pypi

>>>
|    category     | percent | downloads |
| --------------- | ------: | --------: |
| with_mirrors    | 100.00% |    15,961 |
| without_mirrors |   9.31% |     1,486 |
| Total           |         |    15,961 |

Date range: 2021-05-01 - 2021-07-11

```
