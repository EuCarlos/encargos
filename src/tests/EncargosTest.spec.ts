import { Encargos as ECG } from "../concerns/encargos"

describe('Encargos', () => {
    const EXPECTED_OBJECT = {
        id: "1ba6b604-da02-43bb-ac2c-c5638754b435",
        funcionario: "Marcelo Toledo",
        funcao: "Gerente de Produção",
        proventos: 10757.64,
        inss: 2151.52,
        sat_rat: 107.57,
        salario_educacao: 268.94,
        sistema_s: 355,
        ferias_e_abono: 1195.17,
        fgts: 860.61,
        decimo_terceiro: 896.11,
        descanso_semanal_remunerado: 2151.52,
        total_de_encargos_com_salario: 18744.11
    }
    it('should receive the same result as the constant EXPECTED_OBJECT', () => {
        const PROPERTIES = {
            id: "1ba6b604-da02-43bb-ac2c-c5638754b435",
            nome_funcionario: "Marcelo Toledo",
            funcao: "Gerente de Produção",
            proventos: 10757.64,

        }

        const RESULT = new ECG(PROPERTIES).get()

        expect(EXPECTED_OBJECT).toMatchObject(RESULT)
    })

    it('should not receive the same result as the constant EXPECTED_OBJECT', () => {
        const PROPERTIES = {
            id: "1ba6b604-da02-43bb-ac2c-c5638754b435",
            nome_funcionario: "Marcelo Toledo",
            funcao: "Gerente de Produção",
            proventos: 8517.12,

        }

        const RESULT = new ECG(PROPERTIES).get()

        expect(EXPECTED_OBJECT).not.toMatchObject(RESULT)
    })
})
