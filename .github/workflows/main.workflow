workflow "test and deploy" {
  on = "push"
  resolves = [
      "lint",
      "deploy to Heroku"
  ]
}

action "install dependencies" {
    uses = "actions/setup-node@v1"
    args = "install"
}

action "lint" {
    uses = "actions/setup-node@v1"
    needs = ["install dependencies"]
    args = "run lint"
}

action "login" {
  uses = "actions/heroku@master"
  needs = ["lint"]
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "push" {
  uses = "actions/heroku@master"
  needs = "login"
  args = "container:push -a ditado-api web"
  secrets = ["HEROKU_API_KEY"]
}

action "deploy to Heroku" {
  uses = "actions/heroku@master"
  needs = "push"
  args = "container:release -a ditado-api web"
  secrets = ["HEROKU_API_KEY"]
}