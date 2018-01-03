"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelDefine_1 = require("./ModelDefine");
module.exports = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const days = ModelDefine_1.ModelDefine(app, 'days', {
        title: STRING(128),
        bodypart: INTEGER,
        surface: {
            type: STRING(128),
            allowNull: true
        },
        plan_id: {
            type: INTEGER,
            allowNull: false
        },
        days_id: {
            type: INTEGER,
            allowNull: false
        }
    });
    return days;
};
