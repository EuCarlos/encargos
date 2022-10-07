import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import EncargoRepository from 'src/repositories/EncargoRepository'

class EncargoController {
  async create(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const { nome_funcionario, funcao, proventos } = req.body

    const existsEncargo = await encargoRepository.findOne({ nome_funcionario })

    if (existsEncargo) {
        return res.status(400).json({message:'Encargo already exists!', isSuccess: false})
    }

    const encargo = encargoRepository.create({
      nome_funcionario,
      funcao,
      proventos
    })

    await encargoRepository.save(encargo)

    return res.status(201).json({message:'Encargo created successfully!', isSuccess: true, data: encargo})
  }

  async index(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const encargos = await encargoRepository.find()

    if(!encargos) return res.json({message:'Successful operation!', isSuccess: true})

    return res.json({message:'Successful operation!', isSuccess: true, data: encargos})
  }

  async show(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const { id } = req.params

    const encargo = await encargoRepository.findOne(id)

    if(!encargo) return res.json({message:'Successful operation!', isSuccess: true})

      const result = {
      id: encargos.id,
      funcionario: encargos.nome_funcionario,
      proventos: encargos.proventos,
      inss: encargos.proventos * 20 / 100, 
      sat_rat: encargos.proventos * 1 / 100,
      salario_educacao: encargos.proventos * 2.5 / 100,
      sistema_s: encargos.proventos * 3.3 / 100,
      ferias_e_abono: encargos.proventos * 11.11 / 100,
      fgts: encargos.proventos * 8 / 100,
      decimo_terceiro: encargos.proventos * 8.33 / 100,
      descanso_semanal_remunerado: encargos.proventos * 20 / 100,
      total_de_encargos_com_salario: encargos.proventos,
    }

    return res.json({message:'Successful operation!', isSuccess: true, data: result})
  }
}

export default new EncargoController()
