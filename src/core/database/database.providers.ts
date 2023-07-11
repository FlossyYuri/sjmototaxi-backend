import { Sequelize } from 'sequelize-typescript';
import { AppInfo } from 'src/modules/app-infos/app-info.entity';
import { Subject } from 'src/modules/subjects/subject.entity';
import { User } from 'src/modules/users/user.entity';
import { PRODUCTION, SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.production;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, AppInfo, Subject]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
