/*
 * Not very beautiful but this allow to dynamically load the correct deserializer based on the request version.
 * Version is found in headers sent by the client.
 */
export default class GenericDeserializer {
    internal: any;
    constructor(version: string, buffer: Buffer) {
        version = version || 'latest';
        const Deserializer = require(`./${version}/deserializer`).default;
        this.internal = new Deserializer(buffer);
    }

    deserialize() {
        return this.internal.deserialize();
    }
}
