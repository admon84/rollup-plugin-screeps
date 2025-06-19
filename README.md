# Rollup Plugin for Screeps World

Uses [screeps-api](https://www.npmjs.com/package/screeps-api) to upload code to screeps servers.

## Install

```
npm i --save-dev @admon-dev/rollup-plugin-screeps
```

## Usage

In `rollup.config.mjs`

```mjs
import screeps from '@admon-dev/rollup-plugin-screeps';

export default {
  // ...
  output: {
    // ...
    sourcemap: true, // To generate source maps
  },
  plugins: [
    // ...
    screeps({
      config: './screeps.config.json', // To read the config
      destination: process.env.DEST // To upload code
    })
  ]
}
```

Example `package.json` scripts

```json
{
  "scripts": {
    "build": "rollup -c",
    "push:main": "rollup -c --environment DEST:main",
    "push:season": "rollup -c --environment DEST:season",
    "push:pserver": "rollup -c --environment DEST:pserver"
  }
}
```

### Config File

Create your `screeps.config.json` file and set login details for each server connection.

List this file in `.gitignore` to keep it private and excluded from git.

Use **token** for official screeps servers and **username/password** for private servers.

```json
{
  "main": {
    "token": "SET TOKEN HERE",
    "protocol": "https",
    "hostname": "screeps.com",
    "port": 443,
    "branch": "main"
  },
  "season": {
    "token": "SET TOKEN HERE",
    "protocol": "https",
    "hostname": "screeps.com",
    "path": "/season",
    "port": 443,
    "branch": "season"
  },
  "pserver": {
    "email": "SET USERNAME HERE",
    "password": "SET PASSWORD HERE",
    "protocol": "http",
    "hostname": "127.0.0.1",
    "port": 21025,
    "branch": "main"
  }
}
```

If `branch` is set to `"auto"` your current git branch name will be used as the branch on screeps, anything else will use the string as the branch name.

## Credits

@Arcath for the [original project](https://github.com/Arcath/rollup-plugin-screeps). 

@coconutbird for the [modernized rewrite](https://github.com/coconutbird/plugin-screeps-rollup) for latest rollup with bugs fixed.
