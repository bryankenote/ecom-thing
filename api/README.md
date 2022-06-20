## Setup

Make sure docker is running.

### `yarn docker:image && yarn docker:network`

Sets up the dev container. \
Only need for first time setup.

### `yarn docker:run`

Runs api in dev container.

Send a post request to create test products:

```
curl -X POST -H "Content-Type: application/json" \
 -d @testData/products.json \
 http://localhost:8000/api/v1/products/import
```
