(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{415:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("PageHeader"),t._v(" "),a("p",[t._v("We use "),a("strong",[t._v("node.js")]),t._v(" and the "),a("strong",[t._v("NPM")]),t._v(" package manager to automate some of the development workflow. Here is a quick refresher on the key commands that you should know.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Update to Node version 14")]),t._v(" "),a("p",[t._v("Take advantage of the latest stable language features; update to node v14.11.x")])]),t._v(" "),a("h2",{attrs:{id:"installing-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-node"}},[t._v("#")]),t._v(" Installing node")]),t._v(" "),a("h3",{attrs:{id:"single-version-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-version-installer"}},[t._v("#")]),t._v(" Single version installer")]),t._v(" "),a("p",[t._v("The simplest method to install node is to download and run the platform specific installer package from "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs.org"),a("OutboundLink")],1),t._v(". This is what we did last term.")]),t._v(" "),a("p",[t._v("Remember, the version of NPM that is packaged with node is not always up to date. It is best to update it manually after installation. Use NPM to install the latest version of NPM as a globally available package. On macOS and Linux you will need to prefix the command with "),a("code",[t._v("sudo")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo npm i -g npm\n")])])]),a("h3",{attrs:{id:"node-version-managers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-version-managers"}},[t._v("#")]),t._v(" Node Version Managers")]),t._v(" "),a("p",[t._v("Sometimes it is useful to be able to switch the active version of node as you move from one project to another, or simply for testing compatibility. The "),a("code",[t._v("NVM")]),t._v(" tool does just that. Full "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation and usage instructions"),a("OutboundLink")],1),t._v(" can be found on GitHub.")]),t._v(" "),a("p",[t._v("There is "),a("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[t._v("a newer and more reliable tool"),a("OutboundLink")],1),t._v(" simply called "),a("code",[t._v("n")]),t._v(" which can also be found on GitHub.")]),t._v(" "),a("p",[t._v("While version managers, like "),a("code",[t._v("nvm")]),t._v(" or "),a("code",[t._v("n")]),t._v(" can be helpful, they can sometimes be tricky to get setup correctly. So, be prepared to spend a little time and read the documentation very carefully.")]),t._v(" "),a("h3",{attrs:{id:"node-in-docker-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-in-docker-containers"}},[t._v("#")]),t._v(" Node in Docker Containers")]),t._v(" "),a("p",[t._v("The ideal solution is to isolate all environment dependencies (like the node version) in a containerized runtime environment per project. This is a more advanced setup that we will look at toward the end of the course if time permits.")]),t._v(" "),a("h2",{attrs:{id:"using-npm-on-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-npm-on-the-command-line"}},[t._v("#")]),t._v(" Using npm on the command line")]),t._v(" "),a("p",[t._v("Before we can install any external libraries (like React), we need to initialize the project folder for use with a node package manager. Using the "),a("code",[t._v("-y")]),t._v(" or "),a("code",[t._v("--yes")]),t._v(" flag will create the "),a("code",[t._v("package.json")]),t._v(" file with all of the default settings.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("h3",{attrs:{id:"development-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-dependencies"}},[t._v("#")]),t._v(" Development dependencies")]),t._v(" "),a("p",[t._v("Some NPM packages/libraries, like Webpack, are needed only during development to help manage the workflow or package up the final application. Install a package and it add to the "),a("code",[t._v("devDependencies")]),t._v(" list in "),a("strong",[t._v("package.json")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"production-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#production-dependencies"}},[t._v("#")]),t._v(" Production dependencies")]),t._v(" "),a("p",[t._v("Other libraries get bundled into our final production code package. Install a package and add it to the production "),a("code",[t._v("dependencies")]),t._v(" list in "),a("strong",[t._v("package.json")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("We used to have to explicitly instruct NPM to add the dependency using the "),a("code",[t._v("-P")]),t._v(" or "),a("code",[t._v("--save")]),t._v(" flags, but this has been the default behaviour since npm version 5 and is no longer required.")]),t._v(" "),a("h3",{attrs:{id:"global-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-packages"}},[t._v("#")]),t._v(" Global packages")]),t._v(" "),a("p",[t._v("Sometimes we need to install helper tools at the global level (as apposed to the project folder). These tools are typically used to help scaffold out a new project. One example is the "),a("code",[t._v("npm")]),t._v(" tool itself. Another is the "),a("code",[t._v("create-react-app")]),t._v(" tool. Globally installed NPM packages can be called from any folder in the terminal.")]),t._v(" "),a("p",[t._v("For security reasons on macOS or Linux, you will need administrator privileges to install a package globally, so you will need to prefix the command with "),a("code",[t._v("sudo")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"using-npx-instead"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-npx-instead"}},[t._v("#")]),t._v(" Using npx instead")]),t._v(" "),a("p",[t._v("Rather than installing global packages like "),a("code",[t._v("create-react-app")]),t._v(", we can use another command called "),a("code",[t._v("npx")]),t._v(" that gets installed with the "),a("code",[t._v("npm")]),t._v(" package. It downloads the requested package into a temporary location, executes it and then deletes it again.")]),t._v(" "),a("p",[t._v("This has three advantages:")]),t._v(" "),a("ol",[a("li",[t._v("It reduces the file storage for infrequently used commands.")]),t._v(" "),a("li",[t._v("It ensures that you are always using the latest version of the given tool.")]),t._v(" "),a("li",[t._v("There is no need to use sudo.")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx create-react-app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new-project-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Read this Medium article, "),a("em",[a("a",{attrs:{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introducing npx: an npm package runner"),a("OutboundLink")],1)]),t._v(", to learn more about what you can do with "),a("strong",[t._v("NPX")])])]),t._v(" "),a("h2",{attrs:{id:"review-the-package-json-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review-the-package-json-file"}},[t._v("#")]),t._v(" Review the Package.json file")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("package.json")]),t._v(" file is a structured JSON file that describes all of the meta data about your project. The full list of "),a("a",{attrs:{href:"https://docs.npmjs.com/files/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("options and best practices"),a("OutboundLink")],1),t._v(" are explained on the NPM documentation website.")]),t._v(" "),a("p",[t._v("As an example, here is the package.json file for the project that built this website.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mad9135"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTML5 App Development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Robert McKenney"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mckennr@algonquincollege.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://robertmckenney.info"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Steve Griffith"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"griffis@algonquincollege.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"private"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/rlmckenney/mad9135.git"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bugs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/rlmckenney/mad9135/issues"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"homepage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mad9135.github.io/F2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.5.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date-fns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.16.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workbox-cli"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^5.1.3"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);