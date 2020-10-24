import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import ServiceCategories from './ServiceCategories';

@Entity('services')
class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  availability: string;

  @Column()
  likes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  provider_id: string;

  @ManyToOne(() => User, { cascade: true, eager: true })
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @OneToMany(() => ServiceCategories, category => category.service, {
    cascade: true,
    eager: true,
  })
  categories: ServiceCategories[];
}

export default Service;
