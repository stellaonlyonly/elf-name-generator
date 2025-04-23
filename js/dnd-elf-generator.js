// D&D 精灵名字组件
const dndElfNames = {
    high: {
        male: {
            prefixes: ['Aer', 'Cael', 'Eld', 'Gal', 'Kel', 'Lir', 'Mel', 'Nar', 'Sil', 'Tel'],
            suffixes: ['anor', 'arian', 'arion', 'astir', 'eanor', 'endil', 'idor', 'ion', 'ondil', 'oril']
        },
        female: {
            prefixes: ['Aer', 'Cel', 'Ela', 'Gal', 'Lia', 'Mir', 'Nar', 'Sil', 'Tia', 'Var'],
            suffixes: ['ael', 'anna', 'ara', 'elle', 'enna', 'indi', 'ora', 'rie', 'thea', 'wen']
        },
        neutral: {
            prefixes: ['Aen', 'Cal', 'Eld', 'Fae', 'Kil', 'Lir', 'Myr', 'Ril', 'Syl', 'Tae'],
            suffixes: ['aen', 'eth', 'iar', 'iel', 'il', 'is', 'or', 'us', 'yn', 'yr']
        }
    },
    eladrin: {
        male: {
            prefixes: ['Ara', 'Ber', 'Cor', 'Dae', 'Eri', 'Fae', 'Gal', 'Ior', 'Lue', 'Mor'],
            suffixes: ['ath', 'elis', 'ior', 'ion', 'ith', 'olas', 'rian', 'thor', 'tian', 'vain']
        },
        female: {
            prefixes: ['Ara', 'Bri', 'Cae', 'Dae', 'Eri', 'Fae', 'Lir', 'Mor', 'Sha', 'Tia'],
            suffixes: ['elle', 'enna', 'estra', 'ianna', 'ira', 'ora', 'rie', 'sira', 'vera', 'yra']
        },
        neutral: {
            prefixes: ['Aur', 'Bri', 'Cae', 'Dae', 'Eri', 'Fae', 'Ior', 'Lir', 'Sha', 'Tae'],
            suffixes: ['ain', 'eth', 'ian', 'iel', 'il', 'ir', 'is', 'ol', 'or', 'yn']
        }
    },
    drow: {
        male: {
            prefixes: ['Ant', 'Dri', 'Erk', 'Fil', 'Gel', 'Kin', 'Rik', 'Sol', 'Tar', 'Vic'],
            suffixes: ['aar', 'ath', 'ein', 'eth', 'kin', 'rak', 'tar', 'tin', 'ven', 'zon']
        },
        female: {
            prefixes: ['Cha', 'Dri', 'Eli', 'Jha', 'Mal', 'Nhi', 'Que', 'Shi', 'Vic', 'Zar'],
            suffixes: ['ara', 'dra', 'kia', 'lica', 'na', 'ra', 'rra', 'stra', 'tra', 'va']
        },
        neutral: {
            prefixes: ['Ash', 'Dri', 'Eks', 'Fil', 'Kez', 'Nul', 'Ryl', 'Syl', 'Taz', 'Vex'],
            suffixes: ['ar', 'en', 'in', 'or', 'th', 'ur', 'yl', 'yn', 'yr', 'yx']
        }
    },
    wood: {
        male: {
            prefixes: ['Alder', 'Ash', 'Birch', 'Cedar', 'Elm', 'Hazel', 'Oak', 'Pine', 'Rowan', 'Willow'],
            suffixes: ['bark', 'branch', 'leaf', 'root', 'shadow', 'walker', 'wind', 'wood', 'whisper', 'weaver']
        },
        female: {
            prefixes: ['Aspen', 'Dawn', 'Fern', 'Iris', 'Ivy', 'Lily', 'Rose', 'Sage', 'Willow', 'Yew'],
            suffixes: ['bloom', 'breeze', 'dance', 'flower', 'heart', 'leaf', 'petal', 'song', 'whisper', 'wind']
        },
        neutral: {
            prefixes: ['Ash', 'Dusk', 'Echo', 'Fern', 'Mist', 'Rain', 'Shade', 'Storm', 'Wind', 'Wood'],
            suffixes: ['leaf', 'shadow', 'singer', 'spirit', 'walker', 'weaver', 'whisper', 'wind', 'wood', 'wraith']
        }
    },
    half: {
        male: {
            prefixes: ['Aen', 'Cal', 'Dor', 'Eld', 'Fen', 'Gal', 'Kan', 'Lar', 'Mal', 'Ral'],
            suffixes: ['an', 'ar', 'en', 'ian', 'ion', 'or', 'th', 'us', 'ven', 'wyn']
        },
        female: {
            prefixes: ['Ana', 'Bri', 'Cal', 'Dru', 'Ela', 'Fae', 'Kyl', 'Lae', 'Mia', 'Syl'],
            suffixes: ['a', 'elle', 'ena', 'era', 'ia', 'ira', 'ora', 'wen', 'wyn', 'yra']
        },
        neutral: {
            prefixes: ['Ain', 'Bae', 'Cal', 'Dae', 'Ean', 'Fae', 'Kai', 'Lae', 'Mae', 'Rae'],
            suffixes: ['an', 'ar', 'en', 'il', 'in', 'ir', 'or', 'th', 'yn', 'yr']
        }
    }
};

// D&D 精灵姓氏
const dndElfSurnames = {
    high: ['Amakiir', 'Gemflower', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient', 'Yaeldrin'],
    wood: ['Amastacia', 'Galanodel', 'Ilphukiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Teakeluu', 'Woodenhawk', 'Yeschant'],
    drow: ['Baenre', 'DeVir', 'Duskryn', 'Hunzrin', 'Melarn', 'Oblodra', 'T\'sarran', 'Vandree', 'Xorlarrin', 'Zolond'],
    eladrin: ['Brightwind', 'Moonwhisper', 'Starweaver', 'Sunseeker', 'Dawnspire', 'Frostweave', 'Summerwind', 'Winterveil', 'Autumnbrook', 'Springlight'],
    half: ['Amakiir', 'Caerdonel', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Woodenhawk']
};

// 生成单个名字
function generateName(gender, style) {
    const nameSet = dndElfNames[style][gender];
    const prefix = nameSet.prefixes[Math.floor(Math.random() * nameSet.prefixes.length)];
    const suffix = nameSet.suffixes[Math.floor(Math.random() * nameSet.suffixes.length)];
    const surname = dndElfSurnames[style][Math.floor(Math.random() * dndElfSurnames[style].length)];
    return { firstName: prefix + suffix, lastName: surname };
}

// 生成多个名字
function generateNames(count = 5) {
    const gender = document.getElementById('gender').value;
    const style = document.getElementById('nameStyle').value;
    const results = document.getElementById('results');
    
    results.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const { firstName, lastName } = generateName(gender, style);
        const nameContainer = document.createElement('div');
        nameContainer.className = 'flex justify-between items-center mb-4';
        nameContainer.innerHTML = `
            <div>
                <div class="font-cinzel">${firstName} ${lastName}</div>
                <div class="text-emerald-400 text-xs mt-1">${gender.charAt(0).toUpperCase() + gender.slice(1)} · ${style.charAt(0).toUpperCase() + style.slice(1)} Elf</div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="copyToClipboard('${firstName} ${lastName}')" class="text-emerald-400 hover:text-emerald-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </button>
                <button onclick="generateMoreLikeThis('${gender}', '${style}', ${i})" class="text-emerald-400 hover:text-emerald-300 text-xs">
                    More like this
                </button>
            </div>
        `;
        results.appendChild(nameContainer);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 可以添加复制成功的提示
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// 生成更多类似的名字
function generateMoreLikeThis(gender, style, index) {
    const results = document.getElementById('results');
    const nameElements = results.children;
    
    const { firstName, lastName } = generateName(gender, style);
    
    nameElements[index].innerHTML = `
        <div>
            <div class="font-cinzel">${firstName} ${lastName}</div>
            <div class="text-emerald-400 text-xs mt-1">${gender.charAt(0).toUpperCase() + gender.slice(1)} · ${style.charAt(0).toUpperCase() + style.slice(1)} Elf</div>
        </div>
        <div class="flex items-center gap-2">
            <button onclick="copyToClipboard('${firstName} ${lastName}')" class="text-emerald-400 hover:text-emerald-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
            </button>
            <button onclick="generateMoreLikeThis('${gender}', '${style}', ${index})" class="text-emerald-400 hover:text-emerald-300 text-xs">
                More like this
            </button>
        </div>
    `;
}

// 更新名字含义说明
function updateNameMeanings(style) {
    const nameMeaningsDiv = document.getElementById('nameMeanings');
    let meaningContent = '';
    
    switch(style) {
        case 'high':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">High Elf Names</h3>
                <p class="mb-4">High Elf names reflect their noble heritage and magical traditions. These names often have an ethereal, elegant quality.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names often incorporate elements meaning "star", "moon", or "light"</li>
                    <li>Suffixes frequently denote noble lineage or magical aptitude</li>
                    <li>Traditional naming patterns follow ancient elven customs</li>
                </ul>
            `;
            break;
        case 'wood':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Wood Elf Names</h3>
                <p class="mb-4">Wood Elf names are deeply connected to nature and the forest. They often incorporate elements from their woodland home.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names frequently reference trees, plants, and natural phenomena</li>
                    <li>Suffixes often describe actions or qualities related to forest life</li>
                    <li>Names reflect their deep connection to the natural world</li>
                </ul>
            `;
            break;
        case 'drow':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Drow Names</h3>
                <p class="mb-4">Drow names carry the weight of their Underdark heritage, often sharp and dramatic in sound.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names often have harsh consonants and dramatic sounds</li>
                    <li>Suffixes frequently denote house allegiance or personal power</li>
                    <li>Naming traditions reflect their complex social hierarchy</li>
                </ul>
            `;
            break;
        case 'eladrin':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Eladrin Names</h3>
                <p class="mb-4">Eladrin names reflect their connection to the Feywild and the changing seasons. Their names often carry an otherworldly, magical quality.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names often incorporate elements of nature and seasonal changes</li>
                    <li>Suffixes frequently relate to magical or fey concepts</li>
                    <li>Names may change with their seasonal aspects</li>
                </ul>
            `;
            break;
        case 'half':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Half-Elf Names</h3>
                <p class="mb-4">Half-Elf names blend human and elvish naming traditions, reflecting their dual heritage.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names may combine human and elvish elements</li>
                    <li>Some prefer purely elvish or human names</li>
                    <li>Surnames often reflect their elvish heritage</li>
                </ul>
            `;
            break;
    }
    
    nameMeaningsDiv.innerHTML = meaningContent;
}

// 事件监听器
document.getElementById('generateBtn').addEventListener('click', () => generateNames(5));
document.getElementById('nameStyle').addEventListener('change', (e) => updateNameMeanings(e.target.value));

// 页面加载时初始化名字含义
document.addEventListener('DOMContentLoaded', () => {
    updateNameMeanings(document.getElementById('nameStyle').value);
});
