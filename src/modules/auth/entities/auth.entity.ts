import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('auth')
class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.auths, { onDelete: 'CASCADE' })
  user: User;

  @Column({
    type: 'varchar',
    length: 500,
  })
  accessToken: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  expiresAt: Date | null;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  refreshToken: string | null;

  constructor(
    user: User,
    accessToken: string,
    expiresAt: Date | null,
    refreshToken?: string,
  ) {
    this.user = user;
    this.accessToken = accessToken;
    this.expiresAt = expiresAt;
    this.isActive = true;
    this.refreshToken = refreshToken || null;
  }
}

export { Auth };
