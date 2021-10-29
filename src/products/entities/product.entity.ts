import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  shortDescription: string;

  @Column()
  longDescription: string;

  @Column()
  imageCover: string;

  @Column()
  images: string[];
}
