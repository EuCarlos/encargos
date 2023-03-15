export class Encargos {
    private static roundTo(value: number, decimalPlaces: number): number {
        decimalPlaces = typeof decimalPlaces !== 'undefined' ?  decimalPlaces : 2;

        return +(Math.floor(+(value + ('e+' + decimalPlaces))) + ('e-' + decimalPlaces));
    }

    public static execute({ id, nome_funcionario, funcao, proventos }) {
        return {
            id: id,
            funcionario: nome_funcionario,
            funcao: funcao,
            proventos: proventos,
            inss: proventos * 20 / 100, 
            sat_rat: proventos * 1 / 100,
            salario_educacao: proventos * 2.5 / 100,
            sistema_s: proventos * 3.3 / 100,
            ferias_e_abono: proventos * 11.11 / 100,
            fgts: proventos * 8 / 100,
            decimo_terceiro: proventos * 8.33 / 100,
            descanso_semanal_remunerado: proventos * 20 / 100,
            total_de_encargos_com_salario: this.roundTo(
                (proventos) + (proventos * 20 / 100) + (proventos * 1 / 100) + 
                (proventos * 2.5 / 100) + (proventos * 3.3 / 100) + (proventos * 11.11 / 100) +
                (proventos * 8 / 100) + (proventos * 8.33 / 100) + (proventos * 20 / 100)
            , 2)
        }
    }
}