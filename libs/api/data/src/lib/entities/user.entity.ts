import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({tableName: 'users'})
export class UserEntity {
    @PrimaryKey()
    id!: number;

    @Property()
    username!: string;
}