import { Router } from "express";
import { bookmarkService } from "./bookmarkService";
import { websiteSerivce } from "../website/websiteSerivce";
import { folderService } from "../folder/folderService";
import { loginRequired } from "../../middlewares/loginRequired";
import { checkErrorMessage } from "../../middlewares/errorMiddleware";
import { parsers } from "../../util/parser/parser";

const bookmarkRouter = Router();

bookmarkRouter.post("", loginRequired, async (req, res, next) => {
    try {
        const { url } = req.body;
        const { user_id } = req.current;
        const meta = await parsers(url);
        // 웹사이트 생성(키워드, 이모지 생성 -> 미완)
        const website = await websiteSerivce.createWebsite(url, meta);
        checkErrorMessage(website);
        const website_id = website.id;
        const websiteInfo = await websiteSerivce.getWebsite({ website_id });
        // 폴더 생성(키워드 중에 단어 골라서 폴더이름으로 설정 -> 미완)
        const folder = await folderService.createFolderForUser({
            requester_id: user_id,
            title: websiteInfo.keyword_list[0] ?? "temporary folder title",
        });
        checkErrorMessage(folder);

        // 북마크 생성
        const result = await bookmarkService.createBookmark({
            website_id: website.id,
            folder_id: folder.id,
        });
        checkErrorMessage(result);

        res.status(201).send(result);
    } catch (e) {
        next(e);
    }
});

bookmarkRouter.get("/:id", loginRequired, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user_id } = req.current;

        const result = await bookmarkService.getBookmark({
            bookmark_id: id,
            requester_id: user_id,
        });
        checkErrorMessage(result);

        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
});

bookmarkRouter.delete("/:id", loginRequired, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user_id } = req.current;

        const result = await bookmarkService.deleteBookmark({
            bookmark_id: id,
            requester_id: user_id,
        });
        checkErrorMessage(result);

        res.status(204).json(result);
    } catch (e) {
        next(e);
    }
});

export { bookmarkRouter };
