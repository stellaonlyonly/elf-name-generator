// 半精灵名字数据
const halfElfNames = {
    male: {
        elvish: {
            prefixes: ['Aer', 'Cal', 'Ael', 'Gal', 'Syl', 'Thal', 'Fae', 'Kel', 'Lar', 'Mel'],
            suffixes: ['ion', 'andil', 'inar', 'asar', 'ien', 'aril', 'ador', 'elor', 'ian', 'amir']
        },
        human: {
            prefixes: ['Alex', 'James', 'Will', 'Mark', 'John', 'Rob', 'Tom', 'Chris', 'Dan', 'Mike'],
            suffixes: ['son', 'ton', 'ard', 'ric', 'win', 'ley', 'den', 'ford', 'land', 'wood']
        },
        balanced: {
            prefixes: ['Fin', 'Ash', 'Tae', 'Ren', 'Kai', 'Bran', 'Dar', 'Lyn', 'Tyr', 'Val'],
            suffixes: ['ren', 'mir', 'lan', 'thor', 'wyn', 'star', 'wind', 'light', 'fire', 'heart']
        }
    },
    female: {
        elvish: {
            prefixes: ['Ara', 'Lia', 'Syl', 'Ael', 'Ela', 'Mira', 'Tara', 'Vana', 'Yara', 'Zara'],
            suffixes: ['wen', 'riel', 'ara', 'enna', 'ira', 'indra', 'estra', 'aria', 'enna', 'yra']
        },
        human: {
            prefixes: ['Emma', 'Sarah', 'Anna', 'Mary', 'Laura', 'Kate', 'Rose', 'Grace', 'Jane', 'Beth'],
            suffixes: ['a', 'ia', 'ey', 'ine', 'elle', 'ette', 'lynn', 'rose', 'beth', 'anne']
        },
        balanced: {
            prefixes: ['Luna', 'Aria', 'Kira', 'Maya', 'Nova', 'Sera', 'Tara', 'Vela', 'Lyra', 'Mira'],
            suffixes: ['star', 'wind', 'light', 'song', 'heart', 'moon', 'fire', 'rain', 'dawn', 'sky']
        }
    }
};

// 姓氏数据
const surnames = {
    elvish: ['Silverleaf', 'Starweaver', 'Moonwhisper', 'Dawnwalker', 'Nightwind', 'Sunseeker', 'Stormweave', 'Lightbringer', 'Moonshadow', 'Starborn'],
    human: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Anderson', 'Taylor'],
    balanced: ['Twilightwalker', 'Dawnheart', 'Stormweaver', 'Moonfire', 'Starwind', 'Sunheart', 'Nightwalker', 'Lightweaver', 'Duskborn', 'Dawnsong']
};

// 名字含义数据
const nameMeanings = {
    prefixes: {
        'Aer': 'Sky Walker',
        'Cal': 'Light Bearer',
        'Luna': 'Moon Child',
        'Aria': 'Song Weaver',
        'Fin': 'Fair One',
        'Ash': 'Tree Guardian',
        'Tae': 'Star Born',
        'Sera': 'Evening Light'
    },
    suffixes: {
        'wen': 'Fair Lady',
        'riel': 'Crown Bearer',
        'star': 'Celestial One',
        'wind': 'Swift Runner',
        'heart': 'True Spirit',
        'fire': 'Flame Bearer',
        'light': 'Dawn Walker',
        'moon': 'Night Watcher'
    }
};

// 生成名字函数
function generateName(gender, style) {
    const namePool = gender === 'neutral' ? 
        Math.random() > 0.5 ? halfElfNames.male : halfElfNames.female :
        halfElfNames[gender];

    const stylePool = namePool[style];
    const firstName = stylePool.prefixes[Math.floor(Math.random() * stylePool.prefixes.length)] + 
                     stylePool.suffixes[Math.floor(Math.random() * stylePool.suffixes.length)];
    const lastName = surnames[style][Math.floor(Math.random() * surnames[style].length)];

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
                    <p class="text-emerald-200 text-xs">${gender.charAt(0).toUpperCase() + gender.slice(1)} · Half-Elf</p>
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
        <h3 class="text-lg md:text-xl font-cinzel font-bold mb-3">Understanding Half-Elf Names</h3>
        <p class="mb-3 text-sm">Half-Elf names blend the elegance of elvish naming traditions with human practicality. The style you choose influences whether the name leans more towards its elvish heritage, human roots, or strikes a balance between both.</p>
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
        case 'balanced':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Balanced Half-Elf Names</h3>
                <p class="mb-4">These names represent a perfect harmony between human and elvish heritage, creating unique and balanced combinations.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Names blend both cultural elements seamlessly</li>
                    <li>Often combines elvish prefixes with human suffixes or vice versa</li>
                    <li>Reflects the dual nature of half-elven identity</li>
                </ul>
            `;
            break;
        case 'elvish':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Elvish-Dominant Names</h3>
                <p class="mb-4">These names lean more heavily on elvish naming traditions while maintaining human influences.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Primarily uses elvish phonetics and structure</li>
                    <li>May include subtle human elements</li>
                    <li>Often chosen by those closer to their elvish heritage</li>
                </ul>
            `;
            break;
        case 'human':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Human-Dominant Names</h3>
                <p class="mb-4">These names primarily follow human naming conventions while incorporating elvish elements.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Based on human naming patterns</li>
                    <li>Includes subtle elvish influences</li>
                    <li>Popular among those raised in human communities</li>
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
