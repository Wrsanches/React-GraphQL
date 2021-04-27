import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Entity
import { Offers } from './Offers';
import { Loans } from './Loans';
import { AuthUser } from './AuthUser';

@Entity()
export class Result extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Offers, (offer) => offer.result, {
    cascade: true,
  })
  offer: Offers;

  @ManyToOne(() => Loans, (loan) => loan.result, {
    cascade: true,
  })
  loan: Loans;

  @ManyToOne(() => AuthUser, (authUser) => authUser.result, {
    cascade: true,
  })
  authUser: AuthUser;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
