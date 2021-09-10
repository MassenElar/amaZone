# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'open-uri'

User.destroy_all
Product.destroy_all
demoUser = User.create(
      username: 'Oussama',
      email: 'oussama@amaZone.com',
      password: 'password'
)


product1 = Product.create(
      product_name: 'Samsung A71',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 479.49,
      product_category: "Smart Phone",
      seller_id: 2,

)
file1 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/a71.jpg')
product1.photo.attach(io: file1, filename: 'a71.jpg')


product2 = Product.create(
      product_name: 'Samsung S20 Ultra',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 800.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file2 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/s20_ultra.jpg')
product2.photo.attach(io: file2, filename: 's20_ultra.jpg')

product3 = Product.create(
      product_name: 'Huawei P30 Pro',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 760.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file3 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/huawei_p30_pro.jpg')
product3.photo.attach(io: file3, filename: 'huawei_p30_pro.jpg')


product4 = Product.create!(
      product_name: 'Huawei Mate 30',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 900.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file4 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/mate_30.jpg')
product4.photo.attach(io: file4, filename: 'mate_30.jpg')




product5 = Product.create(
      product_name: 'Samsung A71',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 479.49,
      product_category: "Smart Phone",
      seller_id: 2,

)
file5 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/a71.jpg')
product5.photo.attach(io: file5, filename: 'a71.jpg')


product6 = Product.create(
      product_name: 'Samsung S20 Ultra',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 40,
      product_price: 800.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file6 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/s20_ultra.jpg')
product6.photo.attach(io: file6, filename: 's20_ultra.jpg')

product7 = Product.create(
      product_name: 'Huawei P30 Pro',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 760.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file7 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/huawei_p30_pro.jpg')
product7.photo.attach(io: file7, filename: 'huawei_p30_pro.jpg')


product8 = Product.create!(
      product_name: 'Huawei Mate 30',
      product_description: 'Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels
            Memory: 128GB 6GB RAM - Up to 512GB microSDXC
            Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
            OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
                  International Variant/US Compatible LTE',
      product_inventory: 23,
      product_price: 900.49,
      product_category: "Smart Phone",
      seller_id: 3,

)
file8 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/mate_30.jpg')
product8.photo.attach(io: file8, filename: 'mate_30.jpg')
# rm = RestClient.get "https://amazon24.p.rapidapi.com/api/product?keyword=smart%20phones&country=US&page=1&rapidapi-key=09dd4e2194msh9755f661cf6a433p1f0588jsnb19ace1119cd"
# rm_array = JSON.parse(rm)["docs"]
# User.destroy_all
# Product.destroy_all

# rm_array.each do |product| 
#   Product.create!(
#     product_name: product["product_title"],
#     product_description: "Display: 6.7 inches Super AMOLED capacitive touchscreen w/ Corning Gorilla Glass 3, Resolution: 1080 x 2400 pixels Memory: 128GB 6GB RAM - Up to 512GB microSDXC Main Camera: Quad 64 MP PDAF + 12 MP + 5 MP dedicated macro camera + 5 MP depth sensor - Selfie Camera: 32 MP w/ HDR
#       OS: Android - Chipset: Qualcomm SDM730 Snapdragon 730 - Graphics: Adreno 618 - Processor: Octa-core 2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver
#       International Variant/US Compatible LTE',",
#     product_inventory: 20,
#     product_price: product["app_sale_price"].to_f,
#     seller_id: 1,
#     product_category: "Smart Phones",
#   )
# end

# tv = RestClient.get "https://amazon24.p.rapidapi.com/api/product?keyword=smart%20TV&country=US&page=1&rapidapi-key=09dd4e2194msh9755f661cf6a433p1f0588jsnb19ace1119cd"
# tv_array = JSON.parse(tv)["docs"]
# User.destroy_all
# Product.destroy_all

# tv_array.each do |product| 
#   Product.create!(
#     product_name: product["product_title"],
#     product_description: "REAL 4K NANOCELL DISPLAY: Bring your favorite shows to life with bright, vivid NanoCell. Local dimming brings you deep blacks and more balanced lighting. And with Nano Color, you'll see natural, lifelike picture enhanced by a billion rich colors.
# QUAD CORE PROCESSOR 4K: Our Quad Core Processor 4K gives you a smooth, crisp viewing experience with enhanced contrast, color and blacks.
# HOME CINEMA EXPERIENCE: See and feel like you're in the action with Active HDR. See movies exactly how directors intended with Filmmaker Mode.And with built-in access to Netflix, Prime Video, Apple TV+, Disney+ and LG channels, your favorite content is at your fingertips.
# ULTIMATE GAMEPLAY: Gameplay goes even further with Game Optimizer which gives you easier access to all your game settings, Auto Low-Latency Mode and dynamic gaming of HGiG.
# THINQ AI: Control your LG smart products and other smart devices right from your TV with Home Dashboard or with the Magic Remote voice control. ThinQ AI plus Google Assistant and Alexa built-in let you control your entire connected home.",
#     product_inventory: 20,
#     product_price: product["app_sale_price"].to_f,
#     seller_id: 2,
#     product_category: "Smart TVs",
#   )
# end

# tool = RestClient.get "https://amazon24.p.rapidapi.com/api/product?keyword=tool%20set&country=US&page=1&rapidapi-key=09dd4e2194msh9755f661cf6a433p1f0588jsnb19ace1119cd"
# tool_array = JSON.parse(tool)["docs"]
# User.destroy_all
# Product.destroy_all

# tool_array.each do |product| 
#   Product.create!(
#     product_name: product["product_title"],
#     product_description: "Unisex 148-Piece Hand Tools Kit - Ideal for home and garage repairs
# Heat treated and chrome plated to resist corrosion. Contains the tools needed for most small repairs around the house
# Securely housed in a handy blow molded case. All tools meet or exceed critical standards
# 9pcs 1/4 socket: 3/16-1/4-9/32-5/16-11/32-3/8-7/16-15/32-1/2
# 5pcs combination wrench: 1/2, 3/8, 5/8, 5/16, 9/16",
#     product_inventory: 20,
#     product_price: product["app_sale_price"].to_f,
#     seller_id: 3,
#     product_category: "Tool Sets",
#   )
# end



