"use strict";(self.webpackChunkprefs_docs=self.webpackChunkprefs_docs||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,h=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},877:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=(n(5064),n(8215),["components"]),o={id:"start",title:"Getting started",sidebar_position:1,hide_title:!0},s="Getting started",p={unversionedId:"start",id:"version-0.1.8/start",isDocsHomePage:!1,title:"Getting started",description:"---",source:"@site/versioned_docs/version-0.1.8/start.md",sourceDirName:".",slug:"/start",permalink:" /PREFS/start",editUrl:"https://github.com/Patitotective/PREFS/versioned_docs/version-0.1.8/start.md",version:"0.1.8",sidebarPosition:1,frontMatter:{id:"start",title:"Getting started",sidebar_position:1,hide_title:!0},sidebar:"version-0.1.8/tutorialSidebar",previous:{title:"What is PREFS?",permalink:" /PREFS/"},next:{title:"PREFS class",permalink:" /PREFS/API Reference/prefs-class"}},d=[{value:"Installation and import",id:"installation-and-import",children:[]},{value:"Create PREFS",id:"create-prefs",children:[]},{value:"Read PREFS",id:"read-prefs",children:[]},{value:"Write PREFS",id:"write-prefs",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"installation-and-import"},"Installation and import"),(0,i.kt)("p",null,"To install PREFS you need to have pip installed (if you don't have it installed see ",(0,i.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installation/"},"Pypy installation"),"):"),(0,i.kt)("p",null,"Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install PREFS\n")),(0,i.kt)("p",null,"MacOS and Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install PREFS\n")),(0,i.kt)("p",null,"Once you have installed PREFS correctly create a new python file and import PREFS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import PREFS\n")),(0,i.kt)("h2",{id:"create-prefs"},"Create PREFS"),(0,i.kt)("p",null,"To create a PREFS file you need to create an instance of the PREFS class passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefs")," parameter a dictionary with the default PREFS (default means that all users will have at first time and when removing the file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'UserPrefs = PREFS.PREFS(prefs = {\n    "theme": "light",\n    "lang": "en",\n    "keybindings": {"Copy": "Ctrl+C", "Paste": "Ctrl+V", "Cut": "Ctrl+X"}\n    })\n')),(0,i.kt)("p",null,"You can change the PREFS filename by changing ",(0,i.kt)("a",{parentName:"p",href:"API%20Reference/prefs-class#init"},(0,i.kt)("inlineCode",{parentName:"a"},"filename"))," parameter, or ",(0,i.kt)("a",{parentName:"p",href:"API%20Reference/prefs-class#init"},(0,i.kt)("inlineCode",{parentName:"a"},"extension"))," parameter in PREFS class."),(0,i.kt)("p",null,"If you open your PREFS file (by default ",(0,i.kt)("inlineCode",{parentName:"p"},"prefs.prefs"),"), you will see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#PREFS\ntheme='light'\nlang='en'\nkeybindings=>\n    Copy='Ctrl+C'\n    Paste='Ctrl+V'\n    Cut='Ctrl+X'\n")),(0,i.kt)("h2",{id:"read-prefs"},"Read PREFS"),(0,i.kt)("p",null,"To access to your PREFS file you can call the ",(0,i.kt)("a",{parentName:"p",href:"API%20Reference/prefs-class#readprefs"},(0,i.kt)("inlineCode",{parentName:"a"},"ReadPrefs()"))," method or access to the ",(0,i.kt)("a",{parentName:"p",href:"API%20Reference/prefs-class#file"},(0,i.kt)("inlineCode",{parentName:"a"},"file"))," attribute, both returns a dictionary with your PREFS:"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadPrefs()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(UserPrefs.ReadPrefs()) # Getting PREFS with ReadPrefs() method and printing it\n\n>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(UserPrefs.file) # Getting PREFS with file attribute and printing it\n\n>>> {'theme': 'light', 'lang': 'en', 'keybindings': {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}}\n")),(0,i.kt)("h2",{id:"write-prefs"},"Write PREFS"),(0,i.kt)("p",null,"To change the value of a pref you need to use ",(0,i.kt)("a",{parentName:"p",href:"API%20Reference/prefs-class#writeprefs"},(0,i.kt)("inlineCode",{parentName:"a"},"WritePrefs()"))," method which requires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pref (str)"),": The name of the pref to modify or create if it doesn't exist."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value (any)"),": The value to assign to the given pref.")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it\n>>> en\n\nUserPrefs.WritePrefs("lang", "es") # Changing the lang value from en to es\n\nprint(UserPrefs.file["lang"]) # Getting the lang value from the PREFS and printing it\n>>> es\n')),(0,i.kt)("p",null,"If you want to change the value of a nested dictionary you need to pass the keys path separated by a forward slash.\nIn this case we will change the value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"Copy"')," which is inside ",(0,i.kt)("inlineCode",{parentName:"p"},'"keybindings"')," so our path should ",(0,i.kt)("inlineCode",{parentName:"p"},'"keybindings/Copy"'),":   "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(UserPrefs.file[\"keybindings\"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {'Copy': 'Ctrl+C', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}\n\nUserPrefs.WritePrefs(\"keybindings/Copy\", \"Ctrl+D\") # Changing the Copy value inside the dictionary keybindings inside the PREFS file from Ctrl+C to Ctrl+D\n\nprint(UserPrefs.file[\"keybindings\"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}\n")),(0,i.kt)("p",null,"In the above example we have accessed to a nested dictionary using the keys path and modified the pref ",(0,i.kt)("inlineCode",{parentName:"p"},'"Copy"')," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+D"),"."),(0,i.kt)("p",null,"As you know a PREFS file is like a Python dictionary so if you pass any key that isn't in the PREFS file it will be created:\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(UserPrefs.file[\"keybindings\"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X'}\n\nUserPrefs.WritePrefs(\"keybindings/Quit\", \"Ctrl+Q\") # Creating the Quit pref inside keybindings dictionary inside the PREFS file with Ctrl+Q as value\n\nprint(UserPrefs.file[\"keybindings\"]) # Getting the keybindings value (which is a dictionary) from the PREFS and printing it\n>>> {'Copy': 'Ctrl+D', 'Paste': 'Ctrl+V', 'Cut': 'Ctrl+X', 'Quit': 'Ctrl+Q'}\n")))}c.isMDXComponent=!0}}]);