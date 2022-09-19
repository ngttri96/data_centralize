module.exports.parseDate = (input, format) => {
    console.log
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g),
        i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function (part) { fmt[part] = i++; });
    return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
}

module.exports.parseFloatComma = (input) => {
    return parseFloat(input.replace(',', '.'));
}

module.exports.parseDuration = (input) => {
    const regex = /(\d+)\:(\d+)\:(\d+)/;
    const [_, h, m, s] = input.match(regex, 'g');
    return parseInt(s) + parseInt(m) * 60 + parseInt(h) *3600;
}

module.exports.removeLastChar = (input) => {
    return input.substring(0, input.length - 1);
}