import fetch from 'node-fetch';

let ServerHopUtils = {
  GameInstance: {
    'first-sea': '2753915549',
    'second-sea': '4442272183',
    'third-sea': '7449423635',
  },
  getGameInstance: function () {
    return this.GameInstance;
  },
  findLowerServer: async function (sea, expect = 0) {
    if (this.GameInstance[sea]) {
      const serverInfoUrl = `https://games.roblox.com/v1/games/${this.GameInstance[sea]}/servers/Public?sortOrder=Asc&limit=100`;
      let tempUrl = serverInfoUrl;
      let nextPage = null;
      let serverData = null;
      let lowerServer = null;

      do {
        console.log('Finding : ' + tempUrl);
        const response = await fetch(tempUrl);
        const data = await response.json();
        nextPage = data.nextPageCursor;
        serverData = data.data;
        lowerServer = serverData.find(
          (e) => e.playing < (expect !== 0 ? expect : e.maxPlayers)
        );
        if (lowerServer) {
          console.log('Found Lower Server : ');
          console.log(lowerServer);
          lowerServer.sea = sea;
          lowerServer.playerTokens = undefined;
          lowerServer.fps = undefined;
          lowerServer.ping = undefined;
          lowerServer.gameInstance = this.GameInstance[sea];
          lowerServer.launchScript = `Roblox.GameLauncher.joinGameInstance(${this.GameInstance[sea]}, '${lowerServer.id}')`;
          return lowerServer;
        } else {
          console.log('Not Found !');
          tempUrl = serverInfoUrl + '&cursor=' + nextPage;
        }
      } while (nextPage !== undefined);

      return {
        error: 'Server Not Found',
      };
    } else {
      return {
        error: 'Game Instant Not Found',
      };
    }
  },
};

export { ServerHopUtils };
