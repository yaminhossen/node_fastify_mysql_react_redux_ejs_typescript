import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_students_model from './user_students_model';
// import * as project_model from '../../user_admin copy/models/project_model';
require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASSWORD || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
    {
        logging: false,
    },
);

interface models {
    UserStudentsModel: typeof user_students_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const UserStudentsModel = user_students_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync({ force: false });

    // UserStudentsModel.hasMany(UserStudentSkillsModel, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_student_id',
    //     as: 'skills',
    // });

    // UserStudentInformationsModel.belongsTo(UserStudentsModel, {
    //     foreignKey: 'user_student_id',
    //     as: 'student',
    // });

    // BranchClassStudentsModel.hasOne(UserStudentInformationsModel, {
    //     sourceKey: 'branch_student_id',
    //     foreignKey: 'user_student_id',
    //     as: 'infostudent',
    // });

    // UserStudentsModel.belongsToMany(UserStudentsModel, {
    //     through: 'user_student_siblings',
    //     foreignKey: 'user_student_id',
    //     otherKey: 'sibling_student_id',
    //     as: 'user_siblings',
    // });

    let models: models = {
        UserStudentsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
