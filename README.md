# ditado-api
Public API to serve _ditados_, i.e., popular Portuguese sayings.

## Why?

[Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions) had just come out and I wanted to learn all about it, namely how to automate deployments via [Heroku](https://heroku.com).

Fetching _ditados_ is an easy enough use case. Also inspired by [this](https://github.com/msramalho/json-tv-quotes).

*Update:* since the original release Heroku has decomissioned their free tier. We're now using [fly.io](https://fly.io), and Github Actions has considerably matured. I now use this to play around.

## API

Public REST API available at https://ditado-api.fly.dev

- `GET /ditados` - Fetch all entries
- `GET /ditados?q=pequenino` - Search for a ditado matching a particular word
- `GET /ditados/random` - Fetch a random ditado.
- `GET /ditados/generate` - 🆕 Create a new ditado! Inspired by [ditado-generator](https://github.com/henriquetguedes/DITADOgenerator)

## Contribute

- Fork this repo and edit `ditados.json`;
- Add a _ditado_, including what it means under the `meaning` field:
```
{
   "ditados":[
      (...)
      {
         "content":"Your ditado",
         "meaning":"What it means"
      }
   ]
}
```
- Submit a PR and celebrate 🎉 





