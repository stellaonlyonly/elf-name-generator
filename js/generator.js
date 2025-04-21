// Elf name database
const nameData = {
    high: {
        prefixes: {
            male: ['Ae', 'Gal', 'Cel', 'El', 'Ael', 'Fen', 'Thal', 'Mel'],
            female: ['Ara', 'Eil', 'Sil', 'Lae', 'Cae', 'Ael', 'Tha', 'Mel']
        },
        suffixes: {
            male: ['dor', 'ion', 'thor', 'ril', 'mir', 'nor', 'dril', 'ron'],
            female: ['wen', 'riel', 'thil', 'ria', 'lia', 'dra', 'nya', 'ra']
        }
    },
    wood: {
        prefixes: {
            male: ['Tae', 'Fae', 'Dae', 'Nal', 'Bae', 'Lor', 'Kel', 'Fin'],
            female: ['Fae', 'Mae', 'Tae', 'Lae', 'Nae', 'Kel', 'Lia', 'Wyn']
        },
        suffixes: {
            male: ['lan', 'dar', 'rin', 'las', 'len', 'dor', 'nar', 'lin'],
            female: ['lyn', 'dra', 'wen', 'ria', 'lea', 'dae', 'rae', 'na']
        }
    },
    dark: {
        prefixes: {
            male: ['Dri', 'Vic', 'Mal', 'Noc', 'Vae', 'Zar', 'Kae', 'Tyr'],
            female: ['Vic', 'Nae', 'Shi', 'Vel', 'Zar', 'Syn', 'Lil', 'Dae']
        },
        suffixes: {
            male: ['zak', 'ren', 'thar', 'kin', 'raz', 'dar', 'kos', 'vir'],
            female: ['ra', 'ren', 'ria', 'tra', 'na', 'tha', 'dra', 'va']
        }
    }
};

// Select a random element from an array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate an elf name
function generateElfName(gender, elfType) {
    const type = nameData[elfType];
    const actualGender = gender === 'any' ? randomChoice(['male', 'female']) : gender;
    
    // 生成姓氏
    const familyPrefix = randomChoice(type.prefixes[actualGender]);
    const familySuffix = randomChoice(type.suffixes[actualGender]);
    const familyName = familyPrefix + familySuffix;
    
    // 生成名字
    const namePrefix = randomChoice(type.prefixes[actualGender]);
    const nameSuffix = randomChoice(type.suffixes[actualGender]);
    const firstName = namePrefix + nameSuffix;
    
    return `${firstName} ${familyName}`;
}

// Generate multiple names
function generateNames(count = 3) {
    const gender = document.getElementById('gender').value;
    const elfType = document.getElementById('elfType').value;
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const name = generateElfName(gender, elfType);
        const nameElement = document.createElement('div');
        nameElement.className = 'bg-white p-3 rounded-lg shadow border border-emerald-100 hover:shadow-lg transition-shadow';
        nameElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="text-lg font-cinzel font-bold text-emerald-800">${name}</h4>
                    <div class="font-raleway text-sm text-gray-600 mt-1">
                        ${gender === 'any' ? 'Random Gender' : (gender === 'male' ? 'Male' : 'Female')} · 
                        ${elfType === 'high' ? 'High Elf' : (elfType === 'wood' ? 'Wood Elf' : 'Dark Elf')}
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button onclick="copyToClipboard('${name}')" class="text-gray-500 hover:text-emerald-600" title="Copy">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    </button>
                    <button onclick="generateSimilarNames('${name}', this)" class="text-gray-500 hover:text-emerald-600 flex items-center space-x-1" title="More like this">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                        <span class="text-sm">More like this</span>
                    </button>
                </div>
            </div>
        `;
        resultsDiv.appendChild(nameElement);
    }
}

// 添加复制功能
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 可以添加复制成功的提示
    });
}

// 生成相似名字
function generateSimilarNames(name, element) {
    if (!element) return;  // 添加安全检查
    
    const gender = document.getElementById('gender').value;
    const elfType = document.getElementById('elfType').value;
    
    // 生成新名字
    const newName = generateElfName(gender, elfType);
    
    // 更新当前元素的内容
    const nameContainer = element.closest('.bg-white');
    if (!nameContainer) return;  // 添加安全检查
    
    nameContainer.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h4 class="text-lg font-cinzel font-bold text-emerald-800">${newName}</h4>
                <div class="font-raleway text-sm text-gray-600 mt-1">
                    ${gender === 'any' ? 'Random Gender' : (gender === 'male' ? 'Male' : 'Female')} · 
                    ${elfType === 'high' ? 'High Elf' : (elfType === 'wood' ? 'Wood Elf' : 'Dark Elf')}
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <button onclick="copyToClipboard('${newName}')" class="text-gray-500 hover:text-emerald-600" title="Copy">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </button>
                <button onclick="generateSimilarNames('${newName}', this)" class="text-gray-500 hover:text-emerald-600 flex items-center space-x-1" title="More like this">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                    <span class="text-sm">More like this</span>
                </button>
            </div>
        </div>
    `;
}

// Add button click event listener
document.getElementById('generateBtn').addEventListener('click', () => generateNames(3));

// Generate initial set of names when page loads
document.addEventListener('DOMContentLoaded', () => generateNames(3));