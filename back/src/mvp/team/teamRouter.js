import { Router } from "express";
import { teamService } from "./teamService";
import { loginRequired } from "../../middlewares/loginRequired";
import { checkErrorMessage } from "../../middlewares/errorMiddleware";

const teamRouter = Router();

teamRouter.post("", loginRequired, async (req, res, next) => {
    try {
        const { name, explanation } = req.body;
        const { user_id } = req.current;

        const result = await teamService.createTeam({
            manager: user_id,
            name,
            explanation,
        });
        checkErrorMessage(result);

        res.status(201).send(result);
    } catch (e) {
        next(e);
    }
});

teamRouter.get("", async (req, res, next) => {
    try {
        const { search } = req.query;

        let result;
        if (search) {
            result = await teamService.searchTeam({ keyword: search });
        } else {
            result = await teamService.getTeamAll();
        }
        checkErrorMessage(result);

        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
});

teamRouter.get("/:id/info", async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await teamService.getTeamInfo({ ids: [id] });
        checkErrorMessage(result);

        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
});

export { teamRouter };
