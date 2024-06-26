import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuario'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('nome').nullable()
      table.string('cpf').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('senha').notNullable()
      table.dateTime('data_mod').notNullable()
      table.boolean('ativo').notNullable().defaultTo(true)
      table.boolean('validado').notNullable().defaultTo(false)
      table.dateTime('data_criacao').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
