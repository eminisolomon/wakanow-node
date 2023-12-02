import {
  FlightResource,
} from "./Resources";

import {
  Authentication,
} from "./Auth";

import {
  environment,
} from "./Interfaces";

export * from "./Interfaces";
/**
 * Wakanow
 */
export class Wakanow {
  flightResource: FlightResource;
  authentication: Authentication;
  /**
   * @param {String} apiToken - wakanow api token
   * @param {String} environment - api environment
   */
  constructor (environment: environment, apiToken?: string) {
    this.flightResource = new FlightResource(environment, apiToken);
    this.authentication = new Authentication(environment);
  }
}
