const censor = words => {
    const filtered = [];
    for (let i = 0, { length } = words; i < length; i++) {
        const word = words[i];
        if (word.length !== 4) filtered.push(word);
    }
    return filtered;
};
console.log(censor(['oops', 'gasp', 'shout', 'sun']));


const startsWithS = words => {
    const filtered = [];
    for (let i = 0, { length } = words; i < length; i++) {
        const word = words[i];
        if (word.startsWith('s')) filtered.push(word);
    }
    return filtered;
};
console.log(startsWithS(['oops', 'gasp', 'shout', 'sun']));