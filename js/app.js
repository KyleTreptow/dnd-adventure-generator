var app = new Vue({
  el: '#app',
  data: {
    adventures: appData,
    current: [],
    mode: 'random'
  },
  methods: {
    roll: function(){
      var max = this.adventures.length;
      this.current.push(Math.floor(Math.random() * max));
    },
    clear: function(){
      this.current = [];
    },
    changeMode: function(mode){
      this.mode = mode;
    }
  },
  mounted: function () {
    this.roll();
  }
})
