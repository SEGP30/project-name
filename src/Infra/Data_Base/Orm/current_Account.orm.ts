import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Financial_Movement } from "../../../Domain/Entity/financial_Movement";

@Entity('CURRENT_ACCOUNTS')
export class Current_AccountOrm{

  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public balance: number;
  @Column()
  public ownerId: string;
  @Column()
  public city: string;
  @Column()
  public movements: Financial_Movement[];



}