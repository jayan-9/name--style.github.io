let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;
let isDarkTheme = false;

const suggestionsData = {
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

// UPDATED: Now styles are organized by category as arrays
const stylesByCategory = {
  love: [
  {
    name: "love_style_1",
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
    name: "love_style_2",
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
  },
  {
    name: "love_style_6",
    prefix: "ᝰ.",
    suffix: "ᝰ.ᐟ࿐",
    map: {
      a: "𝚨", b: "𝚩", c: "𝚪", d: "𝚫", e: "𝚬", f: "𝚺", g: "𝛀", h: "𝚮", i: "𝚰", j: "𝗝",
      k: "𝚱", l: "𝚲", m: "𝚳", n: "𝚴", o: "𝚶", p: "𝚸", q: "𝚽", r: "𝗥", s: "𝚵", t: "𝚻",
      u: "𝚷", v: "𝚼", w: "𝗪", x: "𝚾", y: "𝚿", z: "𝚭",
      A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
      K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
      U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
    }
  }
],
 gamer: [
  {
    name: "gamer_style_1",
    prefix: "T͢N͢ ☯",
    suffix: "メ࿐",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
      A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
      K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
      U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
    }
  },
  {
    name: "gamer_style_2",
    prefix: "ᴏᴘ メ",
    suffix: "メ࿐",
    map: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
      A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
      K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
      U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
    }
  },
  {
    name: "gamer_style_3",
    prefix: "༺✗",
    suffix: "✗༻ᵒᵖ",
    map: {
      a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
      k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
      u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵",
      A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
      K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
      U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵"
    }
  }
],
  fancy: [
  {
    name: "fancy_style_3",
    prefix: "✨✗ ",
    suffix: " ✗✨࿐",
    map: {
      a: "𝙰", b: "𝙱", c: "𝙲", d: "𝙳", e: "𝙴", f: "𝙵", g: "𝙶", h: "𝙷", i: "𝙸", j: "𝙹",
      k: "𝙺", l: "𝙻", m: "𝙼", n: "𝙽", o: "𝙾", p: "𝙿", q: "𝚀", r: "𝚁", s: "𝚂", t: "𝚃",
      u: "𝚄", v: "𝚅", w: "𝚆", x: "𝚇", y: "𝚈", z: "𝚉",
      A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
      K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
      U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
    }
  },
  {
    name: "fancy_style_4",
    prefix: "꧁●⃝⛧",
    suffix: "●⃝⛧꧂",
    map: {
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
      k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
      u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
      A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
      K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
      U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
    }
  }
],
  font: [
  {
    name: "font_style_6",
    prefix: "",
    suffix: "",
    map: {
      a: "𝒜", b: "ℬ", c: "𝒞", d: "𝒟", e: "ℰ", f: "ℱ", g: "𝒢", h: "ℋ", i: "ℐ", j: "𝒥",
      k: "𝒦", l: "ℒ", m: "ℳ", n: "𝒩", o: "𝒪", p: "𝒫", q: "𝒬", r: "ℛ", s: "𝒮", t: "𝒯",
      u: "𝒰", v: "𝒱", w: "𝒲", x: "𝒳", y: "𝒴", z: "𝒵",
      A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
      K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
      U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
    }
  },
  {
    name: "font_style_7",
    prefix: "",
    suffix: "",
    map: {
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
      k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
      u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
      K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
      U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
    }
    }
  ]
};

const symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" },
    { symbol: "❮", name: "Left Arrow" },
    { symbol: "❯", name: "Right Arrow" },
    { symbol: "︻", name: "Left Gun" },
    { symbol: "︼", name: "Right Gun" },
    { symbol: "⫷", name: "Left Triple" },
    { symbol: "⫸", name: "Right Triple" },
    { symbol: "《", name: "Left Book" },
    { symbol: "》", name: "Right Book" },
    { symbol: "«", name: "Left Double" },
    { symbol: "»", name: "Right Double" },
    { symbol: "【", name: "Left Bracket" },
    { symbol: "】", name: "Right Bracket" },
    { symbol: "〖", name: "Left White" },
    { symbol: "〗", name: "Right White" },
    { symbol: "『", name: "Left Corner" },
    { symbol: "』", name: "Right Corner" },
    { symbol: "❰", name: "Heavy Left" },
    { symbol: "❱", name: "Heavy Right" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" },
    { symbol: "▓", name: "Dark Shade" },
    { symbol: "█", name: "Full Block" },
    { symbol: "▲", name: "Up Triangle" },
    { symbol: "▼", name: "Down Triangle" },
    { symbol: "◆", name: "Diamond" },
    { symbol: "▣", name: "Square with Dot" },
    { symbol: "◈", name: "Diamond in Square" },
    { symbol: "◉", name: "Fisheye" },
    { symbol: "◊", name: "Lozenge" },
    { symbol: "■", name: "Black Square" },
    { symbol: "□", name: "White Square" },
    { symbol: "▪", name: "Black Small Square" },
    { symbol: "▫", name: "White Small Square" }
  ],
  gun: [
    { symbol: "︻デ═一★彡", name: "Star Gun" },
    { symbol: "︻╦╤─ ▸▹", name: "PARAFAL" },
    { symbol: "︻デ═一", name: "Simple Gun" },
    { symbol: "︻╦̵̵͇̿̿̿̿╤──", name: "AKM" },
    { symbol: "├ ┱ ⋯", name: "MP40" },
    { symbol: "︻デ═一✷✷", name: "Flower Gun" }
  ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "☃︎", name: "Snowman" },
    { symbol: "💗᪲᪲᪲", name: "Hearts" }
  ]
};

// Function to add new styles dynamically
function addNewStyle(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  // Check if style already exists
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    console.log(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix,
    suffix: suffix,
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  console.log(`New style "${styleName}" added to ${category}`);
  
  // If this category is currently selected, regenerate styles
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
}

// Function to get random order of styles
function getRandomizedStyles(category) {
  const styles = stylesByCategory[category] || [];
  // Create a copy of the array
  const shuffled = [...styles];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Theme toggle function
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  setupEventListeners();
  loadSymbols('frames');
  
  // Add some example new styles (you can remove these or add your own)
  addNewStyle('love', 'love_style_3', '💝 ', ' 💝', {
    a: "å", b: "ß", c: "ç", d: "∂", e: "ê", f: "ƒ", g: "g", h: "h", i: "î", j: "j",
    k: "k", l: "l", m: "m", n: "ñ", o: "ø", p: "p", q: "q", r: "r",
    s: "§", t: "†", u: "û", v: "v", w: "w", x: "x", y: "ÿ", z: "z"
  });
  
  addNewStyle('gamer', 'gamer_style_3', '[PLAYER] ', '', {
    a: "α", b: "β", c: "ς", d: "δ", e: "ε", f: "ғ", g: "ɢ", h: "н", i: "ι", j: "ʝ",
    k: "κ", l: "ʟ", m: "м", n: "ɴ", o: "σ", p: "ρ", q: "q", r: "я",
    s: "s", t: "τ", u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z"
  });
});

function setupEventListeners() {
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
}

function convert(name, map) {
  return name.split("").map(ch => {
    // First try exact match (case sensitive)
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    // If no exact match, try lowercase version
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar];
    }
    
    // If still no match, return original character
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
  
  // Get randomized styles for current category
  const styles = getRandomizedStyles(currentFilter);
  
  if (!styles || styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category.</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  // Generate each style
  styles.forEach(style => {
    // Escape single quotes in the styled text for JavaScript
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
  
  // Update results count
  resultsCount.textContent = styles.length;
}

function selectCategory(type) {
  currentFilter = type;
  
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  // Hide suggestions when switching categories
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  // Auto-generate if there's a name
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    // Clear results if no name
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
    // Show suggestions
    suggestionsSection.classList.add('show');
    
    const currentSuggestions = suggestionsData[currentFilter] || [];
    
    if (currentSuggestions.length === 0) {
      suggestionsSection.innerHTML = '<p class="no-suggestions">No suggestions available for this category.</p>';
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
    
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    // Hide suggestions
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

function openSymbolTab(tabName) {
  // Update active tab
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(tabName)) {
      btn.classList.add('active');
    }
  });
  
  // Load symbols for this tab
  loadSymbols(tabName);
}

function loadSymbols(category) {
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available for this category.</p>';
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
  
  // Insert symbol at cursor position
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  
  // Update cursor position
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  
  // Trigger input event to auto-generate
  nameInput.dispatchEvent(new Event('input'));
  
  // Close modal
  closeSymbolModal();
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Show feedback on the button if available
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
        // Show a toast notification
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
   // Remove existing toast if any
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Export the function to add new styles globally
window.addNewStyle = addNewStyle;
