import { Column, Entity, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm'

import TxEntity from './TxEntity'

@Entity('block')
@Index('index_with_chainid_and_height', ['chainId', 'height'], { unique: true })
export default class BlockEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column()
  @Index('block_chain_id')
  chainId: string

  @Column()
  @Index('block_height')
  height: number

  @Index('block_timestamp')
  @Column()
  timestamp: Date

  @Column({ type: 'char', length: 51 })
  proposer: string

  @OneToMany(() => TxEntity, (txs) => txs.block, {
    cascade: true
  })
  txs: TxEntity[]
}
