# Newman Action

This action will run postman collection with fully supported customizable options

## Inputs

### `options` **Required**

[Newman Options](https://github.com/postmanlabs/newman#api-reference).
Like `options.collection, options.environment, options.envVar`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```
uses: actions/Moataz-Hammous/newman-action@master
with:
  options:
    collection: collection.json
    environment: environment.json
    globals: globals.json
    envVar: ${{secrets.ENV_VAR}}
    reporters: cli
    
```

