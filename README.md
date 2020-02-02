# 👩‍💻 Dept Agency assignment

The production version is available on https://tatiane-dept-agency.herokuapp.com/

## Requirements

You must have all the following applications installed:

- [NodeJS 12+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Running the application

First, install all the dependencies with: `$ yarn`

Start the application with: `$ yarn start`

There you go! A tab should be shown on http://localhost:3000 (if not, just click here)

## How to run the tests

### Unit

`$ yarn test`

### Visual Regression

`$ yarn cy:visual`

> this opens a chrome window in your computer and shows to you step by step, it takes more time but is valuable to debug and watch your art

### Updating Visual Regression Tests

`$ yarn cy:visualUpdate`

## Troubleshooting

If you had any problem trying to run the application or the tests make sure that you have met the following requirements:

```
Node version: v12.8.0
Npm version: v6.13.1
Yarn version: v1.17.3
```

## Technical Decisions

Much documentation can be replaced with highly readable code and tests. In a world of evolutionary architecture, however, it's important to record certain design decisions for the benefit of future team members as well as for external oversight.

Here is a document with all my technical decisions: [link](./docs/technical_decisions.md)

## Technical debts

A list of tech debts that, if I had more time, I'd work on: [link](./docs/technical_debts.md)
