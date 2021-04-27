import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Entity
import { Loans } from './Loans';
import { Result } from './Result';

@Entity()
export class Offers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 10 })
  apr: string;

  @Column('varchar', { length: 10 })
  monthlyPayment: string;

  @Column('varchar', { length: 10 })
  timeRemaining: string;

  @Column('varchar', { length: 20 })
  lowerPayment: string;

  @ManyToOne(() => Loans, (loan) => loan.offer, {
    cascade: true,
  })
  loans: Loans;

  @OneToMany(() => Result, (result) => result.offer)
  result: Result;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
