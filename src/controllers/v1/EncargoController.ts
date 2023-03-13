import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import EncargoRepository from 'src/repositories/EncargoRepository'
import { Encargos } from "src/concerns/encargos"

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

    return res.status(201).json({message:'Encargo created successfully!', isSuccess: true, data: encargo})
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

    const result = Encargos.execute(encargo);

    return res.json({message:'Successful operation!', isSuccess: true, data: result})
  }

  async show(req: Request, res: Response) {
    const encargoRepository = getCustomRepository(EncargoRepository)

    const encargos = await encargoRepository.find()

    if(!encargos) return res.json({ message:'Successful operation!', isSuccess: true })

    const results = encargos.map(({ id, nome_funcionario, proventos }) => {
      return {
        id: id,
        funcionario: nome_funcionario,
        proventos: proventos,
        inss: proventos * 20 / 100, 
        sat_rat: proventos * 1 / 100,
        salario_educacao: proventos * 2.5 / 100,
        sistema_s: proventos * 3.3 / 100,
        ferias_e_abono: proventos * 11.11 / 100,
        fgts: proventos * 8 / 100,
        decimo_terceiro: proventos * 8.33 / 100,
        descanso_semanal_remunerado: proventos * 20 / 100,
        total_de_encargos_com_salario: 
          (proventos) + (proventos * 20 / 100) + (proventos * 1 / 100) + 
          (proventos * 2.5 / 100) + (proventos * 3.3 / 100) + (proventos * 11.11 / 100) +
          (proventos * 8 / 100) + (proventos * 8.33 / 100) + (proventos * 20 / 100),
      }
    })

    // const results = encargos.map(props => Encargos.execute(props));

    return res.json({ message:'Successful operation!', isSuccess: true, data: results })
  }
}

export default new EncargoController()
