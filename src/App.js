import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainCompnent from './components/MainComp';
import Cards from './components/Cards';



const models={
  "url": "/api/v1/models",
  "total_results": 10,
  "data": [
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1654603511.jpg",
      "v_model_image": "/assets/b_images/main/models/profile/profile1654603511.jpg",
      "v_model_id": 562,
      "v_model_slug": "mt",
      "v_make_id": 49,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "MT-07",
      "v_model_display_name": "Yamaha MT-07",
      "v_model_min_price": "1055000",
      "v_model_max_price": "1055000",
      "v_model_rank": 41,
      "v_model_brochure_url": "",
      "left_image_url": "0",
      "right_image_url": "0",
      "body_type": "Sports",
      "transmission_json": {
        "0": "Manual"
      },
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": "19kmpl",
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-08-07",
      "v_displacement": "847",
      "v_max_power": "115 PS @ 10000 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "yamaha"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1648108837.png",
      "v_model_image": "/assets/b_images/main/models/profile/profile1648108837.png",
      "v_model_id": 11736,
      "v_model_slug": "xsr155",
      "v_make_id": 49,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "XSR155",
      "v_model_display_name": "Yamaha XSR155",
      "v_model_min_price": "140000",
      "v_model_max_price": "140000",
      "v_model_rank": 47,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Naked",
      "transmission_json": [
        "Manual"
      ],
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-08-22",
      "v_displacement": "155",
      "v_max_power": "19.3 PS @ 10000 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": null,
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "yamaha"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1649852947.jpg",
      "v_model_image": "/assets/b_images/main/models/profile/profile1649852947.jpg",
      "v_model_id": 3519,
      "v_model_slug": "bs6-apache-rr-310",
      "v_make_id": 50,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "Apache RR 310",
      "v_model_display_name": "TVS BS6 Apache RR 310",
      "v_model_min_price": "255000",
      "v_model_max_price": "255000",
      "v_model_rank": 50,
      "v_model_brochure_url": "",
      "left_image_url": "0",
      "right_image_url": "0",
      "body_type": "Sports",
      "transmission_json": null,
      "fuel_json": null,
      "v_model_competitor": "8841|8840|626|5006|625",
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-08-08",
      "v_displacement": "312",
      "v_max_power": "34 PS @ 9700 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "tvs"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1637757697.jpg",
      "v_model_image": "/assets/b_images/main/models/profile/profile1637757697.jpg",
      "v_model_id": 10909,
      "v_model_slug": "shotgun-650",
      "v_make_id": 51,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "Shotgun 650",
      "v_model_display_name": "Royal Enfield Shotgun 650",
      "v_model_min_price": "300000",
      "v_model_max_price": "300000",
      "v_model_rank": 59,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Cruiser",
      "transmission_json": [
        "Manual"
      ],
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-07-23",
      "v_displacement": "648",
      "v_max_power": "47 bhp",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "<p>We expect the RE Shotgun 650 to be launched in the Indian market by July this year. One of the promising bikes from the Indian bikemaker, the Shotgun will be a comfortable tourer for long distance journeys. Powered by a 648 cc motor, this bike will be quite heavy but will be rich in features that will come in handy for the consumers</p>\r\n\r\n<p><strong>Engine Options</strong></p>\r\n\r\n<p>RE Shotgun 650 is powered by a 648 cc, parallel-twin DOHC engine that makes 47 hp of power with a peak torque of 52 Nm. It gets mated to a six-speed manual transmission and gets a slipper clutch. The bikemaker will bring in tubeless tyres with the Shotgun 650 and even the alloy wheels spied on several occasions looks good.</p>\r\n\r\n<p><strong>Design And Features</strong></p>\r\n\r\n<p>The Shotgun 650 features a low-slung layout with wide handlebars that will give the rider a comfortable position for long distance journeys. The front-stepped foot pegs and wider rear tyre support also aids to the positives. Feature-wise, we do expect LED projector headlight, LED taillight, semi-digital instrument console, Bluetooth connectivity, 5-spoke alloy wheels, twin-pod instrument cluster and more.&nbsp;&nbsp;</p>",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "royalenfield"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1648108026.png",
      "v_model_image": "/assets/b_images/main/models/profile/profile1648108026.png",
      "v_model_id": 11727,
      "v_model_slug": "tnt-300",
      "v_make_id": 69,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "TNT 300",
      "v_model_display_name": "Benelli TNT 300",
      "v_model_min_price": "350000",
      "v_model_max_price": "350000",
      "v_model_rank": 61,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Naked",
      "transmission_json": [
        "Manual"
      ],
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-07-23",
      "v_displacement": "300",
      "v_max_power": "38.26 PS @ 11500rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": null,
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "benelli"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1641460257.jpg",
      "v_model_image": "/assets/b_images/main/models/profile/profile1641460257.jpg",
      "v_model_id": 11227,
      "v_model_slug": "f77",
      "v_make_id": 333,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "F77",
      "v_model_display_name": "Ultraviolette F77",
      "v_model_min_price": "300000",
      "v_model_max_price": "300000",
      "v_model_rank": 70,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Naked",
      "transmission_json": [
        "Manual"
      ],
      "fuel_json": [
        "Electric"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-06-20",
      "v_displacement": "",
      "v_max_power": "",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "130-150",
      "charging_time": "1.5 Hours",
      "is_ev": 1,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": null,
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "ultraviolette"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1629642184.png",
      "v_model_image": "/assets/b_images/main/models/profile/profile1629642184.png",
      "v_model_id": 9892,
      "v_model_slug": "k-ninja-400",
      "v_make_id": 60,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "Ninja 400",
      "v_model_display_name": "Kawasaki Ninja 400",
      "v_model_min_price": "600000",
      "v_model_max_price": "600000",
      "v_model_rank": 71,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Sports",
      "transmission_json": null,
      "fuel_json": null,
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-12-21",
      "v_displacement": "399",
      "v_max_power": "49 PS @ 1000 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "<p>We expect Kawasaki India to launch the Ninja 400 by early next year. It will be offered with an updated colour option and features. Once launched, it will rival with <a href=\"https://www.91wheels.com/bikes/honda/cbr500r\">Honda CBR500R</a> which is expected to be launched in the Indian market by Dec&rsquo;22.&nbsp;</p>\r\n\r\n<p><strong>Engine Options</strong></p>\r\n\r\n<p>The Ninja 400 will be offered with a 399cc parallel twin motor that generates as much as 44 bhp of power with a peak torque of 37 Nm. The power figure remains unchanged and the torque has now gone down by 1 Nm in the newer model. This engine is mated to a six-speed manual transmission and gets a slipper clutch.&nbsp;</p>\r\n\r\n<p><strong>Design And Suspendion</strong></p>\r\n\r\n<p>The overall design of the bike remains the same but the bikemaker has introduced a new colour scheme &ndash; dual-tone green and black shade. The Ninja 400 uses 310 mm disc at the front and 220 mm disc at the rear. It gets 41mm telescopic front suspension and a pre-adjustable monoshock at the rear.&nbsp;</p>\r\n\r\n<p><strong>Price And Launch</strong></p>\r\n\r\n<p>It is already launched in the global markets and we expect it to be priced at Rs 6 lakh, ex-showroom, Delhi. The official timeline of the launch has not been revealed by Kawasaki India yet.&nbsp;</p>",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "kawasaki"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1646459228.JPG",
      "v_model_image": "/assets/b_images/main/models/profile/profile1646459228.JPG",
      "v_model_id": 11658,
      "v_model_slug": "cbr150r",
      "v_make_id": 48,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "CBR150R",
      "v_model_display_name": "Honda CBR150R",
      "v_model_min_price": "170000",
      "v_model_max_price": "170000",
      "v_model_rank": 79,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Sports",
      "transmission_json": [
        "Manual"
      ],
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-10-05",
      "v_displacement": "149.16",
      "v_max_power": "17.1 PS @ 9000 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": null,
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "honda"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1649852994.jpg",
      "v_model_image": "/assets/b_images/main/models/profile/profile1649852994.jpg",
      "v_model_id": 8310,
      "v_model_slug": "zeppelin",
      "v_make_id": 50,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "Zeppelin",
      "v_model_display_name": "TVS Zeppelin",
      "v_model_min_price": "150000",
      "v_model_max_price": "150000",
      "v_model_rank": 100,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Cruiser",
      "transmission_json": null,
      "fuel_json": null,
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-07-28",
      "v_displacement": "",
      "v_max_power": "",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "<p><strong>Last Updated On 13th Jun&#39;22:</strong> This upcoming bike from TVS Motors, Zeppelin R will be one of the most affordable cruiser motorcycles in the country. Featuring a low-slung design with wider seat, the TVS Zeppelin R is surely a looker in its segment It rivals with Jawa 42, Yezdi Roadster S and RE Meteor.&nbsp;</p>\r\n\r\n<p><strong>Engine Options</strong></p>\r\n\r\n<p>TVS Zeppelin R will be powered by a 220cc, single-cylinder motor that generates 18 bhp of power with a peak torque of 18.5 Nm. What&rsquo;s interesting is that the Zeppelin R will witness the support of a mild-hybrid tech which is the first-in segment. The rear suspension of the bike uses a single monoshock unit for supreme ride quality.&nbsp;</p>",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 1,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "tvs"
      }
    },
    {
      "profile_image_url": "/assets/b_images/main/models/profile/profile1630663835.png",
      "v_model_image": "/assets/b_images/main/models/profile/profile1630663835.png",
      "v_model_id": 9900,
      "v_model_slug": "hunter-350",
      "v_make_id": 51,
      "v_type_id": 2,
      "subCategory": 0,
      "v_model_name": "Hunter 350",
      "v_model_display_name": "Royal Enfield Hunter 350",
      "v_model_min_price": "205000",
      "v_model_max_price": "215000",
      "v_model_rank": 104,
      "v_model_brochure_url": null,
      "left_image_url": null,
      "right_image_url": null,
      "body_type": "Cruiser",
      "transmission_json": null,
      "fuel_json": [
        "Petrol"
      ],
      "v_model_competitor": null,
      "v_mileage": null,
      "v_model_status": 3,
      "is_deleted": 0,
      "launched_date": "2022-09-11",
      "v_displacement": "349",
      "v_max_power": "20.4 PS @ 6100 rpm",
      "is_expected_launch": 1,
      "is_expected_price": 0,
      "v_model_description": "<p><strong>Royal Enfield Hunter 350 Overview</strong></p>\r\n\r\n<p>Royal Enfield will soon expand its lineup of 350cc neo-retro motorcycles with an all-new sub-brand, which is likely to be named Hunter. The new Royal Enfield Hunter 350 has spied doing test runs on Indian roads in semi-covered forms, which indicate that the motorcycle has an all-new design with expectedly the same engine as that of the Classic 350 and Meteor 350. This bike will primarily rival the Honda CB350RS and the Yezdi Scrambler.&nbsp;<br />\r\n<br />\r\n<strong>2022 Royal Enfield Hunter 350 Design</strong><br />\r\n<br />\r\nCompared to the Classic 350 and Meteor 350, which have a more cruiser-like persona, the Royal Enfield Hunter 350 has a more upright roadster-like stance which is very much like the Interceptor 650. However, going by the spy pictures, the Hunter 350 will have a lot of neo-retro influence in its design, with highlights such as a round-themed halogen headlamp, turn indicators and tail lamp, tear-drop shaped fuel tank, round-edge side body panels and a nicely curved long seat. The handlebar will be slightly more upright, and like the Meteor 350, it is expected to come with alloy wheels as standard. The alloy wheels and engine are expected to have an all-black theme. Alloy wheels also mean this bike will have tubeless tyres, something missing on some of the other Enfield models that are on sale in India. The motorcycle is likely to have the same dual-pod instrument console from the Meteor 350, with one of them accommodating the &lsquo;Tripper&rsquo; navigation system.<br />\r\n<br />\r\n<strong>2022 Royal Enfield Hunter 350 Mechanicals</strong><br />\r\n<br />\r\nWhile the new Hunter 350 will be a radical departure from the Classic 350 and Meteor 350 by design, it will have the same engine as the other two motorcycles. The new four-stroke, single-cylinder, liquid-cooled, 349.34cc engine produces 20.2 PS of power and 27 Nm of torque in the Classic 350 and Meteor 350. The company might tune the bike different for a peppier ride, something that its rivals offer. A 5 speed gearbox will be standard. We hope it sounds better than the Classic / Meteor 350 as well.&nbsp;&nbsp;<br />\r\n<br />\r\n<strong>2022 Royal Enfield Hunter 350 Price and Launch</strong><br />\r\n<br />\r\nRoyal Enfield has been testing the Hunter 350 for quite a long time now, and the spy pictures also suggest that the motorcycle has reached the final stages of testing. In Royal Enfield&rsquo;s lineup, the Hunter 350 will be positioned in between the Classic 350 and Meteor 350, which indicates a price range of Rs 2-2.5 lakh for the motorcycle. It will rub shoulders with the Yezdi Scrambler and the Honda CB350RS&nbsp;</p>",
      "electric_range": "",
      "charging_time": "",
      "is_ev": 0,
      "has_serviceCost": 0,
      "has_accessories": 0,
      "battery_capacity": "",
      "p_model_id": 0,
      "MakeSchema": {
        "v_make_slug": "royalenfield"
      }
    }
  ],
  "reviews": {},
  "rating": {}
}
function App() {
  return (
    <div className="App">
      <h1>React js </h1>
      {/* <Header data="1" />
      <MainCompnent/>
      <Footer/> */}

      
<div class="main">
        <div class="card_outer">
           <h1>cars</h1>
                  {
          (models.data && models.data.map((item)=>{
            return (
              <>
                <div className='for_flex'>
                <Cards data={item} />
                </div>
              </>
            )
          }))
        }
     <h2>view mmore</h2>
               
        </div>
    </div>

    </div>
  );
}

export default App;
