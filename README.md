## Design Pattern with TypeScript

This repo is my practice when I learn design pattern concepts. It is written by TypeScript, a JavaScript superset so that will be familiar with most developers.

There are several design patterns and other OOP concepts covered:

- SOLID principles
- Software design patterns: Builder, Abstract Factory, Factory Method, Singleton, Strategy, Proxy, Prototype, etc

#### Setup

This guide is my setup for a pattern directory

- Step 1: create and go to the pattern directory. For example, I create a directory named Factory Method and go into it:

```
mkdir factory_method && cd factory_method
```

Note: the naming convention of folders is belong to your favorite.

- Step 2: init a Node.js project so that you can run the code in terminal

```
npm init -y
```

Note: please notice the node.js version on your local. Currently I run version 18.

- Step 3: init typescript configuration

```
yarn add typescript ts-node -D
```

```
npx tsc --init
```

- Step 4: run a TypeScript file

```
npx ts-node your_file_name.ts
```
