// tarot-data.js
const tarot = require('tarot-deck');

// 获取完整的塔罗牌数组
const fullDeck = tarot.tarotDeck;

// 为每张牌添加正位/逆位含义的格式化文本
const tarotCards = fullDeck.map(card => {
    return {
        name: card.name,
        suit: card.suit,
        rank: card.rank,
        keywords: card.keywords,
        meanings: {
            upright: card.meanings.light.join('，'),  // 正位含义
            reversed: card.meanings.shadow.join('，')  // 逆位含义
        }
    };
});

// 导出数据，供前端使用
console.log(JSON.stringify(tarotCards, null, 2));

// 如果你想保存到文件，可以用 Node.js 的 fs 模块
const fs = require('fs');
fs.writeFileSync('tarot-cards.json', JSON.stringify(tarotCards, null, 2));
console.log('✅ 塔罗牌数据已保存到 tarot-cards.json');