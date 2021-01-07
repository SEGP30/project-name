import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export class Generic_Repository<T> extends MongoRepository<T>{}