const {FacebookReader} = require('../reader/FacebookReader');
const {LazadaReader} = require('../reader/LazadaReader');
const { ShopeeReader } = require('../reader/ShopeeReader');
const { TiktokReader } = require('../reader/TikTokReader');

fbReader = new FacebookReader();
lzReader = new LazadaReader();
spReader = new ShopeeReader();
ttReader = new TiktokReader();

fbReader.readFile().then(res => {
    console.log(res);
})
// lzReader.readFile().then(res => {
//     console.log(res);
// })

// spReader.readFile().then(res => {
//     console.log(res);
// });

// ttReader.readFile().then(res => {
//     console.log(res);
// });