# Rollup Plugin for Screeps: World

## Install

```
npm i --save-dev @admon84/rollup-plugin-screeps
```

## Usage

In `rollup.config.mjs`

```mjs
import screeps from '@admon84/rollup-plugin-screeps';

export default {
  // ...
  sourcemap: true, // If set to true your source maps will be generated
  plugins: [
    // ...
    screeps({
      config: './screeps.json', // If set will read the config file from path
      destination: 'main' // If set will read the options for the entry otherwise default
    })
  ]
}
```

### Config File

@admon84/rollup-plugin-screeps needs your screeps username/password or token and the server to upload to.

```json
{
  "main": {
    "token": "<TOKEN>",
    "protocol": "https",
    "hostname": "screeps.com",
    "port": 443,
    "branch": "main"
  },
  "sim": {
    "token": "<TOKEN>",
    "protocol": "https",
    "hostname": "screeps.com",
    "port": 443,
    "branch": "sim"
  },
  "pserver": {
    "email": "<USERNAME>",
    "password": "<PASSWORD>",
    "protocol": "http",
    "hostname": "127.0.0.1",
    "port": 21025,
    "branch": "main"
  }
}
```

If `branch` is set to `"auto"` @admon84/rollup-plugin-screeps will use your current git branch as the name of the branch on screeps, if you set it to anything else that string will be used as the name of the branch.

## Credits

@Arcath for the [original project](https://github.com/Arcath/rollup-plugin-screeps). 

@coconutbird for the [modernized rewrite](https://github.com/coconutbird/plugin-screeps-rollup) for latest rollup with bugs fixed.
