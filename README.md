# signalmaven-demo.github.io

POC for the SignalMaven Company.

This project is a single page app with 2 stub tabs that allow 
to select (or search) one of the 5 hard-coded questions as well
as select multiple files for uploading.

### Set up environment
1. Install Node.js  
2. Install Ruby 2.3.x (Windows - http://rubyinstaller.org/downloads/)
3. Install Gem
4. Install Gem's 'sass' plugin
```bash
    gem install sass
```


#### To build project you need to execute in terminal (or command prompt):
##### Production version:
```
    npm install
    npm run build
```
The main page will be placed in the root folder (`index.html`) and the rest 
resource files in `__build__` directory.

##### Development version (with watcher):
```
    npm install
    npm run watch
```
All files will be generated to the `target` folder. 