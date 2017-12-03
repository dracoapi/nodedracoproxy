"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Not very beautiful but this allow to dynamically load the correct deserializer based on the request version.
 * Version is found in headers sent by the client.
 */
class GenericDeserializer {
    constructor(version, buffer) {
        version = version || 'latest';
        const Deserializer = require(`./${version}/deserializer`).default;
        this.internal = new Deserializer(buffer);
    }
    deserialize() {
        return this.internal.deserialize();
    }
}
exports.default = GenericDeserializer;
//# sourceMappingURL=deserializer.js.map