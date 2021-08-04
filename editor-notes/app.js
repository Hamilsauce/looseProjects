// import Vue from './src/vue.js';
import Note from './src/components/Note.js';


new Vue({
  el: "#app",
  components: {
    Note
  },
  data: {
    heading: "Vue.js",
    text: "Balls",
    notes: []
  },
  methods: {
    initializeNotes() {
        console.log(this.text);
      this.notes = localStorage.getItem('notes') || [{ id: "0", title: "New Note", content: "Write a thing" }]
    }
  },
  created() {
    this.initializeNotes();

  }
});