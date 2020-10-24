import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from '@modules/categories/infra/typeorm/entities/Category';
import Service from './Service';

@Entity('service_categories')
class ServiceCategories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  service_id: string;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, { cascade: true, eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

export default ServiceCategories;
