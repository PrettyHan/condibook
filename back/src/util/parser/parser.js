import { parser } from "url-meta-scraper";

async function parsers(url) {
    const urlMetaScraperResponse = getDataUsingUrlMetaScraper({ url });

    //title, description 둘 중에 아무것도 없다면 <title> 파싱
    if (urlMetaScraperResponse) {
        return { ...urlMetaScraperResponse };
    }

    const parseTitleTagResponse = getDataParseTitleTag({ url });

    return { ...parseTitleTagResponse };
}

async function getDataUsingUrlMetaScraper({ url }) {
    let title = null;
    let description = null;
    let img = null;

    try {
        const meta = await parser(url);

        const ogTitle = meta.og?.title || undefined;
        const ogDescription = meta.og?.description || undefined;
        const ogImg = meta.og?.image || undefined;

        const metaTitle = meta.meta?.title || undefined;
        const metaDescription = meta.meta?.description || undefined;
        const metaImg = meta.twitter?.image || undefined;

        title = ogTitle ?? metaTitle;
        description = ogDescription ?? metaDescription;
        img = ogImg ?? metaImg;

        return { title, description, img };
    } catch (e) {
        console.log(`이 사이트 ${url}는 파싱할 수 없습니다`);
        return null;
    }
}

async function getDataParseTitleTag({ url }) {
    try {
        const res = await fetch("http://example.com/");

        return { title: res.text().split("<title>")[1].split("</title>")[0] };
    } catch (e) {
        console.log(`이 사이트 ${url}는 파싱할 수 없습니다`);
        return null;
    }
}

export { parsers };
