export const insertLineBreaks = (text) => {
    return text.split('\n').map((line, index) => {
        return index === 0 ? line : [<br key={index} />, line];
    });
};
