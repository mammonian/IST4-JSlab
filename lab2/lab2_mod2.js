(function (window) {
    const g_speaker = {};
    const g_word = "Goodbye";
  
    g_speaker.speak = function (name) {
      console.log(`${g_word} ${name}`);
    };
  
    window.g_speaker = g_speaker;
  })(window);
  