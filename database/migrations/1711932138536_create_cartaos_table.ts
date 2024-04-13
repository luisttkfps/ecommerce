import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cartoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cartao').notNullable()
      table.string('numero').notNullable()
      table.dateTime('validade').notNullable()
      table.string('cvv').notNullable()
      table.dateTime('data_criacao').notNullable()
      table.dateTime('data_mod').notNullable()
      table.integer('id_usuario').unsigned().references('id_usuario').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
