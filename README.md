<h1 align="center">SORA - Subquery</h1>

## Introduction

[SORA](https://sora.org/) and [subquery.network](https://subquery.network/) integration project, implementing the convenient acquisition of the following network entities:

- XYK Pools
- Transfers
- Swaps
- Liquidity pools operations
  - Deposits
  - Removals
- Iroha migrations

## Query

### Environment

- [Typescript](https://www.typescriptlang.org/) are required to compile project and define types.

- Both SubQuery CLI and generated Project have dependencies and require [Node](https://nodejs.org/en/).


### Install the SubQuery CLI

Install SubQuery CLI globally on your terminal by using Yarn or NPM:

```
npm install -g @subql/cli
yarn global add @subql/cli
```

Run help to see available commands and usage provide by CLI
```
subql help
```

## Initialize the starter package

Inside the directory in which you want to create the SubQuery project, simply replace `project-name` with your project name and run the command:
```
subql init --starter project-name
```
Then you should see a folder with your project name has been created inside the directory, you can use this as the start point of your project.
Last, under the project directory, run following command to install all the dependency.
```
yarn install
```


## Configure your project

In the starter package, we have provided a simple example of project configuration. You will be mainly working on the following files:

- The Manifest in `project.yaml`
- The GraphQL Schema in `schema.graphql`
- The Mapping functions in `src/mappings/` directory

For more information on how to write the SubQuery,
check out our doc section on [Define the SubQuery](https://doc.subquery.network/define_a_subquery.html)

#### Code generation

In order to index your SubQuery project, it is mandatory to build your project first.
Run this command under the project directory.

````
yarn codegen
````

## Build the project

In order to deploy your SubQuery project to our hosted service, it is mandatory to pack your configuration before upload.
Run pack command from root directory of your project will automatically generate a `your-project-name.tgz` file.

```
yarn build
```

## Indexing and Query

### Run required systems in docker


Under the project directory run following command:

```
docker-compose pull && docker-compose up
```
### Query the project

Open your browser and head to `http://localhost:3000`.

Finally, you should see a GraphQL playground is showing in the explorer and the schemas that ready to query.

For the `subql-starter` project, you can try to query with the following code to get a taste of how it works.

````graphql
query {
  historyElements(
#      see pagination guidelines https://graphql.org/learn/pagination/#pagination-and-edges
    orderBy: TIMESTAMP_DESC
    first: " << insert int to receive first n entries after the cursor >> "
    after: " << cursor of the record from which the first n entries are to be obtained >> "
    filter: {
      or: [
        {
          address: {
            equalTo: " << address to receive the history for >> "
          }
        }
        {
          transfer: {
            contains: {
              to: " << address to receive the history for >> "
            }
          }
        }
      ]
    }
  ) {
    totalCount
    edges {
    node {
      id
      blockHeight
      module
      method
      address
      networkFee
      success
      execution
      error
      timestamp
      swap
      transfer
      irohaMigration
      liquidityOperation
      batchTransaction
      assetRegistration
    }
      cursor }

    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
  }
}
````
