import { PROTOCOL_ERRORS_SYMBOL } from "@apollo/client/errors";
import "dotenv/config";
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://devapi.omnisoft.africa/public/api/v2';
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'https://devapi.omnisoft.africa/public/storage/uploads/visuels/proprietes/';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const COUNTRY = "tg";
export { API_URL, IMAGE_URL, BASE_URL, COUNTRY, RESEND_API_KEY };
