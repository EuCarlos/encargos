import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import EncargoRepository from 'src/repositories/EncargoRepository'
import { Encargos as ECG } from "src/concerns/encargos"

class EncargoController {
  async create(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const { nome_funcionario, funcao, proventos } = req.body

    const existsFuncionario = await encargoRepository.findOne({ nome_funcionario })

    if (existsFuncionario) {
     return res.status(400).json({message:'Funcionario already exists!', isSuccess: false})
    }

    const encargo = encargoRepository.create({
      nome_funcionario,
      funcao,
      proventos
    })

    await encargoRepository.save(encargo)

    return res.status(201).json({ message:'Encargo created successfully!', isSuccess: true, data: encargo })
  }

  async index(req: Request, res: Response) {
    const { encargoId } = req.params;

    const encargoRepository = getCustomRepository(EncargoRepository)

    const encargo = await encargoRepository.findOne({
      where: {
        id: encargoId,
      }
    })

    if(!encargo) return res.json({message:'Successful operation!', isSuccess: true})

    const result = new ECG(encargo).get();

    return res.json({message:'Successful operation!', isSuccess: true, data: result})
  }

  async show(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const encargos = await encargoRepository.find()

    if(!encargos) return res.json({ message:'Successful operation!', isSuccess: true })

    const results = encargos.map(props => new ECG(props).get());

    return res.json({ message:'Successful operation!', isSuccess: true, data: results })
  }

  async update(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)
    const { encargoId } = req.params;
    const updateProperty = req.body

    const existsFuncionario = await encargoRepository.findOne({ id: encargoId })

    if (!existsFuncionario) {
     return res.status(400).json({ message:'Non-existent employee!', isSuccess: false })
    }

    await encargoRepository.update(encargoId, {
      ...existsFuncionario, // existing fields
      ...updateProperty // updated fields
    })

    return res.json({ message:'Successful operation!', isSuccess: true })
  }

  async destroy(req: Request, res: Response) {
    const { encargoId } = req.params;
    const encargoRepository = getCustomRepository(EncargoRepository)

    await encargoRepository.delete(encargoId)

    return res.json({ message:'Successful operation!', isSuccess: true })
  }
}

export default new EncargoController()
