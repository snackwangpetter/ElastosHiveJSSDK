"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadOutputStreamWriter = void 0;
const connectionmanager_1 = require("../../connection/connectionmanager");
class UploadOutputStreamWriter extends OutputStreamWriter {
    constructor(connection, out) {
        super(out);
        this.connection = connection;
    }
    close() {
        super.close();
        connectionmanager_1.ConnectionManager.readConnection(connection);
    }
}
exports.UploadOutputStreamWriter = UploadOutputStreamWriter;
//# sourceMappingURL=uploadoutputstreamwriter.js.map