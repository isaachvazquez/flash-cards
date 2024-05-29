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
      // DATA
      searchKeyword: '',
      languages: ['Spanish', 'Tagalog', 'Russian', 'Hmong', 'Polish', 'ASL', 'Italian', 'Hindi'],
      downloadedLanguages: [],
      currentLanguage: 'spanish',
      categoryOptions: [
        {
          id: 'nouns', 
          label: 'Nouns'
        },
        {
          id: 'verbs', 
          label: 'Verbs'
        },
        {
          id: 'adjectives', 
          label: 'Adjectives'
        },
        {
          id: 'glue-words', 
          label: 'Glue Words'
        },
        {
          id: 'phrases', 
          label: 'Phrases'
        },
      ],
      activeCategories: [],
      words: [],
      currentWord: {
        native: '',
        english: '',
        translations: [],
        examples: []
      },
      newWord: {
        native: '',
        english: '',
        translations: [],
        examples: [],
        categories: [],
        src: ''
      },
      editingWord: {
        native: '',
        english: '',
        translations: [],
        examples: [],
        categories: [],
        src: ''
      },
      alreadyViewedThisCycle: [],

      // STATE
      flashCardActive: true,
      wordActive: true,
      modalActive: false
    },
    filters: {
      languageInitialCase: function() {

      }
    },
    computed: {
      wordsAlphabetical: function() {
        const vue = this;
        return this.words.filter(word => {
          // 

          // if(vue.activeCategories.length == 0) return true;
          if(vue.activeCategories.length == 0) return !word.categories;
          if(!word.categories) return false;

          return word.categories.some(category => vue.activeCategories.includes(category));
        }).filter(word => {
          console.log({word});
          const matchesKeyword = vue.searchKeyword == '' || word.native.toLowerCase().includes(vue.searchKeyword.toLowerCase()) || word.english.toLowerCase().includes(vue.searchKeyword.toLowerCase());
          console.log({matchesKeyword});
          return matchesKeyword;
        }).sort((a, b) => {
          const sortOrder = 1;
          // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
          const aSortValue = a.native.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          const bSortValue = b.native.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return (aSortValue === bSortValue ? 0 : aSortValue > bSortValue ? 1 : -1) * sortOrder;
        });
      }
    },
    methods: {
      toggleActiveCategory: function(category) {
        if(this.activeCategories.includes(category)) {
          const categoryIndex = this.activeCategories.findIndex(c => c == category);
          this.activeCategories.splice(categoryIndex, 1);
          this.newWord.categories.splice(categoryIndex, 1);
        } else {
          this.activeCategories.push(category);
          this.newWord.categories.push(category);
        }
      },
      resetActiveCategories: function() {
        this.activeCategories = [];
        this.newWord.categories = [];
      },
      changeLanguage: function() {
        console.log(`Changing to ${this.currentLanguage}...`);
        this.alreadyViewedThisCycle.splice(0, this.alreadyViewedThisCycle.length);
        this.fetchLanguage(this.currentLanguage);
      },
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

        const alreadyDownloaded = this.downloadedLanguages.find(l => l.language == language);
        if(alreadyDownloaded != undefined) {
          console.log('Use saved language...');
          this.words = [...alreadyDownloaded.vocabWords];
          this.next();
          this.flashCardActive = true;
        } else {
          console.log('Fetch new language...');
          const LANGUAGE = database.ref(language);
          LANGUAGE.once('value').then(snapshot => {
            for(item in snapshot.val()) {
              vocabWords.push({ ...snapshot.val()[item], id: item });
            }
  
            this.words = [...vocabWords];
            if(vocabWords.length > 0) {
              this.flashCardActive = true;
              this.next();
              
              // Save downloaded Language
              console.log('Saving Language...');
              this.downloadedLanguages.push({language, vocabWords});
              // console.log(this.downloadedLanguages);
            } else {
              this.flashCardActive = false;
            }
          });
        }
      },
      getRandomWord: function() {
        if(this.alreadyViewedThisCycle.length == this.wordsAlphabetical.length) this.alreadyViewedThisCycle.splice(0, this.alreadyViewedThisCycle.length);
        const randomIndex = Math.floor(Math.random() * this.wordsAlphabetical.length);
        const randomWord = this.wordsAlphabetical[randomIndex];
        const wordAlreadyBeenUsed = this.alreadyViewedThisCycle.some(w => w.id == randomWord.id);
        if (wordAlreadyBeenUsed) {
          // console.log('Getting a different word...');
          return this.getRandomWord();
        } else {
          this.alreadyViewedThisCycle.push(randomWord);
          return randomWord;
        }
      },
      flipCard: function() {
        this.wordActive = !this.wordActive;
      },
      updateFlashCard: function(word) {
        this.currentWord = word;
        this.wordActive = true;
      },
      resetNewWord: function() {
        this.newWord = {
          native: '',
          english: '',
          translations: [],
          examples: [],
          categories: [...this.activeCategories],
          src: '',
        }
      },
      addWord: function(language) {
        const vue = this;
        // Form is empty
        if(vue.newWord.native == '' || vue.newWord.english == '') return;

        // Word already exists
        if(this.words.some(w => w.native.toLowerCase() == vue.newWord.native.toLowerCase())) return;

        const LANGUAGE = database.ref(language);
        const newWord = {
          // native: vue.newWord.native,
          // english: vue.newWord.english,
          // translations: vue.newWord.translations,
          // examples: vue.newWord.examples
          ...vue.newWord
        };
        LANGUAGE.push(newWord);
        this.words.push(newWord);
        const savedLanguage = this.downloadedLanguages.find(l => l.language == language);
        if(savedLanguage) savedLanguage.vocabWords.push(newWord);
        this.resetNewWord();
      },
      removeWord: function(word, language) {
        if(confirm(`Ya sure you want to delete ${word.native}`)) {
          // remove it from firebase
          console.log({language});
          const LANGUAGE = database.ref(language);
          console.log({LANGUAGE});
          LANGUAGE.child(word.id).remove();

          // remove it from local this.words
          const removeIndex = this.words.findIndex(w => w.id == word.id);
          const removeIndexDL = this.downloadedLanguages.findIndex(w => w.id == word.id);
          this.words.splice(removeIndex, 1);
          this.downloadedLanguages.splice(removeIndexDL, 1);
        }
      },
      editWord: function(word, language) {
        if(!word.categories) word['categories'] = [];
        this.editingWord = {...{examples: [], translations: []}, ...word};
        this.openModal();
      },
      resetEditingWord: function () {
        this.editingWord = {
          native: '',
          english: '',
          translations: [],
          examples: [],
          categories: [],
          src: ''
        }
      },
      saveChanges: function(word, language) {
        const LANGUAGE = database.ref(language);
        const updatedWordIndex = this.words.findIndex(w => w.id == word.id);
        this.words.splice(updatedWordIndex, 1, word);
        LANGUAGE.child(word.id).update(word);
        this.closeModal();
      },
      addExample: function() {
        this.editingWord.examples.push('');
      },
      addTranslation: function() {
        this.editingWord.translations.push('');
      },
      openModal: function() {
        this.modalActive = true;
      },
      closeModal: function() {
        this.modalActive = false;
        this.resetEditingWord()
      },
    },
    created() {
      this.fetchLanguage('spanish');
    }
  });

})();
