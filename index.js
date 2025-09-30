require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;

const gitdata = {
  login: "Shivang-dadhich",
  id: 184916609,
  node_id: "U_kgDOCwWagQ",
  avatar_url: "https://avatars.githubusercontent.com/u/184916609?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Shivang-dadhich",
  html_url: "https://github.com/Shivang-dadhich",
  followers_url: "https://api.github.com/users/Shivang-dadhich/followers",
  following_url:
    "https://api.github.com/users/Shivang-dadhich/following{/other_user}",
  gists_url: "https://api.github.com/users/Shivang-dadhich/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Shivang-dadhich/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Shivang-dadhich/subscriptions",
  organizations_url: "https://api.github.com/users/Shivang-dadhich/orgs",
  repos_url: "https://api.github.com/users/Shivang-dadhich/repos",
  events_url: "https://api.github.com/users/Shivang-dadhich/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Shivang-dadhich/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "SHIVANG DADHICH",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 2,
  following: 11,
  created_at: "2024-10-14T08:08:47Z",
  updated_at: "2025-09-18T05:21:00Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitterIdeOfshiva");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hey this is a Login PAGE</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai or code</h2>");
});

app.get("/github", (req, res) => {
  res.json(gitdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
