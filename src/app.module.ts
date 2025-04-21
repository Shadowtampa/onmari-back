import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IamModule } from './iam/iam.module';
import { validateSchemaEnv } from './helpers/validation-schema-env';
import { Product } from './products/models/product.model';
import { Customer } from './customers/models/customer.model';
import { Supplier } from './suppliers/models/supplier.model';
import { Order } from './orders/models/order.model';
import { OrderItem } from './orders/models/order-item.model';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
      validate: validateSchemaEnv,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('TYPEORM_HOST'),
        port: config.get<number>('TYPEORM_PORT'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        synchronize: true,
        entities: [
          Product,
          Customer,
          Supplier,
          Order,
          OrderItem,
          __dirname + '/**/*.{model,entity}.{ts,js}'
        ],
        migrations: ['dist/migrations/**/*.js'],
        subscribers: ['dist/subscriber/**/*.js'],
        cli: {
          migrationsDir: config.get<string>('TYPEORM_MIGRATIONS_DIR'),
          subscribersDir: config.get<string>('TYPEORM_SUBSCRIBERS_DIR'),
        },
      }),
    }),
    IamModule,
    UsersModule,
    ProductsModule,
    CustomersModule,
    SuppliersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
