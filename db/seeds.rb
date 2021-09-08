# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demoUser = User.create(
      username: 'Oussama',
      email: 'oussama@amaZone.com',
      password: 'password'
)

Product.destroy_all
product1 = Product.create(
      product_name: 'Samsung A71',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 479.49,
      category_id: 1,
      seller_id: 2,

)
# file1 = open('https://amazone-seeds.s3.amazonaws.com/a71.jpg')
# product1.photo.attach(io: file1, filename: 'a71.jpg')


product2 = Product.create(
      product_name: 'Samsung S20 Ultra',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 800.49,
      category_id: 1,
      seller_id: 3,

)
# file2 = open('https://amazone-seeds.s3.amazonaws.com/s20_ultra.jpg')
# product2.photo.attach(io: file2, filename: 's20_ultra.jpg')

product3 = Product.create(
      product_name: 'Huawei P30 Pro',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 760.49,
      category_id: 1,
      seller_id: 3,

)
# file3 = open('https://amazone-seeds.s3.amazonaws.com/huawei_p30_pro.jpg')
# product3.photo.attach(io: file3, filename: 'huawei_p30_pro.jpg')


product4 = Product.create!(
      product_name: 'Huawei Mate 30',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 900.49,
      category_id: 1,
      seller_id: 3,

)
# file4 = open('https://amazone-seeds.s3.amazonaws.com/mate_30.jpg')
# product4.photo.attach(io: file4, filename: 'mate_30.jpg')
