import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEncargos1665175462441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "encargos",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  generationStrategy: "uuid",
                  default: "uuid_generate_v4()",
                },
                {
                  name: "nome_funcionario",
                  type: "varchar",
                },
                {
                  name: "funcao",
                  type: "varchar",
                },
                {
                  name: "proventos",
                  type: "decimal"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("encargos")
    }

}
