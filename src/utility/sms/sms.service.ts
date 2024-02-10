import { AxiosRequestHeaders } from 'axios';
import { Injectable } from "@nestjs/common";
import { sendRequest } from "../request.utility";

@Injectable()
export class SmsService {

  apiKey = process.env.SMS_API_KEY;
  url = process.env.SMS_URL;
  // template = process.env.SMS_TEMPLATE;

  async sendOtp(code: string[], receptor: string, template: string): Promise<any> {

    let data = {
      receptor,
      type: '1',
      template,
    }

    for (const [key, value] of code.entries()) {
      data['param' + (key + 1)] = value
    }


    const headers = {
      apiKey: this.apiKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    
    const result = await sendRequest('post', headers, this.url, data);
    return result && result.status == 200;
  }
}