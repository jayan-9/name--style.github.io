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
  gamer: [],
  fancy: [],
  font: []
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
});
