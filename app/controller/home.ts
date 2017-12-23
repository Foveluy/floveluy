import { Controller } from 'egg';


class HomeController extends Controller {
    async index() {
        const foodspec = await this.ctx.service.food.calulate(['苹果130', '香蕉130', '雪糕200', '蛋糕150']);

        this.ctx.body = `<h5>${foodspec.title}</h5>
        <p>${foodspec.cal}</p>
        <p>${foodspec.carbs}</p>
        <p>${foodspec.fat}</p>
        <p>${foodspec.pro}</p>
        注意：如果出现0g的数字，代表这种元素在此类物品里量太少，忽略不计`;

        this.ctx.set('Content-Type', 'text/html;charset=utf-8');
    }
}

declare module 'egg' {
    export interface IController {
        home: HomeController;
    }
}

module.exports = HomeController;