class CreateHospitals < ActiveRecord::Migration[5.1]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :htype
      t.timestamps
    end
  end
end
