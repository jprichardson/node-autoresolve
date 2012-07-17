var fs = require('fs'),
    path = require('path');

if (typeof fs.existsSync === 'undefined'){
    fs.existsSync = path.existsSync; //for versions less than Node v0.8
}

module.exports = function(packagePath) {
    if (packagePath.indexOf('/') === 0) {
        return packagePath;
    }
    var DIR = process.cwd();
    var found = false;
    var paths = module.parent.paths;
    
    for (var i = 0; i < paths.length; ++i){
        var dir = path.dirname(paths[i]);
        if (fs.existsSync(path.join(dir, 'package.json'))){
            DIR = dir;
            found = true;
            break;
        }
    }

    if (!found){
        console.log("autoresolve: WARNING, package.json not found. Defaulting to process.cwd().");
    }

    //console.log(DIR);
    return path.join(DIR, packagePath);
}

