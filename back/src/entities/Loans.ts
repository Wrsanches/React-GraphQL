import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Entity
import { Offers } from './Offers';
import { AuthUser } from './AuthUser';
import { Result } from './Result';

@Entity()
export class Loans extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  vehicle: string;

  @Column('varchar', { length: 100 })
  image: string;

  @Column('varchar', { length: 4 })
  year: string;

  @Column('varchar', { length: 10 })
  miles: string;

  @Column('varchar', { length: 255 })
  lender: string;

  @Column('varchar', { length: 10 })
  apr: string;

  @Column('integer')
  loanBalance: number;

  @Column('varchar', { length: 10 })
  monthlyPayment: string;

  @Column('varchar', { length: 10 })
  timeRemaining: boolean;

  @OneToMany(() => Offers, (offer) => offer.loans)
  offer: Offers;

  @OneToMany(() => Result, (result) => result.loan)
  result: Result;

  @ManyToOne(() => AuthUser, (authUser) => authUser.loan, {
    cascade: true,
  })
  authUser: AuthUser;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
