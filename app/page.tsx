import Image from "next/image";
import Nav from "./Components/Nav";
import { RiWhatsappFill } from "react-icons/ri";
import Footer from "./Components/Footer";

const ProductsArray = [
  {
    image: "/",
    text: "Logo"
  },
  {
    image: "/",
    text: "Flyers"
  },
  {
    image: "/",
    text: "Banners"
  },
  {
    image: "/",
    text: "Youtube Banners"
  },
]

const OrderArray = [
  {
    icon: "/designIcon.png",
    header: "Get A Design",
    text: "Get a great design for yourself or we can assist you in getting user appealing designs with excellent deliveries."
  },
  {
    icon: "/sendIcon.png",
    header: "Send Your Design",
    text: "Send a printable format of your design depending on what you want to print."
  },
  {
    icon: "/paymentIcon.png",
    header: "Make Payment",
    text: "Make a payment to validate your order and facilitate the printing process."
  },
  {
    icon: "/locationIcon.png",
    header: "Add Location",
    text: "Provide us with a Location to  delivery the printed design otherwise you would want to pick it yourself."
  }
]

export default function Home() {
  return (
    <div className="w-full">
      <Nav />
      <div className="page_body">
        <div className="body_upper flex max-sm:flex-col-reverse">
          <div className="body_upper_left bg-main p-2 pt-[3%] pb-[5%] xl:w-[65%] lg:w-[65%] max-sm:w-full px-12 max-sm:px-6">
            <p className="text-[38px] md:text-[30px] max-sm:text-[24px] font-semibold text-white">YOUR ONE STOP</p>
            <p className="text-[64px] md:text-[55px] max-sm:text-[48px] font-bold text-white">PRINTING</p>
            <p className="text-[64px] md:text-[55px] max-sm:text-[48px] font-bold text-white">SHOP</p>

            <div className="body_upper_phone flex bg-white rounded-xl gap-3 py-1 px-3 w-[55%] justify-center
            items-center max-sm:w-[70%] md:w-[70%]">
              <RiWhatsappFill size={30}/>
              <p className="text-[23px] max-sm:text-[18px] text_bg">+234 705 233 8627</p>
            </div>
          </div>

          <div className="body_upper_right xl:w-[35%] 2xl:w-[35%] lg:w-[35%] md:w-[45%] max-sm:w-full">
            <Image src="/bgImage.png" alt="" 
            width={500}
            height={500}
            quality={100}
            className="w-full object-contain z-30 ml-[-30%] mt-[15%] max-sm:ml-0 max-sm:mt-0 max-sm:p-3"/>
          </div>
        </div>

        <div className="body_lower flex px-12 py-7 max-sm:px-6 max-sm:flex-col max-sm:gap-6">
          <div className="body_lower_left w-1/2 pr-8 max-sm:w-full">
            <p className="text-[36px] text_bg font-bold">Tired of Low quality printing?</p>
          </div>

          <div className="body_lower_right w-1/2 flex justify-end max-sm:w-full">
            <p className="text-[14px] text_bg ">
              At Promax Printing Hub, we are dedicated to delivering
              excellent printing services and delivery to any location.
              we look forward to working with you. <br />
              At Promax Printing Hub, we are dedicated to delivering
              excellent printing services and delivery to any location.
              we look forward to working with you.
            </p>
          </div>
        </div>

        <div className="body_products mt-5 px-12 max-sm:px-6">
          <p className="text-[36px] font-bold text-center text_bg my-2">Products</p>
          <p className="text-center text_bg my-3">We also produce high quality designs ranging from Logos, Flyers, Web3 Designs and more</p>

          <div className="products_container grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-4">
            {ProductsArray.map((product, index) => (
              <div key={index} className="product_container">
                <div className="p-8 image-bg rounded-lg py-16">
                <Image src={product.image} alt="" width={50} height={50} quality={80} />
                </div>
                <p className="text-[16px] font-bold mt-2">{product.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order_now_container px-12 mb-5 max-sm:px-6">
          <p className="text-[36px] font-bold text_bg my-4 text-center">Order Now</p>
          <p className="text-center text_bg my-2">Follow the steps to get your design printed and delivered to you</p>

          <div className="orders_container grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-6">
            {OrderArray.map((order, index) => (
              <div key={index} className="order_container max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="order_icon bg-main rounded-full p-8 lg:py-[25%] md:py-[20%] max-sm:py-12 w-full flex justify-center items-center my-6 max-sm:w-[60%]">
                    <Image src={order.icon} alt="" width={200} height={200} quality={100} className="w-[90%] md:w-[70%] max-sm:w-[70%] object-contain"/>
                </div>
  
                <p className="text-[20px] font-bold text-center my-1 text_bg">{order.header}</p>
                <p className="text-[11px] text-center my-1">{order.text} 
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
