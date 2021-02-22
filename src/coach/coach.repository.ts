import { EntityRepository, Repository } from "typeorm";
import { Coach } from "./entity/coach.entity";

@EntityRepository(Coach)
export class CoachRepository extends Repository<Coach>{}