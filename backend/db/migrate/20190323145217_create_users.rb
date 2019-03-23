class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, unique: true, index: true
      t.string :username
      t.decimal :rating
      t.string :password_digest

      t.timestamps
    end
  end
end
