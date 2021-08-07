"use strict";(self.webpackChunkprefs_docs=self.webpackChunkprefs_docs||[]).push([[994],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,c=d["".concat(o,".").concat(h)]||d[h]||f[h]||a;return n?r.createElement(c,l(l({ref:t},u),{},{components:n})):r.createElement(c,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7835:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"prefs-class",title:"PREFS class",sidebar_position:2,hide_title:!0},o="PREFS class",p={unversionedId:"API Reference/prefs-class",id:"version-0.1.8/API Reference/prefs-class",isDocsHomePage:!1,title:"PREFS class",description:"---",source:"@site/versioned_docs/version-0.1.8/API Reference/prefs-class.md",sourceDirName:"API Reference",slug:"/API Reference/prefs-class",permalink:"/PREFS/0.1.8/API Reference/prefs-class",editUrl:"https://github.com/Patitotective/PREFS/versioned_docs/version-0.1.8/API Reference/prefs-class.md",version:"0.1.8",sidebarPosition:2,frontMatter:{id:"prefs-class",title:"PREFS class",sidebar_position:2,hide_title:!0},sidebar:"version-0.1.8/tutorialSidebar",previous:{title:"Getting started",permalink:"/PREFS/0.1.8/start"},next:{title:"Methods",permalink:"/PREFS/0.1.8/API Reference/methods"}},u=[{value:"Init",id:"init",children:[]},{value:"Attributes",id:"attributes",children:[{value:"<code>file</code>",id:"file",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>ReadPrefs()</code>",id:"readprefs",children:[]},{value:"<code>WritePrefs()</code>",id:"writeprefs",children:[]},{value:"<code>OverWritePrefs()</code>",id:"overwriteprefs",children:[]},{value:"<code>ChangeFilename()</code>",id:"changefilename",children:[]},{value:"<code>DeleteFile()</code>",id:"deletefile",children:[]},{value:"<code>ConvertToJson()</code>",id:"converttojson",children:[]}]}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefs-class"},"PREFS class"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"init"},"Init"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefs (dict)"),": A dictionary with the default preferences."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'filename (str, optional="prefs")'),": The name of the file (supports path)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'extension (str, optional="prefs")'),": The extension of the file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'separator (str, optional="=")'),": The character between pref and value in the file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'ender (str, optional="\\n")'),": The character at the end of each pref:value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'continuer (str, optional=">")'),": The character that precede a tree/cascade (nested dictionary)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interpret (bool, optional=True)"),": Interpret the value stored as python."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dictionary (bool, optional=False)"),": Writes the prefs as a python dictionary, no more human-readable (avoid any error at reading)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verbose (bool, optional=False)"),": Print logs all operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cascade (bool, optional=True)"),": Stores nested dictionaries as tree/cascade.")),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"Ignoring the init attributes."),(0,a.kt)("h3",{id:"file"},(0,a.kt)("inlineCode",{parentName:"h3"},"file")),(0,a.kt)("p",null,"Easier way to access to the PREFS file. Equivalent to ",(0,a.kt)("a",{parentName:"p",href:"#readprefs"},(0,a.kt)("inlineCode",{parentName:"a"},"ReadPrefs()")),".",(0,a.kt)("br",{parentName:"p"}),"\n","Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    \"theme\": \"light\",\n    \"lang\": \"en\"\n    })\n\nprint(UserPrefs.file)\n\n>>> {'theme': 'light', 'lang': 'en'}\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"readprefs"},(0,a.kt)("inlineCode",{parentName:"h3"},"ReadPrefs()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ReadPrefs() -> dict\n")),(0,a.kt)("p",null,"Reads the PREFS file and returns it's value."),(0,a.kt)("p",null,"Arguments:\nDoesn't require any arguments.",(0,a.kt)("br",{parentName:"p"}),"\n","Returns:\nA dictionary reading the PREFS file."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    })\n\n\nprint(UserPrefs.ReadPrefs())\n\n>>> {\'theme\': \'light\', \'lang\': \'en\'}\n')),(0,a.kt)("h3",{id:"writeprefs"},(0,a.kt)("inlineCode",{parentName:"h3"},"WritePrefs()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"WritePrefs(pref: str, value: any) -> None\n")),(0,a.kt)("p",null,"Reads the PREFS file and changes the given key to the given value."),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pref (str)"),": The name of the pref to modify or create if it doesn't exist."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value (any)"),": The value to assign to the given pref.")),(0,a.kt)("p",null,"Returns:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"None")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nprint(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it\n>>> en\n\nUserPrefs.WritePrefs("lang", "es") # Changing the lang value from en to es\n\nprint(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it\n>>> es\n')),(0,a.kt)("p",null,"To change the value of a nested dictionary pass a path of keys to find the value you want.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nprint(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {\'Copy\': \'Ctrl+C\', \'Paste\': \'Ctrl+V\', \'Cut\': \'Ctrl+X\'}\n\nUserPrefs.WritePrefs("keybindings/Copy", "Ctrl+D") # Changing the Copy value inside the dictionary keybindings inside the PREFS file from Ctrl+C to Ctrl+D\n\nprint(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {\'Copy\': \'Ctrl+D\', \'Paste\': \'Ctrl+V\', \'Cut\': \'Ctrl+X\'}\n')),(0,a.kt)("p",null,"Another example creating a new pref in a nested dictionary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nprint(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {\'Copy\': \'Ctrl+D\', \'Paste\': \'Ctrl+V\', \'Cut\': \'Ctrl+X\'}\n\nUserPrefs.WritePrefs("keybindings/Quit", "Ctrl+Q") # Creating the Quit pref inside keybindings dictionary inside the PREFS file with Ctrl+Q as value\n\nprint(UserPrefs.file["keybindings"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {\'Copy\': \'Ctrl+D\', \'Paste\': \'Ctrl+V\', \'Cut\': \'Ctrl+X\', \'Quit\': \'Ctrl+Q\'}\n')),(0,a.kt)("h3",{id:"overwriteprefs"},(0,a.kt)("inlineCode",{parentName:"h3"},"OverWritePrefs()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"OverWritePrefs(prefs: dict=None) -> None\n")),(0,a.kt)("p",null,"Overwrites the PREFS file with the default PREFS, if passed dictionary in prefs parameter overwrites PREFS file with these."),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefs (dict, optional=None)"),": A dictionary to overwrites the PREFS file with, if passed ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," overwrites PREFS file with default PREFS.")),(0,a.kt)("p",null,"Returns:\n",(0,a.kt)("inlineCode",{parentName:"p"},"None")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    \"theme\": \"light\",\n    \"lang\": \"en\",\n    \"keybindings\": {\"Copy\": \"Ctrl+C\", \"Paste\": \"Ctrl+V\", \"Cut\": \"Ctrl+X\"}\n    }) # Creating an PREFS instance\n\n\nUserPrefs.OverWritePrefs() # Overwriting the PREFS file with the default PREFS\n\nprint(UserPrefs.file) # Getting PREFS with file attribute and printing it\n\n>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}\n\nUserPrefs.WritePrefs(\"lang\", \"es\") # Changing the lang value from en to es\n\nprint(UserPrefs.file) # Getting PREFS with file attribute and printing it\n\n>>> {'theme': 'light', 'lang': 'es', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}\n\n")),(0,a.kt)("p",null,"The first time we run the above example the program will do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define an instance of the PREFS class and pass a default PREFS"),(0,a.kt)("li",{parentName:"ul"},"Overwrite the PREFS file with the default ones."),(0,a.kt)("li",{parentName:"ul"},"Print the PREFS file"),(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"lang")," pref from en to es"),(0,a.kt)("li",{parentName:"ul"},"Print again the PREFS file.")),(0,a.kt)("p",null,"The second time will do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define an instance of the PREFS class and pass a default PREFS"),(0,a.kt)("li",{parentName:"ul"},"Overwrite the PREFS file that contains the modified ",(0,a.kt)("inlineCode",{parentName:"li"},"lang")," pref with the default PREFS.")),(0,a.kt)("p",null,"So the program will always has the same output because we overwrite the old PREFS with the default PREFS."),(0,a.kt)("h3",{id:"changefilename"},(0,a.kt)("inlineCode",{parentName:"h3"},"ChangeFilename()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ChangeFilename(filename: str) -> None\n")),(0,a.kt)("p",null,"This method will change the name of the PREFS file if it exists.",(0,a.kt)("br",{parentName:"p"}),"\n","But when you init the PREFS instance you have passed another value in filename so if you don't change that value to new name of the file, PREFS will search for the old filename and create a new one because he couldn't find the old one."),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filename (str)"),": The new filename of the PREFS file.")),(0,a.kt)("p",null,"Returns: ",(0,a.kt)("inlineCode",{parentName:"p"},"None")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nUserPrefs.ChangeFilename("otherFilename") # Changing the name of the PREFS file from prefs to otherFilename\n\n')),(0,a.kt)("h3",{id:"deletefile"},(0,a.kt)("inlineCode",{parentName:"h3"},"DeleteFile()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"DeleteFile() -> None\n")),(0,a.kt)("p",null,"Deletes the PREFS file if it exists."),(0,a.kt)("p",null,"Arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),(0,a.kt)("br",{parentName:"p"}),"\n","Returns: ",(0,a.kt)("inlineCode",{parentName:"p"},"None")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nUserPrefs.DeleteFile() # Delete the PREFS file\n\n')),(0,a.kt)("h3",{id:"converttojson"},(0,a.kt)("inlineCode",{parentName:"h3"},"ConvertToJson()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'ConvertToJson(filename: str="", extension: str="json") -> None\n')),(0,a.kt)("p",null,"Converts the PREFS file into a JSON file."),(0,a.kt)("p",null,"Arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'filename (str, optional="")'),": The name of the JSON file, if empty the same name of the PREFS file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'extension (str, optional="json")'),": The extension of the JSON file, json as default.")),(0,a.kt)("p",null,"Returns:\n",(0,a.kt)("inlineCode",{parentName:"p"},"None")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import PREFS\n\nUserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    }) # Creating an PREFS instance\n\nUserPrefs.ConvertToJson() # Coverts the PREFS file into a JSON one\n\n')))}d.isMDXComponent=!0}}]);