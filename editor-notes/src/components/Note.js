// import Vue from '.src/vue.js'

export default Vue.component('note',
  {
    name: 'note',
    template: '#note-template',
    components: {},
    props: {
      storedNote: Object,
      // title: ''
    },
    data() {
      return {
        message: 'fuck',
        content: '',
        title: '',
        gotClicked: false
      }
    },
    methods: {
      handleClick() {
        this.title = 'i got clicked'
        this.gotClicked = true;
        console.log(this.title);
      }
    },
    watch: {
      note: function (newVal) {

      }
    },
    computed: {},

    created() { },
    mounted() { },
    updated() { },
    destroyed() { }
})