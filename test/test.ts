import * as fs from 'fs';
import * as path from 'path';

import * as npm from '../';

const getPackageJson = (): npm.PackageJson => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')) + '') as
      npm.PackageJson;
};

const pkg = getPackageJson();

console.log(pkg.name);
console.log(pkg.version.substring, 'yay version is required and a string');
