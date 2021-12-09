let app = new Vue({
  el: '#app',
  data: {
    selectedSea: '',
    expectPlayer: 11,
    serverData: null,
    error: null,
    finding: false,
  },
  methods: {
    findServer: function () {
      this.finding = true;
      let url = `http://localhost/server/low-player-server?sea=${this.selectedSea}&expectPlayer=${this.expectPlayer}`;
      console.log(url);
      axios
        .get(url)
        .then((resp) => {
          this.serverData = resp.data;
          this.finding = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
