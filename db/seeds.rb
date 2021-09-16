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

product5 = Product.create!(
      product_name: 'Lenovo Chromebook Flex 5 13" Laptop, FHD (1920 x 1080) Touch Display, Intel Core i3-10110U Processor, 4GB DDR4 Onboard RAM, 64GB eMMC, Intel Integrated Graphics, Chrome OS, 82B80006UX, Graphite Grey',
      product_description: "With the Lenovo Chromebook Flex 5 laptop, you'll enjoy more productivity with less complexity. This 13-inch Chromebook, powered by 10th Generation Intel Core i3 processors, boasts up to 10 hours of battery life to let you get things done quickly and easily with all your favorite Chromebook features. Powered by Chrome OS and designed to integrate easily with your Google account, just turn it on, log in, and you have access to all your shared files, photos, music, and documents! Of course, productivity is about more than efficiency – it's also about safety. This touchscreen Chromebook updates automatically every six weeks to help protect you from online threats. Plus, the verified boot process looks for malicious changes that might put your data in danger, whether you're working from home or out in the world. Combine that with a battery that lasts up to 10 hours, and you'll always be ready. A great Chromebook for college, work from home, or everyday entertainment, the Chromebook Flex 5 delivers the immersive experience you're looking for. User-facing dual speakers and an LCD with LED backlight (anti-glare) display in full HD, coupled with narrow bezels to minimize screen clutter, let you enjoy streaming video, movies, and more in crisp, clear, and vibrant detail. Fun and intuitive, this touchscreen Chromebook makes it easy to access everything you need; it's also digital pen compatible (digital pen sold separately), so you can write, draw, or drag files with ease. With its convertible laptop design, you can just flip the screen around on its 360 hinge to find the position that's most comfortable for you: Laptop mode, tablet mode, tent mode, and more. Battery life based on testing with PLT (power load test). Battery life varies significantly with settings, usage, and other factors.",
      product_inventory: 23,
      product_price: 365.16,
      product_category: "Laptops",
      seller_id: 4,

)
file5 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/laptop1.jpg')
product5.photo.attach(io: file5, filename: 'laptop1.jpg')

product6 = Product.create!(
      product_name: 'HP 14" Ultra Light Laptop, Intel N4020',
      product_description: "1.1 GHz base frequency, up to 2.8 GHz burst frequency, 4 MB L2 cache, 2 cores. Enjoy a computer with an Intel Celeron processor. Experience Intel performance with entertainment features and fast connectivity. The Intel Celeron processor delivers performance in a new computer that fits your lifestyle and budget. 14`` diagonal HD anti-glare micro-edge, 220 nits, 45% NTSC (1366x768); Intel UHD Graphics 600,on-processor Graphics with Shared video Memory provide everyday image quality for Internet use, basic photo editing and casual gaming.",
      product_inventory: 23,
      product_price: 329.16,
      product_category: "Laptops",
      seller_id: 4,

)
file6 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/laptop2.jpg')
product6.photo.attach(io: file6, filename: 'laptop2.jpg')

product7 = Product.create!(
      product_name: '2020 Apple MacBook Air',
      product_description: "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
Stunning Display – With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.
Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.",
      product_inventory: 23,
      product_price: 949.99,
      product_category: "Laptops",
      seller_id: 4,

)
file7 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/laptop3.jpg')
product7.photo.attach(io: file7, filename: 'laptop3.jpg')


product8 = Product.create!(
      product_name: 'Lenovo IdeaPad 1',
      product_description: "The Lenovo IdeaPad™ 1 is your daily computing companion. Not only does this affordable laptop deliver amazing performance with an Intel® Celeron® processor, but it also features 164 GB M.2 PCIe SSD storage and a 14-inch HD display for great productivity. Browse the internet, stream your favorite shows, chat with family, or get work done on this reliable notebook computer. With a stylish Ice Blue case, this everyday laptop is easy to use and durable, with long battery life to let you handle daily tasks easily.

Great for students, travelers, and those who like to work from home or the local coffee shop, the IdeaPad 1 is lightweight at just over 3 lbs and is less than 1 inch thick, so it's easy to slip into your Lenovo laptop backpack or carrying sleeve. Plus, with up to 8 hours of battery life, you can stay productive no matter where you are! You'll stay connected with integrated WiFi and Bluetooth® while on the go..",
      product_inventory: 23,
      product_price: 255.99,
      product_category: "Laptops",
      seller_id: 2,

)
file8 = open('/Users/ousselar/Desktop/AppAcademy/FullStackAssets/laptop3.jpg')
product8.photo.attach(io: file8, filename: 'laptop3.jpg')



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



