import { EntityRepository, Repository } from 'typeorm'
import Encargo from '@models/Encargo'

@EntityRepository(Encargo)
class EncargoRepository extends Repository<Encargo>{}

export default EncargoRepository
