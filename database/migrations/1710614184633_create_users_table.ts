import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuario').primary().notNullable()
      table.string('nome').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('senha').notNullable()
      table.dateTime('data_mod').notNullable()
      table.boolean('ativo').notNullable().defaultTo(true)
      table.boolean('validado').notNullable().defaultTo(false)

      table.timestamp('data_criacao').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
