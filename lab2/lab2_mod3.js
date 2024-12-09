(function () {
    const names = ["Mari", "Bill", "Mayson", "Kira", "Michael", "Jill", "Anna"];
  
    // Пройдемо по масиву імен
    names.forEach((name) => {
      const firstLetter = name.charAt(0).toLowerCase();
      if (firstLetter === "j") {
        g_speaker.speak(name);
      } else {
        g_speaker.speak(name);
      }
    });
  
    // Додатковий функціонал
    console.log("=== Додатковий функціонал: Фільтрація за сумою ASCII-кодів ===");
  
    const threshold = 500; // Поріг суми ASCII-кодів
    names.forEach((name) => {
      const asciiSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
      if (asciiSum > threshold) {
        console.log(`Special Selection: ${name} (ASCII Sum: ${asciiSum})`);
      }
    });
  })();
  