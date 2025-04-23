// Wood Elf name components
const woodElfNames = {
    sylvan: {
        male: {
            prefixes: ['Alder', 'Birch', 'Cedar', 'Elm', 'Fern', 'Grove', 'Hazel', 'Leaf', 'Oak', 'Pine', 'Rowan', 'Willow'],
            suffixes: ['wind', 'branch', 'wood', 'leaf', 'song', 'walker', 'weaver', 'heart', 'shadow', 'whisper']
        },
        female: {
            prefixes: ['Aspen', 'Autumn', 'Dawn', 'Fern', 'Flora', 'Ivy', 'Luna', 'Rose', 'Spring', 'Summer', 'Willow'],
            suffixes: ['bloom', 'breeze', 'dance', 'leaf', 'light', 'petal', 'song', 'star', 'whisper']
        },
        neutral: {
            prefixes: ['Ash', 'Dusk', 'Echo', 'Frost', 'Mist', 'Rain', 'Sky', 'Storm', 'Wind'],
            suffixes: ['song', 'whisper', 'heart', 'spirit', 'voice', 'walker', 'weaver']
        }
    },
    ancient: {
        male: {
            prefixes: ['Ael', 'Cal', 'Eld', 'Gal', 'Kel', 'Mel', 'Syl', 'Tel', 'Vel'],
            suffixes: ['arion', 'endil', 'indor', 'ondor', 'orion', 'yrian']
        },
        female: {
            prefixes: ['Ara', 'Elo', 'Gala', 'Lora', 'Mira', 'Sila', 'Tara', 'Vana'],
            suffixes: ['riel', 'thiel', 'wen', 'weth', 'wyn']
        },
        neutral: {
            prefixes: ['Ain', 'Ean', 'Ith', 'Lor', 'Mir', 'Sil', 'Than'],
            suffixes: ['eth', 'ion', 'or', 'il', 'is']
        }
    },
    wild: {
        male: {
            prefixes: ['Bear', 'Hawk', 'Storm', 'Swift', 'Thunder', 'Wolf', 'Eagle'],
            suffixes: ['claw', 'fang', 'runner', 'seeker', 'stalker', 'striker']
        },
        female: {
            prefixes: ['Deer', 'Fox', 'Moon', 'Rain', 'Snow', 'Star', 'Wind'],
            suffixes: ['dancer', 'hunter', 'runner', 'singer', 'weaver']
        },
        neutral: {
            prefixes: ['Cloud', 'Dusk', 'Mist', 'Shadow', 'Storm', 'Wild'],
            suffixes: ['hunter', 'walker', 'seeker', 'spirit', 'watcher']
        }
    }
};

// Wood Elf surnames
const woodElfSurnames = {
    sylvan: ['Greenleaf', 'Silverbrook', 'Moonwhisper', 'Starweaver', 'Dawnkeeper', 'Forestborn', 'Wildwalker'],
    ancient: ['Amakiir', 'Galanodel', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient'],
    wild: ['Thornheart', 'Stormwind', 'Swiftshadow', 'Moonstalker', 'Nightrunner', 'Skywatcher', 'Beastfriend']
};

// Generate a single name
function generateName(gender, style) {
    const nameSet = woodElfNames[style][gender];
    const prefix = nameSet.prefixes[Math.floor(Math.random() * nameSet.prefixes.length)];
    const suffix = nameSet.suffixes[Math.floor(Math.random() * nameSet.suffixes.length)];
    const surname = woodElfSurnames[style][Math.floor(Math.random() * woodElfSurnames[style].length)];
    return { firstName: prefix + suffix, lastName: surname };
}

// Generate multiple names
function generateNames(count = 5) {
    const gender = document.getElementById('gender').value;
    const style = document.getElementById('nameStyle').value;
    const results = document.getElementById('results');
    
    results.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const { firstName, lastName } = generateName(gender, style);
        results.innerHTML += `
            <div class="flex flex-col mb-4">
                <div class="flex justify-between items-center">
                    <div class="font-cinzel text-white">${firstName} ${lastName}</div>
                    <div class="flex items-center gap-2">
                        <button onclick="copyToClipboard('${firstName} ${lastName}')" class="text-emerald-400 hover:text-emerald-300">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                        </button>
                        <button onclick="generateMoreLikeThis('${gender}', '${style}')" class="text-emerald-400 hover:text-emerald-300 text-xs">
                            More like this
                        </button>
                    </div>
                </div>
                <div class="text-emerald-400 text-xs mt-1">${gender.charAt(0).toUpperCase() + gender.slice(1)} · Wood-Elf</div>
            </div>
        `;
    }
}

// Helper functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function generateMoreLikeThis(gender, style, index) {
    const results = document.getElementById('results');
    const nameElements = results.children;
    
    // 生成新名字
    const { firstName, lastName } = generateName(gender, style);
    
    // 替换对应位置的名字
    nameElements[index].innerHTML = `
        <div class="flex justify-between items-center">
            <div class="font-cinzel text-white">${firstName} ${lastName}</div>
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
        </div>
        <div class="text-emerald-400 text-xs mt-1">${gender.charAt(0).toUpperCase() + gender.slice(1)} · Wood-Elf</div>
    `;
}

// Generate multiple names
function generateNames(count = 5) {
    const gender = document.getElementById('gender').value;
    const style = document.getElementById('nameStyle').value;
    const results = document.getElementById('results');
    
    results.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const { firstName, lastName } = generateName(gender, style);
        const nameContainer = document.createElement('div');
        nameContainer.className = 'flex flex-col mb-4';
        nameContainer.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="font-cinzel text-white">${firstName} ${lastName}</div>
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
            </div>
            <div class="text-emerald-400 text-xs mt-1">${gender.charAt(0).toUpperCase() + gender.slice(1)} · Wood-Elf</div>
        `;
        results.appendChild(nameContainer);
    }
}

// Generate similar names
function generateSimilarNames(firstName, lastName, style, gender, count = 3) {
    const names = [];
    for (let i = 0; i < count; i++) {
        const newName = generateName(gender, style);
        names.push(newName);
    }
    return names;
}

// Update name meanings description
function updateNameMeanings(style) {
    const nameMeaningsDiv = document.getElementById('nameMeanings');
    let meaningContent = '';
    
    switch(style) {
        case 'sylvan':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Sylvan Names</h3>
                <p class="mb-4">These names reflect the deep connection Wood Elves share with the forest. They combine natural elements with traditional elvish sounds.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Nature-inspired prefixes represent trees, plants, and natural phenomena</li>
                    <li>Suffixes often describe actions or qualities related to forest life</li>
                </ul>
            `;
            break;
        case 'ancient':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Ancient Names</h3>
                <p class="mb-4">These names draw from the oldest Wood Elf traditions, using classical elvish elements.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Traditional elvish prefixes carry meanings of wisdom and nobility</li>
                    <li>Classical suffixes follow ancient naming patterns</li>
                </ul>
            `;
            break;
        case 'wild':
            meaningContent = `
                <h3 class="text-xl font-cinzel font-bold mb-4">Wild Names</h3>
                <p class="mb-4">These names embody the untamed aspects of forest life and the wilderness.</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Prefixes often reference wild animals and natural forces</li>
                    <li>Suffixes describe wilderness-related traits and actions</li>
                </ul>
            `;
            break;
    }
    
    nameMeaningsDiv.innerHTML = meaningContent;
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', () => generateNames(5));
document.getElementById('nameStyle').addEventListener('change', (e) => updateNameMeanings(e.target.value));

// Initialize name meanings on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNameMeanings(document.getElementById('nameStyle').value);
});
