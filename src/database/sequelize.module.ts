import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import {sequelizeOptions} from './sequelize.config';

export const sequelizeProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeOptions);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export const SequelizeDatabaseModule = SequelizeModule.forRootAsync({
  useFactory: () => sequelizeOptions,
});
