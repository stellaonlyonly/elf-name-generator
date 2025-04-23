// 暗精灵名字数据
const darkElfNames = {
    male: {
        noble: {
            prefixes: ['Driz', 'Vick', 'Kaz', 'Pharaun', 'Ryld', 'Berg', 'Xull', 'Thax', 'Malag', 'Vorn', 'Dace', 'Kren', 'Zar', 'Drax', 'Keth'],
            suffixes: ['zt', 'on', 'nar', 'drin', 'ril', 'lak', 'thor', 'vir', 'zar', 'myr', 'den', 'kor', 'noth', 'roth', 'vex']
        },
        common: {
            prefixes: ['Var', 'Kel', 'Mer', 'Sorn', 'Tar', 'Nath', 'Reth', 'Shar', 'Kil', 'Mol', 'Vex', 'Thal', 'Gul', 'Bel', 'Drav'],
            suffixes: ['is', 'en', 'ak', 'yr', 'ex', 'ol', 'ar', 'in', 'or', 'us', 'ax', 'ir', 'uk', 'an', 'el']
        },
        ancient: {
            prefixes: ['Ilph', 'Szor', 'Quil', 'Zek', 'Mal', 'Vor', 'Thal', 'Khal', 'Nyx', 'Ryl', 'Vex', 'Myz', 'Azh', 'Yth', 'Xar'],
            suffixes: ['arn', 'rim', 'vir', 'thor', 'zin', 'dar', 'myr', 'oth', 'ael', 'yr', 'on', 'ax', 'or', 'yn', 'il']
        }
    },
    female: {
        noble: {
            prefixes: ['Vic', 'Tris', 'Qil', 'Mal', 'Zes', 'Lir', 'Syl', 'Nyx', 'Vae', 'Shi', 'Taz', 'Yrl', 'Zin', 'Kel', 'Myr'],
            suffixes: ['onia', 'ara', 'rae', 'ylla', 'stra', 'na', 'riel', 'vera', 'dra', 'lynn', 'thea', 'nova', 'ria', 'mira', 'vyne']
        },
        common: {
            prefixes: ['Shi', 'Vel', 'Min', 'Syl', 'Rin', 'Lun', 'Tris', 'Mel', 'Ves', 'Nir', 'Kae', 'Dae', 'Ryl', 'Tha', 'Zer'],
            suffixes: ['ra', 'ira', 'ara', 'iss', 'eth', 'ia', 'yn', 'wen', 'rin', 'sha', 'lyn', 'dra', 'ria', 'na', 'sa']
        },
        ancient: {
            prefixes: ['Ethe', 'Dris', 'Vhar', 'Jhal', 'Nyl', 'Ash', 'Qual', 'Xar', 'Thal', 'Myr', 'Shar', 'Vex', 'Zar', 'Quel', 'Nym'],
            suffixes: ['rra', 'yne', 'anna', 'ora', 'ira', 'ela', 'astra', 'yra', 'enna', 'aria', 'andra', 'estra', 'yria', 'ara', 'ella']
        }
    }
};

// 名字含义数据
const nameMeanings = {
    prefixes: {
        'Driz': 'Shadow Walker',
        'Vick': 'Dark Blade',
        'Vic': 'Victory Bearer',
        'Tris': 'Shadow Weaver',
        'Nyx': 'Night Sovereign',
        'Mal': 'Dark Power',
        'Syl': 'Silent Strike',
        'Zar': 'Void Master',
        'Vae': 'Twilight Queen',
        'Ash': 'Death Walker'
    },
    suffixes: {
        'zt': 'Noble Blood',
        'ara': 'Moonlight',
        'rae': 'Shadow Dancer',
        'thor': 'Dark Warrior',
        'vir': 'Ancient Power',
        'onia': 'Dark Grace',
        'ylla': 'Night Singer',
        'myr': 'Deep Magic',
        'stra': 'Blood Hunter',
        'vyne': 'Dark Crown'
    }
};

// 生成名字函数
function generateName(gender, style) {
    const namePool = gender === 'neutral' ? 
        Math.random() > 0.5 ? darkElfNames.male : darkElfNames.female :
        darkElfNames[gender];

    const stylePool = namePool[style];
    const firstName = stylePool.prefixes[Math.floor(Math.random() * stylePool.prefixes.length)] + 
                     stylePool.suffixes[Math.floor(Math.random() * stylePool.suffixes.length)];
    const lastName = stylePool.prefixes[Math.floor(Math.random() * stylePool.prefixes.length)] + 
                    stylePool.suffixes[Math.floor(Math.random() * stylePool.suffixes.length)];

    return [firstName, lastName];
}

// 生成多个名字
function generateNames(count = 5) {
    const gender = document.getElementById('gender').value;
    const style = document.getElementById('nameStyle').value;
    const results = document.getElementById('results');
    const nameMeaningsDiv = document.getElementById('nameMeanings');

    results.innerHTML = '';
    nameMeaningsDiv.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const [firstName, lastName] = generateName(gender, style);
        const nameElement = document.createElement('div');
        nameElement.className = 'bg-slate-700 rounded-lg p-3 mb-3';
        nameElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="text-lg md:text-base font-cinzel text-white">${firstName} ${lastName}</h3>
                    <p class="text-emerald-200 text-xs">${gender.charAt(0).toUpperCase() + gender.slice(1)} · Dark Elf</p>
                </div>
                <div class="flex space-x-2 items-center">
                    <button onclick="copyToClipboard('${firstName} ${lastName}')" 
                            class="text-emerald-200 hover:text-white p-1.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                        </svg>
                    </button>
                    <button onclick="generateSimilarNames('${gender}', '${style}')"
                            class="text-emerald-200 hover:text-white p-1.5">
                        <span class="text-xs">More like this</span>
                    </button>
                </div>
            </div>
        `;
        results.appendChild(nameElement);
    }

    // 添加名字含义说明
    nameMeaningsDiv.innerHTML = `
        <h3 class="text-lg md:text-xl font-cinzel font-bold mb-3">Understanding Dark Elf Names</h3>
        <p class="mb-3 text-sm">Dark Elf names reflect their social status and family traditions. Noble names are more complex and elegant, while common names are shorter and more forceful. Ancient names carry echoes of their forgotten history.</p>
        <p class="text-sm">Click on any name to copy it to your clipboard.</p>
    `;
}

// 生成相似名字
function generateSimilarNames(gender, style) {
    document.getElementById('gender').value = gender;
    document.getElementById('nameStyle').value = style;
    generateNames();
}

// 复制到剪贴板功能
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 可以添加复制成功的提示动画效果
    });
}

// 事件监听
document.getElementById('generateBtn').addEventListener('click', () => generateNames());

// 页面加载时生成初始名字
document.addEventListener('DOMContentLoaded', () => generateNames());


// 更新名字含义说明
function updateNameMeanings(style) {
    const nameMeaningsDiv = document.getElementById('nameMeanings');
    let meaningContent = '';
    
    switch(style) {
        case 'noble':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Noble Drow Names</h3>
                <p class="mb-4">Names of the drow nobility reflect their status and power within their society.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Often includes references to ancient drow houses</li>
                    <li>Emphasizes power and authority</li>
                    <li>Complex and formal structure</li>
                </ul>
            `;
            break;
        case 'common':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Common Drow Names</h3>
                <p class="mb-4">Names used by the general drow population, reflecting their underground culture.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Shorter and more practical names</li>
                    <li>Often related to underdark elements</li>
                    <li>Maintains traditional drow sounds</li>
                </ul>
            `;
            break;
        case 'ancient':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Ancient Drow Names</h3>
                <p class="mb-4">These names draw from the most ancient traditions of drow society, echoing their earliest days.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Complex syllable structures from ancient drow language</li>
                    <li>Often contains references to forgotten powers and rituals</li>
                    <li>Preserves archaic naming patterns</li>
                </ul>
            `;
            break;
    }
    
    nameMeaningsDiv.innerHTML = meaningContent;
}

// 事件监听器
document.getElementById('nameStyle').addEventListener('change', (e) => updateNameMeanings(e.target.value));

// 页面加载时初始化名字含义
document.addEventListener('DOMContentLoaded', () => {
    updateNameMeanings(document.getElementById('nameStyle').value);
});
