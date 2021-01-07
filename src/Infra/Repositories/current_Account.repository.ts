import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Current_AccountOrm } from "../Data_Base/Orm/current_Account.orm";
import { Generic_Repository } from "../Base/generic_Repository";

@Injectable()
@EntityRepository(Current_AccountOrm)
export class Current_AccountRepository extends Generic_Repository<Current_AccountOrm>{}