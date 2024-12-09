(function (window) {
    const h_speaker = {};
    const h_word = "Hello";
  
    h_speaker.speak = function (name) {
      console.log(`${h_word} ${name}`);
    };
  
    window.h_speaker = h_speaker;
  })(window);
  