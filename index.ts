import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { helloMock } from './controllers/EncodeCampaignUrlController';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return helloMock(event);
}

export const blah = () => {
  return true;
}
