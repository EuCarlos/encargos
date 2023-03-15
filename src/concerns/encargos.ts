export class Encargos {
    private id: string;
    private funcionario: string;
    private funcao: string;
    private proventos: number;
    private inss: number;
    private sat_rat: number;
    private salario_educacao: number;
    private sistema_s: number;
    private ferias_e_abono: number;
    private fgts: number;
    private decimo_terceiro: number;
    private descanso_semanal_remunerado: number;
    private total_de_encargos_com_salario: number;

    constructor({ id, nome_funcionario, funcao, proventos }) {
        this.id = id;
        this.funcionario = nome_funcionario;
        this.funcao = funcao;
        this.proventos = proventos;
        this.inss = this.proventos * 20 / 100; 
        this.sat_rat = this.proventos * 1 / 100,
        this.salario_educacao = this.proventos * 2.5 / 100;
        this.sistema_s = this.proventos * 3.3 / 100;
        this.ferias_e_abono = this.proventos * 11.11 / 100;
        this.fgts = this.proventos * 8 / 100;
        this.decimo_terceiro = this.proventos * 8.33 / 100;
        this.descanso_semanal_remunerado = this.proventos * 20 / 100;
        this.total_de_encargos_com_salario = this.roundTo(
            (this.proventos) + (this.proventos * 20 / 100) + (this.proventos * 1 / 100) + 
            (this.proventos * 2.5 / 100) + (this.proventos * 3.3 / 100) + (this.proventos * 11.11 / 100) +
            (this.proventos * 8 / 100) + (this.proventos * 8.33 / 100) + (this.proventos * 20 / 100)
        , 2)
    }

    private roundTo(value: number, decimalPlaces: number): number {
        decimalPlaces = typeof decimalPlaces !== 'undefined' ?  decimalPlaces : 2;

        return +(Math.floor(+(value + ('e+' + decimalPlaces))) + ('e-' + decimalPlaces));
    }

    public get() {
        return {
            id: this.id,
            funcionario: this.funcionario,
            funcao: this.funcao,
            proventos: this.roundTo(this.proventos,2),
            inss: this.roundTo(this.inss,2), 
            sat_rat: this.roundTo(this.sat_rat,2),
            salario_educacao: this.roundTo(this.salario_educacao,2),
            sistema_s: this.roundTo(this.sistema_s,2),
            ferias_e_abono: this.roundTo(this.ferias_e_abono,2),
            fgts: this.roundTo(this.fgts,2),
            decimo_terceiro: this.roundTo(this.decimo_terceiro,2),
            descanso_semanal_remunerado: this.roundTo(this.descanso_semanal_remunerado,2),
            total_de_encargos_com_salario: this.roundTo(this.total_de_encargos_com_salario,2)
        }
    }
}