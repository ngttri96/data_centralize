const {FacebookReader} = require('../reader/FacebookReader');
const {LazadaReader} = require('../reader/LazadaReader');
const { ShopeeReader } = require('../reader/ShopeeReader');
const { TiktokReader } = require('../reader/TikTokReader');
const { ExcelWriter } = require('../writer/ExcelWriter');

const writer = new ExcelWriter();
const readers = [
    // new FacebookReader(),
    new LazadaReader(),
    // new ShopeeReader(),
    // new TiktokReader(),
]

async function collectData() {
    const readerDatas = await Promise.all(readers.map(rd => rd.readFile()));
    // const datas = readerDatas.flatMap(datas => datas.map(dt => dt.convertToModel()));
    // writer.writeFile(datas)
}

collectData();