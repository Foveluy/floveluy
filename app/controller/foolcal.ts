import { Controller } from 'egg';


class FoolCalController extends Controller {
    async index() {
        let xmlbody: { [key: string]: any } = this.ctx.request.body;
        let toUser = xmlbody['xml']['FromUserName'];
        let Content: string = xmlbody['xml']['Content'];

        const foodspec = await this.ctx.service.food.calulate(Content.split(" "));
        if (foodspec.single === true && foodspec.notfound === true) {
            const joke = this.ctx.helper.utils.getJokerMsg(Content);
            this.ctx.body = this.ctx.helper.utils.returnWechatMsg(toUser, joke)
        } else {
            const msg = `「${foodspec.title}」\n${foodspec.cal}\n${foodspec.carbs}\n${foodspec.fat}\n${foodspec.pro}`;
            this.ctx.body = this.ctx.helper.utils.returnWechatMsg(toUser, msg)
        }

        this.ctx.set('Content-Type', 'text/plain; charset=utf-8');
    }
}

declare module 'egg' {
    export interface IController {
        foolcal: FoolCalController;

    }
}

module.exports = FoolCalController;