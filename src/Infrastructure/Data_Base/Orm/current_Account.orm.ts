import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Financial_Movement } from "../../../Domain/Entity/financial_Movement";

@Entity('CURRENT_ACCOUNTS')
export class Current_Account_Orm {

  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  public number: string;
  @Column()
  public balance: number;
  @Column()
  public ownerId: string;
  @Column()
  public city: string;
  @Column()
  public movements: Financial_Movement[];



}