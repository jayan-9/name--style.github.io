let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;
let isDarkTheme = false;

// ==================== FLEXIBLE DATA STRUCTURES ====================

let suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "ɪᴍ • F ᴀ ɴ ɪ •々",
    "៚ɪ ᴛ ᴀ ᴄ ʜ ɪ ❶❶"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ  ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "आदिवासी ෴",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
    "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
    "𝘚𝘗ΞΞ𝘋",
    "ꫝυяα"
  ]
};

let stylesByCategory = {
  love: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
    }
  ],
  gamer: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
    }
  ],
  fancy: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
  }
  ],
  font: [
   {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
    } 
  ]
};

let symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" }
  ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "☃︎", name: "Snowman" }
  ]
};

// ==================== EASY-TO-USE FUNCTIONS ====================

// 1. ADD NEW STYLE (with both uppercase and lowercase)
window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    showToast(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix || "",
    suffix: suffix || "",
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  showToast(`New style "${styleName}" added to ${category}`);
  
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
};

// 2. ADD NEW SUGGESTION
window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) {
    loadSuggestions();
  }
  
  return true;
};

// 3. ADD NEW SYMBOLS
window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsData[symbolCategory].push({ symbol: symbol, name: name });
  showToast(`New symbol "${name}" added to ${symbolCategory}`);
  
  const modal = document.getElementById('symbolModal');
  if (modal.classList.contains('show')) {
    loadModalTabs();
  }
  
  return true;
};

// 4. ADD MULTIPLE SYMBOLS AT ONCE
window.addMultipleSymbols = function(symbolCategory, symbolsArray) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsArray.forEach(symbol => {
    symbolsData[symbolCategory].push(symbol);
  });
  
  showToast(`${symbolsArray.length} symbols added to ${symbolCategory}`);
  
  const modal = document.getElementById('symbolModal');
  if (modal.classList.contains('show')) {
    loadModalTabs();
  }
  
  return true;
};

// 5. ADD MULTIPLE SUGGESTIONS AT ONCE
window.addMultipleSuggestions = function(category, suggestionsArray) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsArray.forEach(suggestion => {
    suggestionsData[category].push(suggestion);
  });
  
  showToast(`${suggestionsArray.length} suggestions added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) {
    loadSuggestions();
  }
  
  return true;
};

// ==================== CORE FUNCTIONS ====================

function convert(name, map) {
  return name.split("").map(ch => {
    // 1. Try exact match (case sensitive)
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    // 2. Try lowercase version
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar];
    }
    
    // 3. Try uppercase version
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) {
      return map[upperChar];
    }
    
    // 4. Return original character
    return ch;
  }).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category. Add some styles using addStyle() function!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Shuffle styles for random order
  const shuffled = [...styles].sort(() => Math.random() - 0.5);
  
  shuffled.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const div = document.createElement('div');
    div.className = `style-box ${currentFilter}`;
    div.innerHTML = `
      <span class="style-text">${styled}</span>
      <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    `;
    result.appendChild(div);
  });
  
  resultsCount.textContent = styles.length;
}

function selectCategory(type) {
  currentFilter = type;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const toggleBtn = document.querySelector('.toggle-suggestions-btn');
  
  if (!suggestionsVisible) {
    suggestionsSection.classList.add('show');
    loadSuggestions();
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function loadSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const currentSuggestions = suggestionsData[currentFilter] || [];
  
  if (currentSuggestions.length === 0) {
    suggestionsSection.innerHTML = `
      <h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>
      <p class="no-suggestions">No suggestions available. Add some using addSuggestion() function!</p>
    `;
    return;
  }
  
  let html = `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
  html += `<div class="suggestions-grid">`;
  
  currentSuggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-box ${currentFilter}">
        <span class="suggestion-text">${suggestion}</span>
        <button class="suggestion-copy-btn" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  html += `</div>`;
  suggestionsSection.innerHTML = html;
}

function loadModalTabs() {
  const modalTabs = document.getElementById('modalTabs');
  let html = '';
  
  Object.keys(symbolsData).forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    html += `<button class="modal-tab-btn ${activeClass}" onclick="openSymbolTab('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
  });
  
  modalTabs.innerHTML = html;
  
  const firstCategory = Object.keys(symbolsData)[0];
  if (firstCategory) {
    openSymbolTab(firstCategory);
  }
}

function openSymbolTab(category) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category.toLowerCase())) {
      btn.classList.add('active');
    }
  });
  
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available. Add some using addSymbols() function!</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${escapedSymbol}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${escapedSymbol}', this)">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.dispatchEvent(new Event('input'));
  closeSymbolModal();
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        const originalClass = buttonElement.className;
        
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.className = originalClass;
        }, 1500);
      } else {
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// ==================== INITIALIZATION ====================

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  if (isDarkTheme) {
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
  loadModalTabs();
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Theme toggle button
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  
  // Auto-generate when typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) {
        generateStyles();
      }
    }, 300);
  });
  
  // Symbol picker button
  document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeSymbolModal();
    }
  });
  
  // Initial load
  loadModalTabs();

// ============ ADD ALL 112 FONT STYLES ============
// Style 1: Combining Ring Style
addStyle('font', 'font_combining_ring', '', '', {
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
});

// Style 2: Double Struck Circle Style
addStyle('font', 'font_double_struck_circle', '', '', {
  a: "𝕒⃟", b: "𝕓⃟", c: "𝕔⃟", d: "𝕕⃟", e: "𝕖⃟", f: "𝕗⃟", g: "𝕘⃟", h: "𝕙⃟", i: "𝕚⃟", j: "𝕛⃟",
  k: "𝕜⃟", l: "𝕝⃟", m: "𝕞⃟", n: "𝕟⃟", o: "𝕠⃟", p: "𝕡⃟", q: "𝕢⃟", r: "𝕣⃟", s: "𝕤⃟", t: "𝕥⃟",
  u: "𝕦⃟", v: "𝕧⃟", w: "𝕨⃟", x: "𝕩⃟", y: "𝕪⃟", z: "𝕫⃟",
  A: "𝕒⃟", B: "𝕓⃟", C: "𝕔⃟", D: "𝕕⃟", E: "𝕖⃟", F: "𝕗⃟", G: "𝕘⃟", H: "𝕙⃟", I: "𝕚⃟", J: "𝕛⃟",
  K: "𝕜⃟", L: "𝕝⃟", M: "𝕞⃟", N: "𝕟⃟", O: "𝕠⃟", P: "𝕡⃟", Q: "𝕢⃟", R: "𝕣⃟", S: "𝕤⃟", T: "𝕥⃟",
  U: "𝕦⃟", V: "𝕧⃟", W: "𝕨⃟", X: "𝕩⃟", Y: "𝕪⃟", Z: "𝕫⃟"
});

// Style 3: Greek Bold Style
addStyle('font', 'font_greek_bold', '', '', {
  a: "𝚨", b: "𝚩", c: "𝚪", d: "𝚫", e: "𝚬", f: "𝚺", g: "𝛀", h: "𝚮", i: "𝚰", j: "𝗝",
  k: "𝚱", l: "𝚲", m: "𝚳", n: "𝚴", o: "𝚶", p: "𝚸", q: "𝚽", r: "𝗥", s: "𝚵", t: "𝚻",
  u: "𝚷", v: "𝚼", w: "𝗪", x: "𝚾", y: "𝚿", z: "𝚭",
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
});

// Style 4: Script Style
addStyle('font', 'font_script', '', '', {
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
});

// Style 5: Bold Fraktur Style
addStyle('font', 'font_bold_fraktur', '', '', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 6: Script Capital Style
addStyle('font', 'font_script_capital', '', '', {
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿",
  k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
  u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
  K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
  U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
});

// Style 7: Double Struck Style
addStyle('font', 'font_double_struck', '', '', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 8: Sans Serif Bold Italic
addStyle('font', 'font_sans_serif_bold_italic', '', '', {
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
});

// Style 9: Italic Style
addStyle('font', 'font_italic', '', '', {
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
});

// Style 10: Squared Style
addStyle('font', 'font_squared', '', '', {
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉",
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
});

// Style 11: Sans Serif Italic
addStyle('font', 'font_sans_serif_italic', '', '', {
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 12: Negative Squared Style
addStyle('font', 'font_negative_squared', '', '', {
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩"
});

// Style 13: Superscript Box Style
addStyle('font', 'font_superscript_box', '', '', {
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠",
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠"
});

// Style 14: Circled Style
addStyle('font', 'font_circled', '', '', {
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
});

// Style 15: Bold Italic Style
addStyle('font', 'font_bold_italic', '', '', {
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
});

// Style 16: Negative Circled Style
addStyle('font', 'font_negative_circled', '', '', {
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉",
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉"
});

// Style 17: Bold Style
addStyle('font', 'font_bold', '', '', {
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
});

// Style 18: Greek Alternate Style
addStyle('font', 'font_greek_alternate', '', '', {
  a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
  k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
  u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
});

// Style 19: Strikethrough Style
addStyle('font', 'font_strikethrough', '', '', {
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
});

// Style 20: Underline Circle Style
addStyle('font', 'font_underline_circle', '', '', {
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ☻", o: "🅞 ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮",
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ☻", O: "🅞 ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮"
});

// Style 21: Superscript Style
addStyle('font', 'font_superscript', '', '', {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
});

// Style 22: Greek Small Style
addStyle('font', 'font_greek_small', '', '', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
  K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
  U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
});

// Style 23: Double Underline Style
addStyle('font', 'font_double_underline', '', '', {
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽",
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽"
});

// Style 24: Sans Serif Italic 2
addStyle('font', 'font_sans_serif_italic_2', '', '', {
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 25: Monospace Style
addStyle('font', 'font_monospace', '', '', {
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
});

// Style 26: Greek Style 2
addStyle('font', 'font_greek_2', '', '', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
});

// Style 27: Currency Style
addStyle('font', 'font_currency', '', '', {
  a: "₳", b: "₲", c: "₵", d: "Đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "Ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ",
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ƶ"
});

// Style 28: Small Caps Style
addStyle('font', 'font_small_caps', '', '', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
});

// Style 29: Double Overline Style
addStyle('font', 'font_double_overline', '', '', {
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾",
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾"
});

// Style 30: Alternate Style
addStyle('font', 'font_alternate', '', '', {
  a: "Λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "Ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
  k: "Ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
  u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ",
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
  K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
  U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ"
});

// Style 31: Mixed Style
addStyle('font', 'font_mixed', '', '', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "፝ᴛ", v: "ᑌ", w: "ᐯ", x: "᭙", y: "᥊", z: "ᥒ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "፝ᴛ", V: "ᑌ", W: "ᐯ", X: "᭙", Y: "᥊", Z: "ᥒ"
});

// Style 32: Extended Style
addStyle('font', 'font_extended', '', '', {
  a: "ⱥ", b: "ᵬ", c: "ȼ", d: "ᶑ", e: "ɇ", f: "ᶂ", g: "ᶃ", h: "ħ", i: "ᶖ", j: "ʝ",
  k: "ƙ", l: "ḽ", m: "ɱ", n: "ᶇ", o: "ø", p: "ᵽ", q: "ɋ", r: "ᶉ", s: "ʂ", t: "ȶ",
  u: "ʋ", v: "ᶌ", w: "ẅ", x: "ẋ", y: "ᶌ", z: "ʑ",
  A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
  K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
  U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ"
});

// Style 33: Fraktur Style
addStyle('font', 'font_fraktur', '', '', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 34: Greek Mathematical
addStyle('font', 'font_greek_mathematical', '', '', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "𝛂", B: "𝛃", C: "𝛇", D: "𝛅", E: "𝛆", F: "𝛇", G: "𝛓", H: "𝛑", I: "𝖎", J: "𝖏",
  K: "𝛋", L: "𝛊", M: "𝛍", N: "𝛈", O: "𝛐", P: "𝛒", Q: "𝛗", R: "𝛑", S: "𝛔", T: "𝛕",
  U: "𝛖", V: "𝛎", W: "𝛚", X: "𝛘", Y: "𝛙", Z: "𝛏"
});

// Style 35: Greek Alternate 2
addStyle('font', 'font_greek_alternate_2', '', '', {
  a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
  k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
  u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
});

// Style 36: Bold Alternate
addStyle('font', 'font_bold_alternate', '', '', {
  a: "Ꭿ", b: "Ᏸ", c: "Ꮸ", d: "Ꮄ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꮰ",
  k: "Ꮶ", l: "Ꮭ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮥ", t: "Ꮦ",
  u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "ጀ", y: "Ꮍ", z: "Ꮓ",
  A: "Ꭿ", B: "Ᏸ", C: "Ꮸ", D: "Ꮄ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꮰ",
  K: "Ꮶ", L: "Ꮭ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮥ", T: "Ꮦ",
  U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "ጀ", Y: "Ꮍ", Z: "Ꮓ"
});
// ============ FONT CATEGORY - ALL 114 STYLES ===========
// Style 37: Greek Small Style
addStyle('font', 'font_greek_small_37', '', '', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
  K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
  U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
});

// Style 38: Circle Accent Style
addStyle('font', 'font_circle_accent_38', '', '', {
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎",
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎"
});

// Style 39: Small Caps Dot Style
addStyle('font', 'font_small_caps_dot_39', '', '', {
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·",
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·"
});

// Style 40: Square Accent Style
addStyle('font', 'font_square_accent_40', '', '', {
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢",
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢"
});

// Style 41: Circle Dot Strikethrough Style
addStyle('font', 'font_circle_dot_strikethrough_41', '', '', {
  a: "ᵃ̸◯·", b: "ᵇ̸◯·", c: "ᶜ̸◯·", d: "ᵈ̸◯·", e: "ᵉ̸◯·", f: "ᶠ̸◯·", g: "ᵍ̸◯·", h: "ʰ̸◯·", i: "ⁱ̸◯·", j: "ʲ̸◯·",
  k: "ᵏ̸◯·", l: "ˡ̸◯·", m: "ᵐ̸◯·", n: "ⁿ̸◯·", o: "ᵒ̸◯·", p: "ᵖ̸◯·", q: "ᵠ̸◯·", r: "ʳ̸◯·", s: "ˢ̸◯·", t: "ᵗ̸◯·",
  u: "ᵘ̸◯·", v: "ᵛ̸◯·", w: "ʷ̸◯·", x: "ˣ̸◯·", y: "ʸ̸◯·", z: "ᶻ̸◯·",
  A: "ᴬ̸◯·", B: "ᴮ̸◯·", C: "ᶜ̸◯·", D: "ᴰ̸◯·", E: "ᴱ̸◯·", F: "ᶠ̸◯·", G: "ᴳ̸◯·", H: "ᴴ̸◯·", I: "ᴵ̸◯·", J: "ᴶ̸◯·",
  K: "ᴷ̸◯·", L: "ᴸ̸◯·", M: "ᴹ̸◯·", N: "ᴺ̸◯·", O: "ᴼ̸◯·", P: "ᴾ̸◯·", Q: "ᵠ̸◯·", R: "ᴿ̸◯·", S: "ˢ̸◯·", T: "ᵀ̸◯·",
  U: "ᵁ̸◯·", V: "ⱽ̸◯·", W: "ᵂ̸◯·", X: "ˣ̸◯·", Y: "ʸ̸◯·", Z: "ᶻ̸◯·"
});

// Style 42: Double Tilde Strikethrough Style
addStyle('font', 'font_double_tilde_strikethrough_42', '', '', {
  a: "a̸~~", b: "b̸~~", c: "c̸~~", d: "d̸~~", e: "e̸~~", f: "f̸~~", g: "g̸~~", h: "h̸~~", i: "i̸~~", j: "j̸~~",
  k: "k̸~~", l: "l̸~~", m: "m̸~~", n: "n̸~~", o: "o̸~~", p: "p̸~~", q: "q̸~~", r: "r̸~~", s: "s̸~~", t: "t̸~~",
  u: "u̸~~", v: "v̸~~", w: "w̸~~", x: "x̸~~", y: "y̸~~", z: "z̸~~",
  A: "A̸~~", B: "B̸~~", C: "C̸~~", D: "D̸~~", E: "E̸~~", F: "F̸~~", G: "G̸~~", H: "H̸~~", I: "I̸~~", J: "J̸~~",
  K: "K̸~~", L: "L̸~~", M: "M̸~~", N: "N̸~~", O: "O̸~~", P: "P̸~~", Q: "Q̸~~", R: "R̸~~", S: "S̸~~", T: "T̸~~",
  U: "U̸~~", V: "V̸~~", W: "W̸~~", X: "X̸~~", Y: "Y̸~~", Z: "Z̸~~"
});

// Style 43: Triangle Strikethrough Style
addStyle('font', 'font_triangle_strikethrough_43', '', '', {
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵",
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵"
});

// Style 44: Circle Dot 2 Strikethrough Style
addStyle('font', 'font_circle_dot2_strikethrough_44', '', '', {
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉",
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉"
});

// Style 45: Greek Alternate 3 Style
addStyle('font', 'font_greek_alternate_3_45', '', '', {
  a: "Λ", b: "Β", c: "Ͻ", d: "Ɗ", e: "Ξ", f: "Ƒ", g: "Ɠ", h: "H", i: "Ι", j: "Ј",
  k: "Κ", l: "ᒪ", m: "Μ", n: "Ν", o: "Ø", p: "Ρ", q: "Ԛ", r: "Я", s: "Ѕ", t: "Τ",
  u: "U", v: "V", w: "Ω", x: "Χ", y: "Υ", z: "Ζ",
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
});

// Style 46: Double Subscript Style
addStyle('font', 'font_double_subscript_46', '', '', {
  a: "ḁͦ", b: "b̥ͦ", c: "c̥ͦ", d: "d̥ͦ", e: "e̥ͦ", f: "f̥ͦ", g: "g̥ͦ", h: "h̥ͦ", i: "i̥ͦ", j: "j̥ͦ",
  k: "k̥ͦ", l: "l̥ͦ", m: "m̥ͦ", n: "n̥ͦ", o: "o̥ͦ", p: "p̥ͦ", q: "q̥ͦ", r: "r̥ͦ", s: "s̥ͦ", t: "t̥ͦ",
  u: "u̥ͦ", v: "v̥ͦ", w: "w̥ͦ", x: "x̥ͦ", y: "y̥ͦ", z: "z̥ͦ",
  A: "Ḁͦ", B: "B̥ͦ", C: "C̥ͦ", D: "D̥ͦ", E: "E̥ͦ", F: "F̥ͦ", G: "G̥ͦ", H: "H̥ͦ", I: "I̥ͦ", J: "J̥ͦ",
  K: "K̥ͦ", L: "L̥ͦ", M: "M̥ͦ", N: "N̥ͦ", O: "O̥ͦ", P: "P̥ͦ", Q: "Q̥ͦ", R: "R̥ͦ", S: "S̥ͦ", T: "T̥ͦ",
  U: "U̥ͦ", V: "V̥ͦ", W: "W̥ͦ", X: "X̥ͦ", Y: "Y̥ͦ", Z: "Z̥ͦ"
});

// Style 47: Double Tilde Accent Style
addStyle('font', 'font_double_tilde_accent_47', '', '', {
  a: "A̵̔", b: "B̵̔", c: "C̵̔", d: "D̵̔", e: "E̵̔", f: "F̵̔", g: "G̵̔", h: "H̵̔", i: "I̵̔", j: "J̵̔",
  k: "K̵̔", l: "L̵̔", m: "M̵̔", n: "N̵̔", o: "O̵̔", p: "P̵̔", q: "Q̵̔", r: "R̵̔", s: "S̵̔", t: "T̵̔",
  u: "U̵̔", v: "V̵̔", w: "W̵̔", x: "X̵̔", y: "Y̵̔", z: "Z̵̔",
  A: "A̵̔", B: "B̵̔", C: "C̵̔", D: "D̵̔", E: "E̵̔", F: "F̵̔", G: "G̵̔", H: "H̵̔", I: "I̵̔", J: "J̵̔",
  K: "K̵̔", L: "L̵̔", M: "M̵̔", N: "N̵̔", O: "O̵̔", P: "P̵̔", Q: "Q̵̔", R: "R̵̔", S: "S̵̔", T: "T̵̔",
  U: "U̵̔", V: "V̵̔", W: "W̵̔", X: "X̵̔", Y: "Y̵̔", Z: "Z̵̔"
});

// Style 48: Katakana Small Style
addStyle('font', 'font_katakana_small_48', '', '', {
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ",
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ"
});

// Style 49: Hebrew Accent Style
addStyle('font', 'font_hebrew_accent_49', '', '', {
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟",
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟"
});

// Style 50: Cyrillic Style
addStyle('font', 'font_cyrillic_50', '', '', {
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉",
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉"
});
  
showToast("Styles loaded successfully!")  
  
});
