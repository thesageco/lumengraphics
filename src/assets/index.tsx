import apparel from './cards/apparel.jpg';
import banners from './cards/banners.jpg';
import business_cards from './cards/business_cards.jpg';
import large_format_printing from './cards/large_format_printing.jpg';
import luminous_signs from './cards/luminous_signs.jpg';
import promotional_products from './cards/promotional_products.jpg';
import vehicle_wraps from './cards/vehicle_wraps.jpg';
import windows_and_walls_graphics from './cards/windows_and_walls_graphics.jpg';

const CardAssets:{ [card_name: string] : string; } = {
  "Apparel": apparel,
  "Banners": banners,
  "Business Cards": business_cards,
  "Large Format Printing": large_format_printing,
  "Luminous Signs": luminous_signs,
  "Promotional Products": promotional_products,
  "Windows & Walls Graphics": windows_and_walls_graphics,
  "Vehicle Wraps": vehicle_wraps,
};

export { CardAssets };