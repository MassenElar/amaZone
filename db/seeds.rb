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

# Smart Phones
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
file1 = URI.open('https://amazone-seeds.s3.amazonaws.com/a71.jpg')
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
file2 = URI.open('https://amazone-seeds.s3.amazonaws.com/s20_ultra.jpg')
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
file3 = URI.open('https://amazone-seeds.s3.amazonaws.com/huawei_p30_pro.jpg')
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
file4 = URI.open('https://amazone-seeds.s3.amazonaws.com/mate_30.jpg')
product4.photo.attach(io: file4, filename: 'mate_30.jpg')

product41 = Product.create!(
      product_name: 'Iphone 12',
      product_description: 'Display: 6.7 6.1-inch Liquid Retina HD display with True Tone. All-glass and aluminum design, water and dust resistant rated IP68. Dual 12MP cameras with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K video up to 60 fps. 12MP TrueDepth front camera with Portrait mode, Depth Control, Portrait Lighting, and Smart HDR. International Variant/US Compatible LTE',
      product_inventory: 50,
      product_price: 544.00,
      product_category: "Smart Phone",
      seller_id: 3,

)
file41 = URI.open('https://amazone-seeds.s3.amazonaws.com/iphone12.jpg')
product41.photo.attach(io: file41, filename: 'iphone12.jpg')


product51 = Product.create!(
      product_name: 'Iphone 12 Pro Max',
      product_description: 'Fully unlocked and compatible with any carrier of choice e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.. The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm`s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. Tested for battery health and guaranteed to have a minimum battery capacity of 80%.',
      product_inventory: 50,
      product_price: 900.99,
      product_category: "Smart Phone",
      seller_id: 3,
)

file51 = URI.open('https://amazone-seeds.s3.amazonaws.com/phone51.jpg')
product51.photo.attach(io: file51, filename: 'phone51.jpg')

# Laptops

product5 = Product.create!(
      product_name: 'Lenovo Chromebook Flex 5 13" Laptop',
      product_description: "With the Lenovo Chromebook Flex 5 laptop, you'll enjoy more productivity with less complexity. This 13-inch Chromebook, powered by 10th Generation Intel Core i3 processors, boasts up to 10 hours of battery life to let you get things done quickly and easily with all your favorite Chromebook features. Powered by Chrome OS and designed to integrate easily with your Google account, just turn it on, log in, and you have access to all your shared files, photos, music, and documents! Of course, productivity is about more than efficiency – it's also about safety. This touchscreen Chromebook updates automatically every six weeks to help protect you from online threats. Plus, the verified boot process looks for malicious changes that might put your data in danger, whether you're working from home or out in the world. Combine that with a battery that lasts up to 10 hours, and you'll always be ready. A great Chromebook for college.",
      product_inventory: 23,
      product_price: 365.16,
      product_category: "Laptops",
      seller_id: 4,

)
file5 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop1.jpg')
product5.photo.attach(io: file5, filename: 'laptop1.jpg')

product6 = Product.create!(
      product_name: 'HP 14" Ultra Light Laptop, Intel N4020',
      product_description: "1.1 GHz base frequency, up to 2.8 GHz burst frequency, 4 MB L2 cache, 2 cores. Enjoy a computer with an Intel Celeron processor. Experience Intel performance with entertainment features and fast connectivity. The Intel Celeron processor delivers performance in a new computer that fits your lifestyle and budget. 14`` diagonal HD anti-glare micro-edge, 220 nits, 45% NTSC (1366x768); Intel UHD Graphics 600,on-processor Graphics with Shared video Memory provide everyday image quality for Internet use, basic photo editing and casual gaming.",
      product_inventory: 23,
      product_price: 329.16,
      product_category: "Laptops",
      seller_id: 4,

)
file6 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop2.jpg')
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
file7 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop3.jpg')
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
file8 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop4.jpg')
product8.photo.attach(io: file8, filename: 'laptop4.jpg')

product81 = Product.create!(
      product_name: 'HP Pavilion 15',
      product_description: "POWERFUL PERFORMANCE: The HP Pavilion Laptop is powered with the latest 10th Gen Intel Quad-Core i5-1035G1 Processor (Eight-way processing, Up to 3.6GHz) and 16GB high-bandwidth DDR4 memory, powerful processing for advanced multitasking, demanding computing, smooth gaming, multiple tabs browsing, and everyday tasks. 512GB PCIe NVMe M.2 SSD (15x faster than HDD, stay cool and quiet) offers ample storage, quick boot-up times, fast data access, and improves the overall performance",
      product_inventory: 23,
      product_price: 899.99,
      product_category: "Laptops",
      seller_id: 2,

)
file81 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop81.jpg')
product81.photo.attach(io: file81, filename: 'laptop81.jpg')

product82 = Product.create!(
      product_name: 'Dell Xps',
      product_description: "POWERFUL PERFORMANCE: The Dell Xps Laptop is powered with the latest 10th Gen Intel Quad-Core i5-1035G1 Processor (Eight-way processing, Up to 3.6GHz) and 16GB high-bandwidth DDR4 memory, powerful processing for advanced multitasking, demanding computing, smooth gaming, multiple tabs browsing, and everyday tasks. 512GB PCIe NVMe M.2 SSD (15x faster than HDD, stay cool and quiet) offers ample storage, quick boot-up times, fast data access, and improves the overall performance",
      product_inventory: 23,
      product_price: 1699.99,
      product_category: "Laptops",
      seller_id: 2,

)
file82 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop82.jpg')
product82.photo.attach(io: file82, filename: 'laptop82.jpg')

product83 = Product.create!(
      product_name: 'HP Pavilion 15',
      product_description: "Thin, light, and stylish – This 2-in-1 laptop weighs just 3.64 pounds and is only 0.82 inch thick. It's soft and comfortable to the touch, with a durable paint that creates a better user experience. Digital pen included. The 10-point, 14-inch FHD 1920 x 1080 IPS touchscreen allows the Lenovo Flex 5 14 inch 2-in-1 laptop to be comfortable, fun, and easy to use. It's also great to look at, with 4-side narrow bezels",
      product_inventory: 23,
      product_price: 899.99,
      product_category: "Laptops",
      seller_id: 2,

)
file83 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop83.jpg')
product83.photo.attach(io: file83, filename: 'laptop83.jpg')

product84 = Product.create!(
      product_name: 'Lenovo Flex 5',
      product_description: "Thin, light, and stylish – This 2-in-1 laptop weighs just 3.64 pounds and is only 0.82 inch thick. It's soft and comfortable to the touch, with a durable paint that creates a better user experience. Digital pen included. The 10-point, 14-inch FHD 1920 x 1080 IPS touchscreen allows the Lenovo Flex 5 14 inch 2-in-1 laptop to be comfortable, fun, and easy to use. It's also great to look at, with 4-side narrow bezels",
      product_inventory: 23,
      product_price: 698.99,
      product_category: "Laptops",
      seller_id: 2,

)
file84 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop84.jpg')
product84.photo.attach(io: file84, filename: 'laptop84.jpg')

product85 = Product.create!(
      product_name: 'Lenovo Ideapad 3 ',
      product_description: "AMD Ryzen 5 5500U 6-Core, 2.1GHz Up to 4.0 GHz, 8 MB Cache. Equipped with AMD Ryzen 5 5500U processor, up to 12 Hours long battery life, and speedy connectivity. 15.6” FHD Display 15.6 inch Full HD (1920x1080) LED Anti-Glare Display. Watch what you love in all its clarity with detail and saturated colors from edge to edge thanks to the 15.6 inch FHD display.laptopUpgraded to 20GB RAM Adequate high-bandwidth RAM to smoothly run multiple applications and browser tabs at the same time. It gives you enormous space to save all of your files. Enhance the overall performance of the laptop for business, student, daily usage.",
      product_inventory: 23,
      product_price: 719.99,
      product_category: "Laptops",
      seller_id: 2,

)
file85 = URI.open('https://amazone-seeds.s3.amazonaws.com/laptop85.jpg')
product85.photo.attach(io: file85, filename: 'laptop85.jpg')

# Smart TVs

product9 = Product.create!(
      product_name: 'SAMSUNG UHD AU8000 Series',
      product_description: "Take your Smart TV viewing to amazing new heights and step into the world of Crystal UHD with the super slim, minimalistic Samsung 85-inch AU8000 Crystal UHD 4K HDR Smart TV with 3 HDMI ports. Elevated, lifelike clarity offers you a picture that has to be seen to be believed, thanks to the dynamic Crystal Processor 4K that delivers vibrant, picture-perfect viewing. Add in Smart features that make watching even easier¹. Ask more from your TV with multiple built-in voice assistants. Choose from Alexa², Google Assistant³, and Bixby Voice⁴ to help you search for movies, change the channel, adjust the volume and more. Dive into shows and films, and watch in striking detail with this Samsung Smart TV powered by HDR10+, while experiencing smooth performance with the Motion Xcelerator. Adaptive sound ensures that you get the perfect audio experience, automatically adjusting the sound to enhance dialogue, music and sports so that you can hear every detail.",
      product_inventory: 23,
      product_price: 1755.99,
      product_category: "Smart Tvs",
      seller_id: 4,

)
file9 = URI.open('https://amazone-seeds.s3.amazonaws.com/tv1.jpg')
product9.photo.attach(io: file9, filename: 'tv1.jpg')



product10 = Product.create!(
      product_name: 'Insignia NS-39DF310NA21',
      product_description: "Insignia HD Smart TV is a new generation of television featuring the Fire TV experience built-in and including a Voice Remote with Insignia delivers a superior TV experience that gets smarter everyday. The Voice Remote with Alexa lets you do everything you'd expect from a remote—plus, easily launch apps, search for titles, play music, switch inputs, control smart home devices, and more, using just your voic",
      product_inventory: 23,
      product_price: 260.99,
      product_category: "Smart Tvs",
      seller_id: 4,

)
file10 = URI.open('https://amazone-seeds.s3.amazonaws.com/tv2.jpg')
product10.photo.attach(io: file10, filename: 'tv2.jpg')




product11 = Product.create!(
      product_name: 'TCL 40-inch 1080p Smart LED',
      product_description: "The 3-Series Full HD TCL Roku TV puts all your entertainment favorites in one place, allowing seamless access to over 500,000 movies and TV episodes, your cable box, gaming console, and other devices—all from your simple, intuitive interface. The super-simple remote and dual-band Wi-Fi make it fast and easy to access your favorite content in Full HD. Connect all your favorite devices with the three HDMI inputs. The built-in TV tuner makes this the ultimate cord-cutting TV as it also gives you the ability to access free, over-the-air HD content.",
      product_inventory: 23,
      product_price: 258.99,
      product_category: "Smart Tvs",
      seller_id: 4,

)
file11 = URI.open('https://amazone-seeds.s3.amazonaws.com/tv3.jpg')
product11.photo.attach(io: file11, filename: 'tv3.jpg')




product12 = Product.create!(
      product_name: 'Hisense 32-Inch Class H4 Series',
      product_description: "For binge-waters on a budget, be sure to call your spot on the couch. The H4 is born ready with the built-in Roku TV platform, your private portal to more than 4,000+ channels and 500,000 movies and TV episodes. So, no matter how many people you have in your house, there are more than enough must-sees and OMGs to go around. Plus, to make the decision even more comfortable, Hisense made the H4 even simpler. It's packed with built-in Wi-Fi and faster search--just connect to the internet, activate, and find your favorite show. With a rich picture and smart features made so easily attainable, it's hard not to love the H4.",
      product_inventory: 23,
      product_price: 169.99,
      product_category: "Smart Tvs",
      seller_id: 6,

)
file12 = URI.open('https://amazone-seeds.s3.amazonaws.com/tv4.jpg')
product12.photo.attach(io: file12, filename: 'tv4.jpg')

# Smart Watches

product13 = Product.create!(
      product_name: 'Smart Watch for Women, AGPTEK',
      product_description: "1.3' 33mm touch screen covered with an aluminum alloy frame, so elegant and light to wear, but sturdy and anti-scratch. The smart watch contains 5 dials readily available to choose from along with another 30 more dials within the app. You can also customize your watch faces. It can be any photo, such as your family, pet ,etc. NOTE: When there is a software update prompt on the APP, it is recommended to upgrade to the latest software version for a better experience!",
      product_inventory: 23,
      product_price: 69.99,
      product_category: "Smart Watches",
      seller_id: 6,

)
file13 = URI.open('https://amazone-seeds.s3.amazonaws.com/watch1.jpg')
product13.photo.attach(io: file13, filename: 'watch1.jpg')


product14 = Product.create!(
      product_name: 'Smart Watches for Women, AOKESI',
      product_description: "TRUE INTELLIGENT INTERACTION - The Real 1 smart watches for women use Amazon Alexa built-in to get quick news and information, check the weather and Amazon shopping list, read Wikipedia, your heart rate, blood oxygen, steps, distance, calories burned and other data, set timers and alarms, control your smart home devices, start exercise and more all through the sound of your voice.",
      product_inventory: 23,
      product_price: 50.99,
      product_category: "Smart Watches",
      seller_id: 6,

)
file14 = URI.open('https://amazone-seeds.s3.amazonaws.com/watch2.jpg')
product14.photo.attach(io: file14, filename: 'watch2.jpg')



product15 = Product.create!(
      product_name: 'Willful Smart Watch',
      product_description: "Compatible with most iOS 8.0 & Android 4.4 above smartphones. Download and install Free VeryFitPro APP, bind this smartwatch in your cell phone,you can receive alerts of calendar, SMS, incoming calls and SNS (Facebook, WhatsApp, LinkedIn, Instagram, Twitter and more) on this watch;It will never let you miss any important things.",
      product_inventory: 23,
      product_price: 39.99,
      product_category: "Smart Watches",
      seller_id: 6,

)
file15 = URI.open('https://amazone-seeds.s3.amazonaws.com/watch3.jpg')
product15.photo.attach(io: file15, filename: 'watch3.jpg')




product16 = Product.create!(
      product_name: 'CanMixs Smart Watch',
      product_description: "Waterproof Smart watch has a handsome design,with its square display and full touch 1.4 inch colorful screen,which has 240*240 pixels resolution make the screen clear and bright.The case of bluetooth smart watch is made of metal. The display screen will be lightened up automatically while lifting the wrist.Digital watch has many face, you can even set your own photo as the face skins freely.Smart watch has a gold strap and an extra silicone pink strap.",
      product_inventory: 23,
      product_price: 70.99,
      product_category: "Smart Watches",
      seller_id: 6,

)
file16 = URI.open('https://amazone-seeds.s3.amazonaws.com/watch4.jpg')
product16.photo.attach(io: file16, filename: 'watch4.jpg')



# Tablette 
product100 = Product.create!(
      product_name: 'SAMSUNG Galaxy Tab S7 ',
      product_description: "PC PERFORMANCE. TABLET PORTABILITY: Transform your tablet into a PC experience with DeX mode and the optional keyboard¹ with expanded trackpad.Keyboard sold separately. ENTERTAINMENT, UPGRADED: Experience cinematic viewing with larger edge-to-edge displays, TFT LCD screen, and AKG quad speakers with Dolby Atmos Surround sound. REDESIGNED S PEN INCLUDED: With improved 9ms Pen latency, the redesigned S Pen can control presentations and take notes effortlessly.",
      product_inventory: 23,
      product_price: 649.88,
      product_category: "Tablettes",
      seller_id: 6,

)
file100 = URI.open('https://amazone-seeds.s3.amazonaws.com/tab1.jpg')
product100.photo.attach(io: file100, filename: 'tab1.jpg')

product101 = Product.create!(
      product_name: 'Samsung Galaxy Tab A7',
      product_description: "SLIM, STYLISH DESIGN: Stream and browse on a 10.4-inch ultra-widescreen display designed to bring your content to life without weighing you down. The front-facing, landscape-oriented camera allows you to transition between entertainment and video calls seamlessly. DOLBY ATMOS SURROUND SOUND: With an enhanced quad speaker system that plays everything in Dolby Atmos surround sound, you’ll always feel like you’re listening from the front row.",
      product_inventory: 23,
      product_price: 179.88,
      product_category: "Tablettes",
      seller_id: 6,

)
file101 = URI.open('https://amazone-seeds.s3.amazonaws.com/tab2.jpg')
product101.photo.attach(io: file101, filename: 'tab2.jpg')

product102 = Product.create!(
      product_name: 'MEBERRY 10 inch',
      product_description: "PACKAGE INCLUDES M7 tablet | Case for tablet 2-1 | Bluetooth keyboard | 2.4G wireless mouse | Type-C to USB Adapter | Protective film | Capacitive pen | Instruction manual | USA standard charger | Type C Data Cable - MEBERRY M7Android Tablet is the best gift for your lover ANDROID 10.0 4 GB RAM MEBERRY 10.1-inch tablet with integrated 4 GB operating memory and 64 GB storage memory - up to 128 GB (4--128 GB, applicable), screen resolution 1280x800 IPS and support 8000 mAh battery 7-8 hours video playback (720P and 1080P); 5.0 + 8.0 MP camera support, tablet with dual stereo speakers and fast-transmitting Type C data interface support, TF Card | WIFI | GPS accurate | Bluetooth 4.0 support",
      product_inventory: 23,
      product_price: 150.88,
      product_category: "Tablettes",
      seller_id: 6,

)
file102 = URI.open('https://amazone-seeds.s3.amazonaws.com/tab3.jpg')
product102.photo.attach(io: file102, filename: 'tab3.jpg')

product103 = Product.create!(
      product_name: 'Microsoft Surface Pro 7',
      product_description: "Next-gen, best-in-class laptop with the versatility of a studio and tablet, so you can type, touch, draw, write, work, and play more naturally Faster than. Surface Pro 6, with a 10th Gen Intel Core Processor – redefining what’s possible in a thin and light computer. More ways to connect, with both USB-C and USB-A ports for connecting to displays, docking stations and more, as well as accessory charging",
      product_inventory: 23,
      product_price: 1700.99,
      product_category: "Tablettes",
      seller_id: 6,

)
file103 = URI.open('https://amazone-seeds.s3.amazonaws.com/tab4.jpg')
product103.photo.attach(io: file103, filename: 'tab4.jpg')


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



