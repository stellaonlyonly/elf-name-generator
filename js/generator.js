// 精灵名字数据库
const elfNames = {
    male: {
        prefixes: ['Aer', 'Cael', 'Eld', 'Gal', 'Kel', 'Lir', 'Mel', 'Nar', 'Sil', 'Tel'],
        suffixes: ['anor', 'arian', 'arion', 'astir', 'eanor', 'endil', 'idor', 'ion', 'ondil', 'oril']
    },
    female: {
        prefixes: ['Aer', 'Cel', 'Ela', 'Gal', 'Lia', 'Mir', 'Nar', 'Sil', 'Tia', 'Var'],
        suffixes: ['ael', 'anna', 'ara', 'elle', 'enna', 'indi', 'ora', 'rie', 'thea', 'wen']
    },
    surnames: ['Amakiir', 'Gemflower', 'Holimion', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient']
};

// 生成单个名字
function generateName(gender) {
    const nameSet = gender === 'any' ? 
        (Math.random() > 0.5 ? elfNames.male : elfNames.female) : 
        elfNames[gender];

    const prefix = nameSet.prefixes[Math.floor(Math.random() * nameSet.prefixes.length)];
    const suffix = nameSet.suffixes[Math.floor(Math.random() * nameSet.suffixes.length)];
    const surname = elfNames.surnames[Math.floor(Math.random() * elfNames.surnames.length)];

    return { firstName: prefix + suffix, lastName: surname };
}

// 生成多个名字
function generateNames(count = 5) {
    const gender = document.getElementById('gender').value;
    const results = document.getElementById('results');
    
    results.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const { firstName, lastName } = generateName(gender);
        const nameContainer = document.createElement('div');
        nameContainer.className = 'bg-emerald-100/50 p-3 rounded-lg mb-2'; // 减小内边距和下边距
        nameContainer.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-cinzel text-lg font-bold text-emerald-900">${firstName} ${lastName}</div>
                    <div class="text-emerald-700 text-xs font-medium mt-0.5">
                        ${gender === 'any' ? 'Random' : gender.charAt(0).toUpperCase() + gender.slice(1)} · Elf
                    </div>
                </div>
                <div class="flex items-center gap-1.5">
                    <button onclick="copyToClipboard('${firstName} ${lastName}')" 
                            class="text-emerald-700 hover:text-emerald-900 transition-colors p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </button>
                    <button onclick="generateSimilarName(${i})" 
                            class="text-emerald-700 hover:text-emerald-900 text-xs font-medium transition-colors">
                        More like this
                    </button>
                </div>
            </div>
        `;
        results.appendChild(nameContainer);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 复制成功
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// 生成相似名字
function generateSimilarName(index) {
    const gender = document.getElementById('gender').value;
    const { firstName, lastName } = generateName(gender);
    const nameElements = document.getElementById('results').children;
    
    if (nameElements[index]) {
        nameElements[index].innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-cinzel text-lg font-bold text-emerald-900">${firstName} ${lastName}</div>
                    <div class="text-emerald-700 text-xs font-medium mt-0.5">
                        ${gender === 'any' ? 'Random' : gender.charAt(0).toUpperCase() + gender.slice(1)} · Elf
                    </div>
                </div>
                <div class="flex items-center gap-1.5">
                    <button onclick="copyToClipboard('${firstName} ${lastName}')" 
                            class="text-emerald-700 hover:text-emerald-900 transition-colors p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </button>
                    <button onclick="generateSimilarName(${index})" 
                            class="text-emerald-700 hover:text-emerald-900 text-xs font-medium transition-colors">
                        More like this
                    </button>
                </div>
            </div>
        `;
    }
}

// 事件监听器
document.getElementById('generateBtn').addEventListener('click', () => generateNames(5));

// 页面加载时生成初始名字
document.addEventListener('DOMContentLoaded', () => generateNames(5));
