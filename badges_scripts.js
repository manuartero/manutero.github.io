var httpGet = {type: "GET"},
    doneSteamCallback = function(data) {
      console.log(data);
      document.getElementById("steam-badge").innerHTML = data.response.game_count;
    },
    doneStackCallback = function(data) {
      document.getElementById("stack-badge").innerHTML = data.items[0].reputation;
    },
    doneGithubCallback = function(data) {
      document.getElementById("github-badge").innerHTML = data.public_repos;
    },
    steamCall = function() {
      httpGet.url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001";
      httpGet.data = { key: "60F41E3A058F8B9E38FC54D201461EAC",
        steamid: "76561198034010352",
        format:"json"
      };
      $.ajax(httpGet).done(doneSteamCallback);
    },
    stackCall = function() {
      httpGet.url = "https://api.stackexchange.com/2.2/users/1614677";
      httpGet.data = {site: "stackoverflow" },
      $.ajax(httpGet).done(doneStackCallback);
    },
    githubCall = function() {
      httpGet.url = "https://api.github.com/users/manutero";
      httpGet.data = {};
      $.ajax(httpGet).done(doneGithubCallback);
    };

steamCall();
stackCall();
githubCall();
