import { Controller } from 'egg';


export default class InsKeeperController extends Controller {
    async index() {
        // let xmlbody: { [key: string]: any } = this.ctx.request.body;
        // let toUser = xmlbody['xml']['FromUserName'];
        // let Content: string = xmlbody['xml']['Content'];

        const urls = await this.ctx.service.inskeeper.fetchIns('https://www.instagram.com/p/BdCntYFhFBb/');
        this.ctx.body = urls.reduce((pre, next, index) => {
            if (index === 1) {
                return `<img src="${pre}"/>` + `<img src="${next}"/>`
            } else {
                return pre + `<img src="${next}"/>`
            }
        });

        this.ctx.set('Content-Type', 'text/html; charset=utf-8');
    }
}

declare module 'egg' {
    export interface IController {
        inskeeper: InsKeeperController;
    }
}