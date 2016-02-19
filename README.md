# How to use

## For non-react application

### Set up and start server.

```
cd general
npm install
npm start
```

### To see what's happening,

1. Change some js file under src folder 

2. See it changes without rerender.

3. Check request from your browser (maybe in network tab with Chrome ). You will see a GET request like '0.ebb160dc6080e1a29cd9.hot-update.js'.
This is the updating module.

4. Check console log to see what's happening.

```
index_bundle.js:7978 [HMR] Checking for updates on the server...
index_bundle.js:8012 [HMR] Updated modules:
index_bundle.js:8014 [HMR]  - 78
index_bundle.js:8014 [HMR]  - 77
index_bundle.js:7964 [HMR] App is up to date.
```

In this case, HMR module No 78 is changed but it does not `accept` module update, so check the parent module 77. It founds it is replacable module. Thus, dispose and replace both modules.


## For react application

`cd react` and follow the same instruction above.
