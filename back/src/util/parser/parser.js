import { parser } from "url-meta-scraper";
import { XMLHttpRequest } from "xmlhttprequest";

async function parsers(url) {
    let title = null;
    let description = null;
    let img = null;

    const urlMetaScraperResponse = await getDataUsingUrlMetaScraper({ url });

    //title, description 둘 중에 아무것도 없다면 <title> 파싱
    if (urlMetaScraperResponse) {
        return { ...urlMetaScraperResponse };
    }

    const parseTitleTagResponse = await getDataParseTitleTag({ url });

    if (parseTitleTagResponse) {
        console.log(parseTitleTagResponse);
        return { title: parseTitleTagResponse.title, description, img };
    }

    return { title, description, img };
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
        console.log(`parser는 이 사이트 ${url}는 파싱할 수 없습니다`);
        return null;
    }
}

async function getDataParseTitleTag({ url }) {
    let title = null;
    try {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status == 200 || xhr.status == 201) {
                    // 요청이 정상적으로 처리 된 경우
                    console.log("responseText", xhr.responseText);
                    // title = xhr.responseText
                    //     .split("<title>")[1]
                    //     .split("</title>")[0];
                } else {
                    throw new Error(
                        `XMLHttpRequest는 이 사이트 ${url}는 파싱할 수 없습니다`,
                    );
                }
            }
        };
        xhr.open("get", url, true);
        // xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send();

        return { title };
    } catch (e) {
        console.log(e);
        return null;
    }
}

export { parsers };
