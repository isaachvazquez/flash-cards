(() => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANu8uAiccvntrfNiG2Ia9XDXktVxSp7PU",
    authDomain: "flash-cards-2b32f.firebaseapp.com",
    databaseURL: "https://flash-cards-2b32f.firebaseio.com",
    projectId: "flash-cards-2b32f",
    storageBucket: "flash-cards-2b32f.appspot.com",
    messagingSenderId: "414383245674",
    appId: "1:414383245674:web:5d23c71f646b8128dbfd13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  // const Spanish = database.ref('spanish');
  // const Russian = database.ref('russian');


  const app = new Vue({
    el: '.flash-cards',
    data: {
      currentLanguage: 'Spanish',
      words: [],
      currentWord: {
        native: '',
        english: '',
        translations: [],
        examples: []
      },
      wordActive: true
    },
    methods: {
      next: function() {
        // Get new word and add to card
        const newWord = this.getRandomWord();
        this.updateFlashCard(newWord);
      },
      flip: function() {
        // Toggle 'active' class from flash-card:not(.flash-card--answer)
        this.flipCard();
      },
      fetchLanguage: function(language) {
        let vocabWords = [];
        const vue = this;
        console.log(this.words);

        const LANGUAGE = database.ref(language);
        LANGUAGE.once('value').then(snapshot => {
          for(item in snapshot.val()) {
            vocabWords.push({ ...snapshot.val()[item], id: item });
          }

          this.words = vocabWords;
          this.next();
        });
      },
      getRandomWord: function() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
      },
      flipCard: function() {
        this.wordActive = !this.wordActive;
      },
      updateFlashCard: function(word) {
        this.currentWord = word;
        this.wordActive = true;
      },
      addWord: function(word, language) {
        const LANGUAGE = database.ref(language);
        LANGUAGE.push({
          native: word.native,
          english: word.english,
          translations: word.translations,
          examples: word.examples
        });
      },
      removeWord: function(word, language) {
        if(confirm(`Ya sure you want to delete ${word.native}`)) {
          // remove it from firebase
        }
      },
      editWord: function(word, language) {

      }
    },
    created() {
      this.fetchLanguage('spanish');
    }
  });

})();