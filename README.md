# GitHub GrapQL - get user's repositories

## About Project

The purpose of this project is to create React app and use the GitHub v4 GraphQL API to fetch information about a given user's repositories.

## Getting Started

### 1. Get your node.js

v14.18.1

### 2. Clone repository

```sh
git clone https://github.com/oziemins/github-graphql/
```

### 3. Go to root directory
```sh
cd github_graphql
```
### 4. Add your personal GitHub token
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

- create .env file in your root folder
- scopes/permissions you need to check: admin: repo, user

```sh
REACT_APP_GITHUB_ACCESS_TOKEN=xxxXXX
```

### 5. Install dependencies

npm install

### 6. Run the app

npm start

### 7. App is ready!
Go to your browser (if not redirected directly) http://localhost:3000

## How to use the app?
- Type input input the GitHub username to fetch the repositories
- Load More... repositories if needed

## Learn More

 - React https://reactjs.org/
 - GraphQL https://graphql.org/
 - GitHub GraphQL API https://docs.github.com/en/graphql
 - Apollo https://www.apollographql.com/
 - Apollo Client https://www.apollographql.com/apollo-client
 - React Render v6 https://remix.run/blog/react-router-v6


