# ditado-api
Public API to serve _ditados_, i.e., popular Portuguese sayings.

## Why?

[Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions) had just came out and I wanted to learn all about it, namely how to automate deployments via [Heroku](https://heroku.com). Fetching _ditados_ seemed like the perfect excuse. Also inspired by [this](https://github.com/msramalho).

## API

Public REST API available at https://ditado-api.herokuapp.com.

- [x] `GET /ditados` - Fetch all entries
- [x] `GET /ditados/random` - Fetch random entry.

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





