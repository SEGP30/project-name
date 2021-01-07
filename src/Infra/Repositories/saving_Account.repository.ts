import { Injectable } from "@nestjs/common";
import { EntityRepository } from "typeorm";
import { Saving_AccountOrm } from "../Data_Base/Orm/saving_Account.orm";
import { Generic_Repository } from "../Base/generic_Repository";

@Injectable()
@EntityRepository(Saving_AccountOrm)
export class Saving_AccountRepository extends Generic_Repository<Saving_AccountOrm>{}