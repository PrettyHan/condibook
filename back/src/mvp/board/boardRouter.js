import { Router } from "express";
import { boardSerivce } from "./boardService";
import { loginRequired } from "../../middlewares/loginRequired";

const boardRouter = Router();

boardRouter.post("/", loginRequired, async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const id = req.current.user_id;
        const views = 0;
        const toCreate = {
            title,
            content,
            views,
        };
        const result = await boardSerivce.createBoard({ toCreate, id });
        console.log(req.current);
        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
});

boardRouter.get("/list", async (req, res, next) => {
    try {
        const result = await boardSerivce.getBoardList();
        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
});

boardRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await boardSerivce.getBoard({ id });
        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
});

boardRouter.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, content } = req.body ?? "";

        const toUpdate = {
            title,
            content,
        };
        const update = await boardSerivce.updateBoard({ id, toUpdate });
        if (update.errorMessage) {
            throw new Error(update.errorMessage);
        }
        const result = await boardSerivce.getBoard({ id });

        if (result.errorMessage) {
            throw new Error(result.errorMessage);
        }

        res.status(201).send("result");
    } catch (error) {
        next(error);
    }
});
export { boardRouter };
